export const checkoutApiCall = (checkoutData: Record<string, any>) => {
  return Promise.resolve({ message: 'Successful payment', data: checkoutData });
};
