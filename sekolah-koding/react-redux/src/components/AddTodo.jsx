import React from 'react'
import { connect } from 'react-redux'

function AddTodo({dispatch}) {
  let input
    return (
    <div>
        <form onSubmit={e => {
                          e.preventDefault
                          if(!input.value.trim()) return

                          dispatch(addTodo(input.value))
                          input.value = ""
        }}></form>
    </div>
  )
}

export default connect()(AddTodo)