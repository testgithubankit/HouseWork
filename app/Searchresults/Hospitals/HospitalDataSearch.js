
import React, { useState, useEffect } from 'react';
import styles from './HospitalSearch.module.css'; // Import your CSS module

async function fetchDoctors(type, zipCode) {
  const response = await fetch(`https://api.coc.houseworksinc.co/api/v1/hospitals/?type=${type}&zip_codes=${zipCode}`);
  const data = await response.json();
  console.log(data);
  return data;
}

const HospitalDataSearch = () => {
  const [doctors, setDoctors] = useState([]);
  const [hospitals, setHospitals] = useState([]);
  const [type, setType] = useState(''); // Set initial values
  const [organ, setOrgan] = useState('');
  const [zipCode, setZipCode] = useState('');
  const [selectedHospital, setSelectedHospital] = useState(null);


  useEffect(() => {
    const fetchData = async () => {
            // console.log(window.location);
            let myKeys = window.location.search;
            // console.log("k & V :", myKeys);
    
            let urlParams = new URLSearchParams(myKeys);
    
            let param1 = urlParams.get("search");
    
            let filterParams = new URLSearchParams(param1);
    
            let type = filterParams.get("type");
            let searchFor = filterParams.get("searchFor");
            let organ = filterParams.get("organ");
            let zipCode = filterParams.get("zip_code");
    
    
             console.log('added zid code -;', zipCode);
        
      try {
        const data = await fetchDoctors(type, zipCode);
        setDoctors(data.results); 
        setHospitals(data.results);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
<div className={styles.container}>
<div className={styles.listContainer}>
  <h1>Hospitals</h1>
  <ul>
    {hospitals.map((hospital) => (
      <li
        key={hospital.id}
        className={selectedHospital === hospital.id ? styles.selectedHospital : ''}
        onClick={() => setSelectedHospital(hospital)}
      >
        <p>{hospital.facility_name}</p>
        <p>Phone Number: {hospital.phone_number}</p>
        <p>Address: {hospital.address}, {hospital.city}, {hospital.county}</p>
        <p>Ratings: {hospital.hospital_overall_rating}</p>
      </li>
    ))}
  </ul>
</div>

{selectedHospital && (
  <div className={styles.detailsContainer}>
    <h2>Hospital Details</h2>

    <p>Hospital Name: {selectedHospital.facility_name}</p>
    <p>Phone Number: {selectedHospital.phone_number}</p>
    <p>Address: {selectedHospital.address}, {selectedHospital.city}, {selectedHospital.county}</p>
    <p>Ratings: {selectedHospital.hospital_overall_rating}</p>
    <p>{/* Render details based on selectedHospital */}</p>
  </div>
)}
</div>
);
};

export default HospitalDataSearch;
