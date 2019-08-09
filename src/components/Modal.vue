<template>
  <transition name="modal-fade">
    <div role="dialog">
      <div ref="modal">
        <header>
          <slot name="header">
            <h2>Warning</h2>
            <button type="button" @click="close" aria-label="Close modal">x</button>
          </slot>
        </header>

        <section>
          <slot name="body">
            Are you sure about deleting this task?
          </slot>
        </section>

        <footer>
          <slot name="footer">
            <button type="button" @click="accept" aria-label="Accept">Accept</button>
            <button type="button" @click="close" aria-label="Close">Close</button>
          </slot>
        </footer>
      </div>
    </div>
  </transition>
</template>

<script>
  export default {
    name: 'modal',
    methods: {
      close() {
        this.$emit('close');
      },
      accept(){
        this.$emit('accept')
      }
    },
  };
</script>