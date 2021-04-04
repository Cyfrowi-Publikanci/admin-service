export const config = () => ({
  serviceHostname: process.env.SERVICE_HOSTNAME,
  servicePort: process.env.SERVICE_PORT,
  authenticationServicePort: process.env.AUTHENTICATION_SERVICE_PORT,
  authenticationServiceHostname: process.env.AUTHENTICATION_SERVICE_HOSTNAME
});