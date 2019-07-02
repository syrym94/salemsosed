import React, { Component } from "react";
import { css } from "aphrodite";
import styles from "./styles";
import Basket from "../../../../Videos/Basket.mp4";
export default class Screen1 extends Component {
  render() {
    return (
      <div className={`section ${css(styles.page)}`}>
        <div className={css(styles.centered)}>
          <div className={css(styles.textInfo)}>
            <p className={css(styles.h)}>Салем, Сосед! </p>
            <p className={css(styles.t)}>
              Мы хотим стать твоим добрым соседом и<br />
              предложить товары от производителей
              <br />с небольшой линейкой продуктов, которые
              <br />
              сосредоточены на качестве.
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
            <source src={Basket} type="video/mp4" />
          </video>
        </div>
      </div>
    );
  }
}
