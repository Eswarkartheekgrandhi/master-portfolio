import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import emailjs from "emailjs-com";
import { Mail, Calendar } from 'lucide-react';
import heroImage from '../assets/react.svg';
import pythonImage from '../assets/python.png';
import javaImage from '../assets/java.png';
import flaskImage from '../assets/flask.png';
import jsImage from '../assets/js.png';
import htmlImage from '../assets/html.png';
import postgresImage from '../assets/postgres.png';
import postmanImage from '../assets/postman.png';
import mongodbImage from '../assets/mongodb.png';
import cssImage from '../assets/css.png';
import picture from '../assets/pic1.jpg';
import omniImage from '../assets/omni.png';
import figmaImage from '../assets/figma.svg';
import webdImage from '../assets/webd.png';
import iiithImage from '../assets/iiith.jpeg';
import vsImage from '../assets/vs.png';
import dockerImage from '../assets/docker.webp';
import nodejsImage from '../assets/nodejs.png';
import {BriefcaseBusiness, ArrowRight, Link2, Download } from 'lucide-react';
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaGithub } from 'react-icons/fa';
import { WhatsApp } from '@mui/icons-material';

export default function Hero() {
  const [timeIST, setTimeIST] = useState('');
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    emailjs.send(
      'service_qxvzl04',    // Service ID from EmailJS
      'template_qgie9ep',   // Template ID from EmailJS
      formData,
      'nf4A5_sF776IH07a2'        // public api key from EmailJS
    )
    .then((response) => {
      console.log('SUCCESS!', response);
      alert('Message sent successfully!');
      setFormData({ name: "", email: "", message: "" }); // Clear form after successful submission
    })
    .catch((err) => {
      console.error('FAILED...', err);
      alert('Something went wrong, please try again.');
    });
  };

  useEffect(() => {
    const updateIST = () => {
      const now = new Date();
      const istOffset = 5.5 * 60;
      const utc = now.getTime() + now.getTimezoneOffset() * 60000;
      const istTime = new Date(utc + istOffset * 60000);
      const hours = istTime.getHours().toString().padStart(2, '0');
      const minutes = istTime.getMinutes().toString().padStart(2, '0');
      const seconds = istTime.getSeconds().toString().padStart(2, '0');
      setTimeIST(`${hours}:${minutes}:${seconds}`);
    };

    updateIST();
    const interval = setInterval(updateIST, 1000);
    return () => clearInterval(interval);
  }, []);

  const experiences = [
    {
      company: 'Product Labs @ IIITH',
      role: 'Project technical personnel  (L3) , Research Engineer',
      duration: 'Jul 2024 - Oct 2024',
      description:
        'Led the design and development of full-stack web applications using ReactJS, Flask, and PostgreSQL. Conducted research and developed prototypes to integrate innovative solutions. Engaged with clients for requirement gathering, feedback integration, and issue resolution while optimizing performance and exploring emerging technologies to enhance functionality.',
      companyType: 'Research Lab',
      companyLink: 'https://www.iiit.ac.in/', 
      logo: iiithImage,
    },
    {
      company: 'Product Labs @ IIITH',
      role: 'Project Associate',
      duration: 'Jul 2023 - Jun 2024',
      description:
        'Collaborated with clients to gather requirements and feedback, ensuring project alignment. Worked with cross-functional teams to support development, testing, and delivery of web applications while maintaining project documentation.',
      companyType: 'Research Lab',
      companyLink: 'https://www.iiit.ac.in/', 
      logo: iiithImage,
    },
  ];

const stacks = [
  { name: 'Python', type: 'Programming Language', icon: pythonImage, link: 'https://www.python.org/' },
  { name: 'Java', type: 'Programming Language', icon: javaImage, link: 'https://www.java.com/' },
  { name: 'Flask', type: 'Web Framework (Python)', icon: flaskImage, link: 'https://flask.palletsprojects.com/' },
  { name: 'HTML', type: 'Markup Language', icon: htmlImage, link: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
  { name: 'CSS', type: 'Style Sheet Language', icon: cssImage, link: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
  { name: 'JavaScript', type: 'Programming Language', icon: jsImage, link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
  { name: 'PostgreSQL', type: 'Relational Database', icon: postgresImage, link: 'https://www.postgresql.org/' },
  { name: 'MongoDB', type: 'NoSQL Database', icon: mongodbImage, link: 'https://www.mongodb.com/' },
  { name: 'Postman', type: 'API Testing Tool', icon: postmanImage, link: 'https://www.postman.com/' },
  { name: 'VSCode', type: 'Code Editor', icon: vsImage, link: 'https://code.visualstudio.com/' },
  { name: 'Figma', type: 'Interface Design Tool', icon: figmaImage, link: 'https://www.figma.com/' },
  { name: 'Full Stack Web Development', type: 'Development Skill', icon: webdImage  , link: 'https://web.dev/learn' },
  { name: 'Docker', type: 'Containerization Platform', icon: dockerImage, link: 'https://www.docker.com/' },
  { name: 'Node.js', type: 'JavaScript Runtime', icon: nodejsImage, link: 'https://nodejs.org/en/' }
];
  
  
const projects = [
  {
    title: 'OmniFood',
    link: 'https://omnifood-554.netlify.app/',
    type: 'Web Development',
    pages: 4,
    theme: 'Dark Theme',
    description: 'Showcasing expertise, passion, and innovation in the realm of development. Features responsive design and dynamic layout for a seamless user experience.',
    image: omniImage, 
    techStack: ['HTML', 'CSS', 'JavaScript']
  },
  {
    title: 'LC Platform',
    link: '#',
    type: 'Full-Stack Development',
    pages: 1,
    theme: 'Light Theme',
    description: 'An advanced tool for multilingual communication, providing text extraction, semantic language conversion, and enhanced multilingual communication capabilities.',
    image: '/images/lc-platform-thumbnail.png', 
    techStack: ['ReactJS', 'Flask', 'PostgreSQL', 'Text Processing', 'Model Integration']
  },
  {
    title: 'Zenith Gym',
    link: 'https://zenith.com',
    type: 'Fitness',
    pages: 5,
    theme: 'Light Theme',
    description: 'Empowering fitness enthusiasts with an immersive online experience, featuring modern web technologies for seamless interaction and engagement.',
    image: '/images/zenith-gym-thumbnail.png', 
    techStack: ['HTML', 'CSS', 'JavaScript']
  }
];

  const [isExpanded, setIsExpanded] = useState(false);
  const visibleStacks = isExpanded ? stacks : stacks.slice(0, 6);
  const visibleProjects = isExpanded ? projects : projects.slice(0, 2);
  
  return (
    <>
      <style>
        {`
          @keyframes wave {
            0% { transform: rotate(0deg); }
            10% { transform: rotate(14deg); }
            20% { transform: rotate(-8deg); }
            30% { transform: rotate(14deg); }
            40% { transform: rotate(-4deg); }
            50% { transform: rotate(10deg); }
            60% { transform: rotate(0deg); }
            100% { transform: rotate(0deg); }
          }
        `}
      </style>

      <section className="relative flex flex-col pt-40 overflow-hidden text-white">
      {/* px-4 sm:px-6 md:pl-[160px] md:pr-[160px] lg:pl-[200px] lg:pr-[200px] xl:pl-[240px] xl:pr-[240px] */}
        {/* Top Bar */}
        <div id='home' className="absolute top-0 left-0 w-full px-4 sm:px-6 md:px-[160px] lg:px-[200px] xl:px-[150px] py-4 text-xs sm:text-sm tracking-widest z-10 border-b-[2px] border-stone-600/40">
          <div className="hidden lg:flex justify-between items-center">
            <div className="flex items-center gap-2 text-white px-3 py-3 rounded-full bg-[#141415]">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <p>Available For Work</p>
            </div>


            <p className="text-stone-300">
              Local Time (IST):{' '}
              <span className=" px-3 py-3 rounded-full text-white font-mono bg-[#141415]">
                {timeIST}
              </span>
            </p>
          </div>

          {/* Mobile Nav - Centered */}
          <div className="flex lg:hidden justify-center mt-2">
            <div className="flex gap-4 text-white text-xs sm:text-sm">
              <a href="#home" className="hover:underline px-3 py-3 rounded-2xl bg-[#141415]">Home</a>
              <a href="#experience" className="hover:underline px-3 py-3 rounded-2xl bg-[#141415]">Experience</a>
              <a href="#contact" className="hover:underline px-3 py-3 rounded-2xl bg-[#141415]">Contact</a>
            </div>
          </div>
        </div>

        {/* Hero Content */}
        <div className="flex flex-col items-center justify-center text-center gap-8 ">
          <div className="flex lg:flex-row lg:items-start md:flex-row sm:flex-row items-center lg:gap-14 md:gap-15 sm:gap-1 gap-7 text-left max-w-none max-h-none">
            <img
              src={picture}
              alt="Hero"
              className="w-35 h-40 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-48 lg:h-58 object-cover"
            />
            <div className='lg:mt-7'>
              <h1 className="text-lg sm:text-xl text-[#919191]">
                <span
                  className="inline-block"
                  style={{
                    display: 'inline-block',
                    animation: 'wave 2s infinite',
                    transformOrigin: '70% 70%',
                  }}
                >
                  👋
                </span>
                Hello I Am
              </h1>

              <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight text-white mb-2">
                Eswar Kartheek Grandhi
              </h2>
              <p className="hidden lg:block md:block text-[#979797] max-w-xl text-sm sm:text-base mt-2">
                Passionate about building beautiful, interactive digital experiences and solving real-world problems through clean, efficient code.
              </p>
              <div className="hidden lg:flex md:flex gap-4 mt-4">
                <a
                  href="https://mail.google.com/mail/?view=cm&fs=1&to=eswarkartheekgrandhi@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2"
                >
                  <button className="w-full px-6 py-2 rounded-2xl text-[#979797] hover:bg-white hover:cursor-pointer hover:text-black bg-[#141415] transition flex items-center justify-center gap-2">
                    <Mail size={18} />
                    Email Me
                  </button>
                </a>

                <a
                  href="https://drive.google.com/file/d/1ZXPnF91Hn_GIkCoBJy2HUOnYq-q7WXei/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-1/2"
                >
                  <button className="w-full px-6 py-2 rounded-2xl text-[#979797] hover:border-white hover:cursor-pointer hover:text-white transition bg-[#141415] flex items-center justify-center gap-2 border border-transparent">
                    <Download size={18} />
                    Get Resume
                  </button>
                </a>

              </div>
            </div>
          </div>

          <p className="block lg:hidden md:hidden text-[#979797] max-w-xl text-sm sm:text-base mt-2">
            Passionate about building beautiful, interactive digital experiences and solving real-world problems through clean, efficient code.
          </p>

          <div className="flex flex-col justify-center items-center lg:hidden md:hidden gap-4 mt-4 w-full">
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=eswarkartheekgrandhi@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <button className="w-full px-4 py-2 rounded-2xl text-[#979797] hover:bg-white hover:text-black bg-[#141415] transition flex items-center justify-center gap-2 whitespace-nowrap">
                <Mail size={18} />
                Email Me
              </button>
            </a>

            <a
              href="https://drive.google.com/file/d/1ZXPnF91Hn_GIkCoBJy2HUOnYq-q7WXei/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full"
            >
              <button className="w-full px-4 py-2 rounded-2xl text-[#979797] hover:border-white hover:text-white transition bg-[#141415] flex items-center justify-center gap-2 border border-transparent whitespace-nowrap">
                <Download size={18} />
                Get Resume
              </button>
            </a>
          </div>
        </div>

        <div id='experience' className="flex flex-col gap-6 w-full max-w-4xl mx-auto mt-20">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="flex items-center gap-2"
          >
            <Calendar className="text-white w-5 h-5" />
            <h2 className="text-white text-xl font-bold tracking-wide">My Experience</h2>
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-[#979797] text-lg mb-2 text-left"
          >
            Navigating diverse environments with adaptability and expertise for holistic solutions.
          </motion.p>

          {experiences.map((experience, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30 }} 
              whileInView={{ opacity: 1, y: 0 }} 
              transition={{ duration: 0.7, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="border border-[#111112] bg-[#0a0a0b] p-6 rounded-xl"
            >
              <div className="flex flex-col sm:flex-row items-start justify-between">
                <div className="flex items-center gap-4">
                  <img
                    src={experience.logo}
                    alt={experience.company}
                    className="w-15 h-15 rounded bg-white/5"
                  />
                  <div className="flex flex-col">
                    <div className="flex flex-col sm:flex-row sm:gap-2 items-start gap-2">
                      <h3 className="text-white font-bold">{experience.company}</h3>
                      <span className="border border-[#131314] text-xs bg-[#232325] text-[#989898] px-2 py-1 rounded-full">
                        {experience.companyType}
                      </span>
                    </div>
                    <a
                      href={experience.companyLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-stone-400 text-sm hover:underline mt-1 text-left"
                    >
                      {experience.companyLink}
                    </a>
                  </div>
                </div>
                <p className="text-white font-bold text-base mt-2 sm:mt-0 sm:ml-auto">{experience.duration}</p>
              </div>

              <motion.div 
                initial={{ opacity: 0 }} 
                whileInView={{ opacity: 1 }} 
                transition={{ duration: 0.8, delay: 0.4 }}
                viewport={{ once: true }}
                className="mt-4 text-left border border-[#111112] bg-[#050505] rounded-lg p-4"
              >
                <h4 className="text-white font-medium">{experience.role}</h4>
                <p className="text-stone-400 text-sm mt-2">{experience.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* My Stacks Section */}
        <div className="flex flex-col gap-6 w-full max-w-4xl mx-auto mt-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-white text-lg font-semibold tracking-wide"
          >
            <BriefcaseBusiness className="w-5 h-5 text-white" />
            <span>My Stacks</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-stone-400 text-lg mb-2 text-left"
          >
            Commitment to staying updated with the latest design trends and techniques.
          </motion.p>

          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            viewport={{ once: true }}
          >
            {visibleStacks.map((tool, index) => (
              <motion.a
                key={index}
                href={tool.link}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                viewport={{ once: true }}
              >
                <div className="flex items-center justify-between border border-[#131314] rounded-xl px-4 py-3 hover:bg-[#131315] hover:cursor-pointer transition bg-[#0a0a0b]">
                  <div className="flex items-center gap-3">
                    <img
                      src={tool.icon}
                      alt={tool.name}
                      className="w-10 h-10 border border-[#131314] rounded-lg bg-[#19191a] p-1"
                    />
                    <div className="flex flex-col text-left">
                      <span className="text-white font-semibold">{tool.name}</span>
                      <span className="text-sm text-stone-400">{tool.type}</span>
                    </div>
                  </div>
                  <ArrowRight className="text-[#6b6b6c] w-5 h-5" />
                </div>
              </motion.a>
            ))}
          </motion.div>

          {stacks.length > 6 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              viewport={{ once: true }}
              className="flex justify-center mt-6"
            >
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-white bg-[#141415] px-6 py-2 w-full rounded-xl hover:bg-[#232323] transition"
              >
                {isExpanded ? "View Less" : "View More"}
              </button>
            </motion.div>
          )}
        </div>

        {/* Creative Design Showcase */}
        <div id="projects" className="flex flex-col gap-6 w-full max-w-4xl mx-auto mt-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.4 }} 
            viewport={{ once: true }}
            className="text-white text-left font-semibold tracking-wide"
          >
            🚀 Creative Design Showcase
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: 0.2 }} 
            viewport={{ once: true }}
            className="text-stone-400 text-sm mb-2 text-left"
          >
            A curated display of projects blending design and functionality to deliver memorable digital experiences.
          </motion.p>

          {visibleProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }} 
              viewport={{ once: true }}
              className="bg-[#0a0a0b] min-h-[220px] flex flex-col md:flex-row border border-[#131314] rounded-2xl overflow-hidden hover:border-[#131315] transition"
            >
              <div className="w-full md:w-1/2 flex items-center justify-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="m-5 w-full object-cover h-[180px] border-2 rounded-2xl border-[#131314]"
                />
              </div>

              <div className="p-6 flex flex-col justify-center w-full md:w-1/2">
                <div className="flex flex-col md:flex-row justify-between items-start mb-3 pb-3 border-b border-[#29292c]">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-1 text-stone-400 text-sm hover:text-white bg-[#141415] px-2 py-1 rounded-2xl transition"
                  >
                    <Link2 className="w-4 h-4" />
                    {project.link === "#" ? "Coming Soon" : new URL(project.link).hostname}
                  </a>
                </div>

                <p className="text-sm text-left text-stone-400 mb-3 border-b border-[#29292c] pb-3">
                  {project.description}
                </p>

                <div className="flex gap-2 mt-2 justify-end flex-wrap">
                  {project.techStack.map((tech, i) => (
                    <motion.span
                      key={i}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: 0.2 * i }}
                      viewport={{ once: true }}
                      className="text-stone-400 text-xs px-3 py-1 bg-[#141415] rounded-xl hover:bg-[#232323] transition mr-2 mb-2"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}

          {projects.length > 2 && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.5 }}
              viewport={{ once: true }}
              className="flex justify-center mt-6 gap-4 flex-col md:flex-row"
            >
              {isExpanded && (
                <button
                  onClick={() => window.open('https://github.com/Eswarkartheekgrandhi?tab=repositories', '_blank')}
                  className="text-white bg-[#141415] px-6 py-2 rounded-xl w-full hover:bg-[#232323] transition mt-4 md:mt-0"
                >
                  View More Projects on GitHub
                </button>
              )}
              <button
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-white bg-[#141415] px-6 py-2 rounded-xl w-full hover:bg-[#232323] transition"
              >
                {isExpanded ? "View Less" : "View More"}
              </button>

              
            </motion.div>
          )}
        </div>



        {/* Contact Me Form */}
        <div id='contact' className="flex flex-col gap-6 w-full max-w-4xl mx-auto mt-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5 }} 
            viewport={{ once: true }}
            className="text-white text-left font-semibold tracking-wide"
          >
            📧 I Love to <span className="text-primary">hear</span> from you.
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.5, delay: 0.2 }} 
            viewport={{ once: true }}
            className="text-stone-400 text-sm mb-2 text-left"
          >
            Connect with Me Today. Let’s Create Something Amazing Together!
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.6, delay: 0.3 }} 
            viewport={{ once: true }}
            className="flex gap-4 flex-wrap"
          >
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=eswarkartheekgrandhi@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-[#979797] hover:border-white hover:cursor-pointer hover:text-white bg-[#141415] transition">
                <Mail className="w-4 h-4" /> EMAIL ME
              </button>
            </a>
            <button className="flex items-center gap-2 px-4 py-2 rounded-lg text-[#979797] hover:border-white hover:cursor-pointer hover:text-white bg-[#141415] transition"
              onClick={() => window.open('https://wa.me/8522936836?text=Hello%20I%20would%20like%20to%20connect!', '_blank')}>
              <WhatsApp className="w-4 h-4" /> Whatsapp ME
            </button>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.7, delay: 0.4 }} 
            viewport={{ once: true }}
            className="flex gap-6"
          >
            <a
              href="https://github.com/Eswarkartheekgrandhi/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition border border-white p-2 rounded-full"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/eswar-kartheek-grandhi-bb1566214"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition border border-white p-2 rounded-full"
            >
              <FaLinkedinIn className="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/kartheekgrandhi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition border border-white p-2 rounded-full"
            >
              <FaInstagram className="w-6 h-6" />
            </a>
            <a
              href="https://x.com/kartheekgr49050?t=juBO9CCQ7LgpNCDT4U-Izw&s=08 "
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-primary transition border border-white p-2 rounded-full"
            >
              <FaTwitter className="w-6 h-6" />
            </a>
          </motion.div>

          <motion.form
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-4"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <input
                type="text"
                placeholder="Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="p-3 rounded-md bg-neutral-900 text-white placeholder-gray-500 focus:outline-none"
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="p-3 rounded-md bg-neutral-900 text-white placeholder-gray-500 focus:outline-none"
              />
            </div>

            <textarea
              rows="5"
              placeholder="Message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 rounded-md bg-neutral-900 text-white placeholder-gray-500 focus:outline-none"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-white text-black py-3 rounded-md font-semibold hover:bg-gray-200 transition hover:cursor-pointer"
            >
              Send Your Message
            </button>
          </motion.form>
        </div>

        <div className="border-t border-gray-600 mt-16"></div>

        <footer className="w-full bg-black text-white py-8">
          <div className="flex justify-center items-center text-sm sm:text-base">
            <span className="mr-2">Made with ❤️ by</span>
            <span className="font-semibold">Eswar Kartheek</span>
          </div>
        </footer>


      </section>
    </>
  );
}
