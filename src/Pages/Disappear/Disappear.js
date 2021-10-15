import React, {useState} from 'react'
import "./Disappear.css"
import {animated, useTransition} from "react-spring"

export default function Disappear() {

    const [vue, setVue] = useState(false);

    const transition = useTransition(vue, {
        from: {opacity: 0, x: -800, y: -150},
        enter: item => async (next) => {
            await next({ opacity: 1, x: 110, y: item.y, delay: item.delay});
            await next({ y: -50});
        },
        leave:  item => (next) => (
            next({ opacity: 0, x: 500, y: item.y, delay: item.delay})
        ),
    });

    return (
        <div classname="container-disappear">
            <button
                onClick={() => {
                    setVue(v => v.length ? [] : [
                        {x: -100, delay: 200},
                        {x: -50, delay: 500},
                        {x: 0, delay: 1100},
                        {x: -100, delay: 1300},
                    ]);
                }}
            >
                {vue.length ? "non merci !" : "cliquez !"}
            </button>
            <div className="transition-disappear">
                {transition((style, item) => 
                item ? <animated.div style={style} className="item"/>
                : ""
                )}
            </div>
        </div>
    )
}
