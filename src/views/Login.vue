<template>
    <v-container fill-height style="max-width:450px;">
        <v-layout align-center row wrap>
            <v-flex xs12>
                <v-alert
                    :value="isLoginError"
                    type="error"
                >
                    아이디와 비밀번호를 확인해주세요.
                </v-alert>
                <v-alert
                    :value="isLogin"
                    type="success"
                >
                    로그인이 완료되었습니다.
                </v-alert>
                <v-card>
                    <v-toolbar flat>
                        <v-toolbar-title>Login</v-toolbar-title> 
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
                    <v-btn 
                        large
                        block 
                        depressed 
                        color="primary"
                        @click="login({
                            email: email,
                            password: password
                        })"
                        >Login</v-btn>
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
            allUsers: [
                {id: 1, name: 'hoza', email: 'hoza@gmail.com', password:'1234'},
                {id: 2, name: 'logo', email: 'logo@gmail.com', password:'1234'}
            ]
        }
    },
    computed: {
        ...mapState(['isLogin', 'isLoginError'])
    },
    methods: {
        ...mapActions(['login'])
    }
}
</script>