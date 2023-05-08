import { useQuery } from "@tanstack/react-query";
import { fetchRecommendeds } from "../services/recommendeds";

const useFetchRecommendends = () => {
  const {
    data: recommendeds,
    isLoading: isLoadingRecommendeds,
    isError: isErrorRecommendeds,
    isSuccess: isSuccessRecommendeds,
  } = useQuery({
    queryKey: ["recommendeds"],
    queryFn: fetchRecommendeds,
  });

  return {
    recommendeds,
    isLoadingRecommendeds,
    isErrorRecommendeds,
    isSuccessRecommendeds,
  };
};

export default useFetchRecommendends;
