import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { connectlink } from '../../lib/db'
import { USERMODEL } from '../../lib/model/userschema'


export async function POST(request, content) {

    console.log(connectlink)

    await mongoose.connect(connectlink).then((val) => {
        console.log("test connect")
    })

    let data = await request.json()

    let checkuser = await USERMODEL.findOne({ email: data.email })
    console.log(checkuser)
    if (checkuser != null) {
        if (checkuser.password == data.password) {
            return NextResponse.json({
                message: "User Login",
                data: checkuser
            })
        }
        else {
            return NextResponse.json({
                message: "password correct",
                data: []
            })
        }

    }
    else {

        return NextResponse.json({
            message: "Not found User",
            data: []
        })
    }
}