import CategoryList from "components/Category/CategoryList";
import { WrapperStyle } from "components/common/WrapperStyle";
import Video from "components/Video/Video";

function Home() {
  return (
    <WrapperStyle>
      <CategoryList />
      <Video />
    </WrapperStyle>
  );
}

export default Home;
