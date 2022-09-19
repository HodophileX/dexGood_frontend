import React, { useState } from 'react';
import MobileForm from './MobileForm';
import { useDispatch } from 'react-redux';
import {
  userOtpVerifyAction,
  userSendOtpAction,
} from '../../_redux/action/user';
import OtpForm from './OtpForm';

const LoginContent = () => {
  const dispatch = useDispatch();
  const [isOtpSent, setIsOtpSent] = useState(0);
  const [mobileInfo, setMobileInfo] = useState(null);

  const onSendOtp = async (data, cb) => {
    if (data) {
      await dispatch(userSendOtpAction(data, cb));
    }
  };

  const onVerifyOtp = async (data, cb) => {
    if (data) {
      await dispatch(userOtpVerifyAction(data, cb));
    }
  };

  const onToggleOtpBox = data => {
    if (data) {
      setMobileInfo(data);
      setIsOtpSent(isOtpSent + 1);
    }
  };

  return (
    <section className="h-[95vh] flex flex-col">
      <MobileForm
        onToggleOtpBox={onToggleOtpBox}
        onSendOtp={onSendOtp}
        isOtpSent={isOtpSent}
      />
      {isOtpSent !== 0 && (
        <OtpForm
          onToggleModal={onToggleOtpBox}
          mobileInfo={mobileInfo}
          onVerifyOtp={onVerifyOtp}
        />
      )}
    </section>
  );
};

export default LoginContent;
