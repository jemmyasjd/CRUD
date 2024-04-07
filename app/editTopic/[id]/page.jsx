import EditTopicForm from "@/components/EditTopicForm";


const getTopicbyId = async (id) => {
    const apiURL = process.env.API_URL;
    console.log(apiURL);
    try {
        const res = await fetch(`${apiURL}/api/topics/${id}`, {cache: "no-store"});
        if(!res.ok){
            throw new Error(res.status)
        }
        return res.json();
    } catch (error) {
        console.log(error);
    }
}

export default async function EditTopic({params}){
    const {id} = params;
    // console.log(id); 
    const {topic} = await getTopicbyId(id);
    const {title, description} = topic;
    // console.log(title,description);

    return <EditTopicForm id={id} title = {title} description={description} />;
}