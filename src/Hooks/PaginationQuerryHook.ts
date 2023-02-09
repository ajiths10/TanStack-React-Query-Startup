import { useQuery } from "@tanstack/react-query";
import { getColorsByPage } from "../Common/common";

export const useColorsPaginaionQuery = ({ onSuccess, onError, page }: any) => {
  return useQuery({
    queryKey: ["color-pagination", page],
    queryFn: getColorsByPage,
    onSuccess: onSuccess,
    onError: onError,
    keepPreviousData: true, // keep the previous data, isFetch will show fetching
  });
};
