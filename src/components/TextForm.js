import React, { useState } from 'react'



export default function TextForm(props) {



    const handleUpClick = () => {
        // console.log("uper case clicked" + text);
        let newtext = text.toUpperCase()
        // console.log(newtext);
        setText(newtext)
        props.showalert('converted to upperCase','success')
    }
    const handleOnChange = (e) => {
        // console.log("on change");
        setText(e.target.value)
    }

    const handleDownClick = ()=>{
         setText(text.toLowerCase())
         props.showalert('converted to lowerCase','success')
    }
    const clear1 = () => {
        setText('')
        props.showalert('cleared textarea','success')
    }

    const handlcopy = ()=>{
            let text = document.querySelector('#myBox')
            text.select()
            navigator.clipboard.writeText(text.value)
            document.getSelection().removeAllRanges()
            props.showalert('copied','success')
    }
    const handlextraspace = ()=>{
         let newtext = text.split(/[ ]+/)
         setText(newtext.join(' '))
         props.showalert('Removed extra spaces','success')
    }

    
    function voice1 (){
       let utrnc = new SpeechSynthesisUtterance(text);
       speechSynthesis.speak(utrnc);
   }

   const pause1 = ()=>{
    let utrnc = new SpeechSynthesisUtterance(text);
     speechSynthesis.pause(utrnc)
   }
   const resume1 = ()=>{
    let utrnc = new SpeechSynthesisUtterance(text);
     speechSynthesis.resume(utrnc)
   }
   const stop1 = ()=>{
    let utrnc = new SpeechSynthesisUtterance(text);
     speechSynthesis.cancel(utrnc)
   }


   
  
   
    const [text, setText] = useState('');
    return (
        <>
            <div>

                <div className="container my-3" style={{backgroundColor:'{props.mode==="light"?"black":"white"}',color: props.mode==='light'?'black':'white'}}>
                    <h1>{props.textarea} </h1>
                    <textarea className={`form-control bg-${props.mode==='light'?'white':'black'} text-${props.mode==='light'?'black':'white'} `}    value={text} onChange={handleOnChange}    id="myBox" rows="10"></textarea>

                    <button disabled={text.length===0}  className="btn btn-danger my-3 my-3" onClick={handleUpClick} >Convert to UpperCase</button>

                    <button  disabled={text.length===0} className="btn btn-danger my-3 mx-3" onClick={handleDownClick} >Convert to LowerCase</button>

                    <button  disabled={text.length===0} className="btn btn-danger mx-3 my-3" onClick={clear1} >Clear</button>

                    <button  disabled={text.length===0} className="btn btn-danger mx-3 my-3" onClick={handlcopy} >CopyText</button>

                    <button  disabled={text.length===0} className="btn btn-danger mx-3 my-3" onClick={handlextraspace} >RemoveExtraSpace</button>
                    <hr />
                    <button  disabled={text.length===0} className="btn btn-danger mx-3 my-3" onClick={voice1} >Text To Voice</button>

                    <button  disabled={text.length===0} className="btn btn-danger mx-3 my-3" onClick={pause1} >Pause</button>
                    <button  disabled={text.length===0} className="btn btn-danger mx-3 my-3" onClick={resume1} >Resume</button>
                    <button  disabled={text.length===0} className="btn btn-danger mx-3 my-3" onClick={stop1} >Stop</button>
                    <hr />
                   
                </div>

            </div>

            <div className="container" style={{backgroundColor:'{props.mode==="light"?"black":"white"}',color: props.mode==='light'?'black':'white'}}>
                <h2>Your Text Summary</h2>
                <p>{text.split(/\s+/).filter((ele)=>{return ele.length !==0}).length} words And  {text.length} characters</p>
                <p>You can read this within {(0.008*text.split('').filter((ele)=>{return ele.length !==0}).length).toFixed(3)} minutes </p>
            </div>
            <div className="container"  style={{backgroundColor:'{props.mode==="light"?"black":"white"}',color: props.mode==='light'?'black':'white'}}>
                <h2>Summary Of What You Entered :-</h2>
                <p> =⫸ {text.length>0? text : 'Nothing to preview here'} </p>
            </div>



            <div className='container '  style={{backgroundColor:'{props.mode==="light"?"black":"white"}',color: props.mode==='light'?'black':'white'}}>
                <h2>░▒▓█► About This App :-</h2>
                <li>✪  <b>This app is a comprehensive text manipulation tool, encompassing features like word and character counting, along with the ability to convert text to uppercase or lowercase. What sets it apart is the distinctive "tocash" transformation, adding a unique and potentially specialized function to the tool. This makes the app a versatile solution for users dealing with diverse text-related tasks. Whether you need quick analyses of word and character frequencies or want to modify the case of your text, this app has you covered. The inclusion of the "tocash" feature hints at potential financial or currency-related text transformations, catering to a broader range of user needs. With a user-friendly interface and a variety of functions, it serves as a practical and efficient tool for anyone working with text, offering a seamless experience for tasks ranging from simple text adjustments to more intricate analyses. Overall, it's a robust text manipulation app that combines essential functions with a unique twist, making it a valuable asset for users across different domains.</b></li>
            </div>
        </>
    )
}
