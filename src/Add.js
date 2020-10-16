import React, { Component } from 'react';

class Add extends Component{
    render(){
        const{inputhandler,input,add,edit} = this.props
        
        return(
            <div className="container">
            <div style={{height:"120px"}}className="row z-depth-3 center-align">
              
              <div style={{marginLeft:"12%"}}className="col s9 offset-s1 ">
               <input name="add" onChange={inputhandler} value={input} className="center-align"
               placeholder ="Add here to do" style={{width:"100%"}}/>
              </div>

              <div style={{marginLeft:"12%"}} className="col s9 offset-s1">
              <button style={{width:"100%",height:"40px"}} onClick={add}
              className={edit?"btn waves-effect waves-light green darken-4":
              "btn waves-effect waves-light blue darken-4"}>
                  {edit ? "Edit":"Add"} </button>
              </div>

            </div>
            </div>
        )
    }
}
export default Add