import React from "react";

const NotFound = (): JSX.Element => {
  return (
    <section className={"section error"}>
      <h1>Error 404</h1>
      <h2>Page is not found</h2>
    </section>
  );
};

export { NotFound as default };
