import ClientFeedslider from "@/components/ClientFeedslider/ClientFeedslider";
import CommonfreeTrial from "@/components/CommonfreeTrial/CommonfreeTrial";
import AboutProduct from "@/components/AboutProduct/AboutProduct";
import Banner from "@/components/Banner/Banner";
import KeyFactors from "@/components/KeyFactors/KeyFactors";
import SubHeader from "@/components/SubHeader/SubHeader";
import Wrapper from "@/layout/wrapper/Wrapper";
import FeatureHome from "@/components/FeatureHome/FeatureHome";
import BookLiveDemo from "@/components/BookLiveDemo/BookLiveDemo";
import DemoCard from "@/components/DemoCard/DemoCard";
import { useQuery } from "react-query";
import { keyfactorfunc } from "@/api/functions/allfunc";


export default function Home() {

  return (
    <Wrapper>
      <SubHeader trialDate={"14"}/>
        <Banner/>
        <AboutProduct />
        <KeyFactors />
        <DemoCard /> 
        <FeatureHome/>
        <BookLiveDemo />
        <ClientFeedslider/>
        
    </Wrapper>
  );
}
