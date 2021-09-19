import logo from './logo.svg';
import './App.css';
import tutorialsData from './tutorials.js'
import { useEffect, useState } from 'react';


function App() {
  return (
    <div className="App">
      <Header></Header>
      <Banner></Banner>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

// header part
function Header() {
  return (
    <div>
      <nav className="navbar">
        <a href="##">That js dude</a>
        <button>Sign in</button>
      </nav>
    </div>
  )
}

// banner part
function Banner() {
  return (
    <div className="banner">
      <h1>Exclusive React Workshop for <br /> beginners!</h1>
      <p>Once in a year opportunity to learn and build your <a href="##">First react app</a></p>
      <button>Learn more « </button>
    </div>
  )
}

function Main() {
  return (
    <div className="container">
      <Left></Left>
      <Right></Right>
    </div>
  )
}

function Left() {
  const [tutorials, setTutorial] = useState([])
  useEffect(()=>{
    setTutorial(tutorialsData)
  },[ ])
  return (
    <div className="left">
      <h2>JS Confusing Parts</h2>
      <p>Understand this, scope, hoisting, closure, inheritance, bind, call, apply, prototype, event delegation, dom, timers and many more caveats.</p>

      <section className="tutorial">
      {tutorials.map(tutorial=><Tutorial title={tutorial.title} desc={tutorial.desc}></Tutorial>)}
        
       
      </section>
    </div>
  )
}

function Right() {
  return (
    <div className="right">
      <Training></Training>
      <Videos></Videos>
    </div>
  )
}

function Tutorial(props) {
 
  return (
    <div>
      <h2><a href="##">{props.title}</a></h2>
      <p>{props.desc}</p>
      <button>learn more » </button>
    </div>
  )
}

function Training() {
  return (
    <div>
      <h2>Personal Training for <br /> $30</h2>
      <p>If you need career guide, personal interview tips, mock interview, Life Coaching, or anything else, you can book me for 30 min. Just pay $30 via paypal to Codinism (my company) and then book a time slot You can Book me</p>
    </div>
  )
}

function Videos() {
  return (
    <div>
      <h2>Recent Videos</h2>
      <ul>
        <li><a href="##">15+ tricks for dev tool</a></li>
        <li><a href="##">Understanding this</a></li>
        <li><a href="##">How Browsers works in 4 min</a></li>
        <li><a href="##">be expert in JS Array</a></li>
        <button>More on youtube »</button>

      </ul>
    </div>
  )

}

function Footer() {
  return (
    <div style={{ textAlign: 'center',backgroundColor:'rgb(208 208 208)',padding:'10px 0' }}>
      <p>© that JS Dude 2021, a codinism initiative.</p>
      <p>Hosted by XeonBD</p>
    </div>
  )
}
export default App;
