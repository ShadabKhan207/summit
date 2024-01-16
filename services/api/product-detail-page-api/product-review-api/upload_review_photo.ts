
import axios from "axios";
import { CONSTANTS } from "../../../config/app-config";

const UploadReviewPhotoAPI = async (request: any) => {
  let response: any;

  const formData = new FormData();
  console.log("upload photo formData", formData);
  formData.append("file", request.file);

  const config = {
    headers: {
      "Content-Type": "multipart/form-data",
      Accept: "application/json",
      Authorization: 'token 5b6a2b791c4aa02:6d7e27c276625a4',
    },
    // timeout: 5000,
  };
  await axios
    .post(
      `${CONSTANTS.API_BASE_URL}/api/method/upload_file`,
      formData,
      config
    )
    .then((res) => {
      console.log(res, "response in api");
      response = res?.data?.message;
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

export default UploadReviewPhotoAPI;
