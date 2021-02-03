import React from "react";

const index = () => {
  return (
    <section className="section contact-page">
      <h1>Contact form</h1>
      <form>
        <div className="form-control">
          <label htmlFor="name">Name :</label>
          <input type="text" />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email :</label>
          <input type="email" />
        </div>
        <button className="btn send">Send</button>
      </form>
    </section>
  );
};

export default index;
