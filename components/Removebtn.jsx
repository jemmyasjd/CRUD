'use client';
import { HiOutlineTrash } from "react-icons/hi"
import { useRouter } from "next/navigation";

export default function Removebtn({id}){
    const router = useRouter();

    const removeTopic = async () => {
        const apiUrl = process.env.API_URL;
        const confirm = window.confirm("Are you sure you want to delete this topic?");
        if (confirm){
            try {
                const response = await fetch(`${apiUrl}/api/topics?id=${id}`, {
                    method: "DELETE",     
                });
            } catch (error) {
                console.log(error);
            }
            router.refresh();
        }
    };

    return <button onClick={removeTopic} className="text-red-400">
        <HiOutlineTrash/>
    </button>
}