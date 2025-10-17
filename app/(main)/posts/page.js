import {
  getAllPosts,
  getPostById,
  addPost,
  updatePost,
  deletePost,
} from "@/app/actions/postsActions";

import PostForm from "@/components/posts/PostForm";

export default async function PostsPage({ searchParams }) {
  const posts = await getAllPosts();
  const editingPostId = searchParams?.edit;
  const editingPost = editingPostId ? await getPostById(editingPostId) : null;

  return (
    <section className="min-h-screen bg-gradient-to-br from-green-50 to-white py-10 px-4">
      <h1 className="text-4xl font-bold text-green-700 text-center mb-10">
        Manage Blog Posts
      </h1>

      <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-2xl p-6 border border-green-200 mb-12">
        <PostForm editingPost={editingPost} addPost={addPost} updatePost={updatePost} />
      </div>

      <div className="max-w-6xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.length === 0 ? (
          <p className="text-center text-gray-600 col-span-full">
            No posts yet. Add one above!
          </p>
        ) : (
          posts.map((post) => (
            <div
              key={post._id}
              className="bg-white border border-green-200 rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-all"
            >
              {post.imageUrl && (
                <div className="w-full h-64 flex items-center justify-center bg-green-50 overflow-hidden">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="object-contain h-full w-full"
                  />
                </div>
              )}

              <div className="p-5">
                <h2 className="text-xl font-bold text-green-700 mb-2">{post.title}</h2>
                <p className="text-gray-700 mb-4">{post.content}</p>

                <div className="flex gap-2">
                  <a
                    href={`/posts?edit=${post._id}`}
                    className="bg-yellow-400 hover:bg-yellow-500 text-black font-medium py-1 px-3 rounded transition-all"
                  >
                    Edit
                  </a>

                  <form action={deletePost.bind(null, post._id)}>
                    <button
                      type="submit"
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                    >
                      Delete
                    </button>
                  </form>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </section>
  );
}
