import React, { useEffect, useState } from 'react'
import SearchBox from '../../../searchbox'
import {IoLocationOutline} from 'react-icons/io5'
import { GoChevronLeft, GoChevronRight } from 'react-icons/go'

export default function Mailing(props) {
    const [mailingName, setMailingName] = useState(props.mailingDetails.mailingName)
    const [address, setAddress] = useState(props.mailingDetails.address)
    const [country, setCountry] = useState(props.mailingDetails.country)
    const [state, setState] = useState(props.mailingDetails.state)
    const [pincode, setPincode] = useState(props.mailingDetails.pincode)
    const [longitude, setLongitude] = useState(props.mailingDetails.longitude)
    const [latitude, setLatitude] = useState(props.mailingDetails.latitude)
    const [allvalue, setAllvalue] = useState({
        "mailingName": props.mailingDetails.mailingName,
        "address": props.mailingDetails.address,
        "country": props.mailingDetails.country,
        "state": props.mailingDetails.state,
        "pincode": props.mailingDetails.pincode,
        "longitude": props.mailingDetails.longitude,
        "latitude": props.mailingDetails.latitude
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

    const handleSetCountry=(val)=>{
        setCountry(val)
        setAllvalue({ ...allvalue, "country": val })
    }
    const handleSetState=(val)=>{
        setState(val)
        setAllvalue({ ...allvalue, "state": val })
    }


    return (
        <div className='container mt-2'>
            <h3 className='d-flex align-items-center' style={{ color: "var(--text-color)" }}><IoLocationOutline className='me-2'/>Mailing Details</h3>
            <form className='addform' onKeyDown={(e)=>handleEnter(e)} onSubmit={(e) => { e.preventDefault(); props.setActive(2) }}>
                <div className='row'>
                    <div className="form-group mt-3 col-xl-6 col-lg-6 col-md-6 ">
                        <label htmlFor="exampleInputEmail1" className='input-label'>Mailing Name</label>
                        <input type="text" className="form-control input-box" autoComplete='off' id="exampleInputEmail1" aria-describedby="emailHelp" value={mailingName} placeholder="" onChange={e =>{ setMailingName(e.target.value); setAllvalue({ ...allvalue, "mailingName": e.target.value })}} />
                    </div>
                    <div className="form-group mt-3 col-xl-6 col-lg-6 col-md-6 ">
                        <label htmlFor="exampleInputPassword1" className='input-label'>Address</label>
                        <input type="text" className="form-control input-box" autoComplete='off' id="exampleInputPassword1" placeholder="" value={address} onChange={e => {setAddress(e.target.value); setAllvalue({ ...allvalue, "address": e.target.value })}} />
                    </div>
                    <div className="form-group mt-3 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-6">
                        <label htmlFor="exampleInputGender1" className='input-label'>Country</label>
                        <SearchBox getvalue={handleSetCountry} setvalue={country} title="Countries" />
                        {/* <input type="text" className="form-control input-box" autoComplete='off' id="exampleInputPassword1" placeholder="" onChange={e => setParentId(e.target.value)} /> */}
                    </div>
                    <div className="form-group mt-3 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-6">
                        <label htmlFor="exampleInputGender1" className='input-label'>State</label>
                        <SearchBox getvalue={handleSetState} setvalue={state} title="States" />
                    </div>
                    <div className="form-group mt-3 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-6">
                        <label htmlFor="exampleInputGender1" className='input-label'>Pincode</label>
                        <input type="number" className="form-control input-box" autoComplete='off' id="exampleInputPassword1" placeholder="" value={pincode} onChange={e => {setPincode(e.target.value); setAllvalue({ ...allvalue, "pincode": e.target.value })}} />
                    </div>
                    <div className="form-group mt-3 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-6">
                        <label htmlFor="exampleInputGender1" className='input-label'>Longitude</label>
                        <input type="number" className="form-control input-box" autoComplete='off' id="exampleInputPassword1" placeholder="" value={longitude} onChange={e => {setLongitude(e.target.value); setAllvalue({ ...allvalue, "longitude": e.target.value })}} />
                    </div>
                    <div className="form-group mt-3 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-6">
                        <label htmlFor="exampleInputGender1" className='input-label'>Latitude</label>
                        <input type="number" className="form-control input-box" autoComplete='off' id="exampleInputPassword1" placeholder="" value={latitude} onChange={e => {setLatitude(e.target.value); setAllvalue({ ...allvalue, "latitude": e.target.value })}} />
                    </div>

                </div>

                <div className='mt-4 d-flex flex-wrap justify-content-between'>

                    <div className='multiform_icon mx-1 my-1' onClick={() => props.setActive(0)}>
                        <div>

                            <span className="px-1"> <GoChevronLeft/> Previous</span>
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
