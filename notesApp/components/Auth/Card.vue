<template>        
        <div class="p-4 border">
            <h1 class="text-3xl capitalize">{{ authState }}</h1>
            {{ user }}
            <div class="flex flex-col gap-2 w-64">
                <input placeholder="Email" type="text" v-model="input.email">
                <input placeholder="Password" type="password" v-model="input.password">
            </div>
            <button @click="handleSubmit" type="button" class="mt-2 border px-2 py-1.4 bg-blue-600 text-white font-md text-xs leading-tight rounded-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 transition duration-150 ease-in-out"> Login </button>
            <p @click="toggleAuthState" class="text-blue"> {{ authState === "login" ? "Dont havee an account? Create one now" : "Already have an account? Login" }} </p>
        </div>
</template>

<script setup lang="ts">
    const authState = ref < "login" | "signup" > ("login")
    const input = reactive({
        email: "",
        password: ""
    })

    const {signUp, signIn, user} = useAuth()

    const toggleAuthState = () => {
        if(authState.value === "login") {
            authState.value = "signup"
        } else {
            authState.value = "login"
        }
    }

    const handleSubmit = () => {
        if(authState.value === "login") {
            signIn({email: input.email, password: input.password})
        } else {
            signUp({email: input.email, password: input.password})
        }
    }

</script>