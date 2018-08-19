const toast = function({message, type}) {
  nativeToast({
    message,
    type,
    position: 'north-east',
    timeout: 20000
  })
}