import { demofunc, homebannerfunc} from "@/api/functions/allfunc";
import assest from "@/json/assest";
import CustomButton from "@/ui/Buttons/CustomButton";
import CustomButtonOrange from "@/ui/Buttons/CustomButtonOrange";
import styled from "@emotion/styled";
import { Box, Grid, Typography } from "@mui/material";
import { Container, Stack } from "@mui/system";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { useQuery } from "react-query";




const BannerWrapper = styled(Box)`
  padding: 50px 0 90px;
  @media(max-width: 767px){
        padding: 40px 0;
    }
  background: var(--colorF7F9FB);
  .banner_left {
    @media(max-width: 899px){
      margin-bottom: 30px;
      
    }
    @media(max-width: 479px){
      text-align: center;
    
    }
    h1 {
      font-size: 50px;
      margin-bottom: 15px;
      @media(max-width: 1199px){
        font-size: 40px;
      }
      @media(max-width: 889px){
        font-size: 30px;
      }
      @media(max-width: 479px){
        line-height: 1.5;
        font-size: 24px;
      }
    }
    p {
      color: var(--color343641);
      
      line-height: 1.8;
      max-width: 493px;
    }
    .btn_flex {
      margin-top: 20px;
      @media(max-width: 479px){
        flex-wrap: wrap;
        justify-content: center;
        row-gap: 15px;
      }
      button {
        &:nth-child(1) {
          margin-right: 30px;
          @media(max-width: 479px){
            margin-right: 0;
            width: 100%;
          }
        }
        @media(max-width: 479px){
            margin-right: 0;
            width: 100%;
          }
      }
    }
    .share_btn {
      margin-top: 45px;
      > p {
        margin-bottom: 5px;
      }
      a{
        &:hover{
          opacity: 0.6;
        }
      }
    }
  }
  .banner_rgt {
    position: relative;
    .play_btn{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      background: var(--color51B2E4);
      width: 70px;
      height: 70px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      @media(max-width: 1199px){
        width: 50px;
        height: 50px;
      }
      &:hover{
        background: var(--black);
      }
    }
  }
`;











export default function  Banner() {

  const {error,data:bannerHome}=useQuery({
    queryKey:['banHome'],
    queryFn:homebannerfunc
    
  })
  console.log("home banner data",bannerHome);

// const{error:er,data:demoData}=useQuery({
//   queryKey:['demo'],
//   queryFn:demofunc
// })

// console.log("dem",demoData);




  return (
    <BannerWrapper>
      <Container fixed>
        <Grid container rowSpacing={0} columnSpacing={3} alignItems={"center"}>
          <Grid item md={6} xs={12}>
            <Box className="banner_left">
              <Typography variant="h1">
          {bannerHome?.section_1_heading}
              </Typography>
              <Typography variant="body1">
            {bannerHome?.section_1_description}
              </Typography>
              <Stack direction={"row"} className="btn_flex">
                <CustomButton type="button">
                  <Typography variant="caption">Free 7 days trial</Typography>
                </CustomButton>
                <CustomButtonOrange type="button">
             <Typography variant="caption">Live Demo</Typography>
                 
                </CustomButtonOrange>
              </Stack>
              <Box className="share_btn">
                <Typography variant="body1">Download App Now:</Typography>
                <Link href={"https://www.apple.com/in/app-store/  "}>
                  <Image
                    src={assest.AppleIcon}
                    alt="icon"
                    width={160}
                    height={45}
                  />
                </Link>
                <Link href={"https://play.google.com/store/games?hl=en_IN&gl=US"}>
                  <Image
                    src={assest.GoogleIcon}
                    alt="icon"
                    width={160}
                    height={45}
                  />
                </Link>
              </Box>
            </Box>
          </Grid>
          <Grid item md={6} xs={12}>
            <Box className="banner_rgt">
              <figure>
                <Link href={"https://www.taxmann.com/emailer/images/CompaniesAct.mp4"} className="play_btn">
                  <Image
                    src={assest.playIcon}
                    alt="icon"
                    width={14}
                    height={14}
                  />
                </Link>
                <Image
                  src={assest.bannerImage}
                  alt="image"
                  width={600}
                  height={400}
                />
              </figure>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </BannerWrapper>
  );
}
