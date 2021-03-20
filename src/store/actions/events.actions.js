import { EVENTS_CONSTANTS } from "../../utils/constants";

const getEventsRequest = () => {
  return {
    type: EVENTS_CONSTANTS.GET_EVENTS_REQ,
  };
};

const getEvents = (events) => {
  return {
    type: EVENTS_CONSTANTS.GET_EVENTS_SUCCESS,
    payload: events,
  };
};

export const eventsActions = {
  getEvents,
  getEventsRequest,
};
