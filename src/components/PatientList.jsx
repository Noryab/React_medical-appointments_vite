import Patient from './Patient'


function PatientList({patients, setPatient, patientDelete}) {


    return (


        <div className="md:w-1/2 lg:w-3/5 text-center md:h-screen md:overflow-y-scroll">

            { patients && patients.length ? (
                <>
                    <h2 className='font-black text-3xl text-center'>Patient List</h2>
                    <p className='text-xl mt-5 mb-10 text-center'>
                        Administra tus {''}
                        <span className='text-indigo-600 font-bold'>
                            pacientes y citas
                        </span>                
                    </p>

                    {patients.map( (patient, index)=>(
                        <Patient 
                            key={patient.id}
                            patient={patient}
                            setPatient={setPatient}
                            patientDelete={patientDelete} />
                            
                    ))}
                </>

            ):(
                <>
                    <h2 className='font-black text-3xl text-center'>There aren't Patient</h2>
                    <p className='text-xl mt-5 mb-10 text-center'>
                        Add your patients {''}
                        <span className='text-indigo-600 font-bold'>
                            and them appear here
                        </span>                
                    </p>
                </>
            )                        
            }


        </div>
    )
}

export default PatientList