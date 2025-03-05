import React, { useEffect, useState } from 'react';
import axios from 'axios';
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from '@/components/ui/button';

export default function AdminProjects() {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await axios.get("http://localhost/api/projects.php");
        setProjects(res.data);
      } catch (err) {
        console.error("Error fetching projects:", err);
        setError("Gagal memuat data.");
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return (
    <div className='py-6'>
      <div className="flex flex-row items-center pb-6 gap-4">
        <h1 className="text-xl font-semibold">Daftar Project</h1>
        <a href="/project/add">
          <Button className='rounded-xl'>Add New</Button>
        </a>
      </div>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {!loading && !error && (
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className='w-[120px]'>Thumbnail</TableHead>
              <TableHead>Nama</TableHead>
              <TableHead className='w-[120px]'>Year</TableHead>
              <TableHead className='w-[200px]'>Client</TableHead>
              <TableHead>Deskripsi</TableHead>
              <TableHead className='w-[120px] text-center'>*</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {projects.length > 0 ? (
              projects.map((project) => (
                <TableRow key={project.id}>
                  <TableCell>
                    <img src={project.thumbnail} alt={project.nama} className="w-20 h-12 object-cover rounded" />
                  </TableCell>
                  <TableCell className="font-medium">{project.name}</TableCell>
                  <TableCell>{project.year}</TableCell>
                  <TableCell>{project.client}</TableCell>
                  <TableCell dangerouslySetInnerHTML={{ __html: project.description }}></TableCell>
                  <TableCell className='text-center'>
                    <a href={`/admin/project/edit/${project.id}`}>
                      <Button variant='outline' className='rounded-2xl'>Edit</Button>
                    </a>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan="4" className="text-center">Belum ada project.</TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      )}
    </div>
  );
}
