import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import {
  userEmailLoginAction,
  userEmailOtpVerifyAction,
  userEmailSendOtpAction,
} from '../../_redux/action/user';
import OtpForm from './OtpForm';
import EmailForm from './EmailForm';
import PasswordCreate from './PasswordCreate';
import PasswordForm from './PasswordForm';

const LoginContent = () => {
  const dispatch = useDispatch();
  const [isOtpSent, setIsOtpSent] = useState(0);
  const [mobileInfo, setMobileInfo] = useState(null);

  const onSendOtp = async (data, cb) => {
    if (data) {
      await dispatch(userEmailSendOtpAction(data, cb));
      onToggleOtpBox(data);
    }
  };

  const onVerifyOtp = async (data, cb) => {
    if (data) {
      await dispatch(userEmailOtpVerifyAction(data, cb));
    }
  };

  const passwordGeneration = async (data, cb) => {
    if (data) {
      await dispatch(userEmailLoginAction(data, cb));
    }
  };
  const onToggleOtpBox = (data, index) => {
    if (data) {
      setMobileInfo(data);
      setIsOtpSent(index);
    }
  };

  return (
    <div className="flex flex-col h-[92vh]">
      <EmailForm
        onToggleOtpBox={onToggleOtpBox}
        onSendOtp={onSendOtp}
        isOtpSent={isOtpSent}
      />
      {isOtpSent === 1 && (
        <OtpForm
          onToggleModal={onToggleOtpBox}
          mobileInfo={mobileInfo}
          onVerifyOtp={onVerifyOtp}
          setIsOtpSent={setIsOtpSent}
        />
      )}
      {isOtpSent === 2 && (
        <PasswordCreate
          passwordGeneration={passwordGeneration}
          mobileInfo={mobileInfo}
          onVerifyOtp={onVerifyOtp}
          setIsOtpSent={setIsOtpSent}
        />
      )}
      {isOtpSent === 3 && (
        <PasswordForm
          passwordGeneration={passwordGeneration}
          mobileInfo={mobileInfo}
          onVerifyOtp={onVerifyOtp}
          setIsOtpSent={setIsOtpSent}
        />
      )}
    </div>
  );
};

export default LoginContent;
