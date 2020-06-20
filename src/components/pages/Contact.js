import React from 'react';
import useForm from '../../utils/useForm';
import axios from 'axios';
import { Link } from 'react-router-dom';

const Contact = () => {

  const emailSubmit = () => {
    axios.post("https://formspree.io/xknravez", {values})
    .then(() => console.log("Form Submitted!"))
    .catch(err => console.log(err))
  }

  const { values, handleChange, handleSubmit } = useForm(
    {
        name: "",
        email: "",
        message: ""
    }, emailSubmit
  );

  return (
    <div className="flex justify-around mt-10">
      <div className="flex flex-col items-start justify-center w-2/3 ml-56">
        <h1 className="w-2/3 text-4xl font-semibold text-custom-orange underline mb-10">
          What's Next?
        </h1>
        <p className="w-2/3 self-start text-xl font-medium text-custom-lavender mt-4">
          I am currently looking for work as a developer. If you like what you see, lets get in touch! Contact me, let's get coffee and chat.
        </p>
        <div className="flex w-2/3">
          <Link to="/projects">
            <button className={`w-48 h-12 border border-custom-aqua text-custom-aqua rounded-tr-lg rounded-bl-lg mt-24 mr-16 focus:outline-none focus:shadow-outline`}>
              Back to projects
            </button>
          </Link>
          <Link to="/">
            <button className={`w-48 h-12 border border-custom-aqua text-custom-aqua rounded-tr-lg rounded-bl-lg mt-24 focus:outline-none focus:shadow-outline`}>
              Go back to the start
            </button>
          </Link>
        </div>
      </div>
        <div className="w-2/3 self-center mt-24">
          <form className="flex flex-col justify-center items-start "
            onSubmit={handleSubmit} 
          >
            <label className="text-3xl text-custom-orange" for="name">
              Name
            </label>
            <textarea
              className="w-1/2 text-xl font-semibold rounded-lg text-justify text-center p-2 my-2 focus:outline-none focus:shadow-outline"
              name="name"
              type="text"
              placeholder="What's should I call you?"
              onChange={handleChange}
              value={values.name}
              rows="1"
              required
            ></textarea>
            <label className="text-3xl text-custom-orange" for="email">
              Email
            </label>
            <textarea
            className="w-1/2 text-xl font-semibold rounded-lg text-justify text-center p-2 my-2 focus:outline-none focus:shadow-outline"
              name="email"
              type="email"
              placeholder="Where can I respond?"
              onChange={handleChange}
              value={values.email}
              rows="1"
              required
            ></textarea>
            <label className="text-3xl text-custom-orange" for="message">
              Message
            </label>
            <textarea
            className="w-1/2 text-lg rounded-lg text-justify text-center p-2 my-2 focus:outline-none focus:shadow-outline"
              name="message"
              type="text"
              placeholder="What would you like to say?"
              onChange={handleChange}
              value={values.message}
              rows="4"
              required
            ></textarea>
            <button className="w-48 h-12 border border-custom-aqua text-custom-aqua rounded-tr-lg rounded-bl-lg mt-4 focus:outline-none focus:shadow-outline"
            >Submit</button>
          </form>
      </div>
    </div>
  );
}

export default Contact;