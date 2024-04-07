"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AddTopic(){

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");

    const router = useRouter();
    const apiURL = process.env.API_URL;

    const handleSubmit = async (e) => {
        e.preventDefault();

        if(!title || !description) alert("Please add all fields");

        try {
            const response = await fetch(`/api/topics`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({title, description}),
            });
            if(response.ok){
                router.push("/");
                router.refresh();
            }
        } catch (error) {
            
        }

        
    }

    return <form onSubmit={handleSubmit} className="flex flex-col gap-3">
       
        <input onChange={(e) => setTitle(e.target.value)} value={title} type="text" placeholder="Topic Title" className="border border-slate-500 px-8 py-2"/>
        <input onChange={(e) => setDescription(e.target.value)} value={description}  type="text" placeholder="Topic Description" className="border border-slate-500 px-8 py-2 "/>
        <button type="submit" className="bg-green-600 font-bold text-white py-3 px-6 w-fit">Add topic</button>
    </form>
}