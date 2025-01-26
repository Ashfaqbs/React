import React, { useEffect } from 'react'
import { getAllEmp, deleteEmpById } from '../Services/EmployeeServices'
import { useNavigate } from 'react-router-dom'

const EmployeeList = () => {

    const [list, setList] = React.useState([])

    const navigator = useNavigate()
    const addEmpbtn = () => {
        navigator('/addemployees')
    }


    const getAllEmployee = () => {
        getAllEmp().then(response => {

            console.log(response.data);

            setList(response.data)
        }).catch(error => {
            console.log(error);
        })
    }

    const deleteEmpByIdbtn = (id) => {
        deleteEmpById(id).then(response => {

            console.log(response);
            getAllEmployee()

        }).catch(error => {
            console.log(error);
        })
    }


    const updateEmpbtn = (id) => {

        navigator('/updateEmp' + '/' + id)
    }

    const viewEmpInfo = (id) => {

        navigator('/viewEmp' + '/' + id)

    }
    useEffect(() => {


        getAllEmployee()


    }, [])

    return (
        <section>
            <button className=" bg-green-600" onClick={addEmpbtn}>Add Employee</button>
            <h1 className='text-center text-white font-bold'>Employee List</h1>


            <table className="w-full bg-white">
                <thead>
                    <tr>
                        <th className="px-4 py-2" >Id</th>
                        <th className="px-4 py-2">First name</th>
                        <th className="px-4 py-2">Last name</th>
                        <th className="px-4 py-2">Email</th>
                        <th className="px-4 py-2">Action</th>

                    </tr>
                </thead>
                <tbody>

                    {
                        list.map((data) => (

                            <tr key={data.id}>
                                <td className="border px-4 py-2" >{data.id}</td>

                                <td className="border px-4 py-2" >{data.firstName}</td>
                                <td className="border px-4 py-2" >{data.lastName}</td>
                                <td className="border px-4 py-2" >{data.email}</td>
                                <td className="border px-4 py-2 p-10">
                                    <button className='bg-blue-500 rounded-md p-2' onClick={() => updateEmpbtn(data.id)}>Update</button>

                                    <button className='bg-red-500 rounded-md p-2' onClick={() => deleteEmpByIdbtn(data.id)}>Delete</button>

                                    <button className='bg-red-500 rounded-md p-2' onClick={() => viewEmpInfo(data.id)}>View Emp</button>


                                </td>

                            </tr>


                        ))


                    }
                </tbody>
            </table>






        </section>
    )
}

export default EmployeeList