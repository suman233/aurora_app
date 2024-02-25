import styled from '@emotion/styled'
import { Container, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import CustomAccordions from '../CustomAccordion/CustomAccodion'

const FaqsWrap = styled(Box)`
    padding: 60px 0;
    @media(max-width: 767px){
        padding: 40px 0;
    }
    .faq-wrapper{
        max-width: 883px;
        margin: 0 auto;
        h2{
            text-align: center;
            color: var(--color343641);
            margin-bottom: 30px;
            font-weight: 700;
        }
    }
`

export default function Faqs() {

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
        {
            heading: 'Do you coach non-competitors?',
            content: 'Programs are truly tailored to your individual needs. Nothing is “pre-made”. You can expect to have your program in roughly 48 hours after I receive the intake form with all your details.',
            panelNo: 'panel5',
        },
        {
            heading: 'Will I receive a custom weight training program?',
            content: 'Programs are truly tailored to your individual needs. Nothing is “pre-made”. You can expect to have your program in roughly 48 hours after I receive the intake form with all your details.',
            panelNo: 'panel6',
        },
        {
            heading: 'What is your availability when working with & getting back to clients?',
            content: 'Programs are truly tailored to your individual needs. Nothing is “pre-made”. You can expect to have your program in roughly 48 hours after I receive the intake form with all your details.',
            panelNo: 'panel7',
        },
        {
            heading: 'How frequent can I expect the check-ins to be?',
            content: 'Programs are truly tailored to your individual needs. Nothing is “pre-made”. You can expect to have your program in roughly 48 hours after I receive the intake form with all your details.',
            panelNo: 'panel8',
        },
        {
            heading: 'When does my program arrive?',
            content: 'Programs are truly tailored to your individual needs. Nothing is “pre-made”. You can expect to have your program in roughly 48 hours after I receive the intake form with all your details.',
            panelNo: 'panel9',
        },
        {
            heading: "What if I'm using ped's?",
            content: 'Programs are truly tailored to your individual needs. Nothing is “pre-made”. You can expect to have your program in roughly 48 hours after I receive the intake form with all your details.',
            panelNo: 'panel10',
        },
       
      ]       

  return (
    <FaqsWrap>
        <Container fixed>
            <Box className="faq-wrapper">
                <Typography variant='h2'>
                    FAQ
                </Typography>
                <Box className="acc-wrapper">
                <CustomAccordions data={accordionsdata}/>
            </Box>
            </Box>
        </Container>
    </FaqsWrap>
  )
}
