/*
创建组件
1.创建函数组件
2.创建类组件
*/

import ComponentDemo2 from "./ComponentDemo2";
import ComponentDemo1 from "./ComponentDemo1";

// const obj = {
//     name: "cdd",
//     age: 24
// }

function ComponentCreation() {
    return(
        <div>
            {/* <ComponentDemo1 name={"lhq"} age={23}/>
            <ComponentDemo2 {...obj}/> */}
            <ComponentDemo1>
                <p>
                    ComponentDemo1组件中的p标签
                </p>
            </ComponentDemo1>
            <ComponentDemo2>
                <p>
                    ComponentDemo2组件中的p标签
                </p>
            </ComponentDemo2>
        </div>
    );
}

export default ComponentCreation;