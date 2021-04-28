import React, { useEffect } from "react";
import { Breadcrumb } from "react-bootstrap";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import { useManageContainer } from "./container";
import { useContainer } from "./../../../public/home/container";
import { CustomDataTable } from "@components/shared/custom-table";

import * as C from "@utils/constants";
import * as S from "../style";

const ManageNews = () => {
  const { getNews } = useContainer();

  const {
    setKey,
    dateColumns,
    columns,
    tableColumnExtentions,
    handleDeleteBtnClick,
    onRowSelected,onChangePage,
    newsRows
  } = useManageContainer();

  useEffect(() => {
    getNews();
    setKey(C.GENERAL_CONSTANTS.NEWS);
  }, []);

  return (
    <section className="section manage-news">
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/panel">Admin Panel</Breadcrumb.Item>
        <Breadcrumb.Item active>Manage news</Breadcrumb.Item>
      </Breadcrumb>
      <h2 className="main-title">Manage news</h2>   
      <S.TableButton onClick={handleDeleteBtnClick}>Delete Selected</S.TableButton>
      <ToastContainer autoClose={false} /> 
      <CustomDataTable
        {...{
          rows: newsRows,
          columns,
          isGrouping: false,
          tableColumnExtensions: tableColumnExtentions,
          dateColumns,
          checkboxSelection: true,
          showSelectAll: false,
          onRowSelected,
          initSelection: null,
          onChangePage,
        }}
      />
      
    </section>
  );
};

export default ManageNews;
