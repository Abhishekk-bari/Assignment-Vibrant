import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Grid from './Grid';

describe('Grid Component', () => {
    test('should render grid with correct number of cells', () => {
        const { getAllByRole } = render(<Grid />);
        const cells = getAllByRole('textbox');
        expect(cells.length).toBe(500 * 20); // 500 rows * 20 columns
    });

    test('should update cell value on input change', () => {
        const { getAllByRole } = render(<Grid />);
        const firstCell = getAllByRole('textbox')[0];

        fireEvent.change(firstCell, { target: { value: 'Test' } });
        expect(firstCell.value).toBe('Test');
    });

    test('should change text alignment in cell', () => {
        const { getAllByRole, getAllByText } = render(<Grid />);
        const firstCell = getAllByRole('textbox')[0];

        fireEvent.click(getAllByText('AiOutlineAlignCenter')[0]);
        expect(firstCell).toHaveStyle('text-align: center');
    });

    test('should undo and redo changes', () => {
        const { getAllByRole } = render(<Grid />);
        const firstCell = getAllByRole('textbox')[0];

        // Initial change
        fireEvent.change(firstCell, { target: { value: 'Test' } });
        expect(firstCell.value).toBe('Test');

        // Trigger undo
        fireEvent.keyDown(document, { key: 'z', ctrlKey: true });
        expect(firstCell.value).toBe('');

        // Trigger redo
        fireEvent.keyDown(document, { key: 'y', ctrlKey: true });
        expect(firstCell.value).toBe('Test');
    });
});
