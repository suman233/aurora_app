import styled from '@emotion/styled'
import { Container, Grid } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import CommonHeadingTittle from '../CommonHeadingTittle/CommonHeadingTittle'
import PricingCard from '../PricingCard/PricingCard'

const PricingWrap = styled(Box)`
    padding: 80px 0;
    @media(max-width: 767px){
        padding: 40px 0;
    }    
    @media(max-width: 1199px){
        padding: 60px 0;
    }
    @media(max-width: 600px){
        padding: 40px 0;
    }
    .section-heading{
        margin-bottom: 40px;
        @media(max-width: 600px){
            margin-bottom: 20px;
        }
    }
    

`

export default function Pricing() {

  const pricingData = [
    {
        heading: 'Basic',
        price:  '2.99',
        options: [
            {
                text: 'Lorem Ipsum is  dummy text',
                isCross: true
            },
            {
                text: 'Lorem Ipsum is  dummy text',
                isCross: true
            },
            {
                text: 'Lorem Ipsum is  dummy text',
                isCross: false
            },
            {
                text: 'Lorem Ipsum is  dummy text',
                isCross: false
            },
            {
                text: 'Lorem Ipsum is  dummy text',
                isCross: false
            },
            {
                text: 'Lorem Ipsum is  dummy text',
                isCross: false
            },
            {
                text: 'Lorem Ipsum is  dummy text',
                isCross: false
            },
            {
                text: 'Lorem Ipsum is  dummy text',
                isCross: false
            },
        ]
    },
    {
        heading: 'Premium',
        price:  '2.99',
        options: [
            {
                text: 'Lorem Ipsum is  dummy text',
                isCross: false
            },
            {
                text: 'Lorem Ipsum is  dummy text',
                isCross: false
            },
            {
                text: 'Lorem Ipsum is  dummy text',
                isCross: false
            },
            {
                text: 'Lorem Ipsum is  dummy text',
                isCross: false
            },
            {
                text: 'Lorem Ipsum is  dummy text',
                isCross: false
            },
            {
                text: 'Lorem Ipsum is  dummy text',
                isCross: false
            },
            {
                text: 'Lorem Ipsum is  dummy text',
                isCross: false
            },
            {
                text: 'Lorem Ipsum is  dummy text',
                isCross: false
            },
        ]
    },
    {
        heading: 'Standard',
        price:  '2.99',
        options: [
            {
                text: 'Lorem Ipsum is  dummy text',
                isCross: true
            },
            {
                text: 'Lorem Ipsum is  dummy text',
                isCross: false
            },
            {
                text: 'Lorem Ipsum is  dummy text',
                isCross: false
            },
            {
                text: 'Lorem Ipsum is  dummy text',
                isCross: false
            },
            {
                text: 'Lorem Ipsum is  dummy text',
                isCross: false
            },
            {
                text: 'Lorem Ipsum is  dummy text',
                isCross: false
            },
            {
                text: 'Lorem Ipsum is  dummy text',
                isCross: false
            },
            {
                text: 'Lorem Ipsum is  dummy text',
                isCross: false
            },
        ]
    },
    
  ]  

  return (
    <PricingWrap className='pricing-section'>
        <Container fixed>
            <Box className="section-heading">
                <CommonHeadingTittle tittletxt={'Pricing'} subTxt={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"} />
            </Box>
            <Box className="pricing-wrapper">
                <Grid container columnSpacing={{lg:3,md:1,sm:1}} rowSpacing={{lg:5,md:3,xs:2}}>
                    {
                        pricingData.map((pricing)=> (
                            <Grid item lg={4} md={4} xs={12}>
                                <PricingCard
                                
                                heading={pricing.heading}
                                price={pricing.price}
                                options={pricing.options}
                                />
                            </Grid>
                        ))
                    }
                </Grid>
            </Box>
        </Container>
    </PricingWrap>
  )
}
