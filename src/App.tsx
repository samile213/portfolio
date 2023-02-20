import './App.css';
import { Footer } from './components/Footer/Footer';
import { Home } from './components/Intro/Intro';
import { Projects } from './components/Projects/Projects';

const App = () => {
  return (
    <div>
      <Home />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
