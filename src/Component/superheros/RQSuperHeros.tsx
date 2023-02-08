import { useQuery } from "@tanstack/react-query";
import { getAllData } from "../common/common";

const RQSuperHeros = () => {
  const fetchData = async () => {
    let response = await getAllData();
    return response;
  };

  let {
    isLoading,
    data,
    isError,
    error,
  }: { isLoading: boolean; data: any; isError: boolean; error: any } = useQuery(
    {
      queryKey: ["super-hero"],
      queryFn: fetchData,
    }
  );

  console.log("hiii", isLoading, isError);
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
          </div>
        )}
      </div>
    </div>
  );
};

export default RQSuperHeros;
