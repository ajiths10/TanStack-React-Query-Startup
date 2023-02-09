import React, { useEffect, useState } from "react";
import { SuperHeroQuery, hero } from "../../Hooks/superHeroQuery";
import { Link } from "react-router-dom";
import AddNewHeroForm from "./Form/AddNewHeroForm";

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
    console.log("Perform side effect after data fatching Success");
  };
  const onError = () => {
    console.log("Perform side effect after data fatching Error");
  };

  let { isLoading, data, isError, error, isFetching, refetch }: qry =
    SuperHeroQuery({ onSuccess, onError });

  return (
    <div className="m-5">
      <h1>RQ Super Heros</h1>
      <div>
        {isLoading ? (
          "Loading..."
        ) : isError ? (
          <div>{error.message}</div>
        ) : (
          <div>
            <AddNewHeroForm />
            <div>
              {data?.map((buscat: hero) => {
                return (
                  <div key={buscat.id} className="m-5">
                    <Link to={`/hero/${buscat.id}`}>{buscat.name}</Link>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default RQSuperHeros;
