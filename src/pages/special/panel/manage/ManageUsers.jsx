import React, { useState } from "react";
import { Breadcrumb } from "react-bootstrap";

const ManageUsers = () => {
  return (
    <section className="section manage-users">
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/panel">Admin Panel</Breadcrumb.Item>
        <Breadcrumb.Item active>Manage users</Breadcrumb.Item>
      </Breadcrumb>
      <h2 className="main-title">Manage users</h2>
      <div>
        <p>Search for user</p>
      </div>
    </section>
  );
};

export default ManageUsers;
