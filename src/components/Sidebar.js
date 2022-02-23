import './Sidebar.css'

function Sidebar() {
  return (
    <div className="sidebar">
        <div className="logo">
            <h4>Stock Analyzer App</h4>
        </div>
          <div className='navbar'>
              <div className='navbar-option'>Logo Market</div>
              <div className='navbar-option'>Logo Dashboard</div>
              <div className='navbar-option'>Logo Portfolio</div>
              <div className='navbar-option'>Logo News</div>
              <div className='navbar-option'>Logo Settings</div>
          </div>
    </div>
  );
}

export default Sidebar;
