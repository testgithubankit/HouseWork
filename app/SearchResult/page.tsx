"use client"
import React from 'react';
import DoctorSearch from './Doctor/DoctorSearch';
// import SubmitCaseForReview from '@/Components/SubmitCaseForReview';



const SearchDoctors = () => {
  return (
    <>
      <section
        className="SearchDoctors mb-1"
      >
        <DoctorSearch />
        {/* <SubmitCaseForReview /> */}
      </section>
    </>
  );
}

export default SearchDoctors;