import React from 'react'
import Html from '../Certificates/Html.jpeg'
import Css from '../Certificates/Css.jpeg'
import Js from '../Certificates/js.jpeg'
import Sql from '../Certificates/Sql.jpeg'
import Path from '../Certificates/CareerPath.jpeg'
import Responsive from '../Certificates/Responsive.jpeg'
import react from '../Certificates/React.jpeg'
import Python from '../Certificates/Python.jpeg'
import Java from '../Certificates/java.jpeg'
import Networking1 from '../Certificates/Networking-1.jpeg'
import Networking2 from '../Certificates/Networking-2.jpeg'
import Networking3 from '../Certificates/Networking-3.jpeg'
function Certificate() {
  return (
    <div id='certificate' className="certificates">
        <h2 className="certificates-title">Education and Certifications</h2>
        <div className="certificates-cont">
            <img src={Html} alt="html" className="certificate-img" />
            <img src={Css} alt="Css" className="certificate-img" />
            <img src={Js} alt="Js" className="certificate-img" />
            <img src={Sql} alt="Sql" className="certificate-img" />
            <img src={Path} alt="Path" className="certificate-img" />
            <img src={Responsive} alt='responsive' className="certificate-img" />
            <img src={react} alt="react" className="certificate-img" />
            <img src={Python} alt="python" className="certificate-img" />
            <img src={Java} alt="java" className="certificate-img" />
            <img src={Networking1} alt="Net-1" className="certificate-img" />
            <img src={Networking2} alt="Net-2" className="certificate-img" />
            <img src={Networking3} alt="Net-3" className="certificate-img" />
        </div>
    </div>
  )
}

export default Certificate