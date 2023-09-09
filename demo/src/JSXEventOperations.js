/*
JSX事件操作
1.事件绑定
2.事件监听传参
3.获取事件对象
*/

// const handler = (a, b) => {
//   console.log(a + b);
//   console.log("事件监听执行了");
// }

const handler = (a, b, ev) => {
    console.log(a, b);
    console.log(ev);
}
  
function JSXEventOperations() {
    return(
        <div>
        {/* <button onClick={() => handler(1, 2)}>点击触发事件</button> */}
        {/* <button onClick={handler.bind(null, 10, 20)}>点击触发事件</button> */}
        {/* <button onClick={(a, b) => handler(a, b)}>点击触发事件</button> */}
        {/* <button onClick={handler.bind(null, 10, 20)}>点击触发事件</button> */}
        <button onClick={handler.bind(null)}>点击触发事件</button>
        </div>
    );
}

export default JSXEventOperations;