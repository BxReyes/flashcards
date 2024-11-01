import { useState } from 'react';

export interface Field {
    type: string;
    value: string;
    onChange: (value: string) => void;
}

export const useField = (type: string): Field => {
    const [value, setValue] = useState<string>('');

    const onChange = (value: string) => {
        setValue(value);
    }

    return {
        type,
        value,
        onChange
    }
}
