import React, { useState, useEffect } from "react";
import { useLottie } from "lottie-react";
import ContactImg from "../public/assets/contact.json";
import Swal from "sweetalert2";

export default function Contact() {
  const options = {
    loop: true,
    autoplay: true,
    animationData: ContactImg,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  const { View } = useLottie(options);

  const [buttonText, setButtonText] = useState("Send");

  const fetchGo = () => {
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbxK-c9X-v8cjbDjEeddO9R5891H7_bIRgjFUk21vuyWSYMRrjuG4EKng5QyzSMBDsKO/exec";
    const form: HTMLFormElement = document.getElementsByName(
      "dims-code"
    )[0] as HTMLFormElement;
    function myTrigger() {
      Swal.fire({
        title: "Success!",
        text: "Your message has been sent!",
        icon: "success",
        confirmButtonText: "oke",
      });
    }
    form.addEventListener("submit", (e: { preventDefault: () => void }) => {
      // konfirmasi kirim pesan ke user
      e.preventDefault();
      Swal.fire({
        title: "Are you sure?",
        text: "Your message will be sent!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, send it!",
      }).then((result) => {
        if (result.isConfirmed) {
          setButtonText("Sending...");
          fetch(scriptURL, { method: "POST", body: new FormData(form) })
            .then((response) => {
              console.log(response);
              setButtonText("Send");
              form.reset();
              myTrigger();
            })
            .catch((error) => {
              console.error("Error!", error.message);
              setButtonText("Send");
              Swal.fire({
                title: "Error!",
                text: "Your message has not been sent!",
                icon: "error",
                confirmButtonText: "oke",
              });
            });
        } else {
          setButtonText("Send");
        }
      });
    });
  };

  useEffect(() => {
    fetchGo();
  });

  return (
    <section id="Contact" className="bg-blue-gray-100 dark:bg-blueDark">
      <div className="container mx-auto px-6 mt-10">
        <h2 className="text-4xl font-bold text-center  text-bgBlueLight dark:text-white mb-10">
          Contact
        </h2>
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2 flex items-center">
            <div className="w-full">{View}</div>
          </div>
          <div className="w-full md:w-1/2">
            <h3 className="text-3xl myFont text-center text-bgBlueLight dark:text-gray-50">
              Get In Touch
            </h3>
            <form
              name="dims-code"
              className="w-full grid md:grid-cols-2 grid-cols-1 gap-3 mt-7"
            >
              <div className="w-full">
                <input
                  type="text"
                  className="w-full h-10 py-7 px-5 placeholder:text-blueDark dark:placeholder:text-gray-100 bg-gray-100 dark:bg-whiteTransparent text-bgBlueLight dark:text-gray-100 border border-gray-300 dark:border-gray-700 rounded-lg focus:border-indigo-500 focus:bg-white focus:ring-0"
                  placeholder="First Name"
                  name="fisrt-name"
                  required
                />
              </div>
              <div className="w-full">
                <input
                  type="text"
                  className="w-full h-10 py-7 px-5 placeholder:text-blueDark dark:placeholder:text-gray-100 bg-gray-100 dark:bg-whiteTransparent text-bgBlueLight dark:text-gray-100 border border-gray-300 dark:border-gray-700 rounded-lg focus:border-indigo-500 focus:bg-white focus:ring-0"
                  placeholder="Last Name"
                  name="last-name"
                  required
                />
              </div>
              <div className="w-full">
                <input
                  type="email"
                  className="w-full h-10 py-7 px-5 placeholder:text-blueDark dark:placeholder:text-gray-100 bg-gray-100 dark:bg-whiteTransparent text-bgBlueLight dark:text-gray-100 border border-gray-300 dark:border-gray-700 rounded-lg focus:border-indigo-500 focus:bg-white focus:ring-0"
                  placeholder="Email Address"
                  name="email"
                  required
                />
              </div>
              <div className="w-full">
                <input
                  type="tel"
                  className="w-full h-10 py-7 px-5 placeholder:text-blueDark dark:placeholder:text-gray-100 bg-gray-100 dark:bg-whiteTransparent text-bgBlueLight dark:text-gray-100 border border-gray-300 dark:border-gray-700 rounded-lg focus:border-indigo-500 focus:bg-white focus:ring-0"
                  placeholder="Phone Number"
                  name="no"
                  required
                />
              </div>
              <div className="w-full md:col-span-2">
                <textarea
                  className="w-full h-32 py-3 px-5  placeholder:text-blueDark dark:placeholder:text-gray-100 bg-gray-100 dark:bg-whiteTransparent text-bgBlueLight dark:text-gray-100 border border-gray-300 dark:border-gray-700 rounded-lg focus:border-indigo-500 focus:bg-white focus:ring-0"
                  placeholder="Message"
                  name="massage"
                  required
                ></textarea>
              </div>
              <div className="w-48">
                <button
                  type="submit"
                  className="w-full h-10 py-7 flex items-center justify-center bg-indigo-800 dark:bg-indigo-500 text-white font-bold rounded-lg hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-75"
                >
                  {buttonText}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
