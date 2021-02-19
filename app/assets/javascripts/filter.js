// Filter list
window.flood.Filter = (id) => {
  const state = {
    isModalOpen: false
  }

  const container = document.getElementById(id).querySelector('.defra-facets__container')
  const showFilters = document.createElement('button')
  showFilters.className = 'defra-facets__show-filters'
  showFilters.innerHTML = 'Filters'
  const filtersCount = document.createElement('span')
  filtersCount.innerHTML = ' (1)'
  showFilters.appendChild(filtersCount)
  const closeFilters = document.createElement('button')
  closeFilters.className = 'defra-facets__close'
  closeFilters.innerHTML = 'Return to results'
  const resetContainer = document.getElementById(id).querySelector('.defra-facets__reset-container')
  const resetFilters = document.createElement('button')
  resetFilters.className = 'defra-facets__reset'
  resetFilters.innerHTML = 'Clear filters'
  resetContainer.appendChild(resetFilters)
  const filterResults = container.querySelector('.defra-facets__filter-results')
  container.insertBefore(closeFilters, container.firstChild)
  container.appendChild(showFilters)
  container.parentNode.insertBefore(showFilters, container.parentNode.firstChild)

  // Recursively find siblings and parents and add or remove aria-hidden
  // Could become a helper flood utility for working with modals
  const toggleAriaHidden = (target, isHidden) => {
    while (target.parentNode && target.parentNode.nodeType === 1) {
      if (target.parentNode.nodeName !== 'HTML') {
        let sibling = target.parentNode.firstElementChild
        while (sibling && sibling.nodeType === 1) {
          if (sibling !== target && sibling.tagName !== 'SCRIPT' && sibling.tagName !== 'STYLE') {
            isHidden ? sibling.setAttribute('aria-hidden', true) : sibling.removeAttribute('aria-hidden')
          }
          sibling = sibling.nextElementSibling
        }
      }
      target = target.parentNode
    }
  }

  // Constrain focus to tab ring
  const keydown = (e) => {
    if (e.key !== 'Tab') { return }
    if (e.shiftKey) {
      if (document.activeElement === closeFilters) {
        filterResults.focus()
        e.preventDefault()
      }
    } else {
      if (document.activeElement === filterResults) {
        closeFilters.focus()
        e.preventDefault()
      }
    }
  }

  // Escape key behavior
  const keyup = (e) => {
    if (e.key === 'Escape' || e.key === 'Esc') {
      closeModal()
    }
  }

  // Tabbing into web area
  const focus = (e) => {
    if (!container.contains(document.activeElement)) {
      console.log('Out of modal')
      closeFilters.focus()
    }
  }

  // Open as a modal on mobile devices only
  const openModal = () => {
    container.setAttribute('aria-modal', 'true')
    container.setAttribute('role', 'dialog')
    document.body.style.top = `-${window.scrollY}px`
    document.body.classList.add('defra-facets-body')
    state.isModalOpen = true
    toggleAriaHidden(container, true)
    closeFilters.focus()
    window.addEventListener('keydown', keydown)
    window.addEventListener('keyup', keyup)
    window.addEventListener('focus', focus)
  }

  // Close modal on mobile devices only
  const closeModal = () => {
    container.removeAttribute('aria-modal')
    container.removeAttribute('role')
    document.body.classList.remove('defra-facets-body')
    window.scrollTo(0, parseInt(document.body.style.top || '0') * -1)
    document.body.style.top = ''
    state.isModalOpen = false
    toggleAriaHidden(container, false)
    showFilters.focus()
    window.removeEventListener('keydown', keydown)
    window.removeEventListener('keyup', keyup)
    window.removeEventListener('focus', focus)
  }

  //
  // Events
  //

  // Detect mobile/non-mobile
  const mobileMediaQuery = window.matchMedia('(max-width: 640px)')
  const mobileListener = (mobileMediaQuery) => {
    const isMobile = mobileMediaQuery.matches
    if (!isMobile && state.isModalOpen) { closeModal() }
  }
  mobileMediaQuery.addListener(mobileListener)
  mobileListener(mobileMediaQuery)

  // Show filters (mobile only)
  showFilters.addEventListener('click', (e) => {
    e.preventDefault()
    openModal()
  })

  // Close filters (mobile only)
  resetFilters.addEventListener('click', (e) => {
    e.preventDefault()
  })

  // Close filters (mobile only)
  closeFilters.addEventListener('click', (e) => {
    e.preventDefault()
    closeModal()
  })

  // Filter results (asynchronous)
  filterResults.addEventListener('click', (e) => {
    e.preventDefault()
    closeModal()
  })
}

// Create filter
if (document.getElementById('filter')) {
  window.flood.Filter('filter')
}
