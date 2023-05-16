import React, { useEffect, useState } from 'react'
import { GoChevronRight } from 'react-icons/go'
import {HiOutlineBuildingOffice} from 'react-icons/hi2'

export default function Details(props) {
    const [companyid, setCompanyid] = useState(props.companyDetails.companyid)
    const [parentId, setParentId] = useState(props.companyDetails.parentId)
    const [isParent, setIsParent] = useState(props.companyDetails.isParent)
    const [companyName, setCompanyName] = useState(props.companyDetails.companyName)
    const [allvalue, setAllvalue] = useState({
        "companyid": props.companyDetails.companyid,
        "parentId": props.companyDetails.parentId,
        "isParent": props.companyDetails.isParent,
        "companyName": props.companyDetails.companyName
    })

    const handleEnter = (e) => {
        if (e.key === 'Enter') {
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
            <h3 className='d-flex align-items-center' style={{ color: "var(--text-color)" }}><HiOutlineBuildingOffice className='me-2'/>Company Details</h3>
            <form className='addform' onKeyDown={(e) => handleEnter(e)} onSubmit={(e) => { e.preventDefault(); props.setActive(1) }}>
                <div className='row'>
                    <div className="form-group mt-3">
                        <label htmlFor="exampleInputEmail1" className='input-label'>Company Name</label>
                        <input type="text" className="form-control input-box" autoComplete='off' id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" value={companyName} onChange={e => { setCompanyName(e.target.value); setAllvalue({ ...allvalue, "companyName": e.target.value }) }} />
                    </div>
                    <div className="form-group col-xl-6 col-lg-6 col-md-6 col-sm-6 mt-3">
                        <label htmlFor="exampleInputPassword1" className='input-label'>Company Id</label>
                        <input type="number" className="form-control input-box" autoComplete='off' id="exampleInputPassword1" placeholder="" value={companyid} onChange={e => { setCompanyid(e.target.value); setAllvalue({ ...allvalue, "companyid": e.target.value }) }} />
                    </div>
                    <div className="form-group col-xl-6 col-lg-6 col-md-6 col-sm-6 mt-3 ">
                        <label htmlFor="exampleInputGender1" className='input-label'>Parent Company Id</label>
                        <input type="number" className="form-control input-box" autoComplete='off' id="exampleInputPassword1" placeholder="" value={parentId} onChange={e => { setParentId(e.target.value); setAllvalue({ ...allvalue, "parentId": e.target.value }) }} />
                    </div>
                    <div className="form-group mt-4 mb-0 ">
                        <label htmlFor="inlineRadio1" className='input-label me-2'>Is Parent Company</label>
                        <div className="form-check form-check-inline mt-0">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio1" onChange={() => setIsParent("Yes")} onClickCapture={() => { setIsParent("Yes"); setAllvalue({ ...allvalue, "isParent": "Yes" }) }} value="Yes" checked={isParent === 'Yes' ? true : false} />
                            <label className="form-check-label input-label" htmlFor="inlineRadio1">Yes</label>
                        </div>
                        <div className="form-check form-check-inline  mt-0 me-0">
                            <input className="form-check-input" type="radio" name="inlineRadioOptions" id="inlineRadio2" onChange={() => setIsParent("No")} onClickCapture={() => { setIsParent("No"); setAllvalue({ ...allvalue, "isParent": "No" }) }} value="No" checked={isParent === 'No' ? true : false} />
                            <label className="form-check-label input-label" htmlFor="inlineRadio2" >No</label>
                        </div>
                    </div>
                </div>
                <div className='mt-4 d-flex flex-wrap justify-content-end'>

                    <button className='multiform_icon mx-1 my-1' >
                        <div>

                            <span className="px-1">Next <GoChevronRight/></span>
                        </div>
                    </button>

                </div>
            </form>
        </div>
    )
}
