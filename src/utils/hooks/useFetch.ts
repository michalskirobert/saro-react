import { useState, useEffect } from "react";
import axios, {AxiosResponse} from "axios";
import { NReducers } from "@namespace/reducers";

export const useFetch = (url: string): NReducers.TUseFetch => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<AxiosResponse>();

  const getData = async () => {
    const response = await axios.get(url);
    const data = response.data;
    setData(data);
    setIsLoading(false);
  };

  useEffect(() => {
    getData();
  }, [url]);

  return {
    isLoading,
    data,
  };
};
