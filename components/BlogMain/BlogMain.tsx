import assest from '@/json/assest'
import CustomButton from '@/ui/Buttons/CustomButton'
import { Grid, Typography } from '@mui/material'
import { Box, Container, styled } from '@mui/system'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BlogmainWraper = styled(Box)`
    .main-blogWrap{
        position: relative;
        padding: 55px 0 100px;
        @media(max-width: 1199px){
            padding: 60px 0
        }
        @media(max-width: 600px){
            padding: 40px 0
        }
        .blog-tittleWrap{
            text-align: center;
            margin-bottom: 47px;
            @media(max-width: 1199px){
                margin-bottom: 30px;
            }
            @media(max-width: 600px){
                margin-bottom: 20px;
            }
            h1{
                font-size: 40px;
                @media(max-width: 1199px){
                    font-size: 30px;
                }
                @media(max-width: 600px){
                    font-size: 24px;
                }
            }
        }
        .singleblogWrap{
            position: relative;
            figure{
                margin-bottom: 6px;
                width: 100%;
                a{
                    width: 100%;
                    display: inline-block;
                    &:hover{
                        opacity: 0.8;
                    }
                }
                img{
                    width: 100%;
                    border-radius: 10px;
                    border: 1px solid rgba(0, 0, 0, 0.20);
                }
            }
            .blogdate{
                position: absolute;
                top: 12px;
                right: 12px;
                background: var(--colorFDE7D7);
                border-radius: 50px;
                padding: 8px 15px;
                color: var(--colorF68939);
                line-height: 1;
                span{
                    line-height: 1;
                    display: inline-block;
                    font-size: 16px;
                    font-weight: 400;
                    @media(max-width: 1199px){
                        font-size: 12px;
                    }
                }
            }
            .blogtxtwrap{
                position: relative;
                span{
                    font-size: 16px;
                    font-weight: 400;
                    color: var(--color9D9D9D);
                    @media(max-width: 1199px){
                        font-size: 14px;
                    }
                }
                p{
                    font-weight: 700;
                    font-size: 20px;
                    color: var(--);
                    @media(max-width: 1199px){
                        padding-right: 25px;
                    }
                    a{
                        color: var(--color343641);
                        display: inline-block;
                        text-decoration: none;
                        &:hover{
                            color: var(--colorF68939);
                        }
                    }
                    @media(max-width: 1199px){
                        font-size: 16px;
                    }
                }
                .blogbtnwrap{
                    position: absolute;
                    right: 10px;
                    bottom: 0;
                    &:hover{
                        opacity: 0.5;
                    }
                }
            }
        }
        .btnwrapperBlog{
            position: relative;
            margin-top: 80px;
            text-align: center;
            @media(max-width: 1199px){
                margin-top: 40px;
            }
            button{
                min-width: 139px;
            }
        }
    }
`
interface blogwraprops{
    headingTittle: string,
}

const blogdetails = [
    {
        blogimg: `${assest.bloglistimg1}`,
        blogdate: "9 Oct, 2022",
        blogauthr: "By: Jhon Morrison",
        blogtittle: "Lorem ipsum is dummy text",
        blogbtn: `${assest.blogawrsicn}`,
    },
    {
        blogimg: `${assest.bloglistimg2}`,
        blogdate: "9 Oct, 2022",
        blogauthr: "By: Jhon Morrison",
        blogtittle: "Lorem ipsum is dummy text",
        blogbtn: `${assest.blogawrsicn}`,
    },
    {
        blogimg: `${assest.bloglistimg3}`,
        blogdate: "9 Oct, 2022",
        blogauthr: "By: Jhon Morrison",
        blogtittle: "Lorem ipsum is dummy text",
        blogbtn: `${assest.blogawrsicn}`,
    },
    {
        blogimg: `${assest.bloglistimg4}`,
        blogdate: "9 Oct, 2022",
        blogauthr: "By: Jhon Morrison",
        blogtittle: "Lorem ipsum is dummy text",
        blogbtn: `${assest.blogawrsicn}`,
    },
    {
        blogimg: `${assest.bloglistimg1}`,
        blogdate: "9 Oct, 2022",
        blogauthr: "By: Jhon Morrison",
        blogtittle: "Lorem ipsum is dummy text",
        blogbtn: `${assest.blogawrsicn}`,
    },
    {
        blogimg: `${assest.bloglistimg2}`,
        blogdate: "9 Oct, 2022",
        blogauthr: "By: Jhon Morrison",
        blogtittle: "Lorem ipsum is dummy text",
        blogbtn: `${assest.blogawrsicn}`,
    },
    {
        blogimg: `${assest.bloglistimg3}`,
        blogdate: "9 Oct, 2022",
        blogauthr: "By: Jhon Morrison",
        blogtittle: "Lorem ipsum is dummy text",
        blogbtn: `${assest.blogawrsicn}`,
    },
    {
        blogimg: `${assest.bloglistimg4}`,
        blogdate: "9 Oct, 2022",
        blogauthr: "By: Jhon Morrison",
        blogtittle: "Lorem ipsum is dummy text",
        blogbtn: `${assest.blogawrsicn}`,
    },
    {
        blogimg: `${assest.bloglistimg1}`,
        blogdate: "9 Oct, 2022",
        blogauthr: "By: Jhon Morrison",
        blogtittle: "Lorem ipsum is dummy text",
        blogbtn: `${assest.blogawrsicn}`,
    },
    {
        blogimg: `${assest.bloglistimg2}`,
        blogdate: "9 Oct, 2022",
        blogauthr: "By: Jhon Morrison",
        blogtittle: "Lorem ipsum is dummy text",
        blogbtn: `${assest.blogawrsicn}`,
    },
    {
        blogimg: `${assest.bloglistimg3}`,
        blogdate: "9 Oct, 2022",
        blogauthr: "By: Jhon Morrison",
        blogtittle: "Lorem ipsum is dummy text",
        blogbtn: `${assest.blogawrsicn}`,
    },
    {
        blogimg: `${assest.bloglistimg4}`,
        blogdate: "9 Oct, 2022",
        blogauthr: "By: Jhon Morrison",
        blogtittle: "Lorem ipsum is dummy text",
        blogbtn: `${assest.blogawrsicn}`,
    },
]
export default function BlogMain(props: blogwraprops) {
  return (
    <BlogmainWraper>
        <Box className="main-blogWrap">
            <Container fixed>
                <Box className="blog-tittleWrap">
                    <Typography variant='h1'>{props.headingTittle}</Typography>
                </Box>
                <Box className="mainblog-listwrap">
                    <Grid container spacing={{ xs: 3, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {blogdetails.map((item, index) => (
                            <Grid item xs={8} sm={4} md={3} key={index}>
                                <Box className="singleblogWrap">
                                    <figure>
                                        <Link href='/blog-details'>
                                        <Image src={item.blogimg} width={263} height={198} alt='blogimage'/>
                                        </Link>
                                    </figure>
                                    <Box className="blogdate">
                                        <Typography variant='caption'>{item.blogdate}</Typography>
                                    </Box>
                                    <Box className="blogtxtwrap">
                                        <Typography variant='caption'>{item.blogauthr}</Typography>
                                        <Typography variant='body1'>
                                            <Link href='/blog-details'>{item.blogtittle}</Link>
                                        </Typography>
                                        <Link className="blogbtnwrap" href='/blog-details'><Image src={item.blogbtn} width={18} height={9} alt='bloglink-image'/></Link>
                                    </Box>
                                </Box>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
                <Box className="btnwrapperBlog">
                    <CustomButton type="button">
                        <Typography variant="caption">Load More</Typography>
                    </CustomButton>
                </Box>
            </Container>
        </Box>
    </BlogmainWraper>
  )
}
