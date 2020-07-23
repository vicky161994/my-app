import React, { useState, useEffect, useRef } from 'react'

const About = () => {
    const fullname = {
        color: "red",
        fontSize: "30px"
    }

var name= 'sfdsafs'
var [number, setNumber] = useState(0);

    var [firstName, setFirstname] = useState('initial first');
    var [lastName, setLAstName] = useState('initial last')
    const funcName = () => {}

    const firstNameHandle = (event) => {
        console.log(event.target.value);
        setFirstname(event.target.value)
    }

    const lastNameHandler = (event) => {
        console.log(event.target.value);
        setLAstName(event.target.value)
    }

    const incrementByFive = (event) =>{
        setNumber(number + 5);
    }

    const decrementByFive = (event) =>{
        setNumber(number != 0 ? number -5 : 0)
    }

    
    return (
        <>
            <form>
                <input onChange={firstNameHandle} type="text" placeholder="First name"></input>
                <input onChange={lastNameHandler} type="text" placeholder="Last name"></input>
            </form>
            <h1> name is {firstName} {lastName} </h1>

            <h1 style={{textAlign:"center", fontSize: "40px"}}>{number}</h1>
            <button onClick={incrementByFive}>Increment</button>
            <button onClick={decrementByFive}>Decrement</button>
        </>
    )
}

// Line 1
//Line 2

export default About