import HomeJumbotron from '../components/HomeJumbotron.jsx';
import HomepageItems from '../components/HomePageItems.jsx';
import Contact from '../components/Contact.jsx';
function Home() {
  return (
    <>
      <HomeJumbotron id="top" />
      <HomepageItems />
      <Contact />
    </>
  );
}

export default Home;