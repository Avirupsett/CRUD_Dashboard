import React from 'react'
import { Route,Switch} from "react-router-dom";
import RTable from '../component/view/table'

export default function MainRoute() {
  return (
    <Route exact path='/'>
        <Switch> 
        <RTable />    
        </Switch>
    </Route>
  )
}
