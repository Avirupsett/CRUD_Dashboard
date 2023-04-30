import React from 'react'
import { MdDeleteForever } from 'react-icons/md'
import deleted from '../../services/delete/handledelete';
import './delete.css'

export default function Delete(props) {
  async function handledelete(id) {
    const query = await deleted(id)
    if (query.status === 204) {
      alert("Successful")
      props.handleDeleteItem(id)
    }
    else {
      alert("UnSuccessful")
    }
  }
  return (
    <div className=''>

      <div className='action_icon' onClick={()=>handledelete(props.id)}>
        <div>

          <MdDeleteForever size={24} />
          {/* <span className="action_name">Delete</span> */}
        </div>
      </div>
    </div>
  )
}
