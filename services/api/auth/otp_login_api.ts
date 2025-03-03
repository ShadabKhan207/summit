import axios from "axios";
import { CONSTANTS } from "../../config/app-config";
import { client } from "../general_apis/cookie-instance-api";
const getOtpFetch = async (emailval: any) => {
  let response: any;
  const version = CONSTANTS.VERSION;
  const method = "send_otp";
  const entity = "otp";
  const params = `?version=${version}&method=${method}&entity=${entity}`;
  const config = {
    headers: {
      Accept: "application/json",
    },
  };
  const token = localStorage.getItem("token");

  let body = {
    email: emailval,
  };

  await axios
    .post(
      `${CONSTANTS.API_BASE_URL}/${CONSTANTS.API_MANDATE_PARAMS}${params}`,
      body,
      { ...config, timeout: 5000 }
    )
    .then((res) => {
      response = res;
    })
    .catch((err) => {
      if (err.code === "ECONNABORTED") {
        response = "Request timed out";
      } else if (err.code === "ERR_BAD_REQUEST") {
        response = "Bad Request";
      } else if (err.code === "ERR_INVALID_URL") {
        response = "Invalid URL";
      } else {
        response = err;
      }
    });
  return response;
};

const getOtpFetchApi = (emailval: any) => getOtpFetch(emailval);

export default getOtpFetchApi;
