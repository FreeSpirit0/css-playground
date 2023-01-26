import ExamplePanel from "./components/ExamplePanel";
import MarginXY from "./components/Examples/Margins/MarginXY";
import PaddingXY from "./components/Examples/Paddings/PaddingXY";
import Section from "./components/Section";
import PaddingX from "./components/Examples/Paddings/PaddingX";
import Sidebar from "./layouts/Sidebar";
import Navbar from "./layouts/Navbar";
import PaddingY from "./components/Examples/Paddings/PaddingY";
import MarginX from "./components/Examples/Margins/MarginX";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <div className="flex-1 flex-col ml-64 mt-2">

        {/* Padding Section */}
        <Section
          headerName="Padding"
          child={
            <>
              <ExamplePanel
                exampleHeader="Padding All"
                exampleDescription="Padding in all direction"
                exampleChild={<PaddingXY />}
              />
              <hr className="m-4" />
              <ExamplePanel
                exampleHeader="Padding X"
                exampleDescription="Padding in X axis"
                exampleChild={<PaddingX />}
              />
              <hr className="m-4" />
              <ExamplePanel
                exampleHeader="Padding Y"
                exampleDescription="Padding in Y axis"
                exampleChild={<PaddingY />}
              />
            </>
          }
          categoryName={"Spacing"}
        />

        {/* Margin Section */}
        <Section
          headerName="Margin"
          child={
            <>
              <ExamplePanel
                exampleHeader="Margin All"
                exampleDescription="Margin in all direction"
                exampleChild={<MarginXY />}
              />
              <hr className="m-4" />
              <ExamplePanel
                exampleHeader="Margin X"
                exampleDescription="Margin in X axis"
                exampleChild={<MarginX />}
              />
            </>
          }
          categoryName={"Spacing"}
        />
        
      </div>
    </div>
  );
}

export default App;
