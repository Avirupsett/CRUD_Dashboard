import React, { useEffect, useState } from 'react'
import {BsCurrencyExchange} from 'react-icons/bs'
import { GoChevronLeft, GoChevronRight } from 'react-icons/go'

export default function Currency(props) {
    const [cname, setCname] = useState(props.currencyDetails.cname)
    const [csymbol, setCsymbol] = useState(props.currencyDetails.csymbol)
    const [allvalue, setAllvalue] = useState({
        "cname": props.currencyDetails.cname,
        "csymbol": props.currencyDetails.csymbol,
    })

    const handleEnter=(e)=>{
       if(e.key==='Enter'){
        e.preventDefault();
       }
    }

    useEffect(() => {
        const setValue = async () => {
            // eslint-disable-next-line
            await props.getAllValues(
                allvalue
            )
        }
        setValue()
        // eslint-disable-next-line
    }, [allvalue])


    return (
        <div className='container mt-2'>
            <h3 className='d-flex align-items-center' style={{ color: "var(--text-color)" }}><BsCurrencyExchange className='me-2'/>Currency Details</h3>
            <form className='addform' onKeyDown={(e)=>handleEnter(e)} onSubmit={(e) => { e.preventDefault(); props.setActive(4) }}>
                <div className='row'>

                    <div className="form-group mt-3 col-xl-4 col-lg-6 col-md-6 col-sm-6 ">
                        <label htmlFor="exampleInputGender1" className='input-label'>Currency Symbol</label>
                        <input type="text" className="form-control input-box" autoComplete='off' id="exampleInputPassword1" placeholder="" value={cname} onChange={e => {setCname(e.target.value);setAllvalue({...allvalue,"cname":e.target.value})}} />
                    </div>
                    <div className="form-group mt-3 col-xl-4 col-lg-6 col-md-6 col-sm-6 ">
                        <label htmlFor="exampleInputGender1" className='input-label'>Currency Name</label>
                        <input type="text" className="form-control input-box" autoComplete='off' id="exampleInputPassword1" placeholder="" value={csymbol} onChange={e => {setCsymbol(e.target.value);setAllvalue({...allvalue,"csymbol":e.target.value})}} />
                    </div>
                </div>

                <div className='mt-4 d-flex flex-wrap justify-content-between'>

                    <div className='multiform_icon mx-1 my-1' onClick={() => props.setActive(2)}>
                        <div>

                            <span className="px-1"><GoChevronLeft/> Previous</span>
                        </div>
                    </div>
                    <button className='multiform_icon mx-1 my-1'>
                        <div>

                            <span className="px-1">Next <GoChevronRight/></span>
                        </div>
                    </button>

                </div>
            </form>
        </div>
    )
}
