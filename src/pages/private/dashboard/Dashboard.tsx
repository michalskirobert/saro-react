import React from "react";
import { Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

import { auth } from "@components/feature/firebase";

const Dashboard = (): JSX.Element => {
  const { currentUser } = useSelector(({ currentUser }: any) => currentUser);

  if (currentUser?.role === "saro-crew") <Redirect to={"/panel"} />;

  return (
    <section className={"section dashboard"}>
      <h2>Welcome!</h2>
      <img
        {...{
          src: auth?.currentUser?.photoURL as string,
          alt: auth?.currentUser?.displayName as string,
        }}
      />
      <p>{auth?.currentUser?.displayName}</p>
      <a href={`mailto: ${auth?.currentUser?.email}`}>
        {auth?.currentUser?.email}
      </a>
    </section>
  );
};

export default Dashboard;
