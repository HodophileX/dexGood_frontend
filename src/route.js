// Landing page Route
export const userRoute = isParams => {
  if (isParams) {
    return `/user`;
  }
  return '/user';
};

export const loginRoute = () => {
  return '/login';
};
