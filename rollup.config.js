export default {
    input: 'src/index.js',
    external: [
        'vuescroll',
        '@carbon/icons-vue',
    ],
    output: {
        format: 'cjs',
        file: 'lib/index.js',
        external: {
            '@carbon/icons-vue': "@carbon/icons-vue",
            'vuescroll': 'vuescroll'
        }
    }
};