import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Header from './Header';

describe('Header Component', () => {
    test('should toggle File dropdown visibility', () => {
        const { getByText, queryByText } = render(<Header />);
        const fileButton = getByText('File');

        fireEvent.click(fileButton);
        expect(queryByText('New')).toBeVisible();

        fireEvent.click(fileButton);
        expect(queryByText('New')).not.toBeVisible();
    });

    test('should toggle Edit dropdown visibility', () => {
        const { getByText, queryByText } = render(<Header />);
        const editButton = getByText('Edit');

        fireEvent.click(editButton);
        expect(queryByText('Cut')).toBeVisible();

        fireEvent.click(editButton);
        expect(queryByText('Cut')).not.toBeVisible();
    });

    test('should render toolbar buttons correctly', () => {
        const { getByRole } = render(<Header />);
        expect(getByRole('button', { name: /undo/i })).toBeInTheDocument();
        expect(getByRole('button', { name: /redo/i })).toBeInTheDocument();
    });
});
