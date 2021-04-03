import axios from "axios";

export const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

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
