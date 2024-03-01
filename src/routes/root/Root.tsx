import { useState } from "react";
import reactLogo from "../../assets/react.svg";
import viteLogo from "/vite.svg";
import LoginButton from "../../components/LoginButton/LoginButton";
import LogoutButton from "../../components/LogoutButton/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import "./Root.css";
import { Link, Outlet } from "react-router-dom";

export default function Root() {
  const [count, setCount] = useState(0);
  const { isAuthenticated, user } = useAuth0();

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      {isAuthenticated ? (
        <h1>Hello {user?.name}</h1>
      ) : (
        <>
          <h1>Starter App</h1>
          <h3>Login below</h3>
        </>
      )}

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <LoginButton />
        <LogoutButton />

        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <div>
        <Link to="/">Home</Link>
      </div>
      <div>
        <Link to="/playbooks">Playbooks</Link>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <Outlet />
    </>
  );
}
