// Landing page Route
export const userRoute = isParams => {
  if (isParams) {
    return `user`;
  }
  return '/user';
};

export const loginRoute = () => {
  return '/login';
};

export const postRoute = isParams => {
  if (isParams) {
    return `post`;
  }
  return '/post';
};

export const visionRoute = () => {
  return '/vision';
};
