import React, { useState } from 'react'
import { MdEdit, MdOutlineCancel } from 'react-icons/md'
import './update.css'
import { Modal } from 'react-responsive-modal'
import updated from '../../services/update/handleupdate'


export default function Update(props) {

  const [open, setOpen] = useState(false)
  const onOpenModal = () => setOpen(true)
  const onCloseModal = () => setOpen(false)

  const [name, setName] = useState(props.name)
  const [email, setEmail] = useState(props.email)
  const [gender, setGender] = useState(props.gender)
  const [status, setStatus] = useState(props.status)


  async function handleupdate(id,name,email,gender,status) {
    const query = await updated(id,name,email,gender,status)
    if (query.status === 200) {
      alert("Successful")
      props.handleUpdateItem(id,name,email,gender,status)
    }
    else {
      alert("UnSuccessful")
    }
  }

  return (
    <div className=''>
      <div className='action_icon' onClick={onOpenModal}>
        <div>

          <MdEdit size={24} />
          {/* <span className="action_name px-1">Edit</span> */}
        </div>
      </div>
     {open && <Modal open={open} onClose={onCloseModal} center>
        <div className='container'>

          <h1 className='py-2'>Update Entry</h1>
          <form>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1">Name</label>
              <input type="text" className="form-control input-box" autoComplete='off' id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter Name" onChange={e=>setName(e.target.value)}  defaultValue={props.name}/>

            </div>
            <div className="form-group mt-2">
              <label htmlFor="exampleInputPassword1">Email</label>
              <input type="email" className="form-control input-box" autoComplete='off' id="exampleInputPassword1" placeholder="Email" onChange={e=>setEmail(e.target.value)} defaultValue={props.email}/>
            </div>
            <div className="form-group mt-2">
              <label htmlFor="exampleInputGender1">Gender</label>
              <input type="text" className="form-control input-box" autoComplete='off' id="exampleInputPassword1" placeholder="Gender" onChange={e=>setGender(e.target.value)} defaultValue={props.gender}/>
            </div>
            <div className="form-group mt-2">
              <label htmlFor="exampleInputStatus1">Status</label>
              <input type="text" className="form-control input-box" autoComplete='off' id="exampleInputPassword1" placeholder="Status" onChange={e=>setStatus(e.target.value)} defaultValue={props.status}/>
            </div>
            <div className='mt-3 d-flex flex-wrap justify-content-end'>
              <div className='action_update_icon mx-1 my-1' onClick={()=>handleupdate(props.id,name,email,gender,status)}>
                <div>

                  <MdEdit size={24} />
                  <span className="px-1">Update</span>
                </div>
              </div>
              <div className='action_update_icon mx-1 my-1'>
                <div onClick={onCloseModal}>

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
