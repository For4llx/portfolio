import IContent from "@/interface/Content";

export const fetchTrendings = async (): Promise<IContent> => {
  const response = await fetch("./api/trendings");
  return response.json();
};
