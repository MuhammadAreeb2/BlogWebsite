import mongoose from "mongoose";
import { connectlink } from "../../../lib/db";
import { NextResponse } from "next/server";
import { BLOGSMODEL } from "../../../lib/model/blogsschema";

export async function POST(request) {
    let body = await request.json()
    await mongoose.connect(connectlink).then((val) => {
        console.log("mongo db connected in blogs ")
    })


    let response = await BLOGSMODEL(body)
    await response.save()
    return NextResponse.json({
        data: response,
        // message: "GET ALL blogs data"
    })
}

export async function GET() {
    return NextResponse.json({
        msg: "get blogs api "
    })
}