```jsx
const test = (arr) => {
    return (
        <div className='test'>
            啦啦啦
            {
                arr.map(item => {
                    return (
                        <span>{item}</span>
                    )
                })
            }
        </div>
    )
}

const testEle = jsxToElement(test([1, 2, 3]));

document.body.appendChild(testEle)

```