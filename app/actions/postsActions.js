import Post from "@/models/post";
import { connectDB } from "@/lib/mongodb";
import { imagekit } from "@/lib/imagekit";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

function toPlain(post) {
  return {
    _id: post._id.toString(),
    title: post.title,
    content: post.content,
    imageUrl: post.imageUrl || "",
    createdAt: post.createdAt.toISOString(),
    updatedAt: post.updatedAt.toISOString(),
  };
}

export async function getAllPosts() {
  await connectDB();
  const posts = await Post.find().sort({ createdAt: -1 });
  return posts.map(toPlain);
}

export async function getPostById(id) {
  await connectDB();
  const post = await Post.findById(id);
  return toPlain(post);
}

export async function addPost(formData) {
  "use server";
  await connectDB();

  const title = formData.get("title");
  const content = formData.get("content");
  const imageFile = formData.get("image");

  let imageUrl = "";

  if (imageFile && imageFile.size > 0) {
    const arrayBuffer = await imageFile.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const uploadResult = await imagekit.upload({
      file: buffer,
      fileName: imageFile.name,
    });

    imageUrl = uploadResult.url;
  }
  await Post.create({ title, content, imageUrl });
  revalidatePath("/posts");
}

export async function updatePost(id, formData) {
  "use server";
  await connectDB();

  const title = formData.get("title");
  const content = formData.get("content");
  const imageFile = formData.get("image");

  let imageUrl = formData.get("imageUrl");

  if (imageFile && imageFile.size > 0) {
    const arrayBuffer = await imageFile.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);

    const uploadResult = await imagekit.upload({
      file: buffer,
      fileName: imageFile.name,
    });

    imageUrl = uploadResult.url;
  }

  await Post.findByIdAndUpdate(id, { title, content, imageUrl });
  revalidatePath("/posts");
  redirect("/posts")
}

export async function deletePost(id) {
  "use server";
  await connectDB();
  await Post.findByIdAndDelete(id);
  revalidatePath("/posts");
}
