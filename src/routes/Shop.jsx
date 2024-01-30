import Item from "./Item/Item";
import axios from "axios";
import { useQuery } from "@tanstack/react-query";

export default function Shop() {
  const fetchData = async () => {
    const result = await axios.get("https://fakestoreapi.com/products?limit=5");
    return result.data;
  };

  const { isPending, isError, data, error } = useQuery({
    queryKey: ["items"],
    queryFn: fetchData,
  });

  if (isPending) {
    return <p>Loading ...</p>;
  }

  if (isError) {
    return <p>Error: {error.message}</p>;
  }

  return (
    <>
      <p>Shop</p>
      {data.map((item) => {
        return <Item key={item.id} {...item} item={item} />;
      })}
    </>
  );
}
