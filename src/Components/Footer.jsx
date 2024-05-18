import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <div className=" h-60 w-full footer">
      <div className="flex justify-center items-center h-full w-full">
        <div className="flex justify-center items-center mt-10 cursor-pointe">
          <motion.a
            whileHover={{ scale: 1.2 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
            href="https://msng.link/o?Akshay Nagdiya=li"
            className="fill-white hover:fill-white pr-8"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              className="md:w-20 md:h-20 w-10 h-10 "
              viewBox="0 0 50 50"
            >
              <path d="M 8 3.0117188 C 6.3126093 3.0117188 4.8354789 3.4916328 3.7539062 4.3652344 C 2.6723337 5.238836 2.0117188 6.533218 2.0117188 7.9472656 C 2.0117188 10.690836 4.4687078 12.814467 7.7167969 12.941406 A 0.98809878 0.98809878 0 0 0 8 12.988281 C 9.753566 12.988281 11.246191 12.474267 12.3125 11.564453 C 13.378809 10.654639 13.988281 9.3429353 13.988281 7.9472656 A 0.98809878 0.98809878 0 0 0 13.986328 7.8925781 C 13.832307 5.1316834 11.374781 3.0117187 8 3.0117188 z M 8 4.9882812 C 10.60907 4.9882812 11.895883 6.2693448 12.005859 7.9726562 C 11.998759 8.8049335 11.676559 9.5118991 11.03125 10.0625 C 10.378809 10.619186 9.371434 11.011719 8 11.011719 C 5.3980542 11.011719 3.9882813 9.5991704 3.9882812 7.9472656 C 3.9882812 7.1213132 4.3276663 6.4422421 4.9960938 5.9023438 C 5.6645211 5.3624454 6.6873907 4.9882813 8 4.9882812 z M 3 15 A 1.0001 1.0001 0 0 0 2 16 L 2 45 A 1.0001 1.0001 0 0 0 3 46 L 13 46 A 1.0001 1.0001 0 0 0 14 45 L 14 35.664062 L 14 16 A 1.0001 1.0001 0 0 0 13 15 L 3 15 z M 18 15 A 1.0001 1.0001 0 0 0 17 16 L 17 45 A 1.0001 1.0001 0 0 0 18 46 L 28 46 A 1.0001 1.0001 0 0 0 29 45 L 29 29 L 29 28.75 L 29 28.5 C 29 26.555577 30.555577 25 32.5 25 C 34.444423 25 36 26.555577 36 28.5 L 36 45 A 1.0001 1.0001 0 0 0 37 46 L 47 46 A 1.0001 1.0001 0 0 0 48 45 L 48 28 C 48 23.873476 46.787888 20.604454 44.744141 18.375 C 42.700394 16.145546 39.849212 15 36.787109 15 C 32.882872 15 30.521631 16.426076 29 17.601562 L 29 16 A 1.0001 1.0001 0 0 0 28 15 L 18 15 z M 4 17 L 12 17 L 12 35.664062 L 12 44 L 4 44 L 4 17 z M 19 17 L 27 17 L 27 19.638672 A 1.0001 1.0001 0 0 0 28.744141 20.306641 C 28.744141 20.306641 31.709841 17 36.787109 17 C 39.360007 17 41.615528 17.922268 43.269531 19.726562 C 44.923534 21.530858 46 24.261524 46 28 L 46 44 L 38 44 L 38 28.5 A 1.0001 1.0001 0 0 0 37.916016 28.089844 C 37.694061 25.26411 35.38033 23 32.5 23 C 29.474423 23 27 25.474423 27 28.5 L 27 28.75 L 27 29 L 27 44 L 19 44 L 19 17 z"></path>
            </svg>
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
            href="https://github.com/AkshayNagdiya"
            target="_blank"
            className="fill-white pr-8"
          >
            <svg
              class="group-hover:scale-150 duration-300"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              className="md:w-20 md:h-20 w-10 h-10"
              viewBox="0 0 50 50"
            >
              <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"></path>
            </svg>
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
            href="https://msng.link/o?nagdiyaakshay@gmail.com=sk"
            target="_blank"
            className="fill-white pr-8"
          >
            <svg
              class="group-hover:scale-150 duration-300"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              className="md:w-20 md:h-20 w-10 h-10"
              viewBox="0 0 50 50"
            >
              <path d="M 14.28125 0 C 6.410156 0 0 6.324219 0 14.09375 C 0 16.476563 0.621094 18.800781 1.78125 20.875 C 1.507813 22.3125 1.375 23.792969 1.375 25.25 C 1.375 38.25 12.074219 48.8125 25.25 48.8125 C 26.601563 48.8125 27.953125 48.722656 29.28125 48.5 C 31.257813 49.488281 33.480469 50 35.71875 50 C 43.589844 50 50 43.675781 50 35.90625 C 50 33.820313 49.539063 31.828125 48.65625 29.96875 C 48.976563 28.433594 49.15625 26.847656 49.15625 25.25 C 49.15625 12.253906 38.425781 1.6875 25.25 1.6875 C 24.011719 1.6875 22.761719 1.78125 21.53125 1.96875 C 19.335938 0.683594 16.847656 0 14.28125 0 Z M 25.09375 9.375 C 27.140625 9.375 28.933594 9.597656 30.4375 10.0625 C 31.945313 10.523438 33.222656 11.136719 34.21875 11.90625 C 35.226563 12.683594 35.996094 13.511719 36.46875 14.375 C 36.945313 15.246094 37.1875 16.132813 37.1875 16.96875 C 37.1875 17.777344 36.84375 18.484375 36.21875 19.125 C 35.59375 19.765625 34.808594 20.09375 33.875 20.09375 C 33.027344 20.09375 32.367188 19.898438 31.90625 19.5 C 31.476563 19.125 31.023438 18.554688 30.53125 17.71875 C 29.960938 16.648438 29.292969 15.777344 28.5 15.1875 C 27.730469 14.613281 26.421875 14.34375 24.65625 14.34375 C 23.015625 14.34375 21.675781 14.640625 20.6875 15.28125 C 19.730469 15.898438 19.28125 16.628906 19.28125 17.46875 C 19.28125 17.984375 19.441406 18.410156 19.75 18.78125 C 20.078125 19.171875 20.511719 19.496094 21.09375 19.78125 C 21.695313 20.078125 22.316406 20.332031 22.9375 20.5 C 23.574219 20.671875 24.660156 20.945313 26.125 21.28125 C 27.976563 21.675781 29.679688 22.089844 31.1875 22.5625 C 32.710938 23.046875 34.019531 23.652344 35.09375 24.34375 C 36.1875 25.046875 37.070313 25.949219 37.6875 27.03125 C 38.304688 28.113281 38.59375 29.441406 38.59375 31 C 38.589844 32.859375 38.066406 34.546875 37 36.03125 C 35.9375 37.511719 34.371094 38.703125 32.34375 39.53125 C 30.335938 40.351563 27.925781 40.75 25.1875 40.75 C 21.898438 40.75 19.148438 40.191406 17 39.0625 C 15.460938 38.246094 14.175781 37.117188 13.21875 35.75 C 12.242188 34.367188 11.75 33.011719 11.75 31.6875 C 11.75 30.863281 12.085938 30.152344 12.71875 29.5625 C 13.347656 28.984375 14.136719 28.6875 15.09375 28.6875 C 15.878906 28.6875 16.574219 28.914063 17.125 29.375 C 17.65625 29.816406 18.105469 30.472656 18.46875 31.3125 C 18.875 32.230469 19.308594 32.980469 19.78125 33.59375 C 20.226563 34.175781 20.863281 34.679688 21.6875 35.0625 C 22.515625 35.453125 23.652344 35.65625 25.03125 35.65625 C 26.925781 35.65625 28.460938 35.253906 29.625 34.46875 C 30.765625 33.703125 31.34375 32.785156 31.34375 31.65625 C 31.34375 30.765625 31.03125 30.046875 30.4375 29.5 C 29.8125 28.925781 28.992188 28.492188 28 28.1875 C 26.957031 27.871094 25.558594 27.519531 23.8125 27.15625 C 21.4375 26.652344 19.417969 26.046875 17.8125 25.375 C 16.167969 24.683594 14.84375 23.722656 13.875 22.53125 C 12.890625 21.316406 12.375 19.820313 12.375 18.03125 C 12.375 16.324219 12.902344 14.761719 13.9375 13.4375 C 14.957031 12.125 16.449219 11.105469 18.375 10.40625 C 20.273438 9.710938 22.539063 9.375 25.09375 9.375 Z"></path>
            </svg>
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
            href="https://wa.link/gsgapk"
            className="fill-white pr-8"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              className="md:w-20 md:h-20 w-10 h-10"
              viewBox="0 0 24 24"
            >
              <path d="M 12 2 C 6.5 2 2 6.5 2 12 C 2 13.8 2.5007813 15.5 3.3007812 17 L 2 22 L 7.1992188 20.800781 C 8.6992188 21.600781 10.3 22 12 22 C 17.5 22 22 17.5 22 12 C 22 9.3 20.999609 6.8003906 19.099609 4.9003906 C 17.199609 3.0003906 14.7 2 12 2 z M 12 4 C 14.1 4 16.099219 4.8007813 17.699219 6.3007812 C 19.199219 7.9007813 20 9.9 20 12 C 20 16.4 16.4 20 12 20 C 10.7 20 9.2992188 19.7 8.1992188 19 L 7.5 18.599609 L 6.8007812 18.800781 L 4.8007812 19.300781 L 5.3007812 17.5 L 5.5 16.699219 L 5.0996094 16 C 4.3996094 14.8 4 13.4 4 12 C 4 7.6 7.6 4 12 4 z M 8.5 7.4003906 C 8.3 7.4003906 8.0007812 7.3992188 7.8007812 7.6992188 C 7.5007813 7.9992188 6.9003906 8.6007813 6.9003906 9.8007812 C 6.9003906 11.000781 7.8003906 12.200391 7.9003906 12.400391 C 8.1003906 12.600391 9.6992188 15.199219 12.199219 16.199219 C 14.299219 16.999219 14.699219 16.800781 15.199219 16.800781 C 15.699219 16.700781 16.700391 16.199609 16.900391 15.599609 C 17.100391 14.999609 17.099219 14.499219 17.199219 14.199219 C 17.099219 14.099219 16.999219 14.000391 16.699219 13.900391 C 16.499219 13.800391 15.3 13.199609 15 13.099609 C 14.7 12.999609 14.600391 12.899219 14.400391 13.199219 C 14.200391 13.499219 13.699609 13.999219 13.599609 14.199219 C 13.499609 14.399219 13.399609 14.400781 13.099609 14.300781 C 12.899609 14.200781 12.099609 13.999609 11.099609 13.099609 C 10.299609 12.499609 9.7992187 11.700391 9.6992188 11.400391 C 9.4992187 11.200391 9.7007813 11.000391 9.8007812 10.900391 L 10.199219 10.5 C 10.299219 10.4 10.300391 10.199609 10.400391 10.099609 C 10.500391 9.9996094 10.500391 9.8992188 10.400391 9.6992188 C 10.300391 9.4992187 9.7996094 8.3007812 9.5996094 7.8007812 C 9.3996094 7.4007812 9.2 7.4003906 9 7.4003906 L 8.5 7.4003906 z"></path>
            </svg>
          </motion.a>
          <motion.a
            whileHover={{ scale: 1.2 }}
            onHoverStart={(e) => {}}
            onHoverEnd={(e) => {}}
            href="https://msng.link/o?nagdiyaakshay@gmail.com=sk"
            className="fill-white pr-8"
            target="_blank"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              className="md:w-20 md:h-20 w-10 h-10"
              viewBox="0 0 100 100"
            >
              <path d="M 21 20 C 15.488666 20 11 24.488666 11 30 L 11 74 C 11 77.301625 13.698375 80 17 80 L 30 80 A 1.0001 1.0001 0 0 0 31 79 L 31 50.091797 L 49.400391 63.800781 C 49.580391 63.930781 49.79 64 50 64 C 50.21 64 50.409844 63.940547 50.589844 63.810547 L 69 50.515625 L 69 79 A 1.0001 1.0001 0 0 0 70 80 L 83 80 C 86.301625 80 89 77.301625 89 74 L 89 30 C 89 24.488666 84.511334 20 79 20 L 78.990234 20 C 76.901015 20 74.776479 20.657697 72.978516 22.011719 L 50 39.328125 L 27.021484 22.011719 C 25.223521 20.657697 23.098985 20 21.009766 20 L 21 20 z M 21 22 L 21.009766 22 C 22.680546 22 24.376323 22.523397 25.818359 23.609375 L 29 26.007812 L 29 46.724609 L 13 34.798828 L 13 30 C 13 25.569334 16.569334 22 21 22 z M 78.990234 22 L 79 22 C 83.430666 22 87 25.569334 87 30 L 87 34.798828 L 71 46.724609 L 71 26.007812 L 74.181641 23.609375 C 75.623677 22.523397 77.319454 22 78.990234 22 z M 30 26.759766 L 49.263672 41.277344 A 1.0001 1.0001 0 0 0 49.951172 41.585938 A 1.0001 1.0001 0 0 0 50.001953 41.587891 A 1.0001 1.0001 0 0 0 50.728516 41.283203 L 70 26.759766 L 70 47.322266 L 50.009766 61.759766 L 30 47.320312 L 30 26.759766 z M 66.509766 33.275391 A 0.50005 0.50005 0 0 0 66.199219 33.380859 L 60.279297 37.839844 A 0.50058879 0.50058879 0 1 0 60.882812 38.638672 L 66.800781 34.179688 A 0.50005 0.50005 0 0 0 66.509766 33.275391 z M 13 36.046875 L 29 47.972656 L 29 48.794922 L 29 49 L 29 78 L 17 78 C 14.779625 78 13 76.220375 13 74 L 13 36.046875 z M 87 36.046875 L 87 74 C 87 76.220375 85.220375 78 83 78 L 71 78 L 71 49.070312 L 71 48.535156 A 0.50005 0.50005 0 0 0 71 48.5 L 71 47.972656 L 87 36.046875 z M 58.992188 38.939453 A 0.50005 0.50005 0 0 0 58.681641 39.044922 L 56.904297 40.382812 A 0.50005 0.50005 0 1 0 57.505859 41.181641 L 59.283203 39.84375 A 0.50005 0.50005 0 0 0 58.992188 38.939453 z M 42.474609 40.056641 A 0.50005 0.50005 0 0 0 42.199219 40.958984 L 44.246094 42.501953 A 0.50005 0.50005 0 1 0 44.847656 41.703125 L 42.800781 40.160156 A 0.50005 0.50005 0 0 0 42.474609 40.056641 z M 55.617188 41.482422 A 0.50005 0.50005 0 0 0 55.306641 41.585938 L 51.96875 44.101562 A 0.50005 0.50005 0 1 0 52.570312 44.898438 L 55.908203 42.384766 A 0.50005 0.50005 0 0 0 55.617188 41.482422 z M 46.119141 42.800781 A 0.50005 0.50005 0 0 0 45.84375 43.705078 L 48.757812 45.898438 A 0.50005 0.50005 0 1 0 49.359375 45.101562 L 46.445312 42.90625 A 0.50005 0.50005 0 0 0 46.119141 42.800781 z M 16.492188 43.992188 A 0.50005 0.50005 0 0 0 16 44.5 L 16 51.5 A 0.50005 0.50005 0 1 0 17 51.5 L 17 44.5 A 0.50005 0.50005 0 0 0 16.492188 43.992188 z M 16.492188 53.992188 A 0.50005 0.50005 0 0 0 16 54.5 L 16 55.5 A 0.50005 0.50005 0 1 0 17 55.5 L 17 54.5 A 0.50005 0.50005 0 0 0 16.492188 53.992188 z M 16.492188 57.992188 A 0.50005 0.50005 0 0 0 16 58.5 L 16 60.5 A 0.50005 0.50005 0 1 0 17 60.5 L 17 58.5 A 0.50005 0.50005 0 0 0 16.492188 57.992188 z M 16.492188 62.992188 A 0.50005 0.50005 0 0 0 16 63.5 L 16 73.5 C 16 74.322531 16.677469 75 17.5 75 L 24.5 75 A 0.50005 0.50005 0 1 0 24.5 74 L 17.5 74 C 17.218531 74 17 73.781469 17 73.5 L 17 63.5 A 0.50005 0.50005 0 0 0 16.492188 62.992188 z"></path>
            </svg>
          </motion.a>
        </div>
      </div>
      <div className="flex items-center justify-center w-full bg-[#0099ff]">
      <p className="flex text-base mb-10">© All right reserved, Akshay Portfolio, Inc.</p>
      </div>
    </div>
  );
};

export default Footer;