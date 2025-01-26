import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getEmpByID } from '../Services/EmployeeServices';

const ViewEmp = () => {

    const { id } = useParams();
    const navigator = useNavigate()
    const [emp, setEmp] = React.useState({
        Empid: '',
        firstName: '',
        lastName: '',
        email: ''
    })

    useEffect(() => {
        getEmpByID(id).then(response => {
            console.log(response.data);
            setEmp(response.data)
        }).catch(error => {
            console.log(error);
        })

    }, [])



    return (
        <div>
            <h1>Employee Details</h1>

            <ul>

                {




                    <div>

                        <li>{emp.id}</li>
                        <li>{emp.firstName}</li>
                        <li>{emp.lastName}</li>
                        <li>{emp.email}</li>

                    </div>




                }


            </ul>

            <button onClick={() => navigator('/')}>Back to home page</button>

        </div>
    )
}

export default ViewEmp