import Margin from './components/Showcase/Margin'
import Padding from './components/Showcase/Padding'
import SliderWrapper from './components/SliderWrapper'

function App() {

  return (
    <div className="App">
      <SliderWrapper child={<Padding />} />
      <SliderWrapper child={<Margin />} />
    </div>
  )
}

export default App
