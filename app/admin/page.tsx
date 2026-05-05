"use client";

import { useState } from 'react';
import { supabase } from '../../lib/supabase'; // <-- Correct path for this folder level
import { useRouter } from 'next/navigation';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    // Ask Supabase to verify the credentials
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      // If successful, securely send them to the dashboard
      router.push('/admin/dashboard');
    }
  };

  return (
    <div className="max-w-md mx-auto px-6 py-24 flex flex-col items-center">
      <div className="bg-white p-8 rounded-2xl shadow-md border border-outline-variant w-full">
        
        <div className="text-center mb-8">
          <span className="material-symbols-outlined text-4xl text-primary-container mb-2">lock</span>
          <h1 className="font-manrope text-2xl font-bold text-primary-container">Admin Access</h1>
          <p className="text-on-surface-variant font-inter text-sm mt-1">Please log in to manage properties.</p>
        </div>

        {error && (
          <div className="bg-red-50 text-red-600 p-3 rounded-lg text-sm font-bold mb-4 text-center border border-red-200">
            {error}
          </div>
        )}

        <form onSubmit={handleLogin} className="flex flex-col gap-5">
          <div className="flex flex-col">
            <label className="font-inter text-sm font-bold text-primary-container mb-1">Email Address</label>
            <input 
              required 
              type="email" 
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              className="border border-outline-variant rounded-lg p-3 outline-none focus:ring-2 focus:ring-secondary-fixed-dim transition-all" 
              placeholder="admin@example.com"
            />
          </div>

          <div className="flex flex-col">
            <label className="font-inter text-sm font-bold text-primary-container mb-1">Password</label>
            <input 
              required 
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              className="border border-outline-variant rounded-lg p-3 outline-none focus:ring-2 focus:ring-secondary-fixed-dim transition-all" 
              placeholder="••••••••"
            />
          </div>

          <button 
            disabled={loading} 
            type="submit" 
            className="w-full bg-primary-container text-white font-manrope font-bold text-lg p-3 rounded-lg hover:bg-secondary-fixed-dim hover:text-primary-container transition-all mt-2 disabled:bg-gray-400"
          >
            {loading ? 'Authenticating...' : 'Secure Login'}
          </button>
        </form>

      </div>
    </div>
  );
}