import React from 'react';
import useForm from '../../utils/useForm';
import axios from 'axios';

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
    <div className="flex justify-around">
    <div className="flex flex-col items-start justify-center w-2/3 mt-12 ml-56">
      <h1 className="w-2/3 text-4xl font-semibold text-custom-orange underline">
        Tyler Arthur
      </h1>
      <p className="w-1/2 self-start text-xl font-medium text-custom-lavender mt-4">
        I am currently looking for work as a developer. If you like what you see, lets get in touch! Contact me, let's get coffee and chat.
      </p>
      <div className="flex w-1/2 justify-around">
        <button className={`w-48 h-12 border border-custom-aqua text-custom-aqua rounded-tr-lg rounded-bl-lg mt-24 focus:outline-none focus:shadow-outline`}>
          Let's get in touch!
        </button>
        <button className={`w-48 h-12 border border-custom-aqua text-custom-aqua rounded-tr-lg rounded-bl-lg mt-24 focus:outline-none focus:shadow-outline`}>
          Go back to the start
        </button>
      </div>
    </div>
      <form onSubmit={handleSubmit} >
        <label className="" for="name">
          Name
        </label>
        <textarea
            name="name"
            type="text"
            placeholder="What's should I call you?"
            onChange={handleChange}
            value={values.name}
            className=""
            required
        ></textarea>
        <label className="" for="email">
          Email
        </label>
        <textarea
            name="email"
            type="email"
            placeholder="Where can I respond?"
            onChange={handleChange}
            value={values.email}
            className=""
            required
        ></textarea>
        <label className="" for="message">
          Message
        </label>
        <textarea
            name="message"
            type="text"
            placeholder="What would you like to say?"
            onChange={handleChange}
            value={values.message}
            className=""
            required
        ></textarea>
        <button>Submit</button>
      </form>
    </div>
  );
}

export default Contact;