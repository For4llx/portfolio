import { useQuery } from "@tanstack/react-query";
import { fetchTrendings } from "../services/trendings";

const useFetchTrendings = () => {
  const {
    data: trendings,
    isLoading: isLoadingTrendings,
    isError: isErrorTrendings,
    isSuccess: isSuccessTrendings,
  } = useQuery({
    queryKey: ["trendings"],
    queryFn: fetchTrendings,
  });

  return {
    trendings,
    isLoadingTrendings,
    isErrorTrendings,
    isSuccessTrendings,
  };
};

export default useFetchTrendings;
