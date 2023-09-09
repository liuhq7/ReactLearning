import React, {Component, Fragment} from 'react';

// 必须继承Component类
// 使用render方法
// 命名名称首字母大写
// 使用Fragment标记代替div根元素
class ComponentDemo2 extends Component {

    // 为组件设置默认值
    static defaultProps = {
        name: 'xxx',
        age: 18
    }

    render() {
        return(
            <Fragment>
                {/* 使用类组件内部的props属性直接使用外部传递数据 */}
                <p>{this.props.name}</p>
                <p>{this.props.age}</p>
                {this.props.children}
            </Fragment>
        );
    }
}

export default ComponentDemo2