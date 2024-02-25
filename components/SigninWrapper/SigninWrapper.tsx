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
                    padding: 34px 42px 34px 43px;
                    @media(max-width: 1199px){
                        padding: 30px 25px;
                    }
                    @media(max-width: 899px){
                        padding: 30px 20px;
                        margin-top: 25px;
                    }
                    h2{
                        color: var(--color343641);
                        margin-bottom: 30px;
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
                                left: 20px;
                                @media(max-width: 899px){
                                    left: 15px;
                                }
                                @media(max-width: 600px){
                                    left: 10px;
                                }
                            }
                        }
                    }
                    .wrapperinnert-twoinpt{
                        position: relative;
                        display: flex;
                        flex-wrap: wrap;
                        margin: 0 -11px 20px; 
                        .wrapperinner-singlewrap{
                            width: 50%;
                            padding: 0 11px;
                            position: relative;
                            @media(max-width: 600px){
                                width: 100%;
                                margin-bottom: 20px;
                                &:last-child{
                                    margin-bottom: 0;
                                }
                            }
                            .input_style_wrap{
                                position: relative;
                                img{
                                    position: absolute;
                                    top: 50%;
                                    transform: translateY(-50%);
                                    z-index: 1;
                                    left: 20px;
                                    @media(max-width: 899px){
                                        left: 15px;
                                    }
                                    @media(max-width: 600px){
                                        left: 10px;
                                    }
                                }
                            }
                        }
                    }
                    .checkbox-common{
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        margin-bottom: 35px;
                        .MuiFormControlLabel-root{margin: 0;
                            .MuiCheckbox-root{
                                padding: 0;
                                margin-right: 14px;
                            }
                            span{
                                font-size: 14px;
                                color: var(--color343641);
                                font-weight: 400;
                            }
                        }
                        a{
                            font-size: 14px;
                            color: var(--color343641);
                            font-weight: 400;
                            display: inline-block;
                            text-decoration: none;
                            &:hover{
                                color: var(--colorF68939);
                            }
                        }
                    }
                    .submtbtn-wraplogin{
                        position: relative;
                        text-align: center;
                        margin-bottom: 30px;
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
                            font-size: 16px;
                            color: var(--color343641);
                            font-weight: 400;
                            a{
                                font-size: 18px;
                                font-weight: 700;
                                color: var(--color343641);
                                margin-left: 5px;
                                text-decoration: none;
                                &:hover{
                                    color: var(--colorF68939);
                                }
                            }
                        }
                    }
                }
            }
            
        }
        
    }
`
interface SigninProps{
    children: JSX.Element | JSX.Element[] | any; 
}
export default function SigninWrapper({children}: SigninProps) {
  return (
    <LoingMainWraper>
        <Box className="loginMain-wrapper">
            <Container fixed>
                <Box className="loginwrapmain">
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 2 }}>
                        <Grid item md={6} xs={12}>
                            <CommonFormLeft tittle="Lorem Ipsum is simply dummy text" subtittle="Lorem Ipsum is simply dummy text of the printing and standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"/>
                        </Grid>
                        <Grid item md={6} xs={12}>
                            {children}
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
    </LoingMainWraper>
  )
}
