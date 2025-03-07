import { Button } from '@/components/ui/button'
import { ArrowUpRight } from 'lucide-react'
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from 'react-router-dom';

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);
  useEffect(() => {
    fetchBlogs();
  }, []);

  const fetchBlogs = async () => {
    try {
      const res = await axios.get("/api/getBlogs.php");
      setBlogs(res.data);
    } catch (error) {
      console.error("Error fetching blog:", error);
    }
  };

  return (
    <div className='bg-black text-white'>
      <div className='container py-32'>
        <div className='flex flex-col gap-2 items-center'>
          <h2 className='text-4xl lg:max-w-[500px] font-semibold'>Blog</h2>
          <p className='opacity-50 text-md lg:max-w-[500px]'>Meet Our Professional Staff</p>
        </div>
        <div className='grid lg:grid-cols-3 grid-cols-1 py-24 pb-12 gap-6'>
        {blogs.slice(-3).map((blog) => (
          <Link to={`/blog/${blog.id}`} >
            <div key={blog.id} className='border border-white dark:border-white flex flex-col items-center rounded-xl p-6 gap-2 hover:shadow-[10px_10px_0px_rgba(0,0,0,1)] cursor-pointer'>
              {blog.thumbnail && <img src={blog.thumbnail} alt="blog" className='rounded-xl object-cover h-[280px] w-auto' />}
              <h1 className='text-xl font-semibold line-clamp-2'>{blog.name}</h1>
              <p className="italic text-sm opacity-70 font-ligh line-clamp-3" dangerouslySetInnerHTML={{ __html: blog.description }} />
            </div>
          </Link>
        ))}
        </div>
        <div className='flex items-center justify-center pt-12'>
          <a href='/#/blogs'><Button className='rounded-full text-xl border-2 border-white px-6 py-10' size='lg' variant='outline'>Semua Blogs <ArrowUpRight className='w-4 h-4 ml-2' /> </Button></a>
        </div>
      </div>
    </div>
  )
}
