import React from "react";
import { Button } from "react-bootstrap";

const AdminPanel = () => {
  return (
    <section className="saro-panel">
      <h1>Saro CMS 1.0.0</h1>
      <div className="panel__items">
        <div className="panel-box">
          <h2>News page</h2>
          <Button>Add new post</Button>
          <Button>See last posts/edit</Button>
        </div>
      </div>
    </section>
  );
};

export default AdminPanel;
