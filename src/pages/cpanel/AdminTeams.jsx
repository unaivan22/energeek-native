import React, { useEffect, useState } from "react";
import axios from "axios";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function AdminTeams() {
  const [teams, setTeams] = useState([]);
  const [editData, setEditData] = useState(null);
  const [file, setFile] = useState(null);

  useEffect(() => {
    fetchTeams();
  }, []);

  const fetchTeams = async () => {
    try {
      const res = await axios.get("http://localhost/api/getTeams.php");
      setTeams(res.data);
    } catch (error) {
      console.error("Error fetching teams:", error);
    }
  };

  const handleEdit = (team) => {
    setEditData(team);
    setFile(null);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpdate = async () => {
    try {
      const formData = new FormData();
      formData.append("id", editData.id);
      formData.append("name", editData.name);
      formData.append("role", editData.role);
      formData.append("email", editData.email);

      if (file) {
        formData.append("file", file);
      }

      const res = await axios.post("http://localhost/api/updateTeam.php", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (res.data.success) {
        alert("Team berhasil diperbarui!");
        setEditData(null);
        fetchTeams();
      } else {
        alert("Gagal memperbarui team: " + res.data.error);
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Gagal memperbarui team.");
    }
  };

  return (
    <div className="py-6">
      <h1 className="text-xl font-semibold mb-4">Daftar Teams</h1>
      <Table>
        <TableCaption>A list of your recent teams.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Role</TableHead>
            <TableHead>Photo</TableHead>
            <TableHead>Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {teams.map((team) => (
            <TableRow key={team.id}>
              <TableCell>{team.name}</TableCell>
              <TableCell>{team.email}</TableCell>
              <TableCell>{team.role}</TableCell>
              <TableCell>
                {team.photo && <img src={team.photo} alt="Team" className="w-16 h-16 rounded-lg" />}
              </TableCell>
              <TableCell>
                <Button className="bg-yellow-500 mr-2" onClick={() => handleEdit(team)}>
                  Edit
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Form Edit */}
      {editData && (
        <div className="bg-white p-6 rounded-lg shadow-lg mt-6">
          <h2 className="text-lg font-semibold mb-4">Edit Team</h2>
          <Input
            type="text"
            name="name"
            value={editData.name}
            onChange={(e) => setEditData({ ...editData, name: e.target.value })}
            placeholder="Name"
          />
          <Input
            type="text"
            name="role"
            value={editData.role}
            onChange={(e) => setEditData({ ...editData, role: e.target.value })}
            placeholder="Role"
          />
          <Input
            type="email"
            name="email"
            value={editData.email}
            onChange={(e) => setEditData({ ...editData, email: e.target.value })}
            placeholder="Email"
          />
          <label className="text-gray-600">Update Photo</label>
          {editData.photo && <img src={editData.photo} alt="Team" className="w-16 h-16 rounded-lg" />}
          <input type="file" accept="image/*" onChange={handleFileChange} className="border rounded p-2" />
          {file && <img src={URL.createObjectURL(file)} alt="Preview" className="w-32 mt-2" />}
          <Button onClick={handleUpdate} className="mt-4 bg-blue-500 hover:bg-blue-600">
            Simpan Perubahan
          </Button>
        </div>
      )}
    </div>
  );
}
