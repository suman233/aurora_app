import styled from '@emotion/styled'
import { Container, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import CommonHeadingTittle from '../CommonHeadingTittle/CommonHeadingTittle'
import CustomButton from '@/ui/Buttons/CustomButton'
import { PRIMARY } from '@/themes/palette'

const BookLiveDemoWrap = styled(Box)`
    background-color: var(--colorF68939);
    padding: 80px 0;
    @media(max-width: 1199px){
        padding: 60px 0
    }
    @media(max-width: 600px){
        padding: 40px 0
    }
    .section-heading{
        margin-bottom: 55px;
        h2{
            text-transform: initial;
            font-weight: 700;
        }
        p{
            line-height: 1.8;
        }
    }
    .btn-holder{
        text-align: center;
    }
`

export default function BookLiveDemo() {

    
  return (
    <BookLiveDemoWrap className='book-demo-sec'>
        <Container fixed>
            <Box className="section-heading">
                <CommonHeadingTittle isWhite tittletxt={'Book a live demo session!'} subTxt={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"} />
            </Box>
            <Box className="btn-holder">
            <CustomButton type="button">
                {/* sx={{color:`${PRIMARY.dark}`, backgroundColor:`${PRIMARY.dark}`}} */}
                <Typography variant="caption" >Book A Demo</Typography>
            </CustomButton>
            </Box>
        </Container>
    </BookLiveDemoWrap>
  )
}
