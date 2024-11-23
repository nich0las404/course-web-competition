import { Link } from "react-router-dom";
function Card({course}){
    return (
        <Link className="card-container" to={`/course/${course.companyTitle.toLowerCase().replace(/\s+/g, '-').replace(/&/g, 'and')}`}>
            <div className="upper-card-container">
                <div className="card-img-container">
                <img className="card-img" src={course.img} alt={course.companyTitle}/>
                </div>
                <div className="card-profile">
                    <h1 className="card-title">{course.companyTitle}</h1>
                    <a target="_blank" className="card-course-link" href={course.website}>{course.website}</a>
                </div>
            </div>
            <p className="card-desc">{course.desc}</p>
            <div className="card-languages-container">
                {course.types.map((type, index) => (
                    <p key={index} className={`card-language ${type.toLowerCase().replace(/\s+/g, '-').replace(/&/g, '-')}`}>{type}</p>
                ))}
            </div>
        </Link>
    )
}
export default Card;