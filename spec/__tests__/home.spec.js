import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import Home from '../../src/pages/home';

describe("Home", function() {


  it("should exists", function() {
      render(<Home/>);
      expect(Home).toBeTruthy();
  });


});