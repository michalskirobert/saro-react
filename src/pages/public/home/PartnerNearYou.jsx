import React from "react";

import { ReactComponent as Globe } from "@assets/images/components/home/globe.svg";

const PartnerNearYou = () => {
  return (
    <>
      <div className="section__partnerNearYou">
        <div className="container">
          <div className="main">
            <div className="left"></div>
            <div className="bottom"></div>
            <div className="overlay">
              <Globe className="globe" />
              <h2>
                Are you looking for a face-to-face Polish partner near you?
              </h2>
              <select
                placeholder="- Choose a country/territory -"
                defaultValue="example"
              >
                <option>- example -</option>
                <option>- example -</option>
                <option>- example -</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PartnerNearYou;
