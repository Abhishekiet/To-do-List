import React, { Component } from 'react';
import Card from './Card'
import './Coustom.css';
import AddIcon from '@material-ui/icons/Add';
import {Box, Typography ,Grid, Paper, TextField,Button} from '@material-ui/core';

class Container extends Component{
    constructor(props)
    {
        super(props);
    }
    render(){
        const {data,deleteall,deleteitem,edititem } =this.props
       const show = data.map(item=><Card name={item.name} id={item.id} key={item.id} 
        deleteitem={()=>deleteitem(item.id)} edititem ={()=>edititem(item.id)}/>)
        return(
           <div style={{marginTop:"70px"}} className="container">
            
            <div className="row">
              <div style={{marginTop:"50px"}}>
                {show}
              </div>
             </div>

             <div className="col s10">
                 <button onClick={deleteall} style={{width:"100%",height:"40px"}}
                  className="red darken-2 white-text"> DELETE ALL </button>
             </div>

           </div>
        )
    }
}
export default Container;
/*
<div style={{marginTop:"120px"}} className="row ">
               <div className="col offset-l2">
                  <Card />
               </div>
           </div>
*/

