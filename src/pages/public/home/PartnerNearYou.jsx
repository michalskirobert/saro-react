import React from "react";
import { useSelector } from "react-redux";

import { ReactComponent as Globe } from "@assets/images/components/home/globe.svg";

const PartnerNearYou = () => {
  const sectionData = useSelector((state) => state.database.init.pages);
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
                {sectionData ? sectionData.homepage[2].nearPeople.header : null}
              </h2>
              <select
                placeholder="- Choose a country/territory -"
                defaultValue="example"
              >
                {sectionData
                  ? sectionData.homepage[2].nearPeople.options.map((item) => (
                      <option>-{item.value}-</option>
                    ))
                  : null}
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PartnerNearYou;
