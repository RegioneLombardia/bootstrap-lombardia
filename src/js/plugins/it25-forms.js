$(function () {
  // Tab panel
  $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    const rif = e.target.getAttribute('href').substr(1)
    const panel = document.getElementById(rif)
    const labels = panel.getElementsByTagName('label')
    resetLablsForInputWidth(labels)
  })

  // Accordion
  $('div[role="tabpanel"]').on('shown.bs.collapse', function (e) {
    const labels = e.target.getElementsByTagName('label')
    resetLablsForInputWidth(labels)
  })

  function resetLablsForInputWidth(labels) {
    for (let i = 0; i < labels.length; i++) {
      let label = labels[i]
      if (label.hasAttribute('style')) {
        const attrStyle = label.getAttribute('style')
        const pos = attrStyle.search('width: 0px;')
        if (pos >= 0) {
          const result = attrStyle.replace('width: 0px', 'width: auto')
          label.setAttribute('style', result)
        }
      }
    }
  }
})
