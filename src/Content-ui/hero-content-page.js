import { useState } from "react";
import CardContainer from "./cards-container";
import mit2 from '../Brands/mit-brand.png'
import udemy from '../Brands/udemy_logo.jpeg'
import ztm from '../Brands/ztm-brand.png'
import simplilearn from '../Brands/simplilearn-brand.png'
import codecademy from '../Brands/codecademy-logo.png'
import fcc from '../Brands/fcc-brand.png'
import odin_project from '../Brands/odin-project-brand.png'
import khan_academy from '../Brands/khan-academy-brand.png'
import harvard from '../Brands/harvard-brand.png'
import coursera from '../Brands/coursera-brand.webp'
function HeroContent(){
    const cardsData = [
        {
            img: fcc,
            desc: "FreeCodeCamp empowers you with hands-on projects and real-world coding challenges, fostering practical skills and confidence in web development. Its community-driven approach ensures support and continuous learning, making coding accessible to everyone.",
            website: "https://www.freecodecamp.org/",
            companyTitle: "FreeCodeCamp",
            types: [
                "HTML & CSS", 
                "JavaScript", 
                "React", 
                "NodeJS", 
                "MongoDB", 
                "ExpressJS", 
                "APIs", 
                "Web Development", 
                "Data Structures", 
                "Algorithms", 
                "Python"
            ]
        },
        {
            img: odin_project,
            desc: "The Odin Project offers a comprehensive, community-driven curriculum that builds full-stack development expertise through immersive, project-based learning. It equips you with the skills to tackle real-world problems and excel in the tech industry.",
            website: "https://www.theodinproject.com/",
            companyTitle: "The Odin Project",
            types: [
                "HTML & CSS", 
                "JavaScript", 
                "NodeJS", 
                "React", 
                "Ruby", 
                "Ruby on Rails", 
                "Git", 
                "SQL", 
                "APIs", 
                "Web Development"
            ]
        },
        {
            img: harvard,
            desc: "Harvard's renowned CS50 course blends rigorous academic content with engaging problem sets and lectures. It transforms beginners into proficient programmers, providing a strong foundation in computer science and fostering analytical thinking and problem-solving skills.",
            website: "https://www.edx.org/cs50",
            companyTitle: "Harvard CS50",
            types: [
                "PHP", 
                "Python", 
                "Scratch", 
                "mySQL", 
                "JavaScript", 
                "C", 
                "Data Structures", 
                "Algorithms", 
                "SQL", 
                "Web Development", 
                "APIs"
            ]
        },
        {
            img: codecademy,
            desc: "Codecademy is an interactive, user-friendly platform that demystifies coding through step-by-step lessons, real-time feedback, and engaging projects. Its structured curriculum and practical exercises make learning to code accessible and enjoyable.",
            website: "https://www.codecademy.com/",
            companyTitle: "Codecademy",
            types: [
                "HTML & CSS", 
                "JavaScript", 
                "Python", 
                "C++", 
                "mySQL", 
                "React", 
                "Java", 
                "Git", 
                "Ruby", 
                "SQL", 
                "APIs", 
                "Data Structures"
            ]
        },
        {
            img: udemy,
            desc: "Udemy transforms beginners into proficient developers through a structured, intensive curriculum. Emphasizing practical applications and career readiness, it offers a vast array of courses that cater to diverse learning needs and goals.",
            website: "https://www.udemy.com/",
            companyTitle: "Udemy",
            types: [
                "Python", 
                "JavaScript", 
                "Web3", 
                "React", 
                "NodeJS", 
                "Java", 
                "C++", 
                "Angular", 
                "VueJS", 
                "Swift", 
                "Django", 
                "Flask", 
                "Machine Learning", 
                "Data Structures", 
                "SQL", 
                "APIs"
            ]
        },
        {
            img: ztm,
            desc: "Zero To Mastery provides comprehensive and engaging courses that guide learners from beginner to advanced levels, focusing on real-world skills and career-oriented content in various programming fields.",
            website: "https://zerotomastery.io/",
            companyTitle: "Zero To Mastery",
            types: [
                "JavaScript", 
                "Python", 
                "React", 
                "NodeJS", 
                "Machine Learning", 
                "Data Structures", 
                "Django", 
                "Flask", 
                "SQL", 
                "GraphQL", 
                "APIs", 
                "TypeScript", 
                "Git"
            ]
        },
        {
            img: coursera,
            desc: "Coursera offers high-quality courses from leading universities and organizations, providing learners with both theoretical knowledge and hands-on skills in a wide range of technical disciplines.",
            website: "https://www.coursera.org/",
            companyTitle: "Coursera",
            types: [
                "Python", 
                "Java", 
                "C", 
                "Web Development", 
                "Data Structures", 
                "Machine Learning", 
                "AI", 
                "Cloud Computing", 
                "SQL", 
                "APIs", 
                "Deep Learning", 
                "R Programming"
            ]
        },
        {
            img: simplilearn,
            desc: "Simplilearn offers a blend of self-paced and instructor-led training in various tech domains, aiming to equip learners with industry-recognized certifications and skills that enhance career opportunities.",
            website: "https://www.simplilearn.com/",
            companyTitle: "Simplilearn",
            types: [
                "Java", 
                "Python", 
                "Cloud Computing", 
                "Data Structures", 
                "Machine Learning", 
                "DevOps", 
                "Big Data", 
                "AI", 
                "SQL", 
                "R Programming", 
                "APIs"
            ]
        },
        {
            img: khan_academy,
            desc: "Khan Academy offers free and in-depth lessons across various subjects, including computer programming, where learners can explore the basics of web development and more advanced topics like algorithms.",
            website: "https://www.khanacademy.org/",
            companyTitle: "Khan Academy",
            types: [
                "HTML & CSS", 
                "JavaScript", 
                "SQL", 
                "Algorithms", 
                "Web Development", 
                "APIs", 
                "Data Structures"
            ]
        },
        {
            img: mit2,
            desc: "MIT OpenCourseWare provides free and open access to a wide array of MIT's course materials, empowering learners worldwide with rigorous, high-level education in various domains of computer science and programming.",
            website: "https://ocw.mit.edu/",
            companyTitle: "MIT OpenCourse",
            types: [
                "Python", 
                "C", 
                "Java", 
                "Algorithms", 
                "Data Structures", 
                "Machine Learning", 
                "AI", 
                "SQL", 
                "APIs", 
                "Web Development"
            ]
        }
    ];
    const [selectedLanguage, setSelectedLanguage] = useState('All');
    const [selectedCourse, setSelectedCourse] = useState('');
    // Unique programming language list
    const allLanguages = Array.from(new Set(cardsData.flatMap(course => course.types)));

    // Filter courses based on the selected language
    const filteredCourses = cardsData.filter(course => 
        (selectedLanguage === 'All' || course.types.includes(selectedLanguage)) &&
        (!selectedCourse || course.companyTitle === selectedCourse)
    );
    return(
        <>
        <div className="hero-content-page">
            <div className="gif-background gif-background3"></div>
            <div className="hero-dropdown-container">
            <h1 className="hero-title">Get High-Quality Programming Courses for <span className="hero-title-span">FREE!</span></h1>
            {/* Course Dropdown */}
            <div className="dropdown-course-container">
                <select
                    className="dropdown-course"
                    id="courseSelect"
                    value={selectedCourse}
                    onChange={(e) => setSelectedCourse(e.target.value)}
                >
                    <option className="option-course" value="">All Courses</option>
                    {cardsData.map(course => (
                        <option className="option-course" key={course.companyTitle} value={course.companyTitle}>
                            {course.companyTitle}
                        </option>
                    ))}
                </select>
            </div>

            <div className="secondary-dropdown-container">
                {/* language filter */}
                <select
                    className="language-filter"
                    id="languageFilter"
                    value={selectedLanguage}
                    onChange={(e) => setSelectedLanguage(e.target.value)}
                >
                    <option value="All">All Languages</option>
                    {allLanguages.map(language => (
                        <option key={language} value={language}>
                            {language}
                        </option>
                    ))}
                </select>

            {/* Button to reset filters */}
            <button className="reset-filter-btn" onClick={() => { setSelectedLanguage('All'); setSelectedCourse(''); }}>
                Reset Filters
            </button>
            </div>
            </div>
        </div>
        {/* Pass filtered courses to CardsContainer */}
        <CardContainer courses={filteredCourses} />
        </>
    )
}
export default HeroContent;