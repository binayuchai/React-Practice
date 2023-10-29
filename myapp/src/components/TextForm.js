import React, { useState } from 'react'

export default function TextForm(props) {
    const handleClick = ()=>{
        console.log('Button clicked',text);
        setText("You have clicked on handleClick")
        let newText = text.toUpperCase()
        setText(newText)
    }
    const handleLowerClick = ()=>{
        let newText = text.toLowerCase()
        setText(newText)

    }
 
    const handleChange = (event)=>{
        setText(event.target.value)
    }
    const handleClearClick = ()=>{
        if (text.length > 0){

            setText("")
        }
        else{
            props.showAlert("Your text field is already empty","danger")
        }
     
    }
    

    const[text,setText] = useState('');
    // To change the state of text 
       //setText('Enter text');
    let setContent;
    if(props.mode === "info")
    {
        setContent = (
            <div>
         <div className="mb-3">
        <textarea className="form-control" placeholder="Enter your text" value={text} id="myBox" onChange={handleChange} style={{background:props.mode ==='light'? 'white':'#0dcaf0',color:props.mode ==='light'? 'black':'white'}} rows="8"></textarea>
        </div>
            </div>

        );
    }else if(props.mode === "secondary")
    {
        setContent=(
     
                  <div>
                  <div className="mb-3">
                   <textarea className="form-control" placeholder="Enter your text" value={text} id="myBox" onChange={handleChange} style={{background:props.mode ==='light'? 'white':'#6c757d',color:props.mode ==='light'? 'black':'white'}} rows="8"></textarea>
                   </div>
                       </div>
        );
    }
    else{
        setContent = (
            <div>
            <div className="mb-3">
             <textarea className="form-control" placeholder="Enter your text" value={text} id="myBox" onChange={handleChange} style={{background:props.mode ==='light'?'white':'#212529',color:props.mode ==='light'? 'black':'white'}} rows="8"></textarea>
            </div>
          </div>
        );
    }
  return (

    <>
    <div className="container">


        <section className="my-3">

        <h1 style={{color:props.mode ==='light'?'black':'white' }}>{props.heading}</h1>
        {/* <div className="mb-3">
        <textarea className="form-control" placeholder="Enter your text" value={text} id="myBox" onChange={handleChange} style={{background:props.mode ==='light'? 'white':'#212529',color:props.mode ==='light'? '#212529':'white'}} rows="8"></textarea>
        </div> */}
            {setContent}

        <button  className="btn btn-primary" onClick={handleClick} type="submit">Convert to Uppercase</button>
        <button  className="btn btn-secondary mx-2" onClick={handleLowerClick} type="submit">Convert to Lowercase</button>
        <button  className="btn btn-danger mx-2" onClick={handleClearClick} type="submit">Clear Text</button>



        </section>
   




        {/* <section style={{color:props.mode ==='light' && flagColor === 'dark'?'black':'white'}} className="mt-4">
            <h2 >Your Text Summary</h2>
            <p>{text.length === 0?0:text.split(" ").length} words and {text.length} characters</p>
            <p>{0.008 * text.split(" ").length} Minutes takes to read</p>

            <h2>Preview</h2>
            <p>{text}</p>
             


        </section> */}

        <section style={{color:props.mode ==='light'?'black':'white'}} className="mt-4">
        <h2>Your Text Summary</h2>
        <p>{text.length === 0?0:text.split(" ").length} words and {text.length} characters</p>
        <p>{0.008 * text.split(" ").length} Minutes takes to read</p>

        <h2>Preview</h2>
        <p>{text}</p>
        </section>
    </div>
    
        
        
        
      
    </>
  )
}
