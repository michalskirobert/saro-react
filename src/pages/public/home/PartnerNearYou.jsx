import React from "react";
import { useSelector } from "react-redux";
import uuid4 from "react-uuid";

const PartnerNearYou = () => {
  const homepageData = useSelector(
    (state) => state.database.init.pages.homepage
  );
  return (
    <>
      <div className="section__partnerNearYou">
        <div className="container">
          <div className="main">
            <div className="left"></div>
            <div className="bottom"></div>
            <div className="overlay">
              {homepageData?.map((item) => {
                const { nearPeople } = item;
                return nearPeople ? (
                  <React.Fragment key={uuid4()}>
                    <img
                      src={nearPeople?.imgURL}
                      alt="globe"
                      className="globe"
                    />
                    <h2>{nearPeople?.header}</h2>
                    <select
                      placeholder="- Choose a country/territory -"
                      defaultValue="example"
                    >
                      {nearPeople?.options.map((item) => (
                        <option key={uuid4()}>- {item.value} -</option>
                      ))}
                    </select>
                  </React.Fragment>
                ) : null;
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PartnerNearYou;
