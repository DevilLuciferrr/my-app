import React, {useState} from 'react'

export default function About() {
  const [mystate, setmyState] = useState({
    color:'black',
    backgroundColor:'white',
  });
  const [btnText, setbtnText] = useState("Enable Dark Mode");

  const darkmode = ()=>{
      if(mystate.color==='#343a40'){
        setmyState({
            color:'white',
            backgroundColor:'#343a40',
        })
        setbtnText("Enable Light Mode");
      }
      else{
        setmyState({
            color:'#343a40',
            backgroundColor:'white',
        })
        setbtnText("Enable Dark Mode");
      }
    };
    return (
    <div className='container'>
        <h2>About Us</h2>
        <div className="accordion" id="accordionExample" style={mystate}>
        <div className="accordion-item" style={mystate}>
            <h2 className="accordion-header" id="headingOne" style={mystate}>
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" style={mystate} aria-controls="collapseOne">
                Accordion Item #1
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
        <div className="accordion-item" style={mystate}>
            <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button collapsed" style={mystate} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                Accordion Item #2
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
            </div>
            </div>
        </div>
        </div>
        <div className="container">
            <button onClick={darkmode} className="btn btn-dark my-2">{btnText}</button>
        </div>
    </div>
  )
}

