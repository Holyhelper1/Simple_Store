import { Box, Typography } from "@mui/material";
export const Footer = () => {
  return (
    <Box component="footer" sx={{ p: 2, mt: "auto", 
    // backgroundColor: "black" 
    }}>
      <Typography variant="body2" align="center">
        All rights reserved &copy;
      </Typography>
    </Box>
  );
};
