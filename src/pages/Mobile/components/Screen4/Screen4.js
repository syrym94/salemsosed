import React, { Component } from "react";
import { css } from "aphrodite";
import styles from "./styles";
import StrawberryMobile from "../../../../Videos/StrawberryMobile.mp4";
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
          onCanPlayThrough={() => this.props.videosHandler(3)}
        >
          <source src={StrawberryMobile} />
        </video>
        <div className={css(styles.textWrap)}>
          <div className={css(styles.text)}>
            <p className={css(styles.h)}>Почему мы начали</p>
            <p className={css(styles.t)}>
              Небольшие местные производители, которые нам нравятся,
              рассредоточены по всему городу, и мы решили объединить их в одном
              месте. Ностальгируя по культуре соседства, наша команда решила
              возродить ее в атмосфере магазина у дома
            </p>
          </div>
        </div>
      </div>
    );
  }
}
