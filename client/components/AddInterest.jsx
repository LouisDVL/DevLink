import React, { useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { connect } from 'react-redux'
import { sendInterestNode, removeInterestNode } from '../actions/nodes'

function AddInterest (props) {
  const { nodeId } = useParams()
  const { nodes, dispatch, waiting } = props
  const [interest, setInterest] = useState('')
  const history = useHistory()
  function setInterestOptions () {
    const interestOptions = nodes.filter(
      (elem) => elem.img === null && typeof elem.id === 'number'
    )
    return interestOptions.map((opt, index) => {
      return <option key={'' + (7777 + index)} value={opt.label} />
    })
  }

  function getPerson () {
    return nodes.filter((item) => item.id == nodeId)
  }

  function handleSubmit (e) {
    e.preventDefault()
    dispatch(sendInterestNode(nodeId, interest, history))
  }

  // function handleDelete (e) {
  //   e.preventDefault()
  //   dispatch(removeInterestNode(nodeId, history))
  // }

  const options = setInterestOptions()
  const person = getPerson()[0]
  return (
    <>
      {waiting ? (
        <div className="spinner"></div>
      ) : (
        <div className="container">
          <div className="content">
            <label className="label">
              Choose an interest for <br/> {person.label} from this list:{' '}
            </label>
            <br />
            <input
              list="interests"
              type="search"
              name="myInterests"
              onChange={(e) => {
                setInterest(e.target.value)
              }}
            />
            <datalist id="interests">{options}</datalist>
            <button className="submitButton" onClick={(e) => handleSubmit(e)}>
              Submit
            </button>
            {/* <button className="submitButton" onClick={(e) => handleDelete(e)}>
              Delete
            </button> */}
          </div>
        </div>
      )}
    </>
  )
}

function mapStateToProps (state) {
  return {
    nodes: state.nodes,
    waiting: state.waiting
  }
}

export default connect(mapStateToProps)(AddInterest)
