import { Link } from "react-router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { Compass, PlusCircle } from "lucide-react";
import { useEffect, useState } from "react";
import ProjectCard from "../components/ProjectCard";

const Home = () => {

    const handleMode = () => {
        return
    };

    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {   
                const articles = [
                    {
                        _id: "1",
                        title: "Mobile App Design for a Fitness Tracker",
                        author: "Ethan Carter",
                        difficulty: "Intermediate",
                        category: "TECHNOLOGY",
                        duration: "2 weeks",
                        image_src: "src\\assets\\mobile_app.PNG", 
                    },
                    {
                        _id: "2",
                        title: "Content Strategy for a Travel blog",
                        author: "Olivia Bennett",
                        difficulty: "Advanced",
                        category: "MARKETING",
                        duration: "3 weeks",
                        image_src: "src\\assets\\beach_pic.PNG",
                    },
                ];
                setProjects(articles);
            } catch (error) {
                console.error("Error setting projects:", error);
            }
        };
        fetchProjects();
    }, []);    

    return (
        <div className="container max-w-7xl mx-auto py-1 min-h-screen">
            <Header page={null}/>
            <main className="flex flex-col justify-center mx-auto py-2 px-4 mb-4">
                <div className="flex flex-col justify-center mx-auto mt-2 w-full">
                    <h1 className="font-bold text-center text-xl font-poppins">SkillSphere: Master New Skills, Together.</h1>
                    <p className="text-sm my-2">
                        Discover, create, and collaborate on microprojects to accelerate your learning journey.
                    </p>
                    <Link to={"/explore"} className="btn btn-info text-center h-fit rounded-xl mt-2 text-white">
                        <Compass/>
                        Explore Projects
                    </Link>
                    <Link to={"/create"} className="btn btn-active text-center h-fit rounded-xl my-2">
                        <PlusCircle/>
                        Create Your Own
                    </Link>
                </div>

                <div className="flex flex-col justify-center mx-auto mt-2 w-full">
                    <h2 className="font-poppins font-semibold">Featured Skills Projects</h2>
                    {projects.length > 0 && (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {projects.map(project => (
                                <ProjectCard project={project} key={project._id} setProjects={setProjects} />
                            ))}
                        </div>
                    )}
                </div>

                <div className="flex flex-col justify-center mx-auto mt-2 w-full">
                    <h2 className="font-poppins font-semibold">Learning Using SkillSphere</h2>
                    
                </div>
            </main>
            <Footer page="Home"/>
        </div>
        
    )
}

export default Home