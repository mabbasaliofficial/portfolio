import React, { useRef } from "react";
import emailjs from '@emailjs/browser';
import toast from 'react-hot-toast';


const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_6avauun', 'template_d2rpol8', form.current, 'VVnJFSXZjtFdSqv1-')
        .then((result) => {
            console.log(result.text);
            toast.success('Your message send successfully');
            e.target.reset();
        }, (error) => {
            console.log(error.text);
        });
    };
  return (
    <div id="contact">
        <h1 className="text-3xl font-bold divider mb-10">Contact Me</h1>
      <div className="card lg:w-1/2 lg:mx-auto mx-5 shadow-2xl bg-base-100 border">
        <div className="card-body">
          <form ref={form} onSubmit={sendEmail}>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" placeholder="Your Name" name="user_name" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" placeholder="Email" name="user_email" className="input input-bordered" />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Message</span>
              </label>
              <textarea className="textarea textarea-bordered" name="message" placeholder="Message"></textarea>
            </div>
            <div className="form-control mt-6">
              <input type="submit" value="Submit" className="btn btn-primary" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
