export const routes = {
    AUTH: {
        SIGN_IN: '/',
        SIGN_UP: '/sign-up',
        CHECK_EMAIL: '/check_email',
        FORGOT_PASSWORD: '/forgot-password',
        CREATE_NEW_PASSWORD: '/create_new_password/:token',
    },
    NOT_FOUND: '/*',
} as const
