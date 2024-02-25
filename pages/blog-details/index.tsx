


import Wrapper from "@/layout/wrapper/Wrapper";
import BlogDetails from "@/components/BlogDetails/BlogDetails";
import assest from "@/json/assest";
import RelatedBlog from "@/components/RelatedBlog/RelatedBlog";







export default function index() {
  return (
    <Wrapper>
        <BlogDetails singleblogimg={assest.singleBlogimg} singleBlogtitle={"Blog Title here"} singleblgtxt={"Lorem Ipsum is simply dummy text of the printing and standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen bookLorem Ipsum is simply dummy text of the printing and standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen bookLorem Ipsum is simply dummy text of the printing and standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen bookLorem Ipsum is simply dummy text of the printing and standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen bookstandard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen bookLorem Ipsum is simply dummy text of the printing and standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book"} />
        <RelatedBlog relatedtittl={"Related Blog"} />
    </Wrapper>
  );
}
