/*
受控表单
1.表单元素的值全部由React进行管理，表单元素中的值全部放在state中，需要从state中获取
2.非受控表单数据由DOM元素本身管理，存放在DOM元素中，通过操作DOM元素获取
*/

import React, {Component} from 'react';

class ControlledForms extends Component {

    state = {
        name: "lhq",
        age: 23,
        subject: "Java",
        sex: "男",

    }

    // handler = (ev) => {
    //     this.setState({
    //         name: ev.target.value
    //     });
    // }

    hobbies = [
        {
            id: 1,
            title: "Vue",
            isChecked: true
        },
        {
            id: 2,
            title: "React",
            isChecked: false
        },
        {
            id: 3,
            title: "Angular",
            isChecked: false
        }
    ];

    handler(index, ev) {
        this.hobbies[index].isChecked = ev.target.checked;
    }

    submit = (ev) => {
        ev.preventDefault();
        let ret = this.hobbies.filter(hobby => hobby.isChecked).map(hobby => hobby.id);
        ret = {...this.state, ret};
        console.log(ret);
    }

    render() {
        return(
            <form onSubmit={(ev) => {this.submit(ev)}}>
                {/* <input value= {this.state.name} onChange={this.handler.bind(this)} /> */}
                <input value={this.state.age} onChange={(ev) => {this.setState({age: ev.target.value})}} />
                <hr />
                <select value={this.state.subject} onChange={(ev) => {this.setState({subject: ev.target.value})}}>
                    <option value="C++">C++</option>
                    <option value="Java">Java</option>
                    <option value="Python">Python</option>
                </select>
                <hr />
                <input type='radio' name="sex" value="男" defaultChecked={this.state.sex === "男"} onChange={(ev) => {this.setState({age: ev.target.value})}} />男
                <input type='radio' name="sex" value="女" defaultChecked={this.state.sex === "女"} onChange={(ev) => {this.setState({age: ev.target.value})}} />女
                <hr />
                {
                    this.hobbies.map((hobby, index) => {
                        return(
                            <label key={hobby.id}>
                                <input type='checkbox' defaultChecked={hobby.isChecked} onChange={this.handler.bind(this, index)} /> {hobby.title}
                            </label>
                        );

                    })
                }
                <hr />
                <input type='submit' />
            </form>
        );
    }
    
}

export default ControlledForms;