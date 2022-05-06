import { useEffect, useRef, useState } from "react"

function useClock() {
    const [time, setTime] = useState("")
    const timerRef = useRef(-1)

    /* 组件挂载时初始化定时器 */
    useEffect(
        () => {
            timerRef.current = setInterval(() => {
                setTime(new Date().toLocaleTimeString())
            }, 1000);
        },
        []
    )

    /* 组件卸载时移除定时器 */
    useEffect(
        () => {
            return () => {
                clearInterval(timerRef.current)
                console.log("定时器已移除");
            }
        },
        []
    )

    return time
}

export default useClock