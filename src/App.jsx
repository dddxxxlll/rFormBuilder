import React, { useState } from "react";
import { Button, Modal, message, Form, Input, Switch, Radio, Select } from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

import FormBuilder from './components/formBuilder/index'
//import FormBuilder from 'rformbuilder-dddxxxlll'

import './App.scss'

const { TextArea } = Input;
const { Option } = Select;

function App() {
  // const [formData, setFormData] = useState([
  //   {
  //     queType: "Radio",
  //     question: "这是一个单选题",
  //     queOnly: 0,
  //     queSeq: 0,
  //     value: 0,
  //     des: "",// 描述
  //     queLimit: {
  //       required: false,//必选
  //       score: 0,// 分值
  //       weight: 0,// 权重
  //       arrange: 1,// 选项排列
  //     },
  //     isShow: {
  //       queOnly: "",
  //       value: "",
  //       check: "",
  //     }, // 必要题目序号数组
  //     options: [
  //       {
  //         des: "选项1",
  //         hasInput: false,
  //         value: 1
  //       },
  //       {
  //         des: "选项2",
  //         hasInput: true,
  //         value: 2
  //       }
  //     ]
  //   },
  //   {
  //     queType: "Checkbox",
  //     question: "这是一个多选题",
  //     queOnly: 1,
  //     queSeq: 1,
  //     value: 0,
  //     des: "",
  //     queLimit: {
  //       required: false,//必选
  //       score: 0,// 分值
  //       weight: 0,// 权重
  //       arrange: 1,// 选项排列
  //       minWr: "",
  //       maxWr: ""
  //     },
  //     isShow: {
  //       queOnly: "",
  //       value: "",
  //       check: "",
  //     }, // 必要题目序号数组
  //     options: [
  //       {
  //         des: "选项1",
  //         hasInput: false,
  //         value: 1
  //       },
  //       {
  //         des: "选项2",
  //         hasInput: true,
  //         value: 2
  //       }
  //     ]
  //   },
  //   {
  //     queType: "Select",
  //     question: "这是一个下拉选择",
  //     queOnly: 2,
  //     queSeq: 2,
  //     value: 0,
  //     des: "",// 描述
  //     queLimit: {
  //       required: false,//必选
  //       score: 0,// 分值
  //       weight: 0,// 权重
  //       arrange: 1,// 选项排列
  //     },
  //     isShow: {
  //       queOnly: "",
  //       value: "",
  //       check: "",
  //     }, // 必要题目序号数组
  //     options: [
  //       {
  //         des: "选项1",
  //         value: 1
  //       },
  //       {
  //         des: "选项2",
  //         value: 2
  //       }
  //     ]
  //   },
  //   {
  //     queType: "DatePicker",
  //     question: "这是一个日期选择",
  //     queOnly: 3,
  //     queSeq: 3,
  //     value: 0,
  //     des: "",// 描述
  //     queLimit: {
  //       required: false,//必选
  //       score: 0,// 分值
  //       weight: 0,// 权重
  //     },
  //     isShow: {
  //       queOnly: "",
  //       value: "",
  //       check: "",
  //     }, // 必要题目序号数组
  //   },
  //   {
  //     queType: "RadioTable",
  //     question: "这是一个矩阵选择",
  //     queOnly: 4,
  //     queSeq: 4,
  //     des: "",// 描述
  //     queLimit: {
  //       required: false,//必选
  //       score: 0,// 分值
  //       weight: 0,// 权重
  //       selectType: "CheckBox",
  //       minWr: "",
  //       maxWr: ""
  //     },
  //     isShow: {
  //       queOnly: "",
  //       value: "",
  //       check: "",
  //     }, // 必要题目序号数组
  //     // value: 0,
  //     options: {
  //       column: [{ name: "选项1", value: 1 }, { name: "选项2", value: 2 }],
  //       row: [{ name: "行1", value: [] }, { name: "行2", value: [] }],
  //     }
  //   },
  //   {
  //     queType: "Input",
  //     question: "这是一个填空题",
  //     queOnly: 5,
  //     queSeq: 5,
  //     value: "",
  //     des: "",
  //     queLimit: {
  //       required: false,//必选
  //       score: 0,// 分值
  //       weight: 0,// 权重
  //       fillType: "Number",
  //       minWr: "",
  //       maxWr: ""
  //     },
  //     isShow: {
  //       queOnly: "",
  //       value: "",
  //       check: "",
  //     }, // 必要题目序号数组
  //   },
  //   {
  //     queType: "MultiInput",
  //     question: "这是一个多项选择题",
  //     queOnly: 6,
  //     queSeq: 6,
  //     value: "",
  //     des: "",
  //     queLimit: {
  //       required: false,//必选
  //       score: 0,// 分值
  //       weight: 0,// 权重
  //     },
  //     isShow: {
  //       queOnly: "",
  //       value: "",
  //       check: "",
  //     }, // 必要题目序号数组
  //     options: [
  //       {
  //         des: "填空1",
  //         value: "",
  //         fillType: "Number", // 输入框type：Number,ZH,EN,None
  //         minWr: "",
  //         maxWr: ""
  //       },
  //       {
  //         des: "填空2",
  //         value: "",
  //         fillType: "None", // 输入框type：Number,ZH,EN,None
  //         minWr: "",
  //         maxWr: ""
  //       }
  //     ]
  //   },
  //   {
  //     queType: "InputTable",
  //     question: "这是一个矩阵填空",
  //     queOnly: 7,
  //     queSeq: 7,
  //     // value: "",
  //     des: "",// 描述
  //     queLimit: {
  //       required: false,//必选
  //       score: 0,// 分值
  //       weight: 0,// 权重
  //     },
  //     isShow: {
  //       queOnly: "",
  //       value: "",
  //       check: "",
  //     }, // 必要题目序号数组
  //     options: {
  //       column: [{ name: "选项1", value: 1 }, { name: "选项2", value: 2 }],
  //       row: [{ name: "行1", value: [] }, { name: "行2", value: [] }],//值为数组，有多少列就有多少个值
  //     }
  //   },
  // ]);
  const [formData, setFormData] = useState([])
  const [editMode, setEditMode] = useState(true);
  const [selectedType, setSelectedType] = useState("");
  const [selectedIndex, setSelectedIndex] = useState([]);
  const [logicOptions, setLogicOptions] = useState([]);
  //const [logicSelected, setLogicSelected] = useState(-1);
  const [logicVisible,setLogicVisible] = useState(false);
  const [optionVisible,setOptionVisible] = useState(false);
  const [previewMode,setPreviewMode] = useState(false);
  //let [questionForm] = Form.useForm();

  const layout = {
    labelCol: {
      span: 7,
    },
    wrapperCol: {
      span: 17,
    },
  };
  const fillTypeOptions = [{
    value: 'None',
    label: '无限制'
  }, {
    value: 'Number',
    label: '数字'
  }, {
    value: 'ZH',
    label: '中文'
  }, {
    value: 'EN',
    label: '英文'
  }]

  // useEffect(()=>{
  //   // console.log(questionForm.getFieldValue())
  //   // questionForm.setFieldsValue(formData[selectedIndex])
  //   questionForm.resetFields();
  // },[selectedIndex])

  //methods
  const selectQuestionF = (type, index) => {
    //console.log(type,index)
    if (index === null) {
      setSelectedType(null);
      setSelectedIndex([null]);
      return false;
    }
    setSelectedType(type);
    if (type === "question") {
      setSelectedIndex([index]);
    } else if (type === "option") {
      setSelectedIndex([...index]);
    }
  }

  const delQuestionF = (index) => {
    Modal.confirm({
      title: '提示',
      icon: <ExclamationCircleOutlined />,
      content: '是否删除该题?',
      okText: '确认',
      cancelText: '取消',
      onOk: () => {
        setFormData(() => {
          formData.splice(index, 1);
          for (let i = 0; i < formData.length; i++) {
            formData[i].queSeq = i;
          }
          return [...formData]
        })
        selectQuestionF("question", null)
        message.success('删除成功!');
      },
      onCancel: () => {
        message.info('已取消删除');
      }
    });
  }

  const switchQuestionF = (type, index) => {
    selectQuestionF("question", null)
    setFormData(() => {
      if (type === "up") {
        [formData[index - 1], formData[index]] = [formData[index], formData[index - 1]];
      } else if (type === "down") {
        [formData[index], formData[index + 1]] = [formData[index + 1], formData[index]];
      }
      for (let i = 0; i < formData.length; i++) {
        formData[i].queSeq = i;
      }
      return [...formData]
    })
  }

  const addOptionF = (index, roc) => {
    const type = formData[index].queType;
    const options = formData[index].options;
    if (type === "Radio" || type === "Checkbox") {
      let max = 0;
      for (let i = 0; i < options.length; i++) {
        if (options[i].value >= max) {
          max = options[i].value + 1;
        }
      }
      let data = {
        des: "选项" + max,
        hasInput: false,
        value: max
      }
      formData[index].options.push(data);
      setFormData([...formData])
    } else if (type === "Select") {
      let max = 0;
      for (let i = 0; i < options.length; i++) {
        if (options[i].value >= max) {
          max = options[i].value + 1;
        }
      }
      let data = {
        des: "选项" + max,
        value: max
      }
      formData[index].options.push(data);
      setFormData([...formData])
    } else if (type === "RadioTable") {
      if (roc && roc === "row") {
        let data = {
          name: "新的行",
          value: []
        }
        formData[index].options.row.push(data);
        var str = JSON.stringify(formData)
        setFormData(JSON.parse(str))
      } else if (roc && roc === "column") {
        let max = 0;
        for (let i = 0; i < options.column.length; i++) {
          if (options.column[i].value >= max) {
            max = options.column[i].value + 1;
          }
        }
        let data = {
          name: "选项" + max,
          value: max
        }
        formData[index].options.column.push(data);
        var str = JSON.stringify(formData)
        setFormData(JSON.parse(str))
      }
    } else if (type === "MultiInput") {
      let data = {
        des: "新填空",
        value: "",
        fillType: "None",
        minWr: "",
        maxWr: ""
      }
      formData[index].options.push(data);
      setFormData([...formData])
    } else if (type === "InputTable") {
      if (roc && roc === "row") {
        let data = {
          name: "新的行",
          value: []
        }
        formData[index].options.row.push(data);
        var str = JSON.stringify(formData)
        setFormData(JSON.parse(str))
      } else if (roc && roc === "column") {
        let max = 0;
        for (let i = 0; i < options.column.length; i++) {
          if (options.column[i].value >= max) {
            max = options.column[i].value + 1;
          }
        }
        let data = {
          name: "选项" + max,
          value: max
        }
        formData[index].options.column.push(data);
        var str = JSON.stringify(formData)
        setFormData(JSON.parse(str))
      }
    }
  }

  const delOptionF = (index,oIndex,ifMatrix) => {
    if(ifMatrix) {
      setSelectedType(null);
      formData[index].options[ifMatrix].splice(oIndex,1);
      var str = JSON.stringify(formData);
      setFormData(JSON.parse(str))
    } else {
      setSelectedType(null);
      formData[index].options.splice(oIndex,1);
      var str = JSON.stringify(formData);
      setFormData(JSON.parse(str))
    }
  }

  const generateUUID = () => {
    var d = new Date().getTime();
    if (window.performance && typeof window.performance.now === "function") {
      d += performance.now(); //use high-precision timer if available
    }
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      var r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      return (c == 'x' ? r : (r & 0x3 | 0x8)).toString(16);
    });
    return uuid;
  }

  const addQuertion = (type) => {
    var data = {};
    if (type === "Radio") {
      data = {
        queType: "Radio",
        question: "这是一个单选题",
        queOnly: generateUUID(),
        queSeq: formData.length,
        value: "",
        inputValue: [],
        des: "",// 描述
        queLimit: {
          required: false,//必选
          score: 0,// 分值
          weight: 0,// 权重
          arrange: 1,// 选项排列
        },
        isShow: {
          queOnly: "",
          value: "",
          check: true,
        }, // 必要题目序号数组
        options: [
          {
            des: "选项1",
            hasInput: false,
            value: 1
          },
          {
            des: "选项2",
            hasInput: false,
            value: 2
          }
        ]
      }
    } else if (type === "Checkbox") {
      data = {
        queType: "Checkbox",
        question: "这是一个多选题",
        queOnly: generateUUID(),
        queSeq: formData.length,
        value: [],
        inputValue: [],
        des: "",
        queLimit: {
          required: false,//必选
          score: 0,// 分值
          weight: 0,// 权重
          arrange: 1,// 选项排列
          minWr: "",
          maxWr: ""
        },
        isShow: {
          queOnly: "",
          value: "",
          check: true,
        }, // 必要题目序号数组
        options: [
          {
            des: "选项1",
            hasInput: false,
            value: 1
          },
          {
            des: "选项2",
            hasInput: false,
            value: 2
          }
        ]
      }
    } else if (type === "Select") {
      data = {
        queType: "Select",
        question: "这是一个下拉选择",
        queOnly: generateUUID(),
        queSeq: formData.length,
        value: "",
        des: "",// 描述
        queLimit: {
          required: false,//必选
          score: 0,// 分值
          weight: 0,// 权重
          arrange: 1,// 选项排列
        },
        isShow: {
          queOnly: "",
          value: "",
          check: true,
        }, // 必要题目序号数组
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
      }
    } else if (type === "DatePicker") {
      data = {
        queType: "DatePicker",
        question: "这是一个日期选择",
        queOnly: generateUUID(),
        queSeq: formData.length,
        value: "",
        des: "",// 描述
        queLimit: {
          required: false,//必选
          score: 0,// 分值
          weight: 0,// 权重
        },
        isShow: {
          queOnly: "",
          value: "",
          check: true,
        }, // 必要题目序号数组
      }
    } else if (type === "RadioTable") {
      data = {
        queType: "RadioTable",
        question: "这是一个矩阵选择",
        queOnly: generateUUID(),
        queSeq: formData.length,
        des: "",// 描述
        queLimit: {
          required: false,//必选
          score: 0,// 分值
          weight: 0,// 权重
          selectType: "Radio",
          minWr: "",
          maxWr: ""
        },
        isShow: {
          queOnly: "",
          value: "",
          check: true,
        }, // 必要题目序号数组
        // value: 0,
        options: {
          column: [{ name: "选项1", value: 1 }, { name: "选项2", value: 2 }],
          row: [{ name: "行1", value: [] }, { name: "行2", value: [] }],
        }
      }
    } else if (type === "Input") {
      data = {
        queType: "Input",
        question: "这是一个填空题",
        queOnly: generateUUID(),
        queSeq: formData.length,
        value: "",
        des: "",
        queLimit: {
          required: false,//必选
          score: 0,// 分值
          weight: 0,// 权重
          fillType: "None",
          minWr: "",
          maxWr: ""
        },
        isShow: {
          queOnly: "",
          value: "",
          check: true,
        }, // 必要题目序号数组
      }
    } else if (type === "MultiInput") {
      data = {
        queType: "MultiInput",
        question: "这是一个多项选择题",
        queOnly: generateUUID(),
        queSeq: formData.length,
        value: "",
        des: "",
        queLimit: {
          required: false,//必选
          score: 0,// 分值
          weight: 0,// 权重
        },
        isShow: {
          queOnly: "",
          value: "",
          check: true,
        }, // 必要题目序号数组
        options: [
          {
            des: "填空1",
            value: "",
            fillType: "None", // 输入框type：Number,ZH,EN,None
            minWr: "",
            maxWr: ""
          },
          {
            des: "填空2",
            value: "",
            fillType: "None", // 输入框type：Number,ZH,EN,None
            minWr: "",
            maxWr: ""
          }
        ]
      }
    } else if (type === "InputTable") {
      data = {
        queType: "InputTable",
        question: "这是一个矩阵填空",
        queOnly: generateUUID(),
        queSeq: formData.length,
        des: "",// 描述
        queLimit: {
          required: false,//必选
          score: 0,// 分值
          weight: 0,// 权重
        },
        isShow: {
          queOnly: "",
          value: "",
          check: true,
        }, // 必要题目序号数组
        options: {
          column: [{ name: "选项1", value: 1 }, { name: "选项2", value: 2 }],
          row: [{ name: "行1", value: [] }, { name: "行2", value: [] }],//值为数组，有多少列就有多少个值
        }
      }
    }

    setFormData([...formData,data])
  }

  const switchChange = function(index,check,type) {
    if(type==="selectType"){
      if(check){
        formData[index].queLimit[type] = "Radio";
      } else {
        formData[index].queLimit[type] = "Checkbox";
      }
    } else if (type==="hasInput"){
      formData[index[0]].options[index[1]].hasInput = check;
    } else if(type==="isShow"){
      formData[index].isShow.check = check;
    } else {
      formData[index].queLimit[type] = check;
    }
    let form = JSON.stringify(formData)
    setFormData(JSON.parse(form))
  }

  const changeArrange = function(e) {
    formData[selectedIndex].queLimit.arrange = e.target.value;
    setFormData([...formData]);
  }

  const fillTypeChange = function(v,type) {
    if(type==="options"){
      formData[selectedIndex[0]].options[selectedIndex[1]].fillType = v;
      setFormData([...formData]);
    } else {
      formData[selectedIndex[0]][type].fillType = v;
      setFormData([...formData]);
    }
  }

  const openLogic = function() {
    if(formData[selectedIndex[0]].isShow.queOnly){
      let v = formData[selectedIndex[0]].isShow.queOnly;
      for(let i=0;i<formData.length;i++){
        if(formData[i].queOnly===v){
          setLogicOptions(formData[i].options)
          //setLogicSelected(i)
          //logicOptions = formData[i].options;
          //logicSelected = i;
        }
      }
      setFormData([...formData]);
    } else {
      setLogicOptions([])
      //setLogicSelected(-1)
      //logicOptions = [];
      //logicSelected = -1;
    }
    setLogicVisible(true);
  }

  const tableOption = function() {
    setOptionVisible(true)
  }

  const saveData = function () {
    console.log("保存数据：",formData)
    setEditMode(false)
    setPreviewMode(true)
  }

  const handleOk = function (flag) {
    if(flag==="logic") {
      setLogicVisible(false)
    } else if(flag==="option") {
      setOptionVisible(false)
    }
  }

  const logicQChange = function(v) {
    for(let i=0;i<formData.length;i++){
      if(formData[i].queOnly===v){
        setLogicOptions(formData[i].options)
        //setLogicSelected(i);
        formData[selectedIndex].isShow.queOnly = v;
      }
    }
  }

  const changeOptions = function(v,index) {
    formData[index].isShow.value = v;
    setFormData([...formData]);
  }

  const updateFormDataF = (data) => {
    setFormData([...data])
  }

  const inputChange = (value,prop,flag) => {
    if(flag==="queLimit") {
      formData[selectedIndex].queLimit[prop] = value;
    } else if(flag==="option") {
      formData[selectedIndex[0]].options[selectedIndex[1]][prop] = value
    } else if(flag==="column") {
      formData[selectedIndex[0]].options.column[prop].name = value
    } else if(flag==="row") {
      formData[selectedIndex[0]].options.row[prop].name = value
    } else {
      formData[selectedIndex][prop] = value;
    }
    setFormData([...formData])
  }

  return (
    <div className="App">
      {
        !previewMode &&
        <div className="leftBox">
          <dl>
            <dt className="title">选择题</dt>
            <dd>
              <Button size="large" onClick={()=>{addQuertion('Radio')}}>单选题</Button>
              <Button size="large" onClick={()=>{addQuertion('Checkbox')}}>多选题</Button>
              <Button size="large" onClick={()=>{addQuertion('Select')}}>下拉题</Button>
              <Button size="large" onClick={()=>{addQuertion('DatePicker')}}>日期</Button>
              <Button size="large" onClick={()=>{addQuertion('RadioTable')}}>矩阵选择</Button>
            </dd>
          </dl>
          <dl>
            <dt className="title">填空题</dt>
            <dd>
              <Button size="large" onClick={()=>{addQuertion('Input')}}>填空题</Button>
              <Button size="large" onClick={()=>{addQuertion('MultiInput')}}>多项填空</Button>
              <Button size="large" onClick={()=>{addQuertion('InputTable')}}>矩阵填空</Button>
            </dd>
          </dl>
        </div>
      }
      <div className="middleBox" style={{backgroundColor: previewMode?'#FFF':'rgba(128,133,144,.15)'}}>
        <FormBuilder updateFormDataF={updateFormDataF} addOptionF={addOptionF} delOptionF={delOptionF} editMode={editMode} formData={formData} switchQuestionF={switchQuestionF} delQuestionF={delQuestionF} selectQuestionF={selectQuestionF} className="formBuilder"></FormBuilder>
      </div>
      {
        !previewMode &&
        <div className="rightBox">
          <div className="title">
            {selectedType==="question"?"题目设置":"选项设置"}
          </div>
          <div className="content">
            {
              selectedType==="question" &&
              <Form {...layout} size="large">
                <Form.Item label="题目">
                  <Input value={formData[selectedIndex]&&formData[selectedIndex].question} onChange={e=>{inputChange(e.target.value,"question")}}/>
                </Form.Item>
                <Form.Item label="题目描述">
                  <TextArea rows={3} value={formData[selectedIndex]&&formData[selectedIndex].des} onChange={e=>{inputChange(e.target.value,"des")}}/>
                </Form.Item>
                <Form.Item label="是否必填" >
                  <Switch checked={formData[selectedIndex].queLimit.required} onChange={(check)=>{switchChange(selectedIndex,check,'required')}} />
                </Form.Item>
                <Form.Item label="题目分值">
                  <Input value={formData[selectedIndex]&&formData[selectedIndex].queLimit.score} onChange={e=>{inputChange(e.target.value,"score",'queLimit')}}/>
                </Form.Item>
                <Form.Item label="题目权重">
                  <Input value={formData[selectedIndex]&&formData[selectedIndex].queLimit.weight} onChange={e=>{inputChange(e.target.value,"weight",'queLimit')}}/>
                </Form.Item>
                {
                  formData[selectedIndex].queType==='RadioTable' &&
                  <Form.Item label="单选/多选">
                    <Switch checked={formData[selectedIndex].queLimit.selectType} onChange={(check)=>{switchChange(selectedIndex,check,'selectType')}}  checkedChildren="单选" unCheckedChildren="多选"/>
                  </Form.Item>
                }
                {
                  (formData[selectedIndex[0]].queType==='Radio'||formData[selectedIndex[0]].queType==='Checkbox') &&
                  <Form.Item label="选项布局">
                    <Radio.Group onChange={e=>{changeArrange(e)}} value={formData[selectedIndex].queLimit.arrange}>
                      <Radio value={1}>单列</Radio>
                      <Radio value={2}>双列</Radio>
                      <Radio value={3}>三列</Radio>
                      <Radio value={4}>四列</Radio>
                    </Radio.Group>
                  </Form.Item>
                }
                {
                  formData[selectedIndex[0]].queType==='Input' &&
                  <>
                    <Form.Item label="最大字数">
                      <Input value={formData[selectedIndex]&&formData[selectedIndex].queLimit.maxWr} onChange={e=>{inputChange(e.target.value,"maxWr",'queLimit')}}/>
                    </Form.Item>
                    <Form.Item label="最小字数">
                      <Input value={formData[selectedIndex]&&formData[selectedIndex].queLimit.minWr} onChange={e=>{inputChange(e.target.value,"minWr",'queLimit')}}/>
                    </Form.Item>
                  </>
                }
                {
                  formData[selectedIndex].queType==='Checkbox' &&
                  <>
                    <Form.Item label="最多选择">
                      <Input value={formData[selectedIndex]&&formData[selectedIndex].queLimit.maxWr} onChange={e=>{inputChange(e.target.value,"maxWr",'queLimit')}}/>
                    </Form.Item>
                    <Form.Item label="最少选择">
                      <Input value={formData[selectedIndex]&&formData[selectedIndex].queLimit.minWr} onChange={e=>{inputChange(e.target.value,"minWr",'queLimit')}}/>
                    </Form.Item>
                  </>
                }
                {
                  formData[selectedIndex[0]].queType==='Input' &&
                  <Form.Item label="类型限制">
                    <Select defaultValue={formData[selectedIndex[0]].queLimit.fillType} onChange={v=>{fillTypeChange(v,"queLimit")}}>
                      {fillTypeOptions.map((option)=>{
                        return(<Option key={option.value} value={option.value}>{option.label}</Option>)
                      })}
                    </Select>
                  </Form.Item>
                }
                <Form.Item label="逻辑设置">
                  <Button onClick={()=>{openLogic()}}>逻辑设置</Button>
                </Form.Item>
                {
                  (formData[selectedIndex[0]].queType==='RadioTable'||formData[selectedIndex[0]].queType==='InputTable') &&
                  <Form.Item label="选项设置">
                    <Button onClick={()=>{tableOption()}}>选项设置</Button>
                  </Form.Item>
                }
              </Form>
            }
            {
              selectedType==='option' &&
              <Form {...layout} size="large">
                <Form.Item label="选项">
                  <Input value={formData[selectedIndex[0]].options[selectedIndex[1]].des} onChange={e=>{inputChange(e.target.value,"des",'option')}}/>
                </Form.Item>
                <Form.Item label="选项的值">
                  <Input value={formData[selectedIndex[0]].options[selectedIndex[1]].value} onChange={e=>{inputChange(e.target.value,"value",'option')}}/>
                </Form.Item>
                {
                  (formData[selectedIndex[0]].queType==='Radio'||formData[selectedIndex[0]].queType==='Checkbox') &&
                  <Form.Item label="能否输入">
                    <Switch checked={formData[selectedIndex[0]].options[selectedIndex[1]].hasInput} onChange={(check)=>{switchChange(selectedIndex,check,'hasInput')}} />
                  </Form.Item>
                }
                {
                  formData[selectedIndex[0]].queType==='MultiInput' &&
                  <>
                    <Form.Item label="最大字数">
                      <Input value={formData[selectedIndex[0]].options[selectedIndex[1]].maxWr} onChange={e=>{inputChange(e.target.value,"maxWr",'option')}}/>
                    </Form.Item>
                    <Form.Item label="最小字数">
                      <Input value={formData[selectedIndex[0]].options[selectedIndex[1]].minWr} onChange={e=>{inputChange(e.target.value,"minWr",'option')}}/>
                    </Form.Item>
                    <Form.Item label="类型限制">
                      <Select defaultValue={formData[selectedIndex[0]].options[selectedIndex[1]].fillType} onChange={v=>{fillTypeChange(v,"options")}}>
                        {fillTypeOptions.map((option)=>{
                          return(<Option key={option.value} value={option.value}>{option.label}</Option>)
                        })}
                      </Select>
                    </Form.Item>
                  </>
                }
              </Form>
            }
          </div>
          <div className="save" onClick={saveData}>
            保存并预览
          </div>
        </div>
      }
      <Modal
        title="逻辑设置"
        visible={logicVisible}
        onCancel={()=>{handleOk("logic")}}
        footer={[
          <Button type="primary" onClick={()=>{handleOk("logic")}}>
            确认
          </Button>
        ]}
      >
        <Form {...layout} size="large">
          <Form.Item label="题目">
            <Select defaultValue={formData[selectedIndex]?formData[selectedIndex].isShow.queOnly:''} onChange={v=>{logicQChange(v)}}>
              {formData.map((option, index)=>{
                if((option.queType==='Radio'||option.queType==='Checkbox'||option.queType==='Select')&&index<selectedIndex[0]) {
                  return(<Option key={option.queOnly} value={option.queOnly}>{option.question}</Option>)
                }
              })}
            </Select>
          </Form.Item>
          <Form.Item label="选项">
            <Select defaultValue={formData[selectedIndex]?formData[selectedIndex].isShow.value:''} onChange={v=>{changeOptions(v,selectedIndex)}}>
              {logicOptions.map((option)=>{
                return(<Option key={option.value} value={option.value}>{option.des}</Option>)
              })}
            </Select>
          </Form.Item>
          <Form.Item label="条件">
            <Switch checked={formData[selectedIndex]?formData[selectedIndex].isShow.check:''} onChange={(check)=>{switchChange(selectedIndex,check,'isShow')}} />
          </Form.Item>
        </Form>
      </Modal>
      <Modal
        title="选项设置"
        visible={optionVisible}
        onCancel={()=>{handleOk("option")}}
        footer={[
          <Button type="primary" onClick={()=>{handleOk("option")}}>
            确认
          </Button>
        ]}
      >
        <Form {...layout} size="large">
          {
            formData[selectedIndex[0]] &&
            formData[selectedIndex[0]].options &&
            formData[selectedIndex[0]].options.column &&
            formData[selectedIndex[0]].options.column.map((item, index)=>{
              return (
                <Form.Item key={index} label={'选项'+(index+1)}>
                  <Input style={{width:'80%'}} value={item.name} onChange={e=>{inputChange(e.target.value,index,'column')}}/>
                  <Button style={{marginLeft:'10px'}} danger className="del" size="small" onClick={()=>{delOptionF(selectedIndex[0],index,'column')}}>删除</Button>
                </Form.Item>
              )
            })
          }
          {
            formData[selectedIndex[0]] &&
            formData[selectedIndex[0]].options &&
            formData[selectedIndex[0]].options.row &&
            formData[selectedIndex[0]].options.row.map((item,index)=>{
              return (
                <Form.Item key={index} label={'行'+(index+1)}>
                  <Input style={{width:'80%'}} value={item.name} onChange={e=>{inputChange(e.target.value,index,'row')}}/>
                  <Button style={{marginLeft:'10px'}} danger className="del" size="small" onClick={()=>{delOptionF(selectedIndex[0],index,'row')}}>删除</Button>
                </Form.Item>
              )
            })
          }
        </Form>
      </Modal>
    </div>
  )
}

export default App;
