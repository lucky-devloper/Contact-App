import React, { createContext, useEffect, useState } from 'react'

export const DataContext = createContext()
function DataProvider({ children }) {
    const [searchData, setsearchData] = useState('')
    const [toggleInput, settoggleInput] = useState(false)
    const [toggleupdate, settoggleupdate] = useState(false)
    const [Data, setData] = useState([])
    const [originalData, setoriginalData] = useState([])
    const [getUpdatedData, setgetUpdatedData] = useState()

    const addData = (data) => {
        const newData = [{ id: Date.now(), ...data }, ...Data]
        setData(newData)
        setoriginalData(newData)
    }

    const toggleInputBox = () => {
        settoggleInput((prev) => !prev)
    }

    const toggleUpdateBox = () =>{
        settoggleupdate((prev)=> !prev)
    }

    const searchProfile = () => {
        const inputdata = Data.filter((user) => user.userName.toLowerCase().includes(searchData))
        setData(inputdata)
    }

    const userUpdateData = (id, username, useremail) => {
        setData((prev)=> prev.map((prevdata)=> prevdata.id === id ? {...Data, userName:username, userEmail: useremail} : prevdata))
    }

    const DeleteData = (id) => {
        setData((prev) => prev.filter((prevdata) => prevdata.id !== id))
    }

    useEffect(() => {
        if (searchData === '') {
            setData(originalData)
        } else {
            searchProfile()
        }
    }, [searchData])


    return (
        <DataContext.Provider value={{ Data, addData, toggleInputBox, toggleInput, toggleUpdateBox, toggleupdate, searchData, setsearchData, DeleteData, userUpdateData, getUpdatedData, setgetUpdatedData }}>
            {children}
        </DataContext.Provider>
    )
}

export default DataProvider