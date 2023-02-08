import { useQuery } from "@tanstack/react-query";
import { getAllData } from "../Common/common";

export interface hero {
  id: number;
  name: string;
  alterEgo: string;
  crypto: Date | number | string;
}
interface fn {
  onSuccess: void;
  onError: void;
}

const fetchData = async () => {
  let response = await getAllData();
  return response;
};

export const SuperHeroQuery = ({ onSuccess, onError }: any) => {
  return useQuery({
    queryKey: ["super-hero"],
    queryFn: fetchData,
    // cacheTime: 5000, //Default time 5mins
    // staleTime: 10000, //keep data as fresh for 10sec, So no new api call will trigger until it chages to stale ( Default staleTime is 0sec )
    // refetchOnMount: true // this will call the api again when user mount to the DOM
    // refetchOnWindowFocus: true //this allow to get latest data when user focus on the page
    // refetchInterval: 2000, //refetch in interval ( Default is false)
    onSuccess: onSuccess,
    onError: onError,
    select: (data: any) => {
      let res = data.map((hero: hero) => {
        hero.crypto = new Date();
        return hero;
      });
      return res;
    },
  });
};
