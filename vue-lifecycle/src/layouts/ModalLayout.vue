<template>
  <div class="container">
    <header>
      <slot name="header">
        <span style="float: right">x</span>
      </slot>
    </header>
    <main>
      <slot></slot>
    </main>
    <footer>
      <slot name="footer"></slot>
    </footer>
  </div>
</template>
