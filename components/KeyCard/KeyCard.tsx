import styled from '@emotion/styled'
import { Typography } from '@mui/material'
import { Box } from '@mui/system'
import Image from 'next/image'
import React from 'react'

const KeyCardWrap = styled(Box)`

    position: relative;
    padding-right: 15px;
    padding-bottom: 40px;
    /* border-bottom: 1px solid var(--white); */
    &:after{
        content: "";
        position: absolute;
        right: -20px;
        top: 0;
        width: 1px;
        height: calc( 100% - 10px );
        background-color: rgba(255,255,255,.2);
        @media(max-width: 899px){
            display: none;
        }
    }
    &:before{
        content: "";
        position: absolute;
        left: 0;
        bottom: -15px;
        width: 100%;
        height: 1px;
        background-color: rgba(255,255,255,.2);
    }
    h3{
        color: var(--white);
        font-size: 20px;
        margin-bottom: 15px;
        @media(max-width: 767px){
            text-align: center;
        }
    }
    p{
        color: var(--white);
        @media(max-width: 767px){
            text-align: center;
        }

    }

    .ico{
        margin-bottom: 8px;
        @media(max-width: 767px){
            text-align: center;
        }
    }

    @media(max-width: 899px){
        padding-left: 0;
        padding-right: 0;
    }
`

interface keyCardProps{
    ico: string,
    heading: string,
    para: string
}

// interface keyprops{
//     title:string,
//     logo:string,
//      description:string;

// }

export default function KeyCard(props:keyCardProps) {
  return (
    <KeyCardWrap className='key-card'>
        <Box className="ico">
            <Image
                src={props.ico}
                width={40}
                height={40}
                alt=''
            />
        </Box>
        <Typography variant='h3'>
            {props.heading}
        </Typography> 
         <Typography variant='body2'>
            {props.para}
        </Typography>
    </KeyCardWrap>
  )
}
