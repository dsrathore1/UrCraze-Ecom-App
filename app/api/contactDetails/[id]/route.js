import { NextResponse } from "next/server";
import client from "@/helper/DB/connectDB";
import { getContactDataByID } from "@/helper/Queries/query";

export async function GET(req, { params }) {
    const dataById = await client.query(getContactDataByID, [params.id]);
    // console.log(dataById.rows);

    return NextResponse.json(dataById.rows);
}