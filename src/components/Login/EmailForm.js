import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import PropTypes from 'prop-types';
import { ArrowIcon } from '../Common/svg/icon';
const schema = yup.object().shape({
  email: yup.string(),
});

const EmailForm = ({ onToggleOtpBox, onSendOtp, isOtpSent }) => {
  const formik = useFormik({
    initialValues: { email: undefined },
    validationSchema: schema,
    onSubmit: val => {
      return onSendOtp(val, onToggleOtpBox);
    },
  });

  const formikError = formik.values.email === undefined || formik.errors.email;

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="flex w-full h-full">
        <div className="flex w-full justify-center items-center ">
          <div className="dashboard h-full  p-10 rounded-md  w-full flex justify-start flex-col">
            <div className="h3-thin font-bold py-6">Sign In</div>
            <div className="flex flex-col items-center">
              <div className="flex items-start text-black">
                <div className="">
                  <div className="h4-thin flex w-full">Email</div>
                  <div className="flex">
                    <input
                      type="email"
                      data-testid="login-screen-mobile-number"
                      className="after:border-[1px] border-slate-300 focus:ring-0 outline-0 py-0.5 lg:pb-2 w-64 lg:w-96 text-left px-2 text-base lg:text-lg  placeholder-[#888]"
                      placeholder="Email"
                      name="email"
                      autoComplete="off"
                      value={formik.values.email || ''}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                    />
                    {isOtpSent === 0 && (
                      <button className="bg-white flex justify-center items-center px-2 py-2 rounded-r-sm border-none hover:bg-orange-400 cursor-pointer">
                        <div className="body-1 flex text-center">Verify</div>
                        <div className="mx-2 flex justify-center items-center">
                          <ArrowIcon />
                        </div>
                      </button>
                    )}
                  </div>
                  <div className="w-full border-b-[1px] border-black"></div>
                  <div className="mt-3 h-[1px]">
                    <p>{formikError}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default EmailForm;
EmailForm.propTypes = {
  onToggleOtpBox: PropTypes.func,
  onSendOtp: PropTypes.func,
  isOtpSent: PropTypes.number,
};
