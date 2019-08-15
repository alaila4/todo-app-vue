<template>
  <transition name="modal-fade">
    <div class="fixed z-40 ml-0 mt-0 bg-gray-400">
      <div class="w-30">
        <header>
          <slot name="header"> 
            <div class="flex-row">
              <h2>Warning</h2>
              <button type="button" @click="close" aria-label="Close modal">x</button>
            </div>            
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