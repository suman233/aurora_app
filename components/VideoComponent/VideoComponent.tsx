import assest from '@/json/assest'
import styled from '@emotion/styled'
import { Container, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import VideoCard from '../VideoCard/VideoCard'
import CustomButton from '@/ui/Buttons/CustomButton'

const VideoomponentWrap = styled(Box)`
    padding: 80px 0;
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

    
   
`

const videoData = [
    {
        video: assest.video1,
        date: '27/06/2023',
        title: 'Lorem Ipsum Is Some Dummy Text',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
        video: assest.video1,
        date: '27/06/2023',
        title: 'Lorem Ipsum Is Some Dummy Text',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
        video: assest.video1,
        date: '27/06/2023',
        title: 'Lorem Ipsum Is Some Dummy Text',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
        video: assest.video1,
        date: '27/06/2023',
        title: 'Lorem Ipsum Is Some Dummy Text',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
        video: assest.video1,
        date: '27/06/2023',
        title: 'Lorem Ipsum Is Some Dummy Text',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
        video: assest.video1,
        date: '27/06/2023',
        title: 'Lorem Ipsum Is Some Dummy Text',
        desc: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    }
]

export default function VideoComponent() {
  return (
    <VideoomponentWrap>
        <Container fixed>
            <Box className="product_title">
                <Typography variant="h2">Videos</Typography>
            </Box>
            <Box className="video-wrap">
                <Grid container rowSpacing={5} columnSpacing={2.5}>

                    {
                        videoData.map((video)=> (
                            <Grid item lg={4} md={6} xs={12}>
                                <VideoCard video={video.video} date={video.date} heading={video.title} content={video.desc}/>
                            </Grid>
                        ))
                    }
                    
                </Grid>
            </Box>

            <Box className="product_ftr">
                <CustomButton type="button">
                    <Typography variant="caption">Load More</Typography>
                </CustomButton>
            </Box>
        </Container>
    </VideoomponentWrap>
  )
}
