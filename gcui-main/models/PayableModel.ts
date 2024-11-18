import { Fetch } from "../functions/Fetch";

const getPayable = async (slug: string) => {
  let response = null;
  await Fetch(
    {
      method: "get",
      headers: null,
      dataType: "application/json",
      url: process.env.NEXT_PUBLIC_API_URL + "/payables/" + slug,
      data: "",
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
export { getPayable };
