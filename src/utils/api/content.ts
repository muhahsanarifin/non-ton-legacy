import Axios from "axios";

const BASE_URL = process.env.NEXT_PUBLIC_NON_TON_SUPPORT_BY_PULO_DEV;

export const getContents = (queryParams: string) => {
  const url = `${BASE_URL}/v1/contents`;

  return Axios.get<any>(`${url}?${queryParams}`);
};
