
import React from "react";
import dynamic from "next/dynamic";
import styles from "@/styles/pages/404.module.scss";
import animationData from "@/json/lottie/404.json";
import { checkWindow } from "@/lib/functions/_helpers.lib";
import CustomButton from "@/ui/Buttons/CustomButton";

const Lottie = dynamic(() => import("lottie-react"));
const Wrapper = dynamic(() => import("@/layout/wrapper/Wrapper"));

const Index = () => {
  const reload = () => {
    if (checkWindow()) {
      window.location.reload();
    }
  };
  return (
    <Wrapper>
      <div className={styles.container}>
        <div className={styles.inner}>
          <h1>Something Went wrong</h1>
          <Lottie
            animationData={animationData}
            loop
            style={{
              height: 300,
              width: 300
            }}
            height={300}
            width={300}
          />
          <CustomButton type="button" onClick={reload}>
            <span>Retry</span>
          </CustomButton>
        </div>
      </div>
    </Wrapper>
  );
};

export default Index;
