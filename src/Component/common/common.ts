import axios from "axios";
let URL = "http://localhost:4000";

export const getAllData = () => {
  return new Promise(async (resolve, reject) => {
    try {
      let response = await axios.get(`${URL}/superheroes`);
      setTimeout(() => {
        resolve(response.data);
      }, 1500);
    } catch (error) {
      console.log(error);
      reject([]);
    }
  });
};
