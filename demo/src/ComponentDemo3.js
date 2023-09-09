import React, {Component} from 'react';

class ComponentDemo3 extends Component {
    // 在类组件中默认存在一个state属性，它是一个对象，可以用于保存当前组件的数据
    // 之后可以通过setState方法修改组件数据，并自动展示在DOM界面上
    state = {
        name: "lhq",
        age: 23
    }

    // setState是异步方法，使用async于await关键字使状态同步
    handler = async () => {
        // 在React当中是不能够直接修改state值的
        // this.state.name = "cdd";
        // this.state.age = 24;
        await this.setState({
            name: "cdd",
            age: 24
        })
        console.log(this.state.name);
    }

    render() {
        return(
            <div>
                {this.state.name}
                {this.state.age}
                <button onClick={this.handler}>点击</button>
            </div>
        );
    }
}
export default ComponentDemo3;