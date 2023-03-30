---
layout: it25_docs
title: Tab bar
group: call-to-action
toc: false
---

La **Tab bar** organizza e permette la navigazione tra gruppi di contenuti che sono tra loro correlati ed allo **stesso livello di gerarchia**.
Ogni tab dovrebbe mostrare un contenuto **distinto dalle altre**. A tal proposito, le tab **non devono essere usate per spezzare un contenuto** che ha bisogno di essere letto in un dato ordine.
Le label delle tab devono essere **corte e non abbreviate**, a meno che non sia strettamente necessario. Le tab con solo testo, con icona e con testo e icona non vanno mai mescolate. Ogni bar deve contenere tab **dello stesso tipo**.

{% capture example %}

<div class="container-fluid">
  <div class="row">
    <div class="col">
      <label class="my-3">Solo testo</label>
       <ul class="nav nav-tabs">
        <li class="nav-item"><a class="nav-link" href="#">Label</a></li>
        <li class="nav-item"><a class="nav-link" href="#">Label</a></li>
        <li class="nav-item"><a class="nav-link active" href="#">Label</a></li>
        <li class="nav-item"><a class="nav-link disabled" href="#">Label</a></li>
      </ul>
    </div>
  </div>
  <div class="row">
    <div class="col">
      <label class="my-3">Solo Icone</label>
     <ul class="nav nav-tabs">
        <li class="nav-item">
          <a class="nav-link" href="#" data-bs-toggle="tooltip" data-placement="top" title="Label">
            <svg class="icon icon-primary"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-star-outline"></use></svg>
            <!-- <span class="sr-only">Breve testo esplicativo</span> -->
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#" data-bs-toggle="tooltip" data-placement="top" title="Label">
            <svg class="icon icon-primary"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-pa"></use></svg>
            <!-- <span class="sr-only">Breve testo esplicativo</span> -->
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#" data-bs-toggle="tooltip" data-placement="top" title="Label">
            <svg class="icon icon-primary"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-comment"></use></svg>
            <!-- <span class="sr-only">Breve testo esplicativo</span> -->
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" data-bs-toggle="tooltip" data-placement="top" title="Label" tabindex="-1">
            <svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-copy"></use></svg>
            <!-- <span class="sr-only">Breve testo esplicativo</span> -->
          </a>
        </li>
      </ul>
    </div>
  </div>
  <div class="row">
    <div class="col">
      <label class="my-3">Testo e Icone</label>
      <ul class="nav nav-tabs nav-tabs-icon-text icon-right">
        <li class="nav-item">
          <a class="nav-link" href="#">
            Label
            <svg class="icon icon-primary"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-star-outline"></use></svg>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">
            Label
            <svg class="icon icon-primary"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-pa"></use></svg>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" href="#">
            Label
            <svg class="icon icon-primary"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-comment"></use></svg>
          </a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1">
            Label
            <svg class="icon"><use xlink:href="{{ site.baseurl }}/dist/svg/sprites.svg#it-copy"></use></svg>
          </a>
        </li>
      </ul>
    </div>
  </div>
</div>

{% endcapture %}{% include example.html content=example %}
