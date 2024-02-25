import Link from "next/link";
import React from "react";
import dynamic from "next/dynamic";
import styles from "@/styles/pages/404.module.scss";
import animationData from "@/json/lottie/404.json";
import CustomButton from "@/ui/Buttons/CustomButton";
import { Box, Typography } from "@mui/material";

const Lottie = dynamic(() => import("lottie-react"));
const Wrapper = dynamic(() => import("@/layout/wrapper/Wrapper"));



const Index = () => (
  <Wrapper>
    <div className={styles.container}>
      <div className={styles.inner}>
        <h1>Page not found</h1>
        <Lottie className="errorPage_image"
          animationData={animationData}
          loop
          style={{
            height: 300,
            width: 300,
          }}
          height={300}
          width={300}
        />
        <Box className="btnwrapperBlog">
            <CustomButton type="button">
                <Typography variant="caption">Back To Home</Typography>
            </CustomButton>
        </Box>
      </div>
    </div>
  </Wrapper>
);

export default Index;
