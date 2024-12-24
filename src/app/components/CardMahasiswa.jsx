"use client";
import { CldImage } from "next-cloudinary";
import Link from "next/link";
import { useState } from "react";

export default function CardMahasiswa(props) {
    const {nim, nama, angkatan, prodi, foto} = props
    const [angka, setAngka] = useState(0)

    const handleClick = () => {
        setAngka(angka + 1)
    }
    return (
        <div className="p-2 m-2 border border-slate-300 eounded-lg
                        grid justify-items-center text-slate-700">
            <CldImage className="rounded-full"
                src= {foto} //use this sample
                width="75" //transform the image:auto
                height="75"
                crop={{
                    type: 'auto',
                    source: true
                }}
            />
            <h1 className="text-xl font-semibold">{nama}</h1>
                    <p>NIM      : {nim}</p>
                    <p>Angkatan : {angkatan}</p>
                    <p>Prodi    : {prodi}</p>
                    <Link className="text-purple-500 underline hover:text-blue-800 mt-2"
                        href={`/nilai/${nim}`}>
                        Lihat Nilai
                    </Link>
                    {/* <div className="m-2">
                        <button className="bg-blue-500 rounded rounded-lg"
                            onClick={handleClick}>
                            counter
                        </button>
                        <p>{angka}</p>
                    </div> */}
        </div>
    );
}