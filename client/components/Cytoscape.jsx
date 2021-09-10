import CytoscapeComponent from 'react-cytoscapejs'
import React, { useEffect } from 'react'
import { getAll } from '../api/nodes'
import { connect } from 'react-redux'
import { getAllNodes } from '../actions/nodes'
import { useHistory } from 'react-router-dom'

function Cytoscape (props) {
  const layout = { name: 'random' }
  const { nodes, dispatch, waiting } = props
  const history = useHistory()

  useEffect(() => {
    dispatch(getAllNodes())
  }, [])

  const stylesheet = [
    {
      selector: '#1',
      style: {
        label: 'data(label)',
        width: '80px',
        height: '80px',
        borderWidth: '3px',
        borderColor: '#FF6700',
        backgroundColor: 'green',
        backgroundImage: 'https://avatars.githubusercontent.com/u/7552088?v=4',
        backgroundFit: 'cover'
      }
    },
    {
      selector: '#2',
      style: {
        label: 'data(label)',
        width: '80px',
        height: '80px',
        borderWidth: '3px',
        borderColor: '#FF6700',
        backgroundColor: 'green',
        backgroundImage: 'https://avatars.githubusercontent.com/u/85937572?v=4',
        backgroundFit: 'cover'
      }
    },
    {
      selector: '#3',
      style: {
        label: 'data(label)',
        width: '80px',
        height: '80px',
        borderWidth: '3px',
        borderColor: '#FF6700',
        backgroundColor: 'green',
        backgroundImage: 'https://avatars.githubusercontent.com/u/85384120?v=4',
        backgroundFit: 'cover'
      }
    },
    {
      selector: '#4',
      style: {
        label: 'data(label)',
        width: '80px',
        height: '80px',
        borderWidth: '3px',
        borderColor: '#FF6700',
        backgroundColor: 'green',
        backgroundImage: 'https://avatars.githubusercontent.com/u/26952644?v=4',
        backgroundFit: 'cover'
      }
    },
    {
      selector: '#5',
      style: {
        label: 'data(label)',
        width: '80px',
        height: '80px',
        borderWidth: '3px',
        borderColor: '#FF6700',
        backgroundColor: 'green',
        backgroundImage: 'https://avatars.githubusercontent.com/u/85047232?v=4',
        backgroundFit: 'cover'
      }
    },
    {
      selector: '#6',
      style: {
        label: 'data(label)',
        width: '80px',
        height: '80px',
        borderWidth: '3px',
        borderColor: '#FF6700',
        backgroundColor: 'green',
        backgroundImage: 'https://avatars.githubusercontent.com/u/68931039?v=4',
        backgroundFit: 'cover'
      }
    },
    {
      selector: '#7',
      style: {
        label: 'data(label)',
        width: '80px',
        height: '80px',
        borderWidth: '3px',
        borderColor: '#FF6700',
        backgroundColor: 'green',
        backgroundImage: 'https://avatars.githubusercontent.com/u/80133173?v=4',
        backgroundFit: 'cover'
      }
    },
    {
      selector: '#8',
      style: {
        label: 'data(label)',
        width: '80px',
        height: '80px',
        borderWidth: '3px',
        borderColor: '#FF6700',
        backgroundColor: 'green',
        backgroundImage: 'https://avatars.githubusercontent.com/u/82419864?v=4',
        backgroundFit: 'cover'
      }
    },
    {
      selector: '#9',
      style: {
        label: 'data(label)',
        width: '80px',
        height: '80px',
        borderWidth: '3px',
        borderColor: '#FF6700',
        backgroundColor: 'green',
        backgroundImage: 'https://avatars.githubusercontent.com/u/85599717?v=4',
        backgroundFit: 'cover'
      }
    },
    {
      selector: '#10',
      style: {
        label: 'data(label)',
        width: '80px',
        height: '80px',
        borderWidth: '3px',
        borderColor: '#FF6700',
        backgroundColor: 'green',
        backgroundImage: 'https://avatars.githubusercontent.com/u/228761?v=4',
        backgroundFit: 'cover'
      }
    },
    {
      selector: '#11',
      style: {
        label: 'data(label)',
        width: '80px',
        height: '80px',
        borderWidth: '3px',
        borderColor: '#FF6700',
        backgroundColor: 'green',
        backgroundImage: 'https://avatars.githubusercontent.com/u/58644043?v=4',
        backgroundFit: 'cover'
      }
    },
    {
      selector: '#12',
      style: {
        label: 'data(label)',
        width: '80px',
        height: '80px',
        borderWidth: '3px',
        borderColor: '#FF6700',
        backgroundColor: 'green',
        backgroundImage: 'https://avatars.githubusercontent.com/u/80490743?v=4',
        backgroundFit: 'cover'
      }
    },
    {
      selector: '#13',
      style: {
        label: 'data(label)',
        width: '80px',
        height: '80px',
        borderWidth: '3px',
        borderColor: '#FF6700',
        backgroundColor: 'green',
        backgroundImage: 'https://avatars.githubusercontent.com/u/77950295?v=4',
        backgroundFit: 'cover'
      }
    },
    {
      selector: '#14',
      style: {
        label: 'data(label)',
        width: '80px',
        height: '80px',
        borderWidth: '3px',
        borderColor: '#FF6700',
        backgroundColor: 'green',
        backgroundImage: 'https://avatars.githubusercontent.com/u/58745625?v=4',
        backgroundFit: 'cover'
      }
    },
    {
      selector: '#15',
      style: {
        label: 'data(label)',
        width: '80px',
        height: '80px',
        borderWidth: '3px',
        borderColor: '#FF6700',
        backgroundColor: 'green',
        backgroundImage: 'https://avatars.githubusercontent.com/u/83190123?v=4',
        backgroundFit: 'cover'
      }
    },
    {
      selector: '#16',
      style: {
        label: 'data(label)',
        width: '80px',
        height: '80px',
        borderWidth: '3px',
        borderColor: '#FF6700',
        backgroundColor: 'green',
        backgroundImage: 'https://avatars.githubusercontent.com/u/72641947?v=4',
        backgroundFit: 'cover'
      }
    },
    {
      selector: '#17',
      style: {
        label: 'data(label)',
        width: '80px',
        height: '80px',
        borderWidth: '3px',
        borderColor: '#FF6700',
        backgroundColor: 'green',
        backgroundImage: 'https://avatars.githubusercontent.com/u/62978181?s=96&v=4',
        backgroundFit: 'cover'
      }
    },
    {
      selector: '#18',
      style: {
        label: 'data(label)',
        width: '80px',
        height: '80px',
        borderWidth: '3px',
        borderColor: '#FF6700',
        backgroundColor: 'green',
        backgroundImage: 'https://avatars.githubusercontent.com/u/86031490?v=4',
        backgroundFit: 'cover'
      }
    },
    {
      selector: '#19',
      style: {
        label: 'data(label)',
        width: '80px',
        height: '80px',
        borderWidth: '3px',
        borderColor: '#FF6700',
        backgroundColor: 'green',
        backgroundImage: 'https://avatars.githubusercontent.com/u/6743181?v=4',
        backgroundFit: 'cover'
      }
    },
    {
      selector: '#20',
      style: {
        label: 'data(label)',
        width: '80px',
        height: '80px',
        borderWidth: '3px',
        borderColor: '#FF6700',
        backgroundColor: 'green',
        backgroundImage: 'https://avatars.githubusercontent.com/u/67619008?v=4',
        backgroundFit: 'cover'
      }
    },
    {
      selector: '#21',
      style: {
        label: 'data(label)',
        width: '80px',
        height: '80px',
        borderWidth: '3px',
        borderColor: '#FF6700',
        backgroundColor: 'green',
        backgroundImage: 'https://avatars.githubusercontent.com/u/85972272?v=4',
        backgroundFit: 'cover'
      }
    },
    {
      selector: '#22',
      style: {
        label: 'data(label)',
        width: '80px',
        height: '80px',
        borderWidth: '3px',
        borderColor: '#FF6700',
        backgroundColor: 'green',
        backgroundImage: 'https://avatars.githubusercontent.com/u/83738717?v=4',
        backgroundFit: 'cover'
      }
    },
    {
      selector: '#23',
      style: {
        label: 'data(label)',
        width: '80px',
        height: '80px',
        borderWidth: '3px',
        borderColor: '#FF6700',
        backgroundColor: 'green',
        backgroundImage: 'https://avatars.githubusercontent.com/u/86027651?v=4',
        backgroundFit: 'cover'
      }
    },
    {
      selector: 'node',
      style: {
        label: 'data(label)',
        width: '80px',
        height: '80px',
        borderWidth: '3px',
        borderColor: '#FF6700'
      }
    },
    {
      selector: '#24, #25, #26, #27, #28, #29, #30, #31, #32, #33, #34, #35, #36, #37, #38, #39, #40, #41, #42',
      style: {
        backgroundColor: '#EBEBEB',
        label: 'data(label)',
        rectangle: 'true',
        shape: 'rectangle',
        width: '120px',
        height: '30px',
        borderWidth: '3px',
        borderColor: '#FF6700',
        textHalign: 'center',
        textValign: 'center'
      }
    },
    {
      selector: 'edge-line',
      style: {
        lineColor: '#FF6700'
      }
    }
  ]

  function setElements () {
    if (nodes.length !== 0) {
      return nodes.map((elem) => {
        return {
          data: {
            ...elem
          }
        }
      })
    }
  }

  const elements = setElements()
  return (
    <>
      {waiting ? (
        <div className="spinner"></div>
      ) : (
        <div className="container">
          <CytoscapeComponent
            stylesheet={stylesheet}
            elements={elements}
            style={{ width: '100vw', height: '100vh' }}
            layout={layout}
            cy={(cy) => {
              cy.on('click', 'node', (event) => {
                console.log(event.target._private.data.id)
                history.push(`/addInterest/${event.target._private.data.id}`)
              })
            }}
          />
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

export default connect(mapStateToProps)(Cytoscape)
