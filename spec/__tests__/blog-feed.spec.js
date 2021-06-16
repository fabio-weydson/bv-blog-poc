import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import BlogFeed from '../../src/components/blog/blog-feed';

describe("BlogFeed", function() {
    
  it("should exists", function() {
      render(<BlogFeed users={{}} isLoaded={false} />);
      expect(BlogFeed).toBeTruthy();
  });

  it("can load posts", function() {
    const users =[{
      "id": 101,
      "name": "Fabio Weydson",
      "username": "fabioweydson",
      "email": "fabioweydson@gmail.com",
      "picture":"https://avatars.githubusercontent.com/u/11513557?v=4",
      "address": {},
      "phone": "",
      "website": "",
      "company": {"name": "Foursys"}
    }];
    render(<BlogFeed users={users} isLoaded={true}/>);
    expect(BlogFeed).toBeTruthy();
  });

});