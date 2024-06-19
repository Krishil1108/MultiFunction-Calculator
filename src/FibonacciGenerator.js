import React, { useState } from 'react';
import './index.css'; // Reuse the same CSS for simplicity

const FibonacciGenerator = () => {
    const [count, setCount] = useState('');
    const [sequence, setSequence] = useState([]);
    const [error, setError] = useState(null);

    const handleInputChange = (e) => {
        setCount(e.target.value);
        setError(null);
    };

    const generateFibonacci = () => {
        const num = parseInt(count, 10);

        if (isNaN(num) || num <= 0) {
            setError('Please enter a valid positive number.');
            setSequence([]);
            return;
        }

        const fibSequence = [0, 1];
        for (let i = 2; i < num; i++) {
            fibSequence[i] = fibSequence[i - 1] + fibSequence[i - 2];
        }

        setSequence(fibSequence.slice(0, num));
    };

    return (
        <div className="calculator-container">
            <input
                type="text"
                placeholder="Enter the number of terms"
                value={count}
                onChange={handleInputChange}
                className="input-box"
            />
            <button onClick={generateFibonacci} className="calculate-button">Generate Fibonacci</button>
            {sequence.length > 0 && (
                <p className="result">Fibonacci Sequence: {sequence.join(', ')}</p>
            )}
            {error && <p className="error">{error}</p>}
        </div>
    );
};

export default FibonacciGenerator;
