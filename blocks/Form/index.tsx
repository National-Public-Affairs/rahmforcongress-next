import React, { useState, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import type { FormBlockType, Data } from './types';
import { buildInitialFormState } from './buildInitialFormState';
import { fields } from './fields';

import RichText from '@/components/RichText';
import { Button } from './Button';
import classes from './styles.module.scss';

export const FormBlock: React.FC<
  FormBlockType & {
    id?: string;
  }
> = (props) => {
  console.log('FORM PROPS', props.form.fields)
  const {
    enableIntro,
    introContent,
    form: formFromProps,
    form: {
      id: formId,
      submitButtonLabel,
      confirmationType,
      confirmationMessage,
      redirect,
    }
  } = props;
console.log('FORM FROM PROPS', formFromProps.fields)
console.log('INITIAL FORM STATE', buildInitialFormState(formFromProps.fields))
  const formMethods = useForm({
    defaultValues: buildInitialFormState(formFromProps.fields),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    setValue,
    getValues,
  } = formMethods;

  const [isLoading, setIsLoading] = useState(false);
  const [hasSubmitted, setHasSubmitted] = useState<boolean>();
  const [error, setError] = useState<{
    status?: string;
    message: string;
  } | undefined>();
  const router = useRouter();

  const onSubmit = useCallback(
    (data: Data) => {
      const submitForm = async () => {
        setError(undefined);

        const dataToSend = Object.entries(data).map(([name, value]) => ({
          field: name,
          value,
        }));
        console.log('data to send', dataToSend)
        try {
          await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/api/form-submissions`, {
            method: 'POST',
            headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              form: formId,
              submissionData: dataToSend,
            }),
          });

          setIsLoading(false);
          setHasSubmitted(true);

          if (confirmationType === 'redirect' && redirect) {
            const { url } = redirect;

            const redirectUrl = url;

            if (redirectUrl) router.push(redirectUrl);
          }
        } catch (e) {
          console.warn(e);
          setIsLoading(false);
          setError({
            message: 'Something went wrong.',
          });
        }
      }
      submitForm();
    }
  , [router, formId, redirect, confirmationType]);

  return (
    <div
      className={[
        classes.form,
        hasSubmitted && classes.hasSubmitted,
      ].filter(Boolean).join(' ')}
    >
      {
        enableIntro && introContent && !hasSubmitted && (
          <RichText
            className={classes.intro}
            content={introContent}
          />
        )
      }
      {
        !isLoading && hasSubmitted && confirmationType === 'message' && (
          <RichText
            className={classes.confirmationMessage}
            content={confirmationMessage}
          />
        )
      }
      {
        isLoading && !hasSubmitted && <p>Loading, please wait...</p>
      }
      {
        error && (
          <div className={classes.error}>
            {`${error.status || 500}: ${error.message || ''}`}
            <br />
            Please try again.
          </div>
        )
      }
      {
        !hasSubmitted && (
          <form id={formId} onSubmit={handleSubmit(onSubmit)}>
            <div className={classes.fieldWrapper}>
              {
                formFromProps
                && formFromProps.fields
                && formFromProps.fields.map((field, index) => {
                  const Field: React.FC<any> = fields?.[field.blockType];
                  if (Field) {
                    return (
                      <React.Fragment key={index}>
                        <Field
                          form={formFromProps}
                          {...field}
                          {...formMethods}
                          register={register}
                          errors={errors}
                          control={control}
                        />
                      </React.Fragment>
                    );
                  }
                  return null;
                }) 
              }
            </div>

            <Button
              label={submitButtonLabel ? submitButtonLabel : 'Submit'}
              form={formId}
            />
          </form>
        )
      }
    </div>
  );
};

export default FormBlock;
