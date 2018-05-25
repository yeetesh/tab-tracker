import Api from '@/services/Api'

export default {
    getSongs() {
        return Api().get('/songs')
    },
    create (song) {
        return Api().post('/create', song)
    }
}