import React, { useContext, useState } from 'react'
import { IoMdSearch } from "react-icons/io";
import { IoIosAddCircleOutline } from "react-icons/io";
import UserContact from './UserContact';
import InputBox from './InputBox';
import { DataContext } from '../Context/DataProvider';
import UpdateInputBox from './UpdateInputBox';

function Homepage() {
    const { toggleInputBox, toggleInput, toggleupdate, searchData, setsearchData } = useContext(DataContext)

    return (
        <div className='border-2 border-black w-[450px] h-[750px] rounded-md bg-[#323335] text-white p-4 overflow-hidden'>
            <h1 className='text-center border-2 py-3 text-2xl rounded-md bg-[#fff] text-black font-semibold'>Luna Contact App</h1>
            <div className=' flex justify-between items-center mt-4 w-[100%]'>
                <div className='flex justify-center items-center border-2 w-[80%] h-[50px] rounded-md px-2 overflow-hidden'>
                    <button><IoMdSearch fontSize='30px' cursor='pointer' /></button>
                    <input type="text" value={searchData} onChange={(e) => setsearchData(e.target.value)} placeholder='Search Contact' className='w-[100%] h-[100%] px-4 bg-transparent outline-none' />
                </div>
                <button onClick={() => toggleInputBox()} className='active:text-green-400'><IoIosAddCircleOutline fontSize='50px' cursor='pointer' /></button>
            </div>
            <div className='w-[100%] relative'>
                <UserContact />
                {toggleInput && <InputBox />}
                {toggleupdate && <UpdateInputBox />}
            </div>
        </div>
    )
}

export default Homepage