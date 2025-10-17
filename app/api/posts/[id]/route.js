import { connectDB } from "@/lib/mongodb";
import Post from "@/models/post";
import { NextResponse } from "next/server";

//Update a post
export async function PUT(req, { params }) {
  await connectDB();
  const { title, content, imageUrl } = await req.json();
  const updatedPost = await Post.findByIdAndUpdate(
    params.id,
    { title, content, imageUrl },
    { new: true }
  );
  return NextResponse.json({ message: "Post updated", post: updatedPost });
}

//Delete a post
export async function DELETE(req, { params }) {
  await connectDB();
  await Post.findByIdAndDelete(params.id);
  return NextResponse.json({ message: "Post deleted successfully" });
}
