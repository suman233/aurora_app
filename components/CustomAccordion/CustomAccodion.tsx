import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box } from '@mui/system';
import styled from '@emotion/styled';


const CustomAccordionWrap = styled(Box)`
    .MuiAccordion-root{
        border: 1px solid rgba(0,0,0,.10);
        background-color: var(--white);
        box-shadow: none;
        transition: all .3s ease-in-out 0s;
        border-radius: 10px;
        margin-bottom: 10px;
        padding: 30px;
        &.Mui-expanded{
            box-shadow: 0px 0px 25px 0px rgba(0, 0, 0, 0.15);
            margin-bottom: 20px;
        }
        &:before{
            display: none;
        }
        .MuiButtonBase-root{
            padding: 0;
            min-height: auto;
            .MuiAccordionSummary-content{
                margin: 0;
                h3{
                    font-weight: 600;
                    font-size: 20px;
                    color: var(--color343641);
                    text-transform: none;
                    @media(max-width: 479px){
                      font-size: 15px;
                    }
                }

                
            }
            .MuiSvgIcon-root{
                  width: 30px;
                  height: 30px;
                }
            @media(max-width: 479px){
              padding: 0;    
            }  
        }

        .MuiAccordionDetails-root{
            padding: 30px 0 0 0;
            @media(max-width: 479px){
              padding: 30px 0 0;
            }
            p{
                color: var(--color483a3a);
                @media(max-width: 479px){
                  font-size: 14px;
                }
            }
        }
        @media(max-width: 479px){
            padding: 15px;    
        }  
    }
`

interface customAccorionProps{
    data: any[]
}

interface subProps{
    heading: string,
    content: string,
    panelNo: string
}

export default function CustomAccordions(props: customAccorionProps) {
  const {data} = props;
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setExpanded(isExpanded ? panel : false);
    };

  return (
    <CustomAccordionWrap>
        {
            data.map((singleData: subProps)=> (
                <Accordion expanded={expanded === singleData.panelNo} onChange={handleChange(singleData.panelNo)}>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls= {`${singleData.panelNo}-content`}
                  id={`${singleData.panelNo}-header`}
                >
                  <Typography variant='h3'>
                    {singleData.heading}
                  </Typography>
                  
                </AccordionSummary>
                <AccordionDetails>
                  <Typography variant='body1'>
                    {singleData.content}
                  </Typography>
                </AccordionDetails>
              </Accordion>
            ))
        }
      
      
    </CustomAccordionWrap>
  );
}