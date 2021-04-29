import React, { useEffect } from "react";
import { Breadcrumb } from "react-bootstrap";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import { useManageContainer } from "./container";
import { useContainer } from "./../../../public/home/container";
import { CustomDataTable } from "@components/shared/custom-table";

import { TABLE_COLUMN_PROPERTIES, COLUMNS, tableColumnExtentions } from "../utils";
import * as C from "@utils/constants";
import * as S from "../style";

const ManageArticles = () => {
  const { getPosts } = useContainer(); 

  const {
    setKey,
    handleDeleteBtnClick,
    onChangePage,
    articleRows,
    setSelectedRowsId
  } = useManageContainer();  

  useEffect(()=>{
    getPosts();
    setKey(C.GENERAL_CONSTANTS.BLOG_POSTS)
  }, [])
  
  return (
    <section className="section manage-articles">
      <Breadcrumb>
        <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
        <Breadcrumb.Item href="/panel">Admin Panel</Breadcrumb.Item>
        <Breadcrumb.Item active>Manage articles</Breadcrumb.Item>
      </Breadcrumb>
      <h2 className="main-title">Manage articles</h2>
      <S.TableButton onClick={handleDeleteBtnClick}>Delete Selected</S.TableButton>
      <ToastContainer autoClose={false} />

      <CustomDataTable
        {...{
          rows: articleRows,
          columns: COLUMNS,
          tableColumnExtensions: tableColumnExtentions,
          dateColumns: [TABLE_COLUMN_PROPERTIES.MODIFIED],
          checkboxSelection: true,
          onRowSelected: (rowId) => setSelectedRowsId(rowId),
          onChangePage: () => onChangePage(),
        }}
      />
    </section>
  );
};

export default ManageArticles;
