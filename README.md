# rFormBuilder-dddxxxlll

## 简介
一个基于React Hook的表单生成器

## 在线演示地址
<a href="https://dddxxxlll.github.io/rFormBuilder/">https://dddxxxlll.github.io/rFormBuilder/</a>

## Installation
```
npm i -S rformbuilder-dddxxxlll
```

## For Vue.js 2.0
### import in main.js
```
import formbuilder from 'rformbuilder-dddxxxlll'
```

### Use rformbuilder component:
```
<formbuilder @updateFormData="updateFormData" @switchQuestion="switchQuestion" @addOption="addOption" @delOption="delOption" @delQuestion="delQuestion" @selectQuestion="selectQuestion" :editMode="editMode" :formData="formData" class="formBuilder"></formbuilder>
```

### JSON schema
```
[
    {
        queType: "Radio",
        question: "这是一个单选题",
        queOnly: 0,
        queSeq: 0,
        value: 0,
        inputValue: "",//填空的值
        des: "",// 描述
        queLimit: {
            required: false,//必选
            score: 0,// 分值
            weight: 0,// 权重
            arrange:1,// 选项排列
        },
        isShow: {
            queOnly: "",
            value: "",
            check: "",
        }, // 必要题目序号数组
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
        queType: "Checkbox",
        question: "这是一个多选题",
        queOnly: 1,
        queSeq: 1,
        value: [],
        inputValue: [],
        des: "",
        queLimit: {
            required: false,//必选
            score: 0,// 分值
            weight: 0,// 权重
            arrange:1,// 选项排列
            minWr: "",
            maxWr: ""
        },
        isShow: {
            queOnly: "",
            value: "",
            check: "",
        }, // 必要题目序号数组
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
        queType: "Select",
        question: "这是一个下拉选择",
        queOnly: 2,
        queSeq: 2,
        value: "",
        des: "",// 描述
        queLimit: {
            required: false,//必选
            score: 0,// 分值
            weight: 0,// 权重
            arrange:1,// 选项排列
        },
        isShow: {
            queOnly: "",
            value: "",
            check: "",
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
    },
    {
        queType: "DatePicker",
        question: "这是一个日期选择",
        queOnly: 3,
        queSeq: 3,
        value: 0,
        des: "",// 描述
        queLimit: {
            required: false,//必选
            score: 0,// 分值
            weight: 0,// 权重
        },
        isShow: {
            queOnly: 1,
            value: 1,
            check: false,
        }, // 必要题目序号数组
    },
    {
        queType: "RadioTable",
        question: "这是一个矩阵选择",
        queOnly: 4,
        queSeq: 4,
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
            check: "",
        }, // 必要题目序号数组
        // value: 0,
        options: {
            column: [{name:"选项1",value:1},{name:"选项2",value:2}],
            row: [{name:"行1",value:[]},{name:"行2",value:[]}],
        }
    },
    {
        queType: "Input",
        question: "这是一个填空题",
        queOnly: 5,
        queSeq: 5,
        value: "",
        des: "",
        queLimit: {
            required: false,//必选
            score: 0,// 分值
            weight: 0,// 权重
            fillType: "Number",
            minWr: 0,
            maxWr: 10
        },
        isShow: {
            queOnly: "",
            value: "",
            check: "",
        }, // 必要题目序号数组
    },
    {
        queType: "MultiInput",
        question: "这是一个多项选择题",
        queOnly: 6,
        queSeq: 6,
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
            check: "",
        }, // 必要题目序号数组
        options: [
            {
                des: "填空1",
                value: "",
                fillType: "Number", // 输入框type：Number,ZH,EN,None
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
    },
    {
        queType: "InputTable",
        question: "这是一个矩阵填空",
        queOnly: 7,
        queSeq: 7,
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
            column: [{name:"选项1",value:1},{name:"选项2",value:2}],
            row: [{name:"行1",value:[]},{name:"行2",value:[]}],//值为数组，有多少列就有多少个值
        }
    }
]
```