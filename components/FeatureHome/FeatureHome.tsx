import { Box, Container, styled } from '@mui/system'
import React from 'react'
import CommonHeadingTittle from '../CommonHeadingTittle/CommonHeadingTittle'
import assest from '@/json/assest'
import { Typography } from '@mui/material'
import Image from 'next/image'
import { homebannerfunc } from '@/api/functions/allfunc'
import { useQuery } from 'react-query'
import { mediaUrl } from '@/api/endpoints'
const FeatureWrap = styled(Box)`
.common-gap{
    padding: 80px 0;
    
    @media(max-width: 1199px){
        padding: 60px 0;
    }
    @media(max-width: 767px){
        padding: 40px 0;
    }
    .featuremain-wrap{
        position: relative;
        margin-top: 68px;
        @media(max-width: 767px){
            margin-top: 40px;
        }
        .maininnr-wrap-feature{
            display: flex;
            flex-wrap: wrap;
            .left-feature-txtwrap{
                text-align: right;
                position: relative;
                display: flex;
                flex-wrap: wrap;
                justify-content: space-between;
                @media(max-width: 767px){
                    text-align: center;
                    justify-content: center;
                    padding-top: 60px;
                }
                .single-wraptxtLft{
                    padding-bottom: 104px;
                    padding-right: 96px;
                    position: relative;
                    max-width: 430px;
                    @media(max-width: 1199px){
                        max-width: 400px;
                    }
                    @media(max-width: 1023px){
                        max-width: 38%;
                        padding-right: 50px;
                    }
                   
                    @media(max-width: 767px){
                        padding-right: 0;
                        max-width: none;
                    }
                    &:nth-child(even){
                        text-align: left;
                        &.single-wraptxtLft{
                        padding-bottom: 104px;
                        padding-left: 96px;
                        padding-right: 0;
                        position: relative;
                        @media(max-width: 1199px){
                            padding-bottom: 80px;
                            padding-left: 66px;
                        }
                        @media(max-width: 1023px){
                            
                            /* padding-left: 50px; */
                        }
                        @media(max-width: 767px){
                            padding-left: 0;
                            text-align: center;
                        }
                        &:before{
                            position: absolute;
                            content: "";
                            width: 1px;
                            height: 100%;
                            border: 1px dashed rgba(0, 0, 0, 0.10);
                            left: 0;
                            top: 12px;
                        }
                        &:last-child{
                            padding-bottom: 0;
                            &:before{
                                display: none;
                            }
                        }
                        i{
                            display: inline-block;
                            margin-bottom: 10px;
                            position: relative;

                            @media(max-width: 767px){
                                width: 60px;
                                height: 60px;
                                display: inline-flex;
                                justify-content: center;
                                align-items: center;
                                margin-bottom: 20px;
                            }
                            &:before{
                                position: absolute;
                                content: "";
                                width: 8px;
                                height: 8px;
                                border-radius: 50%;
                                background: var(--color51B2E4);
                                top: 8px;
                                left: -25px;
                                @media(max-width: 767px){
                                    top: -60px;
                                    right: auto;
                                    left: 50%;
                                    transform: translateX(-50%);
                                }
                            }
                            &:after{
                                position: absolute;
                                content: "";
                                width: 68px;
                                height: 1px;
                                border: 1px dashed rgba(0, 0, 0, 0.10);
                                left: -96px;
                                top: 11px;
                                @media(max-width: 1199px){
                                    left: -66px;
                                    width: 38px;
                                }
                                @media(max-width: 767px){
                                    left: 50%;
                                    transform: translateX(-50%);
                                    width: 1px;
                                    height: 50px;
                                    top: -50px;
                                }
                            }
                        }
                        h3{
                            font-size: 20px;
                            color: var(--color343641);
                            font-weight: 400;
                            margin-bottom: 10px;
                            @media(max-width: 1199px){
                                font-size: 18px;
                            }
                        }
                        p{
                            @media(max-width: 1199px){
                                font-size: 14px;
                            }
                        }
                        }
                    }
                    &:nth-child(5){
                        &:before{
                            display: none;
                        }
                    }
                    @media(max-width: 1199px){
                        padding-bottom: 80px;
                        padding-right: 66px;
                    }
                    @media(max-width: 767px){
                        padding-right: 0;
                    }
                    &:before{
                        position: absolute;
                        content: "";
                        width: 1px;
                        height: 100%;
                        border: 1px dashed rgba(0, 0, 0, 0.10);
                        right: 0;
                        top: 12px;
                        @media(max-width: 767px){
                            display: none;
                        }
                    }
                    &:last-child{
                        padding-bottom: 0;
                        &:before{
                            display: none;
                        }
                    }
                    i{
                        display: inline-block;
                        margin-bottom: 10px;
                        position: relative;
                        @media(max-width: 767px){
                            width: 60px;
                            height: 60px;
                            display: inline-flex;
                            justify-content: center;
                            align-items: center;
                            background: var(--white);
                            box-shadow: 0px 0px 40px 0px rgba(0, 0, 0, 0.25);
                            border-radius: 50%;
                            margin-bottom: 20px;
                        }
                        &:before{
                            position: absolute;
                            content: "";
                            width: 8px;
                            height: 8px;
                            border-radius: 50%;
                            background: var(--color51B2E4);
                            top: 8px;
                            right: -25px;
                            @media(max-width: 767px){
                                    top: -60px;
                                    right: auto;
                                    left: 50%;
                                    transform: translateX(-50%);
                                }
                        }
                        &:after{
                            position: absolute;
                            content: "";
                            width: 68px;
                            height: 1px;
                            border: 1px dashed rgba(0, 0, 0, 0.10);
                            right: -96px;
                            top: 11px;
                            @media(max-width: 1199px){
                                right: -66px;
                                width: 38px;
                            }

                            @media(max-width: 767px){
                                left: 50%;
                                right: auto;
                                transform: translateX(-50%);
                                width: 1px;
                                height: 50px;
                                top: -50px;
                            }
                        }
                    }
                    
                    h3{
                        font-size: 20px;
                        color: var(--color343641);
                        font-weight: 400;
                        margin-bottom: 10px;
                        @media(max-width: 1199px){
                            font-size: 18px;
                        }
                    }
                    p{
                        @media(max-width: 1199px){
                            font-size: 14px;
                        }
                    }
                }
            }
            
        }
        .middleboximg-wrp{
            display: flex;
            justify-content: center;
            position: absolute;
            left: 50%;
            top: 135px;
            padding: 0 26px;
            transform: translateX(-50%);
            @media(max-width: 1199px){
                top: calc( 17% + 4px );
                padding: 0 65px;
            }
            @media(max-width: 1075px){
                top: calc( 17% + 29px );
                padding: 0 55px;
            }
            @media(max-width:1023px){
                top: calc( 17% + 29px );
                padding: 0 55px;
            }
            @media(max-width:905px){
                top: calc( 17% + 38px );
                
            }

            @media(max-width:876px){
                top: calc( 17% + 50px );
                
            }
            @media(max-width: 767px){
                display: none;
            }
            &:before{
                position: absolute;
                content: "";
                width: 100%;
                height: 1px;
                border: 1px dashed rgba(0, 0, 0, 0.10);
                left: 0;
                top: 50%;
                transform: translateY(-50%);
            }
            .innerwrapper-Mainicon{
                position: relative;
                width: 211px;
                height: 211px;
                margin: 0 auto;
                display: flex;
                align-items: center;
                justify-content: center;
                background: var(--white);
                box-shadow: 0px 0px 60px 0px rgba(0, 0, 0, 0.08);
                border-radius: 50%;
                @media (max-width: 1199px){
                    width: 210px;
                    height: 210px;
                }
                @media(max-width: 1075px){
                    width: 160px;
                    height: 160px;
                    
                }
                @media(max-width: 1023px){
                    width: 160px;
                    height: 160px;
                }
                figure{
                    position: relative;
                    width: 165px;
                    height: 165px;
                    margin: 0 auto;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    background: var(--white);
                    box-shadow: 0px 0px 60px 0px rgba(0, 0, 0, 0.08);
                    border-radius: 50%;
                    @media (max-width: 1199px){
                        width: 190px;
                        height: 190px;
                    }
                    @media (max-width: 1075px){
                        width: 140px;
                        height: 140px;
                    }
                    
                    @media(max-width: 1023px){
                        width: 140px;
                        height: 140px;
                    }

                    img{
                        @media(max-width: 1023px){
                            max-width: 80%;
                        }
                    }
                }
            }
        }
    }
}
`

const featureitemlist = [
    {
        iconimg: `${assest.featureimgicn}`,
        tittletxt: 'Lorem Ipsum is dummy text',
        subtxtttl: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
        iconimg: `${assest.featureimgicn}`,
        tittletxt: 'Lorem Ipsum is dummy text',
        subtxtttl: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
        iconimg: `${assest.featureimgicn}`,
        tittletxt: 'Lorem Ipsum is dummy text',
        subtxtttl: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
        iconimg: `${assest.featureimgicn}`,
        tittletxt: 'Lorem Ipsum is dummy text',
        subtxtttl: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
        iconimg: `${assest.featureimgicn}`,
        tittletxt: 'Lorem Ipsum is dummy text',
        subtxtttl: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },
    {
        iconimg: `${assest.featureimgicn}`,
        tittletxt: 'Lorem Ipsum is dummy text',
        subtxtttl: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
    },

]
export default function FeatureHome() {
    const { data: bannerHome, error } = useQuery({
        queryKey: ['banHome'],
        queryFn: homebannerfunc

    })
    console.log("home banner data", bannerHome);

    return (
        <FeatureWrap id="homeFeature-sec">
            <Box className="common-gap">
                <Container>
                    <CommonHeadingTittle tittletxt={bannerHome?.section_4_heading as string} subTxt={bannerHome?.section_4_description as string} />
                    <Box className="featuremain-wrap">
                        <Box className="maininnr-wrap-feature">
                            <Box className="commonclmfetr left-feature-txtwrap">

                                <Box className="single-wraptxtLft">
                                    <i><Image src={`https://aurora.dedicateddevelopers.us/uploads/home_content/${bannerHome?.section_4_icon_1 as string}`} width={26} height={26} alt='icon' /></i>
                                    <Typography variant='h3'>{bannerHome?.section_4_title_1}</Typography>
                                    <Typography variant='body1'>{bannerHome?.section_4_text_1}</Typography>
                                </Box>

                                <Box className="single-wraptxtLft">
                                    <i><Image src={`https://aurora.dedicateddevelopers.us/uploads/home_content/${bannerHome?.section_4_icon_2 as string}`} width={26} height={26} alt='icon' /></i>
                                    <Typography variant='h3'>{bannerHome?.section_4_title_2}</Typography>
                                    <Typography variant='body1'>{bannerHome?.section_4_text_2}</Typography>
                                </Box>
                                {/* src={mediaUrl(`uploads/home_content/${bannerHome?.section_4_icon_2} */}

                                <Box className="single-wraptxtLft">
                                    <i><Image src={`https://aurora.dedicateddevelopers.us/uploads/home_content/${bannerHome?.section_4_icon_3 as string}`} width={26} height={26} alt='icon' /></i>
                                    <Typography variant='h3'>{bannerHome?.section_4_title_3}</Typography>
                                    <Typography variant='body1'>{bannerHome?.section_4_text_3}</Typography>
                                </Box>

                                <Box className="single-wraptxtLft">
                                    <i><Image src={`https://aurora.dedicateddevelopers.us/uploads/home_content/${bannerHome?.section_4_icon_4 as string}`} width={26} height={26} alt='icon' /></i>
                                    <Typography variant='h3'>{bannerHome?.section_4_title_4}</Typography>
                                    <Typography variant='body1'>{bannerHome?.section_4_text_4}</Typography>
                                </Box>

                                <Box className="single-wraptxtLft">
                                    <i><Image src={`https://aurora.dedicateddevelopers.us/uploads/home_content/${bannerHome?.section_4_icon_2 as string}`} width={26} height={26} alt='icon' /></i>
                                    <Typography variant='h3'>{bannerHome?.section_4_title_5}</Typography>
                                    <Typography variant='body1'>{bannerHome?.section_4_text_5}</Typography>
                                </Box>

                                <Box className="single-wraptxtLft">
                                    <i><Image src={`https://aurora.dedicateddevelopers.us/uploads/home_content/${bannerHome?.section_4_icon_5 as string}`} width={26} height={26} alt='icon' /></i>
                                    <Typography variant='h3'>{bannerHome?.section_4_title_6}</Typography>
                                    <Typography variant='body1'>{bannerHome?.section_4_text_6}</Typography>
                                </Box>

                            </Box>
                            <Box className="commonclmfetr middleboximg-wrp">
                                <Box className="innerwrapper-Mainicon">
                                    <figure><Image src={assest.featuremainimg} width={97} height={81} alt="icon" /></figure>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Container>
            </Box>
        </FeatureWrap>
    )
}
