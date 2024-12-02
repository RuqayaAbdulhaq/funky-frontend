import { motion } from "framer-motion";

export default function Pagination({ pagesCount, currentPage, onChange }) {
    const handlePageClick = (page) => {
        if (page !== currentPage) {
            onChange(page);
        }
    };

    const renderPages = () => {
        const pages = [];
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(
                <motion.button
                    key={i}
                    onClick={() => handlePageClick(i)}
                    className={`mx-1 py-2 px-3 rounded-md border shadow-sm ${
                        currentPage === i
                            ? "font-medium text-primary border-primary"
                            : "text-gray-800 border-gray-200"
                    }`}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                >
                    {i}
                </motion.button>
            );
        }
        return pages;
    };

    return (
        <div className="flex items-center">
            <motion.button
                onClick={() => handlePageClick(currentPage - 1)}
                disabled={currentPage === 1}
                className="px-3 py-2 border border-gray-200 shadow-sm rounded-md disabled:opacity-50"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <i className="bi bi-chevron-left"></i>
            </motion.button>

            {renderPages()}

            <motion.button
                onClick={() => handlePageClick(currentPage + 1)}
                disabled={currentPage === pagesCount}
                className="px-3 py-2 border border-gray-200 shadow-sm rounded-md disabled:opacity-50"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
            >
                <i className="bi bi-chevron-right"></i>
            </motion.button>
        </div>
    );
}
