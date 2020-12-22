import React, { useState } from "react";

// react-hook-form
import { useForm } from "react-hook-form";

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
      <div className="fixed w-full h-screen flex justify-center items-center top-0 z-50">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col w-72 mx-auto z-50"
        >
          <input
            name="name"
            ref={register({ requiered: "Please provide your name." })}
            placeholder="name"
            className="rounded-full py-2 pl-4 text-lg shadow-xl mb-4"
          />
          <input
            name="email"
            ref={register({ requiered: "Please provide a valid email." })}
            placeholder="email"
            className="rounded-full py-2 pl-4 text-lg shadow-xl mb-4"
          />
          <textarea
            name="text"
            ref={register}
            placeholder="please write additional info here"
            className="rounded-2xl py-2 pl-4 text-lg shadow-xl mb-4 h-32"
          />

          <input
            type="submit"
            className="rounded-full py-2 text-lg shadow-xl mb-4 bg-tone font-bold cursor-pointer hover:opacity-75 duration-300"
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
