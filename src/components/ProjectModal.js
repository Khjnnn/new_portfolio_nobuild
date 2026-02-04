import React, { useState, useEffect } from 'react';
import ReactMarkdown from 'react-markdown';

function ProjectModal({ project, isOpen, onClose }) {
    const [content, setContent] = useState('');

    useEffect(() => {
        if (project?.file) {
            fetch(project.file)
                .then(res => res.text())
                .then(text => setContent(text));
        }
    }, [project]);

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4">
            <div className="bg-white rounded-lg w-full max-w-4xl max-h-[80vh] overflow-hidden relative">
                {/* 닫기 버튼 */}
                <button 
                    onClick={onClose}
                    className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
                >
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>

                {/* 마크다운 내용 */}
                <div className="p-8 overflow-y-auto max-h-[80vh] markdown-content">
                    <ReactMarkdown>{content}</ReactMarkdown>
                </div>
            </div>
        </div>
    );
}

export default ProjectModal;