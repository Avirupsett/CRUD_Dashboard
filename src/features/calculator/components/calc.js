import React, { useState } from 'react'
import CalcBox from './calcbox'
import './calc.css'
import GstCalcBox from './gstcalcbox';

export default function Calc() {
    let [showInfo1, setShowInfo1] = useState(false);
    let [showInfo2, setShowInfo2] = useState(false);
    const [number, setNumber] = useState("")

    const handlecalc=(e)=>{
        if(e.altKey && e.keyCode === 67)
        {
            setShowInfo1(!showInfo1)
            setShowInfo2(false)
        } 
        else if(e.altKey && e.keyCode === 71)
        {
          setShowInfo2(!showInfo2)
          setShowInfo1(false)
        } 
    }

    const onChangeNumber=(val)=>{
        setNumber(val)
    }

    function isNumberKey(e) {
      const { value } = e.target;
 
    const re = /^\d*\.?\d*$/;
    if (value === "" || re.test(value)) {
      setNumber(value)
    }
  }

  return (
    <div className="container-2 ">
      <input
      min={0}
        type="text"
        value={number}
        onChange={(e)=>isNumberKey(e)}
        onKeyDown={handlecalc}
        className="input form-control"
        placeholder="Number"
      />
     
        <CalcBox show={showInfo1}  onClickOutside={() => {setShowInfo1(false)}} onChangeNumber={onChangeNumber}/>
        <GstCalcBox show={showInfo2} onClickOutside={() => {setShowInfo2(false)}} onChangeNumber={onChangeNumber}/>
     
    </div>
  )
}
