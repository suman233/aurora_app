


import Wrapper from "@/layout/wrapper/Wrapper";
import SigninWrapper from "@/components/SigninWrapper/SigninWrapper";
import React from "react";
import SignInStepOne from "@/components/SigninWrapper/SignInStepOne";
import SignInStepTwo from "@/components/SigninWrapper/SignInStepTwo";







export default function index() {
    const [step, setStep]=React.useState(1);
    const stepIncr =()=>{
        setStep(step+1);
    }
  return (
    <Wrapper>
        <SigninWrapper>
            {
                step===1?
                <SignInStepOne onHandleIncr={stepIncr}/>
                : step===2?
                <SignInStepTwo/>
                : null
            }
        </SigninWrapper>
    </Wrapper>
  );
}
