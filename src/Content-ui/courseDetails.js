import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
function CourseDetails(){
    const courseStats = {
        "freecodecamp": { 
            title: 'FreeCodeCamp',
            background: 'https://repository-images.githubusercontent.com/410195978/f165847e-9bad-4697-bef2-19960bd1c0d8', 
            users: 40,  // Numeric value
            difficulty: 4, 
            website: "https://www.freecodecamp.org/",
            avgPay: 60000,  // Numeric value
            desc: "FreeCodeCamp empowers you with hands-on projects and real-world coding challenges, fostering practical skills and confidence in web development. Its community-driven approach ensures support and continuous learning, making coding accessible to everyone."
        },
        "the-odin-project": { 
            title: 'The Odin Project', 
            background: 'https://cdn.dribbble.com/users/553013/screenshots/11117717/media/c7e8764b0b46e259a6a43606eb2e4798.png', 
            users: 1,  // Numeric value
            website: "https://www.theodinproject.com/",
            difficulty: 6, 
            avgPay: 62500,  // Numeric value
            desc: "The Odin Project offers a comprehensive, community-driven curriculum that builds full-stack development expertise through immersive, project-based learning. It equips you with the skills to tackle real-world problems and excel in the tech industry."
        },
        "zero-to-mastery": { 
            title: 'Zero To Mastery', 
            background: 'https://miro.medium.com/v2/resize:fit:1400/1*gXpJYnx-qT8mXRgJhS7_xw.png', 
            users: 1,  // Numeric value
            website: "https://zerotomastery.io/",
            difficulty: 5, 
            avgPay: 70000,  // Numeric value
            desc: "Zero To Mastery provides comprehensive and engaging courses that guide learners from beginner to advanced levels, focusing on real-world skills and career-oriented content in various programming fields."
        },
        "coursera": { 
            title: 'Coursera', 
            background: 'https://cdn.prod.website-files.com/620e4101b2ce12a1a6bff0e8/66ab35cc6d73081104ba48c4_660423cbc46d2aa556ce44d8_Infographic_15%2520Best%2520Coursera%2520Courses_Jan2024_1-01.webp', 
            users: 45,  // Numeric value
            website: "https://www.coursera.org/",
            difficulty: 7, 
            avgPay: 75000,  // Numeric value
            desc: "Coursera offers high-quality courses from leading universities and organizations, providing learners with both theoretical knowledge and hands-on skills in a wide range of technical disciplines."
        },
        "simplilearn": { 
            title: 'Simplilearn', 
            background: 'https://missiongraduatenm.org/wp-content/uploads/2022/10/pasted-image-0-1024x467.jpg', 
            users: 3,  // Numeric value
            website: "https://www.simplilearn.com/",
            difficulty: 5, 
            avgPay: 65000,  // Numeric value
            desc: "Simplilearn offers a blend of self-paced and instructor-led training in various tech domains, aiming to equip learners with industry-recognized certifications and skills that enhance career opportunities."
        },
        "harvard-cs50": { 
            title: 'CS50', 
            background: 'https://static.wixstatic.com/media/46d623_af86cd489f7541e798e8bf81ed99d2d2~mv2.png/v1/fill/w_640,h_400,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/46d623_af86cd489f7541e798e8bf81ed99d2d2~mv2.png', 
            users: 40,  // Numeric value
            website: "https://www.edx.org/cs50",
            difficulty: 8, 
            avgPay: 80000,  // Numeric value
            desc: "Harvard's renowned CS50 course blends rigorous academic content with engaging problem sets and lectures. It transforms beginners into proficient programmers, providing a strong foundation in computer science."
        },
        "codecademy": { 
            title: 'Codecademy', 
            background: 'https://learntocodewith.me/wp-content/uploads/2020/10/codecademy-homepage-1024x594.png', 
            users: 45,  // Numeric value
            website: "https://www.codecademy.com/",
            difficulty: 4, 
            avgPay: 60000,  // Numeric value
            desc: "Codecademy is an interactive, user-friendly platform that demystifies coding through step-by-step lessons, real-time feedback, and engaging projects. Its structured curriculum makes learning to code accessible and enjoyable."
        },
        "khan-academy": { 
            title: 'Khan Academy', 
            background: 'https://cdn.kastatic.org/images/downloads-page/DownloadsHeroPhoto.png', 
            users: 18,  // Numeric value
            website: "https://www.khanacademy.org/",
            difficulty: 3, 
            avgPay: 50000,  // Numeric value
            desc: "Khan Academy offers free and in-depth lessons across various subjects, including computer programming, where learners can explore the basics of web development and more advanced topics like algorithms."
        },
        "udemy": { 
            title: 'Udemy', 
            background: 'https://teach.udemy.com/wp-content/uploads/2023/07/udemy.png', 
            users: 57,  // Numeric value
            website: "https://www.udemy.com/",
            difficulty: 6, 
            avgPay: 65000,  // Numeric value
            desc: "Udemy offers a wide variety of courses, transforming beginners into proficient developers. Its structured, intensive curriculum emphasizes practical applications and career readiness, catering to diverse learning needs."
        },
        "mit-opencourse": { 
            title: 'MIT', 
            background: 'https://www.classcentral.com/report/wp-content/uploads/2021/04/mit-ocw-homepage-final.png', 
            users: 10,  // Numeric value
            website: "https://ocw.mit.edu/",
            difficulty: 7, 
            avgPay: 85000,  // Numeric value
            desc: "MIT OpenCourseWare provides free and open access to a wide array of MIT's course materials, empowering learners worldwide with rigorous, high-level education in various domains of computer science and programming."
        }
    };    
    useEffect(() => {
        window.scrollTo(0,0)
    }, []);
    const navigate = useNavigate()
    const { courseTitle } = useParams();
    const formattedCourseTitle = courseTitle.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and');
    const course = courseStats[formattedCourseTitle]
    // Count up animation
    const [users, setUsers] = useState(0);
    const [difficulty, setDifficulty] = useState(0);
    const [avgPay, setAvgPay] = useState(10000);

    const animationStarted = useRef(false); // Flag to track if the animation has started

    // Effect to trigger count-up animation
    useEffect(() => {
        if (course && !animationStarted.current) {
            animationStarted.current = true;  // Mark animation as started

            const animateValue = (start, end, duration, setValue) => {
                let startTimestamp = null;
                
                const step = (timestamp) => {
                    if (!startTimestamp) startTimestamp = timestamp;
                    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
                    const currentValue = Math.floor(progress * (end - start) + start);
                    setValue(currentValue);
                    
                    if (progress < 1) {
                        requestAnimationFrame(step);
                    }
                };
                requestAnimationFrame(step);
            };

            // Trigger the animations
            animateValue(0, course.users, 2000, setUsers);
            animateValue(0, course.difficulty, 1500, setDifficulty);
            animateValue(10000, course.avgPay, 2500, setAvgPay);
        }
    }, [course]);

    if(!course){
        return <p className="not-found-msg">Course details Not found :((</p>
    };
    const handleExit = () => {
        navigate('/main')
    };
    return (
        <div className="course-details-container">
            <div className="upper-course-details">
                <div className={`gif-background`} style={{backgroundImage: `url(${course.background})`}}></div>
                <button className="exit-course-btn" onClick={handleExit}>
                    <i class="fa-solid fa-arrow-left"></i>
                </button>
                <h1 className="course-title">{course.title}</h1>
            </div>
            <div className="course-details">
            <p className="course-details-text">{course.desc}</p>
                <div className="inner-course-details">
                    <div className="course-detail">
                        <p className="course-text">Amount of Active Users : 
                        <span className="course-span gradient-text-color">{users}+</span>
                        </p>
                        <p className="sub-course-text">million</p>
                    </div>
                    <div className="course-detail">
                        <p className="course-text">Course Difficulty : 
                        <span className="course-span gradient-text-color">{difficulty}/10</span>
                        </p>
                        <p className={`sub-course-text ${difficulty <= 4
                                                        ? "easy"
                                                        : difficulty <= 7
                                                        ? "intermediate"
                                                        : difficulty <= 9
                                                        ? "hard"
                                                        : "expert"}`}>{difficulty <= 4
                                                        ? "Easy"
                                                        : difficulty <= 7
                                                        ? "Intermediate"
                                                        : difficulty <= 9
                                                        ? "Hard"
                                                        : "Expert"}
                        </p>
                    </div>
                    <div className="course-detail">
                        <p className="course-text">Average Course Graduates Pay : 
                        <span className="course-span gradient-text-color">${Number(avgPay).toLocaleString()}</span>
                        </p>
                        <p className="sub-course-text">a Year</p>
                    </div>
                </div>
                <a className="link-to-course" href={course.website} target="_blank">
                    <div className="link-to-course-div">
                        Join Now
                    </div>
                </a>
            </div>
        </div>
    )
}

export default CourseDetails;