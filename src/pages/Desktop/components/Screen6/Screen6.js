import React, { Component } from "react";
import { css } from "aphrodite";
import styles from "./styles";
import Bag from '../../../../Videos/Bag.mp4'
export default class Screen6 extends Component {
  render() {
    return (
      <div className={`section ${css(styles.page)}`}>
        <div className={css(styles.centered, styles.centeredSmall)}>
          <div className={css(styles.textInfo, styles.textInfoSmall)}>
            <p className={css(styles.h, styles.hSmall)}>
              Ищи нас по адресу
              <br />
              <br />
              проспект Достык 128
              <br />
              ЖК Терренкур.
            </p>
            <div className={css(styles.wrap, styles.wrapSmall)}>
              <p className={css(styles.h,styles.hSmall)}>
              Тулебаева, 114А{" "}
              </p>
              <a target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/salemsosed/" className={css(styles.t3)}>Подпишись на нас в Instagram!</a>
            </div>
          </div>
          <div className={css(styles.instafeed, styles.instafeedSmall)}>
				{this.props.instagram.slice(0,4).map((item, index)=>{
					return(
            <a key={index} target="_blank" rel="noopener noreferrer" href="https://www.instagram.com/salemsosed/">
						<img src={item.thumbnail.url} key={index}/>
          </a>
					)
				})}
          </div>
          <video
            data-autoplay
            autoPlay
            muted
            loop
            playsInline
            className={css(styles.video)}
            id="vid_last"
          >
            <source src={Bag} type="video/mp4" />
          </video>
        </div>
      </div>
    );
  }
}