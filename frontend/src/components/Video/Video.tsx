import { useEffect } from "react";
import { VideoWrapperStyle } from "./VideoStyle";
import VideoList from "./VideoList";
import { useSetRecoilState } from "recoil";
import { VideoInfoState } from "components/recoil/Video/VideoInfoStsate";

function Video() {
  const setVideoInfo = useSetRecoilState(VideoInfoState);

  useEffect(() => {
    setVideoInfo([
      {
        user_img_url:
          "https://yt3.ggpht.com/ytc/AOPolaQ0dkgh4R7UU4prOrYvf2u0hXmCQkEIy0zE5dMVhg=s68-c-k-c0x00ffffff-no-rj",
        user_name: "지무비 : G Movie",
        video_url: "J-HCAhbUcRM",
        title:
          "와..이 영화가 나왔다고..?! 몰입감 58000%.. 숨도 못쉬고 보게 되는 하반기 최고 기대작",
        views: "10만회",
        created_date: "8시간 전",
      },
      {
        user_img_url:
          "https://yt3.ggpht.com/w7ColCSgsKVMJuh6izq4oRlYn-ZkJ8roQuHQy1Nvc75ONCH7uzLmoUE5YMJtZqFCHb4ZFPxAOg=s68-c-k-c0x00ffffff-no-rj",
        user_name: "SBS 뉴스",
        video_url: "N5tgEJxc0M0",
        title: "미국 정부, 수십 년 숨겨... 이간 아닌 존재 확인됐다",
        views: "103만회",
        created_date: "1일 전",
      },

      {
        user_img_url:
          "https://yt3.ggpht.com/Iw2zcGk1zCKWgaykhrcuHDalB18XETtvCv0Z9VNZMO6tjDRmh1_iCcy1D0s8XHFxuhnLMX0D=s68-c-k-c0x00ffffff-no-rj",
        user_name: "홍시네마",
        video_url: "snkvygYincY",
        title:
          "좀비 바이러스로 멸망한 세상에서 깊은 산에서만 조용히 살아가는 남자의 소름돋는 비밀",
        views: "4.2천회",
        created_date: "51분 전",
      },
      {
        user_img_url:
          "https://yt3.ggpht.com/Iw2zcGk1zCKWgaykhrcuHDalB18XETtvCv0Z9VNZMO6tjDRmh1_iCcy1D0s8XHFxuhnLMX0D=s68-c-k-c0x00ffffff-no-rj",
        user_name: "홍시네마",
        video_url: "snkvygYincY",
        title:
          "좀비 바이러스로 멸망한 세상에서 깊은 산에서만 조용히 살아가는 남자의 소름돋는 비밀",
        views: "4.2천회",
        created_date: "51분 전",
      },
      {
        user_img_url:
          "https://yt3.ggpht.com/Iw2zcGk1zCKWgaykhrcuHDalB18XETtvCv0Z9VNZMO6tjDRmh1_iCcy1D0s8XHFxuhnLMX0D=s68-c-k-c0x00ffffff-no-rj",
        user_name: "홍시네마",
        video_url: "snkvygYincY",
        title:
          "좀비 바이러스로 멸망한 세상에서 깊은 산에서만 조용히 살아가는 남자의 소름돋는 비밀",
        views: "4.2천회",
        created_date: "51분 전",
      },
      {
        user_img_url:
          "https://yt3.ggpht.com/Iw2zcGk1zCKWgaykhrcuHDalB18XETtvCv0Z9VNZMO6tjDRmh1_iCcy1D0s8XHFxuhnLMX0D=s68-c-k-c0x00ffffff-no-rj",
        user_name: "홍시네마",
        video_url: "snkvygYincY",
        title:
          "좀비 바이러스로 멸망한 세상에서 깊은 산에서만 조용히 살아가는 남자의 소름돋는 비밀",
        views: "4.2천회",
        created_date: "51분 전",
      },
      {
        user_img_url:
          "https://yt3.ggpht.com/Iw2zcGk1zCKWgaykhrcuHDalB18XETtvCv0Z9VNZMO6tjDRmh1_iCcy1D0s8XHFxuhnLMX0D=s68-c-k-c0x00ffffff-no-rj",
        user_name: "홍시네마",
        video_url: "snkvygYincY",
        title:
          "좀비 바이러스로 멸망한 세상에서 깊은 산에서만 조용히 살아가는 남자의 소름돋는 비밀",
        views: "4.2천회",
        created_date: "51분 전",
      },
      {
        user_img_url:
          "https://yt3.ggpht.com/Iw2zcGk1zCKWgaykhrcuHDalB18XETtvCv0Z9VNZMO6tjDRmh1_iCcy1D0s8XHFxuhnLMX0D=s68-c-k-c0x00ffffff-no-rj",
        user_name: "홍시네마",
        video_url: "snkvygYincY",
        title:
          "좀비 바이러스로 멸망한 세상에서 깊은 산에서만 조용히 살아가는 남자의 소름돋는 비밀",
        views: "4.2천회",
        created_date: "51분 전",
      },
      {
        user_img_url:
          "https://yt3.ggpht.com/Iw2zcGk1zCKWgaykhrcuHDalB18XETtvCv0Z9VNZMO6tjDRmh1_iCcy1D0s8XHFxuhnLMX0D=s68-c-k-c0x00ffffff-no-rj",
        user_name: "홍시네마",
        video_url: "snkvygYincY",
        title:
          "좀비 바이러스로 멸망한 세상에서 깊은 산에서만 조용히 살아가는 남자의 소름돋는 비밀",
        views: "4.2천회",
        created_date: "51분 전",
      },
      {
        user_img_url:
          "https://yt3.ggpht.com/Iw2zcGk1zCKWgaykhrcuHDalB18XETtvCv0Z9VNZMO6tjDRmh1_iCcy1D0s8XHFxuhnLMX0D=s68-c-k-c0x00ffffff-no-rj",
        user_name: "홍시네마",
        video_url: "snkvygYincY",
        title:
          "좀비 바이러스로 멸망한 세상에서 깊은 산에서만 조용히 살아가는 남자의 소름돋는 비밀",
        views: "4.2천회",
        created_date: "51분 전",
      },
      {
        user_img_url:
          "https://yt3.ggpht.com/Iw2zcGk1zCKWgaykhrcuHDalB18XETtvCv0Z9VNZMO6tjDRmh1_iCcy1D0s8XHFxuhnLMX0D=s68-c-k-c0x00ffffff-no-rj",
        user_name: "홍시네마",
        video_url: "snkvygYincY",
        title:
          "좀비 바이러스로 멸망한 세상에서 깊은 산에서만 조용히 살아가는 남자의 소름돋는 비밀",
        views: "4.2천회",
        created_date: "51분 전",
      },
      {
        user_img_url:
          "https://yt3.ggpht.com/Iw2zcGk1zCKWgaykhrcuHDalB18XETtvCv0Z9VNZMO6tjDRmh1_iCcy1D0s8XHFxuhnLMX0D=s68-c-k-c0x00ffffff-no-rj",
        user_name: "홍시네마",
        video_url: "snkvygYincY",
        title:
          "좀비 바이러스로 멸망한 세상에서 깊은 산에서만 조용히 살아가는 남자의 소름돋는 비밀",
        views: "4.2천회",
        created_date: "51분 전",
      },
      {
        user_img_url:
          "https://yt3.ggpht.com/Iw2zcGk1zCKWgaykhrcuHDalB18XETtvCv0Z9VNZMO6tjDRmh1_iCcy1D0s8XHFxuhnLMX0D=s68-c-k-c0x00ffffff-no-rj",
        user_name: "홍시네마",
        video_url: "snkvygYincY",
        title:
          "좀비 바이러스로 멸망한 세상에서 깊은 산에서만 조용히 살아가는 남자의 소름돋는 비밀",
        views: "4.2천회",
        created_date: "51분 전",
      },
      {
        user_img_url:
          "https://yt3.ggpht.com/Iw2zcGk1zCKWgaykhrcuHDalB18XETtvCv0Z9VNZMO6tjDRmh1_iCcy1D0s8XHFxuhnLMX0D=s68-c-k-c0x00ffffff-no-rj",
        user_name: "홍시네마",
        video_url: "snkvygYincY",
        title:
          "좀비 바이러스로 멸망한 세상에서 깊은 산에서만 조용히 살아가는 남자의 소름돋는 비밀",
        views: "4.2천회",
        created_date: "51분 전",
      },
      {
        user_img_url:
          "https://yt3.ggpht.com/Iw2zcGk1zCKWgaykhrcuHDalB18XETtvCv0Z9VNZMO6tjDRmh1_iCcy1D0s8XHFxuhnLMX0D=s68-c-k-c0x00ffffff-no-rj",
        user_name: "홍시네마",
        video_url: "snkvygYincY",
        title:
          "좀비 바이러스로 멸망한 세상에서 깊은 산에서만 조용히 살아가는 남자의 소름돋는 비밀",
        views: "4.2천회",
        created_date: "51분 전",
      },
      {
        user_img_url:
          "https://yt3.ggpht.com/Iw2zcGk1zCKWgaykhrcuHDalB18XETtvCv0Z9VNZMO6tjDRmh1_iCcy1D0s8XHFxuhnLMX0D=s68-c-k-c0x00ffffff-no-rj",
        user_name: "홍시네마",
        video_url: "snkvygYincY",
        title:
          "좀비 바이러스로 멸망한 세상에서 깊은 산에서만 조용히 살아가는 남자의 소름돋는 비밀",
        views: "4.2천회",
        created_date: "51분 전",
      },
      {
        user_img_url:
          "https://yt3.ggpht.com/Iw2zcGk1zCKWgaykhrcuHDalB18XETtvCv0Z9VNZMO6tjDRmh1_iCcy1D0s8XHFxuhnLMX0D=s68-c-k-c0x00ffffff-no-rj",
        user_name: "홍시네마",
        video_url: "snkvygYincY",
        title:
          "좀비 바이러스로 멸망한 세상에서 깊은 산에서만 조용히 살아가는 남자의 소름돋는 비밀",
        views: "4.2천회",
        created_date: "51분 전",
      },
    ]);
  }, []);

  return (
    <VideoWrapperStyle>
      <VideoList></VideoList>
    </VideoWrapperStyle>
  );
}

export default Video;
