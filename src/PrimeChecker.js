import React, { useState } from 'react';
import './index.css'; // Reuse the same CSS for simplicity

const PrimeChecker = () => {
    const [number, setNumber] = useState('');
    const [isPrime, setIsPrime] = useState(null);
    const [error, setError] = useState(null);

    const handleInputChange = (e) => {
        setNumber(e.target.value);
        setError(null);
    };

    const checkPrime = () => {
        const num = parseInt(number, 10);

        if (isNaN(num) || num <= 1) {
            setError('Please enter a valid number greater than 1.');
            setIsPrime(null);
            return;
        }

        let prime = true;
        for (let i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                prime = false;
                break;
            }
        }

        setIsPrime(prime);
    };

    return (
        <div className="calculator-container">
            <input
                type="text"
                placeholder="Enter a number"
                value={number}
                onChange={handleInputChange}
                className="input-box"
            />
            <button onClick={checkPrime} className="calculate-button">Check Prime</button>
            {isPrime !== null && (
                <p className="result">
                    {number} is {isPrime ? 'a Prime' : 'not a Prime'} number.
                </p>
            )}
            {error && <p className="error">{error}</p>}
        </div>
    );
};

export default PrimeChecker;
