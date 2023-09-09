/*
JSX可以看为是JS的扩展，它具备JS的所有功能，还可以被转为HTML在界面上进行展示
1.动态显示数据
2.调用方法
3.表达式
4.模板字符串
5.添加属性
6.添加子元素（JSX只能有一个父元素）
*/

const name = "cdd";
const flag = false;
const obj = {
  name: "cdd",
  age: 24
}

function SayHello() {
  return "Hello";
}

function JSXRule() {
  return(
    <div>
      <p>name</p>
      <p>{name}</p>
      <p>{SayHello()}</p>
      <p>{console.log("lalala")}</p>
      <p>{4 * 5 + 2}</p>
      <p>{flag ? "登录" : "注册"}</p>
      <p>{`Hello ${name}`}</p>
      <p>{"这里不是注释"/*这里是注释 */}</p>
      <p>{JSON.stringify(obj)}</p>
      <p title="自定义标题">添加属性</p>
      <p title={obj.age}>添加动态属性</p>
    </div>
  );
}

export default JSXRule;