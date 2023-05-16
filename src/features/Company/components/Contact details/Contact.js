import React, { useEffect, useState } from 'react'
import { GoChevronLeft, GoChevronRight } from 'react-icons/go'
import {MdOutlinePermContactCalendar} from 'react-icons/md'

export default function Contact(props) {
    const [mobile, setMobile] = useState(props.contactDetails.mobile)
    const [telephone, setTelephone] = useState(props.contactDetails.telephone)
    const [fax, setFax] = useState(props.contactDetails.fax)
    const [email, setEmail] = useState(props.contactDetails.email)
    const [website, setWebsite] = useState(props.contactDetails.website)
    const [allvalue, setAllvalue] = useState({
        "mobile": props.contactDetails.mobile,
        "telephone": props.contactDetails.telephone,
        "fax": props.contactDetails.fax,
        "email": props.contactDetails.email,
        "website": props.contactDetails.website,
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
            <h3 className='d-flex align-items-center' style={{ color: "var(--text-color)" }}><MdOutlinePermContactCalendar className='me-2'/>Contact Details</h3>
            <form className='addform' onKeyDown={(e)=>handleEnter(e)} onSubmit={(e) => {e.preventDefault();props.setActive(3)}}>
                <div className='row'>

            <div className="form-group mt-3 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-6">
                <label htmlFor="exampleInputGender1" className='input-label'>Mobile</label>
                <input type="number" className="form-control input-box" autoComplete='off' id="exampleInputPassword1" placeholder="" value={mobile} onChange={e => {setMobile(e.target.value);setAllvalue({...allvalue,"mobile":e.target.value})}} />
            </div>
            <div className="form-group mt-3 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-6">
                <label htmlFor="exampleInputGender1" className='input-label'>Telephone</label>
                <input type="number" className="form-control input-box" autoComplete='off' id="exampleInputPassword1" placeholder="" value={telephone} onChange={e => {setTelephone(e.target.value);setAllvalue({...allvalue,"telephone":e.target.value})}} />
            </div>
            <div className="form-group mt-3 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-6">
                <label htmlFor="exampleInputGender1" className='input-label'>Fax No.</label>
                <input type="number" className="form-control input-box" autoComplete='off' id="exampleInputPassword1" placeholder="" value={fax} onChange={e => {setFax(e.target.value);setAllvalue({...allvalue,"fax":e.target.value})}} />
            </div>
            <div className="form-group mt-3 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-6">
                <label htmlFor="exampleInputGender1" className='input-label'>Email</label>
                <input type="email" className="form-control input-box" autoComplete='off' id="exampleInputPassword1" placeholder="" value={email} onChange={e => {setEmail(e.target.value);setAllvalue({...allvalue,"email":e.target.value})}} />
            </div>
            <div className="form-group mt-3 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-6">
                <label htmlFor="exampleInputGender1" className='input-label'>Website</label>
                <input type="text" className="form-control input-box" autoComplete='off' id="exampleInputPassword1" placeholder="" value={website} onChange={e => {setWebsite(e.target.value);setAllvalue({...allvalue,"website":e.target.value})}} />
            </div>
            </div>
  
            <div className='mt-4 d-flex flex-wrap justify-content-between'>

                <div className='multiform_icon mx-1 my-1' onClick={()=>props.setActive(1)}>
                    <div>

                        <span className="px-1"><GoChevronLeft /> Previous</span>
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
