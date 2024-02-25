import assest from '@/json/assest'
import styled from '@emotion/styled'
import { Container, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'

import React from 'react'
import CommonHeadingTittle from '../CommonHeadingTittle/CommonHeadingTittle'
import KeyCard from '../KeyCard/KeyCard'
import { useQuery } from 'react-query'
import { keywordIDfunc } from '@/api/functions/allfunc'

const KeyFactorsWrap = styled(Box)`
    background-color: var(--colorF68939);
    padding: 80px 0;
    @media(max-width: 767px){
        padding: 40px 0;
    }
    .section-heading{
       
        margin-bottom: 40px;
        
    }

    .ky-factors-content{
        max-width: 930px;
        margin: 0 auto;
        .MuiGrid-item{
            :nth-child(even){
                .key-card{
                    padding-right: 0;
                    padding-left: 15px;
                    @media(max-width: 899px){
                        padding-left: 0;
                    }
                    &:after{
                        display: none;
                        
                    }
                }
        
            }
            &:last-child{
                .key-card{
                    &:before{
                        display: none;
                    }
                    @media(max-width: 899px){
                        padding-bottom: 0;
                    }
                    
                }
            }  

            &:nth-last-child(2){
                .key-card{
                    &:before{
                        display: none;
                        @media(max-width: 899px){
                            display: block;
                        }
                    }
                }
            }
        }
    }
`

export default function KeyFactors() {

  const keyFactorData = [
    {
        ico: assest.keyIco1,
        heading: 'Make an impression',
        para: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy.'
    },
    {
        ico: assest.keyIco2,
        heading: 'Keep it simple',
        para: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy.'
    },
    {
        ico: assest.keyIco3,
        heading: 'Top-tier support',
        para: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy.'
    },
    {
        ico: assest.keyIco4,
        heading: 'Software You Can Trust',
        para: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy.'
    },
  ]
    
  return (
    <KeyFactorsWrap className='key-factors-sec '>
        <Container fixed>
            
            <Box className="section-heading">
                <CommonHeadingTittle isWhite tittletxt={'Key Factors'} subTxt={"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"} />
            </Box>
            <Box className="ky-factors-content">
                <Grid container  rowSpacing={5} columnSpacing={5}>
                    {
                        keyFactorData.map((data)=> (
                            <Grid item lg={6} md={6} xs={12}>
                                
                                    <KeyCard
                                        ico={data.ico}
                                        heading={data.heading}
                                        para={data.para}
                                    />
                                
                            </Grid>
                        ))
                    }
                </Grid>
            </Box>
        </Container>
    </KeyFactorsWrap>
  )
}
