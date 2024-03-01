import { useAuth0 } from "@auth0/auth0-react";
import styles from "./LogoutButton.module.scss";

const LogoutButton = () => {
  const { logout, isAuthenticated } = useAuth0();

  if (!isAuthenticated) return null;

  return (
    <button
      className={styles.logoutButton}
      onClick={() =>
        logout({ logoutParams: { returnTo: window.location.origin } })
      }
    >
      Log Out
    </button>
  );
};

export default LogoutButton;
