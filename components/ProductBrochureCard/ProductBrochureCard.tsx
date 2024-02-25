import assest from "@/json/assest";
import CustomButton from "@/ui/Buttons/CustomButton";
import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const ProductBrochureCardWrapper = styled(Box)`
  padding: 22px 15px 24px 24px;
  border-radius: 10px;
  box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.15);
  background: var(--white);
  transition: all 0.5s ease;
  &:hover {
    box-shadow: 0px 0px 40px 0px rgba(0, 0, 0, 0.25);
  }
  .MuiStack-root {
    flex-wrap: wrap;
    @media(max-width: 479px){
      flex-direction: column-reverse;
      align-items: center;
    }
    .product_card_rgt {
      flex-basis: 82px;
      span {
        width: 82px;
        height: 82px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 100%;
        background: rgba(246, 137, 57, 0.2);
        @media(max-width: 479px){
          margin-bottom: 20px;
        }
      }
    }
    .product_card_left{
      flex-basis: calc(100% - 82px);
      max-width: calc(100% - 82px);
      padding-right: 28px;
      @media(max-width: 479px){
        max-width: 100%;
        flex-basis: 100%;
        text-align: center;
        padding: 0;
      }
   
      h5 {
        color: var(--color343641);
        font-size: 16px;
        font-weight: 600;
        line-height: 1.4;
        margin-bottom: 10px;
        span {
          font-weight: 400;
        }
      }
      button {
        min-width: auto;
        margin-top: 10px;
      }
    }
  }
`;

interface ProductProps {
  title: string;
  description: string;
  uploadDate: string;
  downloadLink: string;
}
export default function ProductBrochureCard({
  title,
  description,
  uploadDate,
  downloadLink,
}: ProductProps) {
  const router = useRouter();

  return (
    <ProductBrochureCardWrapper>
      <Stack direction={"row"} flexWrap={"wrap"}>
        <Box className="product_card_left">
          <Typography variant="h5">
            Title: <Typography variant="caption">{title}</Typography>
          </Typography>
          <Typography variant="h5">
            Description:{" "}
            <Typography variant="caption">{description}</Typography>
          </Typography>
          <Typography variant="h5">
            Upload On: <Typography variant="caption">{uploadDate}</Typography>
          </Typography>
          <CustomButton
            type="button"
            onClick={() => router.push(`${downloadLink}`)}
          >
            <Typography variant="caption">Download</Typography>
          </CustomButton>
        </Box>
        <Box className="product_card_rgt">
          <Typography variant="caption">
            <Image src={assest.fileIcon} alt="icon" width={40} height={40} />
          </Typography>
        </Box>
      </Stack>
    </ProductBrochureCardWrapper>
  );
}
