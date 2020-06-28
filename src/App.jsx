import React, { useState, useCallback } from "react";
import { Button } from 'antd';

import FormBuilder from './components/formBuilder/index'

import './App.scss'

function App() {
  const [formData, setFormData] = useState([
    {
      type: "Radio",
      question: "这是一个单选题",
      id: 0,
      value: 0,
      options: [
        {
          des: "选项1",
          hasInput: false,
          value: 1
        },
        {
          des: "选项2",
          hasInput: true,
          value: 2
        }
      ]
    },
    {
      type: "Checkbox",
      question: "这是一个多选题",
      id: 1,
      value: 0,
      options: [
        {
          des: "选项1",
          hasInput: false,
          value: 1
        },
        {
          des: "选项2",
          hasInput: true,
          value: 2
        }
      ]
    },
    {
      type: "Select",
      question: "这是一个下拉选择",
      id: 2,
      value: 0,
      options: [
        {
          des: "选项1",
          value: 1
        },
        {
          des: "选项2",
          value: 2
        }
      ]
    },
    {
      type: "DatePicker",
      question: "这是一个日期选择",
      id: 3,
      value: 0
    }
  ]);
  const [editMode,setEditMode] = useState(true);
  const [selectedType,setSelectedType] = useState("");
  const [selectedIndex,setSelectedIndex] = useState([]);

  const selectQuestion2 = useCallback((type,index) => {
    //console.log(type,index)
    if(index === null){
      setSelectedType(null);
      setSelectedIndex([null]);
      return false;
    }
    setSelectedType(type);
    if(type==="question") {
      setSelectedType([index]);
    } else if (type==="option") {
      setSelectedIndex([...index]);
    }
  },[])

  return (
    <div className="App">
      <div className="leftBox">
        <dl>
          <dt className="title">选择题</dt>
          <dd>
            <Button size="large">单选题</Button>
            <Button size="large">多选题</Button>
            <Button size="large">下拉题</Button>
            <Button size="large">日期</Button>
            <Button size="large">组织结构</Button>
            <Button size="large">矩阵选择</Button>
          </dd>
        </dl>
        <dl>
          <dt className="title">填空题</dt>
          <dd>
            <Button size="large">填空题</Button>
            <Button size="large">多项填空</Button>
            <Button size="large">矩阵填空</Button>
          </dd>
        </dl>
      </div>
      <div className="middleBox">
        <FormBuilder editMode={editMode} formData={formData} selectQuestion2={selectQuestion2} className="formBuilder"></FormBuilder>
      </div>
      <div className="rightBox">
          
      </div>
    </div>
  )
}

export default App;
