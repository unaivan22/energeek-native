import React, { useState } from 'react';
import axios from 'axios';
import "quill/dist/quill.core.css";
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function AddProject() {
    const [form, setForm] = useState({
        name: "",
        client: "",
        year: "",
        description: "",
        thumbnail: "",
        screenshots: [], // Untuk menyimpan URL screenshot
    });

    const [thumbnailFile, setThumbnailFile] = useState(null);
    const [screenshotFiles, setScreenshotFiles] = useState([]); // State untuk multiple images

    const handleInputChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleQuillChange = (content) => {
        setForm((prevForm) => ({ ...prevForm, description: content }));
    };

    const handleThumbnailChange = (e) => {
        setThumbnailFile(e.target.files[0]);
    };

    const handleScreenshotChange = (e) => {
        setScreenshotFiles(Array.from(e.target.files));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            let thumbnailUrl = "";
            if (thumbnailFile) {
                const formData = new FormData();
                formData.append("file", thumbnailFile);
                const uploadRes = await axios.post("http://localhost/api/upload.php", formData, {
                    headers: { "Content-Type": "multipart/form-data" },
                });
                thumbnailUrl = uploadRes.data.url;
            }

            let screenshotUrls = [];
            if (screenshotFiles.length > 0) {
                const formData = new FormData();
                screenshotFiles.forEach(file => formData.append("screenshots[]", file));
                const uploadRes = await axios.post("http://localhost/api/upload_screenshots.php", formData, {
                    headers: { "Content-Type": "multipart/form-data" },
                });
                screenshotUrls = uploadRes.data.urls;
            }

            const payload = { 
                ...form, 
                thumbnail: thumbnailUrl, 
                screenshots: screenshotUrls 
            };

            console.log("Payload yang dikirim:", payload);

            const res = await axios.post("http://localhost/api/projects.php", payload);

            console.log("Server response:", res.data);

            if (res.data.success) {
                alert("Project berhasil ditambahkan!");
            } else {
                alert("Gagal menambahkan project: " + res.data.error);
            }
        } catch (error) {
            console.error("Error:", error);
            alert("Gagal menambahkan project.");
        }
    };

    const fullToolbarOptions = [
        [{ 'header': '1'}, { 'header': '2'}],
        [{ 'list': 'ordered'}, { 'list': 'bullet' }],
        [{ 'size': ['small', false, 'large', 'huge'] }],
        [{ 'color': [] }, { 'background': [] }],
        [{ 'align': [] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        ['clean']
    ];

    return (
        <div className='container max-w-3xl mx-auto py-12'>
            <h1 className='text-2xl font-bold mb-6'>Tambah Project</h1>
            <form onSubmit={handleSubmit} className='flex flex-col gap-4 bg-white p-6 rounded-lg shadow-lg'>
                <Input type="text" name="name" placeholder="Judul" value={form.name} onChange={handleInputChange} required />
                <Input type="text" name="client" placeholder="Client" value={form.client} onChange={handleInputChange} required />
                <Input type="text" name="year" placeholder="Tahun" value={form.year} onChange={handleInputChange} required />

                <label className="text-gray-600">Thumbnail</label>
                <input type="file" accept=".webp" onChange={handleThumbnailChange} className="border rounded p-2" />
                {thumbnailFile && <img src={URL.createObjectURL(thumbnailFile)} alt="Preview" className="w-32 mt-2" />}

                <label className="text-gray-600">Deskripsi</label>
                <ReactQuill
                    theme="snow"
                    bounds=".quill-editor"
                    modules={{ toolbar: fullToolbarOptions }}
                    value={form.description}
                    onChange={handleQuillChange}
                    className="w-full h-[200px] rounded"
                />

                <label className="text-gray-600">Screenshot Project</label>
                <input type="file" multiple accept=".webp" onChange={handleScreenshotChange} className="border rounded p-2" />
                {screenshotFiles.length > 0 && (
                    <div className="mt-2 flex gap-2">
                        {screenshotFiles.map((file, index) => (
                            <img key={index} src={URL.createObjectURL(file)} alt="Screenshot" className="w-24" />
                        ))}
                    </div>
                )}

                <Button type="submit" className="mt-4 bg-blue-500 hover:bg-blue-600 text-white">Simpan</Button>
            </form>
        </div>
    );
}
