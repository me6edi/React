import React, { Component } from 'react'
export default class Input extends Component {
    state = {
      ChannelName:"",
      category:"",
      creationDate:"",
      About:"",
      gender:"",
      checkbox:false,
    }
    FormChange = (event)=>{
        this.setState({
          [event.target.name]: event.target.value
        })
    }
    CheckboxHandler=(event)=>{
      this.setState({
        checkbox:event.target.checked
      })
    }
  render() {
    const {ChannelName,Subscriber,category,creationDate,checkbox} = this.state
    return (
      <div className='container'>
        <input type="text"  name='ChannelName' className='form-control' placeholder='Channel Name' onChange={this.FormChange} value={ChannelName}/>
        <input type="text"  name='Subscriber' className='form-control' placeholder='Subscriber' onChange={this.FormChange} value={Subscriber}/>
        <select name="category" onChange={this.FormChange} className='form-control' value={category}>
          <option value="programming">Select</option>
          <option value="programming">Programming</option>
          <option value="funny">Funny</option>
          <option value="educations">Educations</option>
          <option value="entertainment">Entertainment</option>
        </select>
        <input type="date" name='creationDate' onChange={this.FormChange} className='form-control' value={creationDate}/>
        <textarea name="About" onChange={this.FormChange} placeholder='Tell Me About YourSelf' className='form-control'></textarea>
        <div>
          <input type="radio" value= "Male" name="gender" onChange={this.FormChange}/>
          <label>Male</label>
          <input type="radio" value="Female" name="gender" onChange={this.FormChange}/>
          <label>Female</label>
        </div>
        <input type="checkbox" name="checkbox" checked={checkbox} onChange={this.CheckboxHandler}/>
        <label>I Agree & Continue</label>
        <br />
        <button className='btn btn-primary' onClick={()=> console.log(this.state)}>
          Submit
        </button>
      </div>
    )
  }
}
