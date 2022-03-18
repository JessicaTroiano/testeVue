<template>
<v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th colspan="2" class="text-left">Clubes</th>
          <th class="text-right">Pontos</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(clube, index) of clubesOrdenados" v-bind:key="clube.id">
          <td>{{index +1}}</td>
          <td>
            <v-avatar size="24">
              <img v-bind:src="clube.escudo" v-bind:alt="clube.nome"/>
            </v-avatar>   
             <span class="pl-2">{{ clube.nome }}</span>
          </td>
          <td class="text-right">{{clube.pontos}}</td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</template>

<script>
export default {
    name: "ClubesTablea",
    props: {
    clubesOrdenados: {
      type: Array,
      required: true
    }
  }
    
}
</script>

<style scoped>

</style>