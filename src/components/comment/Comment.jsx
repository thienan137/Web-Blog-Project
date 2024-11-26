import { Button } from "@material-tailwind/react";
import React, { useContext, useState } from "react";
import myContext from "../../context/data/myContext";

function Comment({ addComment, commentText, setcommentText, allComment, setAllComment, fullName, setFullName }) {

  const context = useContext(myContext);
  const { mode } = context;

  // Hàm xóa comment
  const deleteComment = (indexToDelete) => {
    const updatedComments = allComment.filter((_, index) => index !== indexToDelete);
    setAllComment(updatedComments); // Cập nhật trạng thái ở BlogInfo
  };
  

  return (
    <section className="py-8 lg:py-16">
      <div className="max-w-2xl mx-auto px-4">
        <div className="flex justify-between items-center mb-3">
          <h2 className="text-lg lg:text-2xl font-bold" style={{ color: mode === "dark" ? "white" : "black" }}>
            Make Comment
          </h2>
        </div>
        {/* Comment Form */}
        <form className="mb-6">
          {/* Full Name Input */}
          <div
            className="py-2 px-4 mb-4 rounded-lg rounded-t-lg shadow-[inset_0_0_4px_rgba(0,0,0,0.6)] border border-gray-200"
            style={{
              background: mode === "dark" ? "#353b48" : "rgb(226, 232, 240)",
            }}
          >
            <input
              type="text"
              placeholder="Enter Full Name"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="px-0 w-full text-sm border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400"
              style={{
                background: mode === "dark" ? "#353b48" : "rgb(226, 232, 240)",
              }}
            />
          </div>

          {/* Text Area */}
          <div
            className="py-2 px-4 mb-4 rounded-lg rounded-t-lg shadow-[inset_0_0_4px_rgba(0,0,0,0.6)] border border-gray-200"
            style={{
              background: mode === "dark" ? "#353b48" : "rgb(226, 232, 240)",
            }}
          >
            <textarea
              id="comment"
              rows={6}
              value={commentText}
              onChange={(e) => setcommentText(e.target.value)}
              className="px-0 w-full text-sm border-0 focus:ring-0 focus:outline-none dark:text-white dark:placeholder-gray-400"
              style={{ background: mode === "dark" ? "#353b48" : "rgb(226, 232, 240)" }}
              placeholder="Write a comment..."
              required
            />
          </div>
          {/* Button */}
          <div className="">
            <Button
              onClick={addComment}
              style={{
                background: mode === "dark" ? "rgb(226, 232, 240)" : "rgb(30, 41, 59)",
                color: mode === "dark" ? "rgb(30, 41, 59)" : "rgb(226, 232, 240)",
              }}
            >
              Post comment
            </Button>
          </div>
        </form>

        {/* Comments Section */}
        {allComment.map((item, index) => {
          const { fullName, date, commentText } = item;
          return (
            <div key={index} className="p-6 mb-6 text-base rounded-lg" style={{ background: mode === "dark" ? "#353b48" : "rgb(226, 232, 240)" }}>
              <footer className="flex justify-between items-center mb-4">
                <div className="flex items-center my-2 bg-white px-2 py-1 rounded-lg">
                  <p className="inline-flex items-center mr-3 text-lg" style={{ color: mode === "dark" ? "black" : "black" }}>
                    {fullName}
                  </p>
                  <p className="text-sm" style={{ color: mode === "dark" ? "black" : "black" }}>
                    {date}
                  </p>
                </div>
                <button
                  onClick={() => deleteComment(index)}
                  className="text-red-600 text-sm hover:underline"
                >
                  Delete
                </button>
              </footer>
              <p className="text-gray-500 dark:text-gray-400 text-md" style={{ color: mode === "dark" ? "white" : "black" }}>
                ↳ {commentText}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Comment;
