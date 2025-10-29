---
layout: it25_docs
group: installazione
title: Installazione
toc: true
---

Per utilizzare il codice compilato di {{ site.data.short.bl }} nel proprio progetto, è sufficiente scaricare ed includere nella pagina HTML alcuni file, tra cui: 

- il foglio di stile contenuto nel file CSS
- le funzionalità dei vari componenti contenute nel bundle JavaScript
- i font
- lo sprite SVG contenente le icone

il tutto scaricabile qui:

<a href="https://github.com/RegioneLombardia/bootstrap-lombardia/releases/download/v{{ site.current_version }}/bootstrap-lombardia.zip" class="btn btn-primary" >Scarica Bootstrap Regione Lombardia v{{ site.current_version }}</a>

Le librerie Javascript e CSS di {{ site.data.short.bl }} personalizzano e comprendono anche il codice originale di **Bootstrap {{ site.bootstrap_version }}**, ereditandone quindi tutte i selettori, le funzionalità, ecc., che sono consultabili al sito di Bootstrap stesso.

### Utilizzo come dipendenza

Alternativamente, specialmente se si utilizza [Webpack](https://webpack.github.io/), [Rollup.js](https://rollupjs.org/) o altri module bundler per l'inclusione di librerie esterne attraverso `npm`, è possibile aggiungere {{ site.data.short.bl }} come dipendenza con il seguente comando:

```sh
npm i bootstrap-lombardia --save
```

### CSS

Una volta scaricato e decompresso il file, all'interno della cartella `css` sarà presente un file CSS minificato (`bootstrap-lombardia.min.css`) con la sua [sourcemap](https://www.html5rocks.com/en/tutorials/developertools/sourcemaps/) (opzionale).

Per includere questo file all'interno del proprio progetto sarà sufficiente aggiungere il tag `<link>` di seguito riportato all'interno del tag `<head>` della pagina, prima di ogni altro CSS già presente, eventualmente correggendo il riferimento al percorso del file:

```html
<link rel="stylesheet" href="<path-a-bootstrap-lombardia>/dist/css/bootstrap-lombardia.min.css" />
```

### JavaScript

All'interno della cartella `js` saranno invece presenti il file di bundle, il file non bundle e i componenti suddivisi in moduli.

#### Versione bundle

In questo caso, dopo aver copiato i file all'interno del progetto, sarà sufficiente inserire una versione dei tag `<script>` di seguito riportati alla fine della pagina HTML, giusto prima della chiusura del tag `</body>`. Si potrà quindi includere la libreria in questo modo:

```html
<script src="<path-a-bootstrap-lombardia>/dist/js/bootstrap-lombardia.bundle.min.js"></script>
```

#### Versione non bundle

Per la versione non bundle, dopo aver copiato i file all'interno del progetto, sarà sufficiente inserire una versione dei tag `<script>` di seguito riportati alla fine della pagina HTML, giusto prima della chiusura del tag `</body>`. Si potrà quindi includere la libreria in questo modo, inserendo solo le dipendenze che servono al nostro progetto (qui nell'esempio sono inserite solo alcune per riferimento):

```html
<!--- Dipendenze da inserire solo se usate -->
<script src="https://cdn.jsdelivr.net/npm/@splidejs/splide@4.1.4/dist/js/splide.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/2.9.2/umd/popper.min.js"></script>
<!--- Versione non bundle di Bootstrap Italia -->
<script src="<path-a-bootstrap-lombardia>/dist/js/bootstrap-lombardia.min.js"></script>
```


### Fonts

È necessario anche includere i file relativi ai font referenziati nel CSS, mantenendo i path dei singoli font utilizzato nei [file sorgente della libreria](https://github.com/italia/bootstrap-lombardia/releases/tag/v{{ site.current_version }}). L'inclusione dei font può avvenire utilizzando CSS o JavaScript.


#### Via JavaScript

Per caricare i font utilizzando JavaScript occorre chiamare **esplicitamente** la funzione `loadFonts` passando il percorso della cartella dove si trovano i font.

```html
<script>
  bootstrap.loadFonts('/bootstrap-lombardia/dist/fonts');
</script>
```

### Icone

Le icone a disposizione sono un componente assolutamente opzionale e sono pubblicate nella libreria sotto forma di sprite SVG `/bootstrap-lombardia/dist/svg/`, le cui singole SVG sorgenti sono presenti nel repository.

Per informazioni, si può fare riferimento alla [documentazione sull'utilizzo delle icone]({{ site.baseurl }}/docs/utilities/icone/).

<!--
Per quanto riguarda l'utilizzo di CSS, Javascript, fonts, icone compresi nel file compresso scaricato, si faccia riferimento al **[relativo paragrafo]({{ site.baseurl }}/docs/come-iniziare/introduzione/#css)** della documentazione tecnica.  
-->
