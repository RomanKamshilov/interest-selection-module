import React from "react";
import './Header.css'

export const Header = (props) => {


    if (props.activeStep > 1) {
        return (
            <div className='header'>
                <p className='title'>Спасибо за Ваш выбор!</p>
                <p>Мы обязательно учтем Ваши интересы</p>
            </div>
        )
    }
    else {
        return (
            <div className='header'>
                <p className='title'>Расскажите, что Вам нравится?</p>
                <p>Выберите стили музыки, которые Вам нравится, кликнув один раз по кружочкам</p>
            </div>
        )
    }
}

