import assest from "@/json/assest";
import CustomButton from "@/ui/Buttons/CustomButton";
import styled from "@emotion/styled";
import { Typography } from "@mui/material";
import { Box, Stack } from "@mui/system";
import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";

const SampleCardWrapper = styled(Box)`
  padding: 35px 35px;
  border-radius: 10px;
  border: 1px solid rgba(0, 0, 0, 0.1);
  background: var(--white);
  transition: all 0.5s ease;
  
  @media(max-width: 600px){
      padding: 20px;
  }
  &:hover{
    box-shadow: 0px 0px 40px 0px rgba(0, 0, 0, 0.25);
  }
  .MuiStack-root {
    flex-wrap: wrap;
    @media(max-width: 479px){
      flex-direction: column;
      align-items: center;
    }
    .card_left {
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
    .card_rgt {
      flex-basis: calc(100% - 82px);
      max-width: calc(100% - 82px);
      padding-left: 28px;
      @media(max-width: 479px){
        padding: 0;
        flex-basis: 100%;
        max-width: 100%;
        text-align: center;
      }
      h4 {
        color: var(--black);
        font-size: 20px;
        font-weight: 600;
        line-height: 1;
        margin-bottom: 10px;
      }
      h5 {
        color: var(--color343641);
        font-size: 16px;
        font-weight: 600;
        line-height: 1;
        margin-bottom: 10px;
        span {
          font-weight: 400;
        }
      }
      p {
        color: var(--color483a3a);
        &:not(:last-child){
            margin-bottom: 10px;
        }
      }
      button{
        min-width: auto;
      }
    }
  }
`;

interface CradProps {
  title: string;
  date: string;
  content: string;
  downloadLink: string;
}

export default function SampleReportCard({
  title,
  date,
  content,
  downloadLink,
}: CradProps) {
  const router = useRouter();
  return (
    <SampleCardWrapper>
      <Stack direction={"row"}>
        <Box className="card_left">
          <Typography variant="caption">
            <Image src={assest.fileIcon} alt="icon" width={40} height={40} />
          </Typography>
        </Box>
        <Box className="card_rgt">
          <Typography variant="h4">{title}</Typography>
          <Typography variant="h5">
            Upload On: <Typography variant="caption">&nbsp;{date}</Typography>
          </Typography>
          <Typography variant="body1">{content}</Typography>
          <CustomButton
            type="button"
            onClick={() => router.push(`${downloadLink}`)}
          >
            <Typography variant="caption">Download</Typography>
          </CustomButton>
        </Box>
      </Stack>
    </SampleCardWrapper>
  );
}
