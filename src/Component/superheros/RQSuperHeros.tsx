import { useQuery } from "@tanstack/react-query";
import { getAllData } from "../common/common";

const RQSuperHeros = () => {
  const fetchData = async () => {
    let response = await getAllData();
    return response;
  };

  let { isLoading, data }: { isLoading: boolean; data: any } = useQuery({
    queryKey: ["super-hero"],
    queryFn: fetchData,
  });

  return (
    <div>
      <h1>RQ Super Heros</h1>
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

export default RQSuperHeros;
