import { Typography } from '@mui/material'
import { Box, styled } from '@mui/system'
import React from 'react'
const Commonleftloginwrap = styled(Box)`
.wraper-leftloginmain{
    position: relative;
    h1{
        color: var(--color343641);
        font-size: 50px;
        font-weight: 600;
        margin-bottom: 20px;
        @media(max-width: 1199px){
            font-size: 40px;
        }
        @media(max-width: 899px){
            font-size: 30px;
        }
        @media(max-width: 600px){
            font-size: 24px;
        }
    }
    p{
        line-height: 1.8;
        color: var(--color343641);
        max-width: 493px;
        margin-right: auto;
    }
}
`
interface commnlogSignprops{
    tittle: string,
    subtittle: string,
}
export default function CommonFormLeft(props: commnlogSignprops) {
  return (
    <Commonleftloginwrap>
        <Box className="wraper-leftloginmain">
            <Typography variant='h1'>{props.tittle}</Typography>
            <Typography variant='body1'>{props.subtittle}</Typography>
        </Box>
    </Commonleftloginwrap>
  )
}
