import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

import { firestore } from "@components/feature/firebase";
import { useContainer } from "./../../../public/home/container";
import { useEdit } from "./../../edit/container";
import { pageSize } from "./../utils";

import * as C from "@utils/constants";

export const useManage = () => {
  const { getNews, getEvents, getPosts } = useContainer();
  const { handleEdit } = useEdit();

  const newsItems = useSelector((state) => state.database.news);
  const eventItems = useSelector((state) => state.database.events);
  const articleItems = useSelector((state) => state.database.posts);

  const pagination = [];
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [key, setKey] = useState("");

  const totalCountValue = (key) => {
    switch (key) {
      case C.GENERAL_CONSTANTS.NEWS:
        return newsItems.length;
      case C.GENERAL_CONSTANTS.EVENTS:
        return eventItems.length;
      case C.GENERAL_CONSTANTS.BLOG_POSTS:
        return articleItems.length;
      default:
        return;
    }
  };

  const totalCount = totalCountValue(key);

  const indexOfLastVisible = currentPage * itemsPerPage;
  const indexOfFirstVisible = indexOfLastVisible - itemsPerPage;

  const paginatedNews = newsItems.slice(
    indexOfFirstVisible,
    indexOfLastVisible
  );
  const paginatedEvents = eventItems.slice(
    indexOfFirstVisible,
    indexOfLastVisible
  );
  const paginatedArticles = articleItems.slice(
    indexOfFirstVisible,
    indexOfLastVisible
  );

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

  useEffect(() => {
    if (totalCount <= itemsPerPage) {
      paginate(1);
    }
    // eslint-disable-next-line
  }, [totalCount, itemsPerPage]);    


  const removeItem = async (type, id) => {
    return await firestore
      .collection(C.GENERAL_CONSTANTS.LANG)
      .doc(C.GENERAL_CONSTANTS.CHANGE_LANGUAGE_TO.EN)
      .collection(type)
      .doc(id)
      .delete();
  };

  return {
    paginate,
    totalCount,
    itemsPerPage,
    removeItem,
    handleEdit,
    pagination,
    setItemsPerPage,
    currentPage,
    paginatedNews,
    paginatedEvents,
    paginatedArticles,
    setKey,
    getNews,
    getEvents,
    getPosts,
    newsItems,
    eventItems,
    articleItems,
    pageSize,
  }
    
  
};
