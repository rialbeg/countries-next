import { instance } from "../axios/axios";

export async function getAllCountries() {
  const response = await instance.get("/all");
  return response.data;
}
export async function getCountryByName(name: string | string[] | undefined) {
  const response = await instance.get(`/name/${name}?fullText=true`);
  return response.data;
}

export async function getCountryByCode(code: string | string[] | undefined) {
  const response = await instance.get(`/alpha/${code}`);
  return response.data;
}
