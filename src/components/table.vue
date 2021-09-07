<template>
  <div>
    <v-card>
        <v-card-title>
        Rank
        <v-spacer></v-spacer>
        <v-text-field
            v-model="search"
            append-icon="mdi-magnify"
            label="Search"
            single-line
            hide-details
        ></v-text-field>
        </v-card-title>
        <v-data-table
        :headers="headers"
        :items="peoples"
        :search="search"
        ></v-data-table>
    </v-card>
  </div>
</template>

<script>
export default {
    data: () => ({
        headers: [
            {
                text: 'Name',
                align: 'start',
                sortable: false,
                value: 'name',
            },
            {
                text: 'Kill',
                sortable: true,
                value: 'kill',
            },
            {
                text: 'Group',
                sortable: true,
                value: 'group'
            },
            {
                text: 'Time',
                sortable: true,
                value: 'time'
            }
        ],
        peoples: [
            {
                name: 'BGG',
                kill: 5,
                group: 1,
                time: '2021/1/23 10:20:21'
            },
            {
                name: 'HII',
                kill: 1,
                group: 2,
                time: '2021/1/30 10:20:21'
            },
            {
                name: 'HELLO',
                kill: 4,
                group: 5,
                time: '2021/1/23 10:10:21'
            }
        ],
        search: '',
    }),
}
</script>

<style>

</style>