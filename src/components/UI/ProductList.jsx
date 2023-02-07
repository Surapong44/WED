import ProductCard from "./ProductCard";

export const ProductList = ({ data }) => {
  return (
    <>
      {data?.map(item=>(
        <ProductCard  item={item} />
      ))}
    </>
  );
};
