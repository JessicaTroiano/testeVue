<template>
    <v-container>
    <h2 class="text-h5 text-center mb-3 mt-5">Classificação dos clubes</h2>
    <ClubesTablea :clubesOrdenados="clubesOrdenados"/>
  </v-container>
</template>

<script>
import ClubesTablea from '../components/shared/ClubesTablea.vue'

export default {
    name: "ClubesLista",
  
  components: {
    ClubesTablea
  },
    data() {
        return {
            clubeslista: []
        }
    },
  created()
    {fetch('https://hackthon-decola.firebaseio.com/clubes-lista.json')
    .then(response => response.json())
    .then(json => {
        this.clubeslista = json;
        console.log(this.clubeslista)
        })
  },
    computed: {
    clubesOrdenados() {
      const listaComputada = this.clubeslista.slice(0).sort(
        (a, b) =>  a.pontos > b.pontos ? -1 : 1
      );
      return listaComputada;
    }
  },
}
</script>

><style scoped>

</style>