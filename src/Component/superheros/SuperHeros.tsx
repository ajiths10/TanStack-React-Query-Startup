import React, { useState, useEffect } from "react";
import { getAllData } from "../common/common";

const SuperHeros = () => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    getAllData().then((res: any) => {
      setData(res);
      setLoading(false);
    });
  }, []);

  return (
    <div>
      <h1>Normal Super Heros</h1>
      <div>
        {isLoading ? (
          "Loading..."
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
