import React, { Component } from "react";
import { css } from "aphrodite";
import styles from "./styles";
import BagMobile from "../../../../Videos/BagMobile.mp4";
export default class Screen6 extends Component {
  render() {
    return (
      <div className={css(styles.page)}>
        <video
          autoPlay
          muted
          loop
          playsInline
          className={css(styles.video)}
          onCanPlayThrough={() => this.props.videosHandler(4)}
        >
          <source src={BagMobile} />
        </video>
        <div className={css(styles.textWrap)}>
          <p className={css(styles.h)}>
            Ищи нас по адресу
            <br />
            проспект Достык 128
            <br />
            ЖК Терренкур
          </p>
          <p className={css(styles.t)}>
            Второй магазин откроется
            <br />
            на Тулебаева, 114А
          </p>
          <p className={css(styles.t)}>
            Онлайн магазин будет готов к<br />
            декабрю.
          </p>
          <a
          target="_blank" rel="noopener noreferrer" 
            href="https://instagram.com/salemsosed"
            className={css(styles.t, styles.tBold)}
          >
            <p>Подпишись на нас в Instagram!</p>
          </a>
          <div className={css(styles.instaWrap)}>
            {this.props.instagram.map(item => {
              return (
                <a target="_blank" rel="noopener noreferrer" href="https://instagram.com/salemsosed" key={item.node.id}>
                  <img src={item.node.thumbnail_src} alt={item.node.id} style={{height: '70px', width: '70px', marginRight: "10px"}}/>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}
