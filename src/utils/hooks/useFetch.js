export const useFetch = (url) => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();
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
