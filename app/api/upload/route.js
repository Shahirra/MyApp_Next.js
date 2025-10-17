import { NextResponse } from "next/server";
import { imagekit } from "@/lib/imagekit";

export async function POST(request) {
  try {
    const { file, fileName } = await request.json();

    const uploadResponse = await imagekit.upload({
      file, // Base64 encoded image
      fileName,
    });

    return NextResponse.json({
      success: true,
      url: uploadResponse.url,
    });
  } catch (error) {
    console.error("Image upload failed:", error);
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
