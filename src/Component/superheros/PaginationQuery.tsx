import { useState } from "react";
import { useColorsPaginaionQuery } from "../../Hooks/PaginationQuerryHook";
import { Wraper } from "./Common";

interface color {
  id: number | string;
  label: string;
}

const PaginationQuery = () => {
  const [pagination, setPagination] = useState<number>(1);

  let TEMP_USERID = "ajiths10@email.com";
  //side effects
  const onSuccess = () => {
    console.log("Perform side effect after data fatching Success");
  };
  const onError = (err: any) => {
    console.log("Perform side effect after data fatching Error", err);
  };

  let { isLoading, isError, error, data, isFetching }: any =
    useColorsPaginaionQuery({ onSuccess, onError, page: pagination });

  return (
    <div className="flex justify-center w-full m-5 min-h-[200px]">
      <div className="grid grid-cols-2 min-w-[500px] text-center bg-slate-200 gap-20">
        <div className="col-span-2">
          <Wraper isLoading={isLoading} isError={isError} error={error}>
            <h2>Colors</h2>
            <div>
              <ul>
                {data?.data?.map((colors: color) => (
                  <li key={colors.id}>{colors.label}</li>
                ))}
              </ul>
            </div>
          </Wraper>
          <div className="p-5">
            <button
              onClick={() => setPagination((prev) => prev - 1)}
              disabled={pagination === 1}
              className="h-[40px] w-[120px] bg-slate-600 rounded-lg text-slate-100 hover:bg-slate-700 disabled:bg-slate-400"
            >
              Previous
            </button>
            <button
              onClick={() => setPagination((prev) => prev + 1)}
              disabled={pagination === 4}
              className="h-[40px] w-[120px] bg-slate-600 rounded-lg text-slate-100 hover:bg-slate-700 m-5 disabled:bg-slate-400"
            >
              Next
            </button>
            {isFetching ? <div>Loding...</div> : <></>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaginationQuery;
