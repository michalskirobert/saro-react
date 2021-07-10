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
};
