---
layout: it25_docs
title: Icone
group: utilita
toc: false
---

Le Icone proposte di seguito sono quelle proposte da AgID.  
Sono contenutte tutte all'interno uno sprite SVG, presente nella libreria alla cartella `dist/svg`.

In alternativa, nel caso si necessiti di altre icone oltre a quelle fornite è ammesso l’utilizzo dell’icon pack **Icomoon**, scaricabile all’indirizzo **[https://icomoon.io/](https://icomoon.io/)**.  
Si consiglia di utilizzare icone appartenenti allo stesso ecosistema, ed in generale di mantenere coerenza nell’utilizzo di esse.

<div class="mb-4">
  <label for="searchIcon">Filtra le icone</label>
  <input type="text" class="form-control" id="searchIcon">
  <small class="form-text">Esempio: per cercare le icone it-arrow-* occorre digitare "arrow"
</small>
</div>
<div class="notification with-icon success" role="alert" aria-labelledby="copiednot-title" id="copiednot">
  <h2 id="copiednot-title" class="h5 no_toc"><svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-check-circle"></use></svg>Nome dell'icona copiato negli appunti</h2>
</div>

{% comment %}Example name: IT25 Icone{% endcomment %}
{% capture example %}
<div class="row">
  {% for icona in site.data.icons.regular %}
  <div class="container-icon col-12 col-md-6 col-lg-4" id="container-{{icona}}">
    <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#{{icona}}"></use></svg> <span>{{icona}}</span>
  </div>{% endfor %}
</div>
<h4 class="icon-divider mt-4">File</h4>
<div class="row">
  {% for icona in site.data.icons.files %}
  <div class="container-icon col-12 col-md-6 col-lg-4" id="container-{{icona}}">
    <svg class="icon"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#{{icona}}"></use></svg> <span>{{icona}}</span>
  </div>{% endfor %}
</div>
{% endcapture %}{% include example.html content=example %}

<script>
document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.querySelector('#searchIcon');
  const iconContainers = document.querySelectorAll('.container-icon')
  iconContainers.forEach((element) => {
    element.style.cursor = 'pointer';
    element.onclick = () => {
      navigator.clipboard.writeText(element.id.replace('container-', '')).then(() => {
        const copiedNotification = new bootstrap.Notification(
          document.getElementById('copiednot'), {timeout: 2000,}
        )
        copiedNotification.show();
      });
    };
  })
  searchInput.addEventListener('input', function() {
    const query = searchInput.value.toLowerCase();
    iconContainers.forEach((element) => { 
      if(!element.id.replace('container-it-', '').includes(query)) {
        element.style.display = 'none';
      } else {
        element.style.display = 'block';
      }
    });
  })
})
</script>

{% capture callout %}
## {{ site.data.short.dt }}
Per l'utilizzo delle icone e il loro dimensionamento e colorazione, si consulti la voce:  
**[{{ site.data.short.link }}Icone]({{ site.baseurl }}/docs/utilities/icone/)**.
{% endcapture %}{% include callout.html content=callout type="info" %}
