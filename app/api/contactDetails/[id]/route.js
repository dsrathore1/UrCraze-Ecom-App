import { NextResponse } from "next/server";
import client from "@/helper/DB/connectDB";
import { deleteDetailByID, getContactDataByID, updateDetailByID } from "@/helper/Queries/query";

export async function GET(req, { params }) {
    const getDataById = await client.query(getContactDataByID, [params.id]);
    // console.log(dataById.rows);

    return NextResponse.json(getDataById.rows);
}

export async function DELETE(req, { params }) {
    await client.query(deleteDetailByID, [params.id]);
    return NextResponse.json("Your given ID's data is deleted successfully");
}

export async function PUT(req, { params }) {
    const { name, email, msg } = await req.json();
    await client.query(updateDetailByID, [name, email, msg, params.id]);
    return NextResponse.json({ message: "Your data is Updated"});
}