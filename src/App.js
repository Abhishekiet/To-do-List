import React, { Component } from 'react';
import Container from './Container'
import './App.css';
import Add from './Add'
import './Coustom.css';

 class App extends Component{
    constructor(props)
    {
      super(props)
      this.state ={
        data : [] ,
        input:"",
        edit:false

      }
    }
  inputhandler=(e)=>
  {
    this.setState({ input :e.target.value })
  } 
  
  add=(e)=>{
    e.preventDefault()
    const newobj = {name: this.state.input ,id:Date.now() }
    const array = [...this.state.data , newobj]
    this.setState({data:array , input:"" , edit:false})
    console.log(this.state.data)
  }
  deleteall=()=>{
    this.setState({data:[]})
  }
  deleteitem=(id)=>{
    const array = this.state.data.filter(item=>item.id !== id)    
    this.setState({data:array})
  }
  edititem=(id)=>{
    const array = this.state.data.filter(item=>item.id !== id)    
    const selected = this.state.data.find(item => item.id === id)
    
    this.setState({input:selected.name , data:array ,edit:true })
       console.log(selected)
    }
   render()
   {
  
     return(
      <div style={{marginTop:"-20px"}}className="">
      <div className="row">
        <h1 style={{textDecoration:"underline skyblue"}} className="black-text center">To-Do List </h1>
        <h5 style={{marginTop:"-14px"}}className="col s5 grey-text text-darken-2 offset-s7">- By Abhishek Dameria </h5>
      </div>

         <Add inputhandler={this.inputhandler} input={this.state.input} add={this.add} edit={this.state.edit}/>
         <Container data={this.state.data} deleteall={this.deleteall} deleteitem={this.deleteitem}
         edititem={this.edititem}/>
     
      </div>
     )
   }
 }

export default App;
