import React, { useContext, useState } from 'react'
import { DataContext } from '../Context/DataProvider'

function InputBox() {
    const [username, setusername] = useState('')
    const [useremail, setuseremail] = useState('')
    const { addData, toggleInputBox } = useContext(DataContext)

    const submitData = () =>{
        addData({userName: username, userEmail: useremail})
        setusername('')
        setuseremail('')
        toggleInputBox()
    }
    return (
        <div className='bg-white text-black h-[260px] w-[100%] absolute top-0 flex flex-col p-3 rounded-md'>
            <label htmlFor="name" className='text-xl font-semibold'>Name</label>
            <input type="text" id='name' value={username} onChange={(e) => setusername(e.target.value)} className='border-4 border-black py-3 px-3 outline-none rounded-md' />
            <label htmlFor="email" className='text-xl font-semibold mt-4'>Email</label>
            <input type="email" id='email' value={useremail} onChange={(e) => setuseremail(e.target.value)} className='border-4 border-black py-3 px-3 outline-none rounded-md' />
            <button className='mt-4 border-2 border-black py-1 w-[130px] rounded-md text-xl font-semibold bg-yellow-400 self-end' onClick={submitData}>Add Contact</button>
        </div>
    )
}

export default InputBox