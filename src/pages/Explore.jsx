import { useCallback, useEffect, useState, useRef } from "react";
import Footer from "../components/Footer"
import Header from "../components/Header"
import SearchBar from "../components/SearchBar";
import ProjectCard from "../components/ProjectCard";
import toast from "react-hot-toast";

const Explore = () => {

  const [projects, setProjects] = useState([]);
  const [filteredProjects, setFilteredProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const isInitialMount = useRef(true);

  const handleSearch = useCallback((filters) => {

    const { searchTerm, category, difficulty, time } = filters;

    console.log("Search Filters: ", filters);
    console.log(projects);

    const results = projects.filter(project => {
      const matchesSearch = searchTerm ? project.title.toLowerCase().includes(searchTerm.toLowerCase()) : true ;
      const matchesCategory = category ? project.category === category : true;
      const matchesDifficulty = difficulty ? project.difficulty === difficulty : true;
      const matchesTime = time ? project.duration === time : true;
      
      return matchesSearch && matchesCategory && matchesDifficulty && matchesTime;
    });

    console.log(results);

    setFilteredProjects(results);
  }, [projects]); 

  useEffect(() => {
    const getProjects = async () => {
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
        setFilteredProjects(articles);

        setError(false);
      } catch (error) {
        toast.error("Failed to load projects");
        setError('Failed to load projects!');
        console.error("Error encoutered fetching projects: ", error);
      } finally {
        setLoading(false);
      }
    };

    getProjects();

  }, []);


  return (
    <div className="container max-w-7xl mx-auto min-h-screen bg-[radial-gradient(100%_50%_at_50%_0%,rgba(0,163,255,0.13)_0,rgba(0,163,255,0)_50%,rgba(0,163,255,0)_100%)]">
        <header className="flex flex-col mb-4 border-b-2 pb-2">
            <Header page={null}/>
            <div className="max-w-full">
              <SearchBar onSearch={handleSearch} initialSearch={!isInitialMount.current}/>
            </div>
        </header> 

        <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {loading ? 
            (<span className="loading loading-infinity loading-xs text-primary size-20 mx-auto my-auto"></span>) :
              error ? 
              (<div className="error">{error}</div>) :
                (filteredProjects.map(project => (
                  <ProjectCard project={project} key={project._id} setProjects={setProjects}/>
                ))
                )
          }

          {!loading && filteredProjects.length === 0 && (
            <div className="no-results">
              <p>No projects match your search criteria</p>
              <button onClick={() => handleSearch({})}>Clear Filters</button>
            </div>
          )}
        </main>       
        <Footer page={"Explore"}/>
    </div>
  )
}

export default Explore