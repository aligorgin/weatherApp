import {SearchIcon} from "@heroicons/react/outline";
import { useRef, useState} from "react";
import styled from "styled-components";

export function SearchingCity() {

    const buttonEl = useRef<HTMLButtonElement>();

    const [x, setX] = useState(0);
    const [y, setY] = useState(0);

    const handleOnMouseMove = (e) => {
        setX(e.pageX - buttonEl.current.offsetLeft);
        setY(e.pageY - buttonEl.current.offsetTop);
    }

    const h1 = styled.h1`
    
    `

    return(
        <>

        </>
    )

}

// return (
//     <>
//         <h1 className='text-gray-100 font-medium tracking-wide text-4xl text-center pt-8 '>Weather App</h1>
//         <div className='flex justify-center mt-16'>
//             <div
//                 className='group flex border-b-2 border-blue-200 w-64 focus-within:border-blue-400 focus-within:text-blue-400 text-gray-100'>
//                 <SearchIcon
//                     className='h-5 w-5 mr-2.5 mt-0.5'
//                 />
//                 <input className='bg-transparent pb-1 focus:outline-none w-full text-gray-100' type="text"
//                        placeholder='City..'/>
//             </div>
//
//                 <button
//                     style={beforeButtonEl}
//                     ref={buttonEl}
//                     className='relative inline-flex px-8 py-2.5 bg-gray-700 tracking-wide overflow-hidden btn-p text-white'
//                     onMouseMove={handleOnMouseMove}
//                 >
//                     <div
//                         style={{top: `${y}px`, left: `${x}px`}}
//                         className='absolute w-1 h-1 rounded-full bg-blue-300 btn transform -translate-x-1/2 -translate-y-1/2'
//                     />
//                     <span style={{zIndex: 1}} className='relative'>Search</span>
//                 </button>
//         </div>
//     </>
// )