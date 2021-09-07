<template>
    <div>
        <v-toolbar dark color="#031f5b" class="toolbar">
            <v-app-bar-nav-icon @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title>
                <h1>
                    :-)
                </h1>
            </v-toolbar-title>
            <v-spacer />
        </v-toolbar>
        <v-navigation-drawer
            v-model="drawer"
            absolute
            temporary
            dark
            color="#031f5b"
        >
            <v-list-item>
                <v-list-item-content>
                    <h2>
                        <v-list-item-title>toolbar</v-list-item-title>
                    </h2>
                </v-list-item-content>
            </v-list-item>

            <v-divider></v-divider>

            <v-list dense>
                <v-list-item
                    v-for="item in items"
                    :key="item.title"
                    link
                    @click="changePath(item.link)"
                >
                <v-list-item-icon>
                    <v-icon>{{ item.icon }}</v-icon>
                </v-list-item-icon>

                <v-list-item-content>
                    <h3>
                        <v-list-item-title>{{ item.title }}</v-list-item-title>
                    </h3>
                </v-list-item-content>
                </v-list-item>
            </v-list>
        </v-navigation-drawer>
    </div>
</template>

<script>
export default {
    data () {
      return {
        drawer: false,
        items: [
            { 
                title: 'Login', 
                icon: 'mdi-view-dashboard', 
                link: '/' 
            },
            { 
                title: 'About', 
                icon: 'mdi-barley', 
                link: '/about' 
            },
            {
                title: 'Rank', 
                icon: 'mdi-view-dashboard', 
                link: '/rank' 
            },
            { 
                title: 'Submit',   
                icon: 'mdi-xml', 
                link: '/submit' 
            },
            { 
                title: 'Gallery',  
                icon: 'mdi-clover', 
                link: '/gallery' 
            },
        ],
      }
    },
    methods: {
        changePath(goToPath) {
            this.$router.push(goToPath).catch((error) => {
                if (error.name != "NavigationDuplicated") {
                    throw error;
                }
            });
        },
        login() {
            this.changePath("/login")
        },
    },
}
</script>

<style>
.tab {
    margin-left: 2vw;
}
.toolbar {
    width: 100vw;
}
</style>