import { useParams } from "react-router-dom";
import { useFetchGoodsQuery } from "../../api/Products/products-slice";
import { Box, Grid2, Typography } from "@mui/material";

export const ProductDetail: React.FC = () => {
  const { id } = useParams();

  const { data = [], isFetching } = useFetchGoodsQuery();

  const product = data.find((prod) => prod.id.toString() === id);

  if (isFetching) {
    return <p>Loading...</p>;
  }


  return (
    <>
      <Grid2 container spacing={4} sx={{ mt: "64px" }}>
        <Grid2 size={4}>
          <Box sx={{ backgroundColor: "info.main", p: 2, borderRadius: 2 }}>
            <Typography variant="h4" gutterBottom>
              {product?.title}
            </Typography>
            <img
              src={product?.image}
              alt={product?.title}
              width="100%"
              style={{ borderRadius: 8, marginBottom: "16px" }}
            />
            <Typography
              variant="h5"
              sx={{ fontWeight: "bold", marginBottom: "16px" }}
            >
              ${product?.price}
            </Typography>
          </Box>
        </Grid2>

        <Grid2 size={7}>
          <Box
            sx={{
              backgroundColor: "background.paper",
              padding: 2,
              borderRadius: 2,
            }}
          >
            <Typography
              variant="h4"
              sx={{ mb: 2, fontWeight: "bold", color: "primary.main" }}
            >
              Description
            </Typography>
            <Typography
              variant="body1"
              sx={{ lineHeight: 1.5, color: "primary.main" }}
            >
              {product?.description}
            </Typography>
          </Box>
        </Grid2>
      </Grid2>
    </>
  );
};
