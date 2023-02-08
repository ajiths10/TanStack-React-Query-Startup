import { useParams } from "react-router-dom";
import { HeroPersonalQuery, hero } from "../../Hooks/superHeroQuery";

const PersonalDetails = () => {
  const params = useParams();

  //side effects
  const onSuccess = () => {
    console.log("Perform side effect after data fatching Success");
  };
  const onError = () => {
    console.log("Perform side effect after data fatching Error");
  };

  let { isLoading, data, isError, error }: any = HeroPersonalQuery({
    onSuccess,
    onError,
    id: params.id,
  });

  return (
    <div className="m-5">
      <h1>Hero Personal file</h1>
      <div>
        {isLoading ? (
          "Loading..."
        ) : isError ? (
          <div>{error.message}</div>
        ) : (
          <div>
            <div>{data.data.id}</div>
            <div>{data.data.name}</div>
            <div>{data.data.alterEgo}</div>
          </div>
        )}
      </div>
    </div>
  );
};
export default PersonalDetails;
