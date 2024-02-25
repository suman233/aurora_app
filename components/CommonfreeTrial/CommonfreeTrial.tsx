import CustomButton from '@/ui/Buttons/CustomButton'
import CustomButtonOrange from '@/ui/Buttons/CustomButtonOrange'
import CustomButtonWhite from '@/ui/Buttons/CustomButtonWhite'
import { List, ListItem, Typography } from '@mui/material'
import { Box, Container, styled } from '@mui/system'
import React from 'react'
const CommonfreetrlWrap = styled(Box)`
    .commonfree-trialPart{
        position: relative;
        background: var(--color51B2E4);
        padding: 60px 0 80px;
        @media (max-width: 899px) {
            padding: 30px 0;
        }
        .freetrial-txtWrp{
            position: relative;
            text-align: center;
            margin-bottom: 25px;
            @media (max-width: 899px) {
                margin-bottom: 15px;
            }
            h2{
                color: var(--white);
                line-height: 1.5;
            }
        }
        .free-trialBtnwrap{
            position: relative;
            ul{
                display: flex;
                flex-wrap: wrap;
                align-items: center;
                justify-content: center;
                margin: 0 auto;
                li{
                    width: auto;
                    display: inline-block;
                    margin: 0;
                    padding: 0 15px;
                    @media (max-width:889px) {
                        padding: 0 6px;
                    }
                    @media (max-width:479px) {
                        padding: 5px 0;
                        width: 100%;
                        text-align: center;
                    }
                    button{
                        @media(max-width: 479px){
                            min-width: 185px;
                        }
                    }
                }
            }
        }
    }
`
interface freetrialProps{
    headingtittle: any,
}
export default function CommonfreeTrial(prop: freetrialProps) {
  return (
    <CommonfreetrlWrap>
        <Box className="commonfree-trialPart">
            <Container fixed>
                <Box className="freetrial-txtWrp">
                    <Typography variant='h2'>{prop.headingtittle}</Typography>
                </Box>
                <Box className="free-trialBtnwrap">
                    <List>
                        <ListItem className="whiteBtn">
                            <CustomButtonWhite type="button">
                                <Typography variant="caption">Free 7 days trial</Typography>
                            </CustomButtonWhite>
                        </ListItem>
                        <ListItem>
                            <CustomButtonOrange type="button">
                                <Typography variant="caption">Live Demo</Typography>
                            </CustomButtonOrange>
                        </ListItem>
                    </List>
                </Box>
            </Container>
        </Box>
    </CommonfreetrlWrap>
  )
}
