import { connectlink } from "../../../../lib/db";
import { BLOGSMODEL } from "../../../../lib/model/blogsschema";
import mongoose from "mongoose";
import { NextResponse } from "next/server";




export async function DELETE(request, content) {

    let id = content.params.di
    mongoose.connect(connectlink)
        .then((res) => {
            console.log("delete api")

        })

    let obj = { _id: id }

    console.log(id)

    const res = await BLOGSMODEL.deleteOne(obj)

    return NextResponse.json({
        data: res,
        status: true
    })
}







export async function GET(request, connect) {

    let id = connect.params.di

    await mongoose.connect(connectlink)
    console.log('get connected')

    let obj = { _id: id }

    const res = await BLOGSMODEL.findOne(obj)

    return NextResponse.json({
        data: res,
        status: true
    })
}