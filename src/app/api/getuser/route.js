





import mongoose from "mongoose";
import { NextResponse } from "next/server";
import { connectlink } from '../../lib/db'
import { USERMODEL } from '../../lib/model/userschema'

export async function GET() {


    // Yahan se register ho ri 
// us page pr chlo  jaha pe view krvani ? hm

    try {
        await mongoose.connect(connectlink);
        // const getId = localStorage.getItem("userid")
        // console.log(getId)
        // const userId = request.query.userId; // Assuming you want to fetch a user by their ID, you can access the query parameter like this.
        // wait kro 
        const user = await USERMODEL.find();

        if (user) {
            return NextResponse.json({
                message: "User found",
                data: user
            });
        } else {
            return NextResponse.json({
                message: "User not found",
                data: null
            });
        }
    } catch (error) {
        console.error(error);
        return NextResponse.error(error);
    }
}
