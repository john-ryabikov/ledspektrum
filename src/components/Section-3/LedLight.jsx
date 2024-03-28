export default function LedLight({light}) {
  return (
    <div className="ledlight">
        <p className="ledlight__title">Модель: <span>{light.title}</span></p>
        <div className="ledlight__info">
            <div className="ledlight__info-props">
                <p className="ledlight__prop-text">Актуальная мощность: <span>{light.prop_1}</span></p>
                <p className="ledlight__prop-text">PPF: <span>{light.prop_2}</span></p>
                <p className="ledlight__prop-text">PPFD: <span>{light.prop_3}</span></p>
                <p className="ledlight__prop-text">Эффективность: <span>{light.prop_4}</span></p>
                <p className="ledlight__prop-text">Диапазон драйвера: <span>{light.volt}</span></p>
                <p className="ledlight__prop-text">Ток -100%: <span>{light.prop_5}</span></p>
                <p className="ledlight__prop-text">Светодиоды: <span>{light.prop_6}</span></p>
                <p className="ledlight__prop-text">Частота: <span>{light.prop_7}</span></p>
                <p className="ledlight__prop-text">Коэффициент мощности: <span>{light.prop_8}</span></p>
                <p className="ledlight__prop-text">Угол освещения: <span>{light.prop_9}</span></p>
                <p className="ledlight__prop-text">Температура окр. среды: <span>{light.prop_10}</span></p>
                <p className="ledlight__prop-text">Вес лампы: <span>{light.prop_11}</span></p>
                <p className="ledlight__prop-text">Вес с упаковкой: <span>{light.prop_12}</span></p>
                <p className="ledlight__prop-text">Размеры: <span>{light.prop_13}</span></p>
                <p className="ledlight__prop-text">СРОК СЛУЖБЫ: <span>{light.prop_14}</span></p>
            </div>
            <div className="ledlight__info-visual">
                <img className="ledlight__img" src={light.img} alt="PCV-6000" />
                <div className="ledlight__price-box">
                    <p className="ledlight__price-text"></p>
                    <div className="ledlight__price-info">
                        {/* <p className="ledlight__price-num"><span>₽</span> {light.price}</p> */}
                        <a className="ledlight__price-btn" href={light.href} rel="noreferrer" target="_blank">
                            <span>Оформить заказ</span>
                            <img src="img/Section-3/btn_icon.svg" alt="Whatsapp" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
