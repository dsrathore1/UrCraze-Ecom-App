import { NextResponse } from "next/server.js";
import client from "@/helper/DB/connectDB.js";
import { checkEmailExists, getContactDetail, insertData } from "@/helper/Queries/query.js";

export async function GET(req) {
    try {
        const allContactDetail = await client.query(getContactDetail);
        return NextResponse.json(allContactDetail.rows);
    } catch (error) {
        console.log(error);
    }
}

export async function POST(req) {
    const { name, email, msg } = await req.json();
    try {
        await client.query(insertData, [name, email, msg]);
        return NextResponse.json("Successfully added contact");
    } catch (error) {
        const checkEmail = await client.query(checkEmailExists, [email]);
        return NextResponse.json({ message: "This email is already exists.", data: checkEmail.rows });
        // console.log("Yes, your email is already exists. :- ", checkEmail.rows);
    }
}