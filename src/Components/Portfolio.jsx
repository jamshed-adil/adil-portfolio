import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Github, ExternalLink, Code, Database, Server, Palette, Star, Calendar, Award, User, Briefcase, GraduationCap, FolderOpen, Menu, X } from 'lucide-react';

const Portfolio = () => {
    const [activeSection, setActiveSection] = useState('hero');
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isLoaded, setIsLoaded] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        setIsLoaded(true);
        const handleMouseMove = (e) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    const skills = {
        frontend: ['HTML', 'CSS', 'Tailwind CSS', 'Bootstrap', 'jQuery', 'JavaScript', 'React', 'Redux Toolkit', 'TypeScript', 'Next.js'],
        backend: ['Node.js', 'Express', 'Laravel'],
        database: ['MySQL', 'MongoDB'],
        tools: ['Git', 'GitHub']
    };

    const projects = [
        {
            title: "E-Learning Platform",
            subtitle: "Qomrah360",
            description: "A full-stack professional courses platform with seamless user experiences and efficient course enrollment.",
            tech: ["Next.js", "Node.js", "MongoDB", "Tailwind CSS"],
            link: "https://qomrah360.vercel.app/",
            color: "from-indigo-600 via-purple-600 to-pink-500"
        },
        {
            title: "Project Management",
            subtitle: "UXPM",
            description: "Comprehensive project management application with real-time collaboration and task tracking.",
            tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
            link: "#",
            color: "from-emerald-500 via-teal-500 to-cyan-500"
        },
        {
            title: "Digital Business Card",
            subtitle: "Spartan Nexus",
            description: "Community platform with subscription system and QR code integration for partner discounts.",
            tech: ["Laravel", "MySQL", "Bootstrap", "jQuery"],
            link: "https://spartannexus.net/",
            color: "from-amber-500 via-orange-500 to-red-500"
        },
        {
            title: "E-Commerce Platform",
            subtitle: "Bluemax Water Solutions",
            description: "Robust e-commerce website with dynamic frontend and efficient data handling.",
            tech: ["Laravel", "MySQL", "jQuery"],
            link: "https://bluemaxinfo.com/",
            color: "from-sky-500 via-blue-500 to-indigo-500"
        },
        {
            title: "Healthcare Platform",
            subtitle: "MediHub Healthcare",
            description: "Comprehensive healthcare platform offering consultation, lab services, and wellness programs.",
            tech: ["React.js", "Node.js", "Express.js", "MongoDB"],
            link: "https://medihub.healthcare/home",
            color: "from-rose-500 via-pink-500 to-fuchsia-500"
        }
    ];

    const navItems = [
        { icon: User, label: "About", sectionId: "hero" },
        { icon: Code, label: "Skills", sectionId: "skills" },
        { icon: FolderOpen, label: "Projects", sectionId: "projects" },
        { icon: Briefcase, label: "Experience", sectionId: "experience" },
        { icon: GraduationCap, label: "Education", sectionId: "education" }
    ];

    const NavItem = ({ icon: Icon, label, sectionId, mobile = false }) => (
        <button
            onClick={() => {
                setActiveSection(sectionId);
                if (mobile) setIsMobileMenuOpen(false);
            }}
            className={`flex items-center space-x-3 px-5 py-3 rounded-2xl transition-all duration-500 ease-out transform ${activeSection === sectionId
                    ? 'bg-white/15 text-white shadow-xl shadow-purple-500/20 scale-105 border border-white/20'
                    : 'text-white/70 hover:text-white hover:bg-white/8 hover:scale-102 border border-transparent hover:border-white/10'
                } ${mobile ? 'w-full justify-start' : ''}`}
        >
            <Icon size={20} className="transition-transform duration-300" />
            <span className="font-semibold text-sm">{label}</span>
        </button>
    );

    const SkillCard = ({ title, skills, icon: Icon, color }) => (
        <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 hover:bg-white/8 hover:border-white/20 transition-all duration-500 group hover:scale-[1.02] hover:shadow-2xl hover:shadow-purple-500/10">
            <div className="flex items-center space-x-4 mb-6">
                <div className={`p-3 rounded-2xl bg-gradient-to-br from-${color}/20 to-${color}/40 border border-${color}/30`}>
                    <Icon size={28} className={`text-${color}`} />
                </div>
                <h3 className="text-2xl font-bold text-white group-hover:text-white/90 transition-colors duration-300">{title}</h3>
            </div>
            <div className="flex flex-wrap gap-3">
                {skills.map((skill, index) => (
                    <span
                        key={index}
                        className="px-4 py-2 bg-white/8 backdrop-blur-sm rounded-xl text-sm text-white/90 border border-white/15 hover:bg-white/15 hover:border-white/30 hover:scale-105 transition-all duration-300 cursor-default"
                    >
                        {skill}
                    </span>
                ))}
            </div>
        </div>
    );

    const ProjectCard = ({ project, index }) => (
        <div
            className={`group cursor-pointer transition-all duration-700 ease-out hover:scale-105 ${isLoaded ? 'animate-fade-in-up' : 'opacity-0 translate-y-10'
                }`}
            style={{ animationDelay: `${index * 0.15}s` }}
        >
            <div className={`bg-gradient-to-br ${project.color} rounded-3xl p-[1px] shadow-lg hover:shadow-2xl transition-all duration-500`}>
                <div className="bg-gray-900/90 backdrop-blur-xl rounded-3xl p-8 h-full hover:bg-gray-900/80 transition-all duration-500">
                    <div className="flex justify-between items-start mb-6">
                        <div>
                            <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-white/90 transition-colors duration-300">{project.title}</h3>
                            <p className="text-white/60 text-base font-medium">{project.subtitle}</p>
                        </div>
                        <a
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white/10 backdrop-blur-sm rounded-2xl hover:bg-white/20 hover:scale-110 transition-all duration-300 border border-white/20 hover:border-white/40"
                            onClick={(e) => e.stopPropagation()}
                        >
                            <ExternalLink size={20} className="text-white" />
                        </a>
                    </div>
                    <p className="text-white/75 mb-6 text-base leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-3">
                        {project.tech.map((tech, techIndex) => (
                            <span
                                key={techIndex}
                                className="px-4 py-2 bg-white/15 backdrop-blur-sm rounded-xl text-sm text-white/90 border border-white/25 hover:bg-white/25 transition-all duration-300"
                            >
                                {tech}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );

    return (
        <div className="pb-5 min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-violet-900 text-white overflow-hidden relative">
            {/* Animated Background Elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }}></div>
            </div>

            {/* Mouse Follower - Hidden on mobile */}
            <div
                className="fixed w-4 h-4 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full pointer-events-none z-50 transition-all duration-200 ease-out opacity-60 blur-sm hidden md:block"
                style={{
                    left: mousePosition.x - 8,
                    top: mousePosition.y - 8,
                }}
            ></div>
            <div
                className="fixed w-2 h-2 bg-white rounded-full pointer-events-none z-50 transition-all duration-100 ease-out hidden md:block"
                style={{
                    left: mousePosition.x - 4,
                    top: mousePosition.y - 4,
                }}
            ></div>

            {/* Desktop Navigation */}
            <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-40 bg-black/30 backdrop-blur-xl rounded-3xl p-3 border border-white/15 shadow-2xl shadow-purple-500/10 hidden lg:block">
                <div className="flex space-x-2">
                    {navItems.map((item) => (
                        <NavItem key={item.sectionId} {...item} />
                    ))}
                </div>
            </nav>

            {/* Mobile Navigation Toggle */}
            <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="fixed top-6 right-6 z-50 lg:hidden bg-black/30 backdrop-blur-xl rounded-2xl p-3 border border-white/15 shadow-2xl shadow-purple-500/10 hover:bg-black/40 transition-all duration-300"
            >
                {isMobileMenuOpen ? (
                    <X size={24} className="text-white" />
                ) : (
                    <Menu size={24} className="text-white" />
                )}
            </button>

            {/* Mobile Navigation Menu */}
            <div className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}>
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={() => setIsMobileMenuOpen(false)}></div>
                <div className={`absolute top-0 right-0 h-full w-80 max-w-[80vw] bg-gray-900/95 backdrop-blur-xl border-l border-white/10 transform transition-transform duration-500 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                    <div className="p-6 pt-20">
                        <div className="space-y-3">
                            {navItems.map((item) => (
                                <NavItem key={item.sectionId} {...item} mobile={true} />
                            ))}
                        </div>
                        
                        {/* Mobile Contact Info */}
                        <div className="mt-8 pt-8 border-t border-white/10 space-y-4">
                            <h3 className="text-white font-semibold mb-4">Contact</h3>
                            <a
                                href="mailto:sadilahmed0786@gmail.com"
                                className="flex items-center space-x-3 text-white/70 hover:text-white transition-colors duration-300"
                            >
                                <Mail size={18} />
                                <span className="text-sm">Email</span>
                            </a>
                            <a
                                href="tel:+919059628529"
                                className="flex items-center space-x-3 text-white/70 hover:text-white transition-colors duration-300"
                            >
                                <Phone size={18} />
                                <span className="text-sm">Phone</span>
                            </a>
                            <div className="flex items-center space-x-3 text-white/70">
                                <MapPin size={18} />
                                <span className="text-sm">Kurnool, AP</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="relative z-10 pt-20 md:mt-5 lg:pt-20">
                {/* Hero Section */}
                {activeSection === 'hero' && (
                    <section className={`min-h-screen flex items-center justify-center px-6 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
                        <div className="max-w-4xl mx-auto text-center">
                            <div className="mb-8">
                                <div className="w-24 h-24 md:w-32 md:h-32 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full mx-auto mb-6 flex items-center justify-center text-2xl md:text-4xl font-bold shadow-2xl">
                                    SAA
                                </div>
                                <h1 className="text-4xl md:text-6xl lg:text-8xl font-bold mb-4 bg-gradient-to-r from-white via-blue-200 to-purple-200 bg-clip-text text-transparent">
                                    Shaik Adil Ahmed
                                </h1>
                                <p className="text-xl md:text-2xl lg:text-3xl text-white/80 mb-6">MERN Stack Developer</p>
                                <p className="text-base md:text-lg text-white/60 max-w-2xl mx-auto leading-relaxed">
                                    Crafting secure, scalable, and high-performance web applications with 2+ years of expertise in the MERN stack ecosystem.
                                </p>
                            </div>

                            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 md:gap-6 mb-12">
                                <a
                                    href="mailto:sadilahmed0786@gmail.com"
                                    className="flex items-center justify-center space-x-3 bg-white/8 backdrop-blur-xl rounded-2xl px-4 md:px-6 py-3 md:py-4 border border-white/20 hover:bg-white/15 hover:border-white/30 hover:scale-105 transition-all duration-500 group"
                                >
                                    <Mail size={20} className="group-hover:scale-110 transition-transform duration-300" />
                                    <span className="font-medium text-sm md:text-base">sadilahmed0786@gmail.com</span>
                                </a>
                                <a
                                    href="tel:+919059628529"
                                    className="flex items-center justify-center space-x-3 bg-white/8 backdrop-blur-xl rounded-2xl px-4 md:px-6 py-3 md:py-4 border border-white/20 hover:bg-white/15 hover:border-white/30 hover:scale-105 transition-all duration-500 group"
                                >
                                    <Phone size={20} className="group-hover:scale-110 transition-transform duration-300" />
                                    <span className="font-medium text-sm md:text-base">+91 9059628529</span>
                                </a>
                                <div className="flex items-center justify-center space-x-3 bg-white/8 backdrop-blur-xl rounded-2xl px-4 md:px-6 py-3 md:py-4 border border-white/20">
                                    <MapPin size={20} />
                                    <span className="font-medium text-sm md:text-base">Kurnool, Andhra Pradesh</span>
                                </div>
                            </div>

                            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 md:gap-6">
                                <span className="px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-2xl text-xs md:text-sm font-semibold hover:scale-105 transition-transform duration-300">Problem Solving</span>
                                <span className="px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500 rounded-2xl text-xs md:text-sm font-semibold hover:scale-105 transition-transform duration-300">Analytical Thinking</span>
                                <span className="px-4 md:px-6 py-2 md:py-3 bg-gradient-to-r from-amber-500 via-orange-500 to-red-500 rounded-2xl text-xs md:text-sm font-semibold hover:scale-105 transition-transform duration-300">Time Management</span>
                            </div>
                        </div>
                    </section>
                )}

                {/* Skills Section */}
                {activeSection === 'skills' && (
                    <section className={`min-h-screen py-20 px-6 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
                        <div className="max-w-6xl mx-auto">
                            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent">
                                Technical Skills
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                                <SkillCard
                                    title="Frontend Development"
                                    skills={skills.frontend}
                                    icon={Palette}
                                    color="blue-400"
                                />
                                <SkillCard
                                    title="Backend Development"
                                    skills={skills.backend}
                                    icon={Server}
                                    color="green-400"
                                />
                                <SkillCard
                                    title="Database Management"
                                    skills={skills.database}
                                    icon={Database}
                                    color="purple-400"
                                />
                                <SkillCard
                                    title="Version Control"
                                    skills={skills.tools}
                                    icon={Code}
                                    color="orange-400"
                                />
                            </div>
                        </div>
                    </section>
                )}

                {/* Projects Section */}
                {activeSection === 'projects' && (
                    <section className={`min-h-screen py-20 px-6 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
                        <div className="max-w-6xl mx-auto">
                            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">
                                Featured Projects
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                                {projects.map((project, index) => (
                                    <ProjectCard key={index} project={project} index={index} />
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* Experience Section */}
                {activeSection === 'experience' && (
                    <section className={`min-h-screen py-20 px-6 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-white to-green-200 bg-clip-text text-transparent">
                                Professional Experience
                            </h2>
                            <div className="bg-white/5 backdrop-blur-md rounded-3xl p-6 md:p-8 border border-white/10">
                                <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-4 mb-6">
                                    <div className="w-12 h-12 md:w-16 md:h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                                        <Briefcase size={20} className="text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl md:text-2xl font-bold text-white">MERN Stack Developer</h3>
                                        <p className="text-white/70">SANVAN Software Limited</p>
                                        <p className="text-white/50 text-sm flex items-center">
                                            <Calendar size={16} className="mr-2" />
                                            Jan 2023 - Present
                                        </p>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    {[
                                        "2+ years expertise in MERN stack development",
                                        "Built secure, scalable web applications",
                                        "Delivered dynamic, responsive user interfaces",
                                        "Developed robust RESTful APIs",
                                        "Optimized MongoDB database structures",
                                        "Enhanced application performance and user experience"
                                    ].map((item, index) => (
                                        <div key={index} className="flex items-start space-x-3">
                                            <Star size={16} className="text-yellow-400 mt-1 flex-shrink-0" />
                                            <span className="text-white/80 text-sm">{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                )}

                {/* Education Section */}
                {activeSection === 'education' && (
                    <section className={`min-h-screen py-20 px-6 ${isLoaded ? 'animate-fade-in' : 'opacity-0'}`}>
                        <div className="max-w-4xl mx-auto">
                            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                                Education
                            </h2>
                            <div className="space-y-6 md:space-y-8">
                                {[
                                    {
                                        degree: "Bachelor of Technology",
                                        institution: "Dr. KV Subba Reddy Institute of Technology",
                                        period: "2018 - 2022",
                                        score: "67%",
                                        color: "from-indigo-500 to-purple-600"
                                    },
                                    {
                                        degree: "Intermediate",
                                        institution: "Sri Sai Yukhta Junior College",
                                        period: "2016 - 2018",
                                        score: "60%",
                                        color: "from-emerald-500 to-teal-600"
                                    },
                                    {
                                        degree: "SSC",
                                        institution: "Govt Boys High School",
                                        period: "2015 - 2016",
                                        score: "53%",
                                        color: "from-amber-500 to-orange-600"
                                    }
                                ].map((edu, index) => (
                                    <div key={index} className={`bg-gradient-to-r ${edu.color} rounded-2xl p-1 shadow-lg hover:shadow-xl transition-shadow`}>
                                        <div className="bg-gray-900/90 backdrop-blur-md rounded-2xl p-4 md:p-6 hover:bg-gray-900 transition-colors">
                                            <div className="flex flex-col md:flex-row items-start md:items-center justify-between mb-4 gap-4">
                                                <div className="flex items-center space-x-4">
                                                    <div className={`w-10 h-10 md:w-12 md:h-12 bg-gradient-to-br ${edu.color} rounded-xl flex items-center justify-center shadow-md flex-shrink-0`}>
                                                        <GraduationCap size={18} className="text-white" />
                                                    </div>
                                                    <div>
                                                        <h3 className="text-lg md:text-xl font-bold text-white">{edu.degree}</h3>
                                                        <p className="text-gray-300 text-sm md:text-base">{edu.institution}</p>
                                                    </div>
                                                </div>
                                                <div className="text-left md:text-right ml-14 md:ml-0">
                                                    <p className="text-white font-semibold text-base md:text-lg">{edu.score}</p>
                                                    <p className="text-gray-400 text-xs md:text-sm">{edu.period}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-12 md:mt-16 text-center">
                                <h3 className="text-xl md:text-2xl font-bold text-white mb-6 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                                    Languages
                                </h3>
                                <div className="flex justify-center flex-wrap gap-3">
                                    {['English', 'Hindi', 'Urdu', 'Telugu'].map((lang, index) => (
                                        <span
                                            key={index}
                                            className="px-4 md:px-6 py-2 md:py-3 bg-gray-800 hover:bg-gray-700 backdrop-blur-md rounded-full border border-gray-700 text-gray-100 hover:text-white transition-colors shadow-sm text-sm md:text-base"
                                        >
                                            {lang}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </section>
                )}
            </div>

            <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes fade-in-up {
          from { opacity: 0; transform: translateY(60px) scale(0.95); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        
        .animate-fade-in {
          animation: fade-in 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
        
        .hover\\:scale-102:hover {
          transform: scale(1.02);
        }
      `}</style>
        </div>
    );
};

export default Portfolio;