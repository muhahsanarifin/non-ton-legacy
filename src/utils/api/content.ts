import Axios from "axios";
import { contentProps } from "../types/contentsType";

const BASE_URL = process.env.NEXT_PUBLIC_NON_TON_SUPPORT_BY_PULO_DEV;

export const contests = (queryParams: string) => {
  const url = `${BASE_URL}/v1/contents`;

  return Axios.get<Array<contentProps>>(`${url}/${queryParams}`);
};
