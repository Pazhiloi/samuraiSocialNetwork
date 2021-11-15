import React from 'react';
import profileReducer, { addPostActionCreator, deletePost } from './profile-reducer'

let state = {
    posts: [
    {id: 1, message: 'Hi, how are you?', likesCount: 12}, 
    {id: 2, message: "It's my first post", likesCount: 11}, 
    {id: 3, message: "It's my first post", likesCount: 11}, 
    {id: 4, message: "It's my first post", likesCount: 11}, 
  ]
}

it('message of new post should be it-it-it', () => {
  let action = addPostActionCreator('it-it-it')
  let newState = profileReducer(state, action)
  expect(newState.posts.length).toBe(5);
});

it('length of posts should be incremented', () => {
  let action = addPostActionCreator('it-it-it')
  let newState = profileReducer(state, action)
  expect(newState.posts[4].message).toBe('it-it-it');
});
it('after deleting length of messages should be decremented', () => {
  let action = deletePost(1)
  let newState = profileReducer(state, action)
  expect(newState.posts.length).toBe(3);
});
it('after deleting length  shouldn"t be decremented if id is incorrect', () => {
  let action = deletePost(1000)
  let newState = profileReducer(state, action)
  expect(newState.posts.length).toBe(4);
});

