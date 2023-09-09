import React from 'react';
import PropTypes from 'prop-types'

// 使用props传递数据
function ComponentDemo1(props) {
    return(
        <div>
            {/* 内部使用props接受外部数据 */}
            <p>{props.name}</p>
            <p>{props.age}</p>
            {props.children}
        </div>     
    );
}

// 为组件设置默认值
ComponentDemo1.defaultProps = {
    name: "xxx",
    age: 18
}

// 为组件设置数据类型校验
ComponentDemo1.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number
}

export default ComponentDemo1;