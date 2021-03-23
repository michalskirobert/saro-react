import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom";
import Select from "react-select";

import { auth, firestore } from "../../../components/feature/firebase";
import Alert from "../../../components/shared/alerts";
import { alertActions, userActions } from "../../../store/actions";
import { ReactComponent as ArrowBack } from "../../../assets/images/components/forms/arrowBack.svg";

const Settings = () => {
  const currentUser = auth.currentUser;
  const profile = useSelector((state) => state.currentUser);
  const alert = useSelector((state) => state.alert.alert);
  const history = useHistory();
  const dispatch = useDispatch();
  const [firstName, setFirstName] = useState("");
  const [surname, setSurname] = useState("");
  const [username, setUsername] = useState("");
  const [hobbies, setHobbies] = useState("");
  const [password, setPassword] = useState("");
  const [confPassword, setConfPassword] = useState("");
  const [email, setEmail] = useState("");
  const [about, setAbout] = useState("");
  const [nativeLang, setNativeLang] = useState("African");
  const [studyingLang, setStudyingLang] = useState("African");
  const [gender, setGender] = useState("");

  const updateHobbies = (hobbies) => {
    return firestore.collection("users").doc(currentUser.uid).update({
      hobbies: hobbies,
    });
  };

  const updateAbout = (about) => {
    return firestore.collection("users").doc(currentUser.uid).update({
      about: about,
    });
  };

  const updateNative = (lang) => {
    return firestore.collection("users").doc(currentUser.uid).update({
      nativeLang: lang,
    });
  };

  const updateLang = (lang) => {
    return firestore.collection("users").doc(currentUser.uid).update({
      studyingLang: lang,
    });
  };

  const updateFirstName = (name) => {
    return firestore.collection("users").doc(currentUser.uid).update({
      firstName: name,
    });
  };

  const updateSurname = (name) => {
    return firestore.collection("users").doc(currentUser.uid).update({
      name,
    });
  };

  const updateUsername = async (username) => {
    return auth.currentUser
      .updateProfile({
        displayName: username,
      })
      .then(() => {
        firestore.collection("users").doc(auth.currentUser.uid).update({
          username: username,
        });
      });
  };

  const updatePassword = (password) => {
    return auth.currentUser.updatePassword(password);
  };

  const updateEmail = async (email) => {
    return auth.currentUser.updateEmail(email).then(() => {
      firestore.collection("users").doc(auth.currentUser.uid).update({
        email: email,
      });
    });
  };

  const handleSubmit = (e) => {
    let promises = [];
    e.preventDefault();
    dispatch({ type: "LOADING" });

    if (firstName !== profile.firstName) {
      promises.push(updateFirstName(firstName));
    }
    if (surname !== profile.surname) {
      promises.push(updateSurname(surname));
    }
    if (hobbies !== profile.hobbies) {
      promises.push(updateHobbies(hobbies));
    }
    if (about !== profile.about) {
      promises.push(updateAbout(about));
    }
    if (about !== profile.gender) {
      promises.push(updateAbout(gender));
    }
    if (nativeLang !== profile.nativeLang) {
      promises.push(updateNative(nativeLang));
    }
    if (studyingLang !== profile.studyingLang) {
      promises.push(updateLang(studyingLang));
    }

    Promise.all(promises)
      .then(() => {
        dispatch(alertActions.success("Profile has been updated"));
      })
      .catch(() => {
        dispatch(alertActions.error("Profile could not be updated"));
      })
      .finally(() => {
        dispatch({ type: "STOP_LOADING" });
      });
  };
  const updateSettings = (e) => {
    e.preventDefault();
    let promises = [];
    dispatch({ type: "LOADING" });

    if (username !== currentUser.displayName) {
      promises.push(updateUsername(username));
    }
    if (password !== confPassword) {
      dispatch(alertActions.error("Passwords have to be same"));
    }
    if (email !== currentUser.email) {
      promises.push(updateEmail(email));
    }
    if (password) {
      promises.push(updatePassword(password));
    }
    Promise.all(promises)
      .then(() => {
        dispatch(alertActions.success("Profile has been updated"));
      })
      .catch(() => {
        dispatch(alertActions.error("Profile could not be updated"));
      })
      .finally(() => {
        dispatch({ type: "STOP_LOADING" });
      });
  };

  const removeAccount = async () => {
    try {
      await firestore.collection("users").doc(currentUser.uid).delete();
      await auth.currentUser.delete();
      dispatch(userActions.logout());
      history.push("/sign-up");
      dispatch(alertActions.success("Your profile has been removed"));
    } catch (error) {
      dispatch(alertActions.error("Something went wrong"));
    }
  };
  const genderOptions = [
    { value: "male", label: "Male"},
    { value: "famale", label: "Famale"},
  ]
  return (
    <main>
      <section className="section profile-update">
      <Link to="/">
        <button className="arrow-back-icon" type="button">
          <ArrowBack />
        </button>
      </Link>
        {alert && <Alert />}
        <h1>Register</h1>
        <form className="auth-form" onSubmit={handleSubmit}>
          <div className="form-control">
            <label htmlFor="firstName" className="floatLabel"></label>
            <input
              type="text"
              value={firstName}
              placeholder={profile.firstName || "Your Firstname"}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="displayName" className="floatLabel"></label>
            <input
              type="text"
              value={surname}
              placeholder={profile.surname || "Your Surname"}
              onChange={(e) => setSurname(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="displayName" className="floatLabel"></label>
            <input
              type="text"
              value={hobbies}
              placeholder={profile.hobbies || "Your Hobbies"}
              onChange={(e) => setHobbies(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="about" className="floatLabel"></label>
            <textarea
              type="text"
              id="about"
              value={about}
              placeholder={profile.about || "About you"}
              onChange={(e) => setAbout(e.target.value)}
            ></textarea>
          </div>
          <div className="form-control--gender">
        <label htmlFor="gender" className="gender">
          Gender :
        </label>
        <Select id="gender" 
          onChange={(e) => setGender(e.target.value)} 
          tabindex="3"
          placeholder="Gender"
          options={genderOptions}>
        </Select>
      </div>
          <div className="form-control--lang">
            <label htmlFor="native" className="lang">
              Native language :{" "}
            </label>
            <select onChange={(e) => setNativeLang(e.target.value)} id="native">
              <option value="english">English</option>
            </select>
          </div>
          <div className="form-control--lang">
            <label htmlFor="studying" className="lang">
              Studying language :
            </label>
            <select
              onChange={(e) => setStudyingLang(e.target.value)}
              id="studying"
            >
              <option value="english">English</option>
            </select>
          </div>
          <button>Register</button>
        </form>
      </section>
      <section className="section change-settings">
        <h2>Change settings</h2>
        <form className="auth-form" onSubmit={updateSettings}>
          <div className="form-control">
            <label htmlFor="displayName" className="floatLabel">
              Username :{" "}
            </label>
            <input
              type="text"
              id="displayName"
              placeholder={currentUser.displayName}
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="profilePicture" className="floatLabel">
              Profile picture :{" "}
            </label>
            <input type="file" id="profilePicture" />
          </div>
          <div className="form-control">
            <label htmlFor="email" className="floatLabel">
              Email :
            </label>
            <input
              placeholder={currentUser.email}
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="password" className="floatLabel">
              Password :
            </label>
            <input
              placeholder="leave blank to keep same password"
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <div className="form-control">
            <label htmlFor="conf-password" className="floatLabel">
              Confirm password :
            </label>
            <input
              placeholder="leave blank to keep same password"
              type="password"
              id="conf-password"
              value={confPassword}
              onChange={(e) => setConfPassword(e.target.value)}
            />
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
