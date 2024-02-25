import { Checkbox, FormControlLabel, Grid, Typography } from '@mui/material'
import { Box, Container, styled } from '@mui/system'
import React from 'react'
import InputFildcommn from '../InputFildcommn/InputFildcommn'
import CommonFormLeft from '../CommonFormLeft/CommonFormLeft'
import assest from '@/json/assest'
import Link from 'next/link'
import CustomButton from '@/ui/Buttons/CustomButton'
const LoingMainWraper = styled(Box)`
    .loginMain-wrapper{
        position: relative;
        padding: 50px 0 80px;
        @media(max-width: 1199px){
            padding: 40px 0;
        }
        .loginwrapmain{
            position: relative;
            .MuiGrid-container{
                align-items: center;
                .wrapInner-loginform{
                    position: relative;
                    border-radius: 10px;
                    background: var(--white);
                    box-shadow: 0px 0px 40px 0px rgba(0, 0, 0, 0.25);
                    padding: 34px 44px;
                    @media(max-width: 1199px){
                        padding: 30px 25px;
                    }
                    @media(max-width: 899px){
                        padding: 20px 15px;
                        margin-top: 30px;
                    }
                    h2{
                        color: var(--color343641);
                        margin-bottom: 25px;
                        @media(max-width: 600px){
                            flex-wrap: wrap;
                            margin-bottom: 15px;
                            font-size: 24px;
                        }
                    }
                    .single-inputWrap{
                        position: relative;
                        margin-bottom: 20px;
                        .input_style_wrap{
                            position: relative;
                            img{
                                position: absolute;
                                top: 50%;
                                transform: translateY(-50%);
                                z-index: 1;
                                left: 10px;
                            }
                        }
                    }
                    .checkbox-common{
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        margin-bottom: 35px;
                        @media(max-width: 600px){
                            flex-wrap: wrap;
                            margin-bottom: 25px;
                        }
                        .MuiFormControlLabel-root{
                            span{
                                font-size: 14px;
                                color: var(--color343641);
                                font-weight: 400;
                            }

                        }
                        .forgetpassWrd-wrp{
                            @media(max-width: 600px){
                                width: 100%;
                                text-align: center;
                            }
                            a{
                                font-size: 14px;
                                color: var(--color343641);
                                font-weight: 400;
                                display: inline-block;
                                &:hover{
                                    color: var(--colorff0000);
                                }
                            }
                        }
                    }
                    .submtbtn-wraplogin{
                        position: relative;
                        text-align: center;
                        button{
                            min-width: auto;
                        }
                    }
                    .orlogin-txtwrap{
                        position: relative;
                        text-align: center;
                        &:before{
                            border: 1px dashed var(--color808080);
                            position: absolute;
                            content: "";
                            width: 100%;
                            height: 1px;
                            left: 0;
                            top: 50%;
                            transform: translateY(-50%);
                        }
                        p{
                            display: inline-block;
                            padding: 0 15px;
                            background: var(--white);
                            z-index: 1;
                            position: relative;
                        }
                    }
                    .login-signinlinks{
                        text-align: center;
                        margin-top: 15px;
                        p{
                            font-size: 20px;
                            color: var(--color343641);
                            font-weight: 400;
                            @media(max-width: 1199px){
                                font-size: 16px; 
                            }
                            a{
                                font-weight: 700;
                                color: var(--color343641);
                                margin-left: 5px;
                                &:hover{
                                    color: var(--colorff0000);
                                }
                            }
                        }
                    }
                }
            }
            
        }
        
    }
`
export default function ResetPassword() {
  return (
    <LoingMainWraper>
        <Box className="loginMain-wrapper">
            <Container fixed>
                <Box className="loginwrapmain">
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 4 }}>
                        <Grid item md={6} xs={12}>
                            <CommonFormLeft tittle="Lorem Ipsum is simply dummy text" subtittle="Lorem Ipsum is simply dummy text of the printing and standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"/>
                        </Grid>
                        <Grid item md={6} xs={12}>
                            <Box className="wrapInner-loginform">
                                <Typography variant='h2'>Reset New Password</Typography>
                                <Box className="single-inputWrap">
                                    <InputFildcommn IsPassword labelForPassword='Create a New Password ' img={assest.passwrdicninpt} imgWidth={20} imgHeight={20}/>
                                </Box>
                                <Box className="single-inputWrap">
                                    <InputFildcommn IsPassword labelForPassword='Create a Confirm Password ' img={assest.passwrdicninpt} imgWidth={20} imgHeight={20}/>
                                </Box>
                                <Box className="submtbtn-wraplogin">
                                    <CustomButton type="button">
                                        <Typography variant="caption">Continue</Typography>
                                    </CustomButton>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    </LoingMainWraper>
  )
}
