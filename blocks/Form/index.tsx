import React, { useState, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
import type {
  FormBlockType,
  FormType,
  Value,
  Property,
  Data,
} from './types';
import { buildInitialFormState } from './buildInitialFormState';
// import { fields } from './fields';

import RichText from '@/components/RichText';
import type { RichTextType } from '@/types/fields';
import classes from './styles.module.scss';

export const FormBlock: React.FC<
  FormBlockType & {
    id?: string;
  }
> = (props) => {
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

        try {
          const req = await fetch('/api/submitForm', {
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

          const res = await req.json();

          if (req.status >= 400) {
            setIsLoading(false);
            setError({
              status: res.status,
              message: res.errors?.[0]?.message || 'Internal Server Error',
            });
            return;
          }

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
    <div>
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
            className={classes.intro}
            content={confirmationMessage}
          />
        )
      }
      {
        isLoading && !hasSubmitted && <p>Loading, please wait...</p>
      }
      {
        error && <div>{`${error.status || 500}: ${error.message || ''}`}</div>
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
              {/* this part needs to be figured out */}
              {/* https://www.youtube.com/watch?v=Fm4YaG__EHg */}
            </div>
            <Button label={submitButtonLabel} form={formId} />
          </form>
        )
      }
    </div>
  );
};

export default FormBlock;
