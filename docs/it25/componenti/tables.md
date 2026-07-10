---
layout: it25_docs
title: Tables
group: componenti
toc: yes
---

La **Tabella** è una serie di colonne e righe riempite di dati testuali e può essere larga quanto la pagina, senza padding (_max
container_).  
<!-- Ogni colonna della tabella rispetta la griglia di base e comprende almeno una colonna della griglia.   -->
Se la tabella ha molte colonne, dovrà essere responsive, ovvero a scorrimento orizzontale (_scroll laterale_).  
All’interno di una tabella è molto importante gestire correttamente i contenuti e soprattuto gli spazi, lasciando adeguata spaziatura tra le voci.  
E’ opportuno **non utilizzare testi troppo lunghi** ed **evidenziare** - magari utilizzando il corpo bold - il **nome/id/numero della voce**. Dove possibile sintetizzare i contenuti con icone significanti.

I **testi** all’interno delle righe vanno **allineati a sinistra**. Le icone possono essere allineate sia a sinistra che al centro.  
Checkbox e radio button invece vanno centrati all’interno della cella.

## Tabella compatta

Si ottiene aggiungendo la classe `table-sm`

<div class="table-responsive">
  <table class="table table-striped table-sm">
    <caption>
      Lista richieste rimborso
    </caption>
    {% include html_docs/tabella/testata_tabella.html es-nr=1%}
    <tbody>
      {% for i in (1..5) %}
        {% include html_docs/tabella/riga_tabella.html es-nr=1%}
      {% endfor %}
    </tbody>
  </table>
</div>


<!--  include html_docs/tabella/tabella_full.html -->

{% highlight html %}
<div class="table-responsive">
  <table class="table table-striped table-sm">
    <caption>
      Lista richieste rimborso
    </caption>
{% include html_docs/tabella/testata_tabella.html es-nr=2 %}
    <tbody>
{% include html_docs/tabella/riga_tabella.html es-nr=2%}
      . . .
    </tbody>
  </table>
</div>
{% endhighlight %}

---

## Tabelle base

### _Righe da 48px_

Si ottiene aggiungendo la classe `it25-sm`

<div class="table-responsive">
  <table class="table table-striped it25-sm">
    {% include html_docs/tabella/testata_tabella.html es-nr=3 %}
    <tbody>
      {% for i in (1..3) %}
        {% include html_docs/tabella/riga_tabella.html es-nr=3 %}
      {% endfor %}
    </tbody>
  </table>
</div>



{% highlight html %}
<div class="table-responsive">
  <table class="table table-striped it25-sm">
    <thead class="table-primary">
    . . .
    </tbody>
  </table>
</div>
{% endhighlight %}

### _Righe da 80px_

Si ottiene aggiungendo la classe `it25-md`

<div class="table-responsive">
  <table class="table table-striped it25-md">
    {% include html_docs/tabella/testata_tabella.html %}
    <tbody>
      {% for i in (1..3) %}
        {% include html_docs/tabella/riga_tabella.html %}
      {% endfor %}
    </tbody>
  </table>
</div>

{% highlight html %}
<div class="table-responsive">
  <table class="table table-striped it25-md">
    <thead class="table-primary">
    . . .
    </tbody>
  </table>
</div>
{% endhighlight %}


{% capture callout %}
## {{ site.data.short.dt }}
Per ulteriori dettagli tecnici sulle tabelle si veda la voce:  
**[{{ site.data.short.link }}Tabelle]({{ site.baseurl }}/docs/organizzare-i-contenuti/tabelle/)**
{% endcapture %}{% include callout.html content=callout type="info" %}
