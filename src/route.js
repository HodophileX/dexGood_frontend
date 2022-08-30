// Landing page Route
export const userRoute = (isParams, userId) => {
  if (isParams) {
    return `/user/${userId}`;
  }
  return '/user/:userId';
};
