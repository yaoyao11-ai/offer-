import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

//路由
 //eslint disable next line
import Home from './pages/home/home'   //首页
import Detail from './pages/detail/detail'  //详情
import Login from './pages/login/login.jsx'  //登录(注册是子组件)
import Lecturer from './pages/lecturer/lecturer.jsx'  //讲师
import Course from './pages/course/course.jsx'  //课程

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/detail" component={Detail}></Route>
          <Route path="/login" component={Login}></Route>
          <Route path='/course' component={Course}></Route>
          <Route path='/lecturer' component={Lecturer}></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
