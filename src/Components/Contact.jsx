import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="flex flex-col h-auto pb-10 md:pb-0 w-full items-center justify-center lg:flex-row">
      <div className=" md:w-1/3 h-60 flex flex-col justify-evenly ">
        <h1 className="py-2 text-4xl font-extrabold">Get in Touch</h1>
        <span>
        <h2 className="pb-4">Contact me via</h2>
        <p className="text-gray-400 text-base">My Email - nagdiyaakshay@gmail.com</p>
        <p className="text-gray-400 text-base">My Contact no - 7415001617</p>
        <p className="text-gray-400 text-base">WhatsApp - 7415001617</p>
        </span>
      </div>
      <div className=" w-full md:w-1/3 h-60 flex items-center justify-between flex-col md:px-20 px-14">
        <input className="p-2 rounded-lg border-none w-full" placeholder="Name" type="text" name="User Name" id="" />
        <input className="p-2 rounded-lg border-none w-full" placeholder="E-mail" type="email" name="email" id="" />
        <textarea placeholder="Message" name="message" id="" cols="30" rows="4" class="w-full p-2 rounded-lg text-sm text-gray-900 bg-white border-0 dark:bg-gray-800 focus:ring-0 dark:text-white dark:placeholder-gray-400"></textarea>
        <button className="bg-blue-500 p-2 rounded-lg w-full hover:bg-blue-800">Send</button>
      </div>
    </div>
  );
};

export default Contact;
