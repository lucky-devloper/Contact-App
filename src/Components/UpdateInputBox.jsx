import React, { useContext, useState } from 'react'
import { DataContext } from '../Context/DataProvider'

function UpdateInputBox() {
    const { toggleUpdateBox, getUpdatedData , userUpdateData } = useContext(DataContext)

    const [dataID, setdataID] = useState(getUpdatedData.id)
    const [iseditedUsername, setiseditedUsername] = useState(getUpdatedData.userName)
    const [iseditedUseremail, setiseditedUseremail] = useState(getUpdatedData.userEmail)

    const updateData = () => {
        toggleUpdateBox()
        userUpdateData(dataID, iseditedUsername, iseditedUseremail)
    }

    return (
        <div className='bg-white text-black h-[260px] w-[100%] absolute top-0 flex flex-col p-3 rounded-md'>
            <label htmlFor="name" className='text-xl font-semibold'>Name</label>
            <input type="text" id='name' value={iseditedUsername} onChange={(e)=> setiseditedUsername(e.target.value)} className='border-4 border-black py-3 px-3 outline-none rounded-md' />
            <label htmlFor="email" className='text-xl font-semibold mt-4'>Email</label>
            <input type="email" id='email' value={iseditedUseremail} onChange={(e)=> setiseditedUseremail(e.target.value)} className='border-4 border-black py-3 px-3 outline-none rounded-md' />
            <button className='mt-4 border-2 border-black py-1 w-[150px] rounded-md text-xl font-semibold bg-yellow-400 self-end' onClick={updateData}>Update Contact</button>
        </div>
    )
}

export default UpdateInputBox