import React, { useContext, useEffect } from 'react'
import { AdminContext } from '../context/AdminContext'

export const List = () => {
    const {dish, fetchData} = useContext(AdminContext)

    useEffect(() => {
        fetchData()
    },[])
    
    return (
        <div>
            LIST
        </div>
    )
}
