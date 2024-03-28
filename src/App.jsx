import React, {useLayoutEffect} from 'react'

import Main from "./components/UI/Main"
import Header from "./components/Header/Header"
import SectionOne from "./components/Section-1/SectionOne"
import SectionTwo from "./components/Section-2/SectionTwo"
import SectionThree from "./components/Section-3/SectionThree"
import SectionFour from "./components/Section-4/SectionFour"
import Gallery from "./components/Gallery/Gallery"
import SectionFive from "./components/Section-5/SectionFive"
import SectionSix from "./components/Section-6/SectionSix"
import Footer from "./components/Footer/Footer"

export default function App() {

  useLayoutEffect(() => {
    window.addEventListener("beforeunload", function(){
      this.scrollTo(0, 0)
    })  
  },[])

  return (
    <>
      <Main>
          <Header/>
          <SectionOne/>
          <SectionTwo/>
          <SectionThree/>
          <SectionFour/>
          <Gallery/>
          <SectionFive/>
          <SectionSix/>
          <Footer/>
      </Main>
    </>
  );
}
