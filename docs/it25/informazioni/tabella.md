---
layout: it25_docs
title: Tabella
group: informazioni
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

{% include html_docs/tabella/tabella_full.html %}

{% highlight html %}
<div class="table-responsive">
  <table class="table table-striped table-sm">
    <caption>
      Lista richieste rimborso
    </caption>
    <thead class="table-light">
      <tr>
        <th scope="col" class="text-center">
          <input id="checkbox_all" type="checkbox" aria-label="Scegli tutte le righe" />
        </th>
        <th scope="col" class="text-center">Numero</th>
        <th scope="col">Stato</th>
        <th scope="col">Data richiesta</th>
        <th scope="col" class="text-center">Importo</th>
        <th scope="col">Cognome</th>
        <th scope="col">Nome</th>
        <th scope="col" class="text-center">Stato</th>
        <th scope="col" colspan="2" class="text-center">Azioni</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td class="text-center"><input id="checkbox1" type="checkbox" aria-label="Scegli riga 1" /></td>
        <th scope="row" class="text-center">###</th>
        <td>Chiusa</td>
        <td>06/09/2018</td>
        <td class="text-center">1.230,16 €</td>
        <td>Mario</td>
        <td>Verdi</td>
        <td class="text-center">C4</td>
        <td class="text-center">
          <a href="#" data-toggle="tooltip" title="Modifica">
            <svg class="icon icon-sm"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-settings"></use></svg>
          </a>
        </td>
      </tr>
      . . .
    </tbody>
  </table>
</div>
{% endhighlight %}

---

## Tabelle base

### _Righe da 48px_

Si ottiene aggiungendo la classe `it25-sm`

{% include html_docs/tabella/tabella_base.html type='it25-sm' %}

{% highlight html %}
<div class="table-responsive">
  <table class="table table-striped it25-sm">
    <thead class="table-light">
    . . .
    </tbody>
  </table>
</div>
{% endhighlight %}

### _Righe da 80px_

Si ottiene aggiungendo la classe `it25-md`

{% include html_docs/tabella/tabella_base.html type='it25-md' %}
{% highlight html %}
<div class="table-responsive">
  <table class="table table-striped it25-md">
    <thead class="table-light">
    . . .
    </tbody>
  </table>
</div>
{% endhighlight %}
