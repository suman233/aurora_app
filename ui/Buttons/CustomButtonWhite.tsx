import styles from "@/styles/components/custombuttonoutline.module.scss";
import Button from "@mui/material/Button";
import CircularProgress from "@mui/material/CircularProgress";
import { memo, useEffect, useState } from "react";
import { ButtonType } from "@/interface/common.interface";
import styled from "@emotion/styled";

const CustomBtn = styled(Button)`
  &.button {
    padding: 17px 28px;
    border-radius: 50px;
    background: var(--white);
    min-width: 181px;
    min-height: 51px;
    .MuiTypography-caption {
      color: var(--color51b2e4);
      font-size: 16px;
      font-family: 'Poppins';
      font-style: normal;
      font-weight: 400;
      line-height: 1;
    }
    &:hover {
      background: var(--black);
      .MuiTypography-caption{
        color:var(--white)
      }
    }
  }

  &.buttonOutlined {
    padding: 10px 20px;
    border-radius: 50px;
    border: 1px solid var(--primaryBlue);
    color: var(--primaryBlue);
  }

  &.buttonText {
    padding: 10px 20px;
    border-radius: 50px;
    color: var(--primaryBlue);
  }
`;

const CustomButtonMemo = ({
  children,
  variant = "contained",
  disabled = false,
  onClick,
  color = "inherit",
  size = "medium",
  fullWidth = false,
  endIcon,
  startIcon,
  type,
  loading = false,
}: ButtonType) => {
  const [className, setClassName] = useState("button");

  useEffect(() => {
    if (variant === "text") {
      setClassName("buttonText");
    } else if (variant === "outlined") {
      setClassName("buttonOutlined");
    } else {
      setClassName("button");
    }
  }, [variant]);

  return (
    <CustomBtn
      className={className}
      variant={variant}
      disabled={disabled || loading}
      disableElevation
      onClick={onClick}
      color={color}
      size={size}
      fullWidth={fullWidth}
      endIcon={endIcon}
      startIcon={startIcon}
      type={type}
    >
      {loading && <CircularProgress size={15} color="inherit" />}
      {children}
    </CustomBtn>
  );
};

const CustomButtonWhite = memo(CustomButtonMemo);

export default CustomButtonWhite;
