import React, { Component } from 'react';
import './Coustom.css';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import EditOutlinedIcon from '@material-ui/icons/EditOutlined';
import EditIcon from '@material-ui/icons/Edit';


class Card extends Component{
    render(){
        return(
        <div style={{marginTop:"-10PX"}} >
            <div style={{height:"60px"}} className="row grey lighten-2 z-depth-1">
                <div className="col s10">
                   <h4 style={{marginLeft:"30px",marginTop:"6px"}}> {this.props.name} </h4>
                 </div>

                 <div className="col s2">
                       <button style={{marginTop:"10px"}}  className="red" onClick={this.props.deleteitem}>
                       <DeleteOutlineOutlinedIcon /></button>
                       
                       <button style={{marginTop:"10px",marginLeft:"30%"}} className="yellow" onClick={this.props.edititem}>
                       <EditIcon/></button>
                 </div>
           </div>
        </div>
        )
    }
}
export default Card;

/*
<div style={{height:"86px"}}className="card center grey lighten-3 row" >
              
               <h1>this is the card component</h1>
               <div className="right">
                 <DeleteIcon />
               </div>
           </div>
*/ 