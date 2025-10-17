import { connectDB } from "@/lib/mongodb";
import Post from "@/models/post";
import { NextResponse } from "next/server";

//Get all posts
export async function GET() {
  await connectDB();
  const posts = await Post.find().sort({ createdAt: -1 });
  return NextResponse.json(posts);
}

//Create new post
export async function POST(req) {
  await connectDB();
  const { title, content, imageUrl } = await req.json();
  const newPost = new Post({ title, content, imageUrl });
  await newPost.save();
  return NextResponse.json({ message: "Post created successfully", post: newPost });
}
