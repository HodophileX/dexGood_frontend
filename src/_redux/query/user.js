const { gql } = require('@apollo/client');

export const GET_USER_GQL = gql`
  query getUser {
    getUser {
      _id
      name
      username
      thumbnail
      country_code
      mobile_number
      is_verified
      email
    }
  }
`;

export const EMAIL_REGISTERATION = gql`
  mutation Mutation($input: sendEmailInput) {
    verifyEmailLogin(input: $input) {
      email
      is_verified_email
      password
      username
    }
  }
`;
export const EMAIL_LOGIN = gql`
  mutation EmailLogin($input: loginInput) {
    emailLogin(input: $input) {
      token
      username
      _id
      name
      is_verified
      password
    }
  }
`;
export const EMAIL_OTP_VERIFY = gql`
  mutation Mutation($input: verifyEmailOtpInput) {
    verifyEmailOtp(input: $input) {
      is_verified_email
      is_verified
      otp
      email
      token
    }
  }
`;

export const UPDATE_USER_GQL = gql`
  mutation updateUser($input: updateUserInput) {
    updateUser(input: $input) {
      _id
      name
      username
      thumbnail
      country_code
      mobile_number
      is_verified
      email
    }
  }
`;
export const LOGIN_GQL = gql`
  mutation login($input: loginInput) {
    login(input: $input) {
      country_code
      mobile_number
    }
  }
`;

export const VERIFY_OTP_GQL = gql`
  mutation verifyOtp($input: verifyInput!) {
    verifyOtp(input: $input) {
      _id
      name
      username
      thumbnail
      country_code
      mobile_number
      is_verified
      email
      token
    }
  }
`;

export const DEFAULT_PROFILE_PICS_GQL = gql`
  query getDefaultPP {
    getDefaultProfilePics
  }
`;
