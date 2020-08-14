"use strict";

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _react = _interopRequireWildcard(require("react"));

var _antd = require("antd");

var _icons = require("@ant-design/icons");

require("./formBuilder.scss");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { default: obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj.default = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { if (typeof Symbol === "undefined" || !(Symbol.iterator in Object(arr))) return; var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function FormBuilder(props) {
  var Column = _antd.Table.Column;
  var Option = _antd.Select.Option;

  var _useState = (0, _react.useState)(null),
      _useState2 = _slicedToArray(_useState, 2),
      questionSelect = _useState2[0],
      setQuestionSelect = _useState2[1];

  var _useState3 = (0, _react.useState)(new Array(2)),
      _useState4 = _slicedToArray(_useState3, 2),
      optionSelection = _useState4[0],
      setOptionSelection = _useState4[1]; // 选择题的classname


  var selectQClassName = function selectQClassName(index, oIndex, question) {
    var className = "clearfix column ";

    if (index === optionSelection[0] && oIndex === optionSelection[1]) {
      className += "selected ";
    }

    if (question.queLimit.arrange > 1 && question.queLimit.arrange < 5) {
      className += "column_" + question.queLimit.arrange;
    }

    return className;
  }; // 选择题的classname
  //dom


  function SelectQuestion(prop) {
    console.log("prop:", prop);
    var question = prop.question;
    var index = prop.index; //选项前的图标差分

    return /*#__PURE__*/_react.default.createElement("div", {
      className: "questionBox Fselect " + (questionSelect === index ? "selected" : ""),
      onClick: function onClick(e) {
        e.stopPropagation();
        selectQuestion(index);
      }
    }, /*#__PURE__*/_react.default.createElement("div", {
      className: "order"
    }, index + 1), /*#__PURE__*/_react.default.createElement("dl", {
      className: "wrapper"
    }, /*#__PURE__*/_react.default.createElement("dt", null, question.question, /*#__PURE__*/_react.default.createElement("div", {
      className: "iconBox"
    }, props.formData && index !== 0 && props.formData.length > 1 && /*#__PURE__*/_react.default.createElement(_icons.CaretUpOutlined, {
      className: "icon",
      onClick: function onClick(e) {
        e.stopPropagation();
        switchQuestion('up', index);
      }
    }), props.formData && index !== props.formData.length - 1 && props.formData.length > 1 && /*#__PURE__*/_react.default.createElement(_icons.CaretDownOutlined, {
      className: "icon",
      onClick: function onClick(e) {
        e.stopPropagation();
        switchQuestion('down', index);
      }
    }), /*#__PURE__*/_react.default.createElement(_icons.DeleteOutlined, {
      className: "icon",
      onClick: function onClick(e) {
        e.stopPropagation();
        delQuestion(index);
      }
    }))), question.des && /*#__PURE__*/_react.default.createElement("dd", null, question.des), question.options.map(function (option, oIndex) {
      return /*#__PURE__*/_react.default.createElement("dd", {
        className: selectQClassName(index, oIndex, question),
        key: option.value,
        onClick: function onClick(e) {
          e.stopPropagation();
          selectOption(index, oIndex);
        }
      }, question.queType === 'Radio' ? /*#__PURE__*/_react.default.createElement(_antd.Radio, {
        value: option.value
      }, option.des) : question.queType === 'Checkbox' ? /*#__PURE__*/_react.default.createElement(_antd.Checkbox, {
        value: option.value
      }, option.des) : question.queType === 'Select' ? /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_icons.DownOutlined, {
        style: {
          marginRight: 10 + 'px'
        }
      }), /*#__PURE__*/_react.default.createElement("span", null, option.des)) : '', option.hasInput && question.queType != 'Select' && /*#__PURE__*/_react.default.createElement(_antd.Input, {
        className: "input"
      }), questionSelect === index && /*#__PURE__*/_react.default.createElement(_antd.Button, {
        danger: true,
        style: {
          marginTop: 5 + 'px'
        },
        className: "del",
        size: "small",
        onClick: function onClick(e) {
          e.stopPropagation();
          delOption(index, oIndex);
        }
      }, "\u5220\u9664"));
    }), questionSelect === index && /*#__PURE__*/_react.default.createElement("dd", {
      className: "editBox"
    }, /*#__PURE__*/_react.default.createElement(_antd.Button, {
      className: "btn",
      size: "large",
      onClick: function onClick(e) {
        e.stopPropagation();
        addOption(index);
      }
    }, "\u65B0\u589E\u9009\u9879"))));
  } //dom
  // methods


  var selectQuestion = function selectQuestion(index) {
    setQuestionSelect(index);
    setOptionSelection(["", ""]);
    props.selectQuestionF("question", index);
  };

  var checkType = function checkType(type) {
    if (type === 'Radio' || type === 'Checkbox' || type === "Select") {
      return true;
    } else {
      return false;
    }
  };

  var delQuestion = function delQuestion(index) {
    setQuestionSelect(null);
    setOptionSelection(["", ""]);
    props.delQuestionF("delQuestion", index);
  };

  var switchQuestion = function switchQuestion(type, index) {
    setQuestionSelect(null);
    setOptionSelection(["", ""]);
    props.switchQuestionF(type, index);
  };

  var selectOption = function selectOption(index, oIndex) {
    setOptionSelection([index, oIndex]);
    props.selectQuestionF("option", [index, oIndex]);
  };

  var addOption = function addOption(index, roc) {
    props.addOptionF(index, roc);
  };

  var delOption = function delOption(index, oIndex) {
    props.delOptionF(index, oIndex);
  };

  var ifShow = function ifShow(_ifShow, index) {
    for (var i = 0; i < index; i++) {
      if (_ifShow.queOnly === props.formData[i].queOnly) {
        var checkvalue = false;

        if (props.formData[i].queType === "Checkbox") {
          props.formData[i].value.map(function (v) {
            if (v === _ifShow.value) {
              checkvalue = true;
            }
          });
        } else {
          if (props.formData[i].value === _ifShow.value) {
            checkvalue;
          }
        }

        if (_ifShow.check && checkvalue) {
          return true;
        }

        if (!_ifShow.check && !checkvalue) {
          return true;
        }

        return false;
      }
    }

    return true;
  };

  var selectChange = function selectChange(e, index, type) {
    var data = props.formData;

    if (type === 'Radio') {
      data[index].value = e.target.value;
      props.updateFormDataF(data);
    } else if (type === 'Checkbox') {
      if (data[index].queLimit.maxWr) {
        if (data[index].value.length < data[index].queLimit.maxWr) {
          data[index].value = e;
          props.updateFormDataF(data);
        }
      } else {
        data[index].value = e;
        props.updateFormDataF(data);
      }
    } else if (type === 'Select') {
      data[index].value = e;
      props.updateFormDataF(data);
    } else if (type === 'DatePicker') {
      data[index].value = e;
      props.updateFormDataF(data);
    }
  };

  var cuptColumn = function cuptColumn(num) {
    var str = "clearfix column ";

    if (num != 1) {
      str += "column_" + num.toString();
    }

    return str;
  };

  var checkCheckbox = function checkCheckbox(value, type, index) {
    var data = props.formData;

    if (type === "Number") {
      value = value.replace(/[^\d.]/g, '');
    } else if (type === "ZH") {
      value = value.replace(/[^\u4e00-\u9fa5]/g, '');
    } else if (type === "EN") {
      value = value.replace(/[^a-zA-Z]/g, '');
    }

    if (Array.isArray(index)) {
      data[index[0]].options[index[1]].value = value;
    } else {
      data[index].value = value;
    }

    props.updateFormDataF(data);
  }; // methods
  // useEffect(()=>{
  //     handleFormData();
  // },[props.formData,handleFormData])


  return /*#__PURE__*/_react.default.createElement("div", {
    className: "formBuilder",
    onClick: function onClick() {
      selectQuestion(null);
    }
  }, props.editMode && /*#__PURE__*/_react.default.createElement("div", {
    className: "contentBox"
  }, props.formData.map(function (question, index) {
    if (checkType(question.queType)) {
      return /*#__PURE__*/_react.default.createElement(SelectQuestion, {
        question: question,
        index: index,
        key: question.queOnly
      });
    } else if (question.queType === 'DatePicker') {
      return /*#__PURE__*/_react.default.createElement("div", {
        className: 'questionBox ' + (questionSelect === index ? 'selected' : ''),
        onClick: function onClick(e) {
          e.stopPropagation();
          selectQuestion(index);
        },
        key: question.queOnly
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "order"
      }, index + 1), /*#__PURE__*/_react.default.createElement("dl", {
        className: "wrapper"
      }, /*#__PURE__*/_react.default.createElement("dt", null, question.question, /*#__PURE__*/_react.default.createElement("div", {
        className: "iconBox"
      }, props.formData && index !== 0 && props.formData.length > 1 && /*#__PURE__*/_react.default.createElement(_icons.CaretUpOutlined, {
        className: "icon",
        onClick: function onClick(e) {
          e.stopPropagation();
          switchQuestion('up', index);
        }
      }), props.formData && index !== props.formData.length - 1 && props.formData.length > 1 && /*#__PURE__*/_react.default.createElement(_icons.CaretDownOutlined, {
        className: "icon",
        onClick: function onClick(e) {
          e.stopPropagation();
          switchQuestion('down', index);
        }
      }), /*#__PURE__*/_react.default.createElement(_icons.DeleteOutlined, {
        className: "icon",
        onClick: function onClick(e) {
          e.stopPropagation();
          delQuestion(index);
        }
      }))), question.des && /*#__PURE__*/_react.default.createElement("dd", null, question.des), /*#__PURE__*/_react.default.createElement("dd", {
        className: "clearfix"
      }, /*#__PURE__*/_react.default.createElement(_antd.DatePicker, null))));
    } else if (question.queType === 'RadioTable') {
      return /*#__PURE__*/_react.default.createElement("div", {
        className: 'questionBox ' + (questionSelect === index ? 'selected' : ''),
        onClick: function onClick(e) {
          e.stopPropagation();
          selectQuestion(index);
        },
        key: question.queOnly
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "order"
      }, index + 1), /*#__PURE__*/_react.default.createElement("dl", {
        className: "wrapper"
      }, /*#__PURE__*/_react.default.createElement("dt", null, question.question, /*#__PURE__*/_react.default.createElement("div", {
        className: "iconBox"
      }, props.formData && index !== 0 && props.formData.length > 1 && /*#__PURE__*/_react.default.createElement(_icons.CaretUpOutlined, {
        className: "icon",
        onClick: function onClick(e) {
          e.stopPropagation();
          switchQuestion('up', index);
        }
      }), props.formData && index !== props.formData.length - 1 && props.formData.length > 1 && /*#__PURE__*/_react.default.createElement(_icons.CaretDownOutlined, {
        className: "icon",
        onClick: function onClick(e) {
          e.stopPropagation();
          switchQuestion('down', index);
        }
      }), /*#__PURE__*/_react.default.createElement(_icons.DeleteOutlined, {
        className: "icon",
        onClick: function onClick(e) {
          e.stopPropagation();
          delQuestion(index);
        }
      }))), question.des && /*#__PURE__*/_react.default.createElement("dd", null, question.des), /*#__PURE__*/_react.default.createElement("dd", {
        className: "clearfix",
        style: {
          width: 'auto'
        }
      }, /*#__PURE__*/_react.default.createElement(_antd.Table, {
        dataSource: question.options.row
      }, /*#__PURE__*/_react.default.createElement(Column, {
        title: "",
        dataIndex: "name"
      }), question.options.column.map(function (column, oIndex) {
        return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, question.queLimit.selectType === "Radio" ? /*#__PURE__*/_react.default.createElement(Column, {
          title: column.name,
          render: function render(text) {
            return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_antd.Radio.Group, {
              value: text.value[0]
            }, /*#__PURE__*/_react.default.createElement(_antd.Radio, {
              onClick: function onClick() {
                text.value[0] = question.options.column[oIndex].value;
              },
              value: question.options.column[oIndex].value
            })));
          }
        }) : /*#__PURE__*/_react.default.createElement(Column, {
          title: column.name,
          render: function render(text) {
            return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_antd.Checkbox, {
              onChange: function onChange(e) {
                text.value[oIndex] = e.target.checked;
              },
              checked: text.value[oIndex]
            }));
          }
        }));
      }))), questionSelect === index && /*#__PURE__*/_react.default.createElement("dd", {
        className: "editBox"
      }, /*#__PURE__*/_react.default.createElement(_antd.Button, {
        className: "btn",
        size: "large",
        onClick: function onClick(e) {
          e.stopPropagation();
          addOption(index, 'row');
        }
      }, "\u65B0\u589E\u884C"), /*#__PURE__*/_react.default.createElement(_antd.Button, {
        className: "btn",
        size: "large",
        onClick: function onClick(e) {
          e.stopPropagation();
          addOption(index, 'column');
        }
      }, "\u65B0\u589E\u5217"))));
    } else if (question.queType === 'Input') {
      return /*#__PURE__*/_react.default.createElement("div", {
        className: 'questionBox ' + (questionSelect === index ? 'selected' : ''),
        onClick: function onClick(e) {
          e.stopPropagation();
          selectQuestion(index);
        },
        key: question.queOnly
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "order"
      }, index + 1), /*#__PURE__*/_react.default.createElement("dl", {
        className: "wrapper"
      }, /*#__PURE__*/_react.default.createElement("dt", null, question.question, /*#__PURE__*/_react.default.createElement("div", {
        className: "iconBox"
      }, props.formData && index !== 0 && props.formData.length > 1 && /*#__PURE__*/_react.default.createElement(_icons.CaretUpOutlined, {
        className: "icon",
        onClick: function onClick(e) {
          e.stopPropagation();
          switchQuestion('up', index);
        }
      }), props.formData && index !== props.formData.length - 1 && props.formData.length > 1 && /*#__PURE__*/_react.default.createElement(_icons.CaretDownOutlined, {
        className: "icon",
        onClick: function onClick(e) {
          e.stopPropagation();
          switchQuestion('down', index);
        }
      }), /*#__PURE__*/_react.default.createElement(_icons.DeleteOutlined, {
        className: "icon",
        onClick: function onClick(e) {
          e.stopPropagation();
          delQuestion(index);
        }
      }))), /*#__PURE__*/_react.default.createElement("dd", {
        className: "clearfix"
      }, /*#__PURE__*/_react.default.createElement(_antd.Input, {
        className: "input",
        value: question.value
      }))));
    } else if (question.queType === 'MultiInput') {
      return /*#__PURE__*/_react.default.createElement("div", {
        className: 'questionBox ' + (questionSelect === index ? 'selected' : ''),
        onClick: function onClick(e) {
          e.stopPropagation();
          selectQuestion(index);
        },
        key: question.queOnly
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "order"
      }, index + 1), /*#__PURE__*/_react.default.createElement("dl", {
        className: "wrapper"
      }, /*#__PURE__*/_react.default.createElement("dt", null, question.question, /*#__PURE__*/_react.default.createElement("div", {
        className: "iconBox"
      }, props.formData && index !== 0 && props.formData.length > 1 && /*#__PURE__*/_react.default.createElement(_icons.CaretUpOutlined, {
        className: "icon",
        onClick: function onClick(e) {
          e.stopPropagation();
          switchQuestion('up', index);
        }
      }), props.formData && index !== props.formData.length - 1 && props.formData.length > 1 && /*#__PURE__*/_react.default.createElement(_icons.CaretDownOutlined, {
        className: "icon",
        onClick: function onClick(e) {
          e.stopPropagation();
          switchQuestion('down', index);
        }
      }), /*#__PURE__*/_react.default.createElement(_icons.DeleteOutlined, {
        className: "icon",
        onClick: function onClick(e) {
          e.stopPropagation();
          delQuestion(index);
        }
      }))), question.options.map(function (option, oIndex) {
        return /*#__PURE__*/_react.default.createElement("dd", {
          className: "clearfix ".concat(index === optionSelection[0] && oIndex === optionSelection[1] ? 'selected' : '123'),
          key: oIndex,
          onClick: function onClick(e) {
            e.stopPropagation();
            selectOption(index, oIndex);
          }
        }, /*#__PURE__*/_react.default.createElement("div", {
          className: "inputDes"
        }, option.des, questionSelect === index && /*#__PURE__*/_react.default.createElement(_antd.Button, {
          danger: true,
          style: {
            marginTop: 5 + 'px'
          },
          className: "del",
          size: "small",
          onClick: function onClick() {
            delOption(index, oIndex);
          }
        }, "\u5220\u9664")), /*#__PURE__*/_react.default.createElement(_antd.Input, {
          className: "input",
          value: option.value
        }));
      }), questionSelect === index && /*#__PURE__*/_react.default.createElement("dd", {
        className: "editBox"
      }, /*#__PURE__*/_react.default.createElement(_antd.Button, {
        className: "btn",
        size: "large",
        onClick: function onClick(e) {
          e.stopPropagation();
          addOption(index);
        }
      }, "\u65B0\u589E\u9009\u9879"))));
    } else if (question.queType === 'InputTable') {
      return /*#__PURE__*/_react.default.createElement("div", {
        className: 'questionBox ' + (questionSelect === index ? 'selected' : ''),
        onClick: function onClick(e) {
          e.stopPropagation();
          selectQuestion(index);
        },
        key: question.queOnly
      }, /*#__PURE__*/_react.default.createElement("div", {
        className: "order"
      }, index + 1), /*#__PURE__*/_react.default.createElement("dl", {
        className: "wrapper"
      }, /*#__PURE__*/_react.default.createElement("dt", null, question.question, /*#__PURE__*/_react.default.createElement("div", {
        className: "iconBox"
      }, props.formData && index !== 0 && props.formData.length > 1 && /*#__PURE__*/_react.default.createElement(_icons.CaretUpOutlined, {
        className: "icon",
        onClick: function onClick(e) {
          e.stopPropagation();
          switchQuestion('up', index);
        }
      }), props.formData && index !== props.formData.length - 1 && props.formData.length > 1 && /*#__PURE__*/_react.default.createElement(_icons.CaretDownOutlined, {
        className: "icon",
        onClick: function onClick(e) {
          e.stopPropagation();
          switchQuestion('down', index);
        }
      }), /*#__PURE__*/_react.default.createElement(_icons.DeleteOutlined, {
        className: "icon",
        onClick: function onClick(e) {
          e.stopPropagation();
          delQuestion(index);
        }
      }))), question.des && /*#__PURE__*/_react.default.createElement("dd", null, question.des), /*#__PURE__*/_react.default.createElement("dd", {
        className: "clearfix",
        style: {
          width: 'auto'
        }
      }, /*#__PURE__*/_react.default.createElement(_antd.Table, {
        dataSource: question.options.row
      }, /*#__PURE__*/_react.default.createElement(Column, {
        title: "",
        dataIndex: "name"
      }), question.options.column.map(function (column, oIndex) {
        return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(Column, {
          title: column.name,
          key: "name",
          render: function render(text) {
            return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_antd.Input, {
              value: text.value[oIndex]
            }));
          }
        }));
      }))), questionSelect === index && /*#__PURE__*/_react.default.createElement("dd", {
        className: "editBox"
      }, /*#__PURE__*/_react.default.createElement(_antd.Button, {
        className: "btn",
        size: "large",
        onClick: function onClick(e) {
          e.stopPropagation();
          addOption(index, 'row');
        }
      }, "\u65B0\u589E\u884C"), /*#__PURE__*/_react.default.createElement(_antd.Button, {
        className: "btn",
        size: "large",
        onClick: function onClick(e) {
          e.stopPropagation();
          addOption(index, 'column');
        }
      }, "\u65B0\u589E\u5217"))));
    }
  })), !props.editMode && /*#__PURE__*/_react.default.createElement("div", {
    className: "contentBox"
  }, props.formData.map(function (question, index) {
    if (checkType(question.queType)) {
      if (ifShow(question.isShow, index)) {
        return /*#__PURE__*/_react.default.createElement("div", {
          className: "questionBox Fselect",
          key: question.queOnly
        }, /*#__PURE__*/_react.default.createElement("div", {
          className: "order"
        }, !props.editMode && question.queLimit.required && /*#__PURE__*/_react.default.createElement("span", {
          class: "red"
        }, "*"), index + 1), /*#__PURE__*/_react.default.createElement("dl", {
          className: "wrapper"
        }, /*#__PURE__*/_react.default.createElement("dt", null, question.question), question.des && /*#__PURE__*/_react.default.createElement("dd", null, question.des), question.queType === 'Radio' ? /*#__PURE__*/_react.default.createElement(_antd.Radio.Group, {
          onChange: function onChange(e) {
            selectChange(e, index, 'Radio');
          },
          value: question.value,
          style: {
            width: '100%'
          }
        }, question.options.map(function (option, oIndex) {
          return /*#__PURE__*/_react.default.createElement("dd", {
            key: option.value,
            className: cuptColumn(question.queLimit.arrange)
          }, /*#__PURE__*/_react.default.createElement(_antd.Radio, {
            value: option.value
          }, option.des), option.hasInput && /*#__PURE__*/_react.default.createElement(_antd.Input, {
            className: "input",
            value: question.inputValue[oIndex]
          }));
        })) : question.queType === 'Checkbox' ? /*#__PURE__*/_react.default.createElement(_antd.Checkbox.Group, {
          onChange: function onChange(e) {
            selectChange(e, index, 'Checkbox');
          },
          value: question.value,
          style: {
            width: '100%'
          }
        }, question.options.map(function (option, oIndex) {
          return /*#__PURE__*/_react.default.createElement("dd", {
            key: option.value,
            className: cuptColumn(question.queLimit.arrange)
          }, /*#__PURE__*/_react.default.createElement(_antd.Checkbox, {
            value: option.value
          }, option.des), option.hasInput && /*#__PURE__*/_react.default.createElement(_antd.Input, {
            className: "input",
            value: question.inputValue[oIndex]
          }));
        })) : question.queType === "Select" ? /*#__PURE__*/_react.default.createElement(_antd.Select, {
          style: {
            width: '100%'
          },
          defaultValue: question.value,
          onChange: function onChange(e) {
            selectChange(e, index, "Select");
          }
        }, question.options.map(function (option) {
          return /*#__PURE__*/_react.default.createElement(Option, {
            key: option.value,
            value: option.value
          }, option.des);
        })) : ""));
      }
    } else if (question.queType === 'DatePicker') {
      if (ifShow(question.isShow, index)) {
        return /*#__PURE__*/_react.default.createElement("div", {
          className: "questionBox",
          key: question.queOnly
        }, /*#__PURE__*/_react.default.createElement("div", {
          className: "order"
        }, question.queLimit.required && /*#__PURE__*/_react.default.createElement("span", {
          class: "red"
        }, "*"), index + 1), /*#__PURE__*/_react.default.createElement("dl", {
          className: "wrapper"
        }, /*#__PURE__*/_react.default.createElement("dt", null, question.question), question.des && /*#__PURE__*/_react.default.createElement("dd", null, question.des), /*#__PURE__*/_react.default.createElement("dd", {
          className: "clearfix"
        }, /*#__PURE__*/_react.default.createElement(_antd.DatePicker, {
          onChange: function onChange(date, str) {
            selectChange(str, index, 'DatePicker');
          }
        }))));
      }
    } else if (question.queType === 'RadioTable') {
      if (ifShow(question.isShow, index)) {
        return /*#__PURE__*/_react.default.createElement("div", {
          className: "questionBox",
          key: question.queOnly
        }, /*#__PURE__*/_react.default.createElement("div", {
          className: "order"
        }, question.queLimit.required && /*#__PURE__*/_react.default.createElement("span", {
          class: "red"
        }, "*"), index + 1), /*#__PURE__*/_react.default.createElement("dl", {
          className: "wrapper"
        }, /*#__PURE__*/_react.default.createElement("dt", null, question.question), question.des && /*#__PURE__*/_react.default.createElement("dd", null, question.des), /*#__PURE__*/_react.default.createElement("dd", {
          className: "clearfix",
          style: {
            width: 'auto'
          }
        }, /*#__PURE__*/_react.default.createElement(_antd.Table, {
          dataSource: question.options.row
        }, /*#__PURE__*/_react.default.createElement(Column, {
          title: "",
          dataIndex: "name"
        }), question.options.column.map(function (column, oIndex) {
          return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, question.queLimit.selectType === "Radio" ? /*#__PURE__*/_react.default.createElement(Column, {
            title: column.name,
            render: function render(text) {
              return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_antd.Radio.Group, {
                value: text.value[0]
              }, /*#__PURE__*/_react.default.createElement(_antd.Radio, {
                onClick: function onClick() {
                  text.value[0] = question.options.column[oIndex].value;
                },
                value: question.options.column[oIndex].value
              })));
            }
          }) : /*#__PURE__*/_react.default.createElement(Column, {
            title: column.name,
            render: function render(text) {
              return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_antd.Checkbox, {
                onChange: function onChange(e) {
                  text.value[oIndex] = e.target.checked;
                },
                checked: text.value[oIndex]
              }));
            }
          }));
        })))));
      }
    } else if (question.queType === 'Input') {
      if (ifShow(question.isShow, index)) {
        return /*#__PURE__*/_react.default.createElement("div", {
          className: "questionBox",
          key: question.queOnly
        }, /*#__PURE__*/_react.default.createElement("div", {
          className: "order"
        }, question.queLimit.required && /*#__PURE__*/_react.default.createElement("span", {
          class: "red"
        }, "*"), index + 1), /*#__PURE__*/_react.default.createElement("dl", {
          className: "wrapper"
        }, /*#__PURE__*/_react.default.createElement("dt", null, question.question), /*#__PURE__*/_react.default.createElement("dd", {
          className: "clearfix"
        }, /*#__PURE__*/_react.default.createElement(_antd.Input, {
          className: "input",
          maxLength: question.queLimit.maxWr,
          onChange: function onChange(e) {
            checkCheckbox(e.target.value, question.queLimit.fillType, index);
          },
          value: question.value
        }))));
      }
    } else if (question.queType === 'MultiInput') {
      if (ifShow(question.isShow, index)) {
        return /*#__PURE__*/_react.default.createElement("div", {
          className: "questionBox",
          key: question.queOnly
        }, /*#__PURE__*/_react.default.createElement("div", {
          className: "order"
        }, question.queLimit.required && /*#__PURE__*/_react.default.createElement("span", {
          class: "red"
        }, "*"), index + 1), /*#__PURE__*/_react.default.createElement("dl", {
          className: "wrapper"
        }, /*#__PURE__*/_react.default.createElement("dt", null, question.question), question.options.map(function (option, oIndex) {
          return /*#__PURE__*/_react.default.createElement("dd", {
            className: "clearfix ".concat(index === optionSelection[0] && oIndex === optionSelection[1] ? 'selected' : '123'),
            key: oIndex
          }, /*#__PURE__*/_react.default.createElement("div", {
            className: "inputDes"
          }, option.des), /*#__PURE__*/_react.default.createElement(_antd.Input, {
            className: "input",
            maxLength: option.maxWr,
            onChange: function onChange(e) {
              checkCheckbox(e.target.value, option.fillType, [index, oIndex]);
            },
            value: option.value
          }));
        })));
      }
    } else if (question.queType === 'InputTable') {
      if (ifShow(question.isShow, index)) {
        return /*#__PURE__*/_react.default.createElement("div", {
          className: "questionBox",
          key: question.queOnly
        }, /*#__PURE__*/_react.default.createElement("div", {
          className: "order"
        }, question.queLimit.required && /*#__PURE__*/_react.default.createElement("span", {
          className: "red"
        }, "*"), index + 1), /*#__PURE__*/_react.default.createElement("dl", {
          className: "wrapper"
        }, /*#__PURE__*/_react.default.createElement("dt", null, question.question), question.des && /*#__PURE__*/_react.default.createElement("dd", null, question.des), /*#__PURE__*/_react.default.createElement("dd", {
          className: "clearfix",
          style: {
            width: 'auto'
          }
        }, /*#__PURE__*/_react.default.createElement(_antd.Table, {
          dataSource: question.options.row
        }, /*#__PURE__*/_react.default.createElement(Column, {
          title: "",
          dataIndex: "name"
        }), question.options.column.map(function (column, oIndex) {
          return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(Column, {
            title: column.name,
            key: "name",
            render: function render(text) {
              return /*#__PURE__*/_react.default.createElement(_react.default.Fragment, null, /*#__PURE__*/_react.default.createElement(_antd.Input, {
                onChange: function onChange(e) {
                  text.value[oIndex] = e.target.value;
                },
                value: text.value[oIndex]
              }));
            }
          }));
        })))));
      }
    }
  })));
}

var _default = FormBuilder;
exports.default = _default;