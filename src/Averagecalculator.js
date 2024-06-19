import React, { useState } from 'react';
import './index.css';

const AverageCalculator = () => {
    const [numbers, setNumbers] = useState('');
    const [average, setAverage] = useState(null);
    const [error, setError] = useState(null);

    const handleInputChange = (e) => {
        setNumbers(e.target.value);
        setError(null);
    };

    const calculateAverage = () => {
        const numArray = numbers
            .split(',')
            .map(num => num.trim())
            .filter(num => num !== '')
            .map(Number);

        if (numArray.some(isNaN)) {
            setError('Please enter only valid numbers separated by commas.');
            setAverage(null);
            return;
        }

        if (numArray.length === 0) {
            setError('Please enter some numbers.');
            setAverage(null);
            return;
        }

        const sum = numArray.reduce((acc, num) => acc + num, 0);
        const avg = sum / numArray.length;
        setAverage(avg.toFixed(2));
    };

    return (
        <div className="calculator-container">
            <input
                type="text"
                placeholder="Enter numbers (comma-separated)"
                value={numbers}
                onChange={handleInputChange}
                className="input-box"
            />
            <button onClick={calculateAverage} className="calculate-button">Calculate Average</button>
            {average !== null && <p className="result">Average: {average}</p>}
            {error && <p className="error">{error}</p>}
        </div>
    );
};

export default AverageCalculator;
