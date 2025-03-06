import { Button } from '@/components/ui/button'
import { ArrowUpRight } from 'lucide-react'
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Teams() {
  const [teams, setTeams] = useState([]);
  useEffect(() => {
    fetchTeams();
  }, []);

  const fetchTeams = async () => {
    try {
      const res = await axios.get("/api/getTeams.php");
      setTeams(res.data);
    } catch (error) {
      console.error("Error fetching teams:", error);
    }
  };

  return (
    <div className='' id='teams'>
      <div className='container py-32'>
        <div className='flex flex-col gap-2 items-center'>
          <h2 className='text-4xl lg:max-w-[500px] font-semibold'>Teams</h2>
          <p className='opacity-50 text-md lg:max-w-[500px]'>Meet Our Professional Staff</p>
        </div>
        <div className='grid lg:grid-cols-3 grid-cols-1 py-24 pb-12 gap-6'>
        {teams.slice(0,3).map((team) => (
          <div key={team.id} className='border border-black dark:border-white flex flex-col items-center rounded-xl p-6 gap-2 hover:shadow-[10px_10px_0px_rgba(0,0,0,1)] cursor-pointer'>
            {team.photo && <img src={team.photo} alt="Team" className='rounded-full object-cover h-[280px] w-auto' />}
            <h1 className='text-xl font-semibold line-clamp-2'>{team.name}</h1>
            <p className='italic text-sm opacity-70 font-light'>{team.role}</p>
            <p className='italic text-sm opacity-70 font-light'> {team.email}</p>
          </div>
        ))}
        </div>
        <div className='flex items-center justify-center pt-12'>
          <a href='/#/teams'><Button className='rounded-full text-xl border-2 border-black px-6 py-10' size='lg' variant='outline'>Semua Teams <ArrowUpRight className='w-4 h-4 ml-2' /> </Button></a>
        </div>
      </div>
    </div>
  )
}
