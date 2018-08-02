function debounce (func, wait = 1000, immediate) {
    var timeout;
    return function () {
      var args = arguments
      var later = () => {
        timeout = null
        if (!immediate) func.apply(this, args)
      }
      var callNow = immediate && !timeout
      clearTimeout(timeout)
      timeout = setTimeout(later, wait)
      if (callNow) func.apply(this, args)
    }
  }

  // or just use debounche from lodash