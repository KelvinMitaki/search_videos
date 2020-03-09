import axios from "axios";

export const KEY = "AIzaSyBEvMGbGIRLvFm6gJz9Ez_dwBtCSYAVYwk";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3"
});
