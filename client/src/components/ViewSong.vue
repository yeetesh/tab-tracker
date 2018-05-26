<template>
    <div>
        <v-layout class="text-xs-center">
            <v-flex xs12 sm6 class="ma-2">
                <v-card>
                    <v-card-media  :src="image" height="200px"></v-card-media>
                    <v-card-title primary-title>
                    <div>
                        <h3 class="headline mb-0 ">{{ title }}</h3>
                        <div>{{ artist }}<br>{{ album }}<br>{{ genre }}</div>
                    </div>
                    </v-card-title>
                    <v-card-actions></v-card-actions>
                </v-card>
            </v-flex>
            <v-flex xs4 sm6 class="ma-2">
                <v-card>
                    <v-card-media  src="" height=325px><youtube :video-id="youtubeId"/></v-card-media>
                </v-card>
            </v-flex>
        </v-layout>
        <v-layout class="text-xs-center">
            <v-flex xs12 sm6 class="ma-2">
            <v-card>
                <v-card-title primary-title>
                <div>
                    <h3 class="headline mb-0">Tab</h3>
                    <div><pre> {{ tab }}</pre></div>
                </div>
                </v-card-title>
            </v-card>
            </v-flex>
            <v-flex xs12 sm6 class="ma-2">
            <v-card >
                <v-card-title primary-title class="text-xs-center">
                <div>
                    <h3 class="headline mx-auto">Lyrics</h3>
                    <div ><pre>{{ lyrics }}</pre></div>
                </div>
                </v-card-title>
            </v-card>
            </v-flex>
        </v-layout>
    </div>
</template>

<script>
import SongService from "@/services/SongService"
export default {
  data () {
    return {
            title: '',
            artist: '',
            genre : '',
            album : '',
            youtubeId : '',
            image : '',
            tab : '',
            lyrics : '',
        }      
    },
    async mounted () {
        const id = this.$store.state.route.params.id
        try {
            const response = await SongService.getSong(id)
            this.title = response.data.title,
            this.artist = response.data.artist,
            this.genre = response.data.genre,
            this.album = response.data.album,
            this.youtubeId = response.data.youtubeId,
            this.image = response.data.image,
            this.tab = response.data.tab,
            this.lyrics = response.data.lyrics
            console.log(response.data)
        }
        catch(e) {
            console.log(e)
        }
        
    }
}
</script>