import { useState, useEffect } from "react"
import React from 'react'
import { getSampleTitles } from "../services/RestService"

const ListComponents = () => {

    const [empArr, setEmpArr] = useState([])

    const sampleData = {
        id: 1,
        name: 'sonu',
        title: 'Title 1'
    }

    useEffect(() => {

        getSampleTitles().then(response => {

            const updatedEmpArr = [...empArr, ...response.data];
            console.log([...empArr,...response.data]) 
             setEmpArr(updatedEmpArr)
             console.log(updatedEmpArr);

        }).catch(error => {
            console.error(error);
        })


    }, [])


    return (
        <div>
            <ul>
                {/* <li>


                    {empArr.title}

                </li> */} 


                {

                    
// empArr.map((data) => <li > {data} </li>  )


                }


{empArr.map(employee => (
    <li key={employee.id}>
      {employee.title} - {employee.completed}
      {/* Add more details as needed */}
    </li>
  ))}
            </ul>


            
        </div>
    )
}

export default ListComponents