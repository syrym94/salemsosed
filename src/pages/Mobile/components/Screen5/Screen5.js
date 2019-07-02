import React, { Component } from "react";
import { css } from "aphrodite";
import styles from "./styles";
import Swiper from "react-id-swiper";
export default class componentName extends Component {
  render() {
      const params ={
        pagination: {
          el: '.swiper-pagination.swiper-pagination-white',
          type: 'bullets',
          clickable: true,
        },
      }
    return (
      <div className={css(styles.page)}>
        <Swiper {...params}>
          <div className={css(styles.swiperSlide)}>
            <p className={css(styles.swiperH)}>Локальность</p>
            <p className={css(styles.swiperT)}>
              Мы отдаем предпочтение местным производителям и хотим заполнить
              пробел между фермерами и городскими жителями. Выбирать то, что
              привычно для жителей нашего региона - самая рациональная и
              полезная диета.
            </p>
          </div>
          <div className={css(styles.swiperSlide)}>
            <p className={css(styles.swiperH)}>Сезонность</p>
            <p className={css(styles.swiperT)}>
              Для наших магазинов мы выбираем сезонные продукты, из которых
              можно получить максимум витаминов и полезных веществ.
            </p>
          </div>
          <div className={css(styles.swiperSlide)}>
            <p className={css(styles.swiperH)}>Культура соседства</p>
            <p className={css(styles.swiperT)}>
              Когда-то мы знали соседей поименно и ходили друг к другу за солью.
              Сегодня мы хотим возродить эту культуру и создали обстановку, в
              которой удобно знакомиться и общаться.
            </p>
          </div>
          <div className={css(styles.swiperSlide)}>
            <p className={css(styles.swiperH)}>Местное предпринимательство</p>
            <p className={css(styles.swiperT)}>
              Мы поддерживаем предпринимателей, благодаря которым появляется
              больше интересных локальных продуктов. Мы стремимся к условиям,
              где развивается конкуренция, растет качество, а здоровое питание
              становится доступнее.
            </p>
          </div>
          <div className={css(styles.swiperSlide)}>
            <p className={css(styles.swiperH)}>Устойчивое развитие</p>
            <p className={css(styles.swiperT)}>
              “Салем, сосед” предлагает натуральные продукты и выступает за
              экологичность. Наша цель - стать частью той системы, когда бизнес
              не вредит окружающей среде и заботится о сотрудниках и
              клиентах.“Салем, сосед” отказывается от пластиковых пакетов и
              принимает батарейки. Мы за экологичный подход к ведению бизнеса, и
              по такому принципу выбираем производителей. Наша команда
              поддерживает события, которые улучшают городскую средуи расширяют
              возможности для начинающих предпринимателей.
            </p>
          </div>
        </Swiper>
      </div>
    );
  }
}
