import { FlexBox } from "components/common/FlexBox";
import { FontStyle } from "components/common/FontStyle";
import { VideoInfoState } from "components/recoil/Video/VideoInfoStsate";
import React from "react";
import { useRecoilValue } from "recoil";
import styled from "styled-components";
import {
  VideoPlayer,
  VideoListWrapperStyle,
  VideoStyle,
  VideoContentStyle,
  VideoThumnailInfo,
  TruncatedTitle,
} from "./VideoStyle";

function VideoList() {
  const videoInfo = useRecoilValue(VideoInfoState);

  return (
    <VideoListWrapperStyle>
      {videoInfo.map((video, index) => (
        <VideoStyle>
          <VideoPlayer key={index}>
            <iframe
              src={`https://www.youtube.com/embed/${video.video_url}?rel=0=true`}
              title={video.title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </VideoPlayer>
          <VideoContentStyle>
            <img src={video.user_img_url} alt="User" />
            <VideoThumnailInfo>
              <FontStyle size={0.99} is_bold={true}>
                <TruncatedTitle>{video.title}</TruncatedTitle>
              </FontStyle>
              <FontStyle size={0.89} marginTop={0.5} color={"grey"}>
                {video.user_name}
              </FontStyle>
              <FlexBox>
                <FontStyle size={0.86} color={"grey"}>
                  조회수 {video.views}
                </FontStyle>
                <FontStyle size={0.82} color={"grey"}>
                  {" "}
                  &nbsp;·&nbsp; {video.created_date}
                </FontStyle>
              </FlexBox>
            </VideoThumnailInfo>
          </VideoContentStyle>
        </VideoStyle>
      ))}
    </VideoListWrapperStyle>
  );
}

export default VideoList;
