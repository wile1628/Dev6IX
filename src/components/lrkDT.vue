<template>
  <div>
    <v-card>
      <v-card-title>
        <v-text-field
          v-model="search"
          prepend-icon="search"
          label="Search"
          single-line
          hide-details
        ></v-text-field>
        <v-spacer></v-spacer>
        <v-spacer></v-spacer>
        <img src="../assets/load2.gif" style="position: absolute; top: 6%; right: 2%;" v-show="loading"/>
        <v-spacer></v-spacer>
      </v-card-title>
    <v-data-table
      :search="search"
      light
      :headers="headers"
      :items="desserts"
      :loading="loading"
      class="elevation-1"
    >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.name }}</td>
        <td class="text-center">{{ props.item.serial }}</td>
        <td class="text-center">{{ props.item._cls }}</td>
        <td class="text-center">{{ props.item.mac_eth0 }}</td>
        <!--  <td class="text-center">{{ props.item.vms }}</td>
        <td class="text-center">{{ props.item.hypervisor }}</td> -->
      </template>
      <v-alert style="position: absolute; width: 100%; top:54%; left:0%; height: 20%;" slot="no-results" :value="true" color="#ffc107" icon="warning">
        Your search for "{{ search }}" found no results.
      </v-alert>
    </v-data-table>
    <!-- <v-icon x-large style="position: absolute; right: 18px; top: 6px" v-show="loading">refresh</v-icon> -->
    </v-card>
  </div>
</template>

<script>
import VDataTable from 'vuetify/es5/components/VDataTable/VDataTable'
import VCard from 'vuetify/es5/components/VCard/VCard'
import VTextField from 'vuetify/es5/components/VTextField/VTextField'
import VCardTitle from 'vuetify/es5/components/VCard/VCardTitle'
import VIcon from 'vuetify/es5/components/VIcon'
import VBtn from 'vuetify/es5/components/VBtn/VBtn'
import VAlert from 'vuetify/es5/components/VAlert/VAlert'

export default {
  name: 'lrkDT',
  components: {
    VIcon,
    VBtn,
    VAlert,
    VTextField,
    VCard,
    VCardTitle,
    VDataTable
  },
  props: {
    name1: {
      type: Array
    }
  },
  data () {
    return {
      search: '',
      totalDesserts: 0,
      desserts: [],
      loading: true,
      pagination: {},
      headers: [
        {
          text: 'Devices',
          align: 'left',
          sortable: true, // false,
          value: 'name'
        },
        { text: 'Serial', align: 'center', value: 'serial' },
        { text: 'Type', align: 'center', value: '_cls' },
        { text: 'MAC (eth0)', value: 'mac_eth0' }
        /* { text: 'VMs', value: 'vms' },
        { text: 'Hypervisor', value: 'hypervisor' } */
      ]
    }
  },
  watch: {
    pagination: {
      handler () {
        this.getDataFromApi()
          .then(data => {
            this.desserts = data.items
            this.totalDesserts = data.total
          })
      },
      deep: true
    }
  },
  mounted () {
    this.getDataFromApi()
      .then(data => {
        this.desserts = data.items
        this.totalDesserts = data.total
      })
  },
  methods: {
    getDataFromApi () {
      this.loading = true
      return new Promise((resolve, reject) => {
        const { sortBy, descending, page, rowsPerPage } = this.pagination

        let items = this.getDesserts()
        const total = items.length

        if (this.pagination.sortBy) {
          items = items.sort((a, b) => {
            const sortA = a[sortBy]
            const sortB = b[sortBy]

            if (descending) {
              if (sortA < sortB) return 1
              if (sortA > sortB) return -1
              return 0
            } else {
              if (sortA < sortB) return -1
              if (sortA > sortB) return 1
              return 0
            }
          })
        }

        if (rowsPerPage > 0) {
          items = items.slice((page - 1) * rowsPerPage, page * rowsPerPage)
        }

        setTimeout(() => {
          this.loading = false
          resolve({
            items,
            total
          })
        }, 1000)
      })
    },
    getDesserts () {
      return this.name1
    }
  }
}
</script>

<style scoped>
.v-menu {
  top:10%;
}
::-webkit-scrollbar {
  width: 5px;
}
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgb(186, 186, 186);
}
::-webkit-scrollbar-thumb {
  background-color: #3c59b4;  /*thumb color */
  outline: 2px solid #fffffd;
}
</style>
