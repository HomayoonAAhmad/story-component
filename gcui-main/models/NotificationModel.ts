import { Fetch } from "@/gcui-main/functions/Fetch";

const getNotification = async (page = 0, all = 1) => {
  let response = null;
  await Fetch(
    {
      method: "get",
      headers: null,
      dataType: "application/json",
      url:
        process.env.NEXT_PUBLIC_API_URL +
        `/notification?page=${page}&all=${all}`,
      data: "",
      authorization: true,
      cache: "no-store",
    },
    (data) => {
      response = data.data.data;
    },
    (error) => {
      console.error("Payable model error :", error);
      response = null;
    }
  );
  return response;
};

const getNotificationCount = async () => {
  let response = null;
  await Fetch(
    {
      method: "get",
      headers: null,
      dataType: "application/json",
      url: process.env.NEXT_PUBLIC_API_URL + `/notification/count`,
      data: "",
      authorization: true,
      cache: "no-store",
    },
    (data) => {
      response = data.data.data;
    },
    (error) => {
      console.error("Payable model error :", error);
      response = null;
    }
  );
  return response;
};

const doReadNotification = async () => {
  let response = null;
  await Fetch(
    {
      method: "post",
      headers: null,
      dataType: "application/json",
      url: process.env.NEXT_PUBLIC_API_URL + `/notification/read`,
      data: "",
      authorization: true,
      cache: "no-store",
    },
    (data) => {
      response = data.data.data;
    },
    (error) => {
      console.error("Payable model error :", error);
      response = null;
    }
  );
  return response;
};

export { getNotification, getNotificationCount, doReadNotification };
