import React from "react";
import redux from "../assets/redux.png";
import axios from "../assets/axios.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Skills = () => {
  return (
    <div id="skills" className="h-full md:px-16 lg:px-40 px-6" data-aos="fade-up">
      <p className="text-gray-300">SKILLS</p>
      <h1 className="text-white text-4xl md:text-[60px] py-2 font-extrabold">
        Technologies
      </h1>
      <p className="text-gray-300 text-base md:text-2xl pt-8">
        These are the technologies, on which i have been working since my web
        development journy started. below i mentioned all my major technologies
        and some are miner technologies.
      </p>
      <div class="mt-8 grid sm:grid-cols-2 md:grid-cols-4  justify-items-center ">
        <div class="relative  h-[220px] w-[220px] rounded-[20px] sm:border-0 border  border-slate-800 my-2 md:my-0 ">
          <div class="box bg-spin absolute top-0 bottom-0 right-0 left-0 flex flex-col justify-center items-center p-10  cursor-pointer ">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 512 512"
              class=" w-24 h-24 text-[#61cdff] group-hover:scale-100 duration-300"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9 24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7 45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"></path>
            </svg>
            <h3 class="text-xl text-slate-50 mt-4">React JS</h3>
          </div>
        </div>
        <div class="relative  h-[220px] w-[220px] rounded-[20px] sm:border-0 border  border-slate-800 my-2 md:my-0 ">
          <div class="box bg-spin absolute top-0 bottom-0 right-0 left-0 flex flex-col  justify-center items-center p-10  cursor-pointer ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 48 48"
            >
              <path
                class=" w-24 h-24 text-[#4faf45] group-hover:scale-110 duration-300"
                fill="#7e57c2"
                d="M23,4c-6.617,0-12,7.27-12,16.205c0,4.834,1.582,9.169,4.078,12.136C15.03,32.554,15,32.773,15,33	c0,1.657,1.343,3,3,3s3-1.343,3-3s-1.343-3-3-3c-0.315,0-0.612,0.062-0.897,0.152C15.206,27.731,14,24.175,14,20.205	C14,12.924,18.037,7,23,7c3.837,0,7.111,3.547,8.404,8.518c1.122,0.346,2.237,0.782,3.33,1.308C33.579,9.508,28.759,4,23,4z"
              ></path>
              <path
                fill="#7e57c2"
                d="M35.507,20.084c-3.947-2.392-8.374-3.442-12.182-2.959C22.775,16.444,21.943,16,21,16	c-1.657,0-3,1.343-3,3s1.343,3,3,3c1.272,0,2.353-0.795,2.789-1.912c3.118-0.379,6.812,0.531,10.163,2.563	c6.403,3.881,9.67,10.569,7.282,14.911c-0.827,1.504-2.286,2.572-4.218,3.09c-2.286,0.611-5.007,0.394-7.727-0.528	c-0.839,0.772-1.749,1.498-2.725,2.168c2.552,1.117,5.196,1.704,7.669,1.704c1.24,0,2.438-0.147,3.559-0.447	c2.741-0.733,4.841-2.304,6.071-4.542C47.016,33.276,43.267,24.787,35.507,20.084z"
              ></path>
              <path
                fill="#7e57c2"
                d="M35,28.992C35,27.34,33.657,26,32,26s-3,1.34-3,2.992c0,0.669,0.228,1.281,0.6,1.779	c-1.279,2.802-3.744,5.567-7.062,7.578c-3.865,2.344-8.185,3.202-11.555,2.302c-1.932-0.518-3.391-1.586-4.218-3.09	c-1.702-3.094-0.521-7.376,2.61-10.988c-0.323-1.144-0.562-2.34-0.706-3.575c-5.07,4.797-7.109,11.323-4.532,16.009	c1.23,2.238,3.33,3.809,6.071,4.542c1.121,0.3,2.318,0.447,3.559,0.447c3.346,0,7.007-1.068,10.326-3.08	c3.836-2.325,6.683-5.577,8.209-8.962C33.815,31.801,35,30.541,35,28.992z"
              ></path>
            </svg>
            <h3 class="text-xl text-slate-50 mt-4">Redux</h3>
          </div>
        </div>
        <div class="relative h-[220px] w-[220px] rounded-[20px] sm:border-0 border  border-slate-800 my-2 md:my-0 ">
          <div class="box bg-spin absolute top-0 bottom-0 right-0 left-0 flex flex-col  justify-center items-center p-10  cursor-pointer ">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 0 448 512"
              class=" w-24 h-24 text-[#4faf45] group-hover:scale-110 duration-300"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M224 508c-6.7 0-13.5-1.8-19.4-5.2l-61.7-36.5c-9.2-5.2-4.7-7-1.7-8 12.3-4.3 14.8-5.2 27.9-12.7 1.4-.8 3.2-.5 4.6.4l47.4 28.1c1.7 1 4.1 1 5.7 0l184.7-106.6c1.7-1 2.8-3 2.8-5V149.3c0-2.1-1.1-4-2.9-5.1L226.8 37.7c-1.7-1-4-1-5.7 0L36.6 144.3c-1.8 1-2.9 3-2.9 5.1v213.1c0 2 1.1 4 2.9 4.9l50.6 29.2c27.5 13.7 44.3-2.4 44.3-18.7V167.5c0-3 2.4-5.3 5.4-5.3h23.4c2.9 0 5.4 2.3 5.4 5.3V378c0 36.6-20 57.6-54.7 57.6-10.7 0-19.1 0-42.5-11.6l-48.4-27.9C8.1 389.2.7 376.3.7 362.4V149.3c0-13.8 7.4-26.8 19.4-33.7L204.6 9c11.7-6.6 27.2-6.6 38.8 0l184.7 106.7c12 6.9 19.4 19.8 19.4 33.7v213.1c0 13.8-7.4 26.7-19.4 33.7L243.4 502.8c-5.9 3.4-12.6 5.2-19.4 5.2zm149.1-210.1c0-39.9-27-50.5-83.7-58-57.4-7.6-63.2-11.5-63.2-24.9 0-11.1 4.9-25.9 47.4-25.9 37.9 0 51.9 8.2 57.7 33.8.5 2.4 2.7 4.2 5.2 4.2h24c1.5 0 2.9-.6 3.9-1.7s1.5-2.6 1.4-4.1c-3.7-44.1-33-64.6-92.2-64.6-52.7 0-84.1 22.2-84.1 59.5 0 40.4 31.3 51.6 81.8 56.6 60.5 5.9 65.2 14.8 65.2 26.7 0 20.6-16.6 29.4-55.5 29.4-48.9 0-59.6-12.3-63.2-36.6-.4-2.6-2.6-4.5-5.3-4.5h-23.9c-3 0-5.3 2.4-5.3 5.3 0 31.1 16.9 68.2 97.8 68.2 58.4-.1 92-23.2 92-63.4z"></path>
            </svg>
            <h3 class="text-xl text-slate-50 mt-4">Node JS</h3>
          </div>
        </div>
        <div class="relative myHover group  h-[220px] w-[220px] rounded-[20px] sm:border-0 border  border-slate-800 my-2 md:my-0 ">
          <div class="box bg-spin absolute top-0 bottom-0 right-0 left-0 flex flex-col  justify-center items-center p-10  cursor-pointer ">
            <svg
              class="group-hover:scale-110 duration-300"
              fill="gray"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 50 50"
            >
              <path d="M49.729 11h-.85c-1.051 0-2.041.49-2.68 1.324l-8.7 11.377-8.7-11.377C28.162 11.49 27.171 11 26.121 11h-.85l10.971 14.346L25.036 40h.85c1.051 0 2.041-.49 2.679-1.324L37.5 26.992l8.935 11.684C47.073 39.51 48.063 40 49.114 40h.85L38.758 25.346 49.729 11zM21.289 34.242c-2.554 3.881-7.582 5.87-12.389 4.116C4.671 36.815 2 32.611 2 28.109L2 27h12v0h11l0-4.134c0-6.505-4.818-12.2-11.295-12.809C6.273 9.358 0 15.21 0 22.5l0 5.573c0 5.371 3.215 10.364 8.269 12.183 6.603 2.376 13.548-1.17 15.896-7.256 0 0 0 0 0 0h-.638C22.616 33 21.789 33.481 21.289 34.242zM2 22.5C2 16.71 6.71 12 12.5 12S23 16.71 23 22.5V25H2V22.5z"></path>
            </svg>
            <h3 class="text-xl text-slate-50 mt-4">Express JS</h3>
          </div>
        </div>
        <div class="relative myHover group  h-[220px] w-[220px] rounded-[20px] sm:border-0 border  border-slate-800 my-2 md:my-0 ">
          <div class="box bg-spin absolute top-0 bottom-0 right-0 left-0 flex flex-col  justify-center items-center p-10  cursor-pointer ">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              role="img"
              viewBox="0 0 24 24"
              class=" w-24 h-24 text-[#eede4c] group-hover:scale-110 duration-300"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title></title>
              <path d="M0 0h24v24H0V0zm22.034 18.276c-.175-1.095-.888-2.015-3.003-2.873-.736-.345-1.554-.585-1.797-1.14-.091-.33-.105-.51-.046-.705.15-.646.915-.84 1.515-.66.39.12.75.42.976.9 1.034-.676 1.034-.676 1.755-1.125-.27-.42-.404-.601-.586-.78-.63-.705-1.469-1.065-2.834-1.034l-.705.089c-.676.165-1.32.525-1.71 1.005-1.14 1.291-.811 3.541.569 4.471 1.365 1.02 3.361 1.244 3.616 2.205.24 1.17-.87 1.545-1.966 1.41-.811-.18-1.26-.586-1.755-1.336l-1.83 1.051c.21.48.45.689.81 1.109 1.74 1.756 6.09 1.666 6.871-1.004.029-.09.24-.705.074-1.65l.046.067zm-8.983-7.245h-2.248c0 1.938-.009 3.864-.009 5.805 0 1.232.063 2.363-.138 2.711-.33.689-1.18.601-1.566.48-.396-.196-.597-.466-.83-.855-.063-.105-.11-.196-.127-.196l-1.825 1.125c.305.63.75 1.172 1.324 1.517.855.51 2.004.675 3.207.405.783-.226 1.458-.691 1.811-1.411.51-.93.402-2.07.397-3.346.012-2.054 0-4.109 0-6.179l.004-.056z"></path>
            </svg>
            <h3 class="text-xl text-slate-50 mt-4">Java Script</h3>
          </div>
        </div>
        <div class="relative myHover group  h-[220px] w-[220px] rounded-[20px] sm:border-0 border  border-slate-800 my-2 md:my-0 ">
          <div class="box bg-spin absolute top-0 bottom-0 right-0 left-0 flex flex-col  justify-center items-center p-10  cursor-pointer ">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              role="img"
              viewBox="0 0 24 24"
              class=" w-24 h-24 text-[#61cdff] group-hover:scale-110 duration-300"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title></title>
              <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z"></path>
            </svg>
            <h3 class="text-xl text-slate-50 mt-4">Type Script</h3>
          </div>
        </div>
        <div class="relative myHover group  h-[220px] w-[220px] rounded-[20px] sm:border-0 border  border-slate-800 my-2 md:my-0 ">
          <div class="box bg-spin absolute top-0 bottom-0 right-0 left-0 flex flex-col  justify-center items-center p-10  cursor-pointer ">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              role="img"
              viewBox="0 0 24 24"
              class=" w-24 h-24 text-[#4faf45] group-hover:scale-110 duration-300"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title></title>
              <path d="M17.193 9.555c-1.264-5.58-4.252-7.414-4.573-8.115-.28-.394-.53-.954-.735-1.44-.036.495-.055.685-.523 1.184-.723.566-4.438 3.682-4.74 10.02-.282 5.912 4.27 9.435 4.888 9.884l.07.05A73.49 73.49 0 0111.91 24h.481c.114-1.032.284-2.056.51-3.07.417-.296.604-.463.85-.693a11.342 11.342 0 003.639-8.464c.01-.814-.103-1.662-.197-2.218zm-5.336 8.195s0-8.291.275-8.29c.213 0 .49 10.695.49 10.695-.381-.045-.765-1.76-.765-2.405z"></path>
            </svg>
            <h3 class="text-xl text-slate-50 mt-4">Mongo DB</h3>
          </div>
        </div>
        <div class="relative myHover group  h-[220px] w-[220px] rounded-[20px] sm:border-0 border  border-slate-800 my-2 md:my-0 ">
          <div class="hoverBox "></div>
          <div class="box bg-spin absolute top-0 bottom-0 right-0 left-0 flex flex-col  justify-center items-center p-10  cursor-pointer ">
            <svg
              class="group-hover:scale-110 duration-300"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 48 48"
            >
              <path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path>
              <path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path>
              <path
                fill="#FFF"
                d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"
              ></path>
              <path
                fill="#EEE"
                d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"
              ></path>
            </svg>
            <h3 class="text-xl text-slate-50 mt-4">HTML 5</h3>
          </div>
        </div>
        <div class="relative myHover group  h-[220px] w-[220px] rounded-[20px] sm:border-0 border  border-slate-800 my-2 md:my-0 ">
          <div class="box bg-spin absolute top-0 bottom-0 right-0 left-0 flex flex-col  justify-center items-center p-10  cursor-pointer ">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              role="img"
              viewBox="0 0 24 24"
              class=" w-24 h-24 text-[#2c69fa] group-hover:scale-110 duration-300"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title></title>
              <path d="M1.5 0h21l-1.91 21.563L11.977 24l-8.565-2.438L1.5 0zm17.09 4.413L5.41 4.41l.213 2.622 10.125.002-.255 2.716h-6.64l.24 2.573h6.182l-.366 3.523-2.91.804-2.956-.81-.188-2.11h-2.61l.29 3.855L12 19.288l5.373-1.53L18.59 4.414z"></path>
            </svg>
            <h3 class="text-xl text-slate-50 mt-4">CSS</h3>
          </div>
        </div>
        <div class="relative myHover group  h-[220px] w-[220px] rounded-[20px] sm:border-0 border  border-slate-800 my-2 md:my-0 ">
          <div class="box bg-spin absolute top-0 bottom-0 right-0 left-0 flex flex-col  justify-center items-center p-10  cursor-pointer ">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              role="img"
              viewBox="0 0 24 24"
              class=" w-24 h-24 text-[#61cdff] group-hover:scale-110 duration-300"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title></title>
              <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z"></path>
            </svg>
            <h3 class="text-xl text-slate-50 mt-4">Tailwind CSS</h3>
          </div>
        </div>
        <div class="relative myHover group  h-[220px] w-[220px] rounded-[20px] sm:border-0 border  border-slate-800 my-2 md:my-0 ">
          <div class="box bg-spin absolute top-0 bottom-0 right-0 left-0 flex flex-col  justify-center items-center p-10  cursor-pointer ">
            <svg
              class=" w-24 h-24 text-[#61cdff] group-hover:scale-110 duration-300"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 48 48"
            >
              <polygon fill="#29b6f6" points="1,5 7,9 7,29 1,25"></polygon>
              <polygon
                fill="#0288d1"
                points="47,20 41,24 41,37 47,33"
              ></polygon>
              <polygon fill="#0288d1" points="47,6 41,10 41,17 47,13"></polygon>
              <polygon fill="#0288d1" points="35,5 29,9 29,29 35,25"></polygon>
              <polygon fill="#29b6f6" points="1,12 18,23 18,16 1,5"></polygon>
              <polygon fill="#0288d1" points="35,12 18,23 18,16 35,5"></polygon>
              <polygon
                fill="#0288d1"
                points="35,26 18,37 18,30 35,19"
              ></polygon>
              <polygon
                fill="#0288d1"
                points="47,34 30,45 30,38 47,27"
              ></polygon>
              <polygon
                fill="#29b6f6"
                points="30,37.765 18,30 18,37 30,44.765"
              ></polygon>
            </svg>
            <h3 class="text-xl text-slate-50 mt-4">Material UI</h3>
          </div>
        </div>
        <div class="relative myHover group  h-[220px] w-[220px] rounded-[20px] sm:border-0 border  border-slate-800 ">
          <div class="box bg-spin absolute top-0 bottom-0 right-0 left-0 flex flex-col  justify-center items-center p-10  cursor-pointer ">
            <svg
              class="group-hover:scale-110 duration-300"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 48 48"
            >
              <path
                fill="#7c4dff"
                d="M7.373,11.443C7.293,9.132,9.094,7,11.529,7h24.946c2.435,0,4.236,2.132,4.155,4.443	c-0.077,2.221,0.023,5.097,0.747,7.443c0.726,2.353,1.951,3.84,3.957,4.031v2.167c-2.006,0.191-3.23,1.678-3.957,4.031	c-0.724,2.345-0.824,5.222-0.747,7.443C40.71,38.868,38.909,41,36.475,41H11.529c-2.434,0-4.236-2.132-4.155-4.443	c0.077-2.221-0.023-5.097-0.747-7.443c-0.726-2.353-1.954-3.84-3.96-4.031v-2.167c2.006-0.191,3.233-1.678,3.96-4.031	C7.35,16.54,7.451,13.664,7.373,11.443z"
              ></path>
              <path
                fill="#fff"
                d="M27.073,23.464v-0.028c1.853-0.32,3.299-2.057,3.299-3.97c0-1.352-0.52-2.498-1.504-3.312	c-0.981-0.812-2.357-1.241-3.981-1.241H17.45V33.08h7.475c1.942,0,3.555-0.474,4.663-1.372c1.109-0.899,1.696-2.207,1.696-3.783	C31.283,25.544,29.593,23.756,27.073,23.464z M23.59,22.608h-3.181V17.29h3.784c2.076,0,3.219,0.911,3.219,2.565	C27.413,21.63,26.055,22.608,23.59,22.608z M20.409,24.834h3.759c2.716,0,4.092,0.981,4.092,2.916c0,1.932-1.357,2.953-3.925,2.953	h-3.926V24.834z"
              ></path>
            </svg>
            <h3 class="text-xl text-slate-50 mt-4">Bootstrap</h3>
          </div>
        </div>
      </div>
      {/* ///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
      
      {/* <div class="mt-20 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 justify-items-center gap-y-16">
        <div
          class="relative mySmallHover group  h-[160px] w-[180px] rounded-[20px] shadow-[0_0_20px_blue] drop-shadow-[0_0_30px_blue]"
          draggable="false"
          style={{
            transform:
              "translateX(7.6e-06px) translateY(0.799927px) translateZ(0px)",
          }}
        >
          <div class="absolute top-0 bottom-0 right-0 left-0 flex flex-col  justify-center items-center p-10  cursor-pointer ">
            <svg
              class="group-hover:scale-150 duration-300"
              fill="gray"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 50 50"
            >
              <path d="M49.729 11h-.85c-1.051 0-2.041.49-2.68 1.324l-8.7 11.377-8.7-11.377C28.162 11.49 27.171 11 26.121 11h-.85l10.971 14.346L25.036 40h.85c1.051 0 2.041-.49 2.679-1.324L37.5 26.992l8.935 11.684C47.073 39.51 48.063 40 49.114 40h.85L38.758 25.346 49.729 11zM21.289 34.242c-2.554 3.881-7.582 5.87-12.389 4.116C4.671 36.815 2 32.611 2 28.109L2 27h12v0h11l0-4.134c0-6.505-4.818-12.2-11.295-12.809C6.273 9.358 0 15.21 0 22.5l0 5.573c0 5.371 3.215 10.364 8.269 12.183 6.603 2.376 13.548-1.17 15.896-7.256 0 0 0 0 0 0h-.638C22.616 33 21.789 33.481 21.289 34.242zM2 22.5C2 16.71 6.71 12 12.5 12S23 16.71 23 22.5V25H2V22.5z"></path>
            </svg>
            <h3 class="text-[13px] text-slate-50 mt-4">Express JS</h3>
          </div>
        </div>
        <div
          class="relative mySmallHover group  h-[160px] w-[180px] rounded-[20px] shadow-[0_0_20px_blue] drop-shadow-[0_0_30px_blue]"
          draggable="false"
          style={{
            transform:
              "translateX(7.6e-06px) translateY(0.799927px) translateZ(0px)",
          }}
        >
          <div class="absolute top-0 bottom-0 right-0 left-0 flex flex-col  justify-center items-center p-10  cursor-pointer ">
            <svg
              class="group-hover:scale-150 duration-300"
              fill="red"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 50 50"
            >
              <path d="M17.791,46.836C18.502,46.53,19,45.823,19,45v-5.4c0-0.197,0.016-0.402,0.041-0.61C19.027,38.994,19.014,38.997,19,39 c0,0-3,0-3.6,0c-1.5,0-2.8-0.6-3.4-1.8c-0.7-1.3-1-3.5-2.8-4.7C8.9,32.3,9.1,32,9.7,32c0.6,0.1,1.9,0.9,2.7,2c0.9,1.1,1.8,2,3.4,2 c2.487,0,3.82-0.125,4.622-0.555C21.356,34.056,22.649,33,24,33v-0.025c-5.668-0.182-9.289-2.066-10.975-4.975 c-3.665,0.042-6.856,0.405-8.677,0.707c-0.058-0.327-0.108-0.656-0.151-0.987c1.797-0.296,4.843-0.647,8.345-0.714 c-0.112-0.276-0.209-0.559-0.291-0.849c-3.511-0.178-6.541-0.039-8.187,0.097c-0.02-0.332-0.047-0.663-0.051-0.999 c1.649-0.135,4.597-0.27,8.018-0.111c-0.079-0.5-0.13-1.011-0.13-1.543c0-1.7,0.6-3.5,1.7-5c-0.5-1.7-1.2-5.3,0.2-6.6 c2.7,0,4.6,1.3,5.5,2.1C21,13.4,22.9,13,25,13s4,0.4,5.6,1.1c0.9-0.8,2.8-2.1,5.5-2.1c1.5,1.4,0.7,5,0.2,6.6c1.1,1.5,1.7,3.2,1.6,5 c0,0.484-0.045,0.951-0.11,1.409c3.499-0.172,6.527-0.034,8.204,0.102c-0.002,0.337-0.033,0.666-0.051,0.999 c-1.671-0.138-4.775-0.28-8.359-0.089c-0.089,0.336-0.197,0.663-0.325,0.98c3.546,0.046,6.665,0.389,8.548,0.689 c-0.043,0.332-0.093,0.661-0.151,0.987c-1.912-0.306-5.171-0.664-8.879-0.682C35.112,30.873,31.557,32.75,26,32.969V33 c2.6,0,5,3.9,5,6.6V45c0,0.823,0.498,1.53,1.209,1.836C41.37,43.804,48,35.164,48,25C48,12.318,37.683,2,25,2S2,12.318,2,25 C2,35.164,8.63,43.804,17.791,46.836z"></path>
            </svg>
            <h3 class="text-[13px] text-slate-50 mt-4">GitHub</h3>
          </div>
        </div>
        <div
          class="relative mySmallHover group  h-[150px] w-[150px] rounded-[20px] shadow-[0_0_20px_blue] drop-shadow-[0_0_30px_blue]"
          draggable="false"
          style={{
            transform:
              "translateX(7.6e-06px) translateY(0.799927px) translateZ(0px)",
          }}
        >
          <div class="hoverBox "></div>
          <div class="absolute top-0 bottom-0 right-0 left-0 flex flex-col  justify-center items-center p-10  cursor-pointer ">
            <svg
              class="group-hover:scale-150 duration-300"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 48 48"
            >
              <path
                fill="#2395ec"
                d="M47.527,19.847c-0.13-0.102-1.345-1.007-3.908-1.007c-0.677,0.003-1.352,0.06-2.019,0.171 c-0.496-3.354-3.219-4.93-3.345-5.003l-0.688-0.392l-0.453,0.644c-0.567,0.866-1.068,1.76-1.311,2.763 c-0.459,1.915-0.18,3.713,0.806,5.25C35.417,22.928,33.386,22.986,33,23H1.582c-0.826,0.001-1.496,0.66-1.501,1.474 c-0.037,2.733,0.353,5.553,1.306,8.119c1.089,2.818,2.71,4.894,4.818,6.164C8.567,40.184,12.405,41,16.756,41 c1.965,0.006,3.927-0.169,5.859-0.524c2.686-0.487,5.271-1.413,7.647-2.74c1.958-1.119,3.72-2.542,5.219-4.215 c2.505-2.798,3.997-5.913,5.107-8.682c0.149,0,0.298,0,0.442,0c2.743,0,4.429-1.083,5.359-1.99 c0.618-0.579,1.101-1.284,1.414-2.065L48,20.216L47.527,19.847z"
              ></path>
              <path
                fill="#2395ec"
                d="M8,22H5c-0.552,0-1-0.448-1-1v-3c0-0.552,0.448-1,1-1h3c0.552,0,1,0.448,1,1v3 C9,21.552,8.552,22,8,22z"
              ></path>
              <path
                fill="#2395ec"
                d="M14,22h-3c-0.552,0-1-0.448-1-1v-3c0-0.552,0.448-1,1-1h3c0.552,0,1,0.448,1,1v3 C15,21.552,14.552,22,14,22z"
              ></path>
              <path
                fill="#2395ec"
                d="M20,22h-3c-0.552,0-1-0.448-1-1v-3c0-0.552,0.448-1,1-1h3c0.552,0,1,0.448,1,1v3 C21,21.552,20.552,22,20,22z"
              ></path>
              <path
                fill="#2395ec"
                d="M26,22h-3c-0.552,0-1-0.448-1-1v-3c0-0.552,0.448-1,1-1h3c0.552,0,1,0.448,1,1v3 C27,21.552,26.552,22,26,22z"
              ></path>
              <path
                fill="#2395ec"
                d="M14,16h-3c-0.552,0-1-0.448-1-1v-3c0-0.552,0.448-1,1-1h3c0.552,0,1,0.448,1,1v3 C15,15.552,14.552,16,14,16z"
              ></path>
              <path
                fill="#2395ec"
                d="M20,16h-3c-0.552,0-1-0.448-1-1v-3c0-0.552,0.448-1,1-1h3c0.552,0,1,0.448,1,1v3 C21,15.552,20.552,16,20,16z"
              ></path>
              <path
                fill="#2395ec"
                d="M26,16h-3c-0.552,0-1-0.448-1-1v-3c0-0.552,0.448-1,1-1h3c0.552,0,1,0.448,1,1v3 C27,15.552,26.552,16,26,16z"
              ></path>
              <path
                fill="#2395ec"
                d="M26,10h-3c-0.552,0-1-0.448-1-1V6c0-0.552,0.448-1,1-1h3c0.552,0,1,0.448,1,1v3 C27,9.552,26.552,10,26,10z"
              ></path>
              <path
                fill="#2395ec"
                d="M32,22h-3c-0.552,0-1-0.448-1-1v-3c0-0.552,0.448-1,1-1h3c0.552,0,1,0.448,1,1v3 C33,21.552,32.552,22,32,22z"
              ></path>
            </svg>
            <h3 class="text-[13px] text-slate-50 mt-4">Docker</h3>
          </div>
        </div>
        <div
          class="relative mySmallHover group  h-[160px] w-[180px] rounded-[20px] shadow-[0_0_20px_blue] drop-shadow-[0_0_30px_blue]"
          draggable="false"
          style={{
            transform:
              "translateX(7.6e-06px) translateY(0.799927px) translateZ(0px)",
          }}
        >
          <div class="absolute top-0 bottom-0 right-0 left-0 flex flex-col  justify-center items-center p-10  cursor-pointer ">
            <img
              className="w-10 group-hover:scale-150 duration-300 "
              src={redux}
              alt="img"
            />
            <h3 class="text-[12px] text-slate-50 mt-4">Redux toolkit</h3>
          </div>
        </div>
        <div
          class="relative mySmallHover group  h-[160px] w-[180px] rounded-[20px] shadow-[0_0_20px_blue] drop-shadow-[0_0_30px_blue]"
          draggable="false"
          style={{
            transform:
              "translateX(7.6e-06px) translateY(0.799927px) translateZ(0px)",
          }}
        >
          <div class="absolute top-0 bottom-0 right-0 left-0 flex flex-col  justify-center items-center p-10  cursor-pointer ">
            <svg
              class="group-hover:scale-150 duration-300"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 48 48"
            >
              <path
                fill="#e64a19"
                d="M26,17h-8c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h8V17z"
              ></path>
              <path
                fill="#7c4dff"
                d="M25,31h-7c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7V31z"
              ></path>
              <path
                fill="#66bb6a"
                d="M18,45L18,45c-3.866,0-7-3.134-7-7v0c0-3.866,3.134-7,7-7h7v7C25,41.866,21.866,45,18,45z"
              ></path>
              <path
                fill="#ff7043"
                d="M32,17h-7V3h7c3.866,0,7,3.134,7,7v0C39,13.866,35.866,17,32,17z"
              ></path>
              <circle cx="32" cy="24" r="7" fill="#29b6f6"></circle>
            </svg>
            <h3 class="text-[13px] text-slate-50 mt-4">Figma</h3>
          </div>
        </div>
        <div
          class="relative mySmallHover group  h-[160px] w-[180px] rounded-[20px] shadow-[0_0_20px_blue] drop-shadow-[0_0_30px_blue]"
          draggable="false"
          style={{
            transform:
              "translateX(7.6e-06px) translateY(0.799927px) translateZ(0px)",
          }}
        >
          <div class="absolute top-0 bottom-0 right-0 left-0 flex flex-col  justify-center items-center p-10  cursor-pointer ">
            <svg
              class="group-hover:scale-150 duration-300"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 48 48"
            >
              <path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path>
              <path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path>
              <path
                fill="#FFF"
                d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"
              ></path>
              <path
                fill="#EEE"
                d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"
              ></path>
            </svg>{" "}
            <h3 class="text-[13px] text-slate-50 mt-4">HTML 5</h3>
          </div>
        </div>
        <div
          class="relative mySmallHover group  h-[160px] w-[180px] rounded-[20px] shadow-[0_0_20px_blue] drop-shadow-[0_0_30px_blue]"
          draggable="false"
          style={{
            transform:
              "translateX(7.6e-06px) translateY(0.799927px) translateZ(0px)",
          }}
        >
          <div class="hoverBox "></div>
          <div class="absolute top-0 bottom-0 right-0 left-0 flex flex-col  justify-center items-center p-10  cursor-pointer ">
            <svg
              class="group-hover:scale-150 duration-300"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 48 48"
            >
              <path fill="#d50000" d="M0,15h48v17H24v3H13v-3H0V15z"></path>
              <path
                fill="#fff"
                d="M3 29L8 29 8 21 11 21 11 29 13 29 13 18 3 18zM16 18v14h5v-3h5V18H16zM24 26h-3v-5h3V26zM29 18L29 29 34 29 34 21 37 21 37 29 40 29 40 21 43 21 43 29 45 29 45 18z"
              ></path>
            </svg>{" "}
            <h3 class="text-[13px] text-slate-50 mt-4">NPM</h3>
          </div>
        </div>
        <div
          class="relative mySmallHover group  h-[160px] w-[180px] rounded-[20px] shadow-[0_0_20px_blue] drop-shadow-[0_0_30px_blue]"
          draggable="false"
          style={{
            transform:
              "translateX(7.6e-06px) translateY(0.799927px) translateZ(0px)",
          }}
        >
          <div class="hoverBox "></div>
          <div class="absolute top-0 bottom-0 right-0 left-0 flex flex-col  justify-center items-center p-10  cursor-pointer ">
            <svg
              class="group-hover:scale-150 duration-300"
              fill="green"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 32 32"
            >
              <path d="M 16 3 C 8.8 3 3 8.8 3 16 C 3 23.2 8.8 29 16 29 C 23.2 29 29 23.2 29 16 C 29 8.8 23.2 3 16 3 z M 16 5 C 22.1 5 27 9.9 27 16 C 27 22.1 22.1 27 16 27 C 9.9 27 5 22.1 5 16 C 5 9.9 9.9 5 16 5 z M 16.208984 9.0449219 C 15.75918 9.1214844 15.300781 10.5 15.300781 10.5 C 15.300781 10.5 14.099609 10.300781 13.099609 11.300781 C 12.899609 11.500781 12.700391 11.599219 12.400391 11.699219 C 12.300391 11.799219 12.2 11.800391 12 12.400391 C 11.6 13.300391 12.599609 14.400391 12.599609 14.400391 C 10.499609 15.900391 10.599219 17.900391 10.699219 18.400391 C 9.3992187 19.500391 9.8992187 20.900781 10.199219 21.300781 C 10.399219 21.600781 10.599219 21.5 10.699219 21.5 C 10.699219 21.6 10.199219 22.200391 10.699219 22.400391 C 11.199219 22.700391 12.000391 22.800391 12.400391 22.400391 C 12.700391 22.100391 12.800391 21.499219 12.900391 21.199219 C 13.000391 21.099219 13.000391 21.399609 13.400391 21.599609 C 13.400391 21.599609 12.7 21.899609 13 22.599609 C 13.1 22.799609 13.4 23 14 23 C 14.2 23 16.599219 22.899219 17.199219 22.699219 C 17.599219 22.599219 17.699219 22.400391 17.699219 22.400391 C 20.299219 21.700391 20.799609 20.599219 22.599609 20.199219 C 23.199609 20.099219 23.199609 19.099219 22.099609 19.199219 C 21.299609 19.199219 20.6 19.6 20 20 C 19 20.6 18.300781 20.699609 18.300781 20.599609 C 18.200781 20.499609 18.699219 19.3 18.199219 18 C 17.699219 16.6 16.800391 16.199609 16.900391 16.099609 C 17.200391 15.599609 17.899219 14.800391 18.199219 13.400391 C 18.299219 12.500391 18.300391 11.000781 17.900391 10.300781 C 17.800391 10.100781 17.199219 10.5 17.199219 10.5 C 17.199219 10.5 16.600391 9.1996094 16.400391 9.0996094 C 16.337891 9.0496094 16.273242 9.0339844 16.208984 9.0449219 z"></path>
            </svg>{" "}
            <h3 class="text-[13px] text-slate-50 mt-4">Yarn</h3>
          </div>
        </div>
        <div
          class="relative mySmallHover group  h-[160px] w-[180px] rounded-[20px] shadow-[0_0_20px_blue] drop-shadow-[0_0_30px_blue]"
          draggable="false"
          style={{
            transform:
              "translateX(7.6e-06px) translateY(0.799927px) translateZ(0px)",
          }}
        >
          <div class="absolute top-0 bottom-0 right-0 left-0 flex flex-col  justify-center items-center p-10  cursor-pointer ">
            <svg
              class="group-hover:scale-150 duration-300"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 48 48"
            >
              <polygon
                fill="#b71c1c"
                points="18.001,29.994 18.001,35 21.995,34.995 21.995,29.999 20.001,32.004"
              ></polygon>
              <path
                fill="#b71c1c"
                d="M46.586,21.441c-0.177-0.221-0.84-0.354-0.84-0.354l-0.796,1.592l0.088-1.769	c0,0-4.821-1.946-8.668-2.875s-6.58-1.291-8.048-1.326c-1.062-0.026-3.097,0.088-3.097,0.088l1.725,1.636	c0,0-2.167-0.885-2.963-1.194s-2.034-0.31-2.654-0.354c-0.619-0.044-1.15,0.221-1.15,0.221s-0.575,0.442,0.752,3.405	c1.088,2.43,3.719,3.965,4.632,4.44c-5.917-1.284-6.578-7.005-6.578-7.005s-3.603-0.037-8.757,1.769	c-5.824,2.041-9.288,5.971-9.288,5.971s4.6-1.548,8.492-0.487s5.497,3.788,5.497,3.788l0.107-3.007h2.936l2.251,2.713l1.758-2.677	h2.971c0,0,0.015,0,0.036-0.001v5.979c0,0,2.014-1.665,3.372-2.328c1.813-0.885,6.015-0.619,6.015-0.619s-0.067-0.47-0.315-0.967	c-0.352-0.704,0.573-0.935,0.573-0.935s8.278-1.813,9.206-1.99c0.929-0.177,1.592-0.575,1.813-0.796	c0.221-0.221,0.84-1.769,0.973-1.946C46.763,22.237,46.763,21.662,46.586,21.441z M21.2,18.389c0.221-0.354,0.885-0.487,1.902,0	c1.2,0.574,2.654,2.477,2.654,2.477l-1.238-0.575l0.619,1.106l-1.106-0.619l0.973,1.415l-0.663-0.177l0.885,1.459	C21.377,21.264,20.979,18.743,21.2,18.389z M37.918,20.556l-0.663,0.486c0,0-2.654,0.354-3.361,0.31	c-0.708-0.044-1.15-1.106-1.15-1.106l-1.459-0.885L37.918,20.556z M32.92,26.748c-0.487,0.398-0.044,1.371-0.044,1.371	c-0.663-0.486-1.46-1.415-0.752-1.946c0.708-0.531,5.882-1.194,5.882-1.194S33.406,26.35,32.92,26.748z"
              ></path>
            </svg>{" "}
            <h3 class="text-[13px] text-slate-50 mt-4">Mongoose</h3>
          </div>
        </div>
        <div
          class="relative mySmallHover group  h-[160px] w-[180px] rounded-[20px] shadow-[0_0_20px_blue] drop-shadow-[0_0_30px_blue]"
          draggable="false"
          style={{
            transform:
              "translateX(7.6e-06px) translateY(0.799927px) translateZ(0px)",
          }}
        >
          <div class="absolute top-0 bottom-0 right-0 left-0 flex flex-col  justify-center items-center p-10  cursor-pointer ">
            <img
              className="w-10 group-hover:scale-150 duration-300 "
              src={axios}
              alt="img"
            />
            <h3 class="text-[12px] text-slate-50 mt-4">Axios</h3>
          </div>
        </div>
        <div
          class="relative mySmallHover group  h-[160px] w-[180px] rounded-[20px] shadow-[0_0_20px_blue] drop-shadow-[0_0_30px_blue]"
          draggable="false"
          style={{
            transform:
              "translateX(7.6e-06px) translateY(0.799927px) translateZ(0px)",
          }}
        >
          <div class="absolute top-0 bottom-0 right-0 left-0 flex flex-col  justify-center items-center p-10  cursor-pointer ">
            <svg
              class="group-hover:scale-150 duration-300"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 48 48"
            >
              <path
                fill="#29b6f6"
                d="M44,11.11v25.78c0,1.27-0.79,2.4-1.98,2.82l-8.82,4.14L34,33V15L33.2,4.15l8.82,4.14 C43.21,8.71,44,9.84,44,11.11z"
              ></path>
              <path
                fill="#0277bd"
                d="M9,33.896L34,15V5.353c0-1.198-1.482-1.758-2.275-0.86L4.658,29.239 c-0.9,0.83-0.849,2.267,0.107,3.032c0,0,1.324,1.232,1.803,1.574C7.304,34.37,8.271,34.43,9,33.896z"
              ></path>
              <path
                fill="#0288d1"
                d="M9,14.104L34,33v9.647c0,1.198-1.482,1.758-2.275,0.86L4.658,18.761 c-0.9-0.83-0.849-2.267,0.107-3.032c0,0,1.324-1.232,1.803-1.574C7.304,13.63,8.271,13.57,9,14.104z"
              ></path>
            </svg>{" "}
            <h3 class="text-[13px] text-slate-50 mt-4">VS Code</h3>
          </div>
        </div>
        <div
          class="relative mySmallHover group  h-[160px] w-[180px] rounded-[20px] shadow-[0_0_20px_blue] drop-shadow-[0_0_30px_blue]"
          draggable="false"
          style={{
            transform:
              "translateX(7.6e-06px) translateY(0.799927px) translateZ(0px)",
          }}
        >
          <div class="absolute top-0 bottom-0 right-0 left-0 flex flex-col  justify-center items-center p-10  cursor-pointer ">
            <svg
              class="group-hover:scale-150 duration-300"
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="100"
              height="100"
              viewBox="0 0 48 48"
            >
              <path
                fill="#7c4dff"
                d="M7.373,11.443C7.293,9.132,9.094,7,11.529,7h24.946c2.435,0,4.236,2.132,4.155,4.443	c-0.077,2.221,0.023,5.097,0.747,7.443c0.726,2.353,1.951,3.84,3.957,4.031v2.167c-2.006,0.191-3.23,1.678-3.957,4.031	c-0.724,2.345-0.824,5.222-0.747,7.443C40.71,38.868,38.909,41,36.475,41H11.529c-2.434,0-4.236-2.132-4.155-4.443	c0.077-2.221-0.023-5.097-0.747-7.443c-0.726-2.353-1.954-3.84-3.96-4.031v-2.167c2.006-0.191,3.233-1.678,3.96-4.031	C7.35,16.54,7.451,13.664,7.373,11.443z"
              ></path>
              <path
                fill="#fff"
                d="M27.073,23.464v-0.028c1.853-0.32,3.299-2.057,3.299-3.97c0-1.352-0.52-2.498-1.504-3.312	c-0.981-0.812-2.357-1.241-3.981-1.241H17.45V33.08h7.475c1.942,0,3.555-0.474,4.663-1.372c1.109-0.899,1.696-2.207,1.696-3.783	C31.283,25.544,29.593,23.756,27.073,23.464z M23.59,22.608h-3.181V17.29h3.784c2.076,0,3.219,0.911,3.219,2.565	C27.413,21.63,26.055,22.608,23.59,22.608z M20.409,24.834h3.759c2.716,0,4.092,0.981,4.092,2.916c0,1.932-1.357,2.953-3.925,2.953	h-3.926V24.834z"
              ></path>
            </svg>
            <h3 class="text-[13px] text-slate-50 mt-4">Bootstrap</h3>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Skills;
