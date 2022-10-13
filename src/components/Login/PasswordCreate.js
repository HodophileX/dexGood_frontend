import React from 'react';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { userRoute } from '../../route';
import * as yup from 'yup';
import { ArrowIcon } from '../Common/svg/icon';
const schema = yup.object().shape({
  password: yup.string().required('Please Enter your password'),
  passwordConfirm: yup
    .string()
    .required()
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
});
const PasswordCreate = ({ passwordGeneration, mobileInfo, onVerifyOtp }) => {
  const navigate = useNavigate();
  const userLoginRoute = () => {
    navigate(userRoute());
  };
  const formik = useFormik({
    initialValues: {
      password: undefined,
      passwordConfirm: undefined,
    },
    validationSchema: schema,
    onSubmit: val => {
      if (mobileInfo) {
        let { email } = mobileInfo;
        let { password } = val;

        let body = {
          email,
          password,
        };
        passwordGeneration(body, userLoginRoute);
      }
    },
  });

  const formikError =
    formik.values.password === undefined || formik.errors.passwordConfirm;

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="flex w-full h-full ">
        <div className="flex w-full justify-center items-center h-[100%] mt-4">
          <div className=" h-full rounded-md  w-full flex justify-start flex-col">
            <div className="flex flex-col items-center h-[100%]">
              <div className="flex items-start flex-col text-black ">
                <div className="h4-thin flex w-full text-[#494949]">
                  Create A Password
                </div>
                <div className="flex justify-start items-start flex-col ">
                  <div className="flex w-full">
                    <input
                      type="password"
                      data-testid="login-screen-mobile-number"
                      className="after:border-[1px] text-black border-slate-300 focus:ring-0 outline-0 py-2  w-80 md:w-96 text-left px-2 text-base lg:text-lg font-['aribau-regular'] placeholder-[#888]"
                      placeholder="Password"
                      name="password"
                      autoComplete="off"
                      value={formik.values.password || ''}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      onKeyPress={e => e.key === 'Enter' && e.preventDefault()}
                      required
                    />
                  </div>
                </div>
                <div className="flex mt-2">
                  <input
                    type="passwordConfirm"
                    data-testid="login-screen-mobile-number"
                    className="after:border-[1px] border-slate-300 focus:ring-0 outline-0 py-2  w-80 md:w-96 text-left px-2 text-base lg:text-lg font-['aribau-regular'] placeholder-[#888]"
                    placeholder="Confirm Password"
                    name="passwordConfirm"
                    autoComplete="off"
                    value={formik.values.passwordConfirm || ''}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    onKeyPress={e => e.key === 'Enter' && e.preventDefault()}
                    required
                  />
                </div>
                <div className="w-full mt-4 flex justify-center items-center">
                  <button
                    className="bg-white flex justify-center items-center px-2 py-2 rounded-r-sm border-none hover:bg-orange-400 cursor-pointer"
                    type="submit"
                  >
                    <div className="body-1">Set password</div>
                    <div className="mx-2 flex justify-center items-center rounded-full border-[1px] border-black">
                      <ArrowIcon />
                    </div>
                  </button>
                </div>

                <div className="mt-3 h-[1px]">
                  <p>{formikError}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default PasswordCreate;
PasswordCreate.propTypes = {
  onVerifyOtp: PropTypes.func,
  mobileInfo: PropTypes.object,
  setIsOtpSent: PropTypes.func,
};
