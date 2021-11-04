import React from "react";
import './Circle.css'

export const Circle = (props) => {

    const stylesCircle = {
        width: props.radius,
        height: props.radius,
    }


    if (props.activeStep === 0 || props.activeStep === 1) {
        return (
            <div
                className='Circle'
                style={stylesCircle}
                onClick={() => props.onCircleClick(props.id )}
            >
                <p className='titleCircle'>{props.title}</p>
            </div>
        )
    } else {
        return (
            <div
                className='Circle'
                style={stylesCircle}
            >
                <p className='titleCircle'>{props.title}</p>
            </div>
        )
    }
}
