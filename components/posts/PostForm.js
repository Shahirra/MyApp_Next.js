"use client";

import {useRef, useState, useTransition} from "react";

export default function PostForm({editingPost, addPost, updatePost}) {
  const [selectedFileName, setSelectedFileName] = useState("");
  const formRef = useRef(null);
  const [isPending, startTransition] = useTransition();

  function handleFileChange(e) {
    if (e.target.files.length > 0) {
      setSelectedFileName(e.target.files[0].name);
    } else {
      setSelectedFileName("");
    }
  }

  function handleSubmit(formData) {
    const action = editingPost
      ? updatePost.bind(null, editingPost._id)
      : addPost;

    startTransition(async () => {
      await action(formData);

      formRef.current?.reset();
      setSelectedFileName("");
    });
  }

  return (
    <form ref={formRef} action={handleSubmit} className="flex flex-col gap-4">
      <input
        type="text"
        name="title"
        placeholder="Post Title"
        defaultValue={editingPost?.title || ""}
        required
        className="border border-green-300 p-3 rounded-lg focus:ring-2 focus:ring-green-500"
      />

      <textarea
        name="content"
        placeholder="Write your content..."
        defaultValue={editingPost?.content || ""}
        rows="4"
        required
        className="border border-green-300 p-3 rounded-lg focus:ring-2 focus:ring-green-500 resize-none"
      />

      <label
        htmlFor="image-upload"
        className="border border-green-300 p-3 rounded-lg cursor-pointer text-center text-green-600 hover:bg-green-100 transition"
      >
        {selectedFileName ||
          (editingPost?.imageUrl ? "Change Image" : "Upload Image")}
      </label>
      <input
        id="image-upload"
        type="file"
        name="image"
        accept="image/*"
        onChange={handleFileChange}
        className="hidden"
      />

      <input
        type="hidden"
        name="imageUrl"
        value={editingPost?.imageUrl || ""}
      />

      <div className="flex gap-3">
        <button
          type="submit"
          disabled={isPending}
          className={`${
            editingPost
              ? "bg-yellow-500 hover:bg-yellow-600"
              : "bg-green-600 hover:bg-green-700"
          } text-white font-semibold py-2 px-4 rounded-lg`}
        >
          {isPending
            ? editingPost
              ? "Updating..."
              : "Adding..."
            : editingPost
            ? "Update Post"
            : "Add Post"}
        </button>
      </div>
    </form>
  );
}
