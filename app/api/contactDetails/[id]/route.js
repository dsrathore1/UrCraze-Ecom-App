import { NextResponse } from "next/server";
import client from "@/helper/DB/connectDB";
import { deleteDetailByID, getContactDataByID } from "@/helper/Queries/query";

export async function GET(req, { params }) {
    const getDataById = await client.query(getContactDataByID, [params.id]);
    // console.log(dataById.rows);

    return NextResponse.json(getDataById.rows);
}

export async function DELETE(req, { params }) {
    await client.query(deleteDetailByID, [params.id]);
    return NextResponse.json("Your given ID's data is deleted successfully");
}