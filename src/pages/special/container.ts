import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { RootStateOrAny, useDispatch, useSelector } from "react-redux";
import { cmsActions, fetchActions } from "@actions/index";
import * as CONSTANTS from "@utils/constants";
import { NCMS } from "src/core/types";
import { CMSConfigService } from "./service";
import { toast } from "react-toastify";

export const useCMSContainer = (): any => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [pageSize, setPageSize] = useState<number>(10);

  const dispatch = useDispatch();
  const { events }: { events: NCMS.TEventItem } = useSelector(
    ({ database }: RootStateOrAny) => database.events
  );
  const { language }: { language: string } = useSelector(
    ({ general }: RootStateOrAny) => general
  );

  const getEvents = async (
    page: number,
    size: number,
    lang: string
  ): Promise<void> => {
    try {
      dispatch(fetchActions.getEventsRequest());
      const events = await CMSConfigService.getEvents(lang, page, size);
      dispatch(fetchActions.getEventsSuccess(events));
    } catch (error) {
      dispatch(fetchActions.getEventsFailure());
      toast.error("Error kurwa no i cóż");
    }
  };

  const onChangePage = (page: number, pageSize: number): void => {
    setCurrentPage(page);
    setPageSize(pageSize);
  };

  useEffect(() => {
    getEvents(currentPage, pageSize, language);
  }, []);

  return {
    getEvents,
    onChangePage,
  };
};
