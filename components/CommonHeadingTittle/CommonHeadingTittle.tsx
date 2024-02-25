import { Typography } from '@mui/material'
import { Box, styled } from '@mui/system'
import React from 'react'
const CommonHeaddngwrap = styled(Box)`
    .title-txtwrapper{
        position: relative;
        max-width: 834px;
        margin: 0 auto;
        text-align: center;
        h2{
            text-transform: capitalize;
            color: var(--color343641);
            margin-bottom: 8px;
        }
        p{
            line-height: 1.8;
        }
        &.whiteTxt{
            h2{
                color: var(--white);
            }
            p{
                color: var(--white);
            }
        }
    }
`
interface headingTxtprops{
    tittletxt: string;
    subTxt: string,
    isWhite?: boolean,
}
export default function CommonHeadingTittle(props: headingTxtprops) {
  return (
    <CommonHeaddngwrap>
        <Box className={props.isWhite ? 'title-txtwrapper whiteTxt': 'title-txtwrapper'}>
            <Typography variant='h2'>{props.tittletxt}</Typography>
            <Typography variant='body1'>{props.subTxt}</Typography>
        </Box>
    </CommonHeaddngwrap>
  )
}
