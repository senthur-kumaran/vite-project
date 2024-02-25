import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from './features/counter/counterSlice'

const Home = () => {
  const count = useSelector((state) => state.counter.value)
  const dispatch = useDispatch()
  return (
    <div>
      <div className='container mx-auto flex justify-start items-center'>
        <button
          aria-label='Increment Value'
          onClick={() => dispatch(increment())}
          className='m-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'
        >
          Increment
        </button>
        <span className='py-2 px-4 m-2'>{count}</span>
        <button
          aria-label='Decrement Value'
          onClick={() => dispatch(decrement())}
          className='m-2 bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded'
        >
          Decrement
        </button>
      </div>
    </div>
  )
}

export default Home