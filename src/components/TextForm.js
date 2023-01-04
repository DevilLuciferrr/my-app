import React, {useState} from 'react'
import PropTypes from 'prop-types'


export default function TextForm(props) {
    const handleUpClick = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showalert("Converted to Uppercase","success")
    }
    const handleDownClick = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showalert("Converted to Lowecase","success")
    }
    const handleClearClick = ()=>{
        let newText = '';
        setText(newText);
        props.showalert("Cleared Texy","success")
    }
    const handleCapClick = ()=>{
        let newText = text.replace(/(^\w{1})|(\s+\w{1})/g, letter => letter.toUpperCase());
        setText(newText);        
    }
    const handleOnChange = (event)=>{
        setText(event.target.value)
    }
    const [text, setText] = useState('');
return (
    <>
    <div className='container'>
        <h5>{props.heading}</h5>
        <div className="mb-3">
            <textarea className="form-control" id="exampleFormControlTextarea1" onChange={handleOnChange} value={text} rows="8"></textarea>
        </div>
        <button className="btn btn-success mx-2" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleDownClick}>Convert to LowerCase</button>
        <button className="btn btn-dark mx-2 my-2" onClick={handleCapClick}>Capitalize First Word</button>
        <button className="btn btn-danger mx-2 my-2" onClick={handleClearClick}>Clear Text</button>
    </div>
    <div className="container my-2">
        <h5>Your text Summary</h5>
        <p>{text.split(" ").length} Words and {text.split("").length} Characters</p>
        <p>Approximate time to read text= {text.split(" ").length * 0.008} minutes</p>
        <h5>Preview</h5>
        <p>{text}</p>
    </div>
    </>
  )
}

TextForm.propTypes = {heading:PropTypes.string}
TextForm.defaultProps = {heading:"Enter text below"}