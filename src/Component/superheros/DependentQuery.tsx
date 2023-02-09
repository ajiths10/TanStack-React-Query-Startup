import { useChannelQuery, useUsersQuery } from "../../Hooks/DependentQueryHook";
import { Wraper } from "./Common";

const DependentQuery = () => {
  let TEMP_USERID = "ajiths10@email.com";
  //side effects
  const onSuccess = () => {
    console.log("Perform side effect after data fatching Success");
  };
  const onError = (err: any) => {
    console.log("Perform side effect after data fatching Error", err);
  };

  let users: any = useUsersQuery({ onSuccess, onError, id: TEMP_USERID });
  let channel: any = useChannelQuery({
    onSuccess,
    onError,
    id: users?.data?.data.channelId ? users.data.data.channelId : null,
  });

  return (
    <div className="flex justify-center w-full m-5 min-h-[200px]">
      <div className="grid grid-cols-2 min-w-[500px] text-center bg-slate-200 gap-20">
        <div className="col-span-1">
          <Wraper
            isLoading={users.isLoading}
            isError={users.isError}
            error={users.error}
          >
            <h2>User</h2>
            <div>{users?.data?.data?.id ? users.data.data.id : "none"}</div>
          </Wraper>
        </div>
        <div className="col-span-1">
          {" "}
          <Wraper
            isLoading={channel.isLoading}
            isError={channel.isError}
            error={channel.error}
          >
            <h2>courses</h2>
            <div>
              <ul className=" text-left pl-3 ">
                {channel?.data?.data?.courses?.map((buscat: string) => {
                  return <li>{buscat}</li>;
                })}
              </ul>
            </div>
          </Wraper>
        </div>
      </div>
    </div>
  );
};

export default DependentQuery;
