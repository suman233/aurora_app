import assest from "@/json/assest";
import styled from "@emotion/styled";
import { Box, List, ListItem, Tab, Tabs, Typography } from "@mui/material";
import { Container, Stack } from "@mui/system";
import Image from "next/image";
import React, { useState } from "react";
import { SelectChangeEvent } from "@mui/material/Select";
import CommonHeadingTittle from "../CommonHeadingTittle/CommonHeadingTittle";
import { useQuery } from "react-query";
// import { keywordIDfunc } from "@/api/functions/allfunc";
import { useRouter } from "next/router";
import axiosInstance from "@/api/axiosInstance";
import { endpoints } from "@/api/endpoints";
import { keyfactorfunc, keywordIDfunc } from "@/api/functions/allfunc";
import { TabDaum } from "@/interface/keyfactortabinter";
import { KeyFactorDaum } from "@/interface/keyfactorinter";
import KeyFactors from "../KeyFactors/KeyFactors";

const DemoCardWrapper = styled(Box)`
  padding: 80px 0;
  @media (max-width: 767px) {
    padding: 40px 0;
  }

  background: var(--color51b2e4);
  .section-heading {
    margin-bottom: 40px;
  }
  .left_card {
    width: 45%;
    padding-right: 30px;
    @media (max-width: 890px) {
      width: 100%;
      padding-right: 0;
      width: 100%;
      margin-bottom: 30px;
    }
    ul {
      li {
        display: block;
        margin-bottom: 18px;
        padding-bottom: 20px;
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
        @media (max-width: 479px) {
          margin-bottom: 12px;
          padding-bottom: 12px;
        }
        &:last-child {
          border-bottom: none;
        }
        h2 {
          font-size: 20px;
          font-weight: 400;
          margin-bottom: 0;
          color: var(--white);
          padding-right: 30px;
          position: relative;
          display: flex;
          align-items: center;
          column-gap: 20px;
          @media (max-width: 479px) {
            font-size: 16px;
          }
          &.tab_active {
            margin-bottom: 20px;
          }
        }
        p {
          color: var(--white);
        }
        > * {
          pointer-events: none;
        }
      }
    }
  }
  .rgt_card {
    width: 55%;
    @media (max-width: 890px) {
      width: 100%;
    }
  }

  .MuiTabs-root {
    margin-bottom: 80px;
    @media (max-width: 767px) {
      margin-bottom: 30px;
    }
    min-height: 35px;
    .MuiTabs-flexContainer {
      justify-content: center;
      column-gap: 100px;
      @media (max-width: 767px) {
        column-gap: 20px;
      }
      @media (max-width: 479px) {
        column-gap: 10px;
      }
      button {
        padding: 0;
        min-height: auto;
        color: var(--white);
        font-size: 18px;
        font-weight: 400;
        @media (max-width: 767px) {
          font-size: 16px;
        }
        @media (max-width: 479px) {
          font-size: 12px;
        }
        &:hover {
          background-color: transparent;
        }
      }
    }

    .MuiTabs-indicator {
      background-color: var(--white);
      height: 1px;
    }
  }
`;

// const router=useRouter()

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function DemoCard() {
  const { data: keytable } = useQuery({
    queryKey: ["keyfactorlists"],
    queryFn: keyfactorfunc,
  });

  // const slugID: (string | undefined)[] | undefined= keytable?.map((i: KeyFactorDaum, idx: number) => i?._id)

  // const thd1: string=slugID[0]
  // console.log('id',slugID[0]);

  const [homeId, setHomeId] = useState("");
  console.log("id", homeId);

  const { isLoading, data: keyTableData } = useQuery({
    queryKey: ["details", homeId],
    queryFn: () => keywordIDfunc(`${homeId}`),
  });
  // console.log('sibgle',keyTableData)

  console.log("key tab id", keyTableData);

  const titlevalue = keytable?.map((item, i) => {
    return item.title;
  });
  const [cardIndex, setCardIndex] = useState(0);

  const [value, setValue] = React.useState(0);

  const handleChangeTab = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const keyFactorData = [
    {
      ico: assest.keyIco2,
      heading: "keytab",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy.",
    },
    {
      ico: assest.keyIco2,
      heading: "Keep it simple",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy.",
    },
    {
      ico: assest.keyIco3,
      heading: "Top-tier support",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy.",
    },
    {
      ico: assest.keyIco4,
      heading: "Software You Can Trust",
      para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy.",
    },
  ];

  const imageArray = [
    {
      images: assest.tabImage,
    },
    {
      images: assest.bannerImage,
    },
    {
      images: assest.tabImage,
    },
    {
      images: assest.bannerImage,
    },
  ];

  const handleChange = (event: any) => {
    setCardIndex(event.target.value);
  };
  console.log(cardIndex, "cardIndex");

  return (
    <DemoCardWrapper>
      <Container fixed>
        <Box className="card_wrap">
          <Box className="section-heading">
            <CommonHeadingTittle
              isWhite
              tittletxt={"Key Factors"}
              subTxt={
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"
              }
            />
          </Box>

          <Box sx={{ width: "100%" }}>
            <Box>
              <Tabs
                value={value}
                onChange={handleChangeTab}
                aria-label="basic tabs example"
              >
                {keytable?.map((item, key) => {
                  return (
                    <Tab
                      onClick={() => setHomeId(`${item?._id}`)}
                      label={item?.title}
                    />
                  );
                })}
                {/* <Tab onClick={() => setHomeId(slugID)} label={titlevalue?.[0]} />
                <Tab onClick={() => setHomeId(slugID)} label={titlevalue?.[1]} />
                <Tab onClick={() => setHomeId(slugID)} label={titlevalue?.[2]} /> */}
              </Tabs>
            </Box>
            <div>
              <Stack direction={"row"} flexWrap="wrap">
                <Box className="left_card">
                  <List disablePadding onClick={handleChange}>
                    {keyTableData?.map((data: TabDaum, index: number) => (
                      <ListItem disablePadding value={index}>
                        <Typography
                          variant="h2"
                          className={cardIndex === index ? "tab_active" : ""}
                        >
                          <Typography variant="caption">
                            <Image
                              src={`https://aurora.dedicateddevelopers.us/uploads/home_tab_content/${
                                data.logo as string
                              }`}
                              alt=""
                              width={40}
                              height={40}
                            />
                          </Typography>
                          {data?.title}
                          {/* replace(/(<([^>]+)>)/gi, "") */}
                        </Typography>
                        {cardIndex === index && (
                          <Typography
                            variant="body1"
                            dangerouslySetInnerHTML={{
                              __html: data?.description,
                            }}
                          ></Typography>
                        )}
                      </ListItem>
                    ))}
                  </List>
                </Box>
                <Box className="rgt_card">
                  {imageArray.map((data, index) => (
                    <>
                      {cardIndex === index && (
                        <Box className="card_fig">
                          <Image
                            src={data?.images}
                            alt="image"
                            width={800}
                            height={800}
                          />
                        </Box>
                      )}
                    </>
                  ))}
                </Box>
              </Stack>
            </div>
            {/* <CustomTabPanel value={value} index={1}>
              <Stack direction={"row"} flexWrap='wrap'>
                <Box className="left_card">
                  <List disablePadding onClick={handleChange}>
                    {
                      keyFactorData.map((data, index) => (
                        <ListItem disablePadding value={index}>
                          <Typography
                            variant="h2"
                            className={cardIndex === index ? "tab_active" : ""}
                          >
                            <Typography variant="caption">
                              <Image
                                src={data.ico}
                                alt=""
                                width={40}
                                height={40}
                              />
                            </Typography>
                            {data.heading}
                          </Typography>
                          {cardIndex === index && (
                            <Typography variant="body1">
                              {data.para}
                            </Typography>
                          )}
                        </ListItem>
                      ))
                    }

                  </List>
                </Box>
                <Box className="rgt_card">
                  {imageArray.map((data, index) => (
                    <>
                      {cardIndex === index && (
                        <Box className="card_fig">
                          <Image
                            src={data?.images}
                            alt="image"
                            width={800}
                            height={800}
                          />
                        </Box>
                      )}
                    </>
                  ))}
                </Box>
              </Stack>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
              <Stack direction={"row"} flexWrap='wrap'>
                <Box className="left_card">
                  <List disablePadding onClick={handleChange}>
                    {
                      keyFactorData.map((data, index) => (
                        <ListItem disablePadding value={index}>
                          <Typography
                            variant="h2"
                            className={cardIndex === index ? "tab_active" : ""}
                          >
                            <Typography variant="caption">
                              <Image
                                src={data.ico}
                                alt=""
                                width={40}
                                height={40}
                              />
                            </Typography>
                            {data.heading}
                          </Typography>
                          {cardIndex === index && (
                            <Typography variant="body1">
                              {data.para}
                            </Typography>
                          )}
                        </ListItem>
                      ))
                    }

                  </List>
                </Box>
                <Box className="rgt_card">
                  {imageArray.map((data, index) => (
                    <>
                      {cardIndex === index && (
                        <Box className="card_fig">
                          <Image
                            src={data?.images}
                            alt="image"
                            width={800}
                            height={800}
                          />
                        </Box>
                      )}
                    </>
                  ))}
                </Box>
              </Stack>

            </CustomTabPanel> */}
            <KeyFactors />
          </Box>
        </Box>
      </Container>
    </DemoCardWrapper>
  );
}
