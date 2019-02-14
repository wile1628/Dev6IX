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
  name: 'DT',
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
          sortable: false,
          value: 'name'
        },
        { text: 'CPU', value: 'cpu' },
        { text: 'Model', value: 'model' },
        { text: 'Logical Processors', value: 'lp' },
        { text: 'VMs', value: 'vms' },
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
          name: 'prod-esx-mia2-01-02-01.vm.ironport.com',
          cpu: 'Intel(R) Xeon(R) CPU E5-2660',
          model: 'Cisco Systems Inc UCSB-B200-M3',
          lp: 32,
          vms: 7,
          hypervisor: 'VMware ESXi, 6.5.0, 7273056'
        },
        {
          value: false,
          name: 'ctr-esx-mia2-01-01-01.vm.ironport.com',
          cpu: 'Intel(R) Xeon(R) CPU E5-2660',
          model: 'Cisco Systems Inc UCSB-B200-M3',
          lp: 32,
          vms: 21,
          hypervisor: 'VMware ESXi, 6.5.0, 8294253'
        },
        {
          value: false,
          name: 'prod-esx-mia2-01-c1-01.vm.ironport.com',
          cpu: 'Intel(R) Xeon(R) CPU E5-2660',
          model: 'Cisco Systems Inc UCSB-B200-M3',
          lp: 32,
          vms: 9,
          hypervisor: 'VMware ESXi, 6.5.0, 8294253'
        },
        {
          value: false,
          name: 'prod-esx-mia2-01-util01.vm.ironport.com',
          cpu: 'Intel(R) Xeon(R) CPU E5-2690 0 @ 2.90GHz',
          model: 'Cisco Systems Inc UCSC-C240-M3S',
          lp: 16,
          vms: 3,
          hypervisor: 'VMware ESXi, 6.5.0, 9298722'
        },
        {
          value: false,
          name: 'stg-esx-lon5-05-01-15.vm.ironport.com',
          cpu: 'Intel(R) Xeon(R) CPU E5-2695 v3 @ 2.30GHz',
          model: 'Cisco Systems Inc UCSB-B200-M4',
          lp: 56,
          vms: 6,
          hypervisor: 'VMware ESXi, 6.5.0, 7273056'
        },
        {
          value: false,
          name: 'ctr-esx-lon5-02-01-01.vm.ironport.com',
          cpu: 'Intel(R) Xeon(R) CPU E5-2660 0 @ 2.20GHz',
          model: 'Cisco Systems Inc UCSB-B200-M3',
          lp: 32,
          vms: 20,
          hypervisor: 'VMware ESXi, 6.5.0, 8294253'
        },
        {
          value: false,
          name: 'prod-esx-lon5-02-01-01.vm.ironport.com',
          cpu: 'Intel(R) Xeon(R) CPU E5-2660',
          model: 'Cisco Systems Inc UCSB-B200-M3',
          lp: 32,
          vms: 7,
          hypervisor: 'VMware ESXi, 6.5.0, 8294253'
        },
        {
          value: false,
          name: 'prod-esx-lon5-02-04-01.vm.ironport.com',
          cpu: 'Intel(R) Xeon(R) CPU E5-2660',
          model: 'Cisco Systems Inc UCSB-B200-M3',
          lp: 32,
          vms: 8,
          hypervisor: 'VMware ESXi, 6.5.0, 8294253'
        },
        {
          value: false,
          name: 'prod-esx-lon5-09-01-24.vm.ironport.com',
          cpu: 'Intel(R) Xeon(R) CPU E5-2660',
          model: 'Cisco Systems Inc UCSB-B200-M3',
          lp: 32,
          vms: 6,
          hypervisor: 'VMware ESXi, 6.5.0, 8294253'
        },
        {
          value: false,
          name: 'prod-esx-lon5-02-util01.vm.ironport.com',
          cpu: 'Intel(R) Xeon(R) CPU E5-2665 0 @ 2.40GHz',
          model: 'Cisco Systems Inc UCSC-C240-M3S',
          lp: 16,
          vms: 2,
          hypervisor: 'VMware ESXi, 6.5.0, 9298722'
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
