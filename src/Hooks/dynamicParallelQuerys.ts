import { useQuery, useQueries } from "@tanstack/react-query";
import { dynamicAPi } from "../Common/common";

export const DynamicParallelQuerys = ({ onSuccess, onError, data }: any) => {
  return useQueries({
    queries: data.map((buscat: any) => {
      return {
        queryKey: [buscat.key, buscat.id],
        queryFn: dynamicAPi,
        onSuccess,
        onError,
      };
    }),
  });
};
