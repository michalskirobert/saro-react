import React from "react";
import { auth } from "./../../../components/feature/firebase";

const Dashboard = () => {
  return (
    <section className="section dashboard">
      <h2>Welcome!</h2>
      <img src={auth.currentUser.photoURL} alt={auth.currentUser.displayName} />
      <p>{auth.currentUser.email}</p>
      <p>{auth.currentUser.displayName}</p>
    </section>
  );
};

export default Dashboard;
