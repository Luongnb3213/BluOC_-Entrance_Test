
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Edit3, Trash2, User, Eye, EyeOff } from 'lucide-react';
import { deletePost, updatePost } from '../store/actions';

const PostCard = ({ post }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editData, setEditData] = useState({
    title: post.title, 
    body: post.body,
  });
  const dispatch = useDispatch();

  const handleDelete = () => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      dispatch(deletePost(post.id));
    }
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    dispatch(updatePost({ ...post, ...editData }));
    setIsEditing(false);
  };

  const handleCancel = () => {
    setEditData({ title: post.title, body: post.body });
    setIsEditing(false);
  };

  return (
    <div className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow border p-4">
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
            <User size={14} className="text-white" />
          </div>
          <span className="text-sm text-gray-600">User {post.userId}</span>
        </div>
        <div className="flex gap-1">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="p-1 text-gray-400 hover:text-blue-500"
          >
            {isExpanded ? <EyeOff size={16} /> : <Eye size={16} />}
          </button>
          <button
            onClick={handleEdit}
            className="p-1 text-gray-400 hover:text-green-500"
          >
            <Edit3 size={16} />
          </button>
          <button
            onClick={handleDelete}
            className="p-1 text-gray-400 hover:text-red-500"
          >
            <Trash2 size={16} />
          </button>
        </div>
      </div>

      {isEditing ? (
        <div className="space-y-3">
          <input
            type="text"
            value={editData.title}
            onChange={(e) =>
              setEditData({ ...editData, title: e.target.value })
            }
            className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          />
          <textarea
            value={editData.body}
            onChange={(e) => setEditData({ ...editData, body: e.target.value })}
            rows="3"
            className="w-full px-3 py-2 border border-gray-300 rounded focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
          />
          <div className="flex gap-2">
            <button
              onClick={handleSave}
              className="px-3 py-1 bg-green-600 text-white rounded hover:bg-green-700 text-sm"
            >
              Save
            </button>
            <button
              onClick={handleCancel}
              className="px-3 py-1 bg-gray-300 text-gray-700 rounded hover:bg-gray-400 text-sm"
            >
              Cancel
            </button>
          </div>
        </div>
      ) : (
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">
            {post.title}
          </h3>
          <p className={`text-gray-600 ${isExpanded ? '' : 'line-clamp-3'}`}>
            {post.body}
          </p>
        </div>
      )}
    </div>
  );
};

export default PostCard;
