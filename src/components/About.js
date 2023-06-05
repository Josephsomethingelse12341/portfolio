import profPic from '../assets/img/header-img.png'
import navIcon1 from '../assets/img/nav-icon1.svg'
import navIcon2 from '../assets/img/nav-icon2.svg'

export const About = () => {
    return (
        <body>
            <div class="bg-blue-200 min-h-screen py-5">
                <div class="flex items-center justify-center ">
                    <div class="bg-blue-300 w-2/4 mt-10 rounded-lg shadow-2xl">
                        <div class="flex items-center justify-center pt-10 flex-col">
                            <img src={profPic} alt="Profile pic" class="rounded-full w-32 h-32 "/>
                        </div>
                        <h1 class="text-lg text-bold font-[Bahnschrift]">Joseph De Gois</h1>
                        <h2 class="text-md text-gray-700 text-bold font-[Bahnschrift]">Toronto, Ontario, Canada</h2>
                        <p class="font-[Bahnschrift] text-sm p-4">I am a Front end Developer. I specialize in designing and building the user interface of both websites and applications.</p>
                        <div className="flex items-center justify-center pt-5 flex-cols-2  my-2">
                            <a href="https://www.linkedin.com/in/joseph-de-gois-020651220/" target="_blank" rel="noreferrer"><img src={navIcon1} class="w-10 h-10 p-1 border-2 mx-1"alt="" /></a>
                            <a href="https://github.com/Josephsomethingelse12341" target="_blank" rel="noreferrer"><img src={navIcon2} class="w-10 h-10 p-1 mx-1 border-2"alt="" /></a>
                        </div>
                    </div>
                </div>
                <div class="flex items-center justify-center ">
                    <div class="bg-blue-300 w-1/3 mt-10 rounded-lg shadow-2xl">
                        <h1 class="pt-5 text-lg text-bold font-[Bahnschrift]">Skills</h1>
                        <div className="flex items-center justify-center pt-5 flex-cols-2 my-2">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg" class="w-12 h-12 mx-2" alt="css"></img>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" class="w-12 h-12 mx-2" alt="html"></img>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/4/47/React.svg" class="w-12 h-12 mx-2" alt="react"></img>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg" class="w-12 h-12 mx-2" alt="tailwind"></img>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/9/99/Unofficial_JavaScript_logo_2.svg" class="w-12 h-12 mx-2" alt="javascript"></img>
                            <img src="https://cdn.worldvectorlogo.com/logos/c--4.svg" class="w-12 h-12 mx-2" alt="c#"></img>
                            <img src="https://cdn.worldvectorlogo.com/logos/java.svg" class="w-12 h-12 mx-2" alt="java"></img>

                        </div>
                    </div>
                </div>
            </div>
        </body>
    )
}

export default About;