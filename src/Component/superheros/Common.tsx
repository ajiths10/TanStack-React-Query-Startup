export const Wraper = (props: any) => {
  return (
    <div>
      {props.isLoading ? (
        "Loading..."
      ) : props.isError ? (
        <div>{props.error.message}</div>
      ) : (
        <>{props.children}</>
      )}
    </div>
  );
};
