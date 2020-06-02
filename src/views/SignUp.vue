<template>
    <v-container fill-height style="max-width:450px;">
        <v-layout align-center row wrap>
            <v-flex xs12>
                <v-alert
                    :value="isSignInError"
                    type="error"
                >
                    아이디와 비밀번호를 확인해주세요.
                </v-alert>
                <v-alert
                    :value="isSignIn"
                    type="success"
                >
                    로그인이 완료되었습니다.
                </v-alert>
                <v-card>
                    <v-toolbar flat>
                        <v-toolbar-title>Sign Up</v-toolbar-title> 
                    </v-toolbar>
                    <div class="pa-3">
                    <v-text-field
                        v-model="email"
                        label="Email"
                    >
                    </v-text-field>
                    <v-text-field
                        v-model="password"
                        label="Password"
                        type="password"
                    >
                    </v-text-field>
                    <v-text-field
                        v-model="name"
                        label="Name"
                        type="text"
                    >
                    </v-text-field>    
                    <v-btn 
                        large
                        block 
                        depressed 
                        color="primary"
                        @click="signUp({
                            email: email,
                            password: password,
                            name: name
                        })"
                        >Sign Up</v-btn>
                    </div>
                </v-card>
            </v-flex>
        </v-layout> 
    </v-container>
</template>

<script>
import { mapState, mapActions } from 'vuex'

export default {
    data() {
        return {
            email: null,
            password: null,
            name: null
        }
    },
    computed: {
        ...mapState(['isSignIn', 'isSignInError'])
    },
    methods: {
        ...mapActions(['signIn']),

        signUp(payload) {
            this.$http.post('/api/v1/signUp', {
                email: payload.email,
                password: payload.password,
                username: payload.name,
            }).then((response) => {
                this.signIn({
                    email: payload.email,
                    password: payload.password
                });
            }).catch((error) => {
                console.log(error)
            })
        }
    }
}
</script>