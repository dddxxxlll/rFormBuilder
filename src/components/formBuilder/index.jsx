import React, { useState, useCallback } from "react";
import './formBuilder.scss'

function FormBuilder(props) {
    const [questionSelect,setQuestionSelect] = useState(null);
    const [optionSelection,setOptionSelection] = useState(new Array(2));

    //dom

    // methods
    const selectQuestion = useCallback(index=>{
        setQuestionSelect(index)
        setOptionSelection(["",""])
        props.selectQuestion2("question",index)
    },[])

    return (
        <div className="formBuilder" onClick={()=>{selectQuestion(null)}}>
            <div className="contentBox">
                {props.formData.map((question, index)=>{
                    <div className={"questionBox Fselect "+(questionSelect==index?"selected":"")} onClick={e=>{e.stopPropagation();selectQuestion(index)}} key={question.queOnly}></div>
                })}
            </div>
        </div>
    )
}

export default FormBuilder