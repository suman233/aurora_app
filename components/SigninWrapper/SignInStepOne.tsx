import { Box, Checkbox, FormControlLabel, Link, Typography, styled } from '@mui/material'
import React from 'react'
import InputFildcommn from '../InputFildcommn/InputFildcommn'
import CustomButton from '@/ui/Buttons/CustomButton'
import assest from '@/json/assest'
const LoingMainWraper = styled(Box)`
    .wrapInner-loginform{
        position: relative;
        border-radius: 10px;
        background: var(--white);
        box-shadow: 0px 0px 40px 0px rgba(0, 0, 0, 0.25);
        padding: 34px 42p 34px 43px;
        @media(max-width: 1199px){
            padding: 30px 25px;
        }
        @media(max-width: 899px){
            padding: 20px 15px;
            margin-top: 30px;
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
            @media(max-width: 600px){
                flex-wrap: wrap;
                margin-bottom: 25px;
            }
            .MuiFormControlLabel-root{
                
                span{
                    font-size: 14px;
                    color: var(--color343641);
                    font-weight: 400;
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
                    &:hover{
                        color: var(--colorff0000);
                    }
                }
            }
        }
    }
`

interface signinProps {
    onHandleIncr?: () => void;
}
export default function SignInStepOne({ onHandleIncr }: signinProps) {
    return (
        <LoingMainWraper>
            <Box className="wrapInner-loginform">
                <Typography variant='h2'>SignUp</Typography>
                <Box className="wrapperinnert-twoinpt">
                    <Box className="wrapperinner-singlewrap">
                        <InputFildcommn placeholder='First Name' type='text' img={assest.usericniptfld} imgWidth={20} imgHeight={20} />
                    </Box>
                    <Box className="wrapperinner-singlewrap">
                        <InputFildcommn placeholder='Last Name' type='text' img={assest.usericniptfld} imgWidth={20} imgHeight={20} />
                    </Box>
                </Box>
                <Box className="single-inputWrap">
                    <InputFildcommn placeholder='Email' type='email' img={assest.emnailinpticn} imgWidth={20} imgHeight={20} />
                </Box>
                <Box className="single-inputWrap">
                    <InputFildcommn placeholder='Phone Number' type='tel' img={assest.callinpticnimg} imgWidth={20} imgHeight={20} />
                </Box>
                <Box className="single-inputWrap">
                    <InputFildcommn IsPassword labelForPassword='Password' img={assest.passwrdicninpt} imgWidth={20} imgHeight={20} />
                </Box>
                <Box className="single-inputWrap">
                    <InputFildcommn IsPassword labelForPassword='Confirm Password ' img={assest.passwrdicninpt} imgWidth={20} imgHeight={20} />
                </Box>
                <Box className="checkbox-common">
                    <FormControlLabel control={<Checkbox />} label="Terms and conditions" />
                </Box>
                <Box className="submtbtn-wraplogin">
                    <CustomButton type="button" onClick={onHandleIncr}>
                        <Typography variant="caption">Next</Typography>
                    </CustomButton>
                </Box>
                <Box className="login-signinlinks">
                    <Typography variant='body1'>Already a member?<Link href="/login">Log In</Link></Typography>
                </Box>
            </Box>
        </LoingMainWraper>
    )
}
