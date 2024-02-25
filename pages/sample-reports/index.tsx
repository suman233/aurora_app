import SampleReportCard from "@/components/SampleReportCard/SampleReportCard";
import Wrapper from "@/layout/wrapper/Wrapper";
import styled from "@emotion/styled";
import { Box, Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";

const ReportsWrapper = styled(Box)`
  padding: 50px 0 90px;
  
  @media(max-width: 1199px){
    padding: 60px 0
  }
  @media(max-width: 600px){
    padding: 40px 0
  }
  .report_title{
    text-align: center;
    margin-bottom: 40px;
    h2{
      font-weight: 700;
    }
    @media(max-width: 600px){
        margin-bottom: 20px;
    }
  }
`;

export default function index() {
    const SampleCardArray = [
        {
            title: "Lorem Ipsum Text",
            date: "01.01.2023",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut tortor orci. Phasellus semper nunc a erat iaculis luctus. ",
            downloadLink: "javascript:void(0)",
        },
        {
            title: "Lorem Ipsum Text",
            date: "01.01.2023",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut tortor orci. Phasellus semper nunc a erat iaculis luctus. ",
            downloadLink: "javascript:void(0)",
        },
        {
            title: "Lorem Ipsum Text",
            date: "01.01.2023",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut tortor orci. Phasellus semper nunc a erat iaculis luctus. ",
            downloadLink: "javascript:void(0)",
        },
        {
            title: "Lorem Ipsum Text",
            date: "01.01.2023",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut tortor orci. Phasellus semper nunc a erat iaculis luctus. ",
            downloadLink: "javascript:void(0)",
        },
        {
            title: "Lorem Ipsum Text",
            date: "01.01.2023",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut tortor orci. Phasellus semper nunc a erat iaculis luctus. ",
            downloadLink: "javascript:void(0)",
        },
        {
            title: "Lorem Ipsum Text",
            date: "01.01.2023",
            content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ut tortor orci. Phasellus semper nunc a erat iaculis luctus. ",
            downloadLink: "javascript:void(0)",
        },
    ]
  return (
    <Wrapper>
      <ReportsWrapper>
        <Container fixed>
          <Box className="report_title">
            <Typography variant="h2">Sample Reports</Typography>
          </Box>
           <Box className='report_body'>
            <Grid container spacing={3}>
                {
                    SampleCardArray.map((data,index)=>(
                        <Grid item md={6} xs={12} key={index}>
                            <SampleReportCard {...data}/>
                        </Grid>
                    ))
                }
            </Grid>
           </Box>
        </Container>
      </ReportsWrapper>
    </Wrapper>
  );
}
