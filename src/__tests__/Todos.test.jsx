import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { useQuery } from '@tanstack/react-query'
import Todos from '../Todos';

// Mocking the useQuery hook
jest.mock('@tanstack/react-query', () => ({
  useQuery: jest.fn(),
}));

describe('Todos Component', () => {
  it('renders loading message when fetching data', () => {
    // Mocking useQuery to return loading state
    useQuery.mockReturnValueOnce({ isPending: true });

    render(<Todos />);

    expect(screen.getByText('Loading...')).toBeInTheDocument();
  });

  it('renders error message when there is an error', async () => {
    // Mocking useQuery to return error state
    useQuery.mockReturnValueOnce({ error: { message: 'Error message' } });

    render(<Todos />);

    await waitFor(() => {
      expect(screen.getByText('An error has occurred: Error message')).toBeInTheDocument();
    });
  });

  it('renders todos when data is fetched successfully', async () => {
    // Mocking useQuery to return data
    useQuery.mockReturnValueOnce({ data: [{ id: 1, title: 'Todo 1', completed: false }] });

    render(<Todos />);

    await waitFor(() => {
      expect(screen.getByText('Todo 1')).toBeInTheDocument();
    });
  });

  it('renders todos with completed style when completed is true', async () => {
    // Mocking useQuery to return data
    useQuery.mockReturnValueOnce({ data: [{ id: 1, title: 'Todo 1', completed: true }] });

    render(<Todos />);

    await waitFor(() => {
      const todoElement = screen.getByText('Todo 1');
      expect(todoElement).toBeInTheDocument();
      expect(todoElement).toHaveClass('line-through');
    });
  });

  // Additional tests can be added for different scenarios
});
