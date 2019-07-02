import React, { Component } from "react";
import { css } from "aphrodite";
import styles from "./styles";
import SammichMobile from "../../../../Videos/SammichMobile.mp4";
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
          onCanPlayThrough={() => this.props.videosHandler(1)}
        >
          <source src={SammichMobile} />
        </video>
        <div className={css(styles.textWrap)}>
          <div className={css(styles.text)}>
            <p className={css(styles.h)}>Наша миссия</p>
            <p className={css(styles.t)}>
              Команда “Салем, сосед” выступает за вдумчивый выбор продуктов и
              поддержку локальных производителей. Мы представляем поставщиков,
              которые ведут политику прозрачности и рассказываем о них в
              социальных сетях и на нашем сайте.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
