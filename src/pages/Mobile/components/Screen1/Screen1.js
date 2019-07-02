import React, { Component } from "react";
import { css } from "aphrodite";
import styles from "./styles";
import BasketMobile from "../../../../Videos/BasketMobile.mp4";
export default class Screen1 extends Component {
  render() {
    return (
      <div className={css(styles.page)}>
        <video
          autoPlay
          muted
          loop
          playsInline
          id="vid"
          className={css(styles.video)}
          onCanPlayThrough={() => this.props.videosHandler(0)}
        >
          <source src={BasketMobile} />
        </video>
        <div className={css(styles.textWrap)}>
          <div className={css(styles.text)}>
            <p className={css(styles.h)}>Салем, сосед</p>
            <p className={css(styles.t)}>
              Мы хотим стать твоим добрым соседом и предложить товары от
              производителей с небольшой линейкой продуктов, которые
              сосредоточены на качестве.
            </p>
          </div>
        </div>
      </div>
    );
  }
}
