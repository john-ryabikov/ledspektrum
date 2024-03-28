import Wrapper from "../UI/Wrapper"
import Title from "../UI/Title"

export default function SectionSix() {
  return (
    <section className="block-6" id="cash">
        
        <Wrapper>
            <div className="block-6__cont">
                <Title>Оплата и доставка</Title>
                <div className="block-6__info">
                    <p className="block-6__info-title">Оплата:</p>
                    <p className="block-6__info-vars">
                        <span>- Оплата на карту Сбербанка, ВТБ, Россельхоз.</span>
                        <span>- Оплата по счету (физическое лицо/юридическое лицо).</span>
                    </p>
                </div>
                <div className="block-6__info">
                    <p className="block-6__info-title">Доставка:</p>
                    <p className="block-6__info-vars">
                        <span>- Бесплатная доставка по Санкт-Петербургу.</span>
                        <span>- Отправка транспортными компаниями Деловые линии, СДЭК, ПЭК согласно тарифам компаний.</span>
                        <span>- Надежная упаковка.</span>
                        <span>- Самовывоз.</span>
                    </p>
                </div>
            </div>
        </Wrapper>
    </section>
  )
}
