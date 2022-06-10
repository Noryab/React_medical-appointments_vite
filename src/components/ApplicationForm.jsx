import React from 'react'
import {useState, useEffect} from 'react'

import Error from './Error'

const ApplicationForm = ({patients, setPatients, patient, setPatient}) => {

    const [name, setName] = useState('')
    const [owner, setOwner] = useState('')
    const [email, setEmail] = useState('')
    const [dischargeDate, setDischargeDate] = useState('')
    const [symptom, setSymptom] = useState('')

    const [error, setError] = useState(false)

    useEffect(()=> {
        if( Object.keys(patient).length>0 ){
            setName(patient.name)
            setOwner(patient.owner)
            setEmail(patient.email)
            setDischargeDate(patient.dischargeDate)
            setSymptom(patient.symptom)
        }
    }, [patient])

    const generateID = () =>{
        
        const random = Math.random().toString(36).substring(2)
        const dateID = Date.now().toString(36)
        return random + dateID
    }

    const handleSubmit = (e) => {
        e.preventDefault()

        if ([name, owner, email, dischargeDate, symptom].includes("")){            
            setError(true)
        }else{            
            setError(false)

            const objPatient = {
                name,
                owner,
                email,
                dischargeDate,
                symptom                
            }

            if(patient.id){
                objPatient.id = patient.id

                const patientsUpdated = patients.map(patientState => patientState.id === objPatient.id ? objPatient : patientState)                               
                setPatients(patientsUpdated)
                setPatient({})

            }else{
                objPatient.id = generateID()
                setPatients([...patients, objPatient])
            }          

            setName("")
            setOwner("")
            setEmail("")
            setDischargeDate("")
            setSymptom("")
        }
            
    }

    return (
        <div className="md:w-1/2 lg:w-2/5 mx-7">
            <h2 className='font-black text-3xl text-center'>Seguimiento Pacientes</h2>
            <p className='text-lg mt-5 text-center'>
                Add patients {""}
                <span className='text-indigo-600 font-bold'>Admin them</span>
            </p>

            <form onSubmit={handleSubmit}
            className='bg-white shadow-md rounded-lg py-10 px-5 mb-10'>  
                {error && <Error 
                message={'All fields are required'} />}              
                <div className='mb-5'>
                    <label htmlFor='mascota' className='block text-gray-700 uppercase font-bold'>Nombre de la Mascota</label>
                    <input 
                        type="text"
                        id='mascota'
                        placeholder='Nombre de la mascota'
                        className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                        value={name}
                        onChange={(e)  => setName(e.target.value)}
                    > 
                        </input>

                </div>

                <div className='mb-5'>
                    <label htmlFor='propietario' className='block text-gray-700 uppercase font-bold'>Nombre del Propietario</label>
                    <input type="text"
                    id='propietario'
                    placeholder='Nombre del propietario'
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                    value={owner}
                    onChange={(e)  => setOwner(e.target.value)}
                    > 
                        </input>

                </div>
                <div className='mb-5'>
                    <label htmlFor='email' className='block text-gray-700 uppercase font-bold'>Email del Propietario</label>
                    <input type="email"
                    id='email'
                    placeholder='email contacto del propietario'
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                    value={email}
                    onChange={(e)  => setEmail(e.target.value)}
                    > 
                    </input>

                </div>
                <div className='mb-5'>
                    <label htmlFor='alta' className='block text-gray-700 uppercase font-bold'>Alta</label>
                    <input type="date"
                    id='alta'                    
                    className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                    value={dischargeDate}
                    onChange={(e)  => setDischargeDate(e.target.value)}
                    > 
                        </input>

                </div>
                <div className='mb-5'>
                    <label htmlFor='alta' className='block text-gray-700 uppercase font-bold'>Sintomas</label>
                <textarea id='sintomas'
                className='border-2 w-full p-2 mt-2 placeholder-gray-400 rounded-md'
                placeholder='Describe sintomas de tu mascota'
                value={symptom}
                onChange={(e)  => setSymptom(e.target.value)}>

                </textarea>

                </div>

                <input type='submit'
                className='bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-400 cursor-pointer transition-all'
                value= {patient.id ? 'Edit patient': 'Agregar paciente'}>
                </input>


            </form>
        </div>
    )
}

export default ApplicationForm