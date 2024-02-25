import CustomButtonWhite from "@/ui/Buttons/CustomButtonWhite";
import styled from "@emotion/styled";
import { Box, Typography } from "@mui/material";
import { Container, Stack } from "@mui/system";
import React from "react";

const SubHeaderWrap = styled(Box)`
  background-color: var(--color51b2e4);
  padding: 15px 0;
  .MuiStack-root {
    align-items: center;
    justify-content: space-between;
    .subhead_left {
      display: flex;
      align-items: center;
      flex-wrap: wrap;
      @media(max-width: 1199px){
        
          margin-bottom: 15px;
        
      }
      @media(max-width: 1023px){
        justify-content: space-between;
        width: 100%;
      }
      @media(max-width: 479px){
        justify-content: center;
      }
      h4 {
        color: var(--white);
        font-size: 25px;
        font-weight: 600;
        line-height: 1;
        margin-right: 35px;
        @media(max-width: 479px){
          margin: 0 0 15px 0;
          width: 100%;
          text-align: center;
        }
      }
    }
    .subhead_rgt {
      p {
        color: var(--white);
        font-size: 15px;
        span{
            font-weight: 600;
        }
        @media(max-width: 479px){
          text-align: center;
          font-size: 14px;
        }
      }
    }
  }
`;

interface HeaderProps {
  trialDate: string;
}

export default function SubHeader({ trialDate }: HeaderProps) {
  return (
    <SubHeaderWrap>
      <Container fixed>
        <Stack direction="row" flexWrap={"wrap"}>
          <Box className="subhead_left">
            <Typography variant="h4">Ready to dive in?</Typography>
            <CustomButtonWhite type="button">
              <Typography variant="caption">Start trialing!</Typography>
            </CustomButtonWhite>
          </Box>
          <Box className="subhead_rgt">
            <Typography variant="body1">
              Activate your
              <Typography variant="caption">&nbsp;{trialDate} day trial&nbsp;</Typography>
              today to discover how inside can transform your daily routines.
            </Typography>
          </Box>
        </Stack>
      </Container>
    </SubHeaderWrap>
  );
}
