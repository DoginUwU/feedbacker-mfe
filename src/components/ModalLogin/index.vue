<template>
    <div class="flex justify-between">
        <h1 class="text-3xl font-black text-gray-800">
            Sign In
        </h1>

        <button
            @click="handleClose"
            class="text-4xl text-gray-600 focus:outline-none"
        >
            &times;
        </button>
    </div>

    <div class="mt-16">
        <form @submit.prevent="handleSubmit">
            <label class="block">
                <span class="text-lg font-medium text-gray-800">Email</span>
                <input
                    v-model="state.email.value"
                    type="email"
                    class="block w-full px-4 py-3 mt-1 text-lg bg-gray-100 border-2 border-transparent rounded focus:outline-none"
                    :class="{
                        'border-brand-danger': !!state.email.error
                    }"
                    placeholder="example@gmail.com"
                >
                <span
                    class="block font-medium text-brand-danger"
                >
                    {{ state.email.error }}
                </span>
            </label>
             <label class="block mt-10">
                <span class="text-lg font-medium text-gray-800">Password</span>
                <input
                    v-model="state.password.value"
                    type="password"
                    class="block w-full px-4 py-3 mt-1 text-lg bg-gray-100 border-2 border-transparent rounded focus:outline-none"
                    :class="{
                        'border-brand-danger': !!state.password.error
                    }"
                    placeholder="********"
                >
                <span
                    class="block font-medium text-brand-danger"
                >
                    {{ state.password.error }}
                </span>
            </label>

            <button
                type="submit"
                :disabled="state.isLoading"
                :class="{
                    'opacity-50': state.isLoading,
                }"
                class="px-8 py-3 mt-10 text-1xl font-bold text-white rounded-full bg-brand-main focus:outline-none transition duration-150"
            >
                <icon name="Loading" v-if="state.isLoading" class="animate-spin" />
                <span v-else>Sign In</span>
            </button>
        </form>
    </div>
</template>

<script>
import { reactive } from 'vue'
import { useField } from 'vee-validate'
import { useRouter } from 'vue-router'
import { useToast } from 'vue-toastification'
import useModal from '../../hooks/useModal'
import services from '../../services'
import { validateEmptyAndLength4, validateEmptyAndEmail } from '../../utils/validators'
import Icon from '../Icon'

export default {
  components: {
    Icon
  },
  setup () {
    const modal = useModal()
    const router = useRouter()
    const toast = useToast()

    const {
      value: emailValue,
      errorMessage: emailError
    } = useField('email', validateEmptyAndEmail)
    const {
      value: passwordValue,
      errorMessage: passwordError
    } = useField('password', validateEmptyAndLength4)

    const state = reactive({
      hasErrors: false,
      isLoading: false,
      email: {
        value: emailValue,
        error: emailError
      },
      password: {
        value: passwordValue,
        error: passwordError
      }
    })

    const handleSubmit = async () => {
      try {
        toast.clear()
        state.isLoading = true
        const { data, errors } = await services.auth.login({
          email: state.email.value,
          password: state.password.value
        })

        state.isLoading = false

        if (!errors) {
          window.localStorage.setItem('token', data.token)
          router.push({ name: 'Feedbacks' })
          modal.close()
          return
        }

        toast.error(errors.message)
      } catch (error) {
        state.isLoading = false
        state.hasErrors = true
        toast.error('Sorry, unauthorized account.')
      }
    }

    return {
      state,
      handleClose: modal.close,
      handleSubmit
    }
  }
}
</script>
