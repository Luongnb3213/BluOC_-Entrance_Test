import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import PostsList from './components/PostsList';
import PostForm from './components/PostForm';
const App = () => {
  return (
    <Provider store={store}>
      <div className="min-h-screen bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="container mx-auto px-4 py-8">
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-2">My Posts</h1>
            <p className="text-gray-600">Share your thoughts with the world</p>
          </div>
          <PostForm />
          <PostsList />
        </div>
      </div>
    </Provider>
  );
};

export default App;
