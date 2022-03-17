<template>
    <v-container>
    <v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th colspan="2" class="text-left">
            Clubes
          </th>
          <th class="text-left">
           Pontos
          </th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="clubes, index of clubeslista" v-bind:key="clubes.id">
          <td>{{index +1}}</td>
          <td>{{clubes.nome}}</td>
          <td>{{clubes.pontos}}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
    </v-container>
</template>

<script>
export default {
    name: "ClubesLista",

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
        }
    
}
</script>

><style scoped>

</style>