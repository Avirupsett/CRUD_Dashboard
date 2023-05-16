import { Route } from '@mui/icons-material'
import React from 'react'
import { Switch } from 'react-router-dom'
import Searchresult from './pages/searchresult'
import DocRoutes from './routes/main'


export default function Docs() {
  return (


        <Switch>
          <Route exact={true} path='/search' component={Searchresult}/>
          <Route  path='/documentation' component={DocRoutes}/>
        </Switch>
    
     
   


  )
}
