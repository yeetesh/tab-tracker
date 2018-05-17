<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-card-title primary-title>
          <div >
            <h3 class="headline mb-0">Login</h3>
          </div>
        </v-card-title>
          <Form :label-width="80" class="mr-5">
              <FormItem label="Email">
                <Input type="text" v-model="email" />
              </FormItem>
              <FormItem label="Password">
                <Input type="password" v-model="password" />
              </FormItem>
              <FormItem>
                <Button type="primary" @click="login">Submit</Button>
                <Button type="ghost" style="margin-left: 8px" @click="reset">Reset</Button>
              </FormItem>
            </Form>
        <v-card-actions>
          
        </v-card-actions>
      </v-card>
    </v-flex>
  </v-layout>
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    async login () {
      const response = await AuthenticationService.login({
        email: this.email,
        password: this.password
      })
      this.$store.dispatch('setToken',response.data.token)
      this.$store.dispatch('setUser',response.data.user)
      console.log(response.data)
    },
    reset () {
    this.email = '',
    this.password = ''
  }
  }
 
}
</script>
