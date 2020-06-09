import React,{Component} from 'react'; 

class About extends Component {


    render() {

        return <div >
            <section id="about">
                <h1>About</h1>
                <p>Carlos Mazon is a System's Web Analyst for Amerant Bank, N.A. and decided to learn Full Stack Development for further enrichment and break out to contracted collaborations.
                </p>
                <h2>Follow me on Social Media</h2>
                <div className="social">
                    <a href="https://www.linkedin.com/in/carlosmazon/" target="_blank"><i className="fab fa-linkedin fa-3x"></i></a>
                    <a href="https://github.com/reithal" target="_blank"><i className="fab fa-github fa-3x">  </i></a>
                </div>
            </section>
            </div>
    }
}
export default About;
