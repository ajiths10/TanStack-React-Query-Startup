import { useQuery } from "@tanstack/react-query";
import { getUsersById, getChannelById } from "../Common/common";

export const useUsersQuery = ({ onSuccess, onError, id }: any) => {
  return useQuery({
    queryKey: ["get-userby-id", id],
    queryFn: getUsersById,
    onSuccess: onSuccess,
    onError: onError,
  });
};

export const useChannelQuery = ({ onSuccess, onError, id }: any) => {
  return useQuery({
    queryKey: ["get-channelby-id", id],
    queryFn: getChannelById,
    onSuccess: onSuccess,
    onError: onError,
    enabled: !!id,
  });
};
