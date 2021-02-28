import React from "react";
import { Redirect } from "react-router-dom";
import { auth } from "../../../components/feature/firebase";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const currentUser = useSelector((state) => state.currentUser);

  if (currentUser.role === "saro-crew") {
    return <Redirect to="/panel" />;
  }

  return (
    <section className="section dashboard">
      <h2>Welcome!</h2>
      <img src={auth.currentUser.photoURL} alt={auth.currentUser.displayName} />
      <p>{auth.currentUser.displayName}</p>
      <a href={`mailto: ${auth.currentUser.email}`}>{auth.currentUser.email}</a>
    </section>
  );
};

export default Dashboard;
