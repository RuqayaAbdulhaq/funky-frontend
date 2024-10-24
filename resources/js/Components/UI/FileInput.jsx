import { forwardRef, useEffect, useRef, useState } from "react";

export default function FileInput({
    className = "",
    isFocused = false,
    label,
    onChange,
    ...props
}) {
    const [fileName, setFileName] = useState(null);
    const inputRef = useRef(null);

    const handleButtonClick = () => {
        inputRef.current?.click();
    };

    const handleFileChange = (event) => {
        const file = event.target.files?.[0] || null;
        setFileName(file ? file.name : null);
        onChange && onChange(file);
    };

    return (
        <div className="flex flex-col items-center gap-2">
            <button
                type="button"
                onClick={handleButtonClick}
                className="px-4 py-2 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all"
            >
                {label}
            </button>

            <input
                type="file"
                ref={inputRef}
                onChange={handleFileChange}
                className="hidden"
                name={props.name}
            />

            {fileName && (
                <p className="text-sm text-gray-600 mt-2">
                    Selected:{" "}
                    <span className="font-medium text-gray-800">
                        {fileName}
                    </span>
                </p>
            )}
        </div>
    );
};
