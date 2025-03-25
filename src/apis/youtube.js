import axios from "axios";

const KEY = "AIzaSyCSzIXwb5NIot8y4hx9trTt1YHE6iRet0o";

export default axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    type: "video",
    maxResults: 5,
    key: KEY,
  },
});
