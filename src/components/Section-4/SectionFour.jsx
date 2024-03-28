import Wrapper from "../UI/Wrapper"
import Title from "../UI/Title"

export default function SectionFour() {
  return (
    <section className="block-4">
        <Wrapper>
            <div className="block-4__cont">
                <Title>Полный спектр</Title>
                <p className="block-4__info">Лампа полного спектра для растений использует полный спектр эффективной длины волны фотосинтеза 400-780 нм. Синий свет (400-520 нм) способствует усвоению хлорофилла и каротиноидов и подавляет рост длинноногих растений. Красный свет (610-720 нм) является основной движущей силой фотосинтеза и оказывает значительное влияние на фотопериод и период цветения. Зеленый свет (520-610 нм) сочетается с красным и синим светом для координации роста и развития растений, уменьшая визуальное световое загрязнение.<br/><br/></p>
                <p className="block-4__info-2">+UV – ультрафиолет. Увеличивает выработку терпенов.<br/>+ IR – инфракрасный свет.Увеличивает фотосинтез примерно на 30%.</p>
                <img className="block-4__img-1" src="img/Section-4/block-4_img-1.png" alt="Image1" />
                <div className="block-4__imgs">
                    <img className="block-4__img-2" src="img/Section-4/block-4_img-2.png" alt="Image2" />
                    <img className="block-4__img-3" src="img/Section-4/block-4_img-3.svg" alt="Image3" />
                </div>
                
            </div>
        </Wrapper>
    </section>
  )
}
