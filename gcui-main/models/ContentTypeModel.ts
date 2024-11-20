import { Fetch } from "../functions/Fetch";
import ContentTypeType from "../types/ContentType";
const getContentType = async ({ slug }): Promise<ContentTypeType> => {
  let response: ContentTypeType = null;
  await Fetch(
    {
      method: "get",
      headers: null,
      dataType: "application/json",
      url: process.env.NEXT_PUBLIC_API_URL + "/content_types/" + slug,
      data: "",
      cache: "no-store",
    },
    (data) => {
      response = data.data.data;
    },
    (error) => {
      console.error("Content type model error :", error);
      response = null;
    }
  );
  return response;
};
export { getContentType };
