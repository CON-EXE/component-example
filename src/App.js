import Header from "./component/Header";
import User from "./component/User";
import Gallery from "./component/Gallery";
import Footer from "./component/Footer";

function App() {
  let title = 'Intro to React';
  let isLoggedIn = false;

  const navLinks = [
    { index: 0, name: 'About', url: 'https://www.components.com/about'},
    { index: 1, name: 'Projects', url: 'https://www.components.com/projects'},
    { index: 2, name: 'Contact', url: 'https://www.components.com/contact'},
    { index: 3, name: 'Blogs', url: 'https://www.components.com/blogs'}
  ];

  // This might break the whole thing

  const movies = [
    {
      id: 1001,
      title: 'Jurassic Park',
      poster: 'https://raw.githubusercontent.com/mrspecht/media/main/img/jurassic-park.jpg'
    },
    {
      id: 1002,
      title: 'The Lion King',
      poster: 'https://raw.githubusercontent.com/mrspecht/media/main/img/the-lion-king.jpg'
    },
    {
      id: 1003,
      title: 'Avengers: Infinity War',
      poster: 'https://raw.githubusercontent.com/mrspecht/media/main/img/avengers-infinity-war.jpg'
    },
    {
      id: 1004,
      title: 'The Shining',
      poster: 'https://raw.githubusercontent.com/mrspecht/media/main/img/the-shining.jpg'
    },
    {
      id: 1005,
      title: 'The Batman',
      poster: 'https://raw.githubusercontent.com/mrspecht/media/main/img/the-batman.jpg'
    },
    {
      id: 1006,
      title: 'The Godfather',
      poster: 'https://raw.githubusercontent.com/mrspecht/media/main/img/the-godfather.jpg'
    },
    {
      id: 1007,
      title: 'Spider-Man: No Way Home',
      poster: 'https://raw.githubusercontent.com/mrspecht/media/main/img/spider-man-no-way-home.jpg'
    },
    {
      id: 1008,
      title: 'Rocky',
      poster: 'https://raw.githubusercontent.com/mrspecht/media/main/img/rocky.jpg'
    },
    {
      id: 1009,
      title: 'JFK',
      poster: 'https://raw.githubusercontent.com/mrspecht/media/main/img/jfk.jpg'
    },
    {
      id: 1010,
      title: 'The Exorcist',
      poster: 'https://raw.githubusercontent.com/mrspecht/media/main/img/the-exorcist.jpg'
    }
 
  ];

  // const footerIcons [
  //   "fa-brands fa-facebook",
  //   "fa-brands fa-linkedin-in",
  //   "fa-brands fa-github"
  // ];

  

  return (
    <>
      <Header title={title} navLinks={navLinks} isLoggedIn={isLoggedIn} />
      <main>
        <div className='container'>
          <User name='John' profession='Software Dev' email='john@email.com' />
          <User name='Connor' profession='Frontend Dev' email='con@gmail.com' />
          <Gallery list={movies} />
        </div>
      </main>
      <Footer navLinks={navLinks}/>
    </>
  );
}

export default App;
