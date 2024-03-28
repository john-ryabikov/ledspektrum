import React, {useState, useEffect} from 'react'
import gsap from 'gsap';

import Wrapper from "../UI/Wrapper"

export default function SectionOne() {

  const [scroll, setScroll] = useState(false)

  useEffect(() => {
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 });
    tl.to(".block-1__arrow", { y: 20 }).to(".block-1__arrow", { y: 3 });
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', function () {
        const scrollPosition = window.scrollY;
        if (scrollPosition > 100) {
            setScroll(true)
        } else {
            setScroll(false)
        }
      });
  }, []) 

  return (
    <section className="block-1">
        <img className="body-fon-1" src="img/Body/section-fon_1.svg" alt="" />
        <Wrapper>
            <div className="block-1__cont">
                <div className="block-1__text">
                    <h1 className="block-1__h">Устройство освещения<br/><span>LEDSPEKTRUM</span></h1>
                    <p className="block-1__sub-text">Профессиональное решение, разборный светодиодный светильник полного спектра модульной конструкции, который легко заменить, что позволяет сэкономить дополнительные расходы на обслуживание.</p>
                </div>
                <img className="block-1__img" src="img/Section-1/light_img.png" alt="Led" />
            </div>
        </Wrapper>
        <img className={!scroll ? "block-1__arrow" : "block-1__arrow block-1__arrow_hide"} src="img/Icons/arrow_down.svg" alt="Вниз" />
    </section>
  )
}
