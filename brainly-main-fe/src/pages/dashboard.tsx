import { useState } from "react";
import SideBar from "../component/sidebar";
import { CreateContentModal } from "../component/CreateContentModal";
import { Button } from "../component/button";
import PlusIcon, { ShareIcons } from "../icons/PlusIcon";
import { Card } from "../component/card";


function Dashboard() {

  const [modalOpen , setModalOpen]=useState(false)
  
  
  return ( 
  <div>
   <SideBar/>
    <div className="p-4 ml-72 min-h-screen bg-gray-100 border-gray-300  border-1" >
          <CreateContentModal  open={modalOpen} onClose={()=>{setModalOpen(false)}}/>
       <div className=" flex justify-end  m-2 gap-3 items-center">
            <div className="hover:scale-102">
              <Button 
                startIcon={<ShareIcons size="md" />}
                size="sm"
                variant="primary"
                text="Share"
              ></Button>
            </div>
            <div className="hover:scale-102">
              <Button
                startIcon={<PlusIcon size="lg" />}
                size="sm"
                variant="secondary"
                text="Add to list"
                onClick={()=>setModalOpen(true)}
              ></Button>
            </div>
      </div>

      <div className="flex gap-4 mt-4">
      
          <Card
          type="twitter"
          link="https://x.com/karaan_dev/status/1909634179135910023"
          title="twitter"
        />
          <Card
            type="youtube"
            link={"https://youtu.be/TU1HQnU_9ME?si=KmGW78yLy54HHQmm"}
            title="youtube"
          />
              {/* <Card
            type="twitter"
            link="https://x.com/karaan_dev/status/1909634179135910023"
            title="twitter"
          />  */}

      </div> 
    </div>
  </div>
  );
}

export default Dashboard;
