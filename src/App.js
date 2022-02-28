
import './index.css';
import Navbar from './components/Navbar';
import NewsCom from './components/NewsCom';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";


function App() {
  const API="e1aaf022ae094549a22d3e50ca8ddbb2";
  return <div>
      <Router>
      <Navbar/>
      <Routes>
        <Route  exact strict path="/" caseSensitive={false} element={<NewsCom key="refresh"  category="general" API={API}/>} />
        <Route  exact path="/Home" caseSensitive={false} element={<NewsCom key="general" category="general" API={API}/>} />
        <Route  exact path="/Business" caseSensitive={false} element={<NewsCom key="business" category="business" API={API}/>} />
        <Route  exact path="/Entertainment" caseSensitive={false} element={<NewsCom key="entertainment" category="entertainment" API={API}/>} />
        <Route  exact path="/Health" caseSensitive={false} element={<NewsCom key="health" category="health" API={API}/>} />
        <Route  exact path="/Science" caseSensitive={false} element={<NewsCom key="science" category="science" API={API}/>} />
        <Route  exact path="/Sports" caseSensitive={false} element={<NewsCom key="sports" category="sports" API={API}/>} />
        <Route  exact path="/Technology" caseSensitive={false} element={<NewsCom key="technology" category="technology API={API}"/>} />
      </Routes>
      </Router>
      </div>

}

export default App;
