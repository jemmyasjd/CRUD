import Link from "next/link";
import Removebtn from "./Removebtn";
import {HiPencilAlt} from "react-icons/hi";


const getTopics = async () => {
    const apiURL = process.env.API_URL;
    try {
        const response = await fetch(`${apiURL}/api/topics`,{cache: "no-store"});
        const topics = await response.json();
        // console.log(topics);
        return topics;
    } catch (error) {
        console.log(error);
    }
    
};

export default async function Topiclist(){

    const topics = await getTopics();
    // console.log(topics);

   return (
    <>
    {topics.map ( (t) =>  (
    
            <div className="p-4 border border-slate-300 my-3 flex justify-between gap-5 items-start">
                <div>
                    <h2 className="font-bold text-2xl">{t.title}</h2>
                    <div>{t.description}</div>
                </div>
                <div className="flex gap-2">
                    <Removebtn id={t._id} />
                    <Link href={`/editTopic/${t._id}`}> <HiPencilAlt size={24}/> </Link>
                </div>
            </div>
    ))}
   </>
   );
}