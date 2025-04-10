import "./App.css";
import { Button } from "./component/button";
import { Card } from "./component/card";
import PlusIcon, { ShareIcons } from "./icons/PlusIcon";

function App() {
  return (
    <div className="p-4">

    <div className="flex justify-end mt-6 m-2 gap-3">

          <Button
            endIcon={<ShareIcons size="md" />}
            size="sm"
            variant="primary"
            text="Share"
          ></Button>
          <Button
            startIcon={<PlusIcon size="lg" />}
            size="sm"
            variant="secondary"
            text="Add to list"
          ></Button>
    </div>

    <div className="flex gap-4 mt-4">
  
      <Card
        type="youtube"
        link={"https://youtu.be/TU1HQnU_9ME?si=KmGW78yLy54HHQmm"}
        title="youtube"
      />
        <Card
        type="twitter"
        link="https://x.com/karaan_dev/status/1909634179135910023"
        title="twitter"
      />

    </div> 
    </div>
  );
}

export default App;
