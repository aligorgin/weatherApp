import {SearchIcon} from "@heroicons/react/outline";
import {useState} from "react";
import {forwardRefWithAs} from "@headlessui/react/dist/utils/render";


export function SearchingCity() {

    const [isActive, setIsActive] = useState(false);

    return (
        <div>
            <h1 className='text-gray-100 font-medium tracking-wide text-4xl text-center pt-8 '>Weather App</h1>
            <div className='flex justify-center mt-16'>
                <div
                    className='group flex border-b-2 border-blue-200 w-64 focus-within:border-blue-400 focus-within:text-blue-400 text-gray-100'>
                    <SearchIcon
                        className='h-5 w-5 mr-2.5 mt-0.5'
                    />
                    <input onClick={() => setIsActive(true)}
                           className='bg-transparent pb-1 focus:outline-none w-full text-gray-100' type="text"
                           placeholder='City..'/>
                </div>
                <button
                    className='px-6 py-1 bg-blue-300 rounded ml-16 focus:outline-none transform hover:-translate-y-1 transition ring-2 ring-opacity-40'>
                    <span className=''>Search</span>
                </button>
            </div>
        </div>
    )
}