type Todo = {
    userId: number | string
    id: number| string,
    title: string,
    completed: boolean
}

export const todos: Todo[] = [
    {
        userId: 1,
        id: 1,
        title: "usuariosID 1 e id 1",
        completed: true
      },
      {
        userId: 1,
        id: 2,
        title: "usuariosID 1 e id 2",
        completed: false
      },
      {
        userId: 2,
        id: 21,
        title: "usuariosID 2 e id 21",
        completed: false
      },
      {
        userId: 2,
        id: 22,
        title: "usuariosID 2 e id 22",
        completed: true
      },
      {
        userId: 3,
        id: 41,
        title: "usuariosID 3 e id 41",
        completed: true
      },
      {
        userId: 3,
        id: 42,
        title: "usuariosID 3 e id 42",
        completed: false
      }
]