import React from "react"
import theme from "../../../components/theme"
import styles from "../css/svg.module.css"

function Bsport({ color, colorSecondary, width, isVisible }) {
  return (
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox={`0 0 330 450`}
        height="100%"
      >
        <defs>
          <filter
            id="dropshadow"
            x="-40%"
            y="-40%"
            width="180%"
            height="180%"
            filterUnits="userSpaceOnUse"
          >
            <feGaussianBlur in="SourceAlpha" stdDeviation="3" />
            <feOffset dx="1" dy="1" result="offsetblur" />
            <feMerge>
              <feMergeNode />
              <feMergeNode in="SourceGraphic" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <g transform="translate(115,0)">
          <path
            className={[styles.base, isVisible ? styles.animated : ""].join(
              " "
            )}
            fill="none"
            stroke={color}
            strokeWidth="10px"
            d={`M 0 0 L 0 150 Q 100 150 100 250
           L 200 250`}
          ></path>{" "}
          <path
            className={[styles.base, isVisible ? styles.animated : ""].join(
              " "
            )}
            fill="none"
            stroke={colorSecondary}
            strokeWidth="10px"
            d={`M 0 330 L 0 450`}
          ></path>
          <circle fill={color} cx="200" cy={`250`} r="15" />
        </g>
        <g transform="translate(0,0)">
          <circle
            fill={theme.grey}
            stroke="#FFFFFF"
            strokeWidth="10px"
            cx="115"
            cy={`250 `}
            r="80"
            style={{ filter: `url(#dropshadow)` }}
          />
        </g>
        <g transform={`scale(0.17,0.17) translate(420,${210 / 0.17})`}>
          <path
            d="m211 240h90v30h-90zm0 0"
            data-original="#000000"
            class="active-path"
            data-old_color="#000000"
            fill={color}
          />
          <path
            d="m415.378906 270h-84.378906v15c0 8.289062-6.710938 15-15 15h-120c-8.289062 0-15-6.710938-15-15v-15h-84.378906c-19.394532 0-36.546875-12.363281-42.6875-30.761719l-53.933594-161.828125v327.589844c0 24.8125 20.1875 45 45 45h422c24.8125 0 45-20.1875 45-45v-327.578125l-53.9375 161.816406c-6.136719 18.398438-23.289062 30.761719-42.683594 30.761719zm0 0"
            data-original="#000000"
            class="active-path"
            data-old_color="#000000"
            fill={color}
          />
          <path
            d="m316 0h-120c-24.8125 0-45 20.1875-45 45v15h-125.191406l56.574218 169.746094c2.050782 6.136718 7.777344 10.253906 14.238282 10.253906h84.378906v-15c0-8.289062 6.710938-15 15-15h120c8.289062 0 15 6.710938 15 15v15h84.378906c6.460938 0 12.1875-4.117188 14.238282-10.253906l56.578124-169.746094h-125.195312v-15c0-24.8125-20.1875-45-45-45zm-135 60v-15c0-8.277344 6.722656-15 15-15h120c8.277344 0 15 6.722656 15 15v15zm0 0"
            data-original="#000000"
            class="active-path"
            data-old_color="#000000"
            fill={color}
          />
        </g>{" "}
      </svg>
    </div>
  )
}

export default Bsport
