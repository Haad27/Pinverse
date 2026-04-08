import cloudinary from "@/libs/cloudinary";
import connectToDB from "@/libs/mongodb";
import User from "@/models/User";
import { NextResponse } from "next/server";

import bcrypt from "bcrypt";

export async function POST(request) {
  connectToDB();

  const formDara = await request.formDara();
  const image = formData.get("image");
  const username = formData.get("username");
  const email = formData.get("email");
  const password = formData.get("password");

  if (!image) {
    return NextResponse.json({ error: "Image is required" }, { status: 400 });
  }
  try {
    const arrayBuffer = await image.arrayBuffer();
    const buffer = new Uint8Array(arrayBuffer);
    //uploads our image to cloudinary

    const uploadedResponse = await new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        {},
        (error, result) => {
          if (error) {
            reject(error);
            return;
          }
          resolve(result);
        },
      );
      uploadStream.end(buffer);
    });

    //this is for the password and 10 is lenght of pasword as mention in thoer documentation
    const hashedPassword = await bcrypt.hash(password, 10);
    // just save the user
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
      image: uploadedResponse.secure_url,
    });

    return NextResponse.json(
      {
        success: true,
        message: "User registered",
        user,
      },
      { status: 201 },
    );
  } catch (error) {
    console.error(
      "user regisytration failed",error
    );
    return NextResponse.json({
      error:"User registration failed"
    },{status : 500});
  }

}
