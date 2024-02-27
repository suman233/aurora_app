import { Grid, Link, Typography } from "@mui/material";
import { Box, Container, styled } from "@mui/system";
import Image from "next/image";
import React from "react";
import assest from "@/json/assest";
import { useRouter } from "next/router";
import { useQuery } from "react-query";
import { singleblogdata } from "@/api/functions/allfunc";
import { mediaUrl } from "@/api/endpoints";
import { useFormatter } from "next-intl";
import moment from "moment";
import { parseISO, format } from "date-fns";
const BlogdetailsWraper = styled(Box)`
  .blog-detailsWrap {
    position: relative;
    padding: 80px 0;
    @media (max-width: 1199px) {
      padding: 60px 0;
    }
    @media (max-width: 899px) {
      padding: 40px 0;
    }
    .wrapperImg-snglBlog {
      position: relative;
      @media (max-width: 899px) {
        margin-bottom: 15px;
      }
      .blogdate {
        position: absolute;
        top: 17px;
        right: 20px;
        background: var(--colorFDE7D7);
        border-radius: 50px;
        padding: 8px 15px;
        color: var(--colorF68939);
        line-height: 1;
        @media (max-width: 1199px) {
          top: 10px;
          right: 10px;
        }
        span {
          line-height: 1;
          display: inline-block;
          font-size: 16px;
          font-weight: 400;
          @media (max-width: 1199px) {
            font-size: 12px;
          }
        }
      }
      figure {
        margin: 0 0 10px;
        width: 100%;
        img {
          width: 100%;
          border-radius: 10px;
          border: 1px solid rgba(0, 0, 0, 0.2);
        }
      }
    }
    .singleblgTxt {
      position: relative;
      h1 {
        font-size: 30px;
        color: var(--color343641);
        margin-bottom: 25px;
        font-weight: 600;
        @media (max-width: 1199px) {
          font-size: 24px;
          margin-bottom: 15px;
        }
      }
      p {
        color: var(--color343641);
        line-height: 2;
      }
    }
  }
  .latesblog-wrap {
    position: relative;
    .tittle-latestBlog {
      position: relative;
      margin: 0 0 20px;
      h2 {
        font-size: 30px;
        color: var(--color343641);
        font-weight: 600;
        @media (max-width: 1199px) {
          font-size: 24px;
        }
      }
    }
    .singleblogWrp-ltst {
      position: relative;
      .MuiBox-root {
        margin-bottom: 40px;
        &:last-child {
          margin-bottom: 0;
        }
      }
      .singleblogWrap {
        position: relative;
        figure {
          margin-bottom: 6px;
          width: 100%;
          a {
            width: 100%;
            display: inline-block;
            &:hover {
              opacity: 0.8;
            }
          }
          img {
            width: 100%;
            border-radius: 10px;
            border: 1px solid rgba(0, 0, 0, 0.2);
          }
        }
        .blogdate {
          position: absolute;
          top: 12px;
          right: 12px;
          background: var(--colorFDE7D7);
          border-radius: 50px;
          padding: 8px 15px;
          color: var(--colorF68939);
          line-height: 1;
          span {
            line-height: 1;
            display: inline-block;
            font-size: 16px;
            font-weight: 400;
            @media (max-width: 1199px) {
              font-size: 12px;
            }
          }
        }
        .blogtxtwrap {
          position: relative;
          span {
            font-size: 16px;
            font-weight: 400;
            color: var(--color9D9D9D);
            @media (max-width: 1199px) {
              font-size: 14px;
            }
          }
          p {
            font-weight: 700;
            font-size: 20px;
            color: var(--);
            @media (max-width: 1199px) {
              padding-right: 25px;
            }
            a {
              color: var(--color343641);
              display: inline-block;
              text-decoration: none;
              &:hover {
                color: var(--colorF68939);
              }
            }
            @media (max-width: 1199px) {
              font-size: 16px;
            }
          }
          .blogbtnwrap {
            position: absolute;
            right: 10px;
            bottom: 0;
            &:hover {
              opacity: 0.5;
            }
          }
        }
      }
    }
  }
`;
interface singleblogprops {
  singleblogimg: string;
  singleBlogtitle: string;
  singleblgtxt: string;
}

const blogdetails = [
  {
    blogimg: `${assest.bloglistimg3}`,
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
];

type dateProps = {
  dateString: Date;
};
// export default function DateTime ({ dateString }) {
//   const date = parseISO(dateString);
// }

export function DateTime({ dateString }: any) {
  const format = useFormatter();
  const dateTime = new Date(dateString);

  // At 2020-11-20T10:36:00.000Z,
  // this will render "2 hours ago"
  format.relativeTime(dateTime);
}
export default function BlogDetails(props: singleblogprops) {
  const router = useRouter();
  const { slugID } = router.query;

  const { isLoading, data: singledata } = useQuery({
    queryKey: ["blogdetails", slugID],
    queryFn: () => singleblogdata(`${slugID}`),
  });
  const date = moment(singledata?.createdAt).format("MMMM DD YYYY");
  console.log(date);

  return (
    <BlogdetailsWraper>
      <Box className="blog-detailsWrap">
        <Container fixed>
          <Grid container spacing={3}>
            <Grid item xs={12} md={8}>
              <Box className="wrapperImg-snglBlog">
                <Box className="wrapperImg-snglBlog">
                  <figure>
                    <Image
                      src={mediaUrl(`blog/${singledata?.image}`)}
                      width={750}
                      height={470}
                      alt="singleblogimg"
                    />
                  </figure>
                  <Box className="blogdate">
                    <Typography variant="caption">{date}</Typography>
                  </Box>
                </Box>
                <Box className="singleblgTxt">
                  <Typography variant="h1">{singledata?.title}</Typography>
                  <Typography variant="body1">
                    {singledata?.description.replace(/(<([^>]+)>)/gi, "")}
                  </Typography>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <Box className="latesblog-wrap">
                <Box className="tittle-latestBlog">
                  <Typography variant="h2">Latest</Typography>
                </Box>
                <Box className="singleblogWrp-ltst">
                  {singledata?.related_blogs.length===0 ? <Typography textAlign={'center'} variant="h4" sx={{m:4, }}>No data Found</Typography> : singledata?.related_blogs.map((item, index) => (
                    <Box className="singleblogWrap">
                      <figure>
                        <Link href="/blog-details">
                          <Image
                            src={mediaUrl(`blog/${item?.image}`)}
                            width={263}
                            height={198}
                            alt="blogimage"
                          />
                        </Link>
                      </figure>
                      <Box className="blogdate">
                        <Typography variant="caption">{date}</Typography>
                      </Box>
                      <Box className="blogtxtwrap">
                        <Typography variant="caption">
                          {item?.author}
                        </Typography>
                        <Typography variant="body1">
                          <Link href="/blog-details">
                            {item?.title}
                          </Link>
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
                  ))}
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </BlogdetailsWraper>
  );
}
