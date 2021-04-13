export const environment = {
  production: false,
  apiUrl: '/api',
  auth: {
      baseUrl: '',
      loginUrl: '/api/sso/login',
      logoutUrl: '/api/logout',
      detailsUrl: '/api/user/details',
      tokenValidationUrl: '/api/token/validate',
      storage: localStorage,
      userStorageIndex: 'user',
      loginSuccessRoute: '/#/login-success'
  }
};