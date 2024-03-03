import { useQuery } from '@tanstack/react-query'

const Todos = () => {
  const { isPending, error, data: todos } = useQuery({
    queryKey: ['todos'],
    queryFn: () => fetch('https://jsonplaceholder.typicode.com/todos').then(res => res.json())
  })

  if (isPending) return <p>Loading...</p>

  if (error) return <p>An error has occurred: {error.message}</p>

  return (
    <div className="container mx-auto">
      <h1 className="text-3xl font-bold mb-4">Todo List</h1>
      <ul className="divide-y divide-gray-200">
          {todos?.map(todo => (
            <li key={todo.id} className="py-4">
              <span className={todo.completed ? 'line-through' : ''}>{todo.title}</span>
            </li>
          ))}
        </ul>
    </div>
  )
}

export default Todos