import { useState } from "react";
import { IGoods, useFetchGoodsQuery } from "../../api/Products/products-slice";
import { Box, Grid2 } from "@mui/material";
import { ProductCards } from "./Component/ProductCards/ProductCards";

export const ProductsPage = () => {
  const [pagination, setPagination] = useState<number>(10);
  const { data = [], isFetching } = useFetchGoodsQuery(pagination) as {
    data: IGoods[];
    isFetching: boolean;
  };

  return (
    <Box sx={{ marginTop: '64px' }}>
      <select
        value={pagination}
        onChange={(e) => setPagination(Number(e.target.value))}
      >
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
      </select>
      <p>Number of Goods: {data.length}</p>

      {!isFetching ? (
        <Grid2 container spacing={4}>
          {data.map((prod) => (
            <Grid2 size={3} key={prod.id}>
              <ProductCards prod={prod} />
            </Grid2>
          ))}
        </Grid2>
      ) : (
        <p>Loading...</p>
      )}
    </Box>
  );
};
