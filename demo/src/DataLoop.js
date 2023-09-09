/*
数据循环
*/

const array = [
    {
        id: 1,
        name: "lhq",
        age: 23 
    },
    {
        id: 2,
        name: "cdd",
        age: 24
    }
  ]
  
function DataLoop() {
    const ret = array.map(item => {
        return(
            <li key={item.id}>
                <span>{item.name}</span>
                <span>{item.age}</span>
            </li>
        ); 
    });
    return <ul>{ret}</ul>;
}

export default DataLoop;