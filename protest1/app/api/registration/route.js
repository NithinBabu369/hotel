import User from "@/database_models/user_model";
import Connect from "@/dbconfig/connect";
import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs"


export async function POST(request){
try {
    await Connect()
    const {username,email,password}= await request.json()
    const salt = await bcryptjs.genSalt(5)
    const hashedPassword= await bcryptjs.hash(password,salt)
    const isExist= await User.findOne({email: email,username: username})
    if (isExist){
        return NextResponse.json({
            message: "email already exist",
            status: 206})
    }
    const newUser= new User({
        username: username,
        email: email,
        password: hashedPassword
    })
    await  newUser.save()
    return NextResponse.json({
        message: "User created sucessfully",
        status: 200,
        newUser})

} catch (error) {
    return NextResponse.json({
        message: "error occurd",
        status: 400,
        error})
    
}
}