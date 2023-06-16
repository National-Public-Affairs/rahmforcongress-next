import React, { useState, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/router';
// import { buildInitialFormState } from './buildInitialFormState.tsx';
// import { fields } from './fields';
// import FormType
import RichText from '@/components/RichText';
import type { RichTextType } from '@/types/fields';
import classes from './styles.module.scss';

export type Value = unknown;

export interface Property {
  [key: string]: Value;
}

export interface Data {
  [key: string]: Value | Property | Property[];
}

export type FormType = {
  id: string;
  title: string;
  fields: any; // this needs to be fixed
  submitButtonLabel?: string;
  confirmationType: 'message' | 'redirect';
  confirmationMessage?: RichTextType;
  redirect?: any; // deal with this
}

export type FormBlockType = {
  blockName?: string;
  blockType?: 'formBlock';
  enableIntro: boolean;
  form: FormType;
  introContent?: {
    [k: string]: unknown;
  }[];
}

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
              {/* {
                formFromProps
                && formFromProps.fields
                && formFromProps.fields.map((field, index) => {
                  const Field: React.FC<any> = fields?.[field.block]
                }) 
              } */}
              {/* this part needs to be figured out */}
              {/* https://www.youtube.com/watch?v=Fm4YaG__EHg */}
            </div>
          </form>
        )
      }
    </div>
  );
};

export default FormBlock;
