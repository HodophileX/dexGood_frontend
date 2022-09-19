import React from 'react';
import { useFormik } from 'formik';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import { userRoute } from '../../route';

const OtpForm = ({ onVerifyOtp, mobileInfo }) => {
  const navigate = useNavigate();

  const onChangeUserRoute = () => {
    navigate(userRoute());
  };
  const formik = useFormik({
    initialValues: {
      otp1: undefined,
      otp2: undefined,
      otp3: undefined,
      otp4: undefined,
      otp5: undefined,
      otp6: undefined,
    },
    onSubmit: val => {
      let otp =
        val.otp1 +
        '' +
        val.otp2 +
        '' +
        val.otp3 +
        '' +
        val.otp4 +
        '' +
        val.otp5 +
        '' +
        val.otp6;

      otp = parseInt(otp);
      if (mobileInfo) {
        let { mobile_number, country_code } = mobileInfo;
        let body = {
          otp,
          mobile_number,
          country_code,
        };
        onVerifyOtp(body, onChangeUserRoute);
      }
    },
  });

  const inputFocus = elmnt => {
    if (elmnt.key === 'Delete' || elmnt.key === 'Backspace') {
      const next = elmnt.target.tabIndex - 2;
      if (next > -1) {
        elmnt.target.form.elements[next].focus();
      }
    } else {
      const next = elmnt.target.tabIndex;
      if (next < 6) {
        elmnt.target.form.elements[next].focus();
      }
    }
  };

  const formikOTPError = () => {
    const OTPValueEmptyError =
      formik.values.otp1 === '' ||
      formik.values.otp2 === '' ||
      formik.values.otp3 === '' ||
      formik.values.otp4 === '' ||
      formik.values.otp5 === '' ||
      formik.values.otp6 === '';

    const OTPValueUndefinedError =
      formik.values.otp1 === undefined ||
      formik.values.otp2 === undefined ||
      formik.values.otp3 === undefined ||
      formik.values.otp4 === undefined ||
      formik.values.otp5 === undefined ||
      formik.values.otp6 === undefined;
    return OTPValueEmptyError || OTPValueUndefinedError;
  };

  return (
    <>
      <form onSubmit={formik.handleSubmit}>
        <div className=" lg:mx-[5.2rem] flex justify-center flex-col items-center">
          <div className="flex justify-start mt-8">
            <input
              type="tel"
              className="bg-white  border-black outline-1 focus:ring-0 px-0 lg:w-[52px] w-[40px] lg:h-[52px] h-[40px] py-2.5 text-center border-2 rounded-lg text-lg lg:text-xl"
              placeholder="-"
              maxLength="1"
              onKeyUp={inputFocus}
              tabIndex={1}
              value={formik.values.otp1 || ''}
              name="otp1"
              onChange={formik.handleChange}
              autoComplete="off"
              required
            />
            <input
              type="tel"
              className=" bg-white  border-black outline-1 focus:ring-0 px-0 lg:w-[52px] w-[40px] lg:h-[52px] h-[40px] py-2.5 text-center border-2 rounded-lg text-lg lg:text-xl ml-2"
              placeholder="-"
              maxLength="1"
              onKeyUp={inputFocus}
              tabIndex={2}
              value={formik.values.otp2 || ''}
              name="otp2"
              onChange={formik.handleChange}
              autoComplete="off"
              required
            />
            <input
              type="tel"
              className=" bg-white  border-black outline-1 focus:ring-0 px-0 lg:w-[52px] w-[40px] lg:h-[52px] h-[40px] py-2.5 text-center border-2 rounded-lg text-lg lg:text-xl ml-2"
              placeholder="-"
              maxLength="1"
              onKeyUp={inputFocus}
              tabIndex={3}
              value={formik.values.otp3 || ''}
              name="otp3"
              onChange={formik.handleChange}
              autoComplete="off"
              required
            />
            <input
              type="tel"
              className=" bg-white  border-black outline-1 focus:ring-0 px-0 lg:w-[52px] w-[40px] lg:h-[52px] h-[40px] py-2.5 text-center border-2 rounded-lg text-lg lg:text-xl ml-2"
              placeholder="-"
              maxLength="1"
              onKeyUp={inputFocus}
              tabIndex={4}
              value={formik.values.otp4 || ''}
              name="otp4"
              onChange={formik.handleChange}
              autoComplete="off"
            />
            <input
              type="tel"
              className=" bg-white  border-black outline-1 focus:ring-0 px-0 lg:w-[52px] w-[40px] lg:h-[52px] h-[40px] py-2.5 text-center border-2 rounded-lg text-lg lg:text-xl ml-2"
              placeholder="-"
              maxLength="1"
              onKeyUp={inputFocus}
              tabIndex={5}
              value={formik.values.otp5 || ''}
              name="otp5"
              onChange={formik.handleChange}
              autoComplete="off"
              required
            />
            <input
              type="tel"
              className=" bg-white  border-black outline-1 focus:ring-0 px-0 lg:w-[52px] w-[40px] lg:h-[52px] h-[40px] py-2.5 text-center border-2 rounded-lg text-lg lg:text-xl ml-2"
              placeholder="-"
              maxLength="1"
              onKeyUp={inputFocus}
              tabIndex={6}
              value={formik.values.otp6 || ''}
              name="otp6"
              onChange={formik.handleChange}
              autoComplete="off"
              required
            />
          </div>
          <div
            className={
              formikOTPError() === false
                ? 'mt-8 w-fit p-0.5 bg-gradient-to-r from-[#C537AE] via-[#8217DE] to-[#ff5800] rounded-full cursor-pointer'
                : 'mt-8 w-fit p-0.5 rounded-full border-2 border-[#ffffff66] text-[#ffffff66]'
            }
          >
            <button
              type="submit"
              className="bg-slate-400 p-2 rounded-full px-5 h6-thin h6-sm-thin"
            >
              Verify & Login
            </button>
          </div>
        </div>
      </form>
    </>
  );
};
OtpForm.propTypes = {
  onVerifyOtp: PropTypes.func,
  mobileInfo: PropTypes.object,
};

export default OtpForm;
