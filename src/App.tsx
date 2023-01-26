import Navbar from './components/Navbar'
import Margin from './components/Showcase/Margin'
import Padding from './components/Showcase/Padding'
import Section from './components/Showcase/Section'
import SliderWrapper from './components/SliderWrapper'

function App() {

  return (
    <div className="App">
      <Navbar />
      <div className='flex flex-col'>
        <Section headerName='Padding' child={<SliderWrapper child={<Padding />} />}/>
        <Section headerName='Margin' child={<SliderWrapper child={<Margin />} />}/>      
      </div>
    </div>
  )
}

export default App
