import React, { useState } from 'react';
import axios from 'axios';
import "quill/dist/quill.core.css";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function AddTeam() {
    const [form, setForm] = useState({
        name: "",
        role: "",
        email: "",
        photo: "",
    });

    const [file, setFile] = useState(null);

    const handleInputChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
    
        try {
            let photoUrl = "";
            if (file) {
                const formData = new FormData();
                formData.append("file", file);
                const uploadRes = await axios.post("http://localhost/api/uploadteam.php", formData, {
                    headers: { "Content-Type": "multipart/form-data" },
                });
                photoUrl = uploadRes.data.url;
            }
    
            const payload = { ...form, photo: photoUrl };
    
            console.log("Payload yang dikirim:", payload); // 🔍 Debugging di frontend
    
            const res = await axios.post("http://localhost/api/teams.php", payload);
    
            console.log("Server response:", res.data); // 🔍 Debugging response dari backend
    
            if (res.data.success) {
                alert("Team berhasil ditambahkan!");
            } else {
                alert("Gagal menambahkan teams: " + res.data.error);
            }
        } catch (error) {
            console.error("Error:", error);
            console.log(error.response?.data); // 🔍 Debugging error dari server
            alert("Gagal menambahkan team.");
        }
    };
    

    return (
        <div className='container max-w-3xl mx-auto py-12'>
            <h1 className='text-2xl font-bold mb-6'>Tambah Team</h1>
            <form onSubmit={handleSubmit} className='flex flex-col gap-4 bg-white p-6 rounded-lg shadow-lg'>
                <Input type="text" name="name" placeholder="Judul" value={form.name} onChange={handleInputChange} required />
                <Input type="text" name="role" placeholder="Role" value={form.role} onChange={handleInputChange} required />
                <Input type="email" name="email" placeholder="Email" value={form.email} onChange={handleInputChange} required />
                
                <label className="text-gray-600">Photo</label>
                <input type="file" accept=".webp" onChange={handleFileChange} className="border rounded p-2" />
                {file && <img src={URL.createObjectURL(file)} alt="Preview" className="w-32 mt-2" />}
                <Button type="submit" className="mt-4 bg-blue-500 hover:bg-blue-600 text-white">Simpan</Button>
            </form>
        </div>
    );
}
