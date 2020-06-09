import React,{Component} from 'react';
import video from "../../assets/images/hd1484.mov" ;

class Video extends Component {

    render() {
        return <div className="showcase">
        <div className="video-container">
          <video src={video} autoplay muted loop />
        </div>
        <div className="content">
          <h1>Designing for you</h1>
          <h3>Carlos Mazon</h3>
            <h5>Web Developer</h5>
          <a href="#about" className="btn">Read More</a>
          <a href="#projects" className="btn">Projects</a>
        </div>
      </div>
    }
}
export default Video;