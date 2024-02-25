import { Checkbox, FormControlLabel, Grid, Typography } from '@mui/material'
import { Box, Container, styled } from '@mui/system'
import React, { useState } from 'react'
import InputFildcommn from '../InputFildcommn/InputFildcommn'
import CommonFormLeft from '../CommonFormLeft/CommonFormLeft'
import assest from '@/json/assest'
import Link from 'next/link'
import CustomButton from '@/ui/Buttons/CustomButton'
import MuiModalWrapper from '@/ui/Modal/MuiModalWrapper'
import Image from 'next/image'
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
                                left: 22px;
                                @media(max-width: 899px){
                                    left: 15px;
                                }
                                @media(max-width: 600px){
                                    left: 10px;
                                }
                            }
                        }
                    }
                    .checkbox-common{
                        display: flex;
                        align-items: center;
                        justify-content: space-between;
                        margin-bottom: 35px;
                        @media(max-width: 600px){
                            margin-bottom: 25px;
                        }
                        .MuiFormControlLabel-root{
                            margin: 0;
                            .MuiCheckbox-root{
                                padding: 0;
                                margin-right: 20px;
                                @media(max-width: 600px){
                                    margin-right:5px;
                                }
                            }
                            span{
                                font-size: 14px;
                                color: var(--color343641);
                                font-weight: 400;
                                @media(max-width: 374px){
                                    font-size: 12px;
                                }
                                &.Mui-checked{
                                    svg{
                                    width: 30px;
                                    height: 26px;
                                    background: url(${assest.checkBoxcusmBx2});
                                    }
                                }
                                svg{
                                    width: 30px;
                                    height: 26px;
                                    background: url(${assest.checkBoxcusmBx});
                                    path{
                                        display: none;
                                    }
                                }
                            }

                        }
                        .forgetpassWrd-wrp{
                            a{
                                font-size: 14px;
                                color: var(--color343641);
                                font-weight: 400;
                                display: inline-block;
                                &:hover{
                                    color: var(--colorF68939);
                                }
                                @media(max-width: 374px){
                                    font-size: 12px;
                                }
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
                            background: url("/assets/images/lineigline01.svg") no-repeat center;
                            background-size: 100% 100%;
                            position: absolute;
                            content: "";
                            width: 100%;
                            height: 2px;
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
export default function LoingMain() {
    const [open, setOpen]=useState(false)
    const onHandleClose=()=>{
        setOpen(false);
    }
    const onHandleOpen=()=>{
        setOpen(true);
    }
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
                            <Box className="wrapInner-loginform">
                                <Typography variant='h2'>Log In</Typography>
                                <Box className="single-inputWrap">
                                    <InputFildcommn placeholder='Email' type='email' img={assest.emnailinpticn} imgWidth={20} imgHeight={20}/>
                                </Box>
                                <Box className="single-inputWrap">
                                    <InputFildcommn IsPassword labelForPassword='Password' img={assest.passwrdicninpt} imgWidth={20} imgHeight={20}/>
                                </Box>
                                <Box className="checkbox-common">
                                    <FormControlLabel control={<Checkbox/>} label="Remember Me?" />
                                    <Box className="forgetpassWrd-wrp">
                                        <Link href="javascript:void(0)" onClick={onHandleOpen}>Forgot Password</Link>
                                    </Box>
                                </Box>
                                <Box className="submtbtn-wraplogin">
                                    <CustomButton type="button">
                                        <Typography variant="caption">Login</Typography>
                                    </CustomButton>
                                </Box>
                                <Box className="orlogin-txtwrap">
                                    <Typography variant='body1'>OR</Typography>
                                </Box>
                                <Box className="login-signinlinks">
                                    <Typography variant='body1'>Don’t have an account?<Link href="/signup">Sign Up</Link></Typography>
                                </Box>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </Box>
        <MuiModalWrapper open={open} title={''} onClose={onHandleClose} className="signinModal">
            <Box className="modal-signinwrap">
                <i><Image src={assest.modalsigninicon} alt='modalicon' width={50} height={48}/></i>
                <Typography variant='body1'>A verification link has been sent to your email address. <br/>Please check to complete your forgot password. </Typography>
            </Box>
        </MuiModalWrapper>
    </LoingMainWraper>
  )
}
