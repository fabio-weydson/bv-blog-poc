import React from 'react';
import { render, fireEvent, waitFor, screen } from '@testing-library/react'
import Sidebar from "../../src/components/sidebar/sidebar";

describe("Sidebar", function() {
    
  it("should exists", function() {
      expect(Sidebar).toBeTruthy();
  });

  it("should be loaded", () => {
    const { findAllByText } = render(<Sidebar/>)
    const authorsTitle = findAllByText(/autores/i)
    expect(authorsTitle).toBeTruthy();
  });

});