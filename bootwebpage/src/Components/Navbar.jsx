import React from 'react'

const Navbar = ({menu,setMenu}) => {

    const toggle=()=>{
        setMenu(!menu)
    } 

  return (
    <div id='right'>
      <nav class="navbar navbar-expand ">
          <div class="container-fluid-lg border-bottom  ">
            {/* <span class="navbar-toggler-icon"></span> */}
            <i style={{ fontSize: "25px" }} onClick={toggle} class="bi bi-list me-auto p-2"></i>
            <div class="input-group sb p-2">
              <i class="bi bi-search input-group-text ns "></i>
              <input class="form-control me-2 ip" placeholder="Search..." />
            </div>
            <i class="bi bi-bell"></i>
          </div>
        </nav>
    </div>
  )
}

export default Navbar
