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
    <div className="flex flex-col mx-3 p-6">
      <div className="text-center">
        <h1 className="text-4xl font-medium text-custom-orange underline">
          What's Next?
        </h1>
        <p className="text-xl font-medium text-custom-lavender">
          I am currently looking for work as a developer. If you like what you see, lets get in touch! Contact me, let's get coffee and chat.
        </p>
      </div>
      <form className="py-5"
        onSubmit={handleSubmit}>
        <label className="text-3xl text-custom-orange" htmlFor="name">
          Name
        </label>
        <textarea
          className=" text-xl font-semibold w-full rounded-lg text-justify text-center p-2 my-2 focus:outline-none focus:shadow-outline"
          name="name"
          type="text"
          placeholder="What's should I call you?"
          onChange={handleChange}
          value={values.name}
          rows="1"
          required
        ></textarea>
        <label className="text-3xl text-custom-orange" htmlFor="email">
          Email
        </label>
        <textarea
        className=" text-xl font-semibold w-full rounded-lg text-justify text-center p-2 my-2 focus:outline-none focus:shadow-outline"
          name="email"
          type="email"
          placeholder="Where can I respond?"
          onChange={handleChange}
          value={values.email}
          rows="1"
          required
        ></textarea>
        <label className="text-3xl text-custom-orange" htmlFor="message">
          Message
        </label>
        <textarea
        className=" text-lg w-full rounded-lg text-justify text-center p-2 my-2 focus:outline-none focus:shadow-outline"
          name="message"
          type="text"
          placeholder="What would you like to say?"
          onChange={handleChange}
          value={values.message}
          rows="4"
          required
        ></textarea>
        <button className="flex-wrap flex-shrink p-2 border border-custom-aqua text-custom-aqua rounded-tr-lg rounded-bl-lg focus:outline-none focus:shadow-outline"
        >Submit</button>
      </form>
      <div className="h-1 w-full rounded-full bg-custom-orange"></div>
      <div className="flex justify-around mt-6">
        <Link to="/projects">
          <button className="flex-wrap flex-shrink p-2 border border-custom-aqua text-custom-aqua rounded-tr-lg rounded-bl-lg focus:outline-none focus:shadow-outline">
            Go Back
          </button>
        </Link>
        <Link to="/">
          <button className="flex-grow flex-shrink p-2 border border-custom-aqua text-custom-aqua rounded-tr-lg rounded-bl-lg focus:outline-none focus:shadow-outline">
            Start Over
          </button>
        </Link>
      </div>
    </div>
  );
}

export default Contact;