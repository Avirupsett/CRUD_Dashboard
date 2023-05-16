import React, { useEffect, useState } from 'react'
import { GoChevronLeft,} from 'react-icons/go'
import { HiOutlineReceiptTax } from 'react-icons/hi'
import { MdOutlineDoneOutline } from 'react-icons/md'

export default function GST(props) {
    const [gstno, setGstno] = useState(props.gstDetails.gstno)
    const [gsttype, setGsttype] = useState(props.gstDetails.gsttype)
    const [typeofsupply, setTypeofsupply] = useState(props.gstDetails.typeofsupply)
    const [rateofduty, setRateofduty] = useState(props.gstDetails.rateofduty)
    const [caltype, setCaltype] = useState(props.gstDetails.caltype)
    const [tax, setTax] = useState(props.gstDetails.tax)
    const [igst, setIgst] = useState(props.gstDetails.igst)
    const [cgst, setCgst] = useState(props.gstDetails.cgst)
    const [sgst, setSgst] = useState(props.gstDetails.sgst)
    const [cess, setCess] = useState(props.gstDetails.cess)
    const [gstreg, setGstreg] = useState(props.gstDetails.gstreg)
    const [custax, setCustax] = useState(props.gstDetails.custax)
    const [allvalue, setAllvalue] = useState({
        "gstno": props.gstDetails.gstno,
        "gsttype": props.gstDetails.gsttype,
        "typeofsupply": props.gstDetails.typeofsupply,
        "rateofduty": props.gstDetails.rateofduty,
        "caltype": props.gstDetails.caltype,
        "tax": props.gstDetails.tax,
        "igst": props.gstDetails.igst,
        "cgst": props.gstDetails.cgst,
        "sgst": props.gstDetails.sgst,
        "cess": props.gstDetails.cess,
        "gstreg": props.gstDetails.gstreg,
        "custax": props.gstDetails.custax
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
            <h3 className='d-flex align-items-center' style={{ color: "var(--text-color)" }}><HiOutlineReceiptTax className='me-2' />GST Details</h3>
            <form onKeyDown={(e)=>handleEnter(e)} onSubmit={(e) => { e.preventDefault(); props.onCloseModal() }}>
                <div className='row'>

                    <div className="form-group mt-3 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-6">
                        <label htmlFor="exampleInputGender1" className='input-label'>GST No.</label>
                        <input type="number" className="form-control input-box" autoComplete='off' id="exampleInputPassword1" placeholder="" value={gstno} onChange={e => { setGstno(e.target.value); setAllvalue({ ...allvalue, "gstno": e.target.value }) }} />
                    </div>
                    <div className="form-group mt-3 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-6">
                        <label htmlFor="exampleInputGender1" className='input-label'>GST Type</label>
                        <input type="number" className="form-control input-box" autoComplete='off' id="exampleInputPassword1" placeholder="" value={gsttype} onChange={e => { setGsttype(e.target.value); setAllvalue({ ...allvalue, "gsttype": e.target.value }) }} />
                    </div>
                    <div className="form-group mt-3 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-6">
                        <label htmlFor="exampleInputGender1" className='input-label'>Type of Supply</label>
                        <select className="form-select input-box" aria-label="Default select example" defaultValue={typeofsupply} onChange={(e) => { setTypeofsupply(e.target.value); setAllvalue({ ...allvalue, "typeofsupply": e.target.value }) }}>
                            <option value="Goods">Goods</option>
                            <option value="Service">Service</option>
                        </select>
                    </div>
                    <div className="form-group mt-3 col-xl-4 col-lg-6 col-md-6 col-sm-6 ">
                        <label htmlFor="exampleInputGender1" className='input-label'>Rate of Duty</label>
                        <input type="number" className="form-control input-box" autoComplete='off' id="exampleInputPassword1" placeholder="" value={rateofduty} onChange={e => { setRateofduty(e.target.value); setAllvalue({ ...allvalue, "rateofduty": e.target.value }) }} />
                    </div>
                    <div className="form-group mt-3 col-xl-4 col-lg-6 col-md-6 col-sm-6 ">
                        <label htmlFor="exampleInputGender1" className='input-label'>Calculation Type</label>
                        <select className="form-select input-box" aria-label="Default select example" defaultValue={caltype} onChange={(e) => { setCaltype(e.target.value); setAllvalue({ ...allvalue, "caltype": e.target.value }) }}>
                            <option value="Item Rate">On Item Rate</option>
                            <option value="Item Value">On Item Value</option>
                        </select>
                    </div>
                    <div className="form-group mt-3 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-6">
                        <label htmlFor="exampleInputGender1" className='input-label'>Taxability</label>
                        <select className="form-select input-box" aria-label="Default select example" defaultValue={tax} onChange={(e) => { setTax(e.target.value); setAllvalue({ ...allvalue, "tax": e.target.value }) }}>

                            <option value="Unknown">Unknown</option>
                            <option value="Exempt">Exempt</option>
                            <option value="NilRated">NilRated</option>
                            <option value="Taxable">Taxable</option>
                        </select>
                    </div>
                    <div className="form-group mt-3 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-6">
                        <label htmlFor="exampleInputGender1" className='input-label'>IGST</label>
                        <input type="number" className="form-control input-box" autoComplete='off' id="exampleInputPassword1" placeholder="" value={igst} onChange={e => { setIgst(e.target.value); setAllvalue({ ...allvalue, "igst": e.target.value }) }} />

                    </div>
                    <div className="form-group mt-3 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-6">
                        <label htmlFor="exampleInputGender1" className='input-label'>CGST</label>
                        <input type="number" className="form-control input-box" autoComplete='off' id="exampleInputPassword1" placeholder="" value={cgst} onChange={e => { setCgst(e.target.value); setAllvalue({ ...allvalue, "cgst": e.target.value }) }} />

                    </div>
                    <div className="form-group mt-3 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-6">
                        <label htmlFor="exampleInputGender1" className='input-label'>SGST</label>
                        <input type="number" className="form-control input-box" autoComplete='off' id="exampleInputPassword1" placeholder="" value={sgst} onChange={e => { setSgst(e.target.value); setAllvalue({ ...allvalue, "sgst": e.target.value }) }} />

                    </div>
                    <div className="form-group mt-3 col-xl-4 col-lg-6 col-md-6 col-sm-6 col-6">
                        <label htmlFor="exampleInputGender1" className='input-label'>CESS</label>
                        <input type="number" className="form-control input-box" autoComplete='off' id="exampleInputPassword1" placeholder="" value={cess} onChange={e => { setCess(e.target.value); setAllvalue({ ...allvalue, "cess": e.target.value }) }} />

                    </div>
                    <div className="form-group mt-3 col-xl-4 col-lg-6 col-md-6 ">
                        <label htmlFor="exampleInputGender1" className='input-label'>GST Registration Type</label>
                        <input type="number" className="form-control input-box" autoComplete='off' id="exampleInputPassword1" placeholder="" value={gstreg} onChange={e => { setGstreg(e.target.value); setAllvalue({ ...allvalue, "gstreg": e.target.value }) }} />
                    </div>
                    <div className="form-group mt-3 col-xl-4 col-lg-6 col-md-6 ">
                        <label htmlFor="exampleInputGender1" className='input-label'>Consumer Tax Percentage</label>
                        <input type="number" className="form-control input-box" autoComplete='off' id="exampleInputPassword1" placeholder="" value={custax} onChange={e => { setCustax(e.target.value); setAllvalue({ ...allvalue, "custax": e.target.value }) }} />
                    </div>
                </div>

                <div className='mt-4 d-flex flex-wrap justify-content-between'>

                    <div className='multiform_icon mx-1 my-1' onClick={() => props.setActive(3)}>
                        <div>

                            <span className="px-1"><GoChevronLeft /> Previous</span>
                        </div>
                    </div>
                    <button className='multiform_icon mx-1 my-1'>
                        <div>

                            <span className="px-1">Finish <MdOutlineDoneOutline/></span>
                        </div>
                    </button>

                </div>
            </form>
        </div>
    )
}
