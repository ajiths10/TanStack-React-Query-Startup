import React, { FC, useRef } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";

interface dataResponse {
  id: number | string;
  name: string;
  email: string;
  phone: number | string;
  username: string;
}

let usersData = [
  { id: 1, email: "assadasd@email" },
  { id: 2, email: "Sincere@april.biz" },
  { id: 3, email: "Nathan@yesenia.net" },
  { id: 4, email: "Lucio_Hettinger@annie.ca" },
  { id: 5, email: "Karley_Dach@jasper.info" },
];

const Home: FC<any> = (props) => {
  const inputRef = useRef<any>(null);
  const queryClient = useQueryClient();

  const datapromise = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(usersData);
      }, 1500);
    });
  };

  const fetchData = async () => {
    try {
      let response = await datapromise();
      return response;
    } catch (err: any) {
      console.log(err.message);
    }
  };

  const userQuery: any = useQuery({
    queryKey: ["users"],
    queryFn: fetchData,
  });

  const userMutate: any = useMutation({
    mutationFn: async (email: string) => {
      let length: number = userQuery.data.length;
      let response: any = await datapromise();

      return response.push({ id: length, email: email });
    },
    onSuccess: () => {
      queryClient.invalidateQueries(["users"]);
    },
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
          <input type="text" ref={inputRef} required />{" "}
          <button
            disabled={userMutate.isLoading}
            onClick={() => {
              userMutate.mutate(inputRef.current.value);
            }}
          >
            Add new user
          </button>
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
