import assest from "@/json/assest";
import Image from "next/image";
import React from "react";
import Container from "@mui/material/Container";
import { Box } from "@mui/system";
import Link from "next/link";
import { List, ListItem, TextField, Typography } from "@mui/material";
import path from "path";
import { useRouter } from "next/router";
import styled from "@emotion/styled";
import CustomButton from "@/ui/Buttons/CustomButton";

const FooterWrap = styled(Box)`
  padding: 60px 0 48px;
  @media(max-width: 899px){
      padding: 40px 0;
  }
  @media(max-width: 600px){
      padding: 30px 0 20px;
  }
  .ftr-list {
    display: flex;
    align-items: center;
    padding: 0;
    @media (max-width: 1199px) {
      justify-content: center;
      margin: 8px 0;
      flex-wrap: wrap;
    }
    
    @media (max-width: 479px) {
        flex-wrap: wrap;
    }
    li {
      width: auto;
      padding: 0 24px ;
      border-right: 1px solid rgba(81, 178, 228, 0.1);
      @media (max-width: 899px) {
        padding: 0 12px;
      }
      
      @media (max-width: 479px) {
        width: 100%;
        padding: 5px 0;
        width: 100%;
        border: 0;
        text-align: center;
        justify-content: center;
      }
      &:last-child {
        padding-right: 0;
        border: 0;
      }
      &:first-child {
        padding-left: 0;
      }
      a {
        font-weight: 400;
        
        color: var(--color949499);
        text-transform: capitalize;
        &:hover {
          color: var(--colorF68939);
        }
        &.active{
          color: var(--colorF68939);
        }
      }
    }
  }
  .ftr-logo {
    margin-right: 28px;
    line-height: 0;
    @media (max-width: 1199px) {
      max-width: 180px;
      margin: 0 auto;
    }
  }
  .footer-socialIcnlist{
    position: relative;
    margin: 53px 0 25px;
    @media (max-width: 991px) {
      margin: 30px 0 15px;
    }
    &:before{
      position: absolute;
      content: "";
      width: 100%;
      height: 1px;
      background: rgba(81, 178, 228, 0.10);
      left: 0;
      top: 50%;
      transform: translateY(-50%);
    }
    ul{
      display: flex;
      align-items: center;
      justify-content: center;
      max-width: 250px;
      margin: 0 auto;
      padding: 0;
      background: var(--white);
      @media (max-width: 991px) {
        max-width: 200px;
      }
      li{
        display: inline-block;
        padding: 0 15px;
        text-align: center;
        @media (max-width: 991px) {
          padding: 0 10px;
        }
        a{
          display: inline-flex;
          align-items: center;
          line-height: 1;
          &:hover{
            img{
              filter: brightness(0) invert(0);
            }
          }
          img{
            transition: 0.5s all;
          }
        }
      }
    }
  }

  .copy {
    margin-left: auto;
    font-family: 'Roboto', sans-serif;
    color: var(--color949499);
    @media (max-width: 991px) {
          margin-top: 10px;
    }
    a {
      color: var(--colorF68939);
      &:hover {
        color: var(--black);
      }
    }
  }
  .ftr-wrapper {
    position: relative;
    .Footerbottm-wraper{
      display: flex;
      align-items: center;
      justify-content: space-between;
      @media (max-width: 991px) {
          display: block;
          text-align: center;
      }
    }
  }
  .footer-topPart{
    position: relative;
    margin-bottom: 40px;
    text-align: center;
    h2{
      text-transform: capitalize;
      color: var(--color343641);
      margin-bottom: 10px;
    }
    p{
      max-width: 834px;
      margin: 0 auto;
      line-height: 1.8;
    }
  }
  .footer-newsLettr{
    position: relative;
    max-width: 847px;
    margin: 0 auto; 
    .form_group{
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      align-items: center;
      border: 1px solid var(--colorD2ECFF);
      border-radius: 50px;
      background: #FFF;
      overflow: hidden;
      padding: 5px 6px;
      @media (max-width:889px) {
        border: 0;
        padding: 0;
        border-radius: 0;
        overflow: visible;
      }
      .MuiFormControl-root {
        background: var(--white);
        width: calc(100% - 175px);
        padding-right: 20px;
        @media (max-width:889px) {
          width: 100%;
          border: 1px solid var(--colorD2ECFF);
          border-radius: 50px;
          padding-right: 0;
          margin-bottom: 10px;
        }
        .MuiInputBase-root {
          height: 50px;
          &:before{
            display: none;
          }
          &:after{
            display: none;
          }
          @media (max-width:899px) {
            height: 47px;
          }
          input {
            border: 0;
            height: 100%;
            padding: 0 30px;
            border-radius: 50px;
          }
          
        }
        
      .MuiOutlinedInput-notchedOutline {
        display: none;
      }
      }
      button{
        min-width: auto;
        width: 175px;
        height: 50px;
        @media (max-width:889px) {
          width: 100%;
        }
        span{
          
          font-weight: 400;

        }
      }
    }
  }
`;

const navItems = [
  {
    name: "Terms & Conditions",
    route: "javascrip:void(0)",
  },
  {
    name: "Privacy Policy",
    route: "javascrip:void(0)",
  },
  {
    name: "Contact",
    route: "javascrip:void(0)",
  },
];



const Footer = () => {
  const navItems = [
    {
      name: "Terms & Conditions",
      route: "/terms",
    },
    {
      name: "Privacy Policy",
      route: "/privacy-policy",
    },
    {
      name: "Contact",
      route: "/contact-us",
    },
  ];
  const socialicn =[
    {
      icnsocial: `${assest.socialicnone}`
    },
    {
      icnsocial: `${assest.socialicntwo}`
    },
    {
      icnsocial: `${assest.socialicnthree}`
    },
    {
      icnsocial: `${assest.socialicnfour}`
    },
  ];
  const router = useRouter();
  return (
      <FooterWrap>
        <Container fixed>
          <Box className="ftr-wrapper">
            <Box className="footer-topPart">
              <Typography variant="h2">Let's Connect</Typography>
              <Typography variant="body1">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,</Typography>
            </Box>
            <Box className="footer-newsLettr">
              <Box className="form_group">
                <TextField
                  id="outlined-basic"
                  variant="standard"
                  placeholder="Email Address"
                  type="email"
                />
                <CustomButton type="button">
                  <Typography variant="caption">Subscribe Now</Typography>
                </CustomButton>
              </Box>
            </Box>
            <Box className="footer-socialIcnlist">
              <List>
                  {socialicn.map((item: any) => (
                    <ListItem disablePadding>
                      <Link href="#"><img src={item.icnsocial} alt="" width={24} height={24}/></Link>
                    </ListItem>
                  ))}
                </List>
            </Box>
            <Box className="Footerbottm-wraper">
              <List className="ftr-list">
                {navItems.map((item: any) => (
                  <ListItem disablePadding>
                    <Link href={item?.route} key={item.name} className={router.pathname === item.route ? "active" : ""}>
                      {item?.name}
                    </Link>
                  </ListItem>
                ))}
              </List>
                
              <Box className="copy">
              Copyright <Link href="/">Aurora.</Link> 2023, All Right Reserved
              </Box>
            </Box>
          </Box>
        </Container>
      </FooterWrap>
  );
};

export default Footer;
