import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";
import { Result } from "postcss";

const Email = () => {
  const form = useRef();

  const handleClick = () => {
    return (
      <div
        className="rounded border border-green-900/10 bg-green-50 p-4 text-green-700"
        role="alert"
      >
        <strong class="text-sm font-medium">Post has been published</strong>
      </div>
    );
  };
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs
      .sendForm(
        "service_gffug3w",
        "template_ypmu4d4",
        e.target,
        "YoRQhH40w16uXMQ-b"
      )
      .then(
        (result) => {
          console.log(result.text);
          Swal.fire({
            title: "Email has been sent!",
            text: "Thanks for contacting me",
            icon: "success",
            width: "300px",
            height: "150px",
            confirmButtonText: "Ok",
          });
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  return (
    <div id="contact" className="w-full h-screen bg-zinc-800 py-12">
    <div className="bg-zinc-800 h-50 py-4"></div>
    <p className="text-3xl font-bold leading-7 text-center text-gray-100 grid mb-8">
      Contact me
      <span className="text-base font-medium text-center text-gray-100 mt-2">
        Complete the next form and send me by email.
      </span>
    </p>
    <div className="max-w-2xl mx-auto p-px bg-gradient-to-r from-blue-400 to-purple-400 rounded mb-2">
      <div className="bg-gray-900 w-full shadow p-4 sm:p-4">
        <form ref={form} onSubmit={sendEmail}>
          <div className="md:flex items-center mt-2">
            <div className="w-full md:w-1/2 flex flex-col">
              <label className="font-semibold leading-none text-gray-200">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your name"
                className="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-2 bg-gray-100 border rounded border-gray-200"
              />
            </div>
            <div className="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-2">
              <label className="font-semibold leading-none text-gray-200">
                Contact
              </label>
              <input
                type="text"
                name="contact"
                placeholder="Email or number"
                className="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-2 bg-gray-100 border rounded border-gray-200"
              />
            </div>
          </div>
          <div className="md:flex items-center mt-2">
            <div className="w-full flex flex-col">
              <label className="font-semibold leading-none text-gray-200">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                className="leading-none text-gray-900 p-3 focus:outline-none focus:border-blue-700 mt-2 bg-gray-100 border rounded border-gray-200"
              />
            </div>
          </div>
          <div>
            <div className="w-full flex flex-col mt-2">
              <label className="font-semibold leading-none text-gray-200">
                Message
              </label>
              <textarea
                type="text"
                name="message"
                className="h-40 text-base leading-none text-gray-900 p-3 focus:oultine-none focus:border-blue-700 mt-2 bg-gray-100 border rounded border-gray-200"
              ></textarea>
            </div>
          </div>
          <div className="flex items-center justify-center w-full">
            <input
              type="submit"
              value="Send email"
              className="mt-4 font-semibold leading-none text-white py-4 px-10 bg-gradient-to-r from-blue-400 to-purple-400 rounded hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500 hover:cursor-pointer focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none"
              onClick={handleClick}
            ></input>
          </div>
        </form>
      </div>
    </div>
  </div>
  );
};

export default Email;
