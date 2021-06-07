// import { useDispatch } from "react-redux";
import { auth } from "@components/feature/firebase";

export const useSingUpBasicContainer = (): any => {
  const createAccount = async (email, password) => {
    try {
      await auth.createUserWithEmailAndPassword(email, password);
    } catch (error) {
      console.log(error);
    }
  };
  return { createAccount };
};
