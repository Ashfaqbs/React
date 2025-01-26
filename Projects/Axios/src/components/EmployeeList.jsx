import React, { useState, useEffect } from 'react'
import { getListEmp } from '../services/RestService'

const EmployeeList = () => {


    const [empArr, setEmpArr] = useState([])

    const sampleData = {
        id: 1,
        name: 'sonu',
        title: 'Title 1'
    }

    useEffect(() => {

        getListEmp().then(response => {


            //  setEmpArr(updatedEmpArr)
            console.log(response);

        }).catch(error => {
            console.error('error :', error);
        })


    }, [])
    return (
        <>
            <ul>

                li

            </ul>

        </>
    )
}

export default EmployeeList