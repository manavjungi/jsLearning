// De-structuring 

const course = {
    name : "javaScript",
    price : "999",
    courseInstructor : "Hitesh"
}

// course.courseInstructor
const {courseInstructor: CI} = course
// console.log(courseInstructor);
console.log(CI);

// {
//     "Name":"manav",
//     "coursename": "JavaScript",
//     "price": "free"
// }