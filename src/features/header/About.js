import preview_clip from "../../images/preview_clip.gif"
const About = () => {
    console.log("in about")
    return (
        <div style={{textAlign: "left", marginLeft: "1rem"}}>
        <div className="mb-4">
            Villy's Instagram is a single page application inspired by Instagram. The frontend is developed with ReactJS, HTML, and CSS.
            The backend API is created with Rails on Ruby. 
        </div>
        <img src={preview_clip} width="200px" />

        <div className="mb-4">
            <h4>Tech Stack: </h4>
            <li> Maintained states in Redux stores and dispatched actions to update state using React Redux.</li>
            <li> Used createAsyncThunk with async/await to communicate with the backend asynchronously. </li>
            <li> Handled URL and state with React Router Dom to allow navigating without refreshing the page.</li>
            <li> Applied Rails Devise gem with devise-jwt to authenticate users on signup, login, and logout.</li>
            <li> Implemented RESTful APIs with Ruby on Rails and communicated with API using AJAX and JSON</li>
            <li> Built responsive UI elements with React Bootstrap, media queries and CSS to enhance user experience in all devices and screen sizes.</li>
            <li> Applied optimization to reduce load time and avoid re-rendering.</li>
            <li> Handled cross browser compatibility with React’s code reusability.</li>
        </div>

        <div className="mb-4">
            <h4>Youtube</h4>
            <a href="https://youtu.be/XIzEtyo8b0Y">https://youtu.be/XIzEtyo8b0Y</a>
        </div>
        <div className="mb-4">
            <h4>Github Links</h4>
            <a href="https://github.com/villysiu/instagram-copycat-v2/tree/master">frontend</a><br/>
            <a href="https://github.com/villysiu/ig-copycat-v2-api">API</a>
            
        </div>

        <div style={{textAlign: "center"}}>
            <h5>Villy Siu</h5>
            <a href="mailto:villysiu@gmail.com" >villysiu@gmail.com</a> 
            &nbsp;|&nbsp;
            
            <a href="https://www.linkedin.com/in/villy-siu-384b81132/">LinkedIn</a>
            &nbsp;|&nbsp;
            <a href="https://github.com/villysiu">GitHub </a>
        </div>
    </div>
    )
}
export default About