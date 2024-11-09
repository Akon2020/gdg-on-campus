import { projects } from "@/data";

const ProjetsRecents = () => {
  return (
    <div className="py-20">
      <h1 className="heading">
        Une petite selection de {' '}
        <span className="text-purple">nos recents projets</span>
      </h1>
      <div className="flex flex-wrap items-center justify-center p-4 gap-16 mt-10">
        {projects.map((project)=>{
            <div
              key={project.id}
              className="lg:min-h-[32.5rem] h-[25rem] flex items-center justify-center sm:w-96 w-[80vw]"
            >
              {project.title}
            </div>;
        })}
      </div>
    </div>
  )
}

export default ProjetsRecents
