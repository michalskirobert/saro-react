import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { auth, firestore } from "./../../../components/feature/firebase";

const Settings = () => {
  const currentUser = useSelector((state) => state.currentUser);
  const history = useHistory();
  const dispatch = useDispatch();
  const usernameRef = useRef(null);
  const hobbiesRef = useRef(null);
  const aboutRef = useRef(null);
  const nativeRef = useRef(null);
  const studyingRef = useRef(null);

  const updateHobbies = (hobbies) => {
    return firestore.collection("users").doc(currentUser.id).update({
      hobbies: hobbies,
    });
  };

  const updateAbout = (about) => {
    return firestore.collection("users").doc(currentUser.id).update({
      aboutMe: about,
    });
  };

  const updateNative = (lang) => {
    return firestore.collection("users").doc(currentUser.id).update({
      nativeLang: lang,
    });
  };

  const updateLang = (lang) => {
    return firestore.collection("users").doc(currentUser.id).update({
      studyingLang: lang,
    });
  };

  const handleSubmit = (e) => {
    let promises = [];

    e.preventDefault();
    dispatch({ type: "LOADING" });
    if (hobbiesRef.current.value !== currentUser.hobbies) {
      promises.push(updateHobbies(hobbiesRef.current.value));
    }
    if (aboutRef.current.value !== currentUser.about) {
      promises.push(updateAbout(aboutRef.current.value));
    }
    if (nativeRef.current.value !== currentUser.nativeLang) {
      promises.push(updateNative(nativeRef.current.value));
    }
    if (studyingRef.current.value !== currentUser.studyingLang) {
      promises.push(updateLang(studyingRef.current.value));
    }
    Promise.all(promises)
      .then(() => {
        history.push("/settings");
        dispatch({
          type: "ALERT_SUCCESS",
          payload: "Profile has been updated",
        });
      })
      .catch(() => {
        dispatch({
          type: "ALERT_ERROR",
          payload: "Failed to update an account",
        });
      })
      .finally(() => {
        dispatch({ type: "STOP_LOADING" });
      });
  };
  const updateSettings = (e) => {
    e.preventDefault();
    let promises = [];
    if (usernameRef.current.value !== currentUser.email) {
      promises.push(usernameRef.current.value);
    }
  };

  const removeAccount = async () => {
    try {
      await firestore.collection("users").doc(auth.currentUser.uid).delete();
      await auth.currentUser.delete();
      dispatch({ type: "LOG_OUT" });
      history.push("/sign-up");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main>
      <section className="section profile-update">
        <h1>Profile update</h1>
        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="displayName" className="floatLabel">
              Hobbies :{" "}
            </label>
            <input type="text" ref={hobbiesRef} required />
          </div>
          <div className="form-control">
            <label htmlFor="about" className="floatLabel">
              About me :{" "}
            </label>
            <input type="text" id="about" required />
          </div>
          <div className="form-control">
            <label htmlFor="native" className="floatLabel">
              Mother language :{" "}
            </label>
            <select
              onChange={(e) => console.log(e.target.value)}
              id="native"
            ></select>
          </div>
          <div className="form-control">
            <label htmlFor="studying" className="floatLabel">
              Studying language :{" "}
            </label>
            <select
              onChange={(e) => console.log(e.target.value)}
              id="studying"
            ></select>
          </div>
          <button>Update</button>
        </form>
      </section>
      <section className="change-settings">
        <h2>Change settings</h2>
        <form className="auth-form" onSubmit={updateSettings}>
          <div className="form-control">
            <label htmlFor="displayName" className="floatLabel">
              Username :{" "}
            </label>
            <input type="text" id="displayName" ref={usernameRef} required />
          </div>
          <div className="form-control">
            <label htmlFor="profilePicture" className="floatLabel">
              Profile picture :{" "}
            </label>
            <input type="file" id="profilePicture" required />
          </div>
          <div className="form-control">
            <label htmlFor="displayName" className="floatLabel">
              Email :
            </label>
            <input type="text" required />
          </div>
          <div className="form-control">
            <label htmlFor="displayName" className="floatLabel">
              Password :
            </label>
            <input type="text" required />
          </div>
          <div className="form-control">
            <label htmlFor="displayName" className="floatLabel">
              Confirm password :
            </label>
            <input type="text" required />
          </div>
          <button type="submit">Update</button>
        </form>
        <div className="auth-control">
          <p>Do you want remove your an account?</p>
          <button type="btn remover" onClick={removeAccount}>
            Remove an account
          </button>
        </div>
      </section>
    </main>
  );
};

export default Settings;
