import React from 'react'
import "bootstrap/dist/css/bootstrap.css"
const ListGroup = () => {
  return (
    // use <></> implicitly fragment
  <> 
   <ul className="list-group">
  <li className="list-group-item active">Cras justo odio</li>
  <li className="list-group-item">Dapibus ac facilisis in</li>
  <li className="list-group-item">Morbi leo risus</li>
  <li className="list-group-item">Porta ac consectetur ac</li>
  <li className="list-group-item">Vestibulum at eros</li>
</ul>
  </>
  )
}

export default ListGroup