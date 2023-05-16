import React from 'react'
import { useState } from 'react'
import { IoAddCircleOutline } from 'react-icons/io5'
// import { MultiStepForm, Step } from 'react-multi-form'
import './multistep.css'
import Details from './company details/details'
import Mailing from './Mailing details/mailing'
import { StepButton, Stepper } from '@mui/material'
import { Step } from '@mui/material'
import Contact from './Contact details/Contact'
import GST from './GST details/gst'
import Currency from './Currency details/currency'

export default function Multistep() {
    const [active, setActive] = useState(0)
    const [open, setOpen] = useState(false)
    const onOpenModal = () => setOpen(true)
    const onCloseModal = () => setOpen(false)
    const [companyDetails, setCompanyDetails] = useState(
        {
            "companyid":"",
            "parentId":"",
            "isParent":"No",
            "companyName":""                
        }
    )
    const [mailingDetails, setMailingDetails] = useState({
        "mailingName": "",
        "address": "",
        "country": "",
        "state": "",
        "pincode": "",
        "longitude": "",
        "latitude": ""
    })
    const [contactDetails, setContactDetails] = useState({
        "mobile": "",
        "telephone": "",
        "fax": "",
        "email": "",
        "website": "",
    })
    const [currencyDetails, setCurrencyDetails] = useState({
        "cname": "",
        "csymbol": "",
    })

    const [gstDetails, setGstDetails] = useState({
        "gstno": "",
        "gsttype": "",
        "typeofsupply": "Goods",
        "rateofduty": "",
        "caltype": "Item Rate",
        "tax": "Unknown",
        "igst": "",
        "cgst": "",
        "sgst": "",
        "cess": "",
        "gstreg": "",
        "custax": ""
    })

    const handleStep = (step) => () => {
        setActive(step);
    };

    return (
        <div className='home-section'>
            <div className='container'>
                <div className='mt-1 d-flex flex-wrap justify-content-between'>
                    <div className='multiform_add_icon  mx-1 my-1' onClick={onOpenModal}>
                        <div>

                            <IoAddCircleOutline size={24} />
                            <span className="px-1 ">Add Entry</span>
                        </div>
                    </div>
                </div>
                <div className="company-overlay" style={{ display: open ? 'block' : 'none' }}>

                    <span className="closebtn" title="Close Overlay" onClick={() => onCloseModal()}>×</span>
                    <div className="company-overlay-content justify-content-center align-items-center">
                        <div className='d-flex flex-column align-items-center' >
                            <div className="company-overlay-content-inside" style={{ backgroundColor: "var(--primary-color)", borderRadius: "0.575rem" }}>


                                <div className='d-flex justify-content-evenly align-items-start company-container'>
                                     <div className='multistep-box'>
                                    
                                   
                                        <Stepper orientation='vertical' alternativeLabel={false} nonLinear={true} activeStep={active} >
                                            <Step>
                                                <StepButton onClick={handleStep(0)}>Details</StepButton>
                                            </Step>
                                            <Step>
                                                <StepButton onClick={handleStep(1)}>Mailing</StepButton>
                                            </Step>
                                            <Step>
                                                <StepButton onClick={handleStep(2)}>Contact</StepButton>
                                            </Step>
                                            <Step>
                                                <StepButton onClick={handleStep(3)}>Currency</StepButton>
                                            </Step>
                                            <Step>
                                                <StepButton onClick={handleStep(4)}>GST</StepButton>
                                            </Step>
                                        </Stepper>
                                    
                                    </div>
                                    {
                                        (active===0)?
                                    <Details setActive={setActive} getAllValues={setCompanyDetails} companyDetails={companyDetails}/>:(active===1)?
                                    <Mailing setActive={setActive} getAllValues={setMailingDetails} mailingDetails={mailingDetails}/>:(active===2)?
                                    <Contact setActive={setActive} getAllValues={setContactDetails} contactDetails={contactDetails}/>:(active===3)?
                                    <Currency setActive={setActive} getAllValues={setCurrencyDetails} currencyDetails={currencyDetails}/>:
                                    <GST setActive={setActive} getAllValues={setGstDetails} gstDetails={gstDetails} onCloseModal={onCloseModal}/>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
