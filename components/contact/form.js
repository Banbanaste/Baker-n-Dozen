import React, { useState } from "react";

// react-hook-form
import { useForm } from "react-hook-form";
import { ErrorMessage } from "@hookform/error-message";

export default function Form({ show, setShowMenu }) {
  // form  init
  const { register, handleSubmit, watch, errors } = useForm();

  // form submission handler function
  // POST form data to server
  const onSubmit = (data) => {
    console.log(data);
    fetch("/api/contact", {
      method: "post",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((res) => {
      res.status === 200 ? setShowMenu(false) : "";
    });
  };

  return show ? (
    <>
      <div
        className="fixed w-full h-screen flex justify-center items-center top-0 z-50"
        data-aos="fade"
        data-aos-delay="200"
      >
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col w-72 mx-auto z-50 bg-gray-500 p-8 rounded-lg"
        >
          <div className="transform mx-auto absolute w-full left-0 flex flex-col justify-center items-center space-y-4 -translate-y-32 -mt-4">
            <ErrorMessage
              errors={errors}
              name="name"
              render={({ message }) => (
                <p className="bg-red-500 font-bold p-2 text-white inline-block rounded w-72">
                  {message}
                </p>
              )}
            />
            <ErrorMessage
              errors={errors}
              name="email"
              render={({ message }) => (
                <p className="bg-red-500 font-bold p-2 text-white inline-block rounded w-72">
                  {message}
                </p>
              )}
            />
          </div>
          <input
            name="name"
            ref={register({ required: "Please provide your name." })}
            placeholder="Name"
            className="rounded-full py-2 pl-4 text-lg shadow-xl mb-4"
          />
          <input
            name="email"
            ref={register({ required: "Please provide a valid email." })}
            placeholder="eMail"
            className="rounded-full py-2 pl-4 text-lg shadow-xl mb-4"
          />
          <input
            name="phone"
            ref={register}
            placeholder="Phone Number"
            className="rounded-full py-2 pl-4 text-lg shadow-xl mb-4"
          />
          <input
            name="companyName"
            ref={register}
            placeholder="Company Name"
            className="rounded-full py-2 pl-4 text-lg shadow-xl mb-4"
          />
          <textarea
            name="text"
            ref={register}
            placeholder="Please write additional info here"
            className="rounded-2xl py-2 pl-4 text-lg shadow-xl mb-4 h-32"
          />

          <input
            type="submit"
            className="rounded-full py-2 text-lg shadow-xl bg-tone font-bold cursor-pointer hover:opacity-75 duration-300"
          />
        </form>
        <div
          className="bg-dark bg-opacity-75 fixed w-full h-screen flex justify-center items-center top-0 z-20"
          onClick={() => setShowMenu(false)}
        />
      </div>
    </>
  ) : null;
}
