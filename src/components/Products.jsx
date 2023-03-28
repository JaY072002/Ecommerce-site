import styled from "styled-components";
import { productData } from "../data";
import Product from "./Product";

const Container = styled.div`
  display: flex;
  gap: 10px;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 150px;
  padding: 20px;
`;

const Products = () => {
  return (
    <Container>
      {productData.map((item) => {
        return <Product item={item} key={item.id} />;
      })}
    </Container>
  );
};

export default Products;
