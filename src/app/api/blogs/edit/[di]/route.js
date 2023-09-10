
import { connectlink } from "../../../../lib/db";
import { BLOGSMODEL } from "../../../../lib/model/blogsschema";
import mongoose from "mongoose";
import { NextResponse } from "next/server";
export async function PUT(request, content) {


    let data = await request.json()

    let id = content.params.di

    await mongoose.connect(connectlink)

        .then(() => {

            console.log(data)
            console.log("put api connect ")

        })

    let obj = { _id: id }
    const filter = await BLOGSMODEL.findOneAndUpdate(obj, data)


    return NextResponse.json({

        data: filter,
        status: true


    })


}
