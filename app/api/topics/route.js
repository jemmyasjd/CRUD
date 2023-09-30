import connctMongoDB from "@/libs/mongodb";
import Topic from "@/models/topic";
import { NextResponse } from "next/server";

export async function POST(request){
    const { title, description } = await request.json();
    await connctMongoDB();
    await Topic.create({ title, description });
    return NextResponse.json({ message: "Topic created" }, { status: 201 });
}

export async function GET(){
    await connctMongoDB();
    const topics = await Topic.find({});
    return NextResponse.json(topics, { status: 200 });
}

export async function DELETE(request){
    const  id  = request.nextUrl.searchParams.get("id");
    await connctMongoDB();
    await Topic.findByIdAndDelete(id);
    return NextResponse.json({ message: "Topic deleted" }, { status: 200 });
}