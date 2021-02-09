import React from "react";
import { auth } from "./../../../components/feature/firebase";

const Dashboard = () => {
  return (
    <section className="section dashboard">
      <h2>Welcome!</h2>
      <img src={auth.currentUser.photoURL} alt={auth.currentUser.displayName}/>
      <p>{auth.currentUser.displayName}</p>
      <a href={`mailto: ${auth.currentUser.email}`}>{auth.currentUser.email}</a>
    </section>
  );
};

export default Dashboard;
