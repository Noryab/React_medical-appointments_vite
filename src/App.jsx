import { useEffect, useState } from "react"

import Header from "./components/Header.jsx"
import ApplicationForm from "./components/ApplicationForm"
import PatientList from "./components/PatientList"



function App() {

  const [patients, setPatients] = useState([])
  const [patient, setPatient] = useState({})

  useEffect( ()=>{
    const getLocalStorage = () =>{
        const patientsLocalStorage = JSON.parse(localStorage.getItem('patients')) ?? [];
        setPatients(patientsLocalStorage)  
    }
    getLocalStorage();
  }, []);


  useEffect( ()=>{
    localStorage.setItem('patients', JSON.stringify(patients));
  }, [patients]  )

  const patientDelete = id => {
    const patientsUpdated = patients.filter(patient => patient.id !== id)
    setPatients(patientsUpdated)
  }
  return (
    <div className="container mx-auto mt-20">
      <Header />
      <div className="mt-12 md:flex">
        <ApplicationForm 
          patients = {patients}
          setPatients = {setPatients}
          patient = {patient}
          setPatient = {setPatient} />
        <PatientList 
        patients={patients}
        setPatient = {setPatient}
        patientDelete={patientDelete} />
      </div>
    </div>
  )
}

export default App
