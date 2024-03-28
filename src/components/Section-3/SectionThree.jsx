import Wrapper from "../UI/Wrapper"
import Title from "../UI/Title"

import LedLights from './LedLights'

export default function SectionThree() {
  return (
    <section className="block-3" id="tech">
        <img className="body-fon-2" src="img/Body/section-fon_2.svg" alt="" />
        <Wrapper>
            <div className="block-3__cont">
                <Title>Технические характеристики</Title>
                <LedLights/>
            </div>
        </Wrapper>
    </section>
  )
}
