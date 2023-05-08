import IContent from "@/interface/Content";

export const fetchRecommendeds = async (): Promise<IContent> => {
  const response = await fetch("./api/recommendeds");
  return response.json();
};
