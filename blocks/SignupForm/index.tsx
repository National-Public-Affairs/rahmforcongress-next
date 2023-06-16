import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import classes from './styles.module.scss';

type SignupFormData = {
  firstName: string;
  lastName?: string;
  email: string;
  phone?: string;
  zip?: string;
  optIn: boolean;
}

const SignupFormBlock: React.FC = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<SignupFormData>();

  const onSubmit = async (data: SignupFormData) => {
    const toastId = toast.loading('Submitting...');
    
    try {
      const resp = await fetch('/api/submitSignupForm', {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      console.log('form resp', resp);
    } catch (e: any) {
      toast.error(e, { id: toastId });
      console.log('form error', e);
    }
    
    toast.success('Submitted successfully', { id: toastId });
  };
  
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
    >
      <div className={classes.flex}>
        {/* FIRST NAME */}
        <div className={classes.fieldWrapper}>
          <input
            type="text"
            placeholder="First Name"
            className={`half`}
            {...register('firstName', { required: true, maxLength: 20 })}
            aria-invalid={errors.firstName ? "true" : "false"}
          />
          {errors.firstName?.type === 'required'
            && <div role="alert">First name is required</div>}
          {errors.firstName?.type === 'maxLength'
            && <div role="alert">Length cannot exceed 20 characters</div>}
        </div>

        {/* LAST NAME */}
        <div className={classes.fieldWrapper}>
          <input
            type="text"
            placeholder="Last Name (Optional)"
            className={`half`}
            {...register('lastName', { required: false, maxLength: 20 })}
            aria-invalid={errors.lastName ? "true" : "false"}
          />
          {errors.lastName?.type === 'maxLength'
            && <div role="alert">Length cannot exceed 20 characters</div>}
        </div>
      </div>

      {/* EMAIL */}
      <div className={classes.fieldWrapper}>
        <input
          type="text"
          placeholder="Email"
          {...register('email', {
            required: true,
            maxLength: 50,
            pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/
          })}
          aria-invalid={errors.email ? "true" : "false"}
        />
        {errors.email?.type === 'maxLength'
          && <div role="alert">Length cannot exceed 50 characters</div>}
        {errors.email?.type === 'pattern'
          && <div role="alert">Must be a valid email</div>}
        {errors.email?.type === 'required'
          && <div role="alert">Email address is required</div>}
      </div>

      {/* PHONE */}
      <div className={classes.flex}>
        <input
          type="text"
          placeholder="Mobile (Optional)"
          {...register('phone', { required: false, maxLength: 10 })}
          aria-invalid={errors.phone ? "true" : "false"}
        />
        {errors.phone?.type === 'maxLength'
          && <div role="alert">Length cannot exceed 10 characters</div>}

        {/* SUBMIT BUTTON */}
        <input
          type="submit"
          className={`half`}
        />
      </div>

      {/* CHECKBOX OPT-IN */}
      <div className={classes.disclaimer}>
        <input
          type="checkbox"
          {...register('optIn', { required: true })}
          aria-invalid={errors.optIn ? "true" : "false"}
        />

        {/* DISCLAIMER TEXT */}
        <p className="small-text">
          By entering your phone number and selecting to opt in, you consent to join a recurring SMS/MMS text messaging program that will provide alerts, donation requests, updates, and other important information. By participating, you agree to the <a href="https://txtterms.co/91031" className={classes.link}>terms & privacy policy</a> for auto dialed marketing messages from Hines to the phone number you provide. No consent is required to buy. Msg&data rates may apply. <a href="tel:91031" className={classes.link}>Text JOIN to 91031</a> to opt in. Reply HELP for help or STOP to opt out at any time. SMS information is not rented, sold, or shared. Terms: <a href="https://txtterms.co/91031" className={classes.link}>https://txtterms.co/91031</a>
        </p>
        {errors.optIn?.type === 'required'
          && <div role="alert" className={classes.optInError}>Opt-in is required</div>}
      </div>
    </form>
  );
};

export default SignupFormBlock;
