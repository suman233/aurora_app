import assest from '@/json/assest'
import styled from '@emotion/styled'
import { Container, Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import AboutCard from '../AboutCard/AboutCard'
import CommonHeadingTittle from '../CommonHeadingTittle/CommonHeadingTittle'
import { useQuery } from 'react-query'
import { homebannerfunc } from '@/api/functions/allfunc'

const AboutProductWrap = styled(Box)`
    padding: 80px 0;
    @media(max-width: 600px){
        padding: 40px 0;
    }
    .section-heading{
       
        margin: 0 auto 40px;
       
    }


    
`

// interface aboutinter{
//     tittletxt:string,
//     subTxt:string
// }
export default function AboutProduct() {

    const {error,data:bannerHome}=useQuery({
        queryKey:['banHome'],
        queryFn:homebannerfunc
        
      })
      console.log("home banner data",bannerHome);


  const aboutData = [
    {
        iconUrl: assest.abtIco1,
        
        heading: 'Lorem Ipsum is simply dummy text',
        para: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
        iconUrl: assest.abtIco2,
        
        heading: 'Lorem Ipsum is simply dummy text',
        para: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
    {
        iconUrl: assest.abtIco3,
       
        heading: 'Lorem Ipsum is simply dummy text',
        para: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.'
    },
  ]  

  return (
    <AboutProductWrap id="about-sec">
        <Container fixed>
            <Box className="section-heading">
                <CommonHeadingTittle tittletxt={ bannerHome?.section_2_heading as string} subTxt={bannerHome?.section_2_description.replace(/(<([^>]+)>)/gi, "") as string}/>
            </Box>
           
            <Box className="product-content">
                <Grid container columnSpacing={5} rowSpacing={5}>
                    {/* { 
                        aboutData.map((data)=> (
                            <Grid item lg={4} md={4} xs={12}>
                                <AboutCard 
                                    iconUrl={bannerHome?.section_2_icon_1 as string}
                                    heading={data.heading}
                                    para={data.para}
                                />
                            </Grid>
                        ))
                    } */}
                    <Grid item lg={4} md={4} xs={12}>
                                <AboutCard 
                                    iconUrl={`https://aurora.dedicateddevelopers.us/uploads/home_content/${bannerHome?.section_2_icon_1 as string}`}
                                    heading={bannerHome?.section_2_title_1 as string}
                                    para={bannerHome?.section_2_text_1 as string}
                                />
                            </Grid>
                            <Grid item lg={4} md={4} xs={12}>
                                <AboutCard 
                                    iconUrl={`https://aurora.dedicateddevelopers.us/uploads/home_content/${bannerHome?.section_2_icon_2 as string}`}
                                    heading={bannerHome?.section_2_title_1 as string}
                                    para={bannerHome?.section_2_text_1 as string}
                                />
                            </Grid>
                            <Grid item lg={4} md={4} xs={12}>
                                <AboutCard 
                                    iconUrl={`https://aurora.dedicateddevelopers.us/uploads/home_content/${bannerHome?.section_2_icon_3 as string}`}
                                    heading={bannerHome?.section_2_title_1 as string}
                                    para={bannerHome?.section_2_text_1 as string}
                                />
                            </Grid>
                </Grid>
            </Box>
        </Container>
    </AboutProductWrap>
  )
}
