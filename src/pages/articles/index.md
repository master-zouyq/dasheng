# React Hooks最佳实践

本文主要介绍一些react hook的使用方式，以及在如何更好的使用hook，最后自己实现一个hook

## 1，useState
***const [state,setState] = useState(initialState);***

 example:
``` tsx
const Component = ()=>{
    const [count, setCount] = useState(0);
    return <div>
        <div>点击次数{count}</div>
        <Button onClick={() => setCount(count + 1)}>点击我</Button>
    </div>;
}
```

## 2，useEffect和useLayoutEffect
基础使用：
***useEffect(func,deps)***
***useLayoutEffect(func,deps)***

example:
``` tsx
const Component = ()=>{
    const [state,setState] = useState('hello world');
    useEffect(()=>{
        setTimeout(()=>{
            setState('world hello');
        },0)
    },[])
    return <div>
        <div>{state}</div>
    </div>;
} 
```
使用useEffect模拟class组件生命周期函数
```tsx
const Component = ()=>{
    const isFirstTime = useRef(true);
    const [state,setState] = useState(0);
    useEffect(()=>{
        if(isFirstTime.current){
            // alert('我渲染完成了');//componentDidMount
            isFirstTime.current = false;
        }else{
            alert('我更新了');//componentDidUpdate
        }
        return ()=>{
            alert('我要卸载了');//componentWillUnmount
        }
    })
    return <div>
        <div>当前的状态{state}</div>
        <Button onClick={()=>{
            setState(state+1);
        }}>点击更新增加状态</Button>
    </div>
}
```
测试闭包陷阱(这是由于每次更新都会有独立状态，可以使用deps,或者ref来获取最新的状态)
```tsx
const isExist = (node)=>!!node;
const Component = ()=>{
    const [count,setCount] = useState(0);
    const divRef = useRef(null);
    useEffect(()=>{
        const send = ()=> message.success(`当前数据${count}`);
        if(isExist(divRef)){
            divRef.current.addEventListener('click',send);
        }
        return ()=>{
            if(isExist(divRef)){
                divRef.current.removeEventListener('click',send);
            }
        }
    },[])
    return <div>
            <div>当前{count}</div>
            <Button ref={divRef} onClick={()=>{setCount(count+1)}}>点击</Button>
        </div>
}
```
## 3，useRef
使用 ***const refContainer = useRef(initialValue)***
思考:下面的代码中，if语句会执行么？
```tsx
const delay = (timer)=> new Promise((res)=>setTimeout(()=>res(),timer));
const Component = ()=>{
    const [count,setCount] = useState(0);
    useEffect(()=>{
        let isCancel = false;
        console.log('init');
        (async ()=>{
            const number = Math.random()*1000;
            console.log('numer',number);
            await (delay(Math.random()*1000));
            console.log(`执行${count}cancel${isCancel}`);
            if(isCancel){
                message.success(`当前状态${count}`)
            }
        })()
        return ()=>{
            console.log('我执行了return');
            isCancel = true;
        }
    },[count])
    return <div>
            <div>当前{count}</div>
            <Button onClick={()=>{setCount(count+1)}}>点击</Button>
        </div>
}
```
### 4，useReducer
***const[state,dispatch] = useReducer(reducer,initialData,init)***
```tsx
const initData = {count:0}
function reducer(state,action){
    switch(action.type){
        case 'increment':
            return { count:state.count + 1 };
        case 'decrement':
            return { count:state.count - 1 };
        default:
            throw new Error();
    }
}
const Component = () => {
    const [state,dispatch] = useReducer(reducer,initData);
    return <div>
        <div>当前状态{state.count}</div>
        <Button onClick={()=>{
            dispatch({type:'increment'})
        }}>增加</Button>
        <Button onClick={()=>{
            dispatch({type:'decrement'})
        }}>减少</Button>
    </div>
}
```
### 5，usememo,memo
***const memoizedValue = useMemo(()=>computedExpensiveValue(a,b),[a,b])***
通常是为了避免重复渲染带来的开销

```tsx
const Component = ()=> {
    const [state,forceUpdate] = useReducer(x=>x+1,0);
    const subComponent = ()=>{
        message.success('我被渲染了');
        return <>test</>
    } 
    // const subComponent = useMemo(() => {
    //     const Sub = () => {
    //         message.success('我被渲染了')
    //         return <>test</>
    //     }
    //     return <Sub />
    // }, [])
    return <div>
        {
            state>0 && subComponent()
        }
        <div>state{state}</div>
        <Button onClick={()=>forceUpdate()}>更新</Button>
    </div>
}
```
使用memo实现
```tsx
const subComponent = memo(()=>{
    message.success('渲染了');
    return <>test</>
})
const Component = ()=>{
    const [state,updateState] = useReducer((x)=>x+1,0);
    return(
        <div>
            {
                state>0 && <subComponent/>
            }
            <Button onClick={()=>updateState()}>点击{state}</Button>
        </div>
    );
}
```
