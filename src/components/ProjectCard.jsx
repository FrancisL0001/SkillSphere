import { BarChart, Clock } from "lucide-react";
import { Link } from "react-router";

const ProjectCard = ({project, setProjects}) => {

    const difficultyStyles = {
        Beginner: "bg-green-200 text-green-500",
        Intermediate: "bg-blue-200 text-blue-500",
        Advanced: "bg-red-200 text-red-600",
    };

    return (
        <Link to={`/project/${project._id}`} 
         className="card rounded-md max-w-80 mx-auto bg-base-100 hover:shadow-lg py-0 px-0 border-solid shadow-md transition-all duration-200 mb-0">
            <div className="flex flex-row justify-between"> 
                <div className="card-body justify-center items-center py-0 mt-2 px-3 text-left w-5/8">
                    <span className="text-blue-400 text-left self-start py-0">{project.category}</span>
                    <h1 className="card-title py-0 mb-0 font-bold text-sm w-full">{project.title}</h1>
                    <p className="text-xs font-bold text-base-content/90 text-left w-full">By {project.author}</p>
                    <div className="grid grid-cols-2 items-left justify-between w-full gap-2 mx-auto mb-3">
                        <button className={`btn h-fit py-1 px-1 w-full gap-1 text-xs rounded-full mx-auto ${difficultyStyles[project.difficulty]}`}>
                            <BarChart className="size-4 text-content"/>
                            {project.difficulty}
                        </button>
                        <button className="btn bg-green-200 h-fit text-green-500 rounded-full w-full mx-auto text-xs gap-1 px-0 py-1">
                            <Clock className="size-4"/>
                            {project.duration}
                        </button>
                    </div>
                </div>
                <img src={project.image_src} alt="Sample Mobile Design" className="w-3/8 h-full rounded-r-lg py-0"/>
            </div>
        </Link>
    )
}

export default ProjectCard