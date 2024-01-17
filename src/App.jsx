import './App.css'
import Route from './components/Route';
import Topic from './components/Topic';
import Header from './components/header';
import Sections from './components/sections';
import Box from './components/Box';
import Controllers from './components/Controllers';
import Middlelogo from './components/Middlelogo';
import FAQ from './components/FAQ';
function App() {

  return (
    <>
      <Header/>
      <Route/>
      <Topic/>
      <Sections/>
      <Box/>
      <Controllers/>
      <Middlelogo/>
      <FAQ/>
    </>
  )
}

export default App
