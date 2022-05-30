import { useState } from 'react';
import './button.css';
export function Button() {
    const [check, setCircule] = useState(false);

    return (
        <>
            <i
                className={`${
                    check
                        ? 'circule__on icon gentleman__icon fas fa-check'
                        : 'circule__off icon gentleman__icon fas fa-check'
                } `}
                onClick={() => setCircule(!check)}
            ></i>
            <i className="icon gentleman__icon gentleman__icon--delete fas fa-times"></i>
        </>
    );
}
