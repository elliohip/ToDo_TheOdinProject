(()=>{"use strict";var __webpack_modules__={426:(module,__webpack_exports__,__webpack_require__)=>{eval("/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(81);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(645);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"#main-content {\\n\\n    background-color: rgb(104, 172, 203);\\n    grid-row-start: 2;\\n    height: fit-content;\\n}\\n\\n*{\\n    font-family:system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;\\n}\\n\\n#wrapper {\\n    display: grid;\\n    grid-template-rows: 1fr fit-content;\\n    grid-template-columns: 1fr 5fr;\\n}\\n\\nnav{\\n    grid-row-start: 2;\\n    grid-column-end: 2;\\n}\\n\\n.checkbox-box {\\n    border: black solid 1px;\\n    width: 10px;\\n    height: 10px;\\n}\\n\\n.remove-selected-items {\\n    border: black solid 1px;\\n}\\n\\n.project-item-selector {\\n    background-color: dodgerblue;\\n}\\n\\n.projects-bar-show-projects {\\n    background-color: deepskyblue;\\n}\\n\\n.Todo-Item {\\n    background-color: deepskyblue;\\n    display: grid;\\n    grid-template-columns: 1fr 1fr;\\n    justify-content: space-between;\\n    width: clamp(200px, 40%, 700px);\\n\\n    border: solid gray 1px;\\n\\n    justify-self: center;\\n    gap: 10px;\\n}\\n\\n.Todo-Item *{\\n    border: solid gray 1px;\\n}\\n\\n.Todo-Item h1{\\n    grid-column-start: 1;\\n    grid-column-end: 3;\\n    justify-self: center;\\n}\\n\\n.Todo-Item .Todo-Item-description {\\n    grid-column-start: 1;\\n    grid-column-end: 3;\\n    grid-row-start: 2;\\n    grid-row-end: 5;\\n    justify-self: center;\\n    width: clamp(200px, 50%, 800px);\\n    font-size: 15pt;\\n    min-width: 200px;\\n    word-wrap: break-word;\\n}\\n\\n.Project {\\n    display: grid;\\n    grid-template-columns: 1fr;\\n}\\n\\n.Todo-List-Content{\\n    display: grid;\\n    grid-template-columns: 1fr;\\n    gap: 15px;\\n    justify-content: space-between;\\n    \\n}\\n\\nnav * {\\n    background-color: cornflowerblue;\\n}\\n\\n.remove-list{\\n    display: grid;\\n    grid-template-columns: 1fr 3fr 1fr;\\n    grid-template-rows: 1fr;\\n    max-height: 18px;\\n}\\n\\n.Todo-List-Header{\\n    font-size: large;\\n}\\n\\n.Todo-List-Content div{\\n    display: grid;\\n    justify-content: center;\\n}\\n\\n.Todo-List-Content div h1{\\n    align-self: center;\\n    justify-self: center;\\n}\\n\\n.remove-list-input{\\n    background-color: white;\\n    max-height: 18px;\\n}\\n.remove-list button{\\n    height: 18px;\\n    background-color: red;\\n}\\n\\n.remove-list p {\\n    align-self: flex-start;\\n    margin: 0px;\\n    border: none;\\n    font-size: smaller;\\n}\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://todo_theodinproject/./src/style.css?./node_modules/css-loader/dist/cjs.js")},645:module=>{eval('\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = [];\n\n  // return the list of modules as css string\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = "";\n      var needLayer = typeof item[5] !== "undefined";\n      if (item[4]) {\n        content += "@supports (".concat(item[4], ") {");\n      }\n      if (item[2]) {\n        content += "@media ".concat(item[2], " {");\n      }\n      if (needLayer) {\n        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");\n      }\n      content += cssWithMappingToString(item);\n      if (needLayer) {\n        content += "}";\n      }\n      if (item[2]) {\n        content += "}";\n      }\n      if (item[4]) {\n        content += "}";\n      }\n      return content;\n    }).join("");\n  };\n\n  // import a list of modules into the list\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === "string") {\n      modules = [[null, modules, undefined]];\n    }\n    var alreadyImportedModules = {};\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n      if (typeof layer !== "undefined") {\n        if (typeof item[5] === "undefined") {\n          item[5] = layer;\n        } else {\n          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");\n          item[5] = layer;\n        }\n      }\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");\n          item[2] = media;\n        }\n      }\n      if (supports) {\n        if (!item[4]) {\n          item[4] = "".concat(supports);\n        } else {\n          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");\n          item[4] = supports;\n        }\n      }\n      list.push(item);\n    }\n  };\n  return list;\n};\n\n//# sourceURL=webpack://todo_theodinproject/./node_modules/css-loader/dist/runtime/api.js?')},81:module=>{eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://todo_theodinproject/./node_modules/css-loader/dist/runtime/noSourceMaps.js?")},379:module=>{eval('\n\nvar stylesInDOM = [];\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n  return result;\n}\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = "".concat(id, " ").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n    identifiers.push(identifier);\n  }\n  return identifiers;\n}\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n  return updater;\n}\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n    var newLastIdentifiers = modulesToDom(newList, options);\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n      var _index = getIndexByIdentifier(_identifier);\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://todo_theodinproject/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?')},569:module=>{eval('\n\nvar memo = {};\n\n/* istanbul ignore next  */\nfunction getTarget(target) {\n  if (typeof memo[target] === "undefined") {\n    var styleTarget = document.querySelector(target);\n\n    // Special case to return head of iframe instead of iframe itself\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n    memo[target] = styleTarget;\n  }\n  return memo[target];\n}\n\n/* istanbul ignore next  */\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n  if (!target) {\n    throw new Error("Couldn\'t find a style target. This probably means that the value for the \'insert\' parameter is invalid.");\n  }\n  target.appendChild(style);\n}\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://todo_theodinproject/./node_modules/style-loader/dist/runtime/insertBySelector.js?')},216:module=>{eval('\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement("style");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://todo_theodinproject/./node_modules/style-loader/dist/runtime/insertStyleElement.js?')},565:(module,__unused_webpack_exports,__webpack_require__)=>{eval('\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n  if (nonce) {\n    styleElement.setAttribute("nonce", nonce);\n  }\n}\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://todo_theodinproject/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?')},795:module=>{eval('\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = "";\n  if (obj.supports) {\n    css += "@supports (".concat(obj.supports, ") {");\n  }\n  if (obj.media) {\n    css += "@media ".concat(obj.media, " {");\n  }\n  var needLayer = typeof obj.layer !== "undefined";\n  if (needLayer) {\n    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");\n  }\n  css += obj.css;\n  if (needLayer) {\n    css += "}";\n  }\n  if (obj.media) {\n    css += "}";\n  }\n  if (obj.supports) {\n    css += "}";\n  }\n  var sourceMap = obj.sourceMap;\n  if (sourceMap && typeof btoa !== "undefined") {\n    css += "\\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");\n  }\n\n  // For old IE\n  /* istanbul ignore if  */\n  options.styleTagTransform(css, styleElement, options.options);\n}\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n  styleElement.parentNode.removeChild(styleElement);\n}\n\n/* istanbul ignore next  */\nfunction domAPI(options) {\n  if (typeof document === "undefined") {\n    return {\n      update: function update() {},\n      remove: function remove() {}\n    };\n  }\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://todo_theodinproject/./node_modules/style-loader/dist/runtime/styleDomAPI.js?')},589:module=>{eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://todo_theodinproject/./node_modules/style-loader/dist/runtime/styleTagTransform.js?")},921:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{eval('\n// EXPORTS\n__webpack_require__.d(__webpack_exports__, {\n  K: () => (/* binding */ update_storage)\n});\n\n// NAMESPACE OBJECT: ./src/index.js\nvar src_namespaceObject = {};\n__webpack_require__.r(src_namespaceObject);\n__webpack_require__.d(src_namespaceObject, {\n  K: () => (update_storage)\n});\n\n;// CONCATENATED MODULE: ./src/scripts/base_objects/item.js\nfunction ItemBase(n, de, da, p, ln) {\n\n    return {\n        name :n,\n        description: de,\n        date: da,\n        priority: p,\n        list_name : ln\n    }\n    \n}\n;// CONCATENATED MODULE: ./src/scripts/base_objects/list.js\n/**\n * \n * @param {String} n name of list\n * @param {String} p name of project\n * @param {item_base[]} its List of all items in this list\n * @returns \n */\nfunction ListBase(n, p, its) {\n\n    return {\n        name : n,\n        project : p,\n        items : its\n    }\n    \n}\n;// CONCATENATED MODULE: ./src/scripts/main-article/check_box.js\n\n\nfunction check_box() {\n\n    let checkbox = {\n        root : document.createElement("div"),\n        box : document.createElement("div"),\n        body : document.createElement("p"),\n        completed: false,\n\n    }\n\n\n    checkbox.root.classList.add("checkbox")\n    checkbox.box.classList.add("checkbox-box")\n\n    checkbox.root.appendChild(checkbox.box)\n\n    \n\n    \n    \n    checkbox.body.innerHTML = "todo"\n\n    checkbox.root.appendChild(checkbox.body)\n    \n\n    return checkbox\n}\n\n\n\n\n\n;// CONCATENATED MODULE: ./src/scripts/main-article/TodoItem.js\n\n\n\n\n\n\nclass TodoItem{\n\n    /**\n     * \n     * @param {} item\n     */\n    constructor(item) {\n\n        this.base = item;\n\n        this.root = document.createElement("div")\n\n        this.title = item.name;\n        this.description = item.description;\n        this.due_date = item.date;\n\n        \n\n        this.remove_button = check_box()\n\n        this.priority = item.p;\n\n\n\n        this.create_item();\n\n\n        \n\n        \n\n\n\n        this.remove_button.box.addEventListener("click", () => {this.remove_button_listener()});\n\n        this.rm = false;\n\n\n        \n\n        this.root.classList.add("Todo-Item")\n\n    }\n\n\n    remove_button_listener() {\n\n        if (this.remove_button.completed == true) {\n\n\n            this.remove_button.completed = false\n            this.remove_button.box.style.backgroundColor = "white"\n            this.rm = false;\n        } else if (this.remove_button.completed == false) {\n            this.remove_button.completed = true\n            this.remove_button.box.style.backgroundColor = "black"\n            this.rm = true\n        }\n\n    }\n\n    completed_button_listener() {\n        if (this.checkbox.completed == true) {\n            this.checkbox.completed = false\n            this.checkbox.box.style.backgroundColor = "white"\n            this.rm = false\n        } else if (this.checkbox.completed == false) {\n            this.checkbox.completed = true\n            this.checkbox.box.style.backgroundColor = "black"\n            this.rm = true\n        }\n    }\n\n\n\n\n    create_item() {\n\n        // TODO: Use date library to add dates user can schedule\n        //let date_string = String(this.due_date.month) + "/" + String(this.due_date.day) + "/" +  String(this.due_date.year);\n        const title_comp = document.createElement("h1");\n        const description_comp = document.createElement("p");\n        // const due_date = document.createElement("p");\n\n        description_comp.classList.add("Todo-Item-description")\n        \n        \n        \n        \n        // due_date.innerHTML = date_string;\n        title_comp.innerHTML = this.title;\n        description_comp.innerHTML = this.description;\n\n        this.remove_button.innerHTML = "Remove"\n        // this.remove_button.classList.add("remove_item_button")\n        \n\n        this.root.appendChild(title_comp)\n        // this.root.appendChild(due_date)\n        this.root.appendChild(description_comp)\n\n        this.root.appendChild(this.remove_button.root)\n        \n\n    }\n\n    remove_item() {\n\n        this.root.parentElement.removeChild(this.root)\n\n    }\n    \n\n}\n;// CONCATENATED MODULE: ./src/scripts/main-article/BlankTodoItem.js\n\n\n\n\n\n\n\n\n\nclass BlankTodoItem {\n\n    constructor(list_na) {\n        this.list_name = list_na\n\n        this.root = document.createElement("div")\n\n        this.user_input = {\n            title : "",\n            description : "",\n            date : "",\n            priority : "",\n        }\n\n        this.input = document.createElement("div")\n        this.title = document.createElement("input")\n        this.description = document.createElement("input")\n        this.priority = document.createElement("select")\n\n        this.date = document.createElement("input")\n\n        this.date.type = "date"\n\n        this.title.type = "text"\n        this.description.type = "text"\n\n        let high_priority = document.createElement("option")\n        let medium_priority = document.createElement("option")\n        let low_priority = document.createElement("option")\n\n        high_priority.innerHTML = "high"\n        medium_priority.innerHTML = "medium"\n        low_priority.innerHTML = "low"\n\n\n\n        this.priority.appendChild(low_priority)\n        this.priority.appendChild(medium_priority)\n        this.priority.appendChild(high_priority)\n        \n        this.add_button = document.createElement("button");\n\n        this.add_button.innerHTML = "add Item"\n\n        \n\n        this.root.appendChild(this.title)\n        this.root.appendChild(this.description)\n        this.root.appendChild(this.priority)\n        this.root.appendChild(this.date)\n\n        \n        this.root.appendChild(this.add_button)\n\n        this.root.classList.add("Blank-Todo-Item")\n    };\n\n    to_todo_item() {\n\n        this.update_user_input()\n\n        let item = ItemBase(this.user_input.title, this.user_input.description, this.user_input.priority, this.user_input.date, this.list_name)\n\n        \n\n        \n        console.log(item);\n\n        return new TodoItem(item)\n\n    };\n\n    update_user_input() {\n        this.user_input.title = this.title.value\n        this.user_input.description = this.description.value\n        this.user_input.date = this.date.value\n        this.user_input.priority = this.priority.value;\n    };\n}\n;// CONCATENATED MODULE: ./src/scripts/main-article/todo_list.js\n\n\n\n\n\n\n// import {update_storage} from "../storage/update_storage"\n\nclass TodoList {\n\n    /**\n     * \n     * @param {String} t Title of list\n     * @param {String} p Name of Project\n     */\n    constructor(t, p){\n\n        \n\n        this.title = t;\n\n        this.project_name = p;\n\n        this.items = []\n        this.header = document.createElement("div");\n        this.root = document.createElement("div");\n\n        if (t != null) {\n            this.header.innerHTML = t\n        }\n\n        this.main = document.createElement("div");\n\n        this.root.classList.add("Todo-List")\n        this.main.classList.add("Todo-List-Content")\n        this.header.classList.add("Todo-List-Header")\n\n        this.blank_item = new BlankTodoItem(t);\n\n        this.next_item = undefined\n\n        this.items.push(this.blank_item)\n\n        this.blank_item.add_button.addEventListener("click", () => {this.add_item(this.blank_item.to_todo_item(),true)})\n\n        console.log("made blank")\n\n        \n        this.main.appendChild(this.blank_item.root)\n\n        \n        this.main.classList.add("TodoList-main");\n        this.root.classList.add("TodoList");\n        this.header.classList.add("TodoList-header");\n\n\n        this.root.appendChild(this.header);\n        this.root.appendChild(this.main);\n\n        this.base = this.to_base_list()\n    }\n\n    /**\n     * \n     * @param {TodoItem} it \n     * @param {boolean} store tells wether to store this item\n     */\n    add_item(it, store) {\n\n        \n        this.main.innerHTML = ""\n        this.items.pop()\n        this.items.push(it)\n\n        for (let i = 0; i < this.items.length; i++) {\n\n            this.main.appendChild(this.items[i].root)\n\n        }\n\n        this.blank_item = new BlankTodoItem(this.title)\n\n        this.blank_item.add_button.addEventListener("click", () => {this.add_item(this.blank_item.to_todo_item(), true)})\n\n        if (store) {\n            update_storage()\n        }\n\n        this.items.push(this.blank_item)\n        this.main.appendChild(this.blank_item.root)\n\n        /*\n        this.main.removeChild(this.items.pop().root)\n        this.items.push(it)\n        this.main.appendChild(it.root)\n        */\n    }\n\n    \n    \n    remove_selected_items() {\n\n        for (let i = 0; i < this.items.length; i++) {\n            if (this.items[i] instanceof TodoItem && this.items[i].rm == true) {\n                this.items[i].root.parentElement.removeChild(this.items[i].root)\n                delete this.items[i]\n            }\n        }\n\n        this.items.filter(item => item != null)\n\n        \n        \n        \n        \n\n    }\n\n    to_base_list() {\n\n        let base = ListBase(this.title, this.project_name, [])\n        for (let i = 0; i < this.items.length; i++) {\n            if (!(this.items[i] instanceof BlankTodoItem)) {\n                base.items.push(ItemBase(this.items[i].title, this.items[i].description, this.items[i].date, this.title))\n            }\n        }\n\n        return base\n    }\n\n    populate_items() {\n        for (let i = 0; i < this.items.length; i++) {\n            if(this.items[i] instanceof BlankTodoItem) {\n                this.items.pop()\n            }\n            this.root.appendChild(this.items[i])\n        }\n    }\n\n\n\n\n}\n;// CONCATENATED MODULE: ./src/scripts/navigation/projects_bar.js\nfunction projects_bar() {\n    let projects = {\n        root : document.createElement("div"),\n        projects_button : document.createElement("div"),\n        projects_container : document.createElement("div"),\n        items : [],\n        is_opened : false,\n        \n    };\n\n    projects.projects_button.classList.add("projects-bar-show-projects")\n\n    projects.projects_button.innerHTML = "> projects";\n\n    projects.root.classList.add("projects-bar");\n\n    projects.root.appendChild(projects.projects_button);\n    projects.root.appendChild(projects.projects_container);\n\n    return projects;\n};\n;// CONCATENATED MODULE: ./src/scripts/navigation/nav_bar.js\n\n\nfunction nav_bar() {\n\n    let nav = {\n        root : document.createElement("nav"),\n        remove_selected_items_button : document.createElement("div"),\n        new_project : document.createElement("div"),\n        projects : projects_bar(),\n        new_list : document.createElement("div"),\n        remove_list : {\n            root : document.createElement("div"),\n            input_label: document.createElement("p"),\n            input_bar : document.createElement("input"),\n            action_button : document.createElement("button")\n        }\n\n    }\n\n    nav.remove_list.input_bar.type = "text"\n    nav.remove_list.action_button.hnnerHTML = "rm"\n\n    nav.remove_list.input_bar.classList.add("remove-list-input")\n\n    nav.new_list.innerHTML ="> new list"\n\n    nav.remove_list.input_label.innerHTML = "rm lst: "\n\n    nav.remove_list.root.appendChild(nav.remove_list.input_label)\n    nav.remove_list.root.appendChild(nav.remove_list.input_bar)\n    nav.remove_list.root.appendChild(nav.remove_list.action_button)\n\n    nav.root.classList.add("nav")\n\n    nav.remove_selected_items_button.innerHTML = "> Remove_Selected_Items <"; \n\n    nav.remove_list.root.classList.add("remove-list")\n\n    nav.root.appendChild(nav.new_project)\n    nav.root.appendChild(nav.projects.root)\n\n    nav.root.appendChild(nav.new_list)\n\n    nav.remove_selected_items_button.classList.add("remove-selected-items")\n\n    nav.root.appendChild(nav.remove_selected_items_button)\n    nav.root.appendChild(nav.remove_list.root)\n\n    return nav\n}\n;// CONCATENATED MODULE: ./src/scripts/base_objects/project.js\nfunction ProjectBase(n, lsts) {\n    \n    let name= n;\n    let lists= [];\n\n    if (lsts != null) {\n        lists = lsts\n    }\n\n    return {\n        name: name,\n        lists: lists,\n    }\n\n    \n}\n;// CONCATENATED MODULE: ./src/scripts/main-article/Project.js\n\n\n\n\nclass Project{\n\n    /**\n     * \n     * @param {String} n \n     * @param {[]} lists \n     */\n    constructor(n, lists) {\n        \n        \n        this.lists = lists;\n        this.root = document.getElementById("main-content");\n        this.name = n;\n\n        this.root.classList.add("Project")\n\n    };\n\n    set_root() {\n        this.root.innerHTML = ""\n\n        for(let i = 0; i < this.lists.length;i++) {\n            this.root.appendChild(this.lists[i].root)\n            console.log(this.root)\n        }\n    };\n\n    /**\n     * \n     * @param {TodoList} li \n     */\n    add_list(li) {\n        this.lists.push(li)\n\n        this.root.appendChild(li.root)\n    }\n\n    remove_todo_items() {\n        let i = 0, len = this.lists.length;\n        while(i < len) {\n            this.lists[i].remove_selected_items();\n            i++;\n        };\n    }\n\n\n    find_list_title(name) {\n        for (let i = 0; i < this.lists.length; i++) {\n            if (this.lists[i].title == name) {\n                return this.lists[i]\n            }\n        }\n    }\n\n    to_base_project() {\n\n        let base = ProjectBase(this.name, [])\n\n\n        for (let i = 0; i < this.lists.length; i++) {\n            base.lists.push(this.lists[i].to_base_list());\n        }\n        \n        return base;\n    };\n}\n;// CONCATENATED MODULE: ./src/scripts/navigation/project_item.js\n\n\n\n/**\n * \n * @param {Project} project \n * @returns \n */\nfunction project_item(project) {\n\n    \n\n    let item = {\n        root : document.createElement("div"),\n        clickListener: function() {\n            project.set_root();\n            src_namespaceObject["default"] = project\n        }\n    }\n\n    item.root.classList.add("project-item-selector")\n\n    item.root.innerHTML = "&nbsp > " + project.name\n\n\n    return item\n    \n}\n// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\nvar injectStylesIntoStyleTag = __webpack_require__(379);\nvar injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);\n// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js\nvar styleDomAPI = __webpack_require__(795);\nvar styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);\n// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js\nvar insertBySelector = __webpack_require__(569);\nvar insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);\n// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\nvar setAttributesWithoutAttributes = __webpack_require__(565);\nvar setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);\n// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js\nvar insertStyleElement = __webpack_require__(216);\nvar insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);\n// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js\nvar styleTagTransform = __webpack_require__(589);\nvar styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);\n// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/style.css\nvar style = __webpack_require__(426);\n;// CONCATENATED MODULE: ./src/style.css\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (styleTagTransform_default());\noptions.setAttributes = (setAttributesWithoutAttributes_default());\n\n      options.insert = insertBySelector_default().bind(null, "head");\n    \noptions.domAPI = (styleDomAPI_default());\noptions.insertStyleElement = (insertStyleElement_default());\n\nvar update = injectStylesIntoStyleTag_default()(style/* default */.Z, options);\n\n\n\n\n       /* harmony default export */ const src_style = (style/* default */.Z && style/* default.locals */.Z.locals ? style/* default.locals */.Z.locals : undefined);\n\n;// CONCATENATED MODULE: ./src/scripts/base_objects/base_project_to_article.js\n\n\n\n\n\n\n/**\n * \n * @param {any} project \n */\nfunction project_to_article(project) {\n    let proj = new Project(project.name, []);\n\n    let pre_lists = project.lists;\n\n    let post_lists = [];\n    for (let i = 0; i < pre_lists.length; i++) {\n\n        let list = new TodoList(pre_lists[i].name, project.name)\n        let post_arr = [];\n\n        for (let j = 0; j < pre_lists[i].items.length; j++) {\n            list.add_item(new TodoItem(pre_lists[i].items[j]), false)\n        }\n        // post_arr.push(new BlankTodoItem(list.title))\n        // list.items = post_arr\n\n        post_lists.push(list)\n    }\n    proj.lists = post_lists;\n\n    return proj\n}\n\n\n;// CONCATENATED MODULE: ./src/index.js\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n//import update_storage from "./scripts/storage/update_storage"\n\n\n\n\nlet nav = nav_bar()\n\nlet doc = document\n\nlet projects = []\n\nlet current_project = undefined\n\nfunction load() {\n\n    // localStorage.removeItem("project")\n\n    let p = JSON.parse(localStorage.getItem("project"))\n\n    if (p != null) {\n        current_project = project_to_article(p)\n        current_project.set_root()\n    }\n\n    nav.projects.items.push(project_item(current_project))\n\n}\n\ndocument.addEventListener("DOMContentLoaded", load);\n\n\n\nconst main_content = document.getElementById("main-content")\n\n\nconst wrapper = document.getElementById("wrapper")\n\n\n\nnav.new_list.innerHTML = "> New List"\n\n\nnav.new_project.classList.add("new-project-button")\n\nnav.new_project.innerHTML = "> new_project"\n\nnav.new_project.addEventListener("click", function() {\n\n    let name = prompt("name of project: ")\n    let first_list = prompt("name of first list: ")\n    let project = new Project(name, [new TodoList(first_list,name)])\n\n    current_project = project\n\n    nav.projects.items.push(project_item(current_project))\n\n    projects.push(project)\n    // nav.projects.items.push(project_item(project))\n\n    //does nothing for now\n    update_storage()\n\n    project.set_root()\n\n    \n    \n\n    nav.projects.projects_container\n});\n\n\n\n\n\n\n\n\n\nnav.projects.projects_button.addEventListener("click", function() {\n    open_bar()\n});\n\nfunction open_bar() {\n            if (nav.projects.is_opened == false) {\n                nav.projects.projects_container.innerHTML = ""\n                for (let i = 0; i < nav.projects.items.length; i++) {\n                    nav.projects.projects_container.appendChild(nav.projects.items[i].root)\n                }\n                nav.projects.is_opened = true\n            }\n            else if (nav.projects.is_opened == true) {\n                nav.projects.projects_container.innerHTML = ""\n                nav.projects.is_opened = false\n            }\n}\n\n\nnav.new_list.addEventListener("click", new_list)\n\nfunction new_list() {\n    let name = prompt("new list name")\n\n    let new_li = new TodoList(name, current_project.name)\n\n    current_project.add_list(new_li)\n};\n\n\nwrapper.appendChild(nav.root)\n\nnav.remove_selected_items_button.addEventListener("click", function() {\n    current_project.remove_todo_items();\n\n    console.log("removed");\n});\n\nfunction update_storage() {\n\n    console.log("storage_update fired")\n\n    localStorage.setItem("project", JSON.stringify(current_project.to_base_project()))\n    \n}\n\n\n\n//# sourceURL=webpack://todo_theodinproject/./src/index.js_+_13_modules?')}},__webpack_module_cache__={};function __webpack_require__(n){var e=__webpack_module_cache__[n];if(void 0!==e)return e.exports;var t=__webpack_module_cache__[n]={id:n,exports:{}};return __webpack_modules__[n](t,t.exports,__webpack_require__),t.exports}__webpack_require__.n=n=>{var e=n&&n.__esModule?()=>n.default:()=>n;return __webpack_require__.d(e,{a:e}),e},__webpack_require__.d=(n,e)=>{for(var t in e)__webpack_require__.o(e,t)&&!__webpack_require__.o(n,t)&&Object.defineProperty(n,t,{enumerable:!0,get:e[t]})},__webpack_require__.o=(n,e)=>Object.prototype.hasOwnProperty.call(n,e),__webpack_require__.r=n=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(n,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(n,"__esModule",{value:!0})},__webpack_require__.nc=void 0;var __webpack_exports__=__webpack_require__(921)})();