import React, { Component } from "react";
import { css } from "aphrodite";
import styles from "./styles";
import Sammich from "../../../../Videos/Sammich.mp4"
export default class Screen2 extends Component {
  render() {
    return (
      <div className={`section ${css(styles.page)}`}>
        <div className={css(styles.centered)}>
          <div className={css(styles.textInfo)}>
            <p className={css(styles.h)}>Наша миссия</p>
            <p className={css(styles.t)}>
              Команда “Салем, сосед” выступает за вдумчивый выбор
              <br />
              продуктов и поддержку локальных производителей.
              <br />
              <br />
              Мы представляем поставщиков, которые ведут политику
              <br />
              прозрачности и рассказываем о них в социальных сетях
              <br />и на нашем сайте.
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
            <source src={Sammich} type="video/mp4" />
          </video>
        </div>
      </div>
    );
  }
}
