import ExamplePanelWithSlider from "./components/ExamplePanel/ExamplePanelWithSlider";
import MarginXY from "./components/Examples/Margins/MarginXY";
import PaddingXY from "./components/Examples/Paddings/PaddingXY";
import Section from "./components/Section";
import PaddingX from "./components/Examples/Paddings/PaddingX";
import Sidebar from "./layouts/Sidebar";
import Navbar from "./layouts/Navbar";
import PaddingY from "./components/Examples/Paddings/PaddingY";
import MarginX from "./components/Examples/Margins/MarginX";
import ExamplePanelWithCheckBox from "./components/ExamplePanel/ExamplePanelWithCheckBox";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Sidebar />
      <div className="flex-1 flex-col ml-64 mt-2">
        {/* Padding Section */}
        <section id="padding">
          <Section
            headerName="Padding"
            child={
              <>
                <ExamplePanelWithSlider
                  exampleHeader="Padding All"
                  exampleDescription="Padding in all direction"
                  exampleChild={<PaddingXY />}
                />
                <hr className="m-4" />
                <ExamplePanelWithSlider
                  exampleHeader="Padding X"
                  exampleDescription="Padding in X axis"
                  exampleChild={<PaddingX />}
                />
                <hr className="m-4" />
                <ExamplePanelWithSlider
                  exampleHeader="Padding Y"
                  exampleDescription="Padding in Y axis"
                  exampleChild={<PaddingY />}
                />
              </>
            }
            categoryName={"Spacing"}
          />
        </section>

        {/* Margin Section */}
        <section id="margin">
          <Section
            headerName="Margin"
            child={
              <>
                <ExamplePanelWithSlider
                  exampleHeader="Margin All"
                  exampleDescription="Margin in all direction"
                  exampleChild={<MarginXY />}
                />
                <hr className="m-4" />
                <ExamplePanelWithSlider
                  exampleHeader="Margin X"
                  exampleDescription="Margin in X axis"
                  exampleChild={<MarginX />}
                />
              </>
            }
            categoryName={"Spacing"}
          />
        </section>

        <section id="flex">
          <Section
            headerName="Flex"
            child={<ExamplePanelWithCheckBox options={["flex-start", "flex-end"]} exampleHeader={"Flex"} exampleDescription={"Best properties exist"} exampleChild={undefined} />}
            categoryName={"Flex"}
          />
        </section>
      </div>
    </div>
  );
}

export default App;
