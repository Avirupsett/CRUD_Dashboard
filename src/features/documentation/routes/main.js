import React from 'react'
import { Route } from 'react-router-dom'
import Working from '../pages/working'
import Save from '../pages/save'
import Voucher from '../pages/voucher'
import Build from '../pages/build'

export default function DocRoutes() {
  return (
    <div className='home-section px-2'>
        <Route exact={true} path="/documentation/working" component={Working}/>
        <Route exact={true} path="/documentation/save" component={Save}/>
        <Route exact={true} path="/documentation/build" component={Build}/>
        <Route exact={true} path="/documentation/voucher" component={Voucher}/>
    </div>

  )
}
