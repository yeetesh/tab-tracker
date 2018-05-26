import Api from '@/services/Api'

export default {
    getSongs() {
        return Api().get('/songs')
    },
    getSong(id) {
        return Api().get('/song/' + id)
    },
    create (song) {
        return Api().post('/create', song)
    }
}