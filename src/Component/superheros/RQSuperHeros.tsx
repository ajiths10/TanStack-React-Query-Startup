import React, { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getAllData, addNewData } from "../common/common";

interface qry {
  isLoading: boolean;
  data: any;
  isError: boolean;
  error: any;
  isFetching: boolean;
  refetch: any;
}

const RQSuperHeros = () => {
  const [timeInterval, settimeInterval] = useState<any>(3000);

  const fetchData = async () => {
    let response = await getAllData();
    return response;
  };

  const addData = async () => {
    let response = await addNewData({
      id: 4,
      name: "spiderman",
      alterEgo: "Petter parker",
    });
    return response;
  };

  const onSuccess = () => {
    console.log("Perform side effect after dara fatching");
  };
  const onError = () => {
    console.log("Perform side effect after dara fatching");
  };

  let { isLoading, data, isError, error, isFetching, refetch }: qry = useQuery({
    queryKey: ["super-hero"],
    queryFn: fetchData,
    // cacheTime: 5000, //Default time 5mins
    // staleTime: 10000, //keep data as fresh for 10sec, So no new api call will trigger until it chages to stale ( Default staleTime is 0sec )
    // refetchOnMount: true // this will call the api again when user mount to the DOM
    // refetchOnWindowFocus: true //this allow to get latest data when user focus on the page
    // refetchInterval: 2000, //refetch in interval ( Default is false)
    onSuccess: onSuccess,
    onError: onError,
    refetchInterval: timeInterval,
  });

  let {
    isLoading: isLoadingPost,
    isError: isErrorPost,
    refetch: refetchPost,
  } = useQuery({
    enabled: false,
    queryKey: ["add-new-super-hero"],
    queryFn: addData,
    onSuccess: () => {
      refetch();
      settimeInterval(false);
    },
  });

  return (
    <div>
      <h1>RQ Super Heros</h1>
      <div>
        {isLoading ? (
          "Loading..."
        ) : isError ? (
          <div>{error.message}</div>
        ) : (
          <div>
            {data?.map((buscat: any) => {
              return (
                <div key={buscat.id}>
                  <div>{buscat.id}</div>
                  <div>{buscat.name}</div>
                  <div>{buscat.alterEgo}</div>
                </div>
              );
            })}
            <button onClick={() => refetchPost()}>Add</button>
          </div>
        )}
      </div>
    </div>
  );
};

export default RQSuperHeros;
