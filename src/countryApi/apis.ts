import { instance } from "../axios/axios";

export async function getAllCountries() {
  const response = await instance.get("/all");
  return response.data;
}
