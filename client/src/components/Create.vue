<template>
    <v-layout>
        <v-flex xs12 sm4 class="mx-2">
            <v-card>
                <v-card-title primary-title>
                <div >
                    <h3 class="headline mb-0">Song metadata</h3>
                </div>
                </v-card-title>
                <Form :label-width="80" class="mr-5">
                    <FormItem label="Title">
                        <Input type="text" v-model="title" />
                    </FormItem>
                    <FormItem label="Artist">
                        <Input type="text" v-model="artist" />
                    </FormItem>
                    <FormItem label="Genre">
                        <Input type="text" v-model="genre" />
                    </FormItem>
                    <FormItem label="Album">
                        <Input type="text" v-model="album" />
                    </FormItem>
                    <FormItem label="Image">
                        <Input type="text" v-model="image" />
                    </FormItem>
                    <FormItem label="YoutubeID" style="padding-bottom:30px">
                        <Input type="text" v-model="youtubeId" />
                    </FormItem>
                </Form>
            </v-card>
        </v-flex>
        <v-flex xs12 sm8 class="mx-2">
            <v-card>
                <v-card-title primary-title>
                <div >
                    <h3 class="headline mb-0">Song structure</h3>
                </div>
                </v-card-title>
                <Form :label-width="80" class="mr-5">
                    <FormItem label="Tab">
                        <Input type="textarea" v-model="tab" />
                    </FormItem>
                    <FormItem label="Lyrics">
                        <Input type="textarea" v-model="lyrics" />
                    </FormItem>
                    <FormItem style="padding-bottom:10px">
                        <Button type="primary" @click="create">Create</Button>
                    </FormItem>
                </Form>
            </v-card>
        </v-flex>
    </v-layout>
</template>

<script>
import SongService from '@/services/SongService'
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
      lyrics : ''
    }
  },
  methods: {
    async create () {
      const response = await SongService.create({
        title: this.title,
        artist: this.artist,
        genre : this.genre,
        album : this.album,
        youtubeId : this.youtubeId,
        image : this.image,
        tab : this.tab,
        lyrics : this.lyrics,
        })
      console.log(response.data)
    },

  }
}
</script>
