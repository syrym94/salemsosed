import React, { Component } from "react";
import { css } from "aphrodite";
import styles from "./styles";
import { arr1, arr2 } from "./arr";
export default class Screen5 extends Component {
  render() {
    return (
      <div className={`section ${css(styles.page)}`}>
        <div className={css(styles.centered)}>
          <div>
            <p className={css(styles.h)}>Наши ценности</p>
            <div className={css(styles.wrap)}>
              <div className={css(styles.wrap1)}>
                {arr1.map((item, i) => {
                  return (
                    <React.Fragment key={i}>
                      <p className={css(styles.head)}>{item.name}</p>
                      <p className={css(styles.text)}>{item.def}</p>
                    </React.Fragment>
                  );
                })}
              </div>
              <div className={css(styles.wrap2)}>
                {arr2.map((item, i) => {
                  return (
                    <React.Fragment key={i}>
                      <p className={css(styles.head)}>{item.name}</p>
                      <p className={`${css(styles.text)}`}>
                        {item.def}
                      </p>
                    </React.Fragment>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
