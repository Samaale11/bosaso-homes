import { supabase } from '../lib/supabase';
import FilterBar from '../components/FilterBar';
import PropertyCard from '../components/PropertyCard';

export const revalidate = 0;

export default async function Home({ searchParams }: { searchParams: { [key: string]: string | undefined } }) {
  
  // 1. Start the database query
  let query = supabase
    .from('properties')
    .select('*')
    .in('status', ['available', 'review']) 
    .order('created_at', { ascending: false });

  // 2. Apply Filters
  if (searchParams.type) {
    query = query.ilike('type', searchParams.type);
  }
  if (searchParams.occupant) {
    query = query.ilike('occupants', `%${searchParams.occupant}%`);
  }
  if (searchParams.maxRent) {
    query = query.lte('monthly_rent', parseInt(searchParams.maxRent));
  }

  // 3. Execute the query
  const { data: properties, error } = await query;

  if (error) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <p className="text-red-500 font-bold">Failed to load properties. Please check your database connection.</p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      
      {/* Title Area - Centered and wiped clean of any stray footers! */}
      <div className="mb-12 text-center flex flex-col items-center">
        <h1 className="font-manrope text-4xl md:text-5xl font-bold text-primary-container">
          Available Houses
        </h1>
        <p className="text-on-surface-variant mt-4 font-inter text-lg">
          Premium, verified properties ready for move-in.
        </p>
      </div>

      {/* The Search & Filter Bar */}
      <FilterBar />

      {/* The Available House Grid */}
      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties && properties.length > 0 ? (
          properties.map((prop) => (
            <PropertyCard key={prop.id} property={prop} />
          ))
        ) : (
          <div className="col-span-full text-center py-20 bg-white border border-outline-variant rounded-xl shadow-sm">
            <span className="material-symbols-outlined text-5xl text-outline-variant mb-4">search_off</span>
            <h3 className="font-manrope text-xl font-bold text-primary-container">No properties found</h3>
            <p className="text-on-surface-variant font-inter mt-2">Try adjusting your filters to find more houses.</p>
          </div>
        )}
      </div>
    </div>
  );
}