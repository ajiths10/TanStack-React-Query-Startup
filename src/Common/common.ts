import axios from "axios";
import { request } from "../util/axios-util";
let URL = "http://localhost:4000";

interface data {
  id: number;
  name: string;
  alterEgo: string;
}

export const getAllData = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let response = await axios.get(`${URL}/superheroes`);
      setTimeout(() => {
        resolve(response.data);
      }, 1500);
      //throw new Error("404 page not found!");
    } catch (error) {
      console.log(error);
      reject(error);
    }
  });
};

export const getAllData_ForQuery = () => {
  // return axios.get(`${URL}/superheroes`);
  return request({ url: "/superheroes" });
};

export const addNewSuperHero = (data: data) => {
  // return axios.post(`${URL}/superheroes/`, data);
  return request({ url: "/superheroes", method: "post", data });
};

export const getHeroById = (data: any) => {
  let id = data.queryKey[1];
  return axios.get(`${URL}/superheroes/${id}`);
};

export const dynamicAPi = (data: any) => {
  return axios.get(`${URL}/${data.queryKey[1]}`);
};

export const getUsersById = (data: any) => {
  return axios.get(`${URL}/users/${data.queryKey[1]}`);
};

export const getChannelById = (data: any) => {
  return axios.get(`${URL}/channels/${data.queryKey[1]}`);
};

export const getColorsByPage = ({ queryKey }: any) => {
  return axios.get(`${URL}/colors?_limit=2&_page=${queryKey[1]}`);
};

export const getColorsInfinate = ({ pageParam = 1 }: any) => {
  return axios.get(`${URL}/colors?_limit=2&_page=${pageParam}`);
};
