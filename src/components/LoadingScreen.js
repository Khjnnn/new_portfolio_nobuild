import React from 'react';
import { motion } from 'framer-motion';

function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-white z-50">
      <div className="flex flex-col items-center justify-center h-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <div className="relative w-24 h-24 mb-8">
            {/* 로딩 애니메이션 */}
            <div className="absolute inset-0">
              <div className="w-24 h-24 border-4 border-blue-200 rounded-full"></div>
              <div className="w-24 h-24 border-4 border-blue-500 border-t-transparent rounded-full animate-spin absolute inset-0"></div>
            </div>
          </div>
          
          {/* 로딩 텍스트 */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="space-y-2"
          >
            {/* <h2 className="text-2xl font-bold text-gray-800">
              
            </h2> */}
            <p className="text-gray-500">
              Loading...
            </p>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default LoadingScreen; 