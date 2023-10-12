import MoreCaseStudies from "@/components/newsAndMediaInetermediate/all-news/case-study";
import ListCaseStudy from "@/components/newsAndMediaInetermediate/all-news/list-case-study";
import Filterednews from "@/components/newsAndMediaInetermediate/all-news/all-news";

import Img1 from "@/components/newsAndMediaInetermediate/all-news/images/NewsImage1.png";
import Img2 from "@/components/newsAndMediaInetermediate/all-news/images/NewsImage2.png";
import Img3 from "@/components/newsAndMediaInetermediate/all-news/images/NewsImage3.png";

const AllNews = () => {
    return (
      <>
      <Filterednews/>
       <MoreCaseStudies 
        data={caseStudyData}
        ContainerEndChildrenProps={{ alignSelf: "flex-start" }}/>
        <ListCaseStudy data={caseStudyDataList}
        ContainerEndChildrenProps={{ alignSelf: "flex-start" }}/>
      </>
    );
  };
  
  export default AllNews;

  const caseStudyData = [
    { 
      btn:"Bajaj Auto",  
      img: Img1,
      tag: "Initiatives",
      title: "Digital Literacy for Youth",
      subTitle:
        "by Times of India  |  19th Mar 2023  |  8 min reads",
      href: "",
    },
    {    
      btn:"Mukand Ltd",   
      img: Img2,
      tag: "General",
      title: "Providing Vocational Training for Women in Maharashtra",
      subTitle:
        "by Times of India  |  19th Mar 2023  |  8 min reads",
      href: "",
    },
    {
      btn:"Mukand Ltd",   
      img: Img3,
      tag: "Awards",
      title: "Jamnalal Bajaj Foundation to distribute 30 awards",
      subTitle:
        "by Times of India  |  19th Mar 2023  |  8 min reads",
      href: "",
    },
    
      {
        btn:"Mukand Ltd", 
        img: Img3,
        tag: "Awards",
        title: "Jamnalal Bajaj Foundation to distribute 30 awards",
        subTitle:
          "by Times of India  |  19th Mar 2023  |  8 min reads",
        href: "",
      },
      {
        btn:"Mukand Ltd",    
        img: Img2,
        tag: "General",
        title: "Providing Vocational Training for Women in Maharashtra",
        subTitle:
          "by Times of India  |  19th Mar 2023  |  8 min reads",
        href: "",
      },
      {
        btn:"Bajaj Auto", 
        img: Img1,
        tag: "Initiatives",
        title: "Digital Literacy for Youth",
        subTitle:
          "by Times of India  |  19th Mar 2023  |  8 min reads",
        href: "",
      },
      {
        btn:"Bajaj Auto", 
        img: Img1,
        tag: "Initiatives",
        title: "Digital Literacy for Youth",
        subTitle:
          "by Times of India  |  19th Mar 2023  |  8 min reads",
        href: "",
      },
      {
        btn:"Mukand Ltd",    
        img: Img2,
        tag: "General",
        title: "Providing Vocational Training for Women in Maharashtra",
        subTitle:
          "by Times of India  |  19th Mar 2023  |  8 min reads",
        href: "",
      },
      {
        btn:"Mukand Ltd", 
        img: Img3,
        tag: "Awards",
        title: "Jamnalal Bajaj Foundation to distribute 30 awards",
        subTitle:
          "by Times of India  |  19th Mar 2023  |  8 min reads",
        href: "",
      },
      
  ];

  const caseStudyDataList = [
    { 
      btn:"Bajaj Auto",  
      img: Img1,
      tag: "Case Study",
      title: "Digital Literacy for Youth",
      subTitle:
        "by Times of India  |  19th Mar 2023  |  8 min reads",
      desc:"Helping students learn digitally in order to keep them future and employment ready. Helping students learn digitally in order to keep them future and employment ready. Helping students learn digitally in order to keep them future and employment ready. Helping students lea.",  
      href: "",
    },
    {
        btn:"Mukand Ltd",   
        img: Img3,
        tag: "Awards",
        title: "Jamnalal Bajaj Foundation to distribute 30 awards",
        subTitle:
          "by Times of India  |  19th Mar 2023  |  8 min reads",
        desc:"Helping students learn digitally in order to keep them future and employment ready. Helping students learn digitally in order to keep them future and employment ready. Helping students learn digitally in order to keep them future and employment ready. Helping students lea.",  
        href: "",
      },
    {    
      btn:"Mukand Ltd",   
      img: Img2,
      tag: "News",
      title: "Providing Vocational Training for Women in Maharashtra",
      subTitle:
        "by Times of India  |  19th Mar 2023  |  8 min reads",
      desc:"A transformative process that aims to provide knowledge, techniques and tools to develop skills and changes in attitudes and behaviours. A transformative process that aims to provide knowledge, techniques and tools to develop skills and changes in attitudes...",  
      href: "",
    },
    { 
        btn:"Bajaj Auto",  
        img: Img1,
        tag: "Case Study",
        title: "Digital Literacy for Youth",
        subTitle:
          "by Times of India  |  19th Mar 2023  |  8 min reads",
        desc:"Helping students learn digitally in order to keep them future and employment ready. Helping students learn digitally in order to keep them future and employment ready. Helping students learn digitally in order to keep them future and employment ready. Helping students lea.",  
        href: "",
      },
      {
          btn:"Mukand Ltd",   
          img: Img3,
          tag: "Awards",
          title: "Jamnalal Bajaj Foundation to distribute 30 awards",
          subTitle:
            "by Times of India  |  19th Mar 2023  |  8 min reads",
          desc:"Helping students learn digitally in order to keep them future and employment ready. Helping students learn digitally in order to keep them future and employment ready. Helping students learn digitally in order to keep them future and employment ready. Helping students lea.",  
          href: "",
        },
      {    
        btn:"Mukand Ltd",   
        img: Img2,
        tag: "News",
        title: "Providing Vocational Training for Women in Maharashtra",
        subTitle:
          "by Times of India  |  19th Mar 2023  |  8 min reads",
        desc:"A transformative process that aims to provide knowledge, techniques and tools to develop skills and changes in attitudes and behaviours. A transformative process that aims to provide knowledge, techniques and tools to develop skills and changes in attitudes...",  
        href: "",
      },
    
      
  ];  
  