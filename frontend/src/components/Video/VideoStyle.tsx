import { NavLink } from "react-router-dom";
import styled from "styled-components";

const VideoWrapperStyle = styled.div`
  width: 100%;
  margin-top: 3rem;
  padding-top: 6rem;
  padding-right: 4rem;
  padding: 6rem 2rem 0 2rem;
`;

const VideoListWrapperStyle = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  cursor: pointer;
`;

const VideoPlayer = styled.div`
  width: 100%;
  height: 11rem;
  border-radius: 0.5rem;
  background-color: black;
  margin-bottom: 1.7rem;
  margin-right: 0rem;

  iframe {
    width: 19.75rem;
    height: 12rem;
    border-radius: 0.5rem;
  }
`;

const VideoStyle = styled.div`
  font-size: 1.5rem;
  width: 18.75rem;
  display: flex;
  flex-direction: column;
  margin: 0rem 2rem 2rem 0;
`;

const VideoContentStyle = styled.div`
  display: flex;

  img {
    width: 27px;
    height: 27px;
    margin-left: 0.07rem;
  }
`;
const TruncatedTitle = styled.div`
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  max-height: 40px;
`;

const VideoThumnailInfo = styled.div`
  margin-left: 1rem;
  width: 80%;
  display: flex;
  line-height: 1.39rem;
  flex-direction: column;
`;

export {
  VideoWrapperStyle,
  VideoListWrapperStyle,
  VideoPlayer,
  VideoStyle,
  VideoContentStyle,
  TruncatedTitle,
  VideoThumnailInfo,
};
