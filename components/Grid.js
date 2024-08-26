import React, { useState, useImperativeHandle, forwardRef, memo } from 'react';
import { motion } from 'framer-motion';
import { AiOutlineAlignLeft, AiOutlineAlignCenter, AiOutlineAlignRight } from 'react-icons/ai';

// Memoized Cell Component
const Cell = memo(({ rowIndex, colIndex, cell, handleInputChange, handleStyleChange }) => (
    <td className="border p-2 hover:bg-gray-100"> {/* Added hover:bg-gray-100 here */}
        <input
            type="text"
            className="w-full h-full border-none outline-none p-1"
            style={{ textAlign: cell.align, fontSize: cell.fontSize }}
            value={cell.value}
            onChange={(e) => handleInputChange(rowIndex, colIndex, e.target.value)}
        />
        <div className="flex justify-end space-x-2 mt-1">
            <button
                onClick={() => handleStyleChange(rowIndex, colIndex, { align: 'left' })}
                className="text-gray-500 hover:text-gray-700"
            >
                <AiOutlineAlignLeft size={11} />
            </button>
            <button
                onClick={() => handleStyleChange(rowIndex, colIndex, { align: 'center' })}
                className="text-gray-500 hover:text-gray-700"
            >
                <AiOutlineAlignCenter size={11} />
            </button>
            <button
                onClick={() => handleStyleChange(rowIndex, colIndex, { align: 'right' })}
                className="text-gray-500 hover:text-gray-700"
            >
                <AiOutlineAlignRight size={11} />
            </button>
        </div>
    </td>
));

// Grid Component
const Grid = forwardRef((props, ref) => {
    const createCellArray = (rows, cols) => {
        return Array.from({ length: rows }, () =>
            Array.from({ length: cols }, () => ({
                align: 'left',
                fontSize: '16px',
                value: '',
            }))
        );
    };

    const [cellStyles, setCellStyles] = useState(createCellArray(300, 20));
    const [history, setHistory] = useState([createCellArray(300, 20)]);
    const [currentStep, setCurrentStep] = useState(0);

    useImperativeHandle(ref, () => ({
        undo() {
            if (currentStep > 0) {
                setCurrentStep(currentStep - 1);
                setCellStyles(history[currentStep - 1]);
            }
        },
        redo() {
            if (currentStep < history.length - 1) {
                setCurrentStep(currentStep + 1);
                setCellStyles(history[currentStep + 1]);
            }
        }
    }));

    const updateHistory = (newStyles) => {
        const newHistory = [...history.slice(0, currentStep + 1), newStyles];
        setHistory(newHistory);
        setCurrentStep(newHistory.length - 1);
        setCellStyles(newStyles);
    };

    const handleStyleChange = (rowIndex, colIndex, style) => {
        const newStyles = JSON.parse(JSON.stringify(cellStyles));
        newStyles[rowIndex][colIndex] = { ...newStyles[rowIndex][colIndex], ...style };
        updateHistory(newStyles);
    };

    const handleInputChange = (rowIndex, colIndex, value) => {
        const newStyles = JSON.parse(JSON.stringify(cellStyles));
        newStyles[rowIndex][colIndex].value = value;
        updateHistory(newStyles);
    };

    return (
        <div className="overflow-auto h-full border p-4">
            <table className="w-full border-collapse table-fixed mt-4">
                <thead>
                    <tr>
                        <th className="w-12 border bg-gray-100"></th>
                        {[...Array(20)].map((_, i) => (
                            <th key={i} className="border bg-gray-200 text-center">{String.fromCharCode(65 + i)}</th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {cellStyles.map((row, rowIndex) => (
                        <motion.tr
                            key={rowIndex}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <td className="border bg-gray-100 text-center">{rowIndex + 1}</td>
                            {row.map((cell, colIndex) => (
                                <Cell
                                    key={colIndex}
                                    rowIndex={rowIndex}
                                    colIndex={colIndex}
                                    cell={cell}
                                    handleInputChange={handleInputChange}
                                    handleStyleChange={handleStyleChange}
                                />
                            ))}
                        </motion.tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
});

export default Grid;
