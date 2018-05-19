<template>
  <v-layout>
    <v-flex sm4 v-for="song in songs" :key="song.id" class="mx-2">
      <v-card>
        <v-card-media  src="https://geekandsundry.com/wp-content/uploads/2016/08/ironman-cover.jpg" height="200px">
        </v-card-media>
        <v-card-title primary-title>
          <div>
            <h3 class="headline mb-0">{{ song.title }}</h3>
            <div>Located two hours south of Sydney in the <br>Southern Highlands of New South Wales, ...</div>
          </div>
        </v-card-title>
        <v-card-actions>
          <v-btn flat color="orange" @click="route(song.title)">View</v-btn>
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import SongService from "@/services/SongService";
export default {
  data () {
    return {
        songs : []
    }
  },
  methods : {
    route(id) {
      this.$router.push('/song/' + id)
    }
  },
  async mounted() {
      const response = await SongService.getSongs()
      this.songs = response.data
  }
}
</script>