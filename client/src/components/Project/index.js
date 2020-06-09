import React,{Component} from 'react'; 
import Projects from '../../assets/projects.js';
class Project extends Component {


    render() {

        return (
          <div id="projects">
            <h1>Projects</h1>
              <div className="projects">
                {Projects.map( item => (
                  <div className="card" key={item.id}>
                    <a href={item.demoUrl} target="_blank" alt="Demo Site" data-toggle = "tooltip" title = "Demo Site on GitHub">
                    <img src={item.src} alt={item.title} />
                    </a>
                    <div className="container">
                      <a href={item.linkUrl} target="_blank" alt="Repo Site" data-toggle = "tooltip" title = "Repository on GitHub">{item.title}</a>
                    </div>
                  </div>
                ))}
              </div>
          </div>
        )
    }
}
export default Project;