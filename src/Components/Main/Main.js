import React from "react";
import './Main.css'
import data from '../../circles.json'
import {Circle} from "../Circle/Circle";

export const Main = (props) => {

    let mainCircles = []

    // Создание массива кругов в зависимости от шага (activeStep)
    if (props.activeStep === 0) {
        mainCircles = data.firstStep.map((circle, index) => {
            return (
                <Circle
                    key={index}
                    id={circle.id}
                    title={circle.title}
                    radius={circle.size}
                    onCircleClick={props.onCircleClickHandler}
                    activeStep={props.activeStep}
                    selectedCircle={props.selectedCircles}
                />
            )
        })
    } else if (props.activeStep === 1) {
         mainCircles = data.secondStep.map((circle, index) => {
            return (
                <Circle
                    key={index}
                    id={circle.id}
                    title={circle.title}
                    radius={circle.size}
                    onCircleClick={props.onCircleClickHandler}
                    activeStep={props.activeStep}
                    selectedCircle={props.selectedCircles}
                />
            )
        })
    } else {
        mainCircles = props.chooseCircles.map((circle, index) => {
            return (
                <Circle
                    key={index}
                    title={circle.title}
                    radius={circle.size}
                    activeStep={props.activeStep}
                />
            )
        })
    }

    return (
        <div className='circles'>
            {mainCircles}
        </div>
    )
}
