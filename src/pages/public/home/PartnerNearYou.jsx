import React from "react";
import { useSelector } from "react-redux";

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
                  <>
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
                        <option>- {item.value} -</option>
                      ))}
                    </select>
                  </>
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
