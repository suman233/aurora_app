import assest from '@/json/assest';
import CustomButton from '@/ui/Buttons/CustomButton';
import styled from '@emotion/styled'
import { List, ListItem, Typography } from '@mui/material';
import { Box } from '@mui/system'
import Image from 'next/image';
import React from 'react'


const PricingCardWrap = styled(Box)`
    
    border: 1px solid var(--colorE5F2FF);
    border-radius: 10px;
    .card-top{
        padding: 30px;
        border-bottom: 1px solid rgba(67,103,177,.15);
        @media(max-width: 1199px){
            padding: 20px;
        }
        @media(max-width: 600px){
            padding: 15px;
        }
        h3{
            font-weight: 700;
            font-size: 30px;
            color: var(--color343641);
            margin-bottom: 15px;
            @media(max-width: 600px){
                font-size: 24px;
            }
        }
        .pricing-div{
            display: flex;
            align-items: center;
            column-gap: 5px;
            margin-bottom: 15px;
            @media(max-width: 600px){
                margin-bottom: 10px;
            }
            .MuiTypography-caption{
                &:first-child{
                    font-weight: 600;
                    font-size: 30px;
                    color: var(--color343641);
                    @media(max-width: 600px){
                        font-size: 20px;
                    }
                }
            }
        }
        .fre-trial{
            display: inline-block;
            padding: 18px 30px;
            background: rgba(246,137,57,.20);
            border-radius: 50px;
            color: var(--colorF68939);
            line-height: 1;
            @media(max-width: 600px){
                padding: 12px 20px;
            }
        }
        
    }

    .card-btm{
        padding: 45px 45px 30px;
        @media(max-width: 1199px){
            padding: 30px;
        }
        @media(max-width: 1199px){
            padding: 20px;
        }
        @media(max-width: 600px){
            padding: 15px;
        }
        .option-list{
            padding: 0;
            margin-bottom: 30px;
            @media(max-width: 600px){
                margin-bottom: 20px;
            }
            li{
                padding: 0;
                margin-bottom: 20px;
                display: flex;
                column-gap: 17px;
                align-items: center;
                @media(max-width: 600px){
                    margin-bottom: 15px;
                }
                &:last-child{
                    margin-bottom: 0;
                }

                .ico{
                    line-height: 1;
                }
                @media(max-width: 1199px){
                    column-gap: 10px;
                }
            }
        }
        button{
            min-width: auto;
        }
    }
`

interface pricingCardProps{
    heading: string,
    price: string,
    options: any[],
}
interface subProps{
    text: string;
    isCross : boolean
}
export default function PricingCard(props: pricingCardProps) {
    
    const {heading,price,options} = props;
  return (
    <PricingCardWrap className='pricing-card'>
        <Box className="card-top">
            <Typography variant='h3'>
                {heading}
            </Typography>
            <Box className="pricing-div">
                <Typography variant='caption'>
                    $ {price}
                </Typography>
                <Typography variant='caption'>
                    Per Month
                </Typography>
            </Box>
            <Typography variant='caption' className='fre-trial'>
                Start 7 days Free trial
            </Typography>
        </Box>
        <Box className="card-btm">
            <List className='option-list'>
                {
                    options.map((option:subProps)=> (
                        <ListItem>
                            <i className='ico'>
                                <Image
                                    src={option.isCross? assest.crossIco : assest.tickIco}
                                    alt=''
                                    width={20}
                                    height={20}
                                />
                            </i>
                            <Typography variant='caption'>
                                {option.text}
                            </Typography>
                        </ListItem>
                    ))
                }
               
            </List>
            <CustomButton type="button">
                <Typography variant="caption">Buy Now</Typography>
            </CustomButton>
        </Box>
    </PricingCardWrap>
  )
}
