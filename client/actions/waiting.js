export const WAITING_TRUE = 'WAITING_TRUE'
export const WAITING_FALSE = 'WAITING_FALSE'

export function waitingPending () {
  return {
    type: WAITING_TRUE
  }
}

export function waitingFinished () {
  return {
    type: WAITING_FALSE
  }
}
