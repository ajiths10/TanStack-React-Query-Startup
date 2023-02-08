import React, { useState } from "react";
import { SuperHeroQuery, hero } from "../../Hooks/superHeroQuery";

interface qry {
  isLoading: boolean;
  data: any;
  isError: boolean;
  error: any;
  isFetching: boolean;
  refetch: any;
}

const RQSuperHeros = () => {
  const onSuccess = () => {
    console.log("Perform side effect after dara fatching");
  };
  const onError = () => {
    console.log("Perform side effect after dara fatching");
  };

  let { isLoading, data, isError, error, isFetching, refetch }: qry =
    SuperHeroQuery({ onSuccess, onError });

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
            {data?.map((buscat: hero) => {
              console.log("hiiii", data);
              return (
                <div key={buscat.id}>
                  <div>{buscat.id}</div>
                  <div>{buscat.name}</div>
                  <div>{buscat.alterEgo}</div>
                  {/* <div>{buscat.crypto.toString()}</div> */}
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default RQSuperHeros;
