import React, { useEffect, useRef, useState } from 'react'
import { MdDone, MdOutlineCancel } from 'react-icons/md'
import 'react-toastify/dist/ReactToastify.css';
// import { ToastContainer, toast } from 'react-toastify';
import './calcgst.css'

export default function GstCalcBox(props) {


    const ref = useRef(null);
    const { onClickOutside,onChangeNumber } = props;

    const [gstrates, setGstrates] = useState(5)
    const [ingst, setIngst] = useState(0)
    const [exgst, setExgst] = useState(0)
    const [gst, setGst] = useState(0)


    const onchangeGst = (e) => {
        isNumberKey(e, "gst")
        if (e.target.value) {
            setExgst((parseFloat(document.getElementById("GST").value) * 20).toFixed(2))
            if (parseInt(exgst) === 0 || isNaN(exgst)) {
                setIngst((((parseFloat(e.target.value) * 20 * parseFloat(gstrates)) / 100) + parseFloat(e.target.value) * 20).toFixed(2))
            }
            else {
                let v1 = (((parseFloat(document.getElementById("GST").value) * 20) * parseFloat(gstrates)) / 100) + (parseFloat(document.getElementById("GST").value) * 20)
                setIngst(v1.toFixed(2))
                let v2 = (((parseFloat(document.getElementById("GST").value) * 20) * parseFloat(gstrates)) / 100) + (parseFloat(document.getElementById("GST").value) * 20) - parseFloat(document.getElementById("GST").value)
                setExgst(v2.toFixed(2))
            }
        }
        else {
            setIngst(0)
            setExgst(0)
        }
    }

    const onchangeGstRates = (e) => {
        setGstrates(e.target.value)
        if (!isNaN(exgst) && !isNaN(ingst) && !isNaN(gst)) {
            setIngst((((parseFloat(document.getElementById("AmountexcludingGST").value) * parseFloat(e.target.value)) / 100) + parseFloat(document.getElementById("AmountexcludingGST").value)).toFixed(2))
            setGst((((parseFloat(document.getElementById("AmountexcludingGST").value) * parseFloat(e.target.value)) / 100) + parseFloat(document.getElementById("AmountexcludingGST").value) - parseFloat(document.getElementById("AmountexcludingGST").value)).toFixed(2))
        }
    }

    const onchangeAmountEx = (e) => {
        isNumberKey(e, "exgst")
        if (e.target.value) {
            setIngst((((parseFloat(e.target.value * parseFloat(gstrates)) / 100) + parseFloat(e.target.value))).toFixed(2))
            setGst((((parseFloat(e.target.value * parseFloat(gstrates)) / 100) + parseFloat(e.target.value)) - parseFloat(e.target.value)).toFixed(2))
        }
        else {
            setIngst(0)
            setGst(0)
        }
    }
    const onchangeAmountIn = (e) => {
        isNumberKey(e, "ingst")
        if (e.target.value) {
            setExgst((parseFloat(e.target.value) / (parseFloat(gstrates) / 100 + 1)).toFixed(2))
            setGst((parseFloat(e.target.value) - (parseFloat(e.target.value) / (parseFloat(gstrates) / 100 + 1))).toFixed(2))
        }
        else {
            setExgst(0)
            setGst(0)
        }
    }

    const onclear = () => {
        setIngst(0)
        setExgst(0)
        setGst(0)
    }

    function isNumberKey(e, loc) {
        const { value } = e.target;

        const re = /^\d*\.?\d*$/;
        if (value === "" || re.test(value)) {
            if (loc === "ingst")
                setIngst(value)
            else if (loc === "exgst")
                setExgst(value)
            else if (loc === "gst")
                setGst(value)
        }
    }



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
    }, [onClickOutside]);


    if (!props.show)
        return null;

    return (
        <div ref={ref} >
            {/* <ToastContainer /> */}
            <div className="container-fluid d-flex justify-content-center">
                <div className="calc-body">
                    <div className='d-flex flex-wrap align-items-center justify-content-between'>
                        <h2 className='px-3 pt-2' style={{ color: "var(--text-color)" }}>GST Calculator</h2>
                        <div className='d-flex pe-2'>
                            <div className='action_update_icon mx-1 my-2' onClick={()=>onChangeNumber(ingst)}>
                                <div>
                                    <MdDone size={24} />
                                    <span className="px-1">Accept</span>
                                </div>
                            </div>
                            <div className='action_update_icon mx-1 my-2' onClick={() => onclear()}>
                                <div>
                                    <MdOutlineCancel size={24} />
                                    <span className="px-1">Clear</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <hr className='my-1' style={{ color: "var(--text-color)" }} />
                    <div className='calgst-val container'>
                        <div className='row'>
                            <div className='col-xl-6 col-lg-6 col-md-6'>
                                <div className="form-group py-2">
                                    <label htmlFor="GSTRates">GST Rates</label>
                                    <select defaultValue={'5'} className="form-select input-box" onChange={(e) => { onchangeGstRates(e) }} id="GSTRates" aria-label="GST Rates">

                                        <option value="0.25">0.25 %</option>
                                        <option value="3">3 %</option>
                                        <option value="5">5 %</option>
                                        <option value="12">12 %</option>
                                        <option value="18">18 %</option>
                                        <option value="28">28 %</option>
                                    </select>
                                </div>
                            </div>
                            <div className='col-xl-6 col-lg-6 col-md-6'>
                                <div className="form-group py-2">
                                    <label htmlFor="AmountexcludingGST">Amount excluding GST</label>
                                    <input type="text" className="form-control input-box" value={exgst} onChange={(e) => { onchangeAmountEx(e) }} autoComplete='off' id="AmountexcludingGST" placeholder="" />
                                </div>
                            </div>
                            <div className='col-xl-6 col-lg-6 col-md-6'>
                                <div className="form-group py-2">
                                    <label htmlFor="AmountincludingGST">Amount including GST</label>
                                    <input type="text" className="form-control input-box" value={ingst} onChange={(e) => { onchangeAmountIn(e) }} autoComplete='off' id="AmountincludingGST" placeholder="" />
                                </div>
                            </div>
                            <div className='col-xl-6 col-lg-6 col-md-6'>
                                <div className="form-group py-2">
                                    <label htmlFor="GST">GST</label>
                                    <input type="text" className="form-control input-box" value={gst} onChange={(e) => { onchangeGst(e) }} autoComplete='off' id="GST" placeholder="" />
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
