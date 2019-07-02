import React, { Component } from "react";
import { css } from "aphrodite";
import styles from "./styles";
import Emir from "../../../../Videos/Emir.mp4";
export default class Screen1 extends Component {
  render() {
    return (
      <div className={css(styles.page)}>
        <video
          autoPlay
          muted
          loop
          playsInline
          className={css(styles.video)}
          onCanPlayThrough={() => this.props.videosHandler(2)}
        >
          <source src={Emir} />
        </video>
        <div className={css(styles.textWrap)}>
          <div className={css(styles.text)}>
            <p className={css(styles.h)}>Как мы выбираем продукты?</p>
            <p className={css(styles.t)}>
              Мы знакомимся с поставщиками на городских ярмарках и фестивалях
              еды. Пробуем продукты, узнаем о производстве и налаживаем
              сотрудничество. Магазин “Салем, сосед» представляет производителей
              из Казахстана и ближнего зарубежья - России, Киргизии и
              Узбекистана. Мы продолжаем выбирать натуральные, цельные продукты
              и расширять наш ассортимент.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
