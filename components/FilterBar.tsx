"use client";

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function FilterBar() {
  const router = useRouter();
  const searchParams = useSearchParams();

  // Keep the dropdowns selected if the user reloads the page
  const [type, setType] = useState(searchParams.get('type') || '');
  const [occupant, setOccupant] = useState(searchParams.get('occupant') || '');
  const [maxRent, setMaxRent] = useState(searchParams.get('maxRent') || '');

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (type) params.set('type', type);
    if (occupant) params.set('occupant', occupant);
    if (maxRent) params.set('maxRent', maxRent);
    
    // Pushes the filters to the URL
    router.push(`/?${params.toString()}`);
  };

  return (
    <div className="bg-white p-5 rounded-xl shadow-[0_4px_20px_rgba(0,31,63,0.05)] border border-outline-variant flex flex-col md:flex-row gap-4 items-end">
      
      {/* Type */}
      <div className="w-full md:w-1/4 flex flex-col">
        <label className="font-inter text-sm font-bold text-primary-container mb-2">Type</label>
        <select value={type} onChange={(e) => setType(e.target.value)} className="w-full border border-outline-variant rounded-lg p-3 bg-white outline-none focus:ring-2 focus:ring-secondary-fixed-dim transition-all cursor-pointer">
          <option value="">All Types</option>
          <option value="Fillo">Fillo</option>
          <option value="Dabakh">Dabakh</option>
          <option value="Guri caadi">Guri caadi</option>
        </select>
      </div>

      {/* Occupant */}
      <div className="w-full md:w-1/4 flex flex-col">
        <label className="font-inter text-sm font-bold text-primary-container mb-2">Occupant</label>
        <select value={occupant} onChange={(e) => setOccupant(e.target.value)} className="w-full border border-outline-variant rounded-lg p-3 bg-white outline-none focus:ring-2 focus:ring-secondary-fixed-dim transition-all cursor-pointer">
          <option value="">Anyone</option>
          <option value="Hal qof">Hal qof</option>
          <option value="Qoys">Qoys</option>
          <option value="Qoys caruur wadan">Qoys caruur wadan</option>
          <option value="Xafiis">Xafiis</option>
          <option value="Hayad">Hayad</option>
        </select>
      </div>

      {/* Max Rent */}
      <div className="w-full md:w-1/4 flex flex-col">
        <label className="font-inter text-sm font-bold text-primary-container mb-2">Max Rent</label>
        <select value={maxRent} onChange={(e) => setMaxRent(e.target.value)} className="w-full border border-outline-variant rounded-lg p-3 bg-white outline-none focus:ring-2 focus:ring-secondary-fixed-dim transition-all cursor-pointer">
          <option value="">Any Price</option>
          <option value="35">$35</option>
          <option value="40">$40</option>
          <option value="45">$45</option>
          <option value="50">$50</option>
        </select>
      </div>

      {/* Search Button */}
      <button onClick={handleSearch} className="w-full md:w-1/4 bg-primary-container text-white font-manrope font-bold text-lg p-3 rounded-lg hover:bg-secondary-fixed-dim hover:text-primary-container transition-all flex justify-center items-center gap-2 shadow-md">
        <span className="material-symbols-outlined">search</span>
        Search
      </button>

    </div>
  );
}