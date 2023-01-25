import Padding from './components/Showcase/Padding'
import SliderWrapper from './components/SliderWrapper'

function App() {

  return (
    <div className="App">
      <SliderWrapper child={<Padding />} />
      <SliderWrapper child={<Padding />} />
    </div>
  )
}

export default App
