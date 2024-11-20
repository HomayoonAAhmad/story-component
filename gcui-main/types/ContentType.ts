import Content from "./Content";

type ContentTypeType = {
  id: number;
  name: string;
  slug: string;
  avatar: string | null;
  description: string | null;
  meta: string | null;
  position: number;
  _status: number;
  contents: Content[] | null;
} | null;
export default ContentTypeType;
