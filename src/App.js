import './App.css';
import {Footer} from "./Components/Footer/Footer";
import {Header} from "./Components/Header/Header";
import {Main} from "./Components/Main/Main";
import data from './circles.json'
import React, {useState} from "react";

function App() {
    const [activeStep, setActiveStep] = useState(0)

    let [selectedCircles, setSelectedCircles] = useState([])

    const [chooseCircles, setChooseCircles] = useState([])

    //функция для создания массива выбирающихся кругов
    const onCircleClickHandler = (circleId) => {

        let index = selectedCircles.indexOf(circleId)

        if (~index) {
            selectedCircles.splice(index, 1)
        } else {
            selectedCircles.push(circleId)
        }
        console.log(selectedCircles)
    }

    //функция для следующего шага
    const onCLickScreenHandler = () => {
      setActiveStep(activeStep + 1)
    }

    //создание массива выбранных шаров, который будет показываться в конце

    const firstStep = data.firstStep
    const secondStep = data.secondStep

    for (let i=0; i <= selectedCircles.length - 1; i++) {
        for (let j = 0; j <= firstStep.length -1 ; j++) {
            if (selectedCircles[i] === firstStep[j].id) {
                chooseCircles.push(firstStep[j])
            }
        }

        for (let k = 0; k <= secondStep.length -1 ; k++) {
            if (selectedCircles[i] === secondStep[k].id) {
                chooseCircles.push(secondStep[k])
            }
        }
    }

    //удаляем повторяющиеся шары
    const uniqueArray = chooseCircles.filter((item, pos) => {
        return chooseCircles.indexOf(item) === pos;
    })


    //сбрасываем выделенные круги
    const onClickResetHandler = () => {
        setSelectedCircles(selectedCircles = [])
        console.log(selectedCircles)
    }

    return (
    <div className="App">
        <div className='wrapper'>
            <Header
                activeStep={activeStep}
            />
            <Main
                activeStep={activeStep}
                selectedCircles={selectedCircles}
                chooseCircles={uniqueArray}
                onCircleClickHandler={onCircleClickHandler}
            />
            <Footer
                activeStep={activeStep}
                resetCircles={onClickResetHandler}
                changeMainScreen={onCLickScreenHandler}
            />
        </div>
    </div>
    );
}

export default App;
