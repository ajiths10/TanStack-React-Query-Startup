import React, { useState, useEffect } from "react";
import { getAllData } from "../common/common";

const SuperHeros = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);
  const [isError, setError] = useState("");

  useEffect(() => {
    setLoading(true);
    getAllData()
      .then((res: any) => {
        setData(res);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h1>Normal Super Heros</h1>
      <div>
        {isLoading ? (
          "Loading..."
        ) : isError ? (
          <div>{isError}</div>
        ) : (
          <div>
            {data.map((buscat: any) => {
              return (
                <div key={buscat.id}>
                  <div>{buscat.id}</div>
                  <div>{buscat.name}</div>
                  <div>{buscat.alterEgo}</div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </div>
  );
};

export default SuperHeros;
