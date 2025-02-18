import { Typography } from "@mui/material";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
      <Typography variant="h3" p={0} >
        <Link to="/">
          Simple Store
        </Link>
      </Typography>
  
  );
};
