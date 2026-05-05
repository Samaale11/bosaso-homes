"use client";

import { useState, useEffect } from 'react';
import { supabase } from '../../../lib/supabase';
import { useRouter } from 'next/navigation';

export default function AdminDashboard() {
  const [properties, setProperties] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [uploading, setUploading] = useState(false);
  const [isCheckingAuth, setIsCheckingAuth] = useState(true);
  const router = useRouter();

  // Form & Edit States
  const [editingId, setEditingId] = useState<string | null>(null);
  const [existingImageUrl, setExistingImageUrl] = useState<string>('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [type, setType] = useState('Fillo');
  const [occupant, setOccupant] = useState(''); 
  const [rent, setRent] = useState(35);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    router.push('/admin');
  };

  useEffect(() => {
    const checkUser = async () => {
      const { data: { session } } = await supabase.auth.getSession();
      if (!session) {
        router.push('/admin'); 
      } else {
        setIsCheckingAuth(false);
        fetchProperties();
      }
    };
    checkUser();

    const autoLogoutTimer = setTimeout(() => {
      alert("Session expired for security. Please log in again.");
      handleLogout();
    }, 3600000);
    return () => clearTimeout(autoLogoutTimer);
  }, []);

  const fetchProperties = async () => {
    const { data } = await supabase.from('properties').select('*').order('created_at', { ascending: false });
    if (data) setProperties(data);
    setLoading(false);
  };

  // Load property data into the form when "Edit" is clicked
  const handleEditClick = (prop: any) => {
    setEditingId(prop.id);
    setExistingImageUrl(prop.image_url);
    setType(prop.type);
    setOccupant(prop.occupants || '');
    setRent(prop.monthly_rent);
    setImageFile(null); // Reset file input
    window.scrollTo({ top: 0, behavior: 'smooth' }); // Scroll to top
  };

  // Cancel Editing
  const cancelEdit = () => {
    setEditingId(null);
    setExistingImageUrl('');
    setImageFile(null);
    setType('Fillo');
    setOccupant('');
    setRent(35);
  };

  // Handles BOTH adding new and updating existing
  const handleSaveProperty = async (e: React.FormEvent) => {
    e.preventDefault();
    setUploading(true);

    try {
      let finalImageUrl = existingImageUrl;

      // Only upload a new image if the user actually selected one
      if (imageFile) {
        const fileExt = imageFile.name.split('.').pop();
        const fileName = `${Date.now()}-${Math.random()}.${fileExt}`;
        const filePath = `${fileName}`;

        const { error: uploadError } = await supabase.storage.from('property-images').upload(filePath, imageFile);
        if (uploadError) throw uploadError;

        const { data: { publicUrl } } = supabase.storage.from('property-images').getPublicUrl(filePath);
        finalImageUrl = publicUrl;
      } else if (!editingId) {
        // If they are creating a NEW house and forgot an image, stop them
        alert("Please select an image file.");
        setUploading(false);
        return;
      }

      const propertyData = {
        image_url: finalImageUrl,
        type: type,
        occupants: occupant,
        monthly_rent: rent,
        status: 'available'
      };

      if (editingId) {
        // UPDATE existing property
        const { error } = await supabase.from('properties').update(propertyData).eq('id', editingId);
        if (error) throw error;
        alert('Property updated successfully!');
      } else {
        // INSERT new property
        const { error } = await supabase.from('properties').insert([propertyData]);
        if (error) throw error;
        alert('Real house added successfully!');
      }

      cancelEdit(); // Reset the form
      fetchProperties(); 
    } catch (error: any) {
      alert('Error: ' + error.message);
    } finally {
      setUploading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (confirm('Are you sure you want to delete this house?')) {
      await supabase.from('properties').delete().eq('id', id);
      fetchProperties();
    }
  };

  if (isCheckingAuth) return <div className="min-h-screen flex items-center justify-center font-bold text-primary-container">Securing connection...</div>;

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      
      <div className="flex justify-between items-center mb-8 border-b border-outline-variant/30 pb-4">
        <h1 className="font-manrope text-3xl font-bold text-primary-container">Admin Dashboard</h1>
        <button onClick={handleLogout} className="flex items-center gap-2 text-red-600 font-bold hover:text-red-800 transition-colors bg-red-50 px-4 py-2 rounded-lg">
          <span className="material-symbols-outlined text-[20px]">logout</span> Sign Out
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* ADD / EDIT FORM */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-outline-variant lg:col-span-1 h-fit">
          <h2 className="font-bold text-xl mb-4 text-primary-container">
            {editingId ? 'Edit Property' : 'Add Real House'}
          </h2>
          
          <form onSubmit={handleSaveProperty} className="flex flex-col gap-4">
            
            <div className="flex flex-col">
              <label className="font-inter text-sm font-bold mb-1">
                {editingId ? 'Change Photo (Optional)' : 'Upload Property Photo'}
              </label>
              <input 
                type="file" 
                accept="image/*"
                required={!editingId} // Only required if creating a NEW house
                onChange={(e) => {
                  if (e.target.files && e.target.files.length > 0) setImageFile(e.target.files[0]);
                }} 
                className="border p-2 rounded cursor-pointer file:mr-4 file:py-2 file:px-4 file:rounded file:border-0 file:text-sm file:font-semibold file:bg-primary-container file:text-white hover:file:bg-secondary-fixed-dim transition-all" 
              />
              {editingId && !imageFile && (
                <p className="text-xs text-gray-500 mt-1">Leave empty to keep the current photo.</p>
              )}
            </div>

            <div className="flex flex-col">
              <label className="font-inter text-sm font-bold mb-1">Type</label>
              <select value={type} onChange={(e) => setType(e.target.value)} className="border p-2 rounded">
                <option value="Fillo">Fillo</option>
                <option value="Dabakh">Dabakh</option>
                <option value="Guri caadi">Guri caadi</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label className="font-inter text-sm font-bold mb-1">Occupant Rules</label>
              <select value={occupant} onChange={(e) => setOccupant(e.target.value)} className="border p-2 rounded">
                <option value="">Anyone (Leave blank)</option>
                <option value="Hal qof">Hal qof</option>
                <option value="Qoys">Qoys</option>
                <option value="Qoys caruur wadan">Qoys caruur wadan</option>
                <option value="Xafiis">Xafiis</option>
                <option value="Hayad">Hayad</option>
              </select>
            </div>

            <div className="flex flex-col">
              <label className="font-inter text-sm font-bold mb-1">Rent ($)</label>
              <input required type="number" min="35" max="50" value={rent} onChange={(e) => setRent(Number(e.target.value))} className="border p-2 rounded" />
            </div>

            <button disabled={uploading} type="submit" className="bg-primary-container text-white font-bold p-3 rounded hover:bg-secondary-fixed-dim transition-colors mt-2 disabled:bg-gray-400">
              {uploading ? 'Saving...' : (editingId ? 'Update Property' : '+ Add Property to Database')}
            </button>
            
            {editingId && (
              <button type="button" onClick={cancelEdit} className="text-red-500 font-bold hover:underline mt-1">
                Cancel Edit
              </button>
            )}
          </form>
        </div>

        {/* LIST OF CURRENT HOUSES */}
        <div className="lg:col-span-2">
          <h2 className="font-bold text-xl mb-4">Manage Database</h2>
          <div className="bg-white rounded-xl shadow-sm border border-outline-variant overflow-hidden">
            {loading ? <p className="p-6">Loading data...</p> : (
              <table className="w-full text-left">
                <thead className="bg-gray-50 border-b">
                  <tr>
                    <th className="p-4">Image</th>
                    <th className="p-4">Type</th>
                    <th className="p-4">Rent</th>
                    <th className="p-4">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {properties.map(prop => (
                    <tr key={prop.id} className="border-b">
                      <td className="p-4"><img src={prop.image_url} alt="house" className="w-16 h-16 object-cover rounded" /></td>
                      <td className="p-4 font-bold">{prop.type}</td>
                      <td className="p-4 text-green-600 font-bold">${prop.monthly_rent}</td>
                      <td className="p-4 flex gap-4 mt-2">
                        {/* EDIT BUTTON */}
                        <button onClick={() => handleEditClick(prop)} className="text-blue-600 font-bold hover:underline">Edit</button>
                        <button onClick={() => handleDelete(prop.id)} className="text-red-500 font-bold hover:underline">Delete</button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}