import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import ErrorImage from '@assets/images/components/errors/404.svg';
import {Button} from 'reactstrap';

const NotFound = (): JSX.Element => {
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
    <section className={"section not-found-error"}>
      <img src={ErrorImage} alt={"404 page not found"} />
      <h2>Page not found</h2>
      <p>You will be automatically redirected to homepage in <span className={"bold"}>{timeoutRedirecting} seconds.</span></p>
      <Button color={"link"} onClick={goBackToMainPage}>Go to homepage</Button>
    </section>
  );
};

export { NotFound as default };
