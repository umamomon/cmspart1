"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function SearchBarSemester({nim}) {
    const router = useRouter();
    const [semester, setSemester] = useState('');

    return (
        <div className="flex justify-end mb-4"> 
            <div className='w-92'>
                <input
                type="text"
                className="border p-2 rounded-l-md w-full"
                placeholder="Cari Semester..."
                value={semester}
                onChange={(e) => setSemester(e.target.value)}
                />
            </div>
            <button type="submit" className="bg-blue-500 text-white p-2 rounded-r-md"
                onClick={() => router.push(`/nilai/${nim}/${semester}`)}>Cari</button>
        </div>
    );
}
