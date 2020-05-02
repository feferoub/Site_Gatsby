import React from "react"
import theme from "../../../components/theme"
import styles from "../css/svg.module.css"
import StudySVG from "./study_svg"
import BsportSVG from "./BsportSvg"
import FreelanceSVG from "./FreelanceSvg"

function Graph({ width, isVisible, heights }) {
  const primary = theme["primary-color"]
  const secondary = theme["secondary-color-svg"]

  function renderBsport() {
    const visible = isVisible.includes("bsport")
    return (
      <g>
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
        <g transform="translate(0,0)">
          <circle
            fill={theme.grey}
            stroke="#FFFFFF"
            strokeWidth="10px"
            cx="115"
            cy={`${heights.bsport + 250}`}
            r="80"
            style={{ filter: `url(#dropshadow)` }}
          />
        </g>
        <g
          transform={`translate(72, ${205 + heights.bsport}) scale(0.17,0.17) `}
        >
          <BsportSVG color={secondary} />
        </g>
        <g transform="translate(115,0)">
          <path
            className={[styles.base, visible ? styles.animated : ""].join(" ")}
            fill="none"
            stroke={secondary}
            strokeWidth="10px"
            d={`M 0 0 L 0 ${150 + heights.bsport} Q 95 ${
              160 + heights.bsport
            } 100 ${250 + heights.bsport}
             L 200 ${250 + heights.bsport}`}
          ></path>
          <circle
            fill={secondary}
            cx="200"
            cy={`${heights.bsport + 250}`}
            r="15"
          />
        </g>
      </g>
    )
  }

  function renderFreelance() {
    const visible = isVisible.includes("freelance")

    return (
      <g>
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
        <g transform="translate(0,0)">
          <circle
            fill={theme.grey}
            stroke="#FFFFFF"
            strokeWidth="10px"
            cx="115"
            cy={`${heights.freelance + 250}`}
            r="80"
            style={{ filter: `url(#dropshadow)` }}
          />
        </g>
        <g
          transform={`translate(65,${195 + heights.freelance}) scale(0.2,0.2) `}
        >
          <FreelanceSVG color={primary} />
        </g>
        <g transform="translate(115,0)">
          <path
            className={[styles.base, visible ? styles.animated : ""].join(" ")}
            fill="none"
            stroke={primary}
            strokeWidth="10px"
            d={`M 0 0 L 0 ${150 + heights.freelance} Q 95 ${
              160 + heights.freelance
            } 100 ${250 + heights.freelance}
             L 200 ${250 + heights.freelance}`}
          ></path>
          <circle
            fill={primary}
            cx="200"
            cy={`${heights.freelance + 250}`}
            r="15"
          />
        </g>
      </g>
    )
  }

  function renderStudy() {
    const visible = isVisible.includes("study")

    return (
      <g>
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
        <g transform="translate(0,0)">
          <circle
            fill={theme.grey}
            stroke="#FFFFFF"
            strokeWidth="10px"
            cx="115"
            cy={`${heights.study + 250}`}
            r="80"
            style={{ filter: `url(#dropshadow)` }}
          />
        </g>
        <g
          transform={`translate(65 ,${200 + heights.study}) scale(0.20,0.20) `}
        >
          <StudySVG
            color={theme["primary-color"]}
            colorSecondary={theme["secondary-color-svg"]}
          />
        </g>
        <g transform="translate(115,0)">
          <path
            className={[styles.base, visible ? styles.animated : ""].join(" ")}
            fill="none"
            stroke={theme["primary-color"]}
            strokeWidth="10px"
            d={`M 0 0 L 0 ${150 + heights.study} Q 95 ${
              160 + heights.study
            } 100 ${250 + heights.study}
                    L 200 ${250 + heights.study}`}
          ></path>
          <circle
            fill={theme["primary-color"]}
            cx="200"
            cy={`${heights.study + 250}`}
            r="15"
          />
        </g>
      </g>
    )
  }

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox={`0 0 330 ${
        550 * 2 + heights.study + heights.bsport + heights.freelance
      }`}
      width={width}
    >
      <g transform={`translate(0,-120)`}>
        {renderStudy()}
        <g transform={`translate(0,${337 + heights.study})`}>
          {renderBsport()}
          <g transform={`translate(0,${337 + heights.bsport})`}>
            {renderFreelance()}
          </g>
        </g>
      </g>
    </svg>
  )
}

export default Graph
