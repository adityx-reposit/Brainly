import { useState } from "react";
import SideBar from "../component/sidebar";
import { CreateContentModal } from "../component/CreateContentModal";
import { Button } from "../component/button";
import PlusIcon, { ShareIcons } from "../icons/PlusIcon";
import { Card } from "../component/card";
import { useContent } from "../hooks/useContent";


function Dashboard() {

  const [modalOpen , setModalOpen]=useState(false)
  const contents = useContent() || []; // Ensure contents is always an array
  
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
        {contents.map(({type,link,title})=>

            <Card
            type={type}
            link={link}
            title={title}
            />
          )}
         

      </div> 
    </div>
  </div>
  );
}

export default Dashboard;
