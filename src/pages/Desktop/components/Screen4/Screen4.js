import React, { Component } from "react";
import { css } from "aphrodite";
import styles from "./styles";
import Strawberry from '../../../../Videos/Strawberry.mp4'
export default class Screen4 extends Component {
  render() {
    return (
      <div className={`section ${css(styles.page)}`}>
        <div className={css(styles.centered)}>
          <div className={css(styles.textInfo)}>
            <p className={css(styles.h)}>
              Почему
              <br />
              мы начали
            </p>
            <p className={css(styles.t)}>
              Небольшие местные производители, которые нам нравятся,
              <br />
              рассредоточены по всему городу, и мы решили объединить
              <br />
              их в одном месте.
              <br />
              <br />
              Ностальгируя по культуре соседства, наша команда решила
              <br />
              возродить ее в атмосфере магазина у дома
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
            <source src={Strawberry} type="video/mp4" />
          </video>
        </div>
      </div>
    );
  }
}
