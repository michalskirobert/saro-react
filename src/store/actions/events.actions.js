import { eventsConstants } from "../../utils/constants";

const getEventsRequest = () => {
  return {
    type: eventsConstants.GET_EVENTS_REQ,
  };
};

const getEvents = (events) => {
  return {
    type: eventsConstants.GET_EVENTS_SUCCESS,
    payload: events,
  };
};

export const eventsActions = {
  getEvents,
  getEventsRequest,
};
