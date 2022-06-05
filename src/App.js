import {BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import NewUser from "./pages/new/NewUser";
import List from "./pages/list/List";
import { userInputs, productInputs, donorInputs, adopterInputs, trackInputs } from "./formSource";
import ProductList from "./pages/list/ProductList";
import NewProduct from "./pages/new/NewProduct";
import Donor from "./pages/application/Donor/Donor";
import DonorList from "./pages/list/DonorList";
import Adopter from "./pages/application/Adopter/Adopter";
import AdoptList from "./pages/list/AdoptList";
import TrackList from "./pages/list/TrackList";
import NewTrack from "./pages/new/NewTrack";
import fire from "./firebase";
import {useState, useEffect} from "react"
import DonorimgList from "./pages/list/DonorimgList";
import AdopterimgList from "./pages/list/AdopterimgList";

function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" >
            <Route  index element={<Login/>}/>
            <Route path="home"  element={<Home/>}/>
            <Route path="users">
              <Route 
                index 
                element={
                    <List/>    
                }
              />
              
              <Route 
                path="new" 
                element={<NewUser inputs={userInputs} title="Add New User"/>
}
              />
           </Route>
           <Route path="products">
              <Route 
                index 
                element={
                
                    <ProductList/>
                  
                }
              />
            
              <Route 
                path="new" 
                element={
                
                    <NewProduct inputs={productInputs} title="Add New Child"/>
                  
                }
              />    
           </Route>
           
           <Route path="appDon">
              <Route 
                index 
                element={
                
                    <DonorList/>
                  
                }
              /> 
             
            <Route 
                path="newDonor" 
                element={
                
                    <Donor inputs={donorInputs} title="Add New Donor Application"/>
                  
                }
              />
         </Route>

         <Route path="appAdopt">
              <Route 
                index 
                element={
                
                    <AdoptList/>
                  
                }
              /> 
             
            <Route 
                path="newadopt" 
                element={
                
                    <Adopter inputs={adopterInputs} title="Add New Adopter Application"/>
                  
                }
              />
         </Route>

         <Route path="Track">
              <Route 
                index 
                element={
                
                    <TrackList/>
                  
                }
              /> 
             
            <Route 
                path="newTrack" 
                element={
                
                    <NewTrack inputs={trackInputs} title="Add New Track"/>
                  
                }
              />
         </Route>

         <Route path="Donorimg">
              <Route 
                index 
                element={
                    <DonorimgList/>
                }
              /> 
         </Route>

         <Route path="Adopterimg">
              <Route 
                index 
                element={
                    <AdopterimgList/>
                }
              /> 
         </Route>
         </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
