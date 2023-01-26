import Navbar from './components/Layout/Navbar'
import Sidebar from './components/Layout/Sidebar'
import Margin from './components/Showcase/Margin'
import Padding from './components/Showcase/Padding'
import Content from './components/Showcase/Section'
import SliderWrapper from './components/SliderWrapper'

function App() {

  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <div className='flex-1 flex-col ml-64 mt-2'>
        <Content headerName='Padding' child={<SliderWrapper child={<Padding />} />} categoryName={'Spacing'}/>
        <Content headerName='Margin' child={<SliderWrapper child={<Margin />} />} categoryName={'Spacing'}/>      
      </div>
    </div>
  )
}

export default App
