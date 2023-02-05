import React, { FC } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import axios from "axios";

interface dataResponse {
  id: number | string;
  name: string;
  email: string;
  phone: number | string;
  username: string;
}

const Home: FC<any> = (props) => {
  const fetchData = async () => {
    try {
      let response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      return response.data;
    } catch (err: any) {
      console.log(err.message);
    }
  };

  const userQuery: any = useQuery({
    queryKey: ["users"],
    queryFn: fetchData,
  });

  return (
    <div className="container">
      {userQuery.isLoading ? (
        <h2>Loading...</h2>
      ) : userQuery.isError ? (
        <h3>{userQuery.error.toString()}</h3>
      ) : (
        <>
          <h1>TanStack Query v4</h1>
          <div>
            {userQuery.data.map((buscat: dataResponse) => {
              return <p>{buscat.email}</p>;
            })}
          </div>
        </>
      )}
    </div>
  );
};

export default Home;
