/*
样式处理
1.内联样式
2.外联样式
*/

import Radium from 'radium';
import styled from 'styled-components'


const styleObj = {
    width: 100,
    height: 100,
    backgroundColor: 'green',
    ":hover": {backgroundColor: 'skyblue'},
    "@media(max-width : 1000px)": {width: 300}
  }

const ButtonStyle = {
    base: {
        width: 150,
        height: 40,
        fontSize: 20,
        background: '#ffff'
    },
    login: {
        background: 'green'
    },
    logout: {
        background: 'orange'
    }
}

const isLogin = true;

// 自定义标签
const SectionDiv = styled.div`
    width: 100px;
    height: 100px;
    background-color: hotpink;
`

function StyleProcessing() {
    return(
        <div>
            {/* 使用上面定义的内部模块 */}
            <div style={styleObj}>内联样式</div>
            <div>
                <button style={[
                    ButtonStyle.base, 
                    isLogin ? ButtonStyle.login : ButtonStyle.logout
                ]}>按钮</button>
            </div>
            {/* 使用style1.css外部模块 */}
            <div className={'box'}>外联样式</div>
            {/* 使用自定义标签 */}
            <SectionDiv />
        </div>   
    );
}

export default Radium(StyleProcessing);