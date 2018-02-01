(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('react'), require('prop-types')) :
  typeof define === 'function' && define.amd ? define(['react', 'prop-types'], factory) :
  (global.ytTable = factory(global.React,global.PropTypes));
}(this, (function (React,PropTypes) { 'use strict';

function __$$styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}
React = 'default' in React ? React['default'] : React;
PropTypes = 'default' in PropTypes ? PropTypes['default'] : PropTypes;

var config = {
    "ytTablePerfix": 'yt-table'
};

var asyncGenerator = function () {
  function AwaitValue(value) {
    this.value = value;
  }

  function AsyncGenerator(gen) {
    var front, back;

    function send(key, arg) {
      return new Promise(function (resolve, reject) {
        var request = {
          key: key,
          arg: arg,
          resolve: resolve,
          reject: reject,
          next: null
        };

        if (back) {
          back = back.next = request;
        } else {
          front = back = request;
          resume(key, arg);
        }
      });
    }

    function resume(key, arg) {
      try {
        var result = gen[key](arg);
        var value = result.value;

        if (value instanceof AwaitValue) {
          Promise.resolve(value.value).then(function (arg) {
            resume("next", arg);
          }, function (arg) {
            resume("throw", arg);
          });
        } else {
          settle(result.done ? "return" : "normal", result.value);
        }
      } catch (err) {
        settle("throw", err);
      }
    }

    function settle(type, value) {
      switch (type) {
        case "return":
          front.resolve({
            value: value,
            done: true
          });
          break;

        case "throw":
          front.reject(value);
          break;

        default:
          front.resolve({
            value: value,
            done: false
          });
          break;
      }

      front = front.next;

      if (front) {
        resume(front.key, front.arg);
      } else {
        back = null;
      }
    }

    this._invoke = send;

    if (typeof gen.return !== "function") {
      this.return = undefined;
    }
  }

  if (typeof Symbol === "function" && Symbol.asyncIterator) {
    AsyncGenerator.prototype[Symbol.asyncIterator] = function () {
      return this;
    };
  }

  AsyncGenerator.prototype.next = function (arg) {
    return this._invoke("next", arg);
  };

  AsyncGenerator.prototype.throw = function (arg) {
    return this._invoke("throw", arg);
  };

  AsyncGenerator.prototype.return = function (arg) {
    return this._invoke("return", arg);
  };

  return {
    wrap: function (fn) {
      return function () {
        return new AsyncGenerator(fn.apply(this, arguments));
      };
    },
    await: function (value) {
      return new AwaitValue(value);
    }
  };
}();

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

var inherits = function (subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      enumerable: false,
      writable: true,
      configurable: true
    }
  });
  if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
};

var possibleConstructorReturn = function (self, call) {
  if (!self) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return call && (typeof call === "object" || typeof call === "function") ? call : self;
};

var ytTablePerfix$3 = config.ytTablePerfix;

// currentType: ['input', 'text']

var Input = function (_React$Component) {
	inherits(Input, _React$Component);

	function Input(props) {
		classCallCheck(this, Input);

		var _this = possibleConstructorReturn(this, _React$Component.call(this, props));

		_this.onChange = function (e) {
			var _this$props = _this.props,
			    onCellChange = _this$props.onCellChange,
			    rowKey = _this$props.rowKey,
			    cellKey = _this$props.cellKey;

			var nextValue = e.target.value;
			onCellChange && onCellChange(rowKey, cellKey, nextValue);
		};

		_this.onSpanClick = function () {
			_this.setState({
				currentType: 'input'
			}, function () {
				_this.inputRef && _this.inputRef.select();
			});
		};

		_this.onBlur = function () {
			_this.setState({
				currentType: 'text'
			});
		};

		_this.state = {
			currentType: 'text'
		};
		return _this;
	}

	Input.prototype.render = function render() {
		var _this2 = this;

		var value = this.props.value;
		var currentType = this.state.currentType;

		var result = React.createElement(
			'span',
			{
				className: ytTablePerfix$3 + '-cell-span',
				style: {
					width: '100%',
					height: '100%',
					display: 'inline-block'
				},
				onClick: this.onSpanClick
			},
			value
		);
		if (currentType == 'input') {
			result = React.createElement('input', {
				className: ytTablePerfix$3 + '-cell-input',
				ref: function ref(_ref) {
					_this2.inputRef = _ref;
				},
				onChange: this.onChange,
				value: value,
				onBlur: this.onBlur,
				type: 'text'
			});
		}
		return result;
	};

	return Input;
}(React.Component);

var ytTablePerfix$4 = config.ytTablePerfix;

var SelectCell = function (_React$Component) {
    inherits(SelectCell, _React$Component);

    function SelectCell() {
        var _temp, _this, _ret;

        classCallCheck(this, SelectCell);

        for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
            args[_key] = arguments[_key];
        }

        return _ret = (_temp = (_this = possibleConstructorReturn(this, _React$Component.call.apply(_React$Component, [this].concat(args))), _this), _this.onChange = function (e) {
            var _this$props = _this.props,
                onCellChange = _this$props.onCellChange,
                rowKey = _this$props.rowKey,
                cellKey = _this$props.cellKey;

            console.log(e.target.value);
            onCellChange && onCellChange(rowKey, cellKey, e.target.value);
        }, _temp), possibleConstructorReturn(_this, _ret);
    }

    SelectCell.prototype.render = function render() {
        var value = this.props.value;


        return React.createElement(
            'select',
            { value: value, className: ytTablePerfix$4 + '-cell-select', onChange: this.onChange },
            React.createElement(
                'option',
                { value: 'ss' },
                'sss'
            ),
            React.createElement(
                'option',
                { value: 'sss' },
                'sss'
            ),
            React.createElement(
                'option',
                { value: 'ssss' },
                'ssss'
            ),
            React.createElement(
                'option',
                { value: 'sssss' },
                'sssss'
            )
        );
    };

    return SelectCell;
}(React.Component);

var ytTablePerfix$2 = config.ytTablePerfix;


function renderCell(record, column, props) {
	var type = column.type,
	    key = column.key;

	var result = record[key];
	switch (type) {
		case 'input':
			{
				result = React.createElement(Input, _extends({}, props, { value: result }));
				break;
			}
		case 'select':
			{
				result = React.createElement(SelectCell, _extends({}, props, { value: result }));
			}
	}
	return result;
}

var TableCell = function TableCell(props) {
	var column = props.column,
	    record = props.record;
	var width = column.width,
	    warp = column.warp,
	    render = column.render,
	    key = column.key;

	return React.createElement(
		'div',
		{
			className: ytTablePerfix$2 + '-row-cell',
			key: key,
			style: {
				// width: width || 100,
			}
		},
		React.createElement(
			'div',
			{
				className: ytTablePerfix$2 + '-row-cell-content ' + (warp ? ytTablePerfix$2 + '-warp' : ytTablePerfix$2 + '-nowarp')
			},
			render ? render(record[key], record) : renderCell(record, column, props)
		)
	);
};

var ytTablePerfix$1 = config.ytTablePerfix;

var TableRow = function (_React$PureComponent) {
	inherits(TableRow, _React$PureComponent);

	function TableRow() {
		var _temp, _this, _ret;

		classCallCheck(this, TableRow);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = possibleConstructorReturn(this, _React$PureComponent.call.apply(_React$PureComponent, [this].concat(args))), _this), _this.handleRowClick = function (e) {
			var _this$props = _this.props,
			    changeCurrentRowKey = _this$props.changeCurrentRowKey,
			    rowKey = _this$props.rowKey,
			    handleRowClick = _this$props.handleRowClick;

			changeCurrentRowKey(rowKey);
			handleRowClick && handleRowClick(rowKey);
		}, _this.handleDoubleRowClick = function (e) {
			var _this$props2 = _this.props,
			    changeCurrentRowKey = _this$props2.changeCurrentRowKey,
			    rowKey = _this$props2.rowKey,
			    handleDoubleRowClick = _this$props2.handleDoubleRowClick;

			changeCurrentRowKey(rowKey);
			handleDoubleRowClick && handleDoubleRowClick(rowKey);
		}, _temp), possibleConstructorReturn(_this, _ret);
	}

	TableRow.prototype.render = function render() {
		var _this2 = this;

		var _props = this.props,
		    record = _props.record,
		    columns = _props.columns,
		    rowKey = _props.rowKey,
		    currentRowKey = _props.currentRowKey;

		var isSelectedRow = rowKey === currentRowKey;
		return React.createElement(
			'div',
			{
				onClick: this.handleRowClick,
				onDoubleClick: this.handleDoubleRowClick,
				className: ytTablePerfix$1 + '-row ' + (isSelectedRow ? ytTablePerfix$1 + '-selected-row' : '')
			},
			columns.map(function (column) {
				return React.createElement(TableCell, _extends({}, _this2.props, {
					cellKey: column.key,
					key: column.key,
					column: column
				}));
			})
		);
	};

	return TableRow;
}(React.PureComponent);

var ytTablePerfix = config.ytTablePerfix;

var TableBody = function (_React$Component) {
    inherits(TableBody, _React$Component);

    function TableBody(props) {
        classCallCheck(this, TableBody);

        var _this = possibleConstructorReturn(this, _React$Component.call(this, props));

        _this.changeCurrentRowKey = function (val, callback) {
            _this.setState({
                currentRowKey: val
            }, function () {
                callback && callback();
            });
        };

        _this.state = {
            currentRowKey: -1
        };
        return _this;
    }

    TableBody.prototype.render = function render() {
        var _this2 = this;

        var _props = this.props,
            dataSource = _props.dataSource,
            getRowKey = _props.getRowKey,
            columns = _props.columns;
        var currentRowKey = this.state.currentRowKey;

        return React.createElement(
            'div',
            { className: ytTablePerfix + '-tbody' },
            dataSource.map(function (record) {
                return React.createElement(TableRow, _extends({}, _this2.props, {
                    currentRowKey: currentRowKey,
                    key: getRowKey(record),
                    rowKey: getRowKey(record),
                    record: record,
                    changeCurrentRowKey: _this2.changeCurrentRowKey
                }));
            })
        );
    };

    return TableBody;
}(React.Component);

var ytTablePerfix$5 = config.ytTablePerfix;


function TableHeader(props) {
	var columns = props.columns,
	    theadHeight = props.theadHeight;

	var usedColumns = [].concat(columns);
	return React.createElement(
		'div',
		{ className: ytTablePerfix$5 + '-thead' },
		columns.map(function (item) {
			var key = item.key,
			    title = item.title,
			    width = item.width,
			    render = item.render,
			    _item$fatherTitle = item.fatherTitle,
			    fatherTitle = _item$fatherTitle === undefined ? {} : _item$fatherTitle;

			if (fatherTitle.title) {
				var subArr = columns.filter(function (column) {
					return (column.fatherTitle || {}).title == fatherTitle.title;
				});
				var index = subArr.findIndex(function (it) {
					return it.key === key;
				});
				if (index === 0) {
					return React.createElement(
						'div',
						{
							className: ytTablePerfix$5 + '-thead-cell-mul ' + ytTablePerfix$5 + '-last-child-no-border',
							key: key,
							style: {
								flex: subArr.length
							}
						},
						React.createElement(
							'div',
							{
								className: ytTablePerfix$5 + '-thead-cell-mul-top ' + ytTablePerfix$5 + '-up-down-center'
							},
							title
						),
						React.createElement(
							'div',
							{
								className: ytTablePerfix$5 + '-thead-cell-mul-bottom'
							},
							subArr.map(function (ele) {
								return React.createElement(
									'div',
									{
										key: ele.key,
										className: ytTablePerfix$5 + '-thead-cell-mul-bottom-item ' + ytTablePerfix$5 + '-up-down-center'
									},
									ele.title
								);
							})
						)
					);
				} else {
					return null;
				}
			}
			return React.createElement(
				'div',
				{
					className: ytTablePerfix$5 + '-thead-cell ' + ytTablePerfix$5 + '-last-child-no-border ' + ytTablePerfix$5 + '-up-down-center',
					key: key,
					style: {}
				},
				title
			);
		})
	);
}

var css = "* {\n  box-sizing: border-box;\n}\n.yt-table-container {\n  height: inherit;\n  width: auto;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\n.yt-table-container .yt-table-thead {\n  background: #f9f9f9;\n  border: 1px solid #d9d9d9;\n  display: flex;\n  flex-direction: row;\n  text-align: center;\n}\n.yt-table-container .yt-table-thead .yt-table-thead-cell {\n  flex: 1;\n  min-height: 30px;\n  border-right: 1px solid #d9d9d9;\n}\n.yt-table-container .yt-table-thead .yt-table-thead-cell:last-child {\n  border-right: 0px;\n}\n.yt-table-container .yt-table-thead .yt-table-thead-cell-mul {\n  border-right: 1px solid #d9d9d9;\n  border-bottom: 0px;\n  display: flex;\n  flex-direction: column;\n}\n.yt-table-container .yt-table-thead .yt-table-thead-cell-mul .yt-table-thead-cell-mul-top {\n  flex: 1;\n  min-height: 30px;\n  border-bottom: 1px solid #d9d9d9;\n}\n.yt-table-container .yt-table-thead .yt-table-thead-cell-mul .yt-table-thead-cell-mul-bottom {\n  flex: 1;\n  display: flex;\n  min-height: 30px;\n  flex-direction: row;\n}\n.yt-table-container .yt-table-thead .yt-table-thead-cell-mul .yt-table-thead-cell-mul-bottom .yt-table-thead-cell-mul-bottom-item {\n  width: 100%;\n  border-right: 1px solid #d9d9d9;\n}\n.yt-table-container .yt-table-thead .yt-table-thead-cell-mul .yt-table-thead-cell-mul-bottom .yt-table-thead-cell-mul-bottom-item:last-child {\n  border-right: 0px;\n}\n.yt-table-container .yt-table-tbody {\n  flex: 1;\n  border: 1px solid #d9d9d9;\n  border-top: 0px;\n  margin-left: calc(0vw);\n  overflow: auto;\n}\n.yt-table-container .yt-table-tbody .yt-table-row {\n  border-bottom: 1px solid #d9d9d9;\n  display: flex;\n  flex-direction: row;\n}\n.yt-table-container .yt-table-tbody .yt-table-row:hover {\n  background-color: #ecf6fd;\n}\n.yt-table-container .yt-table-tbody .yt-table-row:last-child {\n  border-bottom: 0px;\n}\n.yt-table-container .yt-table-tbody .yt-table-row .yt-table-row-cell {\n  overflow: hidden;\n  flex: 1;\n  border-right: 1px solid #d9d9d9;\n  min-height: 30px;\n}\n.yt-table-container .yt-table-tbody .yt-table-row .yt-table-row-cell:last-child {\n  border-right: 0px;\n}\n.yt-table-container .yt-table-tbody .yt-table-row .yt-table-row-cell .yt-table-row-cell-content {\n  height: 100%;\n  width: 100%;\n}\n.yt-table-container .yt-table-tbody .yt-table-selected-row {\n  background: #90caf3;\n}\n.yt-table-container .yt-table-tbody .yt-table-selected-row:hover {\n  background-color: #90caf3;\n}\n.yt-table-nowarp {\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n.yt-table-warp {\n  word-wrap: break-word;\n}\n.yt-table-cell-span,\n.yt-table-row-cell-content {\n  width: 100%;\n  height: 100%;\n  display: inline-block;\n  line-height: 30px;\n}\n.yt-table-cell-input {\n  padding: 0;\n  margin: 0;\n  border: 0;\n  height: 100%;\n  width: 100%;\n}\n.yt-table-cell-select {\n  padding: 0;\n  margin: 0;\n  border: 0;\n  height: 100%;\n  width: 100%;\n  background: inherit;\n}\n.yt-table-last-child-no-border:last-child {\n  border-right: 0px !important;\n}\n.yt-table-up-down-center {\n  display: flex;\n  justify-content: center;\n  align-items: center;\n}\n";
__$$styleInject(css);

var Table = function (_React$Component) {
	inherits(Table, _React$Component);

	function Table(props) {
		classCallCheck(this, Table);

		var _this = possibleConstructorReturn(this, _React$Component.call(this, props));

		_this.state = {};
		return _this;
	}

	Table.prototype.render = function render() {
		return React.createElement(
			'div',
			{ className: 'yt-table-container' },
			React.createElement(TableHeader, this.props),
			React.createElement(TableBody, this.props)
		);
	};

	return Table;
}(React.Component);

Table.propTypes = {
	getRowKey: PropTypes.func.isRequired,
	columns: PropTypes.array.isRequired,
	dataSource: PropTypes.array.isRequired
};

return Table;

})));