import React from "react";
import { FaBeer } from "react-icons/fa";
import { Home_Content } from "../../Content/Home_Content";
export default function FeatureSection({}) {
  const about = Home_Content.Features;
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-24 mx-auto">
        <div className="flex-grow mb-20">
          <h1 class="sm:text-3xl text-2xl font-medium title-font text-center text-gray-900 ">
            {about.title}
          </h1>
          <p class=" max-w-[60rem] mx-auto mt-5 text-center">
            {about.description}
          </p>
        </div>
        <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
          {about.items.map((item, index) => (
            <div class="p-4 md:w-1/3 flex">
              <div
                key={index}
                class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0"
              >
                {/*   <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg> */}
                <FaBeer />
              </div>
              <div class="flex-grow pl-6">
                <h2 class="text-gray-900 text-lg title-font font-medium mb-2">
                  {item.title}
                </h2>
                <p class="leading-relaxed text-base">{item.description}</p>
              </div>
            </div>
          ))}
          {/* <div class="p-4 md:w-1/3 flex">
          <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <circle cx="6" cy="6" r="3"></circle>
              <circle cx="6" cy="18" r="3"></circle>
              <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
            </svg>
          </div>
          <div class="flex-grow pl-6">
            <h2 class="text-gray-900 text-lg title-font font-medium mb-2">
              The Catalyzer
            </h2>
            <p class="leading-relaxed text-base">
              Blue bottle crucifix vinyl post-ironic four dollar toast vegan
              taxidermy. Gastropub indxgo juice poutine, ramps microdosing
              banh mi pug VHS try-hard ugh iceland kickstarter tumblr
              live-edge tilde.
            </p>
          </div>
        </div> */}
          {/*  <div class="p-4 md:w-1/3 flex">
          <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
            <svg
              fill="none"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              class="w-6 h-6"
              viewBox="0 0 24 24"
            >
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <div class="flex-grow pl-6">
            <h2 class="text-gray-900 text-lg title-font font-medium mb-2">
              Neptune
            </h2>
            <p class="leading-relaxed text-base">
              Blue bottle crucifix vinyl post-ironic four dollar toast vegan
              taxidermy. Gastropub indxgo juice poutine, ramps microdosing
              banh mi pug VHS try-hard ugh iceland kickstarter tumblr
              live-edge tilde.
            </p>
          </div>
        </div> */}
        </div>
      </div>
    </section>
  );
}
