import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";

const NotAuthorizedPage = (): JSX.Element => {
  const [timeoutRedirecting, setTimeoutRedirecting] = useState<number>(10);
  const history = useHistory();

  const goBackToMainPage = () => {
    history.push("/");
    window.location.reload();
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      goBackToMainPage();
    }, 10000);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    const redirectingTime = setInterval(() => {
      setTimeoutRedirecting((prev) => {
        if (prev > 0) {
          return prev - 1;
        }
        return 0;
      });
    }, 1000);
    return () => clearInterval(redirectingTime);
  }, []);

  return (
    <>
      <p>Chuj w dupe nie masz uprawnień {timeoutRedirecting}</p>
      <button onClick={goBackToMainPage}>Zapraszam, wypierdalać</button>
    </>
  );
};

export default NotAuthorizedPage;
