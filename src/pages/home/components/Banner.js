/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
import shoe from "./../../../assets/img/red-shoe.png";
const Banner = () => {
  return (
    <div>
      {/* <div
        className={`hero min-h-screen bg-gradient-to-r from-violet-500 to-fuchsia-500`}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="hero-content text-center text-neutral-content">
          <div className="max-w-md">
            <h1 className="mb-5 text-5xl font-bold">Hello there</h1>
            <p className="mb-5">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <button className="btn btn-primary">Get Started</button>
          </div>
        </div>
      </div> */}
      <div className="space-y-8 md:space-y-16 dark:bg-gray-800 dark:text-gray-100">
        <section className="dark:bg-gray-800 dark:text-gray-100">
          <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
            <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left read-aloud">
              <h1 className="text-5xl font-bold leading-none sm:text-6xl">
                Get your <br />
                <span className=" text-red-600"> Dream Shoes </span>
                <br />
                Today
              </h1>
              <p className="mt-6 mb-8 text-lg sm:mb-12">
                Good Footing for Good Life. &nbsp;
                <br className="hidden md:inline lg:hidden" />
                Our shoe store brings through the luxury of all the basics your
                feet can have. We provide your feet with comfort in every way.
              </p>
              <div className="flex flex-col space-y-4 sm:Items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                <Link
                  className="px-8 py-3 text-lg font-semibold border rounded  border-red-600 hover:border-transparent text-red-600 hover:text-stone-600"
                  to={"/about"}
                >
                  About Us
                </Link>
                <Link
                  className="px-8 py-3 text-lg font-semibold rounded dark:bg-violet-400 dark:text-gray-900 hover:text-red-600  hover:border border-red-600"
                  to={"/manage-Items"}
                >
                  Explorer Now
                </Link>
              </div>
            </div>
            <div className="flex Items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
              <img
                src={shoe}
                alt=""
                className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128 dark:bg-gray-500"
              />
            </div>
          </div>
        </section>
        {/* <div
          className="w-full dark:bg-gray-600"
          style="background-image: url('https://source.unsplash.com/random/1280x720'); background-position: center center; background-blend-mode: multiply; background-repeat: no-repeat; background-size: cover;"
        >
          <div className="container flex flex-col flex-wrap content-center justify-center p-4 py-20 mx-auto md:py-28">
            <h1 className="text-5xl antialiased font-bold leading-none text-center md:text-6xl dark:text-gray-100 read-aloud">
              Get Our Updates
            </h1>
            <p className="pt-2 pb-8 text-xl antialiased text-center dark:text-gray-100">
              Find out about events and other news
            </p>
            <div className="flex flex-row">
              <input
                type="text"
                placeholder="example@email.com"
                className="w-3/5 p-3 rounded-l-lg sm:w-2/3"
              />
              <button
                type="button"
                className="w-2/5 p-3 font-semibold rounded-r-lg sm:w-1/3 dark:bg-violet-400 dark:text-gray-900"
              >
                Subscribe
              </button>
            </div>
          </div>
        </div> */}
        {/* <section className="dark:bg-gray-800 dark:text-gray-100">
          <div className="container flex flex-col p-6 mx-auto">
            <h2 className="py-4 text-3xl font-bold text-center read-aloud">
              Temporibus elit
            </h2>
            <div className="divide-y divide-gray-700">
              <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
                <div className="flex Items-center justify-center lg:col-span-1 col-span-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="w-16 h-16"
                    data-darkreader-inline-fill=""
                    style="--darkreader-inline-fill:currentColor;"
                  >
                    <path d="M472,16H168a24,24,0,0,0-24,24V344a24,24,0,0,0,24,24H472a24,24,0,0,0,24-24V40A24,24,0,0,0,472,16Zm-8,320H176V48H464Z"></path>
                    <path d="M112,400V80H80V408a24,24,0,0,0,24,24H432V400Z"></path>
                    <path d="M48,464V144H16V472a24,24,0,0,0,24,24H368V464Z"></path>
                  </svg>
                </div>
                <div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
                  <span className="text-xs tracking-wider uppercase dark:text-violet-400">
                    Step 1 - Nihil
                  </span>
                  <span className="text-xl font-bold md:text-2xl">
                    Veritatis dolores
                  </span>
                  <span className="mt-4 dark:text-gray-300 read-aloud">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam facilis, voluptates error alias dolorem praesentium
                    sit soluta iure incidunt labore explicabo eaque, quia
                    architecto veritatis dolores, enim cons equatur nihil ipsum.
                  </span>
                </div>
              </div>
              <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
                <div className="flex Items-center justify-center lg:col-span-1 col-span-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="w-16 h-16"
                    data-darkreader-inline-fill=""
                    style="--darkreader-inline-fill:currentColor;"
                  >
                    <path d="M285.177,179l15.513-3.914-7.827-31.028-15.514,3.913a176.937,176.937,0,0,0-129.3,133.557l-3.407,15.633,31.266,6.814,3.406-15.634A145.559,145.559,0,0,1,285.177,179Z"></path>
                    <path d="M363.624,147.871C343.733,72.077,274.643,16,192.7,16,95.266,16,16,95.266,16,192.7c0,82.617,57,152.163,133.735,171.4A176.769,176.769,0,0,0,320.7,496c97.431,0,176.7-79.266,176.7-176.695C497.392,238.071,441.64,167.336,363.624,147.871ZM48,192.7C48,112.91,112.91,48,192.7,48s144.7,64.91,144.7,144.7-64.911,144.7-144.7,144.7S48,272.481,48,192.7ZM320.7,464c-60.931,0-115.21-38.854-135.843-94.792,2.6.115,5.214.184,7.843.184a176.862,176.862,0,0,0,32.7-3.047l97.625,97.625C322.247,463.983,321.473,464,320.7,464Zm41.528-6.083L260.26,355.954a176.9,176.9,0,0,0,43.662-26.072L408.37,434.33A144.385,144.385,0,0,1,362.223,457.917Zm69.3-45.692L326.851,307.557a177.082,177.082,0,0,0,27.911-44.5L457.67,365.964A144.661,144.661,0,0,1,431.519,412.225Zm33.594-84.073-99.42-99.42a176.785,176.785,0,0,0,3.7-36.036c0-3.285-.1-6.547-.276-9.787a145.054,145.054,0,0,1,96.276,136.4C465.392,322.276,465.291,325.224,465.113,328.152Z"></path>
                  </svg>
                </div>
                <div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
                  <span className="text-xs tracking-wider uppercase dark:text-violet-400">
                    Step 2 - Explicabo
                  </span>
                  <span className="text-xl font-bold md:text-2xl">
                    Iure incidunt labore
                  </span>
                  <span className="mt-4 dark:text-gray-300 read-aloud">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam facilis, voluptates error alias dolorem praesentium
                    sit soluta iure incidunt labore explicabo eaque, quia
                    architecto veritatis dolores, enim cons equatur nihil ipsum.
                  </span>
                </div>
              </div>
              <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
                <div className="flex Items-center justify-center lg:col-span-1 col-span-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="w-16 h-16"
                    data-darkreader-inline-fill=""
                    style="--darkreader-inline-fill:currentColor;"
                  >
                    <path d="M412.284,294.37l-12.5,15.642c-8.354,10.454-50.027,64.208-50.027,95.883,0,36.451,28.049,66.105,62.526,66.105s62.527-29.654,62.527-66.105c0-31.675-41.673-85.429-50.028-95.883Zm0,145.63c-16.832,0-30.526-15.3-30.526-34.105,0-11.662,15.485-37.883,30.531-59.2,15.043,21.3,30.522,47.509,30.522,59.2C442.811,424.7,429.116,440,412.284,440Z"></path>
                    <path d="M122.669,51.492,96.133,124.4,30.092,97.205,17.908,126.8l67.271,27.7L26.9,314.606a48.056,48.056,0,0,0,28.689,61.523l184.719,67.232a48,48,0,0,0,61.523-28.688L397.6,151.56Zm149.1,352.236a16,16,0,0,1-20.508,9.563L66.537,346.059a16,16,0,0,1-9.563-20.507L73.553,280H316.8ZM85.2,248l29.594-81.311,36.333,14.961a32.644,32.644,0,1,0,11.236-29.98l-36.615-15.077,16.046-44.085,214.79,78.177L328,249.219V248Z"></path>
                  </svg>
                </div>
                <div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
                  <span className="text-xs tracking-wider uppercase dark:text-violet-400">
                    Step 3 - Facilis
                  </span>
                  <span className="text-xl font-bold md:text-2xl">
                    Dolorem praesentium
                  </span>
                  <span className="mt-4 dark:bg-gray-800 dark:text-gray-300 read-aloud">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam facilis, voluptates error alias dolorem praesentium
                    sit soluta iure incidunt labore explicabo eaque, quia
                    architecto veritatis dolores, enim cons equatur nihil ipsum.
                  </span>
                </div>
              </div>
              <div className="grid justify-center grid-cols-4 p-8 mx-auto space-y-8 lg:space-y-0">
                <div className="flex Items-center justify-center lg:col-span-1 col-span-full">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                    fill="currentColor"
                    className="w-16 h-16"
                    data-darkreader-inline-fill=""
                    style="--darkreader-inline-fill:currentColor;"
                  >
                    <polygon points="388.632 393.82 495.823 255.94 388.684 118.178 363.424 137.822 455.288 255.944 363.368 374.18 388.632 393.82"></polygon>
                    <polygon points="148.579 374.181 56.712 255.999 148.629 137.823 123.371 118.177 16.177 255.993 123.314 393.819 148.579 374.181"></polygon>
                    <polygon points="330.529 16 297.559 16 178.441 496 211.412 496 330.529 16"></polygon>
                  </svg>
                </div>
                <div className="flex flex-col justify-center max-w-3xl text-center col-span-full lg:col-span-3 lg:text-left">
                  <span className="text-xs tracking-wider uppercase dark:text-violet-400">
                    Step 4 - Aperiam
                  </span>
                  <span className="text-xl font-bold md:text-2xl">
                    Explicabo eaque
                  </span>
                  <span className="mt-4 dark:text-gray-300 read-aloud">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Aperiam facilis, voluptates error alias dolorem praesentium
                    sit soluta iure incidunt labore explicabo eaque, quia
                    architecto veritatis dolores, enim cons equatur nihil ipsum.
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* <section className="py-6 dark:bg-gray-800 dark:text-gray-100">
          <div className="container p-4 mx-auto space-y-16 sm:p-10">
            <div className="space-y-4 read-aloud">
              <h3 className="text-2xl font-bold leading-none sm:text-5xl">
                Meet our team
              </h3>
              <p className="max-w-2xl dark:text-gray-400">
                At a assumenda quas cum earum ut itaque commodi saepe rem
                aspernatur quam natus quis nihil quod, hic explicabo doloribus
                magnam neque, exercitationem eius sunt!
              </p>
            </div>
            <div className="grid w-full grid-cols-1 gap-6 md:grid-cols-2">
              <div className="flex space-x-6">
                <img
                  alt=""
                  className="object-cover w-auto h-56 mb-4 bg-center rounded-sm dark:bg-gray-500"
                  src="https://source.unsplash.com/240x320/?portrait?0"
                />
                <div className="flex flex-col">
                  <h4 className="text-xl font-semibold">Leroy Jenkins</h4>
                  <p className="text-sm dark:text-gray-400">Web developer</p>
                  <div className="flex mt-2 space-x-2">
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="dark:text-gray-400"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 50 50"
                        fill="currentColor"
                        className="w-4 h-4"
                        data-darkreader-inline-fill=""
                        style="--darkreader-inline-fill:currentColor;"
                      >
                        <path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path>
                      </svg>
                    </a>
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="dark:text-gray-400"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                        className="w-4 h-4"
                        data-darkreader-inline-fill=""
                        style="--darkreader-inline-fill:currentColor;"
                      >
                        <path d="M8.268 28h-5.805v-18.694h5.805zM5.362 6.756c-1.856 0-3.362-1.538-3.362-3.394s1.505-3.362 3.362-3.362 3.362 1.505 3.362 3.362c0 1.856-1.506 3.394-3.362 3.394zM29.994 28h-5.792v-9.1c0-2.169-0.044-4.95-3.018-4.95-3.018 0-3.481 2.356-3.481 4.794v9.256h-5.799v-18.694h5.567v2.55h0.081c0.775-1.469 2.668-3.019 5.492-3.019 5.875 0 6.955 3.869 6.955 8.894v10.269z"></path>
                      </svg>
                    </a>
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="dark:text-gray-400"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                        className="w-4 h-4"
                        data-darkreader-inline-fill=""
                        style="--darkreader-inline-fill:currentColor;"
                      >
                        <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex space-x-6">
                <img
                  alt=""
                  className="object-cover w-auto h-56 mb-4 bg-center rounded-sm dark:bg-gray-500"
                  src="https://source.unsplash.com/240x320/?portrait?1"
                />
                <div className="flex flex-col">
                  <h4 className="text-xl font-semibold">Leroy Jenkins</h4>
                  <p className="text-sm dark:text-gray-400">Web developer</p>
                  <div className="flex mt-2 space-x-2">
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="dark:text-gray-400"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 50 50"
                        fill="currentColor"
                        className="w-4 h-4"
                        data-darkreader-inline-fill=""
                        style="--darkreader-inline-fill:currentColor;"
                      >
                        <path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path>
                      </svg>
                    </a>
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="dark:text-gray-400"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                        className="w-4 h-4"
                        data-darkreader-inline-fill=""
                        style="--darkreader-inline-fill:currentColor;"
                      >
                        <path d="M8.268 28h-5.805v-18.694h5.805zM5.362 6.756c-1.856 0-3.362-1.538-3.362-3.394s1.505-3.362 3.362-3.362 3.362 1.505 3.362 3.362c0 1.856-1.506 3.394-3.362 3.394zM29.994 28h-5.792v-9.1c0-2.169-0.044-4.95-3.018-4.95-3.018 0-3.481 2.356-3.481 4.794v9.256h-5.799v-18.694h5.567v2.55h0.081c0.775-1.469 2.668-3.019 5.492-3.019 5.875 0 6.955 3.869 6.955 8.894v10.269z"></path>
                      </svg>
                    </a>
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="dark:text-gray-400"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                        className="w-4 h-4"
                        data-darkreader-inline-fill=""
                        style="--darkreader-inline-fill:currentColor;"
                      >
                        <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex space-x-6">
                <img
                  alt=""
                  className="object-cover w-auto h-56 mb-4 bg-center rounded-sm dark:bg-gray-500"
                  src="https://source.unsplash.com/240x320/?portrait?2"
                />
                <div className="flex flex-col">
                  <h4 className="text-xl font-semibold">Leroy Jenkins</h4>
                  <p className="text-sm dark:text-gray-400">Web developer</p>
                  <div className="flex mt-2 space-x-2">
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="dark:text-gray-400"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 50 50"
                        fill="currentColor"
                        className="w-4 h-4"
                        data-darkreader-inline-fill=""
                        style="--darkreader-inline-fill:currentColor;"
                      >
                        <path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path>
                      </svg>
                    </a>
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="dark:text-gray-400"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                        className="w-4 h-4"
                        data-darkreader-inline-fill=""
                        style="--darkreader-inline-fill:currentColor;"
                      >
                        <path d="M8.268 28h-5.805v-18.694h5.805zM5.362 6.756c-1.856 0-3.362-1.538-3.362-3.394s1.505-3.362 3.362-3.362 3.362 1.505 3.362 3.362c0 1.856-1.506 3.394-3.362 3.394zM29.994 28h-5.792v-9.1c0-2.169-0.044-4.95-3.018-4.95-3.018 0-3.481 2.356-3.481 4.794v9.256h-5.799v-18.694h5.567v2.55h0.081c0.775-1.469 2.668-3.019 5.492-3.019 5.875 0 6.955 3.869 6.955 8.894v10.269z"></path>
                      </svg>
                    </a>
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="dark:text-gray-400"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                        className="w-4 h-4"
                        data-darkreader-inline-fill=""
                        style="--darkreader-inline-fill:currentColor;"
                      >
                        <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex space-x-6">
                <img
                  alt=""
                  className="object-cover w-auto h-56 mb-4 bg-center rounded-sm dark:bg-gray-500"
                  src="https://source.unsplash.com/240x320/?portrait?3"
                />
                <div className="flex flex-col">
                  <h4 className="text-xl font-semibold">Leroy Jenkins</h4>
                  <p className="text-sm dark:text-gray-400">Web developer</p>
                  <div className="flex mt-2 space-x-2">
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="dark:text-gray-400"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 50 50"
                        fill="currentColor"
                        className="w-4 h-4"
                        data-darkreader-inline-fill=""
                        style="--darkreader-inline-fill:currentColor;"
                      >
                        <path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path>
                      </svg>
                    </a>
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="dark:text-gray-400"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                        className="w-4 h-4"
                        data-darkreader-inline-fill=""
                        style="--darkreader-inline-fill:currentColor;"
                      >
                        <path d="M8.268 28h-5.805v-18.694h5.805zM5.362 6.756c-1.856 0-3.362-1.538-3.362-3.394s1.505-3.362 3.362-3.362 3.362 1.505 3.362 3.362c0 1.856-1.506 3.394-3.362 3.394zM29.994 28h-5.792v-9.1c0-2.169-0.044-4.95-3.018-4.95-3.018 0-3.481 2.356-3.481 4.794v9.256h-5.799v-18.694h5.567v2.55h0.081c0.775-1.469 2.668-3.019 5.492-3.019 5.875 0 6.955 3.869 6.955 8.894v10.269z"></path>
                      </svg>
                    </a>
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="dark:text-gray-400"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                        className="w-4 h-4"
                        data-darkreader-inline-fill=""
                        style="--darkreader-inline-fill:currentColor;"
                      >
                        <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex space-x-6">
                <img
                  alt=""
                  className="object-cover w-auto h-56 mb-4 bg-center rounded-sm dark:bg-gray-500"
                  src="https://source.unsplash.com/240x320/?portrait?4"
                />
                <div className="flex flex-col">
                  <h4 className="text-xl font-semibold">Leroy Jenkins</h4>
                  <p className="text-sm dark:text-gray-400">Web developer</p>
                  <div className="flex mt-2 space-x-2">
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="dark:text-gray-400"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 50 50"
                        fill="currentColor"
                        className="w-4 h-4"
                        data-darkreader-inline-fill=""
                        style="--darkreader-inline-fill:currentColor;"
                      >
                        <path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path>
                      </svg>
                    </a>
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="dark:text-gray-400"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                        className="w-4 h-4"
                        data-darkreader-inline-fill=""
                        style="--darkreader-inline-fill:currentColor;"
                      >
                        <path d="M8.268 28h-5.805v-18.694h5.805zM5.362 6.756c-1.856 0-3.362-1.538-3.362-3.394s1.505-3.362 3.362-3.362 3.362 1.505 3.362 3.362c0 1.856-1.506 3.394-3.362 3.394zM29.994 28h-5.792v-9.1c0-2.169-0.044-4.95-3.018-4.95-3.018 0-3.481 2.356-3.481 4.794v9.256h-5.799v-18.694h5.567v2.55h0.081c0.775-1.469 2.668-3.019 5.492-3.019 5.875 0 6.955 3.869 6.955 8.894v10.269z"></path>
                      </svg>
                    </a>
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="dark:text-gray-400"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                        className="w-4 h-4"
                        data-darkreader-inline-fill=""
                        style="--darkreader-inline-fill:currentColor;"
                      >
                        <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              <div className="flex space-x-6">
                <img
                  alt=""
                  className="object-cover w-auto h-56 mb-4 bg-center rounded-sm dark:bg-gray-500"
                  src="https://source.unsplash.com/240x320/?portrait?5"
                />
                <div className="flex flex-col">
                  <h4 className="text-xl font-semibold read-aloud">
                    Leroy Jenkins
                  </h4>
                  <p className="text-sm dark:text-gray-400">Web developer</p>
                  <div className="flex mt-2 space-x-2">
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="dark:text-gray-400"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 50 50"
                        fill="currentColor"
                        className="w-4 h-4"
                        data-darkreader-inline-fill=""
                        style="--darkreader-inline-fill:currentColor;"
                      >
                        <path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path>
                      </svg>
                    </a>
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="dark:text-gray-400"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                        className="w-4 h-4"
                        data-darkreader-inline-fill=""
                        style="--darkreader-inline-fill:currentColor;"
                      >
                        <path d="M8.268 28h-5.805v-18.694h5.805zM5.362 6.756c-1.856 0-3.362-1.538-3.362-3.394s1.505-3.362 3.362-3.362 3.362 1.505 3.362 3.362c0 1.856-1.506 3.394-3.362 3.394zM29.994 28h-5.792v-9.1c0-2.169-0.044-4.95-3.018-4.95-3.018 0-3.481 2.356-3.481 4.794v9.256h-5.799v-18.694h5.567v2.55h0.081c0.775-1.469 2.668-3.019 5.492-3.019 5.875 0 6.955 3.869 6.955 8.894v10.269z"></path>
                      </svg>
                    </a>
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="dark:text-gray-400"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="currentColor"
                        viewBox="0 0 32 32"
                        className="w-4 h-4"
                        data-darkreader-inline-fill=""
                        style="--darkreader-inline-fill:currentColor;"
                      >
                        <path d="M16 0.396c-8.839 0-16 7.167-16 16 0 7.073 4.584 13.068 10.937 15.183 0.803 0.151 1.093-0.344 1.093-0.772 0-0.38-0.009-1.385-0.015-2.719-4.453 0.964-5.391-2.151-5.391-2.151-0.729-1.844-1.781-2.339-1.781-2.339-1.448-0.989 0.115-0.968 0.115-0.968 1.604 0.109 2.448 1.645 2.448 1.645 1.427 2.448 3.744 1.74 4.661 1.328 0.14-1.031 0.557-1.74 1.011-2.135-3.552-0.401-7.287-1.776-7.287-7.907 0-1.751 0.62-3.177 1.645-4.297-0.177-0.401-0.719-2.031 0.141-4.235 0 0 1.339-0.427 4.4 1.641 1.281-0.355 2.641-0.532 4-0.541 1.36 0.009 2.719 0.187 4 0.541 3.043-2.068 4.381-1.641 4.381-1.641 0.859 2.204 0.317 3.833 0.161 4.235 1.015 1.12 1.635 2.547 1.635 4.297 0 6.145-3.74 7.5-7.296 7.891 0.556 0.479 1.077 1.464 1.077 2.959 0 2.14-0.020 3.864-0.020 4.385 0 0.416 0.28 0.916 1.104 0.755 6.4-2.093 10.979-8.093 10.979-15.156 0-8.833-7.161-16-16-16z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section> */}
        {/* <section className="py-8 dark:bg-gray-800 dark:text-gray-100">
          <div className="container flex flex-col Items-center p-4 mx-auto space-y-6 md:p-8 read-aloud">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 512 512"
              fill="currentColor"
              className="w-16 h-16 dark:text-violet-400"
              data-darkreader-inline-fill=""
              style="--darkreader-inline-fill:currentColor;"
            >
              <polygon points="328.375 384 332.073 458.999 256.211 406.28 179.924 459.049 183.625 384 151.586 384 146.064 496 182.756 496 256.169 445.22 329.242 496 365.936 496 360.414 384 328.375 384"></polygon>
              <path d="M415.409,154.914l-2.194-48.054L372.7,80.933,346.768,40.414l-48.055-2.2L256,16.093,213.287,38.219l-48.055,2.2L139.3,80.933,98.785,106.86l-2.194,48.054L74.464,197.628l22.127,42.715,2.2,48.053L139.3,314.323l25.928,40.52,48.055,2.195L256,379.164l42.713-22.126,48.055-2.195,25.928-40.52L413.214,288.4l2.195-48.053,22.127-42.715Zm-31.646,76.949L382,270.377l-32.475,20.78-20.78,32.475-38.515,1.76L256,343.125l-34.234-17.733-38.515-1.76-20.78-32.475L130,270.377l-1.759-38.514L110.5,197.628,128.237,163.4,130,124.88,162.471,104.1l20.78-32.474,38.515-1.76L256,52.132l34.234,17.733,38.515,1.76,20.78,32.474L382,124.88l1.759,38.515L401.5,197.628Z"></path>
            </svg>
            <p className="px-6 py-2 text-2xl font-semibold text-center sm:font-bold sm:text-3xl md:text-4xl lg:max-w-2xl xl:max-w-4xl dark:text-gray-300">
              "Veniam quidem animi ea maxime odit fugiat architecto perferendis
              ipsum perspiciatis iusto, provident qui nam dolorum corporis."
            </p>
            <div className="flex justify-center space-x-3">
              <img
                src="https://source.unsplash.com/80x80/?portrait"
                alt=""
                className="w-20 h-20 bg-center bg-cover rounded-md dark:bg-gray-500 dark:bg-gray-700"
              />
              <div>
                <p className="leading-tight">Leroy Jenkins</p>
                <p className="text-sm leading-tight dark:text-gray-300">
                  Founder, Company
                </p>
                <a
                  className="flex Items-center py-2 space-x-1 text-sm dark:text-violet-400"
                  href="/"
                >
                  <span>Read full story</span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-4 h-4"
                    data-darkreader-inline-fill=""
                    style="--darkreader-inline-fill:currentColor;"
                  >
                    <path
                      fillRule="evenodd"
                      d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section> */}
        {/* <div className="grid max-w-screen-xl grid-cols-1 gap-8 px-8 py-16 mx-auto rounded-lg md:grid-cols-2 md:px-12 lg:px-16 xl:px-32 dark:bg-gray-800 dark:text-gray-100">
          <div className="flex flex-col justify-between">
            <div className="space-y-2">
              <h2 className="text-4xl font-bold leading-tight lg:text-5xl">
                Let's talk!
              </h2>
              <div className="dark:text-gray-400">
                Vivamus in nisl metus? Phasellus.
              </div>
            </div>
            <img
              src="assets/svg/doodle.svg"
              alt="Contact our customer support"
              className="p-6 h-52 md:h-64"
            />
          </div>
          <form
            noValidate=""
            className="space-y-6 ng-untouched ng-pristine ng-valid"
          >
            <div>
              <label htmlFor="name" className="text-sm">
                Full name
              </label>
              <input
                id="name"
                type="text"
                placeholder="Your name"
                className="w-full p-3 rounded dark:bg-gray-800"
              />
            </div>
            <div>
              <label htmlFor="email" className="text-sm">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Your email"
                className="w-full p-3 rounded dark:bg-gray-800"
              />
            </div>
            <div>
              <label htmlFor="message" className="text-sm">
                Message
              </label>
              <textarea
                id="message"
                rows="3"
                placeholder="Your message"
                className="w-full p-3 rounded dark:bg-gray-800"
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full p-3 text-sm font-bold tracking-wide uppercase rounded dark:bg-violet-400 dark:text-gray-900"
            >
              Send Message
            </button>
          </form>
        </div> */}
        {/* <section className="dark:bg-gray-800 dark:text-gray-100">
          <div className="container flex flex-col justify-center p-4 mx-auto md:p-8">
            <p className="p-2 text-sm font-medium tracking-wider text-center uppercase">
              How it works
            </p>
            <h2 className="mb-12 text-4xl font-bold leading-none text-center sm:text-5xl read-aloud">
              Frequently Asked Questions
            </h2>
            <div className="grid gap-10 md:gap-8 sm:p-3 md:grid-cols-2 lg:px-12 xl:px-32">
              <div className="read-aloud">
                <h3 className="font-semibold">Lorem ipsum dolor sit amet.</h3>
                <p className="mt-1 dark:text-gray-400">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Ratione, fugit? Aspernatur, ullam enim, odit eaque quia rerum
                  ipsum voluptatem consequatur ratione, doloremque debitis? Fuga
                  labore omnis minima, quisquam delectus culpa!
                </p>
              </div>
              <div className="read-aloud">
                <h3 className="font-semibold">Lorem ipsum dolor sit amet.</h3>
                <p className="mt-1 dark:text-gray-400">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Ratione, fugit? Aspernatur, ullam enim, odit eaque quia rerum
                  ipsum voluptatem consequatur ratione, doloremque debitis? Fuga
                  labore omnis minima, quisquam delectus culpa!
                </p>
              </div>
              <div className="read-aloud">
                <h3 className="font-semibold">Lorem ipsum dolor sit amet.</h3>
                <p className="mt-1 dark:text-gray-400">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Ratione, fugit? Aspernatur, ullam enim, odit eaque quia rerum
                  ipsum voluptatem consequatur ratione, doloremque debitis? Fuga
                  labore omnis minima, quisquam delectus culpa!
                </p>
              </div>
              <div className="read-aloud">
                <h3 className="font-semibold">Lorem ipsum dolor sit amet.</h3>
                <p className="mt-1 dark:text-gray-400">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Ratione, fugit? Aspernatur, ullam enim, odit eaque quia rerum
                  ipsum voluptatem consequatur ratione, doloremque debitis? Fuga
                  labore omnis minima, quisquam delectus culpa!
                </p>
              </div>
              <div className="read-aloud">
                <h3 className="font-semibold">Lorem ipsum dolor sit amet.</h3>
                <p className="mt-1 dark:text-gray-400">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Ratione, fugit? Aspernatur, ullam enim, odit eaque quia rerum
                  ipsum voluptatem consequatur ratione, doloremque debitis? Fuga
                  labore omnis minima, quisquam delectus culpa!
                </p>
              </div>
              <div className="read-aloud">
                <h3 className="font-semibold">Lorem ipsum dolor sit amet.</h3>
                <p className="mt-1 dark:text-gray-400">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                  Ratione, fugit? Aspernatur, ullam enim, odit eaque quia rerum
                  ipsum voluptatem consequatur ratione, doloremque debitis? Fuga
                  labore omnis minima, quisquam delectus culpa!
                </p>
              </div>
            </div>
          </div>
        </section> */}
        {/* <footer className="py-6 dark:bg-gray-800 dark:text-gray-50">
          <div className="container px-6 mx-auto space-y-6 divide-y divide-gray-400 md:space-y-12 divide-opacity-50">
            <div className="grid grid-cols-12 gap-6">
              <div className="pb-6 col-span-full md:pb-0 md:col-span-6">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="flex justify-center space-x-3 md:justify-start"
                >
                  <div className="flex Items-center justify-center w-12 h-12 rounded-full dark:bg-violet-400">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 32 32"
                      fill="currentColor"
                      className="w-5 h-5 rounded-full dark:text-gray-900"
                      data-darkreader-inline-fill=""
                      style="--darkreader-inline-fill:currentColor;"
                    >
                      <path d="M18.266 26.068l7.839-7.854 4.469 4.479c1.859 1.859 1.859 4.875 0 6.734l-1.104 1.104c-1.859 1.865-4.875 1.865-6.734 0zM30.563 2.531l-1.109-1.104c-1.859-1.859-4.875-1.859-6.734 0l-6.719 6.734-6.734-6.734c-1.859-1.859-4.875-1.859-6.734 0l-1.104 1.104c-1.859 1.859-1.859 4.875 0 6.734l6.734 6.734-6.734 6.734c-1.859 1.859-1.859 4.875 0 6.734l1.104 1.104c1.859 1.859 4.875 1.859 6.734 0l21.307-21.307c1.859-1.859 1.859-4.875 0-6.734z"></path>
                    </svg>
                  </div>
                  <span className="self-center text-2xl font-semibold">
                    Brand name
                  </span>
                </a>
              </div>
              <div className="text-center col-span-full sm:col-span-6 md:text-left md:col-span-2">
                <p className="pb-1 text-lg font-medium">Category</p>
                <ul>
                  <li>
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="hover:dark:text-violet-400"
                    >
                      Link
                    </a>
                  </li>
                  <li>
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="hover:dark:text-violet-400"
                    >
                      Link
                    </a>
                  </li>
                  <li>
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="hover:dark:text-violet-400"
                    >
                      Link
                    </a>
                  </li>
                  <li>
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="hover:dark:text-violet-400"
                    >
                      Link
                    </a>
                  </li>
                  <li>
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="hover:dark:text-violet-400"
                    >
                      Link
                    </a>
                  </li>
                </ul>
              </div>
              <div className="text-center col-span-full sm:col-span-6 md:text-left md:col-span-2">
                <p className="pb-1 text-lg font-medium">Category</p>
                <ul>
                  <li>
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="hover:dark:text-violet-400"
                    >
                      Link
                    </a>
                  </li>
                  <li>
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="hover:dark:text-violet-400"
                    >
                      Link
                    </a>
                  </li>
                  <li>
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="hover:dark:text-violet-400"
                    >
                      Link
                    </a>
                  </li>
                  <li>
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="hover:dark:text-violet-400"
                    >
                      Link
                    </a>
                  </li>
                  <li>
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="hover:dark:text-violet-400"
                    >
                      Link
                    </a>
                  </li>
                </ul>
              </div>
              <div className="text-center col-span-full sm:col-span-6 md:text-left md:col-span-2">
                <p className="pb-1 text-lg font-medium">Category</p>
                <ul>
                  <li>
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="hover:dark:text-violet-400"
                    >
                      Link
                    </a>
                  </li>
                  <li>
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="hover:dark:text-violet-400"
                    >
                      Link
                    </a>
                  </li>
                  <li>
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="hover:dark:text-violet-400"
                    >
                      Link
                    </a>
                  </li>
                  <li>
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="hover:dark:text-violet-400"
                    >
                      Link
                    </a>
                  </li>
                  <li>
                    <a
                      rel="noopener noreferrer"
                      href="#"
                      className="hover:dark:text-violet-400"
                    >
                      Link
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="grid justify-center pt-6 lg:justify-between">
              <div className="flex flex-col self-center text-sm text-center md:block lg:col-start-1 md:space-x-6">
                <span>©1998 All rights reserved</span>
                <a rel="noopener noreferrer" href="#">
                  <span>Privacy policy</span>
                </a>
                <a rel="noopener noreferrer" href="#">
                  <span>Terms of service</span>
                </a>
              </div>
              <div className="flex justify-center pt-4 space-x-4 lg:pt-0 lg:col-end-13">
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="flex Items-center justify-center w-10 h-10 rounded-full dark:bg-violet-400 dark:text-gray-900"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="w-5 h-5"
                    data-darkreader-inline-fill=""
                    style="--darkreader-inline-fill:currentColor;"
                  >
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
                  </svg>
                </a>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="flex Items-center justify-center w-10 h-10 rounded-full dark:bg-violet-400 dark:text-gray-900"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 50 50"
                    fill="currentColor"
                    className="w-5 h-5"
                    data-darkreader-inline-fill=""
                    style="--darkreader-inline-fill:currentColor;"
                  >
                    <path d="M 50.0625 10.4375 C 48.214844 11.257813 46.234375 11.808594 44.152344 12.058594 C 46.277344 10.785156 47.910156 8.769531 48.675781 6.371094 C 46.691406 7.546875 44.484375 8.402344 42.144531 8.863281 C 40.269531 6.863281 37.597656 5.617188 34.640625 5.617188 C 28.960938 5.617188 24.355469 10.21875 24.355469 15.898438 C 24.355469 16.703125 24.449219 17.488281 24.625 18.242188 C 16.078125 17.8125 8.503906 13.71875 3.429688 7.496094 C 2.542969 9.019531 2.039063 10.785156 2.039063 12.667969 C 2.039063 16.234375 3.851563 19.382813 6.613281 21.230469 C 4.925781 21.175781 3.339844 20.710938 1.953125 19.941406 C 1.953125 19.984375 1.953125 20.027344 1.953125 20.070313 C 1.953125 25.054688 5.5 29.207031 10.199219 30.15625 C 9.339844 30.390625 8.429688 30.515625 7.492188 30.515625 C 6.828125 30.515625 6.183594 30.453125 5.554688 30.328125 C 6.867188 34.410156 10.664063 37.390625 15.160156 37.472656 C 11.644531 40.230469 7.210938 41.871094 2.390625 41.871094 C 1.558594 41.871094 0.742188 41.824219 -0.0585938 41.726563 C 4.488281 44.648438 9.894531 46.347656 15.703125 46.347656 C 34.617188 46.347656 44.960938 30.679688 44.960938 17.09375 C 44.960938 16.648438 44.949219 16.199219 44.933594 15.761719 C 46.941406 14.3125 48.683594 12.5 50.0625 10.4375 Z"></path>
                  </svg>
                </a>
                <a
                  rel="noopener noreferrer"
                  href="#"
                  className="flex Items-center justify-center w-10 h-10 rounded-full dark:bg-violet-400 dark:text-gray-900"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                    className="w-6 h-6"
                    data-darkreader-inline-fill=""
                    style="--darkreader-inline-fill:currentColor;"
                  >
                    <path d="M10.9,2.1c-4.6,0.5-8.3,4.2-8.8,8.7c-0.5,4.7,2.2,8.9,6.3,10.5C8.7,21.4,9,21.2,9,20.8v-1.6c0,0-0.4,0.1-0.9,0.1 c-1.4,0-2-1.2-2.1-1.9c-0.1-0.4-0.3-0.7-0.6-1C5.1,16.3,5,16.3,5,16.2C5,16,5.3,16,5.4,16c0.6,0,1.1,0.7,1.3,1c0.5,0.8,1.1,1,1.4,1 c0.4,0,0.7-0.1,0.9-0.2c0.1-0.7,0.4-1.4,1-1.8c-2.3-0.5-4-1.8-4-4c0-1.1,0.5-2.2,1.2-3C7.1,8.8,7,8.3,7,7.6C7,7.2,7,6.6,7.3,6 c0,0,1.4,0,2.8,1.3C10.6,7.1,11.3,7,12,7s1.4,0.1,2,0.3C15.3,6,16.8,6,16.8,6C17,6.6,17,7.2,17,7.6c0,0.8-0.1,1.2-0.2,1.4 c0.7,0.8,1.2,1.8,1.2,3c0,2.2-1.7,3.5-4,4c0.6,0.5,1,1.4,1,2.3v2.6c0,0.3,0.3,0.6,0.7,0.5c3.7-1.5,6.3-5.1,6.3-9.3 C22,6.1,16.9,1.4,10.9,2.1z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </footer> */}
      </div>
    </div>
  );
};

export default Banner;
