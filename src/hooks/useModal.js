import bus from '../utils/bus'

const EVENT_NAME = 'modal:toggle'

const useModal = () => {
  const open = (payload = {}) => {
    bus.emit(EVENT_NAME, { status: true, ...payload })
  }
  const close = (payload = {}) => {
    bus.emit(EVENT_NAME, { status: false, ...payload })
  }
  const listen = (fn) => {
    bus.on(EVENT_NAME, fn)
  }
  const off = (payload = {}) => {
    bus.off(EVENT_NAME, payload)
  }

  return { open, close, listen, off }
}

export default useModal
