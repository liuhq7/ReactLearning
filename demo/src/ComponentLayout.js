/*
组件布局
*/

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './components/Home';
// import List from './components/List';

// 使用component文件夹中的组件
// 使用style2.css外部模块
function ComponentLayout() {
    return(
        <div>
            <Header></Header>
            <Home></Home>
            <Footer></Footer>
        </div>
    );
}

export default ComponentLayout;