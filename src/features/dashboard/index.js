import React from 'react'
import MainRoute from './routes/main'

export default function DashBoard() {
  return (
    <section className='home-section'>
      <MainRoute/>
    
      {/* <div className='container pb-2'>
        <div className='d-flex justify-content-between align-items-center'>
          <h2 className='pt-4 pb-2' style={{ color: 'var(--text-color)' }}>
            DashBoard
          </h2>
          <Link to="/insert" className='action_update_icon mx-1 my-1'>
            <div>

              <IoAddCircleOutline size={24} />
              <span className="px-1">Add</span>
            </div>
          </Link>
        </div>
        <RTable />
         <h2 className='pt-4 pb-2' style={{color:'var(--text-color)'}}>
        Add Entry
    </h2>
     <Add/> 
      </div> */}
    </section>
  )
}
