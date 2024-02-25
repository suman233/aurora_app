import { capitalize } from "@mui/material";
import { TypographyOptions } from "@mui/material/styles/createTypography";

// ==============================|| DEFAULT THEME - TYPOGRAPHY  ||========================== //
export function remToPx(value: string) {
  return Math.round(parseFloat(value) * 16);
}

export function pxToRem(value: number) {
  return `${value / 16}rem`;
}

interface responsiveFontSizesProps {
  sm: number;
  md: number;
  lg: number;
}

export function responsiveFontSizes({ sm, md, lg }: responsiveFontSizesProps) {
  return {
    "@media (min-width:320px)": {
      fontSize: pxToRem(sm),
    },
    "@media (min-width:900px)": {
      fontSize: pxToRem(md),
    },
    "@media (min-width:1200px)": {
      fontSize: pxToRem(lg),
    },
  };
}

const Typography = (fontFamily: string): TypographyOptions => ({
  htmlFontSize: 16,
  fontFamily,
  // fontWeightLight: 300,
  // fontWeightRegular: 400,
  // fontWeightMedium: 500,
  // fontWeightBold: 600,
  h1: {
    fontFamily: 'Poppins',
    lineHeight: 1.2,
    fontSize: 50,
    fontWeight: 600,

    ...responsiveFontSizes({ sm: 30, md: 35, lg: 50 })
  },
  h2: {
    fontFamily: 'Poppins',
    lineHeight: 1,
    fontWeight: 600,
    ...responsiveFontSizes({ sm: 25, md: 25, lg: 40 }),
  },
  h3: {
    fontFamily: 'Poppins',
   
    lineHeight: 1.2,
    // fontSize: pxToRem(24),
    ...responsiveFontSizes({ sm: 26, md: 30, lg: 32 }),
  },
  h4: {
    fontFamily: 'Poppins',
   
    lineHeight: 1.5,
    // fontSize: pxToRem(20),
    ...responsiveFontSizes({ sm: 20, md: 24, lg: 24 }),
  },
  h5: {
    fontFamily: 'Poppins',

    lineHeight: 1.5,
    // fontSize: pxToRem(18),
    ...responsiveFontSizes({ sm: 19, md: 20, lg: 20 }),
  },
  h6: {
    fontFamily: 'Poppins',
    // fontWeight: 700,
    lineHeight: 28 / 18,
    // fontSize: pxToRem(17),
    ...responsiveFontSizes({ sm: 18, md: 18, lg: 18 }),
  },
  subtitle1: {
    fontWeight: 600,
    lineHeight: 1.5,
    fontSize: pxToRem(16),
  },
  subtitle2: {
    fontWeight: 600,
    lineHeight: 22 / 14,
    fontSize: pxToRem(14),
  },
  body1: {
    lineHeight: 1.5,
    fontSize: 16,
    fontFamily: 'Poppins',
    ...responsiveFontSizes({ sm: 14, md: 16, lg: 16 }),
  },
  body2: {
    lineHeight: 22 / 14,
    fontSize: pxToRem(14),
    fontFamily: 'Poppins',
    ...responsiveFontSizes({ sm: 14, md: 16, lg: 16 }),
  },
  caption: {
    lineHeight: 1.5,
    fontSize: 14,
    fontFamily: 'Poppins',
  },
  overline: {
    fontWeight: 700,
    lineHeight: 1.5,
    fontSize: pxToRem(12),
    textTransform: "uppercase",
  },
  button: {
    fontFamily: 'Poppins',
    fontWeight: 700,
    lineHeight: 24 / 14,
    fontSize: pxToRem(14),
    // textTransform: "capitalize",
  },
});

export default Typography;
