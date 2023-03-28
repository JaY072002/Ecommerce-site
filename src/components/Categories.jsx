import styled from "styled-components";
import { categoryItem } from "../data";
import CategoryItem from "./CategoryItem";

const Container = styled.div`
  height: 70vh;
  padding: 20px;
  background-color: #fff;
  display: flex;
  gap: 10px;
  justify-content: center;
  align-items: center;
`;

const Categories = () => {
  return (
    <Container>
      {categoryItem.map((item, index) => {
        return <CategoryItem key={index} item={item} />;
      })}
    </Container>
  );
};

export default Categories;
