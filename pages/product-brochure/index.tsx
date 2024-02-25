import ProductBrochureCard from "@/components/ProductBrochureCard/ProductBrochureCard";
import Wrapper from "@/layout/wrapper/Wrapper";
import CustomButton from "@/ui/Buttons/CustomButton";
import styled from "@emotion/styled";
import { Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";

const ProductBrochureWrapper = styled(Box)`
  padding: 80px 0;
  
  @media(max-width: 1199px){
    padding: 60px 0
  }
  @media(max-width: 600px){
    padding: 40px 0
  }
  .product_title {
    text-align: center;
    margin-bottom: 50px;
    @media(max-width: 600px){
      margin-bottom: 30px;
    }
  }
  .product_ftr{
    text-align: center;
    margin-top: 80px;
    @media(max-width: 600px){
      margin-top: 30px;
    }
    button{
        min-width: auto;
    }
  }
`;

export default function index() {
  const SampleCardArray = [
    {
      title: "Product01",
      uploadDate: "01.01.2023",
      description: "Lorem ipsum",
      downloadLink: "javascript:void(0)",
    },
    {
      title: "Product01",
      uploadDate: "01.01.2023",
      description: "Lorem ipsum",
      downloadLink: "javascript:void(0)",
    },
    {
      title: "Product01",
      uploadDate: "01.01.2023",
      description: "Lorem ipsum",
      downloadLink: "javascript:void(0)",
    },
    {
      title: "Product01",
      uploadDate: "01.01.2023",
      description: "Lorem ipsum",
      downloadLink: "javascript:void(0)",
    },
    {
      title: "Product01",
      uploadDate: "01.01.2023",
      description: "Lorem ipsum",
      downloadLink: "javascript:void(0)",
    },
    {
      title: "Product01",
      uploadDate: "01.01.2023",
      description: "Lorem ipsum",
      downloadLink: "javascript:void(0)",
    },
    {
      title: "Product01",
      uploadDate: "01.01.2023",
      description: "Lorem ipsum",
      downloadLink: "javascript:void(0)",
    },
    {
      title: "Product01",
      uploadDate: "01.01.2023",
      description: "Lorem ipsum",
      downloadLink: "javascript:void(0)",
    },
    {
      title: "Product01",
      uploadDate: "01.01.2023",
      description: "Lorem ipsum",
      downloadLink: "javascript:void(0)",
    },
  ];
  return (
    <Wrapper>
      <ProductBrochureWrapper>
        <Container fixed>
          <Box className="product_title">
            <Typography variant="h2">Product Brochures</Typography>
          </Box>
          <Box className="product_content">
            <Grid container rowSpacing={5} columnSpacing={2.5}>
              {SampleCardArray.map((data, index) => (
                <Grid item lg={4} md={6} xs={12} key={index}>
                  <ProductBrochureCard {...data} />
                </Grid>
              ))}
            </Grid>
          </Box>
          <Box className="product_ftr">
            <CustomButton type="button">
              <Typography variant="caption">Load More</Typography>
            </CustomButton>
          </Box>
        </Container>
      </ProductBrochureWrapper>
    </Wrapper>
  );
}
