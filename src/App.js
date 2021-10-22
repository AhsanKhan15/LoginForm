import "./App.css";
import { useState, useEffect } from "react";
import LoginForm from "./components/Login/LoginForm";
import Message from "./components/Messages/Message";
function App() {
  const [loginResult, setLoginResult] = useState({});

  const loginFormDetails = (props) => {
    setLoginResult(props);
  };
  const { isVisible } = loginResult;
  return (
    <div>
      {isVisible ? (
        <div className="message">
          <Message loginResult={loginResult} />
        </div>
      ) : (
        <div className="form">
          <LoginForm loginFormDetails={loginFormDetails} />
        </div>
      )}
    </div>
  );
}

export default App;
