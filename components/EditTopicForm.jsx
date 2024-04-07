'use client';

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EditTopicForm({id,title,description}){

    const router = useRouter();
    console.log();

    const[newTitle, setTopicTitle] = useState(title);
    const[newDescription, setTopicDescription] = useState(description);

    const handleSubmit = async (e) => {
        const apiUrl = process.env.API_URL;
        e.preventDefault();
        const res = await fetch(`${apiUrl}/api/topics/${id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({newTitle,newDescription})
        });
        const json = await res.json();
        console.log(json);
        router.push("/");
        router.refresh();

    }

    return <form onSubmit={handleSubmit} className="flex flex-col gap-3">
       
    <input onChange={e=> setTopicTitle(e.target.value)} value={newTitle} type="text" placeholder="Topic Title" className="border border-slate-500 px-8 py-2"/>
    <input onChange={e=> setTopicDescription(e.target.value)} value={newDescription} type="text" placeholder="Topic Description" className="border border-slate-500 px-8 py-2 "/>
    <button type="submit" className="bg-green-600 font-bold text-white py-3 px-6 w-fit">Update topic</button>
    </form>
}