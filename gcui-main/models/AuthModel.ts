import { Fetch } from "../functions/Fetch";

const loginSendSms = async (data, onSuccess, onFailed) => {
  await Fetch(
    {
      method: "post",
      headers: null,
      dataType: "application/json",
      url: process.env.NEXT_PUBLIC_API_URL + "/auth/send_code",
      data: data,
      cache: "no-store",
    },
    (data) => {
      console.log("data", data);
      typeof onSuccess == "function" && onSuccess(data.data);
    },
    (error) => {
      typeof onFailed == "function" && onFailed(error);
    }
  );
};
const loginConfirmSms = async (data, onSuccess, onFailed) => {
  await Fetch(
    {
      method: "post",
      headers: null,
      dataType: "application/json",
      url: process.env.NEXT_PUBLIC_API_URL + "/auth/verify_code",
      data: data,
      cache: "no-store",
    },
    (data) => {
      typeof onSuccess == "function" && onSuccess(data.data.data);
    },
    (error) => {
      typeof onFailed == "function" && onFailed(error);
    }
  );
};
const getProfile = async () => {
  let response = null;
  await Fetch(
    {
      method: "get",
      authorization: true,
      headers: null,
      dataType: "application/json",
      url: process.env.NEXT_PUBLIC_API_URL + "/user/profile",
      data: "",
      cache: "no-store",
    },
    (data) => {
      response = data.data.data;
    },
    (error) => {}
  );
  return response;
};
const updateProfile = async (data) => {
  let response = null;
  await Fetch(
    {
      method: "post",
      authorization: true,
      headers: null,
      dataType: "application/json",
      url: process.env.NEXT_PUBLIC_API_URL + "/user/profile",
      data: data,
      cache: "no-store",
    },
    (data) => {
      response = data.data.data;
    },
    (error) => {}
  );
  return response;
};

export { loginSendSms, loginConfirmSms, getProfile, updateProfile };
