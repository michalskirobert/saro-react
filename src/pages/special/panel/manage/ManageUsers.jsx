import React, { useState } from "react";
import { Breadcrumb } from "react-bootstrap";
import Select from "react-select";
import { useSelector } from "react-redux";

import { GENERAL_CONSTANTS } from "@utils/constants";


import { auth, firestore } from "@fire";

const crew = [{status: 0, label: "guest"}, {status: 10, label: "user"}, {status: 20, label: "VIP user"}, {status: 30, label: "translator"}, {status: 40, label: "crew"}, {status: 50, label: "developer"}, {status: 60, label: "admin"}]

const ManageUsers = () => {
  const [userEmail, setUserEmail] = useState("admin@saro.website");
  const [userInfo, setUserInfo] = useState([]);
  const lang = useSelector((state) => state.general.language);

  const findUser = async () => {
    try {
      await auth.getUserByEmail("admin@saro.website")
      .then((userRecord) => {
        console.log(`Success: ${userRecord.toJSON()}`);
        setUserInfo(userRecord.toJSON());
      });
    } catch (error) {
      console.log("Error:", error);
    }
    firestore.collection(GENERAL_CONSTANTS.LANG).doc(lang).collection(userEmail).onSnapshot((resp)=> console.log(resp.docs))
  };

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
        <input
          {...{
            type: "email",
            placeholder: "user email",
            value: userEmail,
            onChange: (e) => setUserEmail(e.target.value),
          }}
        />
        <button onClick={findUser}>Search</button>
        <p>{userInfo}</p>
        <p>Current status: xx</p>
        <p>Update status to:</p>
        <Select
                  {...{
                    id: "status",
                    name: "status",
                    options: crew.map((item) => ({
                      label: `${item.label}`,
                      value: `${item.status}`,
                    })),
                    onChange: (value) => {console.log(value)}
                  }}
                />
      </div>
    </section>
  );
};

export default ManageUsers;
