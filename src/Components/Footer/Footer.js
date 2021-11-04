import React from "react";
import './Footer.css'

export const Footer = (props) => {

    if (props.activeStep > 1) {
        return null
    } else {
        return (
            <div className='Container'>
                <button
                    className='button buttonReset'
                    type="button"
                    onClick={() => props.resetCircles()}
                >
                    Reset
                </button>
                <button
                    className='button buttonNext'
                    type="button"
                    onClick={() => props.changeMainScreen()}
                >
                    Next
                </button>
            </div>
        )
    }


}

