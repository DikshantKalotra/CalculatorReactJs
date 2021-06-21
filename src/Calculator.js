import React, {useState} from 'react'
import { OutputScreen } from './OutputScreen'
import { Button } from './Button'
import { Footer } from './Footer'
import { Title } from './Title'

export const Calculator = () => {
    const [text, setText] = useState({input : '', output : ''})

    function calculate(event) {
        const value = event.target.value;
        switch(value){
            case '=': {
                let res='';
                if(text.input !== ''){
                    try{ 
                        res = eval(text.input);
                    }
                    catch(err){
                        setText({output: 'Mathematical Error'})
                    }
                    if( res === undefined){
                        setText({output: 'Mathematical Error'})
                    }
                    else{
                        setText({output: res, input:''})
                    }
                    break;
                }
            }
            case "B" : {
                let input = text.input.toString()
                input = input.substr(0, input.length-1)
                setText({input: input})
                break
            }
            case 'C' : {
                setText({input: '', output: ''})
                break
            }
            default : {
                setText({input: text.input += value})
                break
            }
        }
    }
    
    return (
        <div className="layer">
            <Title/>
            <div className="calculator">
                <OutputScreen text={text}/>
                <div className="buttons" id="one">
                    <Button label={"C"} calculate={calculate}/>
                    <Button label={"%"} calculate={calculate}/>
                    <Button label={"/"} calculate={calculate}/>
                    <Button label= {"B"} calculate={calculate}/>
                </div>
                <div className="buttons" id="2">
                    <Button label={"8"} calculate={calculate}/>
                    <Button label={"9"} calculate={calculate}/>
                    <Button label={"*"} calculate={calculate}/>
                    <Button label={"7"} calculate={calculate}/>
                </div>
                <div className="buttons" id="3">
                    <Button label={"4"} calculate={calculate}/>
                    <Button label={"5"} calculate={calculate}/>
                    <Button label={"6"} calculate={calculate}/>
                    <Button label={"-"} calculate={calculate}/>
                </div>
                <div className="buttons" id="4">
                    <Button label={"1"} calculate={calculate}/>
                    <Button label={"2"} calculate={calculate}/>
                    <Button label={"3"} calculate={calculate}/>
                    <Button label={"+"} calculate={calculate}/>
                </div>
                <div className="buttons" id="5">
                    <Button label={"0"} calculate={calculate}/>
                    <Button label={"."} calculate={calculate}/>
                    <Button label={"="} calculate={calculate}/>
                </div>
            </div>
            <Footer/>
        </div>
    )
}
