import React, { useEffect, useRef, useState } from 'react'
import { MdDone, MdOutlineCancel } from 'react-icons/md'
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer, toast } from 'react-toastify';

export default function CalcBox(props) {

  const [calbody, setCalbody] = useState([])
  const [inputval, setInputval] = useState("")

  const ref = useRef(null);
  const { onClickOutside,onChangeNumber} = props;

  const handleEnter = (e) => {

    if (e.key === 'Enter') {
      if (e.target.value.trim() !== '') {
        try {
          // eslint-disable-next-line
          setCalbody([...calbody, { "value": e.target.value.trim() }, { "value": parseFloat(eval(e.target.value.trim())) }])
          setInputval("")
        }
        catch (error) {
          toast.error('Invalid Input!', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
        }
      }
    }
  }
  const messagesEndRef = useRef(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }
  function GetLastValue() {
    try {
      if(inputval.trim()!==''){
        // eslint-disable-next-line
        onChangeNumber((parseFloat(eval(inputval))).toFixed(2))
        onClickOutside && onClickOutside();
      }
      else if(calbody.length!==0){
        // eslint-disable-next-line
        onChangeNumber((parseFloat(eval(calbody[calbody.length-1]["value"]))).toFixed(2))
        onClickOutside && onClickOutside();
      }
    } catch (error) {
      toast.error('Invalid Input!', {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "dark",
        });
    }
  }

  useEffect(() => {
    scrollToBottom()
  }, [calbody]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        onClickOutside && onClickOutside();
      }
    };
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, [ onClickOutside ]);


  if(!props.show)
    return null;

  return (
    <div ref={ref} >
      <ToastContainer/>
      <div className="container-fluid d-flex justify-content-center">
        <div className="calc-body">
          <div className='d-flex flex-wrap align-items-center justify-content-between'>
            <h2 className='px-3 pt-2' style={{ color: "var(--text-color)" }}>Calculator</h2>
            <div className='d-flex pe-2'>
              <div className='action_update_icon mx-1 my-2' onClick={()=>GetLastValue()}>
                <div>
                  <MdDone size={24} />
                  <span className="px-1">Accept</span>
                </div>
              </div>
              <div className='action_update_icon mx-1 my-2' onClick={()=>setCalbody([])} >
                <div>
                  <MdOutlineCancel size={24} />
                  <span className="px-1">Clear</span>
                </div>
              </div>
            </div>
          </div>
          <hr className='my-1' style={{ color: "var(--text-color)" }}/>
          <div className='calc-val px-2'>
            {calbody.map((val, index) => {
              return (
                <div key={index} style={{ color: "var(--text-color)",overflowWrap:"break-word" }}>{index + 1}{index % 2 === 0 ? ">" : `${'\u00A0'}`}&nbsp;&nbsp;{val.value}</div>
              )
            })}
            <input type='text' value={inputval} onChange={(e) => setInputval(e.target.value)} className='w-100 cal-box form-control' onKeyDown={handleEnter} placeholder='Ex: 52+21'></input>
            <div ref={messagesEndRef} />
          </div>
        </div>
      </div>
    </div>
  )
}
