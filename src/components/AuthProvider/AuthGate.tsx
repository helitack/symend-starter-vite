import { useAuth0 } from "@auth0/auth0-react";

export default function AuthGate({ children }: { children: React.ReactNode }) {
  const { isLoading } = useAuth0();

  if (isLoading) {
    return null;
  }

  return <>{children}</>;
}
