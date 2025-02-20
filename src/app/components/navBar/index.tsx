'use client';
import React, { useState } from 'react';
import { Card, CardBody } from '@nextui-org/react';

export default function App() {
  const [searchValue, setSearchValue] = useState('');

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(event.target.value);
  };
  return (
    <div className="flex">
      {/* Search Box */}

      <div className="basis-2/5">
        <Card className=" shadow-small rounded-full ">
          <CardBody>
            {/* <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none"> */}
            <div className="flex">
              <div className="mt-2 mr-2">
                <svg
                  className="w-4 h-4 ml-2 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              {/* </div> */}
              <div className="w-full">
                <input
                  type="text"
                  value={searchValue}
                  onChange={handleSearchChange}
                  placeholder="Search"
                  className=" w-full p-1 focus:outline-none focus:border-transparent"
                />
              </div>
            </div>
          </CardBody>
        </Card>
      </div>

      {/*  Profile Section */}

      <div className="basis-3/5">
        <Card className=" shadow-small bg-slate-100 rounded-3xl h-full">
          <CardBody className="flex flex-row justify-between">
            <div className="flex-shrink-0">
              <p className="text-black">Profile</p>
            </div>

            {/* Profile Picture */}
            <div>
              <img
                src="https://i.pravatar.cc/150?u=a042581f4e29026024d"
                alt="profile picture"
                className="size-10 rounded-full"
              />
            </div>
            {/* <p className="text-black text-right">Profile</p> */}
            {/* <p className=" text-center">{onDuty}</p> */}
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
