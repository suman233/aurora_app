import styled from '@emotion/styled'
import { Box, Container } from '@mui/system'
import React from 'react'
import CommonHeadingTittle from '../CommonHeadingTittle/CommonHeadingTittle'
import { TextField, Typography } from '@mui/material'
import CustomButton from '@/ui/Buttons/CustomButton'
import CustomAccordions from '../CustomAccordion/CustomAccodion'

const HelpCenterWrap = styled(Box)`
    padding: 60px 0;
    @media(max-width: 767px){
    
        padding: 40px 0;
    }
    .ques-form-wrap{
        background: rgba(81,178,228,.10);
        padding: 40px;
        .section-heading{
            margin-bottom: 40px;
            h2{
                font-weight: 700;
            }
            @media(max-width: 600px){
                margin-bottom: 30px;
            }
            p{
                color: var(--color343641);
            }
        }
        .form-group{
            max-width: 847px;
            margin: 0 auto;
            background: var(--white);
            display: flex;
            align-items: center;
            border-radius: 50px;
            border: 1px solid var(--colorD2ECFF);
            padding: 5px 6px;
            .MuiFormControl-root{
                width: calc( 100% - 112px );
            }
            button{
                min-width: auto;
            }

            .MuiFormControl-root{
                @media(max-width: 479px){
                    width: 100%;
                }
            }
            .MuiInputBase-root {
                &:before{
                    border: none;
                }
                &:after{
                    display: none;
                }
                input{
                    padding-left: 30px;
                    border: 0;
                    @media(max-width: 479px){
                        padding: 15px;
                        font-size: 15px;
                        background: var(--white);
                        border-radius: 50px;
                        margin-bottom: 20px;
                    }
                    
                }
            }
            @media(max-width: 899px){
                max-width: 100%;
            }
            @media(max-width: 479px){
                flex-direction: column;
                background: transparent;
                border: none;
            }
        }
        @media(max-width: 767px){
            padding: 40px 20px;
        }

        
    }

    .acc-wrapper{
        padding: 60px 100px 0;
        @media(max-width: 899px){
            padding: 60px 0 0;
        }
        @media(max-width: 767px){
            padding: 40px 0 0;
        }
        @media(max-width: 600px){
            padding: 40px 0 0;
        }
        
    }
    

`    

export default function HelpCenter() {

  const accordionsdata = [
    {
        heading: 'When does my program arrive?',
        content: 'All programs are truly tailored to your individual needs. Nothing is “pre-made”. You can expect to have your program in roughly 48 hours after I receive the intake form with all your details.',
        panelNo: 'panel1',
    },
    {
        heading: 'How will I receive my programs?',
        content: 'Every programs are truly tailored to your individual needs. Nothing is “pre-made”. You can expect to have your program in roughly 48 hours after I receive the intake form with all your details.',
        panelNo: 'pane2',
    },
    {
        heading: 'Are your programs refundable?',
        content: 'No other programs are truly tailored to your individual needs. Nothing is “pre-made”. You can expect to have your program in roughly 48 hours after I receive the intake form with all your details.',
        panelNo: 'panel3',
    },
    {
        heading: 'What can I expect from working with you?',
        content: 'Programs are truly tailored to your individual needs. Nothing is “pre-made”. You can expect to have your program in roughly 48 hours after I receive the intake form with all your details.',
        panelNo: 'panel4',
    },
   
  ]      

  return (
    <HelpCenterWrap>
       <Container fixed>
            <Box className="ques-form-wrap">
                <Box className="section-heading">
                    <CommonHeadingTittle tittletxt={'Have A Question?'} subTxt={'Type you have any question you can ask below or enter what you are looking for! '}></CommonHeadingTittle>
                </Box>
                <Box className="form-group">
                    <TextField
                        id="filled-basic" 
                        placeholder='Type your search items here'
                        variant='standard' 
                        type='text'
                    />
                    <CustomButton type='button'>
                        <Typography variant='caption'>
                            Search
                        </Typography>
                    </CustomButton>
                </Box>
            </Box>
            <Box className="acc-wrapper">
                <CustomAccordions data={accordionsdata}/>
            </Box>
       </Container>
    </HelpCenterWrap>
  )
}
