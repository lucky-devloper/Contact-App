import React, { useContext} from 'react'
import { FaRegUserCircle } from "react-icons/fa";
import { TbEditCircle } from "react-icons/tb";
import { MdDelete } from "react-icons/md";
import { DataContext } from '../Context/DataProvider';

function UserContact() {
    const { Data, DeleteData, toggleUpdateBox, setgetUpdatedData } = useContext(DataContext)

    const updateData = (id) => {
        toggleUpdateBox()
        let getmatchedData = Data.find((data)=> data.id === id)
        setgetUpdatedData(getmatchedData)    
    }
    
    return (
        <div className='mt-4 h-[565px] rounded'>
            <ul className='w-[100%] flex flex-col gap-4'>
                {Data.map((data, index) => {
                    return <li key={index} className='flex justify-between items-center w-[100%] border-2 p-2 rounded-md bg-[#feeaad] text-black'>
                        <div className='flex items-center gap-2 w-[90%]'>
                            <button><FaRegUserCircle fontSize='50px' /></button>
                            <div className='flex flex-col w-[100%] text-[18px]'>
                                <label htmlFor="" className='font-semibold'>{data.userName}</label>
                                <input type="email" value={data.userEmail} readOnly className='text-black w-[100%] outline-none bg-transparent' />
                            </div>
                        </div>
                        <div className='flex justify-center items-center'>
                            <button onClick={()=> updateData(data.id)}><TbEditCircle fontSize='35px' /></button>
                            <button onClick={()=> DeleteData(data.id)}><MdDelete fontSize='35px' /></button>
                        </div>
                    </li>
                })}
            </ul>
        </div>
    )
}

export default UserContact