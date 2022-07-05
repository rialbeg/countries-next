import { instance } from "../axios/axios";

export async function getAllCountries() {
  try {
    const response = await instance.get("/all");
    return response.data;
  } catch (e) {
    console.log(e);
  }
}
export async function getCountryByName(name: string | string[] | undefined) {
  try {
    const response = await instance.get(`/name/${name}?fullText=true`);
    return response.data;
  } catch (e) {
    console.log(e);
  }
}

export async function getCountryByCode(code: string | string[] | undefined) {
  try {
    const response = await instance.get(`/alpha/${code}`);
    return response.data;
  } catch (e) {
    console.log(e);
  }
}
