import React, { useState } from "react";
import { Link } from "react-router-dom";

const Bookmark = () => {
  // Sample state for bookmarks
  const [bookmarks, setBookmarks] = useState([
    { id: 1, title: "React Documentation", url: "https://reactjs.org" },
    { id: 2, title: "Tailwind CSS", url: "https://tailwindcss.com" },
    { id: 3, title: "MDN Web Docs", url: "https://developer.mozilla.org" },
  ]);

  // Function to remove a bookmark
  const removeBookmark = (id) => {
    setBookmarks(bookmarks.filter((bookmark) => bookmark.id !== id));
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md sm:w-full md:w-96 lg:w-96 xl:w-96">
        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-6">
          Your Bookmarks
        </h2>

        {bookmarks.length === 0 ? (
          <p className="text-center text-gray-500">
            You have no bookmarks yet.
          </p>
        ) : (
          <ul className="space-y-4">
            {bookmarks.map((bookmark) => (
              <li
                key={bookmark.id}
                className="flex justify-between items-center p-4 border-b border-gray-300 rounded-md"
              >
                <div>
                  <a
                    href={bookmark.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline"
                  >
                    {bookmark.title}
                  </a>
                </div>
                <button
                  onClick={() => removeBookmark(bookmark.id)}
                  className="text-red-600 hover:underline"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
        )}

        <div className="mt-6 text-center">
          <Link to="/" className="text-[#b3876f] hover:underline">
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Bookmark;
