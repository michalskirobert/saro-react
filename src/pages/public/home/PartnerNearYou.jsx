import React from "react";
import { useSelector } from "react-redux";

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
              <img
                src={sectionData?.homepage[2].nearPeople.imgURL}
                alt=""
                className="globe"
              />
              <h2>{sectionData?.homepage[2].nearPeople.header}</h2>
              <select
                placeholder="- Choose a country/territory -"
                defaultValue="example"
              >
                {sectionData?.homepage[2].nearPeople.options.map((item) => (
                  <option>-{item.value}-</option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PartnerNearYou;
