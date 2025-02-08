import React from 'react'

function Footer() {
  return (
    <>
    <div className='bg-light p-4'>
      <div className='container'>
        <div className='row'>
          <div className="col-md-8">
            <h3>Newsletter Subcription.</h3>
            <p className='widthSmall'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam deserunt fugiat enim, ab vel corrupti suscipit mollitia deleniti facilis, itaque dolorem, aut cum nam aliquid aspernatur consectetur optio aliquam amet.</p>
          </div>
          <div className="col-md-4">
            <div className="input-group mt-5">
              <input type="text" className='form-control' placeholder='Enter Your Email'/>
              <img src="img/send.svg" alt="" className='input-group-text'/>
            </div>
          </div>
        </div>
      </div>
    </div>
    <p className='text-center mt-5 mb-5'>Copyright all rights reserved by Mehedi Amin</p>
    </>
  )
}

export default Footer