"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SearchBarMahasiswa() {
    const router = useRouter();
    const [nim, setNim] = useState('');

    return (
        <div className="flex justify-end mb-4"> 
            <div className='w-92'>
                <input
                type="text"
                className="border p-2 rounded-l-md w-full"
                placeholder="Cari NIM..."
                value={nim}
                onChange={(e) => setNim(e.target.value)}
                />
            </div>
            <button type="submit" className="bg-blue-500 text-white p-2 rounded-r-md"
                onClick={() => router.push(`/nilai/${nim}`)}>Cari</button>
        </div>
    );
}
