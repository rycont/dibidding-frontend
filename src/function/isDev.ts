export const isDev = import.meta.env.VITE_USE_MOCK_SERVER === undefined ?
    import.meta.env.DEV
    : +import.meta.env.VITE_USE_MOCK_SERVER
