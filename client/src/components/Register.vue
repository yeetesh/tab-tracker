<template>
  <v-layout>
    <v-flex xs12 sm6 offset-sm3>
      <v-card>
        <v-card-title primary-title>
          <div >
            <h3 class="headline mb-0">Register</h3>
          </div>
        </v-card-title>
          <Form :label-width="80">
              <FormItem label="Email">
                <Input type="text" v-model="email" />
              </FormItem>
              <FormItem label="Confirm">
                <Input type="password" v-model="password" />
              </FormItem>
              <FormItem>
                <Button type="primary" @click="register">Submit</Button>
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
    async register () {
      const response = await AuthenticationService.register({
        email: this.email,
        password: this.password
      })
      console.log(response.data)
    }
  }
}
</script>
