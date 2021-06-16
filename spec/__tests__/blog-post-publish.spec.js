import React from 'react';
import { render, fireEvent, waitFor, screen, findByTestId, findByRole, getByText, findByText, findAllByTestId, findByAltText } from '@testing-library/react'
import BlogPostPublish from '../../src/components/blog/blog-post-publish';

describe("BlogPostPublish", function() {
    
    it("should exists", function() {
        render(<BlogPostPublish />);
        expect(BlogPostPublish).toBeTruthy();
    });
  
    it("Test for presence of publishing form", async () => {
        
        const { findByTestId } = render(<BlogPostPublish/>);
        const fieldTitle = await findByTestId('post-title')
        expect(fieldTitle).toBeTruthy()
        
    });


    it("Test the publishing form", async () => {
        
        const { findByTestId } = render(<BlogPostPublish/>);

        const fieldTitle = await findByTestId('post-title')
        const fieldBody = await findByTestId('post-body')
        const sbmtBtn = await screen.findByTestId('post-btn')

        /* Preenche os campos */
        fireEvent.change(fieldTitle, { target: { value:'Titulo de Teste' }})
        fireEvent.change(fieldBody, { target: { value:'Texto de Teste' }})

         /* Verifica se os campos foram preenchidos */
        expect(fieldTitle.value).withContext(fieldBody.value).toEqual('Titulo de Teste')
        expect(fieldBody.value).withContext(fieldBody.value).toEqual('Texto de Teste')

        /* Verifica e o botão está ativo */
        expect(sbmtBtn).toHaveClass('bg-blue-500')

        
      });
  
  });