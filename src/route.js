// Landing page Route
export const userRoute = isParams => {
  if (isParams) {
    return `/main`;
  }
  return '/main';
};
