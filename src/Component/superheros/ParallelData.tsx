import { DynamicParallelQuerys } from "../../Hooks/dynamicParallelQuerys";
import { Wraper } from "./Common";

const ParallelData = () => {
  let dataHandle = [
    { key: "super-heros-datas", id: "superheroes" },
    { key: "friends-datas", id: "friends" },
  ];
  //side effects
  const onSuccess = () => {
    console.log("Perform side effect after data fatching Success");
  };
  const onError = (err: any) => {
    console.log("Perform side effect after data fatching Error", err);
  };

  let result: any = DynamicParallelQuerys({
    onSuccess,
    onError,
    data: dataHandle,
  });

  return (
    <div className="flex justify-center w-full m-5 min-h-[200px]">
      <div className="grid grid-cols-2 min-w-[500px] text-center bg-slate-200 gap-20">
        <div className="col-span-1">
          <Wraper
            isLoading={result[0].isLoading}
            isError={result[0].isError}
            error={result[0].error}
          >
            <div>Heros</div>
            <div>
              <ul className=" text-left p-2">
                {result[0]?.data?.data?.map((hero: { name: string }) => {
                  return <li>{hero.name}</li>;
                })}
              </ul>
            </div>
          </Wraper>
        </div>
        <div className="col-span-1">
          {" "}
          <Wraper
            isLoading={result[1].isLoading}
            isError={result[1].isError}
            error={result[1].error}
          >
            <div>Friends</div>
            <div>
              <ul className=" text-left p-2">
                {result[1]?.data?.data?.map((friends: { name: string }) => {
                  return <li>{friends.name}</li>;
                })}
              </ul>
            </div>
          </Wraper>
        </div>
      </div>
    </div>
  );
};

export default ParallelData;
