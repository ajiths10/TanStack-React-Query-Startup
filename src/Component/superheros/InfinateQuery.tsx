import { useState } from "react";
import { Wraper } from "./Common";
import { InfinateQueryHook } from "../../Hooks/InfinateQueryHook";

interface color {
  id: number | string;
  label: string;
}

const InfinateQuery = () => {
  //side effects
  const onSuccess = () => {
    console.log("Perform side effect after data fatching Success");
  };
  const onError = (err: any) => {
    console.log("Perform side effect after data fatching Error", err);
  };

  const {
    isLoading,
    isError,
    error,
    data,
    fetchNextPage,
    hasNextPage,
    isFetching,
    isFetchingNextPage,
  }: // isFetchingPreviousPage,
  // fetchPreviousPage,
  // hasPreviousPage,
  any = InfinateQueryHook({ onSuccess, onError });

  return (
    <div className="flex justify-center w-full m-5 min-h-[200px]">
      <div className="grid grid-cols-2 min-w-[500px] text-center bg-slate-200 gap-20">
        <div className="col-span-2">
          <Wraper isLoading={isLoading} isError={isError} error={error}>
            <h2>Colors</h2>
            <div>
              <ul>
                {data?.pages?.map((group: any, i: number) => (
                  <div key={i}>
                    {group?.data?.map((color: color) => {
                      return <li key={color.id}>{color.label}</li>;
                    })}
                  </div>
                ))}
              </ul>
            </div>
          </Wraper>
          <div className="p-5">
            {/* <button
              onClick={() => fetchPreviousPage()}
              disabled={!hasPreviousPage}
              className="h-[40px] w-[120px] bg-slate-600 rounded-lg text-slate-100 hover:bg-slate-700 disabled:bg-slate-400 "
            >
              Go back
            </button> */}
            <button
              onClick={() => fetchNextPage()}
              disabled={!hasNextPage}
              className="h-[40px] w-[120px] bg-slate-600 rounded-lg text-slate-100 hover:bg-slate-700 disabled:bg-slate-400 ml-5"
            >
              load more
            </button>

            {isFetching && !isFetchingNextPage ? (
              <div>Fetching more...</div>
            ) : (
              <></>
            )}
            {/* {isFetching && !isFetchingPreviousPage ? (
              <div>Fetching previos...</div>
            ) : (
              <></>
            )} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfinateQuery;
