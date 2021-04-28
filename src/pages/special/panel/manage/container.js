import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import { Button} from "react-bootstrap";

import { firestore } from "@components/feature/firebase";
import { useContainer } from "./../../../public/home/container";
import { useEdit } from "./../../edit/container";
import { pageSize } from "./../utils";
import Edit from "@assets/images/components/forms/PencilLine.svg";
import Delete from "@assets/images/components/forms/Trash.svg";

import * as C from "@utils/constants";
import * as S from "../style";

export const useManageContainer = () => {
  const { getNews, getEvents, getPosts } = useContainer();
  const { handleEdit } = useEdit();

  const newsItems = useSelector((state) => state.database.news);
  const eventItems = useSelector((state) => state.database.events);
  const articleItems = useSelector((state) => state.database.posts);

  const pagination = [];
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);
  const [key, setKey] = useState("");

  const [dateColumns] = useState(["lastModified"]);
  const [selectedItemsId, setSelectedItemsId] = useState([]);

  const columns = [
    { name: "title", title: "Title" },
    { name: "lastModified", title: "Last modified" },
    { name: "author", title: "Author" },
    { name: "manage", title: "Manage" },
  ];
  const eventRows = eventItems?.map(({ title, publishedDate, crew, id }) => {
    return {
      id,
      title,
      lastModified: publishedDate,
      author: crew,
      manage: ( <Button
        {...{
          onClick: () => handleEdit(id, key),
        }}
      >
        <img src={Edit} alt="Edit" />
      </Button>)
    };
  });
  const newsRows = newsItems?.map(({ title, publishedDate, crew, id }) => {
    return {
      id,
      title,
      lastModified: publishedDate,
      author: crew,
    };
  });
  const articleRows = articleItems?.map(({ title, publishedDate, crew, id }) => {
    return {
      id,
      title,
      lastModified: publishedDate,
      author: crew,
    };
  }); 
  const [tableColumnExtentions] = useState([
    { columnName: "title", align: "left", wordWrapEnabled: true },
    { columnName: "lastModified", align: "left", wordWrapEnabled: true },
    { columnName: "author", align: "left", wordWrapEnabled: true },
    { columnName: "manage", align: "right", wordWrapEnabled: true, width: 60 },
  ]);
  const onRowSelected = (item) => {
    setSelectedItemsId(item);
  };
  const onChangePage = () => {
    return;
  };
  const handleDeleteBtnClick = () => {
    selectedItemsId.length > 0
      ? toast(toastMsg, { position: toast.POSITION.TOP_CENTER })
      : toast("Nothing to delete.", { position: toast.POSITION.TOP_CENTER });
  };
  const handleDeleteSelected = () => {
    selectedItemsId.forEach((id) => removeItem(key, id));
  };

  const toastMsg = ({ closeToast }) => (
    <div>
      <p>{`Do you want to delete ${selectedItemsId.length} selected ${
        selectedItemsId.length > 1 ? "items" : "item"
      }?`}</p>
      <S.NotificationButton onClick={handleDeleteSelected}>
        Yes
      </S.NotificationButton>
      <S.NotificationButton onClick={closeToast}>No</S.NotificationButton>
    </div>
  );

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
    key,
    setKey,
    getNews,
    getEvents,
    getPosts,
    newsItems,
    eventItems,
    articleItems,
    pageSize,

    dateColumns,
    columns,
    tableColumnExtentions,
    handleDeleteBtnClick,
    onRowSelected,
    onChangePage,
    eventRows,
    articleRows,
    newsRows,
  };
};
