import React, { Component } from 'react'

export default class Input extends Component {
    FormChange = (event)=>{
        console.log(event.target.value)
    }
    CheckboxHandler=(event)=>{
      this.setState({
        checkBox:event.target.checked
      })
    }
  render() {
    return (
      <div className='container'>
        <input type="text"  name='ChannelName' className='form-control' placeholder='Channel Name' onChange={this.FormChange}/>
        <input type="text"  name='ChannelName' className='form-control' placeholder='Subscriber' onChange={this.FormChange}/>

        <select name="category" onChange={this.FormChange} className='form-control'>
          <option value="programming">Select</option>
          <option value="programming">Programming</option>
          <option value="funny">Funny</option>
          <option value="educations">Educations</option>
          <option value="entertainment">Entertainment</option>
        </select>

        <input type="date" name='CreationDate' onChange={this.FormChange} className='form-control'/>
        <textarea name="About" onChange={this.FormChange} placeholder='Tell Me About YourSelf' className='form-control'></textarea>
        <div>
          <input type="radio" value= "Male" name="gender" onChange={this.FormChange}/>
          <label>Male</label>
          <input type="radio" value="Female" name="gender" onChange={this.FormChange}/>
          <label>Female</label>
        </div>
        <input type="checkbox" name="checkbox" onChange={this.CheckboxHandler}/>
      </div>
    )
  }
}
