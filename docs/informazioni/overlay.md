---
layout: docs
title: Overlay
group: informazioni
toc: no
---

L’overlay consente di porre massima evidenza su messaggi o fasi di una procedura che richiedono l’attenzione ed eventualmente il feedback dell’utente.

Le finestre modali fornite da Boostrap disegnano automaticamente il "velo" a grandezza piena sulla finestra, al di sopra del quale compare il riquadro con il messaggio informativo o la richiesta di una scelta prima di proseguire.

L'esempio mostrato qui sotto è stato ottenuto utilizzando le classi `modal-lg` per determinare la dimensione del riquadro in evidenza e la classe `modal-dialog-centered` per porre il riquadro al centro dello schermo.  
Per tutte le altre possibilità si veda la **[documentazione tecnica]({{ site.baseurl }}/docs/componenti/modale/)**.

{% capture callout %}
#### <svg class="icon icon-warning icon-lg"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-warning-circle"></use></svg> Accessibilità
Si raccomanda di porre molta attenzione a quanto viene detto all'inizio della documentazione tecnica riguardo l'**[accessibilità]({{ site.baseurl }}/docs/componenti/modale/)** delle finestre modali.  
{% endcapture %}{% include callout.html content=callout type="warning" %}

{% capture example %}
<div class="modal fade" tabindex="-1" role="dialog" id="modal01">
   <div class="modal-dialog modal-lg modal-dialog-centered" role="document">
      <div class="modal-content">
         <div class="modal-header">
            <h4 class="modal-title">Trova l'operatore accreditato più vicino a te</h4>
            <button class="close" type="button" data-dismiss="modal" aria-label="Close">
               <svg class="icon">
                  <use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-close"></use>
               </svg>
            </button>
         </div>
         <div class="modal-body">
            <p>Ricerca con semplicità gli operatori accreditati per i servizi al lavoro utilizzando la mappa interattiva.</p>
            <br/>
            <p>Cliccando sulla sede prescelta si apre una finestra in cui sono presenti le informazioni per contattare l’ente oltre all’attività primaria dichiarata dallo stesso ente (codice ATECO – Attività economiche).</p>
         </div>
         <div class="modal-footer">
            <button class="btn btn-outline-primary btn-sm" type="button" data-dismiss="modal">Annulla</button>
            <button class="btn btn-primary btn-sm" data-dismiss="modal" type="button">Applica</button>
         </div>
      </div>
   </div>
</div>

<button class="btn btn-primary" type="button" data-bs-toggle="modal" data-target="#modal01">
  Lancia la demo della modale
</button>
{% endcapture %}{% include example.html content=example %}



{% capture callout %}
####  <svg class="icon icon-info icon-lg"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-info-circle"></use></svg> Riferimenti
Il contenuto di questa pagina si riferisce ai seguenti punti della Documentazione Tecnica:
- **[Modale]({{ site.baseurl }}/docs/componenti/modale/)**
{% endcapture %}{% include callout.html content=callout type="info" %}
