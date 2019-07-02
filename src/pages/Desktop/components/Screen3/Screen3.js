import React, { Component } from "react";
import { css } from "aphrodite";
import styles from "./styles";
import Emir from "../../../../Videos/Emir.mp4";
export default class Screen3 extends Component {
  render() {
    return (
      <div className={`section ${css(styles.page)}`}>
        <div className={css(styles.centered)}>
          <div className={css(styles.textInfo)}>
            <p className={css(styles.h)}>
              Как мы выбираем
              <br />
              продукты?
            </p>
            <p className={css(styles.t)}>
              Мы знакомимся с поставщиками на городских ярмарках
              <br />и фестивалях еды. Пробуем продукты,
              <br />
              узнаем о производстве и налаживаем сотрудничество.
              <br />
              Магазин "Салем, сосед" представляет производителей
              <br />
              из Казахстана и ближнего зарубежья - России, Киргизии <br />и
              Узбекистана.
              <br />
              <br />
              Мы продолжаем выбирать натуральные, цельные продукты
              <br />и расширять наш ассортимент.
            </p>
          </div>
          <video
            data-autoplay
            autoPlay
            muted
            loop
            playsInline
            className={css(styles.video)}
            id="vid"
          >
            <source src={Emir} type="video/mp4" />
          </video>
        </div>
      </div>
    );
  }
}
