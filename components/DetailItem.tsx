import Image from "next/image";
import React from "react";

interface Props {
  name: string;
  company: string;
  bio: string;
  followers: string;
  following: string;
  location: string;
  imageUrl: string;
}

export default function DetailItem({ name, company, bio, followers, following, location, imageUrl }: Props) {
  return (
    <div className="w-full mx-auto max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      <div className="flex flex-col items-center pb-10 mt-10">
        <Image className="w-24 h-24 mb-3 rounded-full shadow-lg" width={60} height={60} src={imageUrl} alt="img" />
        <h5 className="mb-1 text-xl font-medium text-gray-900 dark:text-white">{name}</h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">{bio}</span>
        <div className="flex mt-5 space-x-6">
          <div className="flex flex-col items-center justify-center">
            <div className="mb-2 text-xl font-extrabold">{followers}</div>
            <div className="font-light text-gray-500 dark:text-gray-400">Followers</div>
          </div>
          <div className="flex flex-col items-center justify-center">
            <div className="mb-2 text-xl font-extrabold">{following}</div>
            <div className="font-light text-gray-500 dark:text-gray-400">Following</div>
          </div>
        </div>
        <div className="flex mt-4 space-x-3 md:mt-6 w-full">
          <div className="ml-10 flex">
            <ul role="list" className="space-y-4 text-gray-500 dark:text-gray-400">
              <li className="flex space-x-2">
                <svg fill="#0000" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" stroke="#b0b0b0" className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500">
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    <path d="M22,7H13V2a1,1,0,0,0-1-1H2A1,1,0,0,0,1,2V22a1,1,0,0,0,1,1H22a1,1,0,0,0,1-1V8A1,1,0,0,0,22,7ZM11,13H3V11h8Zm0-5V9H3V7h8ZM3,15h8v2H3ZM11,3V5H3V3ZM3,19h8v2H3Zm18,2H13V9h8Zm-5-5H14V14h2Zm0,4H14V18h2Zm4-4H18V14h2Zm-4-4H14V10h2Zm4,0H18V10h2Zm0,8H18V18h2Z"></path>
                  </g>
                </svg>
                <span className="font-light leading-tight">{company}</span>
              </li>
              <li className="flex space-x-2">
                <svg fill="#0000" viewBox="0 0 34 34" xmlns="http://www.w3.org/2000/svg" stroke="#b0b0b0" className="flex-shrink-0 w-4 h-4 text-blue-600 dark:text-blue-500">
                  <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                  <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                  <g id="SVGRepo_iconCarrier">
                    {" "}
                    <path d="M16.114-0.011c-6.559 0-12.114 5.587-12.114 12.204 0 6.93 6.439 14.017 10.77 18.998 0.017 0.020 0.717 0.797 1.579 0.797h0.076c0.863 0 1.558-0.777 1.575-0.797 4.064-4.672 10-12.377 10-18.998 0-6.618-4.333-12.204-11.886-12.204zM16.515 29.849c-0.035 0.035-0.086 0.074-0.131 0.107-0.046-0.032-0.096-0.072-0.133-0.107l-0.523-0.602c-4.106-4.71-9.729-11.161-9.729-17.055 0-5.532 4.632-10.205 10.114-10.205 6.829 0 9.886 5.125 9.886 10.205 0 4.474-3.192 10.416-9.485 17.657zM16.035 6.044c-3.313 0-6 2.686-6 6s2.687 6 6 6 6-2.687 6-6-2.686-6-6-6zM16.035 16.044c-2.206 0-4.046-1.838-4.046-4.044s1.794-4 4-4c2.207 0 4 1.794 4 4 0.001 2.206-1.747 4.044-3.954 4.044z"></path>{" "}
                  </g>
                </svg>
                <span className="font-light leading-tight">{location || 404}</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
