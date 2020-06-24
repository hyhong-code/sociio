import React from 'react';
import CommentPost from '../components/CommentPost';
import CommentForm from '../components/CommentForm';
import CommentCard from '../components/CommentCard';

const Comment = () => {
  return (
    <section id="comment" class="bg-light text-dark">
      <div class="container">
        <h1 class="display-4 text-center pb-0">
          Comments <i class="far fa-comment"></i>
        </h1>
        <div class="row">
          <div class="col-10 offset-1 col-md-8 offset-md-2">
            <a href="posts.html" class="btn btn-secondary">
              Back to posts
            </a>
            <div class="py-3 mt-3">
              <CommentPost />
              <CommentForm />
              <div class="col-md-10 offset-md-1 p-3 border mt-3">
                <CommentCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Comment;
