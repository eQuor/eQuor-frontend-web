import React from 'react'

import Image from 'next/image'

import eQuor from '../public/eQuor.svg'

import ProductInnovation from '../public/ProductInnovation.svg'
import Navbar from '@components/Navbar'
const Home = () => {
  return (
    <>
      <main className="absolute top-0 w-full shadow-none">
        <header className="shadow-none">
          <Navbar />
        </header>

        <div class="max-w-7xl mx-auto bg-white  rounded-lg overflow-hidden mt-6">
          <div class="sm:flex p-10">
            <div class="sm:w-1/2 h-auto">
              <Image
                src={eQuor}
                alt="aboutus"
                className="w-[644px] h-[419px] z-10"
              />
            </div>
            <div class="sm:w-1/2 w-full flex flex-col justify-center items-start space-y-4 p-8">
              <h1 class="font-bold text-3xl mb-2">About eQuor</h1>
              <p class="text-gray-700 text-lg">
                eQuor is a leading organization focused on improving the
                attendance management system for university students. Our
                mission is to provide an efficient and user-friendly platform
                for universities to track and manage student attendance.
              </p>
              <p class="text-gray-700 text-lg">
                With our innovative technology, we aim to streamline the
                attendance marking process, making it easier for both faculty
                and students. We believe in the power of technology to transform
                the educational landscape, and we are committed to making a
                positive impact in universities worldwide.
              </p>
            </div>
          </div>
        </div>
        <div class="max-w-7xl mx-auto bg-white  rounded-lg overflow-hidden mt-6">
          <div class="sm:flex p-10">
            <div class="sm:w-1/2 w-full flex flex-col justify-center items-start space-y-4 p-8">
              <h1 class="font-bold text-3xl mb-2">Product Innovation</h1>
              <p class="text-gray-700 text-lg">
                At eQuor, we believe that innovation is the key to
                revolutionizing the educational landscape. Our product is
                designed with the latest technology to provide a seamless and
                efficient attendance management system for universities
              </p>
              <p class="text-gray-700 text-lg">
                We are proud of our innovative product that not only streamlines
                administrative processes but also contributes to a more engaging
                and effective learning environment for students. With eQuor,
                universities can harness the power of technology to enhance
                their educational systems and provide a better learning
                experience for their students.
              </p>
            </div>
            <div class="sm:w-1/2 h-auto">
              <Image
                src={ProductInnovation}
                alt="aboutus"
                className="w-[644px] h-[419px] z-10"
              />
            </div>
          </div>
        </div>

        <div class="max-w-7xl mx-auto bg-white shadow-md rounded-lg overflow-hidden mt-10">
          <div class="p-10">
            <h1 class="font-bold text-3xl mb-4">Contact Us</h1>
            <form action="/submit-form" method="POST">
              <div class="space-y-4">
                <div>
                  <label class="text-gray-700">Name</label>
                  <input
                    type="text"
                    name="name"
                    class="w-full mt-2 mb-6 px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
                    placeholder="Your Name"
                  />
                </div>
                <div>
                  <label class="text-gray-700">Email</label>
                  <input
                    type="email"
                    name="email"
                    class="w-full mt-2 mb-6 px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
                    placeholder="Your Email"
                  />
                </div>
                <div>
                  <label class="text-gray-700">Message</label>
                  <textarea
                    name="message"
                    rows="4"
                    class="w-full mt-2 mb-6 px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:border-blue-500"
                    placeholder="Your Message"
                  ></textarea>
                </div>
              </div>
              <button
                type="submit"
                class="w-full py-3 bg-blue-500 text-white rounded-lg font-bold text-lg hover:bg-blue-600"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
        {/* </body> */}
      </main>
    </>
  )
}

export default Home
