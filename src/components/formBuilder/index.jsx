import React, { useState, useCallback, useEffect } from "react";
import { Radio, Checkbox, Input, Button, DatePicker, Table, Select } from 'antd';
import {DeleteOutlined, DownOutlined, CaretUpOutlined, CaretDownOutlined} from '@ant-design/icons';
import './formBuilder.scss'



function FormBuilder(props) {
    const { Column } = Table;
    const { Option } = Select;
    const [questionSelect,setQuestionSelect] = useState(null);
    const [optionSelection,setOptionSelection] = useState(new Array(2));

    // 选择题的classname
    const selectQClassName = (index, oIndex, question) => {
        var className = "clearfix column "
        if(index===optionSelection[0]&&oIndex===optionSelection[1]){
            className += "selected "
        }
        if(question.queLimit.arrange>1&&question.queLimit.arrange<5){
            className += "column_"+question.queLimit.arrange
        }
        return className
    }
    // 选择题的classname

    //dom
    function SelectQuestion(prop) {
        console.log("prop:",prop)
        const question = prop.question;
        const index = prop.index;

        //选项前的图标差分
        return (
            <div className={"questionBox Fselect "+(questionSelect===index?"selected":"")} onClick={e=>{e.stopPropagation();selectQuestion(index)}}>
                <div className="order">
                    {index+1}
                </div>
                <dl className="wrapper">
                    <dt>
                        {question.question}
                        <div className="iconBox">
                            {
                                (props.formData&&index!==0&&props.formData.length>1) &&
                                <CaretUpOutlined className="icon" onClick={e=>{e.stopPropagation();switchQuestion('up',index)}}/>
                            }
                            {
                                (props.formData&&index!==props.formData.length-1&&props.formData.length>1) &&
                                <CaretDownOutlined className="icon" onClick={e=>{e.stopPropagation();switchQuestion('down',index)}}/>
                            }
                            <DeleteOutlined className="icon" onClick={e=>{e.stopPropagation();delQuestion(index)}}/>
                        </div>
                    </dt>
                    {question.des &&
                    <dd>{question.des}</dd>}
                    {question.options.map((option,oIndex)=>{
                        return (<dd className={selectQClassName(index,oIndex,question)} key={option.value} onClick={e=>{e.stopPropagation();selectOption(index,oIndex)}}>
                            {question.queType==='Radio'?
                            <Radio value={option.value}>{option.des}</Radio>:
                            question.queType==='Checkbox'?
                            <Checkbox value={option.value}>{option.des}</Checkbox>:
                            question.queType==='Select'?
                            <>
                                <DownOutlined style={{marginRight:10+'px'}}/>
                                <span>{option.des}</span>
                            </>:
                            ''}
                            {
                                (option.hasInput&&question.queType!='Select') &&
                                <Input className="input"/>
                            }
                            {
                                questionSelect===index &&
                                <Button danger style={{marginTop:5+'px'}} className="del" size="small" onClick={e=>{e.stopPropagation();delOption(index,oIndex)}}>删除</Button>
                            }
                        </dd>)
                    })}
                    {
                        questionSelect===index &&
                        <dd className="editBox">
                            <Button className="btn" size="large" onClick={e=>{e.stopPropagation();addOption(index)}}>新增选项</Button>
                        </dd>
                    }
                </dl>
            </div>
        )
    }
    //dom

    // methods
    const selectQuestion = index=>{
        setQuestionSelect(index)
        setOptionSelection(["",""])
        props.selectQuestionF("question",index)
    }

    const checkType = type=>{
        if(type==='Radio'||type==='Checkbox'||type==="Select"){
            return true;
        } else {
            return false;
        }
    }

    const delQuestion = index=>{
        setQuestionSelect(null)
        setOptionSelection(["",""])
        props.delQuestionF("delQuestion",index)
    }

    const switchQuestion = (type, index)=>{
        setQuestionSelect(null)
        setOptionSelection(["",""])
        props.switchQuestionF(type, index)
    }

    const selectOption = (index,oIndex)=>{
        setOptionSelection([index,oIndex]);
        props.selectQuestionF("option",[index,oIndex])
    }

    const addOption = (index,roc)=>{
        props.addOptionF(index,roc)
    }

    const delOption = (index,oIndex)=>{
        props.delOptionF(index,oIndex);
    }

    const ifShow = function(ifShow,index) {
        for(let i=0;i<index;i++) {
            if(ifShow.queOnly===props.formData[i].queOnly) {
                let checkvalue = false;
                if(props.formData[i].queType==="Checkbox"){
                    props.formData[i].value.map(function(v){
                        if(v===ifShow.value){
                            checkvalue = true;
                        }
                    })
                } else {
                    if(props.formData[i].value===ifShow.value){
                        checkvalue;
                    }
                }
                if(ifShow.check&&checkvalue) {
                    return true;
                }
                if(!ifShow.check&&!checkvalue){
                    return true;
                }
                return false;
            }
        }
        return true;
    }

    const selectChange = (e,index,type) => {
        let data = props.formData
        if(type==='Radio') {
            data[index].value = e.target.value
            props.updateFormDataF(data)
        } else if(type==='Checkbox') {
            if(data[index].queLimit.maxWr) {
                if(data[index].value.length<data[index].queLimit.maxWr){
                    data[index].value = e;
                    props.updateFormDataF(data)
                }
            } else {
                data[index].value = e;
                props.updateFormDataF(data)
            }
        } else if(type==='Select') {
            data[index].value = e
            props.updateFormDataF(data)
        } else if(type==='DatePicker') {
            data[index].value = e
            props.updateFormDataF(data)
        }
    }

    const cuptColumn = function(num) {
        let str = "clearfix column "
        if(num!=1){
            str+= "column_"+num.toString()
        }
        return str
    }

    const checkCheckbox = function (value,type,index) {
        let data = props.formData
        if(type==="Number") {
            value=value.replace(/[^\d.]/g,'')
        } else if(type==="ZH"){
            value=value.replace(/[^\u4e00-\u9fa5]/g,'')
        } else if(type==="EN"){
            value=value.replace(/[^a-zA-Z]/g,'')
        }
        if(Array.isArray(index)){
            data[index[0]].options[index[1]].value = value;
        } else {
            data[index].value = value;
        }
        props.updateFormDataF(data)
    }
    // methods

    // useEffect(()=>{
    //     handleFormData();
    // },[props.formData,handleFormData])

    return (
        <div className="formBuilder" onClick={()=>{selectQuestion(null)}}>
            {
                props.editMode &&
                <div className="contentBox">
                    {props.formData.map((question, index)=>{
                        if(checkType(question.queType)) {
                            return (
                                <SelectQuestion question={question} index={index} key={question.queOnly}>
                                </SelectQuestion>
                            )
                        } else if(question.queType==='DatePicker') {
                            return (
                                <div className={'questionBox '+(questionSelect===index?'selected':'')} onClick={e=>{e.stopPropagation();selectQuestion(index)}} key={question.queOnly}>
                                    <div className="order">
                                        {index+1}
                                    </div>
                                    <dl className="wrapper">
                                        <dt>
                                            {question.question}
                                            <div className="iconBox">
                                                {
                                                    (props.formData&&index!==0&&props.formData.length>1) &&
                                                    <CaretUpOutlined className="icon" onClick={e=>{e.stopPropagation();switchQuestion('up',index)}}/>
                                                }
                                                {
                                                    (props.formData&&index!==props.formData.length-1&&props.formData.length>1) &&
                                                    <CaretDownOutlined className="icon" onClick={e=>{e.stopPropagation();switchQuestion('down',index)}}/>
                                                }
                                                <DeleteOutlined className="icon" onClick={e=>{e.stopPropagation();delQuestion(index)}}/>
                                            </div>
                                        </dt>
                                        {question.des &&
                                        <dd>{question.des}</dd>}
                                        <dd className="clearfix">
                                            <DatePicker/>
                                        </dd>
                                    </dl>
                                </div>
                            )
                        } else if(question.queType==='RadioTable') {
                            return (
                                <div className={'questionBox '+(questionSelect===index?'selected':'')} onClick={e=>{e.stopPropagation();selectQuestion(index)}} key={question.queOnly}>
                                    <div className="order">
                                        {index+1}
                                    </div>
                                    <dl className="wrapper">
                                        <dt>
                                            {question.question}
                                            <div className="iconBox">
                                                {
                                                    (props.formData&&index!==0&&props.formData.length>1) &&
                                                    <CaretUpOutlined className="icon" onClick={e=>{e.stopPropagation();switchQuestion('up',index)}}/>
                                                }
                                                {
                                                    (props.formData&&index!==props.formData.length-1&&props.formData.length>1) &&
                                                    <CaretDownOutlined className="icon" onClick={e=>{e.stopPropagation();switchQuestion('down',index)}}/>
                                                }
                                                <DeleteOutlined className="icon" onClick={e=>{e.stopPropagation();delQuestion(index)}}/>
                                            </div>
                                        </dt>
                                        {question.des &&
                                        <dd>{question.des}</dd>}
                                        <dd className="clearfix" style={{width:'auto'}}>
                                            <Table dataSource={question.options.row}>
                                                <Column title="" dataIndex="name"/>
                                                {question.options.column.map((column,oIndex)=>{
                                                    return (
                                                        <>
                                                        {
                                                            question.queLimit.selectType==="Radio"?
                                                            <Column
                                                                title={column.name}
                                                                render={(text) => (
                                                                    <>
                                                                        <Radio.Group value={text.value[0]}>
                                                                            <Radio onClick={()=>{text.value[0]=question.options.column[oIndex].value}} value={question.options.column[oIndex].value}></Radio>
                                                                        </Radio.Group>
                                                                    </>
                                                                )}
                                                            />:
                                                            <Column
                                                                title={column.name}
                                                                render={(text) => (
                                                                    <>
                                                                        <Checkbox onChange={(e)=>{
                                                                            text.value[oIndex]=e.target.checked
                                                                        }}
                                                                        checked={text.value[oIndex]}></Checkbox>
                                                                    </>
                                                                )}
                                                            />
                                                        }
                                                        </>
                                                    )
                                                })}
                                                
                                            </Table>
                                        </dd>
                                        {
                                            questionSelect===index &&
                                            <dd className="editBox">
                                                <Button className="btn" size="large" onClick={e=>{e.stopPropagation();addOption(index,'row')}}>新增行</Button>
                                                <Button className="btn" size="large" onClick={e=>{e.stopPropagation();addOption(index,'column')}}>新增列</Button>
                                            </dd>
                                        }
                                    </dl>
                                </div>
                            )
                        } else if(question.queType==='Input') {
                            return (
                                <div className={'questionBox '+(questionSelect===index?'selected':'')} onClick={e=>{e.stopPropagation();selectQuestion(index)}} key={question.queOnly}>
                                    <div className="order">
                                        {index+1}
                                    </div>
                                    <dl className="wrapper">
                                        <dt>
                                            {question.question}
                                            <div className="iconBox">
                                                {
                                                    (props.formData&&index!==0&&props.formData.length>1) &&
                                                    <CaretUpOutlined className="icon" onClick={e=>{e.stopPropagation();switchQuestion('up',index)}}/>
                                                }
                                                {
                                                    (props.formData&&index!==props.formData.length-1&&props.formData.length>1) &&
                                                    <CaretDownOutlined className="icon" onClick={e=>{e.stopPropagation();switchQuestion('down',index)}}/>
                                                }
                                                <DeleteOutlined className="icon" onClick={e=>{e.stopPropagation();delQuestion(index)}}/>
                                            </div>
                                        </dt>
                                        <dd className="clearfix">
                                            <Input className="input" value={question.value}/>
                                        </dd>
                                    </dl>
                                </div>
                            )
                        } else if(question.queType==='MultiInput') {
                            return (
                                <div className={'questionBox '+(questionSelect===index?'selected':'')} onClick={e=>{e.stopPropagation();selectQuestion(index)}} key={question.queOnly}>
                                    <div className="order">
                                        {index+1}
                                    </div>
                                    <dl className="wrapper">
                                        <dt>
                                            {question.question}
                                            <div className="iconBox">
                                                {
                                                    (props.formData&&index!==0&&props.formData.length>1) &&
                                                    <CaretUpOutlined className="icon" onClick={e=>{e.stopPropagation();switchQuestion('up',index)}}/>
                                                }
                                                {
                                                    (props.formData&&index!==props.formData.length-1&&props.formData.length>1) &&
                                                    <CaretDownOutlined className="icon" onClick={e=>{e.stopPropagation();switchQuestion('down',index)}}/>
                                                }
                                                <DeleteOutlined className="icon" onClick={e=>{e.stopPropagation();delQuestion(index)}}/>
                                            </div>
                                        </dt>
                                        {question.options.map((option,oIndex)=>{
                                            return (<dd className={`clearfix ${(index===optionSelection[0]&&oIndex===optionSelection[1])?'selected':'123'}`} key={oIndex} onClick={e=>{e.stopPropagation();selectOption(index,oIndex)}}>
                                                <div className="inputDes">
                                                    {option.des}
                                                    {
                                                        questionSelect===index &&
                                                        <Button danger style={{marginTop:5+'px'}} className="del" size="small" onClick={()=>{delOption(index,oIndex)}}>删除</Button>
                                                    }
                                                </div>
                                                <Input className="input" value={option.value}/>
                                            </dd>)
                                        })}
                                        {
                                            questionSelect===index &&
                                            <dd className="editBox">
                                                <Button className="btn" size="large" onClick={e=>{e.stopPropagation();addOption(index)}}>新增选项</Button>
                                            </dd>
                                        }
                                    </dl>
                                </div>
                            )
                        } else if(question.queType==='InputTable') {
                            return (
                                <div className={'questionBox '+(questionSelect===index?'selected':'')} onClick={e=>{e.stopPropagation();selectQuestion(index)}} key={question.queOnly}>
                                    <div className="order">
                                        {index+1}
                                    </div>
                                    <dl className="wrapper">
                                        <dt>
                                            {question.question}
                                            <div className="iconBox">
                                                {
                                                    (props.formData&&index!==0&&props.formData.length>1) &&
                                                    <CaretUpOutlined className="icon" onClick={e=>{e.stopPropagation();switchQuestion('up',index)}}/>
                                                }
                                                {
                                                    (props.formData&&index!==props.formData.length-1&&props.formData.length>1) &&
                                                    <CaretDownOutlined className="icon" onClick={e=>{e.stopPropagation();switchQuestion('down',index)}}/>
                                                }
                                                <DeleteOutlined className="icon" onClick={e=>{e.stopPropagation();delQuestion(index)}}/>
                                            </div>
                                        </dt>
                                        {question.des &&
                                        <dd>{question.des}</dd>}
                                        <dd className="clearfix" style={{width:'auto'}}>
                                            <Table dataSource={question.options.row}>
                                                <Column title="" dataIndex="name"/>
                                                {question.options.column.map((column,oIndex)=>{
                                                    return (
                                                        <>
                                                        {
                                                            <Column
                                                                title={column.name}
                                                                key="name"
                                                                render={(text) => (
                                                                    <>
                                                                        <Input value={text.value[oIndex]}></Input>
                                                                    </>
                                                                )}
                                                            />
                                                        }
                                                        </>
                                                    )
                                                })}
                                                
                                            </Table>
                                        </dd>
                                        {
                                            questionSelect===index &&
                                            <dd className="editBox">
                                                <Button className="btn" size="large" onClick={e=>{e.stopPropagation();addOption(index,'row')}}>新增行</Button>
                                                <Button className="btn" size="large" onClick={e=>{e.stopPropagation();addOption(index,'column')}}>新增列</Button>
                                            </dd>
                                        }
                                    </dl>
                                </div>
                            )
                        }
                    })}
                </div>
            }
            {
                !props.editMode &&
                <div className="contentBox">
                    {props.formData.map((question, index)=>{
                        if(checkType(question.queType)) {
                            if(ifShow(question.isShow,index)) {
                                return (
                                    <div className="questionBox Fselect" key={question.queOnly}>
                                        <div className="order">
                                            {
                                                !props.editMode &&
                                                question.queLimit.required &&
                                                <span class="red">*</span>
                                            }
                                            {index+1}
                                        </div>
                                        <dl className="wrapper">
                                            <dt>
                                                {question.question}
                                            </dt>
                                            {question.des &&
                                            <dd>{question.des}</dd>}
                                            {
                                                question.queType==='Radio'?
                                                <Radio.Group onChange={e=>{selectChange(e,index,'Radio')}} value={question.value} style={{width:'100%'}}>
                                                    {
                                                        question.options.map((option,oIndex)=>{
                                                            return(
                                                                <dd key={option.value} className={cuptColumn(question.queLimit.arrange)}>
                                                                    <Radio value={option.value}>{option.des}</Radio>
                                                                    {
                                                                        option.hasInput &&
                                                                        <Input className="input" value={question.inputValue[oIndex]}/>
                                                                    }
                                                                </dd>
                                                            )
                                                        })
                                                    }
                                                </Radio.Group>:
                                                question.queType==='Checkbox'?
                                                <Checkbox.Group onChange={e=>{selectChange(e,index,'Checkbox')}} value={question.value} style={{width:'100%'}}>
                                                    {
                                                        question.options.map((option,oIndex)=>{
                                                            return(
                                                                <dd key={option.value} className={cuptColumn(question.queLimit.arrange)}>
                                                                    <Checkbox value={option.value}>{option.des}</Checkbox>
                                                                    {
                                                                        option.hasInput &&
                                                                        <Input className="input" value={question.inputValue[oIndex]}/>
                                                                    }
                                                                </dd>
                                                            )
                                                        })
                                                    }
                                                </Checkbox.Group>:
                                                question.queType==="Select"?
                                                <Select style={{width:'100%'}} defaultValue={question.value} onChange={e=>{selectChange(e,index,"Select")}}>
                                                    {question.options.map((option)=>{
                                                        return(<Option key={option.value} value={option.value}>{option.des}</Option>)
                                                    })}
                                                </Select>:
                                                ""
                                            }
                                        </dl>
                                    </div>
                                )
                            }
                        } else if(question.queType==='DatePicker') {
                            if(ifShow(question.isShow,index)) {
                                return (
                                    <div className='questionBox' key={question.queOnly}>
                                        <div className="order">
                                            {
                                                question.queLimit.required &&
                                                <span class="red">*</span>
                                            }
                                            {index+1}
                                        </div>
                                        <dl className="wrapper">
                                            <dt>
                                                {question.question}
                                            </dt>
                                            {question.des &&
                                            <dd>{question.des}</dd>}
                                            <dd className="clearfix">
                                                <DatePicker onChange={(date,str)=>{selectChange(str,index,'DatePicker')}}/>
                                            </dd>
                                        </dl>
                                    </div>
                                )
                            }
                        } else if (question.queType==='RadioTable') {
                            if(ifShow(question.isShow,index)) {
                                return (
                                    <div className='questionBox' key={question.queOnly}>
                                        <div className="order">
                                            {
                                                question.queLimit.required &&
                                                <span class="red">*</span>
                                            }
                                            {index+1}
                                        </div>
                                        <dl className="wrapper">
                                            <dt>
                                                {question.question}
                                            </dt>
                                            {question.des &&
                                            <dd>{question.des}</dd>}
                                            <dd className="clearfix" style={{width:'auto'}}>
                                                <Table dataSource={question.options.row}>
                                                    <Column title="" dataIndex="name"/>
                                                    {question.options.column.map((column,oIndex)=>{
                                                        return (
                                                            <>
                                                            {
                                                                question.queLimit.selectType==="Radio"?
                                                                <Column
                                                                    title={column.name}
                                                                    render={(text) => (
                                                                        <>
                                                                            <Radio.Group value={text.value[0]}>
                                                                                <Radio onClick={()=>{text.value[0]=question.options.column[oIndex].value}} value={question.options.column[oIndex].value}></Radio>
                                                                            </Radio.Group>
                                                                        </>
                                                                    )}
                                                                />:
                                                                <Column
                                                                    title={column.name}
                                                                    render={(text) => (
                                                                        <>
                                                                            <Checkbox onChange={(e)=>{
                                                                                text.value[oIndex]=e.target.checked
                                                                            }}
                                                                            checked={text.value[oIndex]}></Checkbox>
                                                                        </>
                                                                    )}
                                                                />
                                                            }
                                                            </>
                                                        )
                                                    })}
                                                    
                                                </Table>
                                            </dd>
                                        </dl>
                                    </div>
                                )
                            }
                        } else if(question.queType==='Input') {
                            if(ifShow(question.isShow,index)) {
                                return (
                                    <div className='questionBox' key={question.queOnly}>
                                        <div className="order">
                                            {
                                                question.queLimit.required &&
                                                <span class="red">*</span>
                                            }
                                            {index+1}
                                        </div>
                                        <dl className="wrapper">
                                            <dt>
                                                {question.question}
                                            </dt>
                                            <dd className="clearfix">
                                                <Input className="input" maxLength={question.queLimit.maxWr} onChange={e=>{checkCheckbox(e.target.value,question.queLimit.fillType,index)}} value={question.value}/>
                                            </dd>
                                        </dl>
                                    </div>
                                )
                            }   
                        } else if(question.queType==='MultiInput') {
                            if(ifShow(question.isShow,index)) {
                                return (
                                    <div className='questionBox' key={question.queOnly}>
                                        <div className="order">
                                            {
                                                question.queLimit.required &&
                                                <span class="red">*</span>
                                            }
                                            {index+1}
                                        </div>
                                        <dl className="wrapper">
                                            <dt>
                                                {question.question}
                                            </dt>
                                            {question.options.map((option,oIndex)=>{
                                                return (<dd className={`clearfix ${(index===optionSelection[0]&&oIndex===optionSelection[1])?'selected':'123'}`} key={oIndex}>
                                                    <div className="inputDes">
                                                        {option.des}
                                                    </div>
                                                    <Input className="input" maxLength={option.maxWr} onChange={e=>{checkCheckbox(e.target.value,option.fillType,[index,oIndex])}} value={option.value}/>
                                                </dd>)
                                            })}
                                        </dl>
                                    </div>
                                )
                            }
                        } else if(question.queType==='InputTable') {
                            if(ifShow(question.isShow,index)) {
                                return (
                                    <div className='questionBox' key={question.queOnly}>
                                        <div className="order">
                                            {
                                                question.queLimit.required &&
                                                <span className="red">*</span>
                                            }
                                            {index+1}
                                        </div>
                                        <dl className="wrapper">
                                            <dt>
                                                {question.question}
                                            </dt>
                                            {question.des &&
                                            <dd>{question.des}</dd>}
                                            <dd className="clearfix" style={{width:'auto'}}>
                                                <Table dataSource={question.options.row}>
                                                    <Column title="" dataIndex="name"/>
                                                    {question.options.column.map((column,oIndex)=>{
                                                        return (
                                                            <>
                                                            {
                                                                <Column
                                                                    title={column.name}
                                                                    key="name"
                                                                    render={(text) => (
                                                                        <>
                                                                            <Input onChange={e=>{text.value[oIndex] = e.target.value}} value={text.value[oIndex]}></Input>
                                                                        </>
                                                                    )}
                                                                />
                                                            }
                                                            </>
                                                        )
                                                    })}
                                                    
                                                </Table>
                                            </dd>
                                        </dl>
                                    </div>
                                )
                            }
                        }
                    })}
                </div>
            }
        </div>
    )
}

export default FormBuilder