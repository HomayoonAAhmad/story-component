import { Fetch } from "../functions/Fetch";
import SettingType from "../types/Setting";

const getSettings = async (): Promise<SettingType[]> => {
  let response: [SettingType] = [];
  await Fetch(
    {
      method: "get",
      headers: null,
      dataType: "application/json",
      url: process.env.NEXT_PUBLIC_API_URL + "/settings",
      data: "",
    },
    (data) => {
      response = data.data.data;
    },
    (error) => {
      response = [];
    }
  );
  return response;
};
const getSetting = async ({ slug }): Promise<SettingType> => {
  let response: SettingType = null;
  await Fetch(
    {
      method: "get",
      headers: null,
      dataType: "application/json",
      url: process.env.NEXT_PUBLIC_API_URL + "/settings/",
      data: "",
    },
    (data) => {
      response = data.data.data[slug];
    },
    (error) => {
      response = null;
    }
  );
  return response;
};
export { getSettings, getSetting };
