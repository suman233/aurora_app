import styled from "@emotion/styled";
import { IconButton, InputAdornment, OutlinedInput } from "@mui/material";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import TextField, { StandardTextFieldProps } from "@mui/material/TextField";
import React from "react";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import Image from "next/image";
import assest from "@/json/assest";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";

const InputStyles = styled(Box)`
  .input_style_wrap {
    .MuiInputBase-adornedEnd {
      border: 1px solid var(--colorCECECE);
      height: auto;
      box-sizing: border-box;
      font-size: 16px;
      font-weight: 400;
      color: var(--color343641);
      background: var(--white);
      border-radius: 10px;
      -webkit-border-radius: 10px;
      padding: 5px 20px 5px 51px;
      @media (max-width: 600px) {
        padding: 5px 10px 5px 40px;
      }
      .MuiOutlinedInput-notchedOutline {
        display: none;
        /* border-color: var(--primaryD3D7DF); */
      }
      #outlined-adornment-password {
        border: 0;
        padding: 0;
        height: 39px;
        font-size: 16px;
        &::placeholder {
          color: var(--color343641);
          opacity: 1;
        }
      }
      button {
        background-color: transparent;
        color: var(--color646464);
        &:focus {
          background-color: transparent;
          color: var(--color646464);
        }
        &:hover {
          background-color: transparent;
          color: var(--color646464);
        }
        img {
          position: static !important;
          transform: inherit !important;
          top: 0;
          left: 0;
          width: 20px;
        }
        svg {
          width: 20px;
        }
      }
    }
  }

  .MuiFormControl-root {
    width: 100%;
    .MuiInputBase-root {
      padding: 0;

      .MuiOutlinedInput-notchedOutline {
        display: none;
        /* border-color: var(--primaryD3D7DF); */
      }

      input[type="text"],
      input[type="email"],
      input[type="url"],
      input[type="password"],
      input[type="search"],
      input[type="number"],
      input[type="tel"],
      input[type="range"],
      input[type="date"],
      input[type="month"],
      input[type="week"],
      input[type="time"],
      input[type="datetime"],
      input[type="datetime-local"],
      input[type="color"],
      textarea {
        border: 1px solid var(--colorCECECE);
        height: 50px;
        box-sizing: border-box;
        font-size: 16px;
        font-weight: 400;
        color: var(--color343641);
        background: var(--white);
        border-radius: 10px;
        -webkit-border-radius: 10px;
        padding: 5px 10px 5px 51px;
        @media (max-width: 600px) {
          padding: 5px 10px 5px 40px;
        }
        &::placeholder {
          color: var(--color343641);
          opacity: 1;
        }
      }
      textarea {
        height: 125px !important;
        padding: 20px 10px 20px 51px;
        @media (max-width: 600px) {
          padding: 20px 10px 20px 40px;
        }
      }
      &.Mui-error {
        input[type="text"],
        input[type="email"],
        input[type="url"],
        input[type="password"],
        input[type="search"],
        input[type="number"],
        input[type="tel"],
        input[type="range"],
        input[type="date"],
        input[type="month"],
        input[type="week"],
        input[type="time"],
        input[type="datetime"],
        input[type="datetime-local"],
        input[type="color"],
        textarea {
          border-color: var(--colorff0000);
        }
      }
    }
  }
`;

interface breadProps extends StandardTextFieldProps {
  // placeholder: string;
  textareaBoolean?: boolean;
  labelForPassword?: string;
  IsPassword?: boolean;
  img: string;
  imgWidth: number;
  imgHeight: number;
}

function InputFildcommn({
  IsPassword = false,
  labelForPassword,
  textareaBoolean,
  img,
  imgWidth,
  imgHeight,
  ...others
}: breadProps) {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  return (
    <InputStyles>
      <Box className="input_style_wrap">
        <Image src={img} width={imgWidth} height={imgHeight} alt="icon" />
        {!IsPassword ? (
          <TextField
            fullWidth
            placeholder={others.placeholder}
            type={others.type}
            multiline={others.multiline}
            {...others}
          />
        ) : (
          <OutlinedInput
            fullWidth
            id="outlined-adornment-password"
            type={showPassword ? "text" : "password"}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? (
                    <RemoveRedEyeOutlinedIcon />
                  ) : (
                    <Image
                      src={assest.passshowicon}
                      width={20}
                      height={15}
                      alt="passwordIcon"
                    />
                  )}
                </IconButton>
              </InputAdornment>
            }
            placeholder={labelForPassword}
          />
        )}
      </Box>
    </InputStyles>
  );
}

export default InputFildcommn;
