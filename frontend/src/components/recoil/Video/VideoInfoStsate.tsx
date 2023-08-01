import { atom } from "recoil";

export const VideoInfoState = atom({
  key: "VideoInfoState",
  default: [
    {
      user_img_url: "",
      user_name: "",
      video_url: "",
      title: "",
      views: "",
      created_date: "",
    },
  ],
});
