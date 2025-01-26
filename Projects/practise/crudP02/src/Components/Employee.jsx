import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { addEmp, getEmpByID, updtEmp } from '../Services/EmployeeServices';

const Employee = () => {
  const { id } = useParams();
  const [emp, setEmp] = React.useState({
    Empid: '',
    firstName: '',
    lastName: '',
    email: ''
  })
  const navigator = useNavigate()


  const title = () => {
    return id ? <h1>Update Employee</h1> : <h1>Add Employee</h1>
  }


  const actionEmp = (e) => {
    e.preventDefault()

    if (id) {

      if (emp.firstName.trim() == '' || emp.lastName.trim() === '' || emp.email.trim() === '') {

        return ' '
      }

      updtEmp(id, emp).then((response) => {
        console.log(response.data);

        navigator('/')
      }).catch(error => {
        console.log(error)
      })

    } else {

      if (emp.firstName.trim() == '' || emp.lastName.trim() === '' || emp.email.trim() === '') {

        return ' '
      }

      addEmp(emp).then(Response => {
        console.log(response.data);
      }).catch(err => {

        console.log(err.message)
      })

      navigator('/')

    }


  }


  React.useEffect(() => {


    if (id) {
      getEmpByID(id).then(response => {

        console.log(response.data);
        setEmp(response.data)
      }).catch(error => {
        console.log(error);
      })
    }

  }, [])



  return (
    <div>


      <div className='font-bold text-center'>{title()}

        {/* {id ? id : ''} */}
      </div>

      <form onSubmit={actionEmp}>



        <label htmlFor="firstName">First Name</label>
        <input type="text" value={emp.firstName} onChange={(e) => setEmp((prevEmp) => {
          return {
            ...prevEmp,
            firstName: e.target.value
          }
        }


        )} />

        <label htmlFor="lastName">Last Name</label>
        <input type="text" value={emp.lastName}


          onChange={(e) => setEmp((prevEmp) => {
            return {
              ...prevEmp,
              lastName: e.target.value
            }
          }


          )}
        />


        <label htmlFor="email">Email</label>
        <input type="text" value={emp.email} onChange={(e) => setEmp((prevEmp) => {
          return {
            ...prevEmp,
            email: e.target.value
          }
        })} />

        <button className='text-center'>Submit</button>

      </form>








    </div>
  )
}

export default Employee