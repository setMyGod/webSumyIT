import React from 'react';

import midle from './midle.module.css'



const Midle = () => {

    return (
        <div>
            <div className={midle.wrap}>
                <h1>Добро пожаловать в SumyWeb!</h1>
                <h2>Почему именно мы?</h2>
                <div className={midle.paragraphs}>
                    <div className={midle.block}><a href={'#'} className={midle.par1}>Наше правило - это максимум практики! <br/>Минимум теории!<br/>  для получения знаний <br/>Методология обучения разработана так,<br/> что бы вы получили максимум знаний <br/> и нашли работу мечты!</a></div>
                    <div className={midle.block}><a href={'#'} className={midle.par1}>Преподаватели - практики! <br/> Все наши преподаватели - действующие разработчки, <br/> тестировщики и дизайнеры <br/>Самые передовые технологии для изучения</a></div>
                    <div className={midle.block}><a href={'#'} className={midle.par1}>Трудоустройство!<br/>Наша школа помогает трудоустроиться <br/>даже по кончанию курса, <br/>а самых успешных и трудолюбивых ждет <br/>практика в реальной IT компании</a></div>
                    <div className={midle.block}><a href={'#'} className={midle.par1}>Менторство и поддержка <br/>Любой вопрос не останется <br/> без внимания, наши менторы помогут разрешить учебные вопросы <br/>даже в не учебное время</a></div>
                </div>
                <div className={midle.bonus}>
                    <h3>Регистрируйся и получи бонус!</h3>
                    <p className={midle.registrationp}>Все зарегестрированные ученики получают бонус <br/> в виде 20% скидки на изучение английского</p>
                    <button className={midle.btn}><span>Регистрация</span></button>

                </div>
            </div>

        </div>
    );
};

export default Midle;