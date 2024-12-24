import CardMahasiswa from "./components/CardMahasiswa";
import SearchBarMahasiswa from "./components/SearchMahasiswa";
import Signout from "./components/signout"
import supabase from "../../utils/supabase";

export const revalidate = 20;

export default async function Home() {
  const { data: mahasiswa, error } = await supabase.from("mahasiswa").select().order("id",{ ascending: true });
  console.log(mahasiswa);
  
  if (error) {
    console.log(error);
  }

  return (
    <>
      <h1 className="text-3xl font-bold text-slate-700 ml-2">Daftar Mahasiswa</h1>
      <SearchBarMahasiswa />
      <div className="flex p-4">
        {mahasiswa && mahasiswa.map((mhs,idx) => (
          <CardMahasiswa
            key = {idx}
            nim = {mhs.nim}
            nama = {mhs.nama}
            angkatan = {mhs.angkatan}
            prodi = {mhs.prodi}
            foto = {mhs.foto}
          />
        ))}
      </div>
      <Signout />
    </>  
  );
}