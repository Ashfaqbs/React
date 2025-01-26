import React, { useEffect, useState } from 'react'
import { deleteEmp, getAllEmp } from '../../Services/EmployeeAPI'
import { Link, useNavigate } from 'react-router-dom'

const ListEmployees = () => {

    const [emp, setemp] = useState([])
    const [id, setID] = useState('')
    const [firstName, setfirstName] = useState('')
    const [lastName, setlastName] = useState('')
    const [email, setemail] = useState('')
    const nav = useNavigate()


    const getAllEmployees = () => {

        getAllEmp().then(data => setemp(data.data)).catch(error => console.log(error))
    }


    const deletebyID = (id) => {
        deleteEmp(id).then(data => getAllEmployees()).catch(error => console.log(error))
    }

    const updatebyID = (id) => {
        nav(`/employees/${id}`)
    }

    useEffect(() => {



        getAllEmployees()

    }, [])

    return (
        <>
            <div className="overflow-x-auto">
                <table className="min-w-full bg-white border border-gray-300">

                    <Link to='/addemployees'>
                        <button>Add Employee</button></Link>
                    <thead>
                        <tr>
                            <th className="py-2 px-4 border-b">ID</th>
                            <th className="py-2 px-4 border-b">First Name</th>
                            <th className="py-2 px-4 border-b">Last Name</th>
                            <th className="py-2 px-4 border-b">Email</th>
                            <th className="py-2 px-4 border-b">Action</th>
                            {/* Add more header columns as needed */}
                        </tr>
                    </thead>
                    <tbody>

                        {

                            emp.map((data) => (


                                <tr>
                                    <td className="py-2 px-4 border-b">{data.id}</td>
                                    <td className="py-2 px-4 border-b">{data.firstName}</td>
                                    <td className="py-2 px-4 border-b">{data.lastName}</td>
                                    <td className="py-2 px-4 border-b">{data.email}</td>

                                    <td className="py-2 px-4 border-b"><button onClick={() => { updatebyID(data.id) }}>Update</button></td>
                                    <td className="py-2 px-4 border-b" ><button onClick={() => { deletebyID(data.id) }}>Delete</button></td>

                                    {/* Add more data rows as needed */}
                                </tr >



                            ))
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default ListEmployees