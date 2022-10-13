import React from 'react';
import PropTypes from 'prop-types';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { userRoute } from '../../route';
import * as yup from 'yup';
import { ArrowIcon } from '../Common/svg/icon';
const schema = yup.object().shape({
  password: yup.string().required('Please Enter your password'),
});
const PasswordForm = ({ passwordGeneration, mobileInfo }) => {
  const navigate = useNavigate();
  const userLoginRoute = () => {
    navigate(userRoute());
  };
  const formik = useFormik({
    initialValues: {
      password: undefined,
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

  const formikError = formik.values.password === undefined;

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="flex w-full h-full">
        <div className="flex w-full justify-center items-center ">
          <div className="dashboard h-full  p-10 rounded-md  w-full flex justify-start flex-col">
            <div className="flex flex-col items-center">
              <div className="flex items-start text-black">
                <div className="">
                  <div className="h4-thin flex w-full">Password</div>
                  <div className="flex items-center">
                    <input
                      type="password"
                      data-testid="login-screen-mobile-number"
                      className="after:border-[1px] text-black border-slate-300 focus:ring-0 outline-0  py-2 w-64 lg:w-96 text-left px-2 text-base lg:text-lg font-['aribau-regular'] placeholder-[#888]"
                      placeholder="Type Here"
                      name="password"
                      autoComplete="off"
                      value={formik.values.password || ''}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      onKeyPress={e => e.key === 'Enter' && e.preventDefault()}
                      required
                    />
                  </div>

                  <div className="mt-2 flex justify-center items-center">
                    <button
                      className="bg-white flex justify-center items-center px-12 py-2 rounded-sm border-none hover:bg-orange-400 cursor-pointer"
                      type="submit"
                    >
                      Login
                      <div className="mx-2 flex justify-center items-center">
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
      </div>
    </form>
  );
};

export default PasswordForm;
PasswordForm.propTypes = {
  onVerifyOtp: PropTypes.func,
  mobileInfo: PropTypes.object,
};
