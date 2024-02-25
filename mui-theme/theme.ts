import { createTheme } from "@mui/material/styles";
import Typography from "./typography";
import palette from "./palette";
import shadows from "./shadows";

const themeTypography = Typography(`'Poppins', sans-serif`);
const theme = createTheme({
  palette,
  shape: { borderRadius: 6 },
  typography: themeTypography,
  shadows: shadows(),
});

export default theme
