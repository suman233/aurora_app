import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import Image from 'next/image'
import React from 'react'

const AboutCardWrap = styled(Box)`
    .card-top{
        display: flex;
        align-items: center;
        margin-bottom: 20px;
        .ico{
            width: 40px;
        }
        h3{
            width: calc( 100% - 40px );
            color: var(--color343641);
            font-size: 20px;
            padding-left: 15px;

            @media(max-width: 1199px){
                font-size: 17px;
            }
            @media(max-width: 991px){
                width: auto;
                padding: 0;
            }
            @media(max-width: 767px){
                text-align: center;
            }
        }
       

        @media(max-width: 991px){
            justify-content: center;
            flex-direction: column;
        }

        @media(max-width: 767px){
            margin-bottom: 10px;
        }
    }

    p{
            @media(max-width: 991px){
                text-align: center;
            }
        }
`


interface aboutCardProps{
    iconUrl: string,
    heading: string,
    para: string
}

export default function AboutCard(props: aboutCardProps) {

  return (
    <AboutCardWrap className='about-card'>
        <Box className="card-top">
            <i className='ico'>
                <Image
                    src={props.iconUrl}
                    width={40}
                    height={40}
                    alt=''
                />
            </i>
            <Typography variant='h3'>
                {props.heading}
            </Typography>
        </Box>
        <Typography variant='body2'>
            {props.para}
        </Typography>
    </AboutCardWrap>
  )
}
