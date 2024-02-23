"use client"
import React from 'react';
import { motion } from 'framer-motion'; // Import motion from framer-motion
import HospitalDataSearch from './Hospital/HospitalDataSearch';

const Searchresults = () => {
  return (
    <>
      <section
        id="searchresults"
        className="mb-1"
      >
        < HospitalDataSearch />
      </section>
    </>
  );
}

export default Searchresults;