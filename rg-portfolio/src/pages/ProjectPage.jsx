import { useParams } from "react-router-dom";

import Project1 from "../pages/Project1";
import Project2 from "../pages/Project2";
import Project3 from "../pages/Project3";
import Project4 from "../pages/Project4";
import Project5 from "../pages/Project5";

const ProjectPage = () => {
  const { id } = useParams();

  const projectMap = {
    1: <Project1 />,
    2: <Project2 />,
    3: <Project3 />,
    4: <Project4 />,
    5: <Project5 />,
  };

  return projectMap[id] || (
    <div style={{ padding: "40px" }}>Project not found</div>
  );
};

export default ProjectPage;