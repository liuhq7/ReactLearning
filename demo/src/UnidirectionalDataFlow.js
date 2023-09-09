/*
单项数据流动
1.单向数据流的设计原则要求我们将不同组件需要共享的数据都定义在上层
2.单项数据流，自顶向下，从父组件传到子组件
3.子组件通过调用父组件传递过来的方法可以更改数据
4.当数据发生改变之后，React会重新渲染组件树 
*/

import ComponentDemo4 from "./ComponentDemo4";
import React, {Component} from 'react';

class UnidirectionalDataFlow extends Component {

    // 在类组件中就可以使用state定义状态
    state = {
        name: "lhq",
        age: 23
    }

    // 定义状态的更新方法，当前负责定义，在要修改的地方会进行调用
    handler = (target) => {
        this.setState({
            name: target.name,
            age: target.age
        })
    }

    render() {
        return(
            <div>
                <ComponentDemo4 {...this.state} change={this.handler} />
            </div>
        );
    }
}

export default UnidirectionalDataFlow;