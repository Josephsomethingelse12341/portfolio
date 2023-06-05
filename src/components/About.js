import profPic from '../assets/img/header-img.png'

export const About = () => {
    return (
        <body>
            <div class="bg-blue-200 min-h-screen py-5">
                <div class="flex items-center justify-center ">
                    <div class="bg-blue-300 w-1/3 mt-10 rounded-lg shadow-2xl">
                        <div class="flex items-center justify-center pt-10 flex-col">
                            <img src={profPic} alt="Profile pic" class="rounded-full w-32 h-32 "/>
                        </div>
                        <h1 class="text-lg text-bold font-[Bahnschrift]">Joseph De Gois</h1>
                        <h2 class="text-md text-gray-700">Toronto, Ontario, Canada</h2>
                    </div>
                </div>
            </div>
        </body>
    )
}

export default About;