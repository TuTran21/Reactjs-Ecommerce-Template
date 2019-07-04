const timeout = 10000

export function get(endpoint) {
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest()
    xhr.open('GET', endpoint, true)
    xhr.setRequestHeader('Accept', 'application/json')
    xhr.setRequestHeader('Authorization', 'usertoken')
    xhr.onload = function() {
      let r = null

      try {
        r = JSON.parse(xhr.responseText)
      } catch (e) {
        reject(xhr.responseText)
        return
      }

      if (`${xhr.status}`[0] !== '2') {
        reject(r.message)
      } else {
        resolve(r)
      }
    }
    xhr.timeout = timeout
    xhr.onerror = function(...err) {
      reject(xhr.responseText || 'No error description was provided.')
    }
    xhr.ontimeout = function(e) {
      reject('Timeout.')
    }
    xhr.send()
  })
}

export function post(endpoint, obj) {
  const payload = JSON.stringify(obj)
  return new Promise((resolve, reject) => {
    let xhr = new XMLHttpRequest()
    xhr.open('POST', endpoint, true)
    xhr.setRequestHeader('Accept', 'application/json')
    xhr.setRequestHeader('Content-Type', 'application/json')
    xhr.onload = function() {
      let r = null

      try {
        r = JSON.parse(xhr.responseText)
      } catch (e) {
        reject(xhr.responseText)
        return
      }

      if (`${xhr.status}`[0] !== '2') {
        reject(r.message)
      } else {
        resolve(r)
      }
    }
    xhr.timeout = timeout
    xhr.onerror = function(...err) {
      reject(xhr.responseText || 'No error description was provided.')
    }
    xhr.ontimeout = function(e) {
      reject('Timeout.')
    }
    xhr.send(payload)
  })
}