import assest from '@/json/assest'
import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const VideoCardWrap = styled(Box)`
    .video-card{
        
        border-radius: 10px;
        box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.15);
        background: var(--white);
        transition: all 0.5s ease;
        &:hover{
            box-shadow: 0px 0px 40px 0px rgba(0, 0, 0, 0.25);
        }
        .video{
            
            video{
                width: 100%;
                border-radius: 10px 10px 0 0;
            }
        }
        .video-content{
            padding: 22px 15px 24px 24px;
            .date{
                margin: 0 0 15px;
                display: block;
            }
            h3{
                font-size: 20px;
                color: var(--color343641);
                margin: 0 0 10px;
            }
            p{

            }
        }
        
    }
`

interface videoCardProps{
    video: string,
    date: string,
    heading: string,
    content: string,
}

export default function VideoCard(props: videoCardProps) {
    const {video,date,heading,content} = props;
  return (
    <VideoCardWrap>
        <Box className="video-card">
            <Box className="video">
                <video controls loop>
                    <source src={video}></source>
                </video>
            </Box>
            <Box className="video-content">
                <Typography variant='caption' className='date'>
                    {date}
                </Typography>
                <Typography variant='h3'>
                    {heading}
                </Typography>
                <Typography variant='body1'>
                    {content}
                </Typography>
            </Box>
        </Box>
    </VideoCardWrap>
  )
}
