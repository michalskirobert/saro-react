import { useState } from "react";
import { useSelector } from "react-redux";
import { v4 as uuidv4 } from "uuid";

import { cmsActions } from "../../../_actions";
import { generalConstants } from "../../../_constants";
import { firestore } from "../../../components/feature/firebase";

export const useContainer = () => {
    const alert = useSelector((state)=> state.CMS.alert)
    const [id, setId] = useState("")
    const [newTitle, setNewTitle] = useState("");
    const [newEventCity, setNewEventCity] = useState(null);
    const [newPlace, setNewPlace] = useState("");
    const [newEventDate, setNewEventDate] = useState(null);
    const [newEventTime, setNewEventTime] = useState(null);
    const [newImgURL, setNewImgURL] = useState("");
    const [newLink, setNewLink] = useState("");
    const [newLanguage, setNewLanguage] = useState("");
    const [newCrew, setNewCrew] = useState("");
    const [newQuery, setNewQuery] = useState("");
               
    const lang = useSelector((state) => state.general.language);


    const getEvent = async (id) => {
        return await firestore
          .collection(generalConstants.LANG)
          .doc(lang)
          .collection(generalConstants.EVENTS)
          .doc(id)
          .get().then((doc)=> {
              if(doc.exists){
                  const {id, title, imageURL, info, date, author, city, place, link} = doc.data()
                  setId(id)
                  setNewTitle(title)
                  setNewImgURL(imageURL)
                  setNewQuery(info)
                  setNewEventDate(date)
                  setNewCrew(author)
                  setNewEventCity(city)
                  setNewPlace(place)
                  setNewLink(link)

              }
              else {
                  console.log("Document not found")
              }
          }).catch((err) => {
              console.log('Error getting document')
          })
      };

    //   missing event time and language ??

    const updateEvent = async(id) => {
        return await firestore
      .collection(generalConstants.LANG)
      .doc(lang)
      .collection(generalConstants.EVENTS)
      .doc(id)
      .set({
        id,
        title: newTitle,
        imageURL: newImgURL,
        info: newQuery,
        date: newEventDate,
        author: newCrew,
        city: newEventCity,
        place: newPlace,
        link: newLink,
        published: new Date(),
      });
    }
    
    const handleEdtiorChange = (e) => {
        setNewQuery(e.target.getContent());
      };
    
      const handlerSubmit = async (e) => {
        e.preventDefault();
        await firestore.collection("language").doc("en").collection("blog").add({
          type: newQuery,
        });
      };

    return {
        handleEdtiorChange,
        handlerSubmit,
        getEvent,
        updateEvent,
        alert,
        newTitle, setNewTitle,
        newImgURL, setNewImgURL,
        newQuery, setNewQuery,
        newEventDate, setNewEventDate,
        newCrew, setNewCrew,
        newEventCity, setNewEventCity,
        newPlace, setNewPlace,
        newLink, setNewLink,
        newEventTime, setNewEventTime,
        newLanguage, setNewLanguage,

        

    }

}