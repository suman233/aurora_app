import { Box, Checkbox, FormControl, FormControlLabel, Link, MenuItem, Select, SelectChangeEvent, Typography, styled } from '@mui/material'
import React from 'react'
import InputFildcommn from '../InputFildcommn/InputFildcommn'
import CustomButton from '@/ui/Buttons/CustomButton'
import assest from '@/json/assest'
import Image from 'next/image'
const LoingMainWraper = styled(Box)`
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
    .selectwrap-innrsngl{
        position: relative;
        margin-bottom: 20px;
        .MuiFormControl-root{
            border: 0;
            .MuiBox-root{
                border: 0;
                display: block;
                .MuiInputBase-root{
                    border: 1px solid var(--colorCECECE);
                    height: 50px;
                    box-sizing: border-box;
                    font-size: 15px;
                    font-weight: 400;
                    color: var(--color343641);
                    background: var(--white);
                    border-radius: 10px;
                    -webkit-border-radius: 10px;
                    &:focus{
                        border: 1px solid var(--colorCECECE);
                    }
                    &:hover{
                        border: 1px solid var(--colorCECECE);
                    }
                }
                .MuiSelect-select{
                    border: 0;
                    width: 100%;
                    padding: 5px 35px 5px 51px ;
                    @media(max-width: 600px){
                        padding: 5px 10px 5px 40px ;
                    }
                }
                svg{
                    background: url(${assest.dwarwsslect});
                    width: 20px;
                    height: 20px;
                    background-size: 100%;
                    background-position: center;
                    right: 20px;
                    path{
                        display: none;
                    }
                }
                }
                .MuiOutlinedInput-notchedOutline{
                    display: none;
                }
            }
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
                    color: var(--colorF68939);
                }
            }
        }
    }
}
`
export default function SignInStepTwo() {
    const [county, setCountry] = React.useState("");
    const handleChange = (event: SelectChangeEvent) => {
        setCountry(event.target.value as string);
    };

    const [state, setState] = React.useState("");
    const handleChangetw = (event: SelectChangeEvent) => {
        setState(event.target.value as string);
    };
    return (
        <LoingMainWraper>
            <Box className="wrapInner-loginform">
                <Typography variant='h2'>SignUp</Typography>
                <Box className="single-inputWrap">
                    <InputFildcommn placeholder='Company Name' type='text' img={assest.companyicnimg} imgWidth={20} imgHeight={20} />
                </Box>
                <Box className="single-inputWrap">
                    <InputFildcommn placeholder='Company Address' type='text' img={assest.companyicnaddres} imgWidth={20} imgHeight={20} />
                </Box>
                <Box className="selectwrap-innrsngl">
                    <Image src={assest.countryicnipt} width={20} height={20} alt='countyicon' />
                    <FormControl className="form_control dropdownMenu-list" fullWidth>
                        <Box sx={{ display: { md: "flex", xs: "none" } }}>
                            <Select
                                value={county}
                                onChange={handleChange}
                                displayEmpty
                                inputProps={{ "aria-label": "Without label" }}
                                fullWidth
                            >
                                <MenuItem value="" disabled sx={{ display: "none" }}>
                                    <Typography variant="caption">Country</Typography>
                                </MenuItem>
                                <MenuItem value={10}>England</MenuItem>
                                <MenuItem value={20}>France</MenuItem>
                                <MenuItem value={30}>Germany</MenuItem>
                                <MenuItem value={40}>USA</MenuItem>
                                <MenuItem value={50}>Japan</MenuItem>
                                <MenuItem value={60}>India</MenuItem>
                            </Select>
                        </Box>
                    </FormControl>
                </Box>
                <Box className="selectwrap-innrsngl">
                    <Image src={assest.stateicninpt} width={20} height={20} alt='countyicon' />
                    <FormControl className="form_control dropdownMenu-list" fullWidth>
                        <Box sx={{ display: { md: "flex", xs: "none" } }}>
                            <Select
                                value={state}
                                onChange={handleChangetw}
                                displayEmpty
                                inputProps={{ "aria-label": "Without label" }}
                                fullWidth
                            >
                                <MenuItem value="" disabled sx={{ display: "none" }}>
                                    <Typography variant="caption">State</Typography>
                                </MenuItem>
                                <MenuItem value={10}>Option 1</MenuItem>
                                <MenuItem value={20}>Option 2</MenuItem>
                                <MenuItem value={30}>Option 3</MenuItem>
                                <MenuItem value={40}>Option 4</MenuItem>
                                <MenuItem value={50}>Option 5</MenuItem>
                                <MenuItem value={60}>Option 6</MenuItem>
                            </Select>
                        </Box>
                    </FormControl>
                </Box>
                <Box className="single-inputWrap">
                    <InputFildcommn placeholder='City' type='text' img={assest.cityicninpt} imgWidth={20} imgHeight={20} />
                </Box>
                <Box className="single-inputWrap">
                    <InputFildcommn placeholder='Zip Code' type='text' img={assest.zipcodeicnipnt} imgWidth={20} imgHeight={20} />
                </Box>
                <Box className="single-inputWrap">
                    <InputFildcommn placeholder='Referral Source' type='text' img={assest.refralcodeicninpt} imgWidth={20} imgHeight={20} />
                </Box>
                <Box className="checkbox-common">
                    <FormControlLabel control={<Checkbox />} label="Terms and conditions" />
                </Box>
                <Box className="submtbtn-wraplogin">
                    <CustomButton type="button">
                        <Typography variant="caption">Sign Up</Typography>
                    </CustomButton>
                </Box>
                <Box className="login-signinlinks">
                    <Typography variant='body1'>Already a member?<Link href="/login">Log In</Link></Typography>
                </Box>
            </Box>
        </LoingMainWraper>
    )
}
