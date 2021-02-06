import React from "react";
import { useSelector } from "react-redux";

const Dashboard = () => {
  const user = useSelector((state) => state.currentUser);
  return (
    <section className="section dashboard">
      <h2>Welcome!</h2>
      <p>{user.email}</p>
    </section>
  );
};

export default Dashboard;
