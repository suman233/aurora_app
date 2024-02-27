import { BannerHomeRoot } from "@/interface/homeBanner";
import axiosInstance from "../axiosInstance";
import { endpoints } from "../endpoints";
import { RootDemo } from "@/interface/demointerface";
import { keyfactorInt } from "@/interface/keyfactorinter";
import { keytabinter } from "@/interface/keyfactortabinter";
import { ClientRoot, FeedBack } from "@/interface/client.interface";
import { BlogsRoot } from "@/interface/blogs.interface";
import { BlogDetailsRoot } from "@/interface/singleblog.interface";


export const homebannerfunc=async()=>{
    const res=await axiosInstance.get<BannerHomeRoot>(
     endpoints.pageEnd.homepage
    )
    console.log("resp home page",res.data.data);
    return res?.data?.data
    
 }


// const payload={
//     "date"	:"2023-07-31T00:00:00.000Z",
//     "time":	"Time (4:00 pm)",
//     "first_name":"Luca",
//     "last_name":"Modric",
//     "email" :"luca08@yopmail.com",	
//     "phone":"956897589"
// }
 export const demofunc=async()=>{
    const res=await axiosInstance.post<RootDemo>(
        endpoints.pageEnd.demoend,{
            
                date	:"2023-07-31T00:00:00.000Z",
                time:	"Time (4:00 pm)",
                first_name:"Luca",
                last_name:"Modric",
                email :"luca08@yopmail.com",	
                phone:"956897589"   
                
        }
    )

    console.log("demo data",res.data.data);
    return res.data.data
    
 }



 export const keyfactorfunc=async()=>{
    const res=await axiosInstance.get<keyfactorInt>(
        endpoints.pageEnd.keyfactorend
    )

    console.log("keyfactors data",res.data.data);
    return res.data.data
    
 }
 

 export const keywordIDfunc=async(id:string)=>{
    const res=await axiosInstance.get<keytabinter>(
        endpoints.pageEnd.keyfactorIdend(id)
    )

    console.log("key tab",res);
    return res.data.data;
 }

 export const feedbackdetails = async()=>{
    const resp=await axiosInstance.get<ClientRoot>(
        endpoints.feedback
    )
    console.log('client', resp.data.data);
    return resp.data.data;
    
 }

 export const bloglists= async ()=>{
    const resp = await axiosInstance.post<BlogsRoot>(
        endpoints.blogs.allblog
    )
    console.log('allblogs',resp);
    return resp.data.data;
    
 }

 export const singleblogdata= async (id: string)=>{
    const resp = await axiosInstance.get<BlogDetailsRoot>(
        endpoints.blogs.singleblog(id)
    )
    console.log('singleblog',resp.data.data);
    return resp.data.data;
    
 }