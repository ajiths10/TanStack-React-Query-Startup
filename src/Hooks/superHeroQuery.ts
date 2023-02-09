import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  getAllData,
  getHeroById,
  addNewSuperHero,
  getAllData_ForQuery,
} from "../Common/common";

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
    queryKey: ["super-heros"],
    queryFn: getAllData_ForQuery,
    // cacheTime: 5000, //Default time 5mins
    // staleTime: 10000, //keep data as fresh for 10sec, So no new api call will trigger until it chages to stale ( Default staleTime is 0sec )
    // refetchOnMount: true // this will call the api again when user mount to the DOM
    // refetchOnWindowFocus: true //this allow to get latest data when user focus on the page
    // refetchInterval: 2000, //refetch in interval ( Default is false)
    onSuccess: onSuccess,
    onError: onError,
    select: (data: any) => {
      let res = data.data.map((hero: hero) => {
        hero.crypto = new Date();
        return hero;
      });
      return res;
    },
  });
};

export const HeroPersonalQuery = ({ onSuccess, onError, id }: any) => {
  return useQuery({
    queryKey: ["heros-personal-queries", id],
    queryFn: getHeroById,
    onSuccess: onSuccess,
    onError: onError,
    staleTime: 10000000, // will no refetch untill this time runs out (keep as fresh data)
  });
};

export const useAddNewSuperHero: any = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: addNewSuperHero,
    onSuccess: (response) => {
      // ###
      // This will make another api call and fetch the data as the key query.
      // queryClient.invalidateQueries({ queryKey: ["super-heros"] });
      // ###
      // This will add the response data to the oldData.
      return queryClient.setQueriesData(["super-heros"], (prevData: any) => {
        return {
          ...prevData,
          data: [...prevData.data, response.data],
        };
      });
    },
  });
};
