import { useState, useEffect } from 'react'

export const useDebounce = (value, deLay) => {
    const [debounceValue, setDebounceValue] = useState(value)

    useEffect (() => {
        const handler = setTimeout (() => {
            setDebounceValue(value)

        }, deLay)
        return () => { clearTimeout(handler) }
    }, [value])

    return debounceValue
}