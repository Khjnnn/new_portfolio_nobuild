import React from 'react';
import { motion } from 'framer-motion';

const Experience = () => {
    const experiences = [
        {
            company: "더존비즈온",
            period: "2022.03 - 현재",
            position: "ERP사업본부 FI개발 2Cell",
            description: "ERP10 웹서비스 개발",
            projects: [
                {
                    name: "ERP10 구축 프로젝트",
                    period: "2022.03 - 현재",
                    details: [
                        "Spring 및 MSA 기반 ERP 구축 개발",
                        "RESTful API 설계 및 구현",
                        "회계, 인사, SCM 등 모듈 개발",
                        "타 그룹웨어 연동 및 전자결재 연동 개발"
                    ],
                    skills: ["Spring", "Spring Boot", "JavaScript", "Oracle", "Jenkins", "Gitlab", "Redis", "Jeus", "Nginx", "MyBatis"]
                }
            ]
        },
        {
            company: "시큐어비즈 / 이리오넷(주)",
            period: "2020.07 - 2022.02",
            position: "개발팀",
            description: "물류 시스템 SI 프로젝트",
            projects: [
                {
                    name: "통합 물류 통합 관리 시스템 고도화",
                    period: "2021.05 - 2022.02",
                    details: [
                        "Spring Framework 기반 물류 시스템 개발",
                        "입고/출고/재고 관리 시스템 구축",
                        "WMS, OMS 개발",
                        "관세청 유니패스 인터페이스 연동 개발"
                    ],
                    skills: ["Spring", "Java", "Nexacro17" ,"MS SQL", "Git", "Jenkins"]
                },
                {
                    name: "통합 물류 통합 관리 시스템 고도화",
                    period: "2020.07 - 2021.04",
                    details: [
                        "WMS, OMS, TMS 개발",
                        "배송 기사 앱 연동 API 개발",
                        "Nexacro14 > 17 마이그레이션 및 컨버전 개발",
                        "Nexacro17 모바일 개발"                        
                    ],
                    skills: ["Spring", "Java", "Nexacro17" ,"Oracle", "SVN", "Jenkins"]
                }
            ]
        }
    ];

    return (
        <section id="career" className="py-32 bg-gray-50">
            <div className="container max-w-7xl mx-auto px-4">
                <motion.h2 
                    className="text-5xl font-bold text-center mb-8 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    Career
                </motion.h2>
                <motion.p
                    className="text-xl text-gray-600 text-center mb-16 max-w-3xl mx-auto"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2 }}
                >
                    ERP 및 물류 시스템 개발 경험을 바탕으로 안정적이고 효율적인 서비스를 제공하겠습니다.
                </motion.p>
                <div className="space-y-12">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            className="bg-white rounded-2xl p-8 shadow-lg"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="flex flex-col md:flex-row justify-between mb-6">
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-800">{exp.company}</h3>
                                    <p className="text-lg text-gray-600">{exp.position}</p>
                                </div>
                                <p className="text-lg text-gray-500">{exp.period}</p>
                            </div>
                            <p className="text-gray-600 mb-6">{exp.description}</p>
                            <div className="space-y-8">
                                {exp.projects.map((project, pIndex) => (
                                    <div key={pIndex} className="border-l-4 border-blue-500 pl-6">
                                        <h4 className="text-xl font-semibold text-gray-800 mb-2">{project.name}</h4>
                                        <p className="text-gray-500 mb-3">{project.period}</p>
                                        <ul className="list-disc list-inside space-y-2 mb-4">
                                            {project.details.map((detail, dIndex) => (
                                                <li key={dIndex} className="text-gray-600">{detail}</li>
                                            ))}
                                        </ul>
                                        <div className="flex flex-wrap gap-2">
                                            {project.skills.map((skill, sIndex) => (
                                                <span 
                                                    key={sIndex}
                                                    className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm"
                                                >
                                                    {skill}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experience;