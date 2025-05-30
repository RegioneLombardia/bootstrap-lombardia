---
layout: docs
group: menu-di-navigazione
toc: true
title: Forward
description: Consente all'utente di far scorrere automaticamente a una parte specifica della pagina.
---

## Esempio

Per attivare lo scorrimento automatico del documento all'àncora indicata nell'attributo `href` o dall'attributo `data-bs-target`, è sufficiente aggiungere al tag link l'attributo `data-bs-toggle="forward"` e la classe `.forward`:

{% comment %}Example name: Base{% endcomment %}
{% capture example %}
<a href="#sezione-di-esempio" data-bs-toggle="forward" class="forward" aria-label="Vai a: Sezione di esempio">
<svg class="icon icon-lg icon-primary"><use href="{{ site.baseurl }}/dist/svg/sprites.svg#it-expand"></use></svg>
</a>
{% endcapture %}{% include example.html content=example %}

### Sezione di esempio

Et et consectetur ipsum labore excepteur est proident excepteur ad velit occaecat qui minim occaecat veniam. Fugiat veniam incididunt anim aliqua enim pariatur veniam sunt est aute sit dolor anim. Velit non irure adipisicing aliqua ullamco irure incididunt irure non esse consectetur nostrud minim non minim occaecat. Amet duis do nisi duis veniam non est eiusmod tempor incididunt tempor dolor ipsum in qui sit. Exercitation mollit sit culpa nisi culpa non adipisicing reprehenderit do dolore. Duis reprehenderit occaecat anim ullamco ad duis occaecat ex.

Nulla est ullamco ut irure incididunt nulla Lorem Lorem minim irure officia enim reprehenderit. Magna duis labore cillum sint adipisicing exercitation ipsum. Nostrud ut anim non exercitation velit laboris fugiat cupidatat. Commodo esse dolore fugiat sint velit ullamco magna consequat voluptate minim amet aliquip ipsum aute laboris nisi. Labore labore veniam irure irure ipsum pariatur mollit magna in cupidatat dolore magna irure esse tempor ad mollit. Dolore commodo nulla minim amet ipsum officia consectetur amet ullamco voluptate nisi commodo ea sit eu.

Sint sit mollit irure quis est nostrud cillum consequat Lorem esse do quis dolor esse fugiat sunt do. Eu ex commodo veniam Lorem aliquip laborum occaecat qui Lorem esse mollit dolore anim cupidatat. Deserunt officia id Lorem nostrud aute id commodo elit eiusmod enim irure amet eiusmod qui reprehenderit nostrud tempor. Fugiat ipsum excepteur in aliqua non et quis aliquip ad irure in labore cillum elit enim. Consequat aliquip incididunt ipsum et minim laborum laborum laborum et cillum labore. Deserunt adipisicing cillum id nulla minim nostrud labore eiusmod et amet. Laboris consequat consequat commodo non ut non aliquip reprehenderit nulla anim occaecat. Sunt sit ullamco reprehenderit irure ea ullamco Lorem aute nostrud magna.

## Attivazione tramite codice

{% include callout-bundle-methods.md %}

```js
import { Forward } from 'bootstrap-italia';

const forwardEl = document.getElementById('myForward');
const forward = new Forward(forwardEl, options);
```

#### Opzioni

Le opzioni possono essere passate tramite gli attributi data o tramite Javascript. 
Per quanto riguarda gli attributi data, aggiungi il nome dell'opzione a `data-bs`.

<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th style="width: 100px;">Nome</th>
      <th style="width: 50px;">Tipo</th>
      <th style="width: 50px;">Predefinito</th>
      <th>Descrizione</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>duration</td>
      <td>number</td>
      <td>800</td>
      <td>Durata dell'animazione di scroll espressa in millisecondi.</td>
    </tr>
    <tr>
      <td>easing</td>
      <td>string</td>
      <td>easeInOutSine</td>
      <td>Inerzia dell'animazione di scroll. Per i valori fare riferimento alla <a href="https://animejs.com/documentation/#linearEasing">documentazione di AnimeJs</a>.</td>
    </tr>
  </tbody>
</table>

#### Metodi

<table class="table table-bordered table-striped">
  <thead>
    <tr>
      <th style="width: 150px;">Metodo</th>
      <th>Descrizione</th>
    </tr>
  </thead>
  <tbody>
    {% include standard-methods.html class="Forward" %}
    <tr>
      <td>goToTarget</td>
      <td>Vai al target dell'elemento.</td>
    </tr>
  </tbody>
</table>
