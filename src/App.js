
import './App.css';
import Ed from './EducationDetails/Ed';
import About from './About/About';
import {TabView, TabPanel} from 'primereact/tabview';
import 'bootstrap/dist/css/bootstrap.css';

function App() {
  // let img1="public\SiteAssets\background-img.jpg";
  return (
    <>
    <div className='homeContainer' style={{backgroundImage: 'url("public/SiteAssets/background-img.png")'}}>
    <div className='home__bg-image'>
    <div className="card">
      <TabView>
        <TabPanel header="About" headerStyle={{padding:"1rem",background:"blue", borderRadius:"5px", margin:"1rem"}}><About/></TabPanel>
        <TabPanel header="Education Details" headerStyle={{padding:"1rem",background:"blue",borderRadius:"5px", margin:"1rem"}}><Ed/></TabPanel>
      </TabView>
      {/* <img className='homeImg' src='public/SiteAssets/background-img.jpg' alt='' /> */}
    </div>
    
    </div>
    </div>
    </>
  );
}

export default App;
