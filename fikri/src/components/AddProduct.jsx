import React from 'react'

const AddProduct = () => {
  return (
    <div>
      <form action="" className="box mt-5">
        <div className="field">
          <label htmlFor="" className="label">Title</label>
            <div className="control">
              <input type="text" className="input" placeholder='Title' />
            </div>
        </div>
        <div className="field">
          <label htmlFor="" className="label">Price</label>
            <div className="control">
              <input type="text" className="input" placeholder='Price' />
            </div>
        </div>
        <div className="field">
          <button className="button is-success">Submit</button>
        </div>
      </form>
    </div>
  )
}

export default AddProduct