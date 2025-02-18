import {
  Box,
  Button,
  Card,
  CardContent,
  CardMedia,
  Rating,
  Typography,
} from "@mui/material";
import { CollapsibleText } from "./CollapsibleText";
import { IGoods } from "../../../../api/Products/products-slice";
import { Link } from "react-router-dom";

interface IProductCardProps {
  prod: IGoods;
}

export const ProductCards: React.FC<IProductCardProps> = ({ prod }) => {
  return (
    <Card>
      <CardMedia
        component="img"
        width="140"
        height="340"
        sx={{
          objectFit: "contain",
          maxHeight: "100%",
          maxWidth: "100%",
        }}
        image={prod.image}
        alt={prod.title}
      />
      <CardContent sx={{ transition: "all 0.5s ease-in-out" }}>
        <Typography
          height="150px"
          sx={{ mb: -3, mt: 1, textAlign: "center", fontWeight: "bold" }}
        >
          {prod.title}
        </Typography>
        <CollapsibleText description={prod.description} />
        <Rating value={prod.rating.rate} readOnly precision={0.5} />
        <Box sx={{ fontSize: "1.5rem", fontWeight: "bold" }}>
          ${prod.price.toFixed(2)}
        </Box>
      </CardContent>
      <Link to={`/product/${prod.id}`} style={{ textDecoration: "none" }}>
        <Button
          size="small"
          variant="outlined"
          color="primary"
          sx={{ width: "50%", marginBottom: "10px" }}
        >
          View
        </Button>
      </Link>
    </Card>
  );
};
