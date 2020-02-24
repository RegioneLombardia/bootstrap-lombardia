$(function() {
  // Tab panel
  $('a[data-toggle="tab"]').on('shown.bs.tab', function (e) {
    rif = e.target.getAttribute("href").substr(1);
    panel = document.getElementById(rif);
    labels = panel.getElementsByTagName("label");
    resetLablsForInputWidth(labels);
  });

  // Accordion
  $('div[role="tabpanel"]').on('shown.bs.collapse', function (e) {
    labels = e.target.getElementsByTagName("label");
    resetLablsForInputWidth(labels);
  });

  function resetLablsForInputWidth(labels){
    for (let i = 0; i < labels.length; i++) {
      label = labels[i];
      if (label.hasAttribute("style"))	{
        attrStyle = label.getAttribute("style");
        pos = attrStyle.search("width: 0px;");
        if (pos >=0 ) {
          result = attrStyle.replace("width: 0px", "width: auto");
          label.setAttribute("style", result);
        };
      };
    }
  }
})
