const plugin = require('tailwindcss/plugin')
const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')

const { spacing, borderWidth, borderRadius } = defaultTheme

const skePlugin = plugin.withOptions((options = {
    inputClass: undefined,
    buttonClass: undefined,
}) => ({addComponents, theme}) => {
    const inputClass = options.inputClass ?? '.input'
    const buttonClass = options.buttonClass ?? '.button'

    const boxStyle = {
        paddingLeft: spacing[4],
        paddingRight: spacing[4],
        paddingTop: spacing[2],
        paddingBottom: spacing[2],
    }

    const borderStyle = {
        borderWidth: borderWidth[2],
        borderRadius: borderRadius.md,

        '&-l': {
            borderRightWidth: spacing[0],
            borderRadius: borderRadius.none,
            borderTopLeftRadius: borderRadius.md,
            borderBottomLeftRadius: borderRadius.md,
        },

        '&-r': {
            borderLeftWidth: spacing[0],
            borderRadius: borderRadius.none,
            borderTopRightRadius: borderRadius.md,
            borderBottomRightRadius: borderRadius.md,
        },

        '&-t': {
            borderBottomWidth: spacing[0],
            borderRadius: borderRadius.none,
            borderTopLeftRadius: borderRadius.md,
            borderTopRightRadius: borderRadius.md,
        },

        '&-b': {
            borderRightWidth: spacing[0],
            borderRadius: borderRadius.none,
            borderBottomLeftRadius: borderRadius.md,
            borderBottomRightRadius: borderRadius.md,
        }
    }

    const inputStyle = {
        ...boxStyle,
        ...borderStyle,
    }

    const buttonStyle = {
        ...boxStyle,
        ...borderStyle,
    }

    const components = {
        [inputClass]: inputStyle,
        [buttonClass]: buttonStyle,
    };

    addComponents(components)
})

module.exports = skePlugin
