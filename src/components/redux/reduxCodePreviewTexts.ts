export const counterSliceText: string = `// counterSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface CounterState {
  count: number
}

const initialState: CounterState = {
  count: 0,
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: state => {
      state.count += 1
    },
    decrement: state => {
      state.count -= 1
    },
  },
})

export const { increment, decrement } = counterSlice.actions

export default counterSlice.reducer`

export const reduxStoreText: string = `// store.ts
import { configureStore } from '@reduxjs/toolkit'
import counterReducer from './counterSlice'

const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
})

export default store`

export const reduxUseText: string = `// ReduxCounter.tsx
    const count = useSelector((state) => state.counter.count);
    const dispatch = useDispatch();

    const handleIncrement = () => {
        dispatch(increment());
    };

    const handleDecrement = () => {
        dispatch(decrement());
    };


    return (
        <div>
            <h1>Counter: {count}</h1>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
        </div>
    )`
