import axios from "axios";
let URL = "http://localhost:4000";

const client = axios.create({ baseURL: URL });

export const request = ({ ...options }) => {
  client.defaults.headers.common.Authorization = `Bearer token`;

  //side effects
  const onSuccess = (response: any) => {
    // optionaly catch errors and add additional logging here
    // success handling
    return response;
  };
  const onError = (error: any) => {
    // optionaly catch errors and add additional logging here
    // error handling
    return error;
  };

  return client(options).then(onSuccess).catch(onError);
};
