import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";
import { FaTwitter } from "react-icons/fa";

const LoginPage = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  return (
    <Box>
      <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center"
      >
        <Typography fontWeight="bold" display="flex" alignItems="center" gap="0.5rem" justifyContent="center" fontSize="32px" color="primary">
          <FaTwitter /> Twitly
        </Typography>
      </Box>

      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        m="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
      >
        <Typography fontWeight="500" variant="h5" sx={{ textAlign: "center", mb: "1.5rem" }}>
          Twitly is a simple social media application
        </Typography>
        <Form />
      </Box>
    </Box>
  );
};

export default LoginPage;
