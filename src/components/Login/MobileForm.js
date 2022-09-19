import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import PropTypes from 'prop-types';
const schema = yup.object().shape({
  mobile_number: yup.number().test('len', 'Must be atleast 10 Digits', val => {
    if (val) return val.toString().length === 10;
  }),
});
const MobileForm = ({ onToggleOtpBox, onSendOtp, isOtpSent }) => {
  const formik = useFormik({
    initialValues: { mobile_number: undefined, country_code: '+91' },
    validationSchema: schema,
    onSubmit: val => {
      return onSendOtp(val, onToggleOtpBox);
    },
  });

  const formikError =
    formik.values.mobile_number === undefined || formik.errors.mobile_number;

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="flex w-full h-full">
        <div className="flex w-full">
          <div className="dashboard p-10 rounded-md  w-full flex justify-start flex-col">
            <div className="h4-thin font-bold text-[#f1f1f1]">Login</div>
            <div className="h3-thin font-bold py-6">Sign In</div>
            <div className="flex flex-col items-center">
              <div>Phone no.</div>
              <div className="flex items-start text-black">
                <div className="">
                  <input
                    type="tel"
                    data-testid="login-screen-country-code"
                    className=" border-[1px] border-slate-300  outline-0 focus:ring-0 pb-0.5 px-2 w-12 lg:pb-2 text-left  text-base lg:text-lg font-['aribau-regular']"
                    value="+91"
                    name="country-code"
                    autoComplete="off"
                    disabled={'disabled'}
                  />
                  <div className=" border-b-[1px] border-black"></div>
                </div>
                <div className="">
                  <input
                    type="tel"
                    data-testid="login-screen-mobile-number"
                    className="after:  border-[1px] border-slate-300 focus:ring-0 outline-0 pb-0.5 lg:pb-2 w-64 lg:w-96 text-left px-2 text-base lg:text-lg font-['aribau-regular'] placeholder-[#FFFFFF4D]"
                    placeholder="Type Here"
                    name="mobile_number"
                    autoComplete="off"
                    value={formik.values.mobile_number || ''}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    onKeyPress={e => e.key === 'Enter' && e.preventDefault()}
                    required
                  />

                  <div className="w-full border-b-[1px] border-black"></div>
                  <div className="mt-3 h-[1px]">
                    <p>{formikError}</p>
                  </div>
                </div>
              </div>
              {isOtpSent === 0 && (
                <div className="mt-10 flex justify-center items-center w-full">
                  <div className="p-[1px] bg-purple-900 rounded-2xl flex justify-center items-center ">
                    <button
                      type="submit"
                      className="bg-slate-600 p-2 rounded-full px-5 h6-thin h6-sm-thin"
                    >
                      Get OTP
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default MobileForm;
MobileForm.propTypes = {
  onToggleOtpBox: PropTypes.func,
  onSendOtp: PropTypes.func,
  isOtpSent: PropTypes.number,
};
