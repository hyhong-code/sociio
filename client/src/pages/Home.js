import React from 'react';
import PostForm from '../components/post/PostForm';
import Post from '../components/post/Post';

const Home = () => {
  return (
    <section id="posts" class="bg-light text-dark">
      <div class="container">
        <h1 class="display-4 text-center mb-0 mb-md-4">
          FOR YOU <i class="fas fa-users"></i>
        </h1>
        <div class="row">
          <div class="col-10 offset-1 col-md-8 offset-md-2">
            <PostForm />
            <div class="py-3 mt-3">
              <Post />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
