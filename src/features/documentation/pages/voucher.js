import React from 'react'

export default function Voucher() {
    return (
      

            <div className='container-fluid bg-help'>
                <h2 className='title-help'>Identifying the current voucher's Master ID in Voucher Creation Mode</h2>
                <p className='content-help'>You can determine the current voucher's MasterID from the Company Object's method CmpVchID which retains the Master ID of the subsequent voucher being created.</p>
                <p className='content-help'>For a Single-User Environment, the above solution holds good, but in case of Multi-User Environment where multiple users are entering data simultaneously, it is hard to determine the Master ID of the current voucher since the MasterID from the Company Object will be assigned to the first person saving the voucher.</p>
                <p className='content-help'>
                    Therefore, to determine the MasterID of the current voucher, presently one needs to generate a unique value using $$MakeUniqueID which can be stored within the current Voucher's UDF.  Once the voucher is saved, one can find the MasterID of this Voucher from the Collection of Vouchers of this Voucher Type by filtering for the unique ID assigned to it.  To narrow down the scope of search, one needs to set the Variable SVFromDate and SVToDate to the current date and find the MasterID from the Collection of Vouchers.
                </p>
       
        </div>
    )
}
