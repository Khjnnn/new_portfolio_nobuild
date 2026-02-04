import React, { useState } from 'react';
import { motion } from 'framer-motion';
import ProjectModal from './ProjectModal';

const projects = [
    {
        title: 'DingPet',
        description: '펫 서비스 홈페이지',
        tech: ['Spring','Java', 'HTML', 'Oracle', 'AWS'],
        thumbnail: `${process.env.PUBLIC_URL}/images/dingpet.jpg`,
        file: `${process.env.PUBLIC_URL}/projects/project1.md`
    },
    {
        title: '포트폴리오',
        description: '개인 포트폴리오 페이지',
        tech: ['React', 'Node.js', 'tailwind', 'Express', 'github'],
        thumbnail: `${process.env.PUBLIC_URL}/images/project2.jpg`,
        file: `${process.env.PUBLIC_URL}/projects/project2.md`
    },
    {
        title: '티켓 매니저',
        description: '인터파크 티켓 매니저 데스크탑 앱',
        tech: ['JavaScript', 'Chrome Extension', 'REST API', 'HTML/CSS'],
        thumbnail: `${process.env.PUBLIC_URL}/images/project3.jpg`,
        file: `${process.env.PUBLIC_URL}/projects/project3.md`
    }
];

function Projects() {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
        <section id="projects" className="py-20 bg-gray-50">
            <div className="container max-w-6xl mx-auto px-4">
                <motion.h2 
                    className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Projects
                </motion.h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={index}
                            className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            whileHover={{ y: -10 }}
                            onClick={() => setSelectedProject(project)}
                        >
                            <div className="h-48 bg-gray-200 relative overflow-hidden">
                                <img 
                                    src={project.thumbnail} 
                                    alt={project.title}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold mb-2 text-gray-800">{project.title}</h3>
                                <p className="text-gray-600 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((tech, i) => (
                                        <span 
                                            key={i}
                                            className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
            <ProjectModal 
                project={selectedProject} 
                isOpen={selectedProject !== null} 
                onClose={() => setSelectedProject(null)} 
            />
        </section>
    );
}

export default Projects;