import { Auth0Provider } from "@auth0/auth0-react";
import AuthGate from "./AuthGate";

export default function AuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Auth0Provider
      domain={import.meta.env.VITE_AUTH0_DOMAIN}
      clientId={import.meta.env.VITE_AUTH0_CLIENT_ID}
      authorizationParams={{
        audience: import.meta.env.VITE_AUTH0_AUDIENCE,
        redirect_uri: window.location.origin,
      }}
    >
      <AuthGate>{children}</AuthGate>
    </Auth0Provider>
  );
}
