import { useInfiniteQuery } from "@tanstack/react-query";
import { getColorsInfinate } from "../Common/common";

export const InfinateQueryHook = ({ onSuccess, onError }: any) => {
  return useInfiniteQuery({
    queryKey: ["infinate-color-pagination"],
    queryFn: getColorsInfinate,
    onSuccess: onSuccess,
    onError: onError,
    getNextPageParam: (_lastPage, pages) => {
      if (pages.length < 4) {
        return pages.length + 1;
      } else {
        return undefined;
      }
    },
  });
};
