// Modal.js
import { motion, AnimatePresence } from 'framer-motion';
import { useEffect } from 'react';

function Modal({ 
  children, 
  show = false, 
  maxWidth = '2xl', 
  closeable = true, 
  title = '', 
  onClose = () => {} 
}) {
  // Close the modal on pressing 'Esc'
  useEffect(() => {
    if (!closeable) return;
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleEscape);
    return () => window.removeEventListener('keydown', handleEscape);
  }, [closeable, onClose]);

  return (
    <AnimatePresence>
      {show && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/50 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeable ? onClose : undefined}
          />

          {/* Modal Content */}
          <motion.div
            className="fixed inset-0 flex items-center justify-center p-4"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
          >
            <div
              className={`bg-white rounded-lg shadow-lg max-w-${maxWidth} w-full`}
              onClick={(e) => e.stopPropagation()} // Prevent closing on content click
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-gray-100">
                <h2 className="text-lg font-semibold">{title}</h2>
                {closeable && (
                  <button
                    className="text-gray-500 font-medium text-2xl hover:text-red-800"
                    onClick={onClose}
                  >
                    <i className='bi bi-x'></i>
                  </button>
                )}
              </div>

              {/* Modal Body */}
              <div className="p-6">{children}</div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

export default Modal;
