import { SaroApi } from "@helpers/api";
import axios from "axios";

export const ConfigAppService = {
  getDictionariesApp: async (lang: string): Promise<any> =>
    await axios
      .get(`${SaroApi}/${lang}/dictionaries`)
      .then((resp) => resp.data),
  getInitConfigApp: async (): Promise<any> =>
    await axios.get(`${SaroApi}/init`).then((resp) => resp.data),
};
