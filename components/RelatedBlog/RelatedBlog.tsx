import assest from '@/json/assest'
import { Link, Typography } from '@mui/material'
import { Box, Container, styled } from '@mui/system'
import React from 'react'

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Image from 'next/image'
const RelatedBlogwrap = styled(Box)`
    .relatedBlog-wrap{
        position: relative;
        padding: 80px 0;
        background: rgba(81, 178, 228, 0.10);
        @media(max-width: 1199px){
            padding: 60px 0;
        }
        @media(max-width: 900px){
            padding: 40px 0;
        }
        .relatedBlog-tittle{
            position: relative;
            margin-bottom: 30px;
            h2{
                font-size: 40px;
                @media(max-width: 900px){
                    font-size: 24px;
                }
            }
        }
        .related-blogslider{
            .slick-slider{
                justify-content: flex-end;
                display: flex;
                flex-wrap: wrap;
                .slick-list{
                    margin: 0 -15px;
                    order: 2;
                    .slick-slide{
                        padding: 0 15px;
                    }
                }
                .slick-arrow{
                    position: static;
                    transform: inherit;
                    order: 1;
                    border: 1px solid var(--color4B72B2);
                    width: 42px;
                    height: 42px;
                    border-radius: 50%;
                    margin: -70px 0 0;
                    @media(max-width: 900px){
                        width: 30px;
                        height: 30px;
                        margin: -55px 0 0;
                    }
                    &:hover{
                        border-color: var(--black);
                    }
                    &:before{
                        display: none;
                    }
                    &.slick-prev{
                        background: url(${assest.sliderarwson}) no-repeat center;
                        margin-right: 30px;
                        @media(max-width: 900px){
                            margin-right: 10px;
                        }
                        &:hover{
                            background: url(${assest.sliderarwson}) no-repeat center var(--black);
                        }
                    }
                    &.slick-next{
                        background: url(${assest.sliderarwstw}) no-repeat center;
                        &:hover{
                            background: url(${assest.sliderarwstw}) no-repeat center var(--black);
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
            }
        }
    }
`

const sliderSettings = {
    arrows: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    infinite: true,
    autoplay: true,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          }
        },
        {
            breakpoint: 900,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
            }
          },
    ]
  }

  const blogdetails = [
    {
        blogimg: `${assest.bloglistimg1}`,
        blogauthr: "By: Jhon Morrison",
        blogtittle: "Lorem ipsum is dummy text",
        blogbtn: `${assest.blogawrsicn}`,
    },
    {
        blogimg: `${assest.bloglistimg2}`,
        blogauthr: "By: Jhon Morrison",
        blogtittle: "Lorem ipsum is dummy text",
        blogbtn: `${assest.blogawrsicn}`,
    },
    {
        blogimg: `${assest.bloglistimg3}`,
        blogauthr: "By: Jhon Morrison",
        blogtittle: "Lorem ipsum is dummy text",
        blogbtn: `${assest.blogawrsicn}`,
    },
    {
        blogimg: `${assest.bloglistimg4}`,
        blogauthr: "By: Jhon Morrison",
        blogtittle: "Lorem ipsum is dummy text",
        blogbtn: `${assest.blogawrsicn}`,
    },
    {
        blogimg: `${assest.bloglistimg1}`,
        blogauthr: "By: Jhon Morrison",
        blogtittle: "Lorem ipsum is dummy text",
        blogbtn: `${assest.blogawrsicn}`,
    },
]

interface relatedBlogprops{
    relatedtittl: string,
}
export default function RelatedBlog(props: relatedBlogprops) {
  return (
    
    <RelatedBlogwrap>
        {/* singledata ? (
    <RelatedBlogwrap>
      <Box className="relatedBlog-wrap">
        <Container fixed>
          <Box className="relatedBlog-tittle">
            <Typography variant="h2">{props.relatedtittl}</Typography>
          </Box>
          <Box className="related-blogslider">
            <Slider {...sliderSettings}>
              {singledata?.related_blogs?.map((item, index) => (
                <Box className="singlewrapslider">
                  <Box className="singleblogWrap">
                    <figure>
                      <Link href="/blog-details">
                        <Image
                          src={item.image}
                          width={263}
                          height={198}
                          alt="blogimage"
                        />
                      </Link>
                    </figure>
                    <Box className="blogtxtwrap">
                      <Typography variant="caption">
                        {item.author}
                      </Typography>
                      <Typography variant="body1">
                        <Link href="/blog-details">{item.title}</Link>
                      </Typography>
                      <Link className="blogbtnwrap" href="/blog-details">
                        <Image
                          src={assest.blogawrsicn}
                          width={18}
                          height={9}
                          alt="bloglink-image"
                        />
                      </Link>
                    </Box>
                  </Box>
                </Box>
              ))}
            </Slider>
          </Box>
        </Container>
      </Box>
    </RelatedBlogwrap>
    ) : <Typography textAlign={'center'} variant="h2">No Related Blog Found</Typography>
  ) */}
        <Box className="relatedBlog-wrap">
            <Container fixed>
                <Box className="relatedBlog-tittle">
                    <Typography variant='h2'>{props.relatedtittl}</Typography>
                </Box>
                <Box className="related-blogslider">
                    <Slider {...sliderSettings}>
                        {blogdetails.map((item, index) => (
                            <Box className="singlewrapslider">
                                <Box className="singleblogWrap">
                                    <figure>
                                        <Link href='/blog-details'>
                                            <Image src={item.blogimg} width={263} height={198} alt='blogimage' />
                                        </Link>
                                    </figure>
                                    <Box className="blogtxtwrap">
                                        <Typography variant='caption'>{item.blogauthr}</Typography>
                                        <Typography variant='body1'>
                                            <Link href='/blog-details'>{item.blogtittle}</Link>
                                        </Typography>
                                        <Link className="blogbtnwrap" href='/blog-details'><Image src={item.blogbtn} width={18} height={9} alt='bloglink-image' /></Link>
                                    </Box>
                                </Box>
                            </Box>
                        ))}
                    
                    </Slider>
                </Box>
            </Container>
        </Box>
    </RelatedBlogwrap>
  )
}

