import styled from '@emotion/styled'
import { Container, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'

const TermsWrap = styled(Box)`
    padding: 80px 0;
    @media(max-width: 1199px){
        padding: 60px 0
    }
    @media(max-width: 600px){
        padding: 40px 0
    }
    .terms-block{
        margin-bottom: 60px;
        @media(max-width: 600px){
            margin-bottom: 30px;
        }
        &:last-child{
            margin-bottom: 0;
        }
        h2{
            font-weight: 600;
            font-size: 40px;
            color: var(--color343641);
            margin-bottom: 30px;
            @media(max-width: 1199px){
                font-size: 35px;
            }
            @media(max-width: 600px){
                margin-bottom: 10px;
                font-size: 30px;
            }
            @media(max-width: 479px){
                font-size: 24px;
            }
        }
        p{
            color: var(--color343641);
            margin-bottom: 30px;
            line-height: 2;
            @media(max-width: 479px){
                margin-bottom: 15px;
                &:last-child{
                    margin-bottom: 0;
                }
            }
        }
        @media(max-width: 479px){
            text-align: center;
        }
    }
`

export default function PrivacyPolicy() {
  return (
    <TermsWrap>
        <Container fixed>
            <Box className="terms-block">
                <Typography variant='h2'>
                Privacy Policy
                </Typography>
                <Typography variant='body1'>
                Lorem Ipsum is simply dummy text of the printing and standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen bookLorem Ipsum is simply dummy text of the printing and standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen bookLorem Ipsum is simply dummy text of the printing and standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen bookLorem Ipsum is simply dummy text of the printing and standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen bookstandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen bookLorem Ipsum is simply dummy text of the printing and standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
                </Typography>
                <Typography variant='body1'>
                Lorem Ipsum is simply dummy text of the printing and standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen bookLorem Ipsum is simply dummy text of the printing and standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen bookLorem Ipsum is simply dummy text of the printing and standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen bookLorem Ipsum is simply dummy text of the printing and standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen bookstandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen bookLorem Ipsum is simply dummy text of the printing and standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
                </Typography>
            </Box>
            <Box className="terms-block">
                <Typography variant='h2'>
                Lorem Ipsum Text
                </Typography>
                <Typography variant='body1'>
                Lorem Ipsum is simply dummy text of the printing and standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen bookLorem Ipsum is simply dummy text of the printing and standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen bookLorem Ipsum is simply dummy text of the printing and standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen bookLorem Ipsum is simply dummy text 
                </Typography>
                <Typography variant='body1'>
                The printing and standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen bookstandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen bookLorem Ipsum is simply dummy text of the printing and standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book
                </Typography>
            </Box>
        </Container>
    </TermsWrap>
  )
}
