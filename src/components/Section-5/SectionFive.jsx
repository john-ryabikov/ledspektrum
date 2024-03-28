import Wrapper from "../UI/Wrapper"
import Title from "../UI/Title"

export default function SectionFive() {
  return (
    <section className="block-5" id="install">
        <img className="body-fon-3" src="img/Body/section-fon_3.svg" alt="" />
        <Wrapper>
            <div className="block-5__cont">
                <Title>Список деталей</Title>
                <div className="block-5__info-1">
                    <p className="block-5__info-1-list">
                        <span className="block-5__list-pos">1. Блок питания</span>
                        <span className="block-5__list-pos">2. Полный спектр + 660 нм полоса</span>
                        <span className="block-5__list-pos">3. Кабель питания</span>
                        <span className="block-5__list-pos">4. Удлинитель с разъемом RJ-11</span>
                        <span className="block-5__list-pos">5. Тросс-подвеска (4 шт.)</span>
                    </p>
                    <img className="block-5__info-1-img" src="img/Section-5/details_box.png" alt="Детали" />
                </div>
                <Title>Простая установка</Title>
                <div className="block-5__info-2">
                    <p className="block-5__info-2-title">
                        <span>1</span>
                        Подвесьте светополосу к блоку питания и выровняйте выходной провод.
                    </p>
                    <img className="block-5__info-2-img-1" src="img/Section-5/sborka-1.png" alt="Сборка1" />
                    <div className="block-5__info-2-row">
                        <div className="block-5__info-2-rowpart">
                            <p className="block-5__info-2-title">
                                <span>2</span>
                                Подсоедините карабины к четырем<br/>отверстиям на краю блока питания
                            </p>
                            <img className="block-5__info-2-img-1" src="img/Section-5/sborka-2.png" alt="Сборка2" />
                        </div>
                        <div className="block-5__info-2-rowpart">
                            <p className="block-5__info-2-title">
                                <span>3</span>
                                Подвесьте лампу на тент, а затем<br/>отрегулируйте подходящую высоту
                            </p>
                            <img className="block-5__info-2-img-1" src="img/Section-5/sborka-3.png" alt="Сборка3" />    
                        </div>
                    </div>
                </div>
                <div className="block-5__pdf-file">
                    <p className="block-5__pdf-title">Полная инструкция по установке:</p>
                    <a className="block-5__pdf-btn" href="blanks/Инструкция лампы LEDSPECTRUM.pdf" rel="noreferrer" target="_blank">
                        <img className="block-5__pdf-icon" src="img/Icons/pdf_icon.svg" alt="PDF" />
                        <span>Руководство по установке светодиодного<br/>светильника LEDSPEKTRUM</span>
                    </a>
                </div>
            </div>
        </Wrapper>
    </section>
  )
}
