import React from "react";
import {
  Category,
  CategoryWrapperStyle,
} from "components/Category/CategoryStyle";

function CategoryList() {
  const homeCategory = [
    {
      name: "전체",
    },

    {
      name: "게임",
    },
    {
      name: "실시간",
    },
    {
      name: "믹스",
    },
    {
      name: "뉴스",
    },
    {
      name: "음악",
    },
    {
      name: "수학",
    },
    {
      name: "야구",
    },
    {
      name: "새로운 맞춤 동영상",
    },
  ];
  const getLength = (str: string) => str.length * 9 + 35;
  return (
    <CategoryWrapperStyle>
      {homeCategory.map((category) => (
        <Category width={getLength(category.name)}>{category.name}</Category>
      ))}
    </CategoryWrapperStyle>
  );
}

export default CategoryList;
