import mongoose from "mongoose";
import { connectlink } from "../../../lib/db";
import { NextResponse } from "next/server";
import { BLOGSMODEL } from "../../../lib/model/blogsschema";

export async function GET() {
    // let body = await request.json()
    await mongoose.connect(connectlink).then((val) => {
        console.log("mongo db connected in blogs ")
    })
    
    let response = await BLOGSMODEL.find()
    // await response.find()
    return NextResponse.json({
        data: response,
        message: "GET ALL blogs  data"
    })

}


