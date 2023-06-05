import projImg1 from '../assets/img/quizhoot.png'
import projImg2 from '../assets/img/203878414-3f59bc6b-a39f-4722-9cb5-4b0a98d71a82.png'
import projImg3 from '../assets/img/empcrud.png'

export const Projects = () => {
    return (
        <div class="bg-blue-200 min-h-screen py-5">
        <h1 class="text-5xl flex justify-center text-gray-700">Main Project</h1>
        <div class="mt-8 my-2 grid grid-cols-1 mx-40">
            <div class="bg-white rounded overflow-hidden shadow-lg m-4 mx-80">
                    <img src={projImg1} alt="Project 1" class="w-full h-32 sm:h-48"/>
                    <div>
                        <span class="font-bold">Quizhoot</span>
                        <span class="block text-sm text-gray-500 px-2">This project was my final capstone project in college. It's an app that contains quizzes and forums which provides a community based learning environment. My contribution was mostly on the forum aspect in terms of front end and backend, also helped out with the general frontend.</span>
                        <a href="https://quiz-hoot-erzsb9h1b-jrdc12.vercel.app/" target="_blank" rel="noreferrer" class="hover:text-gray-500">Deployment Link</a>
                    </div>
            </div> 
        </div>
        <h1 class="text-5xl flex justify-center text-gray-700">Other Projects</h1>
        <div class=" mt-8 my-2 grid grid-cols-2 mx-40 ">
            <div class="bg-white rounded overflow-hidden shadow-lg m-4 mx-20">
                <img src={projImg2} alt="Project 2" class="w-full h-32 sm:h-48"/>
                <div>
                    <span class="font-bold">Weather App</span>
                    <span class="block text-sm text-gray-500 px-2">This app shows the usage of a weather api, allowing the user to input a city of their choice and recieving the weather conditions of that city.</span>
                    <a href="https://github.com/Josephsomethingelse12341/101317769_comp3123_labtest2" target="_blank" rel="noreferrer" class="hover:text-gray-500">Github Link</a>
                </div>
            </div>
            <div class="bg-white rounded overflow-hidden shadow-lg m-4 mx-20">
                <img src={projImg3} alt="Project 3" class="w-full h-32 sm:h-48"/>
                <div>
                    <span class="font-bold">Simple Crud System</span>
                    <span class="block text-sm text-gray-500 px-2">For this assignment, I had to make a crud system, allowing users to login and signup. Letting them create, delete, update employees. Requires a bit of knowledge of apollo to run this project, deployment in the github link.</span>
                    <a href="https://github.com/Josephsomethingelse12341/101317769_COMP3133_Assignment1" target="_blank" rel="noreferrer" class="hover:text-gray-500">Github Link</a>
                </div>
            </div>
        </div>
        </div>
        
    )
}

export default Projects;