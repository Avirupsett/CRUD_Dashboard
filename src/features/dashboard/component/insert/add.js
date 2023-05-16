import React, { useState } from 'react'
import { MdOutlineCancel } from 'react-icons/md'
import { IoAddCircleOutline} from 'react-icons/io5'
import insert from '../../services/insert/handleinsert'
import './add.css'
import Modal from 'react-responsive-modal'
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer, toast } from 'react-toastify';

export default function Add(props) {
    const [open, setOpen] = useState(false)
    const onOpenModal = () => setOpen(true)
    const onCloseModal = () => setOpen(false)

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [gender, setGender] = useState("")
    const [status, setStatus] = useState("")

    async function handleinsert(){
        const query=await insert(name,email,gender,status)
        const form = document.getElementById('add_form');
        if(query.status===201){
          toast.success('Successfully Added!', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
         form.reset()
         props.handleInsertItem(query.data)
        }
        else{
          toast.error('UnSuccessful!', {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "dark",
            });
        }
    }
    return (
        <div className=''>
          <ToastContainer/>
        <div className='add_icon' onClick={onOpenModal}>
          <div>
  
            <IoAddCircleOutline size={24} />
            <span className="add_name px-1 ">Add Entry</span>
          </div>
        </div>
       {open && <Modal open={open} onClose={onCloseModal} center>
          <div className='container'>
  
         <div className='d-flex align-items-center py-2'> <IoAddCircleOutline size={40} /> <h1 className='px-2' style={{marginBottom:0}}>Add Entry</h1></div>
        <form id="add_form">
             <div className="form-group">
              <label htmlFor="exampleInputEmail2">Name</label>
              <input type="text" className="form-control input-box" autoComplete='off'  id="exampleInputEmail2" aria-describedby="emailHelp" placeholder="Enter Name" onChange={e=>setName(e.target.value)}/>

            </div>
            <div className="form-group mt-2">
              <label htmlFor="exampleInputPassword2">Email</label>
              <input type="email" className="form-control input-box" autoComplete='off' id="exampleInputPassword2" placeholder="Email" onChange={e=>setEmail(e.target.value)}/>
            </div>
            <div className="form-group mt-2">
              <label htmlFor="exampleInputGender2">Gender</label>
              <input type="text" className="form-control input-box" autoComplete='off' id="exampleInputGender2" placeholder="Gender" onChange={e=>setGender(e.target.value)}/>
            </div>
            <div className="form-group mt-2">
              <label htmlFor="exampleInputStatus2">Status</label>
              <input type="text" className="form-control input-box" autoComplete='off' id="exampleInputStatus2" placeholder="Status" onChange={e=>setStatus(e.target.value)}/>
            </div>
            <div className='mt-3 d-flex flex-wrap justify-content-end'>
                <div className='action_update_icon mx-1 my-1' onClick={()=>handleinsert()}>
                    <div>

                        <IoAddCircleOutline size={24} />
                        <span className="px-1">Add</span>
                    </div>
                </div>
                <div onClick={onCloseModal} className='action_update_icon mx-1 my-1'>
                    <div >

                        <MdOutlineCancel size={24} />
                        <span className="px-1">Cancel</span>
                    </div>
                </div>
            </div>
        </form>
        </div>
      </Modal>}
  
    </div>
    )
}
