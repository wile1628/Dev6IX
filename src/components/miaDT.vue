<template>
  <div>
    <v-data-table
      :headers="headers"
      :items="desserts"
      :pagination.sync="pagination"
      :total-items="totalDesserts"
      :loading="loading"
      class="elevation-1"
    >
      <template slot="items" slot-scope="props">
        <td>{{ props.item.name }}</td>
        <td class="text-center">{{ props.item.cpu }}</td>
        <td class="text-center">{{ props.item.model }}</td>
        <td class="text-center">{{ props.item.lp }}</td>
        <td class="text-center">{{ props.item.vms }}</td>
        <td class="text-center">{{ props.item.hypervisor }}</td>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import VDataTable from 'vuetify/es5/components/VDataTable/VDataTable'
export default {
  name: 'miaDT',
  components: {
    VDataTable
  },
  data () {
    return {
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
        { text: 'CPU', value: 'cpu' },
        { text: 'Model', value: 'model' },
        { text: 'CPU number', value: 'lp' },
        { text: 'RAM (GB)', value: 'vms' },
        { text: 'Hypervisor', value: 'hypervisor' }
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
      return [
        {
          value: false,
          name: ' prod-esx-mia2-01-util01.vm.ironport.com',
          cpu: ' Intel(R) Xeon(R) CPU E5-2690 0 @ 2.90GHz',
          model: ' UCSC-C240-M3S',
          lp: ' 16',
          vms: ' 191.835361480712890625',
          hypervisor: ' 6.5.0 build 9298722'
        },

        {
          value: false,
          name: ' prod-esx-mia2-01-01-16.vm.ironport.com',
          cpu: ' Intel(R) Xeon(R) CPU E5-2660 0 @ 2.20GHz',
          model: ' UCSB-B200-M3',
          lp: ' 16',
          vms: ' 255.930328369140625',
          hypervisor: ' 6.5.0 build 7273056'
        },

        {
          value: false,
          name: ' prod-esx-mia2-01-01-22.vm.ironport.com',
          cpu: ' Intel(R) Xeon(R) CPU E5-2660 0 @ 2.20GHz',
          model: ' UCSB-B200-M3',
          lp: ' 16',
          vms: ' 255.930328369140625',
          hypervisor: ' 6.5.0 build 7273056'
        },

        {
          value: false,
          name: ' prod-esx-mia2-01-01-12.vm.ironport.com',
          cpu: ' Intel(R) Xeon(R) CPU E5-2660 0 @ 2.20GHz',
          model: ' UCSB-B200-M3',
          lp: ' 16',
          vms: ' 255.930328369140625',
          hypervisor: ' 6.5.0 build 7273056'
        },

        {
          value: false,
          name: ' prod-esx-mia2-01-01-13.vm.ironport.com',
          cpu: ' Intel(R) Xeon(R) CPU E5-2660 0 @ 2.20GHz',
          model: ' UCSB-B200-M3',
          lp: ' 16',
          vms: ' 255.930328369140625',
          hypervisor: ' 6.5.0 build 7273056'
        },

        {
          value: false,
          name: ' prod-esx-mia2-01-01-31.vm.ironport.com',
          cpu: ' Intel(R) Xeon(R) CPU E5-2660 0 @ 2.20GHz',
          model: ' UCSB-B200-M3',
          lp: ' 16',
          vms: ' 255.930328369140625',
          hypervisor: ' 6.5.0 build 7273056'
        },

        {
          value: false,
          name: ' prod-esx-mia2-01-01-03.vm.ironport.com',
          cpu: ' Intel(R) Xeon(R) CPU E5-2660 0 @ 2.20GHz',
          model: ' UCSB-B200-M3',
          lp: ' 16',
          vms: ' 255.930328369140625',
          hypervisor: ' 6.5.0 build 7273056'
        },

        {
          value: false,
          name: ' prod-esx-mia2-01-01-19.vm.ironport.com',
          cpu: ' Intel(R) Xeon(R) CPU E5-2660 0 @ 2.20GHz',
          model: ' UCSB-B200-M3',
          lp: ' 16',
          vms: ' 255.930328369140625',
          hypervisor: ' 6.5.0 build 7273056'
        },

        {
          value: false,
          name: ' prod-esx-mia2-01-01-11.vm.ironport.com',
          cpu: ' Intel(R) Xeon(R) CPU E5-2660 0 @ 2.20GHz',
          model: ' UCSB-B200-M3',
          lp: ' 16',
          vms: ' 255.930328369140625',
          hypervisor: ' 6.5.0 build 7273056'
        },

        {
          value: false,
          name: ' prod-esx-mia2-01-01-30.vm.ironport.com',
          cpu: ' Intel(R) Xeon(R) CPU E5-2660 0 @ 2.20GHz',
          model: ' UCSB-B200-M3',
          lp: ' 16',
          vms: ' 255.930328369140625',
          hypervisor: ' 6.5.0 build 7273056'
        },

        {
          value: false,
          name: ' prod-esx-mia2-01-01-26.vm.ironport.com',
          cpu: ' Intel(R) Xeon(R) CPU E5-2660 0 @ 2.20GHz',
          model: ' UCSB-B200-M3',
          lp: ' 16',
          vms: ' 255.930328369140625',
          hypervisor: ' 6.5.0 build 7273056'
        },

        {
          value: false,
          name: ' prod-esx-mia2-01-01-17.vm.ironport.com',
          cpu: ' Intel(R) Xeon(R) CPU E5-2660 0 @ 2.20GHz',
          model: ' UCSB-B200-M3',
          lp: ' 16',
          vms: ' 255.930328369140625',
          hypervisor: ' 6.5.0 build 7273056'
        },

        {
          value: false,
          name: ' prod-esx-mia2-01-01-32.vm.ironport.com',
          cpu: ' Intel(R) Xeon(R) CPU E5-2660 0 @ 2.20GHz',
          model: ' UCSB-B200-M3',
          lp: ' 16',
          vms: ' 255.930328369140625',
          hypervisor: ' 6.5.0 build 7273056'
        },

        {
          value: false,
          name: ' prod-esx-mia2-01-01-23.vm.ironport.com',
          cpu: ' Intel(R) Xeon(R) CPU E5-2660 0 @ 2.20GHz',
          model: ' UCSB-B200-M3',
          lp: ' 16',
          vms: ' 255.930328369140625',
          hypervisor: ' 6.5.0 build 7273056'
        },

        {
          value: false,
          name: ' prod-esx-mia2-01-01-10.vm.ironport.com',
          cpu: ' Intel(R) Xeon(R) CPU E5-2660 0 @ 2.20GHz',
          model: ' UCSB-B200-M3',
          lp: ' 16',
          vms: ' 255.930328369140625',
          hypervisor: ' 6.5.0 build 7273056'
        },

        {
          value: false,
          name: ' prod-esx-mia2-01-01-07.vm.ironport.com',
          cpu: ' Intel(R) Xeon(R) CPU E5-2660 0 @ 2.20GHz',
          model: ' UCSB-B200-M3',
          lp: ' 16',
          vms: ' 255.930328369140625',
          hypervisor: ' 6.5.0 build 7273056'
        },

        {
          value: false,
          name: ' prod-esx-mia2-01-01-24.vm.ironport.com',
          cpu: ' Intel(R) Xeon(R) CPU E5-2660 0 @ 2.20GHz',
          model: ' UCSB-B200-M3',
          lp: ' 16',
          vms: ' 255.930328369140625',
          hypervisor: ' 6.5.0 build 7273056'
        },

        {
          value: false,
          name: ' prod-esx-mia2-01-01-15.vm.ironport.com',
          cpu: ' Intel(R) Xeon(R) CPU E5-2660 0 @ 2.20GHz',
          model: ' UCSB-B200-M3',
          lp: ' 16',
          vms: ' 255.930328369140625',
          hypervisor: ' 6.5.0 build 7273056'
        },

        {
          value: false,
          name: ' prod-esx-mia2-01-01-02.vm.ironport.com',
          cpu: ' Intel(R) Xeon(R) CPU E5-2660 0 @ 2.20GHz',
          model: ' UCSB-B200-M3',
          lp: ' 16',
          vms: ' 255.930328369140625',
          hypervisor: ' 6.5.0 build 7273056'
        },

        {
          value: false,
          name: ' prod-esx-mia2-01-01-28.vm.ironport.com',
          cpu: ' Intel(R) Xeon(R) CPU E5-2660 0 @ 2.20GHz',
          model: ' UCSB-B200-M3',
          lp: ' 16',
          vms: ' 255.930328369140625',
          hypervisor: ' 6.5.0 build 7273056'
        },

        {
          value: false,
          name: ' prod-esx-mia2-01-01-14.vm.ironport.com',
          cpu: ' Intel(R) Xeon(R) CPU E5-2660 0 @ 2.20GHz',
          model: ' UCSB-B200-M3',
          lp: ' 16',
          vms: ' 255.930328369140625',
          hypervisor: ' 6.5.0 build 7273056'
        },

        {
          value: false,
          name: ' prod-esx-mia2-01-01-05.vm.ironport.com',
          cpu: ' Intel(R) Xeon(R) CPU E5-2660 0 @ 2.20GHz',
          model: ' UCSB-B200-M3',
          lp: ' 16',
          vms: ' 255.930328369140625',
          hypervisor: ' 6.5.0 build 7273056'
        },

        {
          value: false,
          name: ' prod-esx-mia2-01-01-29.vm.ironport.com',
          cpu: ' Intel(R) Xeon(R) CPU E5-2660 0 @ 2.20GHz',
          model: ' UCSB-B200-M3',
          lp: ' 16',
          vms: ' 255.930328369140625',
          hypervisor: ' 6.5.0 build 7273056'
        },

        {
          value: false,
          name: ' prod-esx-mia2-01-01-18.vm.ironport.com',
          cpu: ' Intel(R) Xeon(R) CPU E5-2660 0 @ 2.20GHz',
          model: ' UCSB-B200-M3',
          lp: ' 16',
          vms: ' 255.930328369140625',
          hypervisor: ' 6.5.0 build 7273056'
        },

        {
          value: false,
          name: ' prod-esx-mia2-01-01-08.vm.ironport.com',
          cpu: ' Intel(R) Xeon(R) CPU E5-2660 0 @ 2.20GHz',
          model: ' UCSB-B200-M3',
          lp: ' 16',
          vms: ' 255.930328369140625',
          hypervisor: ' 6.5.0 build 7273056'
        },

        {
          value: false,
          name: ' prod-esx-mia2-01-01-27.vm.ironport.com',
          cpu: ' Intel(R) Xeon(R) CPU E5-2660 0 @ 2.20GHz',
          model: ' UCSB-B200-M3',
          lp: ' 16',
          vms: ' 255.930328369140625',
          hypervisor: ' 6.5.0 build 7273056'
        },

        {
          value: false,
          name: ' prod-esx-mia2-01-01-06.vm.ironport.com',
          cpu: ' Intel(R) Xeon(R) CPU E5-2660 0 @ 2.20GHz',
          model: ' UCSB-B200-M3',
          lp: ' 16',
          vms: ' 255.930328369140625',
          hypervisor: ' 6.5.0 build 7273056'
        },

        {
          value: false,
          name: ' prod-esx-mia2-01-01-01.vm.ironport.com',
          cpu: ' Intel(R) Xeon(R) CPU E5-2660 0 @ 2.20GHz',
          model: ' UCSB-B200-M3',
          lp: ' 16',
          vms: ' 255.930328369140625',
          hypervisor: ' 6.5.0 build 7273056'
        },

        {
          value: false,
          name: ' prod-esx-mia2-01-01-25.vm.ironport.com',
          cpu: ' Intel(R) Xeon(R) CPU E5-2660 0 @ 2.20GHz',
          model: ' UCSB-B200-M3',
          lp: ' 16',
          vms: ' 255.930328369140625',
          hypervisor: ' 6.5.0 build 7273056'
        },

        {
          value: false,
          name: ' prod-esx-mia2-01-01-21.vm.ironport.com',
          cpu: ' Intel(R) Xeon(R) CPU E5-2660 0 @ 2.20GHz',
          model: ' UCSB-B200-M3',
          lp: ' 16',
          vms: ' 255.930328369140625',
          hypervisor: ' 6.5.0 build 7273056'
        },

        {
          value: false,
          name: ' prod-esx-mia2-01-01-04.vm.ironport.com',
          cpu: ' Intel(R) Xeon(R) CPU E5-2660 0 @ 2.20GHz',
          model: ' UCSB-B200-M3',
          lp: ' 16',
          vms: ' 255.930328369140625',
          hypervisor: ' 6.5.0 build 7273056'
        },

        {
          value: false,
          name: ' prod-esx-mia2-01-01-09.vm.ironport.com',
          cpu: ' Intel(R) Xeon(R) CPU E5-2660 0 @ 2.20GHz',
          model: ' UCSB-B200-M3',
          lp: ' 16',
          vms: ' 255.930328369140625',
          hypervisor: ' 6.5.0 build 7273056'
        },

        {
          value: false,
          name: ' prod-esx-mia2-01-01-20.vm.ironport.com',
          cpu: ' Intel(R) Xeon(R) CPU E5-2660 0 @ 2.20GHz',
          model: ' UCSB-B200-M3',
          lp: ' 16',
          vms: ' 255.930328369140625',
          hypervisor: ' 6.5.0 build 7273056'
        },

        {
          value: false,
          name: ' prod-esx-mia2-01-02-16.vm.ironport.com',
          cpu: ' Intel(R) Xeon(R) CPU E5-2660 0 @ 2.20GHz',
          model: ' UCSB-B200-M3',
          lp: ' 16',
          vms: ' 255.930328369140625',
          hypervisor: ' 6.5.0 build 7273056'
        },

        {
          value: false,
          name: ' prod-esx-mia2-01-02-30.vm.ironport.com',
          cpu: ' Intel(R) Xeon(R) CPU E5-2660 0 @ 2.20GHz',
          model: ' UCSB-B200-M3',
          lp: ' 16',
          vms: ' 255.930328369140625',
          hypervisor: ' 6.5.0 build 7273056'
        },

        {
          value: false,
          name: ' prod-esx-mia2-01-02-18.vm.ironport.com',
          cpu: ' Intel(R) Xeon(R) CPU E5-2660 0 @ 2.20GHz',
          model: ' UCSB-B200-M3',
          lp: ' 16',
          vms: ' 255.930328369140625',
          hypervisor: ' 6.5.0 build 7273056'
        },

        {
          value: false,
          name: ' prod-esx-mia2-01-02-32.vm.ironport.com',
          cpu: ' Intel(R) Xeon(R) CPU E5-2660 0 @ 2.20GHz',
          model: ' UCSB-B200-M3',
          lp: ' 16',
          vms: ' 255.930328369140625',
          hypervisor: ' 6.5.0 build 7273056'
        },

        {
          value: false,
          name: ' prod-esx-mia2-01-02-26.vm.ironport.com',
          cpu: ' Intel(R) Xeon(R) CPU E5-2660 0 @ 2.20GHz',
          model: ' UCSB-B200-M3',
          lp: ' 16',
          vms: ' 255.930328369140625',
          hypervisor: ' 6.5.0 build 7273056'
        },

        {
          value: false,
          name: ' prod-esx-mia2-01-02-25.vm.ironport.com',
          cpu: ' Intel(R) Xeon(R) CPU E5-2660 0 @ 2.20GHz',
          model: ' UCSB-B200-M3',
          lp: ' 16',
          vms: ' 255.930328369140625',
          hypervisor: ' 6.5.0 build 7273056'
        },

        {
          value: false,
          name: ' prod-esx-mia2-01-02-10.vm.ironport.com',
          cpu: ' Intel(R) Xeon(R) CPU E5-2660 0 @ 2.20GHz',
          model: ' UCSB-B200-M3',
          lp: ' 16',
          vms: ' 255.930328369140625',
          hypervisor: ' 6.5.0 build 7273056'
        },

        {
          value: false,
          name: ' prod-esx-mia2-01-02-24.vm.ironport.com',
          cpu: ' Intel(R) Xeon(R) CPU E5-2660 0 @ 2.20GHz',
          model: ' UCSB-B200-M3',
          lp: ' 16',
          vms: ' 255.930328369140625',
          hypervisor: ' 6.5.0 build 7273056'
        },

        {
          value: false,
          name: ' prod-esx-mia2-01-02-13.vm.ironport.com',
          cpu: ' Intel(R) Xeon(R) CPU E5-2660 0 @ 2.20GHz',
          model: ' UCSB-B200-M3',
          lp: ' 16',
          vms: ' 255.930328369140625',
          hypervisor: ' 6.5.0 build 7273056'
        },

        {
          value: false,
          name: ' prod-esx-mia2-01-02-15.vm.ironport.com',
          cpu: ' Intel(R) Xeon(R) CPU E5-2660 0 @ 2.20GHz',
          model: ' UCSB-B200-M3',
          lp: ' 16',
          vms: ' 255.930328369140625',
          hypervisor: ' 6.5.0 build 7273056'
        },

        {
          value: false,
          name: ' prod-esx-mia2-01-02-09.vm.ironport.com',
          cpu: ' Intel(R) Xeon(R) CPU E5-2660 0 @ 2.20GHz',
          model: ' UCSB-B200-M3',
          lp: ' 16',
          vms: ' 255.930328369140625',
          hypervisor: ' 6.5.0 build 7273056'
        },

        {
          value: false,
          name: ' prod-esx-mia2-01-02-20.vm.ironport.com',
          cpu: ' Intel(R) Xeon(R) CPU E5-2660 0 @ 2.20GHz',
          model: ' UCSB-B200-M3',
          lp: ' 16',
          vms: ' 255.930328369140625',
          hypervisor: ' 6.5.0 build 7273056'
        },

        {
          value: false,
          name: ' prod-esx-mia2-01-02-28.vm.ironport.com',
          cpu: ' Intel(R) Xeon(R) CPU E5-2660 0 @ 2.20GHz',
          model: ' UCSB-B200-M3',
          lp: ' 16',
          vms: ' 255.930328369140625',
          hypervisor: ' 6.5.0 build 7273056'
        },

        {
          value: false,
          name: ' prod-esx-mia2-01-02-06.vm.ironport.com',
          cpu: ' Intel(R) Xeon(R) CPU E5-2660 0 @ 2.20GHz',
          model: ' UCSB-B200-M3',
          lp: ' 16',
          vms: ' 255.930328369140625',
          hypervisor: ' 6.5.0 build 7273056'
        },

        {
          value: false,
          name: ' prod-esx-mia2-01-02-01.vm.ironport.com',
          cpu: ' Intel(R) Xeon(R) CPU E5-2660 0 @ 2.20GHz',
          model: ' UCSB-B200-M3',
          lp: ' 16',
          vms: ' 255.930328369140625',
          hypervisor: ' 6.5.0 build 7273056'
        },

        {
          value: false,
          name: ' prod-esx-mia2-01-02-02.vm.ironport.com',
          cpu: ' Intel(R) Xeon(R) CPU E5-2660 0 @ 2.20GHz',
          model: ' UCSB-B200-M3',
          lp: ' 16',
          vms: ' 255.930328369140625',
          hypervisor: ' 6.5.0 build 7273056'
        },

        {
          value: false,
          name: ' prod-esx-mia2-01-02-19.vm.ironport.com',
          cpu: ' Intel(R) Xeon(R) CPU E5-2660 0 @ 2.20GHz',
          model: ' UCSB-B200-M3',
          lp: ' 16',
          vms: ' 255.930328369140625',
          hypervisor: ' 6.5.0 build 7273056'
        },

        {
          value: false,
          name: ' prod-esx-mia2-01-02-17.vm.ironport.com',
          cpu: ' Intel(R) Xeon(R) CPU E5-2660 0 @ 2.20GHz',
          model: ' UCSB-B200-M3',
          lp: ' 16',
          vms: ' 255.930328369140625',
          hypervisor: ' 6.5.0 build 7273056'
        },

        {
          value: false,
          name: ' prod-esx-mia2-01-02-22.vm.ironport.com',
          cpu: ' Intel(R) Xeon(R) CPU E5-2660 0 @ 2.20GHz',
          model: ' UCSB-B200-M3',
          lp: ' 16',
          vms: ' 255.930328369140625',
          hypervisor: ' 6.5.0 build 7273056'
        },

        {
          value: false,
          name: ' prod-esx-mia2-01-02-08.vm.ironport.com',
          cpu: ' Intel(R) Xeon(R) CPU E5-2660 0 @ 2.20GHz',
          model: ' UCSB-B200-M3',
          lp: ' 16',
          vms: ' 255.930328369140625',
          hypervisor: ' 6.5.0 build 7273056'
        },

        {
          value: false,
          name: ' prod-esx-mia2-01-02-11.vm.ironport.com',
          cpu: ' Intel(R) Xeon(R) CPU E5-2660 0 @ 2.20GHz',
          model: ' UCSB-B200-M3',
          lp: ' 16',
          vms: ' 255.930328369140625',
          hypervisor: ' 6.5.0 build 8294253'
        },

        {
          value: false,
          name: ' prod-esx-mia2-01-02-04.vm.ironport.com',
          cpu: ' Intel(R) Xeon(R) CPU E5-2660 0 @ 2.20GHz',
          model: ' UCSB-B200-M3',
          lp: ' 16',
          vms: ' 255.930328369140625',
          hypervisor: ' 6.5.0 build 7273056'
        },

        {
          value: false,
          name: ' prod-esx-mia2-01-02-14.vm.ironport.com',
          cpu: ' Intel(R) Xeon(R) CPU E5-2660 0 @ 2.20GHz',
          model: ' UCSB-B200-M3',
          lp: ' 16',
          vms: ' 255.930328369140625',
          hypervisor: ' 6.5.0 build 7273056'
        },

        {
          value: false,
          name: ' prod-esx-mia2-01-02-23.vm.ironport.com',
          cpu: ' Intel(R) Xeon(R) CPU E5-2660 0 @ 2.20GHz',
          model: ' UCSB-B200-M3',
          lp: ' 16',
          vms: ' 255.930328369140625',
          hypervisor: ' 6.5.0 build 7273056'
        },

        {
          value: false,
          name: ' prod-esx-mia2-01-02-03.vm.ironport.com',
          cpu: ' Intel(R) Xeon(R) CPU E5-2660 0 @ 2.20GHz',
          model: ' UCSB-B200-M3',
          lp: ' 16',
          vms: ' 255.930328369140625',
          hypervisor: ' 6.5.0 build 7273056'
        },

        {
          value: false,
          name: ' prod-esx-mia2-01-02-27.vm.ironport.com',
          cpu: ' Intel(R) Xeon(R) CPU E5-2660 0 @ 2.20GHz',
          model: ' UCSB-B200-M3',
          lp: ' 16',
          vms: ' 255.930328369140625',
          hypervisor: ' 6.5.0 build 7273056'
        },

        {
          value: false,
          name: ' prod-esx-mia2-01-02-07.vm.ironport.com',
          cpu: ' Intel(R) Xeon(R) CPU E5-2660 0 @ 2.20GHz',
          model: ' UCSB-B200-M3',
          lp: ' 16',
          vms: ' 255.930328369140625',
          hypervisor: ' 6.5.0 build 7273056'
        },

        {
          value: false,
          name: ' prod-esx-mia2-01-02-05.vm.ironport.com',
          cpu: ' Intel(R) Xeon(R) CPU E5-2660 0 @ 2.20GHz',
          model: ' UCSB-B200-M3',
          lp: ' 16',
          vms: ' 255.930328369140625',
          hypervisor: ' 6.5.0 build 7273056'
        },

        {
          value: false,
          name: ' prod-esx-mia2-01-02-31.vm.ironport.com',
          cpu: ' Intel(R) Xeon(R) CPU E5-2660 0 @ 2.20GHz',
          model: ' UCSB-B200-M3',
          lp: ' 16',
          vms: ' 255.930328369140625',
          hypervisor: ' 6.5.0 build 7273056'
        },

        {
          value: false,
          name: ' prod-esx-mia2-01-02-12.vm.ironport.com',
          cpu: ' Intel(R) Xeon(R) CPU E5-2660 0 @ 2.20GHz',
          model: ' UCSB-B200-M3',
          lp: ' 16',
          vms: ' 255.930328369140625',
          hypervisor: ' 6.5.0 build 7273056'
        },

        {
          value: false,
          name: ' prod-esx-mia2-01-02-29.vm.ironport.com',
          cpu: ' Intel(R) Xeon(R) CPU E5-2660 0 @ 2.20GHz',
          model: ' UCSB-B200-M3',
          lp: ' 16',
          vms: ' 255.930328369140625',
          hypervisor: ' 6.5.0 build 7273056'
        },

        {
          value: false,
          name: ' prod-esx-mia2-01-02-21.vm.ironport.com',
          cpu: ' Intel(R) Xeon(R) CPU E5-2660 0 @ 2.20GHz',
          model: ' UCSB-B200-M3',
          lp: ' 16',
          vms: ' 255.930328369140625',
          hypervisor: ' 6.5.0 build 7273056'
        },

        {
          value: false,
          name: ' ctr-esx-mia2-01-01-03.vm.ironport.com',
          cpu: ' Intel(R) Xeon(R) CPU E5-2660 0 @ 2.20GHz',
          model: ' UCSB-B200-M3',
          lp: ' 16',
          vms: ' 255.94146728515625',
          hypervisor: ' 6.5.0 build 8294253'
        },

        {
          value: false,
          name: ' ctr-esx-mia2-01-01-07.vm.ironport.com',
          cpu: ' Intel(R) Xeon(R) CPU E5-2660 0 @ 2.20GHz',
          model: ' UCSB-B200-M3',
          lp: ' 16',
          vms: ' 255.9415740966796875',
          hypervisor: ' 6.5.0 build 8294253'
        },

        {
          value: false,
          name: ' ctr-esx-mia2-01-01-01.vm.ironport.com',
          cpu: ' Intel(R) Xeon(R) CPU E5-2660 0 @ 2.20GHz',
          model: ' UCSB-B200-M3',
          lp: ' 16',
          vms: ' 255.94146728515625',
          hypervisor: ' 6.5.0 build 8294253'
        },

        {
          value: false,
          name: ' ctr-esx-mia2-01-01-02.vm.ironport.com',
          cpu: ' Intel(R) Xeon(R) CPU E5-2660 0 @ 2.20GHz',
          model: ' UCSB-B200-M3',
          lp: ' 16',
          vms: ' 255.94146728515625',
          hypervisor: ' 6.5.0 build 8294253'
        },

        {
          value: false,
          name: ' ctr-esx-mia2-01-01-05.vm.ironport.com',
          cpu: ' Intel(R) Xeon(R) CPU E5-2660 0 @ 2.20GHz',
          model: ' UCSB-B200-M3',
          lp: ' 16',
          vms: ' 255.94146728515625',
          hypervisor: ' 6.5.0 build 8294253'
        },

        {
          value: false,
          name: ' ctr-esx-mia2-01-01-06.vm.ironport.com',
          cpu: ' Intel(R) Xeon(R) CPU E5-2660 0 @ 2.20GHz',
          model: ' UCSB-B200-M3',
          lp: ' 16',
          vms: ' 255.94146728515625',
          hypervisor: ' 6.5.0 build 8294253'
        },

        {
          value: false,
          name: ' ctr-esx-mia2-01-01-08.vm.ironport.com',
          cpu: ' Intel(R) Xeon(R) CPU E5-2660 0 @ 2.20GHz',
          model: ' UCSB-B200-M3',
          lp: ' 16',
          vms: ' 255.94146728515625',
          hypervisor: ' 6.5.0 build 8294253'
        },

        {
          value: false,
          name: ' ctr-esx-mia2-01-01-04.vm.ironport.com',
          cpu: ' Intel(R) Xeon(R) CPU E5-2660 0 @ 2.20GHz',
          model: ' UCSB-B200-M3',
          lp: ' 16',
          vms: ' 255.94146728515625',
          hypervisor: ' 6.5.0 build 8294253'
        },

        {
          value: false,
          name: ' prod-esx-mia2-01-c1-01.vm.ironport.com',
          cpu: ' Intel(R) Xeon(R) CPU E5-2660 0 @ 2.20GHz',
          model: ' UCSB-B200-M3',
          lp: ' 16',
          vms: ' 255.942821502685546875',
          hypervisor: ' 6.5.0 build 8294253'
        },

        {
          value: false,
          name: ' prod-esx-mia2-01-c1-02.vm.ironport.com',
          cpu: ' Intel(R) Xeon(R) CPU E5-2660 0 @ 2.20GHz',
          model: ' UCSB-B200-M3',
          lp: ' 16',
          vms: ' 255.942821502685546875',
          hypervisor: ' 6.5.0 build 8294253'
        },

        {
          value: false,
          name: ' prod-esx-mia2-01-c1-03.vm.ironport.com',
          cpu: ' Intel(R) Xeon(R) CPU E5-2660 0 @ 2.20GHz',
          model: ' UCSB-B200-M3',
          lp: ' 16',
          vms: ' 255.942821502685546875',
          hypervisor: ' 6.5.0 build 8294253'
        },

        {
          value: false,
          name: ' prod-esx-mia2-01-c1-04.vm.ironport.com',
          cpu: ' Intel(R) Xeon(R) CPU E5-2660 0 @ 2.20GHz',
          model: ' UCSB-B200-M3',
          lp: ' 16',
          vms: ' 255.942821502685546875',
          hypervisor: ' 6.5.0 build 8294253'
        }

      ]
    }
  }
}
</script>

<style scoped>
v-menu {
  top:10%;
}
</style>
