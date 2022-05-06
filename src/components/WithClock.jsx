import React, { useState, useEffect, useRef } from 'react'

export default function WithClock(Com) {
    function NewCom (props) {
        const [time, setTime] = useState("")
        const timerRef = useRef(-1)

        /* 组件挂载时初始化定时器 */
        useEffect(
            () => {
                timerRef.current = setInterval(() => {
                    setTime(new Date().toLocaleTimeString())
                    console.log("set new time");
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

        return (<Com {...props} time={time} />)
    }

    return NewCom
}
