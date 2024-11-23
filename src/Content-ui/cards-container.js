import Card from "./card";
function CardContainer({ courses }){
    return (
        <>
        <div className="cards-container">
            {courses.length > 0 ? (
                courses.map((course) => (
                    <Card key={course.companyTitle} course={course} />
                ))
            ) : (
                <p className="not-found-msg">No courses found :(</p>
            )}
        </div>
        </>
    )
}
export default CardContainer;