const config = {
  server: {
    // Application host
    host: 'http://localhost:3000',
    // Application path - every route will be prefixed with this path
    path: ''
  },
  api: {
    // API host
    host: 'https://api.dev.dev-cglcloud.com',
    // API path - every API endpoing will be prefixed with this path
    path: '/api/dxo/dsc/v1/auth'
  },
  oktaOIDC: {
    // Okta issues path
    issuer: 'https://cargillcustomer-qa.oktapreview.com/oauth2/auseru1y91KUkOCCB0h7',
    // Login Base URL
    loginUrl: 'https://cargillcustomer-qa.oktapreview.com',
    // Okta client id
    client_id: '0oaeasizkxLpLJOVu0h7',
    // Implicit callback path, should be relative. host and path from server will be added automatically
    redirect_uri: '/login/implicit/callback',
    saml_uri: 'https://cargillcustomer-qa.oktapreview.com/sso/saml2/0oaer9i06tNQc2AOO0h7',
    bookmark_uri: 'https://cargillcustomer-qa.oktapreview.com/home/bookmark/0oafiyih6miIRzM1v0h7/1280',
    session_token: '20111GrgobeKozzEvEdIziEG45TcZp2kFJcqWdLXku3iWRY_g54F5la',
    scope: ['openid', 'profile', 'groups']
  },
  login: {
    entry: '/login',
    redirectAfterLogin: '/contracts',
    redirectAfterLogout: '/login'
  },
  logoutLabel: 'Logout',
  contracts: {
    entry: '/contracts',
    overview: '/overview'
  },
  locale: {
    lang: 'en',
    country: 'US',
    timeZone: 'Asia/Ho_Chi_Minh'
  },
  region: 'VNGOSC',
  toast: {
    autoClose: 3000
  },
  defaultMeasuringUnit: 'MT',
  defaultPaymentAmountUnit: 'VD',
  defaultInvoiceAmountUnit: 'VND'
};

export default config;
