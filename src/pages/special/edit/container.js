import { useState } from "react";
import { useSelector } from "react-redux";

import { cmsActions } from "../../../_actions";
import { generalConstants } from "../../../_constants";
import { firestore } from "../../../components/feature/firebase";

export const useContainer = () => {
    const alert = useSelector((state)=> state.CMS.alert)
    const [id, setId] = useState("")
    const [query, setQuery] = useState("");
    const [title, setTitle] = useState("");
    const [language, setLanguage] = useState("");
    const [crew, setCrew] = useState("");
    const [eventTime, setEventTime] = useState(null);
    const [eventDate, setEventDate] = useState(null);
    const [eventCity, setEventCity] = useState(null);
    const [eventPlace, setEventPlace] = useState("");
    const [imgURL, setImgURL] = useState("");
    const [link, setLink] = useState("");
    const [info, setInfo] = useState("");   
    const [category, setCategory] = useState("");
               
    const lang = useSelector((state) => state.general.language);


    const getEvent = async (id) => {
        return await firestore
          .collection(generalConstants.LANG)
          .doc(lang)
          .collection(generalConstants.EVENTS)
          .doc(id)
          .get().then((doc)=> {
              if(doc.exists){
                  const {id, title, imageURL, info, date, time, author, city, place, link, language} = doc.data()
                  setId(id)
                  setTitle(title)
                  setImgURL(imageURL)
                  setInfo(info)
                  setEventDate(date)
                  setEventTime(time)
                  setCrew(author)
                  setEventCity(city)
                  setEventPlace(place)
                  setLink(link)
                  setLanguage(language)
              }
              else {
                  console.log("Document not found")
              }
          }).catch((err) => {
              console.log('Error getting document')
          })
      };

    const updateEvent = async(id) => {
        return await firestore
      .collection(generalConstants.LANG)
      .doc(lang)
      .collection(generalConstants.EVENTS)
      .doc(id)
      .set({
        id,
        title: title,
        imageURL: imgURL,
        info: info,
        date: eventDate,
        time: eventTime,
        author: crew,
        city: eventCity,
        place: eventPlace,
        link: link,
        language: language,
        published: new Date(),
      });
    }
    
    const handleEdtiorChange = (e) => {
        setQuery(e.target.getContent());
      };

   
    
      const handlerSubmit = async (e) => {
        e.preventDefault();
        await firestore.collection("language").doc("en").collection("blog").add({
          type: query,
        });
      };

    return {
        handleEdtiorChange,
        handlerSubmit,
        getEvent,
        updateEvent,
        alert,
        title, setTitle,
        imgURL, setImgURL,
        query, setQuery,
        eventDate, setEventDate,
        crew, setCrew,
        eventCity, setEventCity,
        eventPlace, setEventPlace,
        link, setLink,
        eventTime, setEventTime,
        language, setLanguage,
        info, setInfo,
        category, setCategory,
    }

}