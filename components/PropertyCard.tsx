export default function PropertyCard({ property }: { property: any }) {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-outline-variant overflow-hidden flex flex-col transition-transform hover:-translate-y-1 hover:shadow-md duration-300">
      
      {/* Image Area */}
      <div className="relative h-56 sm:h-64">
        <img 
          src={property.image_url} 
          alt={property.type} 
          className="w-full h-full object-cover" 
        />
        {/* Status Badge */}
        <div className="absolute top-5 left-5 bg-[#D4AF37] text-[#001F3F] text-xs font-bold px-3 py-1.5 rounded uppercase tracking-wider">
          {property.status === 'available' ? 'Available' : 'Under Review'}
        </div>
      </div>

      {/* Details Area */}
      <div className="p-6 flex flex-col flex-grow">
        <div className="grid grid-cols-2 gap-y-6 gap-x-4">
          
          {/* Rooms */}
          <div>
            <p className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider mb-1">Rooms</p>
            <p className="text-xl font-bold text-primary-container">{property.rooms || 3}</p>
          </div>

          {/* Type */}
          <div>
            <p className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider mb-1">Type</p>
            <p className="text-xl font-bold text-primary-container">{property.type}</p>
          </div>

          {/* Baths */}
          <div>
            <p className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider mb-1">Baths</p>
            <p className="text-xl font-bold text-primary-container">{property.baths || 2}</p>
          </div>

          {/* Rent */}
          <div>
            <p className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider mb-1">Rent</p>
            <p className="text-xl font-bold text-[#D4AF37]">${property.monthly_rent}</p>
          </div>

          {/* NEW: Occupant / Ideal For */}
          <div className="col-span-2 pt-4 border-t border-outline-variant/20 mt-2">
            <p className="text-[11px] font-bold text-on-surface-variant uppercase tracking-wider mb-1">Ideal For</p>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px] text-primary-container">group</span>
              <p className="text-lg font-bold text-primary-container">
                {property.occupants || 'Anyone'}
              </p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}