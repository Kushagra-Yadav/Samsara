import React from 'react'

const Subscription = () => {
  return (
    <form>
    <h6 className="footer-title">Newsletter</h6> 
    <fieldset className="form-control w-20 md:w-80">
      <label className="label">
        <span className="label-text h-4 md:h-8">Enter your email address</span>
      </label> 
      <div className="join">
        <input type="text" placeholder="username@site.com" className="input input-bordered join-item" /> 
        <button className="btn btn-primary join-item px-2 md:px-[1rem]">Subscribe</button>
      </div>
    </fieldset>
  </form>
  )
}

export default Subscription;