import React from 'react'
import Multistep from './components/multistep'
import { Switch } from 'react-router-dom'
import { Route } from '@mui/icons-material'

export default function Company() {
  return (
        <Switch>
   
         <Route exact={true} path="/" component={Multistep}/>
        </Switch>
  )
}
