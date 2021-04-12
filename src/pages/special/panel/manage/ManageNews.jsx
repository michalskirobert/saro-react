import React, {useEffect} from 'react'

import { useManage } from "./container";
import { Tr } from "./../style";
import {
    Tabs,
    Tab,
    Nav,
    Table,
    Button,
    Pagination,
    Card,
    
  } from "react-bootstrap";

const ManageNews = () => {

    const { paginate,
        totalCount, itemsPerPage,
        slicedNews,
        slicedEvents,
        slicedPosts,
        newsItems,
        newsEvents,
        handleEdit,
        newsPosts,
        getNews, getEvents, getPosts,
        removeItem,} = useManage()

        useEffect(()=>{
            getNews()
        },[])

    
  useEffect(() => {

    if (totalCount <= itemsPerPage) {
      paginate(1);
    }
    // eslint-disable-next-line
  }, [totalCount, itemsPerPage]);


    return (
        <Table striped bordered hover>
                  <thead>
                    <Tr>Manage news</Tr>
                    <tr>
                      <th>#</th>
                      <th>Title</th>
                      <th>Published date</th>
                      <th>Author</th>
                      <th>Menagement</th>
                    </tr>
                  </thead>
                  {newsItems.map((post, index) => {
                    const { crew, title, publishedDate, id, type } = post;
                    return (
                      <tbody key={id}>
                        <tr>
                          <td>{index}</td>
                          <td>{title}</td>
                          <td>{publishedDate}</td>
                          <td>{crew}</td>
                          <td>
                            <Button
                              {...{
                                variant: "primary",
                                onClick: () => handleEdit(id, type),
                              }}
                            >
                              Edit
                            </Button>
                            <Button
                              {...{
                                variant: "danger",
                                onClick: () => removeItem(type, id),
                              }}
                            >
                              Remove
                            </Button>
                          </td>
                        </tr>
                      </tbody>
                    );
                  })}
                </Table>
    )
}

export default ManageNews
