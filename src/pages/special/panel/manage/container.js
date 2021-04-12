//  pagination and fetching items from database here
import {useState, useEffect} from 'react'
import {useSelector} from 'react-redux'
import {useEdit} from './../../edit/container'
import { firestore, auth } from "@components/feature/firebase";
import * as C from "@utils/constants";

import { useContainer } from "./../../../public/home/container";

export const useManage = () => {
    const pagination = [];
    const [itemsPerPage, setItemsPerPage] = useState(5);
    const [currentPage, setCurrentPage] = useState(1);
    const [key, setKey] = useState(C.GENERAL_CONSTANTS.NEWS_CONTENT);

    const newsItems = useSelector((state) => state.database?.news);
    const newsEvents = useSelector((state) => state.database?.events);
    const newsPosts = useSelector((state) => state.database?.posts);

    const { getNews, getEvents, getPosts } = useContainer();

    const { handleEdit } = useEdit();
  
    const totalCountValue = (key) => {
      if (key === C.GENERAL_CONSTANTS.NEWS_CONTENT) {
        return newsItems.length;
      }
      if (key === C.GENERAL_CONSTANTS.EVENTS_CONTENT) {
        return newsEvents.length;
      }
      if (key === C.GENERAL_CONSTANTS.BLOG_CONTENT) {
        return newsPosts.length;
      }
    };
    const totalCount = totalCountValue(key);
  
    const indexOfLastVisible = currentPage * itemsPerPage;
    const indexOfFirstVisible = indexOfLastVisible - itemsPerPage;
  
    const slicedNews = newsItems.slice(indexOfFirstVisible, indexOfLastVisible);
    const slicedEvents = newsEvents.slice(
      indexOfFirstVisible,
      indexOfLastVisible
    );
    const slicedPosts = newsPosts.slice(indexOfFirstVisible, indexOfLastVisible);
  
    const paginate = (number) => {
      setCurrentPage(number);
    };
    for (
      let number = 1;
      number <= Math.ceil(totalCount / itemsPerPage);
      number++
    ) {
      pagination.push(number);
    }

    const removeItem = async (type, id) => {
        return await firestore
          .collection(C.GENERAL_CONSTANTS.LANG)
          .doc(C.GENERAL_CONSTANTS.CHANGE_LANGUAGE_TO.EN)
          .collection(type)
          .doc(id)
          .delete();
      };

    return (
        paginate,
        totalCount, itemsPerPage,
        slicedNews,
        slicedEvents,
        slicedPosts,
        newsItems,
        newsEvents,
        newsPosts,
        removeItem,
        handleEdit,
        getNews, getEvents, getPosts
    )
} 