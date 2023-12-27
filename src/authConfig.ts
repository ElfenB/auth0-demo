import type { Auth0ProviderOptions } from "@auth0/auth0-react";

export const authConfig: Auth0ProviderOptions = {
  authorizationParams: {
    // eslint-disable-next-line camelcase
    redirect_uri: window.location.origin,
  },
  clientId: import.meta.env.VITE_AUTH0_CLIENT_ID,
  domain: import.meta.env.VITE_AUTH0_DOMAIN,
};
