import axios from "axios";
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

export const addNewData = (data: data) => {
  return axios.post(`${URL}/superheroes/`, data);
};

export const getHeroById = (data: any) => {
  let id = data.queryKey[1];
  return axios.get(`${URL}/superheroes/${id}`);
};

export const dynamicAPi = (data: any) => {
  return axios.get(`${URL}/${data.queryKey[1]}`);
};
