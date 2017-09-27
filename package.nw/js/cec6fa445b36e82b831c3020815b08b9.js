'use strict';var _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a};!function(require,directRequire){function a(){return{mainWindow:f.MAIN_WINDOW_TYPE.LOGIN,focus:f.WINDOW_FOCUS.BODY,moveToCenter:Date.now(),about:{show:!1},toolbar:{show:!0},debug:{show:!0,height:100},simulator:{show:!0,position:'left',width:500},customCompile:{show:'none'},editor:{show:!0,fileTreeShow:!0},qcloud:{uploadShow:!1,uploadIDCShow:!1,actionType:{deployDev:{ts:Date.now(),options:{}},installDependence:{ts:Date.now(),options:{}},restartService:{ts:Date.now(),options:{}}},info:{uploadSuccessTime:0,deploySuccessTime:0,installSuccessTime:0,restartSuccessTime:0},uploading:{show:!1,status:void 0,content:'',descList:[],estimateTime:void 0}},projectManagement:{show:!1},windowStatus:{mode:f.WINDOW_MODE.FULLSCREEN,position:{}},mask:{show:!1},popup:b()}}function b(){return{customAnalysis:{show:!1},mobileTest:{show:!1},selectProject:{show:!1},createProject:{show:!1}}}const c=require('lodash'),{REHYDRATE:d}=require('redux-persist/constants'),e=require('./0634ee2ebd3e560d9d4804ecc960160f.js'),f=require('./56c390e04c10e91a4aa2a2c19d9a885d.js'),g=require('./fb50036318d6bd7d2a71f03b2ad8f0a5.js');module.exports=function(g=a(),h){switch(h.type){case e.USER_LOGIN_EXPIRED:return g.mainWindow!=f.MAIN_WINDOW_TYPE.DEV&&g.mainWindow!=f.MAIN_WINDOW_TYPE.WEB_DEBUGGER?_extends({},g,{mainWindow:f.MAIN_WINDOW_TYPE.LOGIN}):g;case e.USER_REMOVE_INFO:return _extends({},g,{mainWindow:f.MAIN_WINDOW_TYPE.LOGIN});case e.LOGIN_AND_GOTO:return _extends({},g,{mainWindow:h.goto});case e.WINDOW_RECORD_FOCUS:return g.focus===h.focus?g:_extends({},g,{focus:h.focus});case e.WINDOW_SET_MAIN_WINDOW:return _extends({},g,{mainWindow:h.mainWindow});case e.PROJECT_CREATE_PROJECT_REQUEST:return g.mainWindow===f.MAIN_WINDOW_TYPE.DEV?_extends({},g,{create_project_popup:!0}):_extends({},g,{mainWindow:f.MAIN_WINDOW_TYPE.CREATE_PROJECT});case e.PROJECT_OPEN_PROJECT:return _extends({},g,{popup:b(),mainWindow:f.MAIN_WINDOW_TYPE.DEV});case e.PROJECT_CLOSE_PROJECT:return _extends({},g,{moveToCenter:Date.now(),mainWindow:f.MAIN_WINDOW_TYPE.SELECT_PROJECT});case e.PROJECT_SELECT_PROJECT_CANCEL:return g.mainWindow===f.MAIN_WINDOW_TYPE.SELECT_PROJECT?_extends({},g,{mainWindow:f.MAIN_WINDOW_TYPE.ENTRANCE}):g;case e.PROJECT_SELECT_PROJECT_OPEN:return g.popup.selectProject&&!g.popup.selectProject.show?_extends({},g,{popup:_extends({},g.popup,{selectProject:{show:!0}})}):g;case e.PROJECT_SELECT_PROJECT_CLOSE:return g.popup.selectProject&&g.popup.selectProject.show?_extends({},g,{popup:_extends({},g.popup,{selectProject:{show:!1}})}):g;case e.PROJECT_CREATE_PROJECT_OPEN:return g.popup.createProject&&!g.popup.createProject.show?_extends({},g,{popup:_extends({},g.popup,{createProject:{show:!0}})}):g;case e.PROJECT_CREATE_PROJECT_CLOSE:return g.popup.createProject&&g.popup.createProject.show?_extends({},g,{popup:_extends({},g.popup,{createProject:{show:!1}})}):g;case e.PROJECT_CREATE_PROJECT_CANCEL:return g.mainWindow===f.MAIN_WINDOW_TYPE.CREATE_PROJECT?_extends({},g,{mainWindow:f.MAIN_WINDOW_TYPE.SELECT_PROJECT}):g;case e.WINDOW_MAXIMIZE:return _extends({},g,{windowStatus:{mode:f.WINDOW_MODE.MAX}});case e.WINDOW_MINIMIZE:return _extends({},g,{windowStatus:{mode:f.WINDOW_MODE.MIN}});case e.WINDOW_FULLSCREEN:return _extends({},g,{windowStatus:{mode:f.WINDOW_MODE.FULLSCREEN}});case e.WINDOW_RESIZE:return _extends({},g,{windowStatus:{mode:f.WINDOW_MODE.FREE,position:_extends({},g.windowStatus.position,h.position)}});case e.WINDOW_SET_ABOUT:return _extends({},g,{about:_extends({},g.about,h.data)});case e.WINDOW_SET_DEBUGGER:return _extends({},g,{debug:_extends({},g.debug,h.data)});case e.WINDOW_TOGGLE_DEBUGGER:{let a=g.simulator.show,b=g.editor.show,c=!g.debug.show;return a||b||(c=!0),_extends({},g,{debug:_extends({},g.debug,{show:c})})}case e.WINDOW_SET_SIMULATOR:return _extends({},g,{simulator:_extends({},g.simulator,h.data)});case e.WINDOW_TOGGLE_SIMULATOR:{let a=g.debug.show,b=g.editor.show,c=!g.simulator.show;return a||b||(c=!0),_extends({},g,{simulator:_extends({},g.simulator,{show:c})})}case e.WINDOW_TOGGLE_SIMULATOR_POSITION:return _extends({},g,{simulator:_extends({},g.simulator,{position:'left'===g.simulator.position?'right':'left'})});case e.WINDOW_TOGGLE_EDITOR:{let a=g.debug.show,b=g.simulator.show,c=!g.editor.show;return a||b||(c=!0),_extends({},g,{editor:_extends({},g.editor,{show:c})})}case e.WINDOW_TOGGLE_TOOLBAR:return _extends({},g,{toolbar:{show:!g.toolbar.show}});case e.WINDOW_SET_MASK:return _extends({},g,{mask:{show:h.show,type:h.maskType}});case e.WINDOW_SET_CUSTOMCOMPILE:return _extends({},g,{customCompile:_extends({},g.customCompile,h.data)});case e.WINDOW_SET_QCLOUD:return _extends({},g,{qcloud:_extends({},g.qcloud,h.data,{uploading:_extends({},g.qcloud.uploading,h.data.uploading)})});case e.WINDOW_SET_QCLOUD_ACTION:return _extends({},g,{qcloud:_extends({},g.qcloud,{actionType:_extends({},g.qcloud.actionType,{[h.data.actionType]:{ts:Date.now(),options:h.data.options}})})});case e.WINDOW_SET_EDITOR:return _extends({},g,{editor:_extends({},g.editor,h.data)});case e.WINDOW_SET_PROJECT_MANAGEMENT:return _extends({},g,{projectManagement:_extends({},g.projectManagement,h.data)});case e.INFO_OPEN_EDITOR_FILE:return _extends({},g,{editor:_extends({},g.editor,{show:!0})});case d:{const a=c.merge(c.cloneDeep(g),h.payload.window||{});let b;const d=a||{};return b=d.mainWindow?d.mainWindow===f.MAIN_WINDOW_TYPE.CREATE_PROJECT||d.mainWindow===f.MAIN_WINDOW_TYPE.SELECT_PROJECT?f.MAIN_WINDOW_TYPE.ENTRANCE:d.mainWindow:f.MAIN_WINDOW_TYPE.LOGIN,a.focus=f.WINDOW_FOCUS.BODY,a.mask={show:!1},a.popup=g.popup,a.customCompile.show='none',a.qcloud.uploadShow=!1,a.qcloud.uploadIDCShow=!1,a.qcloud.uploading&&(a.qcloud.uploading.show=!1,a.qcloud.uploading.descList=[]),a.projectManagement.show=!1,_extends({},a,{mainWindow:b})}default:return g;}}}(require('lazyload'),require);