<template>
  <div>
    <h1 v-for="song in songs">{{ song.title }}</h1>
  </div>
</template>

<script>
import SongService from "@/services/SongService";
export default {
  data () {
    return {
        songs : []
    }
  },
  async mounted() {
      const response = await SongService.getSongs()
      this.songs = response.data
  }
}
</script>