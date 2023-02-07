import React,{useState} from 'react'

export default function TextForm(props) {
    const onClickUpperCase = ()=>{
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to UpperCase!')
    }

    const onClickLowerCase = ()=>{
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to LowerCase!')
    }

    const onClickClearText = ()=>{
        let newText = '';
        setText(newText);
        props.showAlert('Text Cleared successfuly!')
    }

    const onClickCopyText = ()=>{
        let copyText = document.getElementById('textBox');
        copyText.select();
        navigator.clipboard.writeText(copyText.value);
        props.showAlert('Text Copied successfuly!')
    }

    const onClickRemoveExtraSpace = ()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert('Extra spaces removed!')
    }

    const onChangeHandler = (event)=>{
        setText(event.target.value);
    }

    const [text,setText]=useState('');

  return (
    <> 
    <div className='container my-3'>
        <h2>{props.heading}</h2>
        <div className="mb-3">
           <textarea className="form-control" id="textBox" rows="8" value={text} onChange={onChangeHandler}></textarea>
        </div>
        <button className='btn btn-primary mx-1 my-1' onClick={onClickUpperCase}>Convert to UpperCase</button>
        <button className='btn btn-primary mx-1 my-1' onClick={onClickLowerCase}>Convert to LowerCase</button>
        <button className='btn btn-primary mx-1 my-1' onClick={onClickClearText}>Clear Text</button>
        <button className='btn btn-primary mx-1 my-1' onClick={onClickCopyText}>Copy Text</button>
        <button className='btn btn-primary mx-1 my-1' onClick={onClickRemoveExtraSpace}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3">
        <h2>Your text summary</h2>
        <p>{text.split(' ').length} words and {text.length} characters</p>
        <p>{0.008 * text.split(' ').length} Minutes read</p>
        <h3>Preview</h3>
        <p>{text}</p>
    </div>
    </>
  )
}
