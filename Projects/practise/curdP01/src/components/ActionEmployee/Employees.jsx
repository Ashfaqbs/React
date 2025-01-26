import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { addEmp, getEmpbyID, updtEmp } from '../../Services/EmployeeAPI'
const Employees = () => {

    const { id } = useParams('id')


    const [empid, setempID] = useState('')
    const [firstName, setfirstName] = useState('')
    const [lastName, setlastName] = useState('')
    const [email, setemail] = useState('')

    const nav = useNavigate()
    const title = () => {

        if (id) {
            return <h1> Update Employee </h1 >
        } else {
            return <h1>Add Employees</h1>
        }
    }



    const SubmitHandler = (e) => {
        e.preventDefault()

        if (id) {

            const updateEmp = { firstName, lastName, email }
            updtEmp(id, updateEmp).then((respone) => {

                console.log(respone.data)
                nav('/employees')

            }).catch(error => { console.log(error) })

        } else {

            const emp = { firstName, lastName, email }

            addEmp(emp).then((respone) => {

                console.log(emp)
                nav('/employees')

            }).catch(error => { console.log(error) })



            console.log(emp)
        }

    }

    useEffect(() => {

        getEmpbyID(id).then((response) => {

            setfirstName(response.data.firstName)
            setlastName(response.data.lastName)
            setemail(response.data.email)



        }).catch((error) => console.log(error))
    }, [])



    return (<>
        <div>{title()}</div>

        <form onSubmit={SubmitHandler}>


            <label>
                First Name:
                <input
                    type="text"
                    name="name"
                    value={firstName}
                    onChange={(e) => setfirstName(e.target.value)}
                />
            </label>
            <br />
            <label>
                Last Name:
                <input
                    type="text"
                    name="name"
                    value={lastName}
                    onChange={(e) => setlastName(e.target.value)}
                />
            </label>
            <br />
            <label>
                Email:
                <input
                    type="email"
                    name="email"
                    value={email}
                    onChange={(e) => setemail(e.target.value)}
                />
            </label>
            <br />
            <button type="submit">Submit</button>

        </form>


    </>
    )
}

export default Employees