import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';

const Counter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        setCount(0);
    }, []);

    return (
        <>
            <h2 style={{ color: 'red' }}>Counter</h2>
            <div>
                <div>
                    <button
                        aria-label="+"
                        onClick={() => {
                            setCount(count + 1);
                        }}
                    >
                        +
                    </button>
                    <span style={{ color: 'blue' }}>{count}</span>
                    <button
                        aria-label="-"
                        onClick={() => {
                            setCount(count - 1);
                        }}
                    >
                        -
                    </button>
                </div>
            </div>
        </>
    );
};
export default Counter;
