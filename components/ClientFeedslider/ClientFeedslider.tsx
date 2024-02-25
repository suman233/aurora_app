import { Box, Container, styled } from "@mui/system";
import React from "react";
import CommonHeadingTittle from "../CommonHeadingTittle/CommonHeadingTittle";
import SingleclientFdbck from "../SingleclientFdbck/SingleclientFdbck";
import assest from "@/json/assest";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useQuery } from "react-query";
import { feedbackdetails } from "@/api/functions/allfunc";
const ClientfeedWrapper = styled(Box)`
  padding: 80px 0;
  @media (max-width: 1199px) {
    padding: 60px 0;
  }
  @media (max-width: 600px) {
    padding: 40px 0;
  }
  .cientfeedback-sec {
    position: relative;
    .clientfed-slider {
      position: relative;
      margin-top: 40px;
      .slick-slider {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        .slick-list {
          margin: 0 -30px;
          .singlewrapslider {
            padding: 0 30px;
          }
        }
        .slick-arrow {
          position: static;
          order: 2;
          transform: inherit;
          border: 1px solid var(--color4B72B2);
          width: 42px;
          height: 42px;
          border-radius: 50%;
          margin: 60px 15px 0;
          &:hover {
            border-color: var(--black);
          }
          &:before {
            display: none;
          }
          &.slick-prev {
            background: url(${assest.sliderarwson}) no-repeat center;
            &:hover {
              background: url(${assest.sliderarwson}) no-repeat center
                var(--black);
            }
          }
          &.slick-next {
            background: url(${assest.sliderarwstw}) no-repeat center;
            &:hover {
              background: url(${assest.sliderarwstw}) no-repeat center
                var(--black);
            }
          }
        }
      }
    }
  }
`;

const sliderSettings = {
  arrows: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  infinite: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
};

export default function ClientFeedslider() {
  const { data } = useQuery({
    queryKey: ["feedbacks"],
    queryFn: feedbackdetails,
  });
  console.log("feed", data);

  return data ? (
    <ClientfeedWrapper>
      <Box className="cientfeedback-sec">
        <Container fixed>
          <CommonHeadingTittle
            tittletxt="Client Feedback"
            subTxt="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
          />
          <Box className="clientfed-slider">
            <Slider {...sliderSettings}>
              {data?.map((item, index) => (
                <Box className="singlewrapslider" key={index}>
                  <SingleclientFdbck
                    clientimg={`https://aurora.dedicateddevelopers.us/uploads/feedback/${
                      item?.image as string
                    }`}
                    clientname={item?.name}
                    clientrate={item?.rating}
                    clintmsg={item.description}
                  />
                </Box>
              ))}
            </Slider>
          </Box>
        </Container>
      </Box>
    </ClientfeedWrapper>
  ) : null;
}
