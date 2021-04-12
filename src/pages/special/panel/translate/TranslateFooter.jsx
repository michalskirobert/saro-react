import React from 'react'
import { Card } from "react-bootstrap";

import { useEdit } from "../../edit/container";
import CmsAlert from "@components/shared/alerts/CmsAlert";


const TranslateFooter = () => {
    const { alert, footer } = useEdit();

    return (
        <section className="section translate" >
        {alert && <CmsAlert />}
        
        <form className="cms-translate">
        <h2 className="main-title">Translate footer</h2>
          <section className="form-container">
          <div className="form-control">
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
            <div className="form-control">
              <Card>
                <Card.Body>
                  <blockquote className="blockquote mb-0">
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil itaque magni quisquam ea et velit.</p>
                    <footer className="blockquote-footer">footer details</footer>
                  </blockquote>
                </Card.Body>
              </Card>
              <label htmlFor="details">Your translation</label>
              <textarea id="details" rows="4" ></textarea>            
            </div>
            <div className="form-control">
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
    )
}

export default TranslateFooter
