import React, { useRef } from "react";
import toast from "react-hot-toast";
import { Link } from "react-router-dom";
const Admin = () => {
  const formRef = useRef(null);
  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.target;
    const formData = new FormData(form);
    const resp = await fetch("/api/uploads/story", {
      method: "POST",
      body: formData,
    });
    const data = await resp.json();
    console.log(data);
    if (data.error) {
      toast.error(data.error);
      console.log(data.error);

    } else {
      toast.success(data.message);
      formRef.current.reset();
    }
  };

  const logoutHandler=async()=>{
    try {
      const res=await fetch("/api/auth/logout");
      const data=await res.json();
      if(data.success)
      {
        console.log("LOged OutT");
      }
    } catch (error) {
        console.log(error);
    }
  }
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col">
        <div className="text-center lg:text-left">
          <h1 className="text-4xl font-bold">Enter the Article!</h1>
          <p className="py-1"></p>
        </div>
        <div className="card shrink-0 w-full max-w-md shadow-2xl bg-base-100">
          <form
            ref={formRef}
            className="card-body"
            onSubmit={handleSubmit}
            encType="multipart/form-data"
          >
            <div className="form-control">
              <label className="label">
                <span className="label-text">Headline</span>
              </label>
              <input
                type="text"
                placeholder="Headline"
                name="Headline"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Article</span>
              </label>
              <textarea
                placeholder="Article"
                name="Article"
                className="input input-bordered min-h-[100px]"
                required
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Headline Image</span>
              </label>
              <input
                type="file"
                name="HeaderImage"
                className="file-input file-input-bordered w-full max-w-xs"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Domains</span>
              </label>
              <input
                type="text"
                placeholder="Domain"
                name="Domain"
                className="input input-bordered"
                required
              />
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Publish</button>
            </div>
            <Link  className="btn" onClick={logoutHandler}>LOGOUT</Link>
          </form>
          
        </div>
      </div>
    </div>
  );
};

export default Admin;

{
  /*<form
      onSubmit={handleSubmit}
      encType="multipart/form-data"
      className="p-4 flex flex-col gap-2 items-center align-center"
    >
      <input
        type="text"
        placeholder="Headline"
        name="Headline"
        className="input input-bordered w-full max-w-xs"
      />

      <textarea
        className="textarea-lg textarea-bordered"
        name="Article"
        placeholder="Article"
      ></textarea>
      <input
        type="file"
        name="HeaderImage"
        className="file-input file-input-bordered w-full max-w-xs"
      />
      <input
        type="text"
        placeholder="Domain"
        name="Domain"
        className="input input-bordered w-full max-w-xs"
      />
      <input type="submit" value="Submit" className="btn" />
    </form> */
}
