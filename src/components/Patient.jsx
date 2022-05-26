import React from 'react'

const Patient = ({patient, setPatient, patientDelete}) => {
  const {name, owner, email, dischargeDate, symptom, id} = patient

  const handleDelete = () =>{
    const response = confirm('Are you sure of delete patient?')
    if( response){    
      patientDelete(id)
    }
  }
  return (
    <div>
            <div className='mx-7 my-7 bg-white shadow-md px-5 py-10 rounded-xl text-left'>
                <p className='font-bold mb-3 text-gray-700 uppercase'>Nombre: {''}
                    <span className='font-normal normal-case'>
                        {name}
                    </span>
                </p>
                <p className='font-bold mb-3 text-gray-700 uppercase'>Prtopietario: {''}
                    <span className='font-normal normal-case'>
                        {owner}
                    </span>
                </p>
                <p className='font-bold mb-3 text-gray-700 uppercase'>Email: {''}
                    <span className='font-normal normal-case'>
                        {email}
                    </span>
                </p>
                <p className='font-bold mb-3 text-gray-700 uppercase'>Alta: {''}
                    <span className='font-normal normal-case'>
                        {dischargeDate}
                    </span>
                </p>
                <p className='font-bold mb-3 text-gray-700 uppercase'>Sintomas: {''}
                    <span className='font-normal normal-case'>
                        {symptom}
                    </span>
                </p>

                <div className='flex justify-between mt-10'>
                  <button className='py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg'
                  onClick={()=> setPatient(patient)}>
                      Edit
                  </button>
                  <button className='py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg'
                  onClick={handleDelete}>
                      Delete
                  </button>

                </div>

            </div>
    </div>

    
  )
}

export default Patient