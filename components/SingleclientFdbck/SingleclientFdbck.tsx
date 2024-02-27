import { Rating, Typography } from '@mui/material'
import { Box, styled } from '@mui/system'
import Image from 'next/image'
import React from 'react'
const SinglewrapcrtFeed = styled(Box)`
    .mainwrap-singlcrtfeed{
        position: relative;
        .top-partInnrimg{
            display: flex;
            margin-bottom: 20px;
            i{
                width: 60px;
                img{
                    width: 60px;
                    height: 60px;
                    border-radius: 50%;
                }
            }
            .clientnameStart{
                width: calc(100% - 60px);
                padding-left: 20px;
                span{
                    font-size: 20px;
                    font-weight: 600;
                    color: var(--color343641);
                    display: inline-block;
                    margin-bottom: 4px;
                }
            }
        }
    }
`
interface clientfeedProps{
    clientimg: string,
    clientname: string,
    clientrate: number,
    clintmsg: string,
}
export default function SingleclientFdbck(props: clientfeedProps) {
  return (
    <SinglewrapcrtFeed>
        <Box className="mainwrap-singlcrtfeed">
            <Box className="top-partInnrimg">
                <i><Image src={props.clientimg} width={60} height={60} alt='userimage'/></i>
                <Box className="clientnameStart">
                    <Typography variant='caption'>{props.clientname}</Typography>
                    <Box className="star-rating">
                        {/* <Image src={props.clientstart} width={108} height={16} alt='starticon'/> */}
                        <Rating value={props.clientrate} sx={{color:'gold'}} precision={0.5}/>
                    </Box>
                </Box>
            </Box>
            <Box className="clientmsg-txt">
                <Typography variant='body1'>{props.clintmsg}</Typography>
            </Box>
        </Box>
    </SinglewrapcrtFeed>
  )
}
