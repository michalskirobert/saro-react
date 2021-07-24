import { SaroApi } from "@helpers/api";
import { NCMS } from "@namespace/cms";
import axios from "axios";

import qs from "qs";

export const CMSConfigService = {
  getEvents: async (
    lang: string,
    page: number,
    pageSize: number
  ): Promise<NCMS.TEvents> => {
    const queryParams = qs.stringify({ page, pageSize }, { allowDots: true });
    return await axios
      .get<NCMS.TEvents>(`${SaroApi}/${lang}/events?${queryParams}`)
      .then((resp) => resp.data);
  },

  updateEvents: async (
    id: string | number,
    body: Partial<NCMS.TEventItem>,
    lang: string
  ): Promise<NCMS.TEvents> =>
    await axios
      .put<NCMS.TEvents>(`${SaroApi}/${lang}/events/${id}`, body)
      .then((resp) => resp.data),

  addEvents: async (
    body: Partial<NCMS.TEventItem>,
    lang: string
  ): Promise<NCMS.TEvents> =>
    await axios
      .post<NCMS.TEvents>(`${SaroApi}/${lang}/events`, body)
      .then((resp) => resp.data),
};
