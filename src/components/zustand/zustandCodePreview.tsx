const ZustandCodePreview = () => {
  const codeString = `import create from 'zustand'

// Create a store
const useStore = create(set => ({
    count: 0,
    increase: () => set(state => ({ count: state.count + 1 })),
    decrease: () => set(state => ({ count: state.count - 1 }), 
}))

// In a component
function Counter() {
    const { count, increase, decrease } = useStore()
    return (
        <div>
            <button onClick={decrease}>-</button>
            <span>{count}</span> 
            <button onClick={increase}>+</button> 
        </div> 
    )
}`
  return (
    <pre>
      <code className="language-javascript">{codeString}</code>
    </pre>
  )
}

export default ZustandCodePreview
