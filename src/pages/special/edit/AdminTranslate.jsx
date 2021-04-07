import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Breadcrumb from "react-bootstrap/Breadcrumb";
import { Card } from "react-bootstrap";

import { useEdit } from "./container";
import CmsAlert from "@components/shared/alerts/CmsAlert";
import BackArrow from "@assets/images/components/forms/ArrowBendUpLeft.svg";

const AdminTranslate = () => {
  const { alert, footer } = useEdit();

  useEffect(()=>{

  },[])

  return (
    <section className="section translate" style={{ paddingTop: "50px" }}>
      {alert && <CmsAlert />}
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/panel">Admin Panel</Breadcrumb.Item>
        <Breadcrumb.Item active>Translate</Breadcrumb.Item>
      </Breadcrumb>
      <Link className="btn go-back" to="/panel">
        <img src={BackArrow} alt="Back" />
        <p>Go Back</p>
      </Link>
      <h2 className="main-title">Translate element</h2>
      <form className="cms-translate">
        <section className="translate-container">
        <div className="form-group">
            <Card>
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p>Lorem ipsum dolor sit amet.</p>
                  <footer className="blockquote-footer">Title</footer>
                </blockquote>
              </Card.Body>
            </Card>
            <label htmlFor="title">Your translation</label>
            <input id="title" type="text"></input>            
          </div>
          <div className="form-group">
            <Card>
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil itaque magni quisquam ea et velit.</p>
                  <footer className="blockquote-footer">footer details</footer>
                </blockquote>
              </Card.Body>
            </Card>
            <label htmlFor="details">Your translation</label>
            <textarea id="details" rows="5" ></textarea>            
          </div>
          <div className="form-group">
            <Card>
              <Card.Body>
                <blockquote className="blockquote mb-0">
                  <p>Lorem ipsum dolor sit amet.</p>
                  <footer className="blockquote-footer">social media title</footer>
                </blockquote>
              </Card.Body>
            </Card>
            <label htmlFor="social-title">Your translation</label>
            <input id="social-title" type="text"></input>            
          </div>
        </section>
        <button className="submit-btn" type="submit">Update</button>
      </form>
    </section>
  );
};

export default AdminTranslate;
