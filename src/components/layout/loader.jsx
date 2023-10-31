import { motion } from "framer-motion"

const svgVariants = {
  hidden: { rotate: -180 },
  visible: {
    rotate: 0,
    transition: { duration: 1, staggerChildren: 0.2, delayChildren: 0.2 },
  },
  exit: {
    opacity: 0,
  },
}

const pathVariants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      staggerChildren: 0.5,
      delayChildren: 0.4,
      duration: 0.5,
      type: "linear",
    },
  },
}
export default function Loader() {
  return (
    <div className="loader">
      <motion.svg
        viewBox="0 0 450 163"
        fill="none"
        variants={svgVariants}
        initial="hidden"
        animate="visible"
        xmlns="http://www.w3.org/2000/svg"
      >
        <motion.g variants={pathVariants} clipPath="url(#clip0_723_42)">
          <motion.path
            variants={pathVariants}
            d="M90.8 117.4H68.4V157H40.8V21H90.8C123.067 21 139.2 36.7333 139.2 68.2C139.2 84.0667 135.067 96.2667 126.8 104.8C118.667 113.2 106.667 117.4 90.8 117.4ZM68.4 93.8H90.6C104.333 93.8 111.2 85.2667 111.2 68.2C111.2 59.8 109.533 53.8 106.2 50.2C102.867 46.4667 97.6667 44.6 90.6 44.6H68.4V93.8ZM123.463 157L154.063 21H206.463L237.063 157H209.463L204.063 132.4H156.463L151.063 157H123.463ZM175.463 43.8L161.663 108.4H198.863L185.063 43.8H175.463ZM260.598 111.6C260.598 127.467 268.665 135.4 284.798 135.4C300.932 135.4 308.998 127.467 308.998 111.6V21H336.598V111C336.598 127.667 332.265 139.933 323.598 147.8C315.065 155.533 302.132 159.4 284.798 159.4C267.465 159.4 254.465 155.533 245.798 147.8C237.265 139.933 232.998 127.667 232.998 111V21H260.598V111.6ZM422.458 157H345.058V21H372.658V132.6H422.458V157Z"
            fill="white"
          />
          <motion.rect
            variants={pathVariants}
            x={31}
            y={53}
            width={390}
            height={58}
            fill="var(--dark-color)"
          />
          <motion.path
            variants={pathVariants}
            d="M121.6 83.35L108.55 88.3L121.6 93.7V100.5L101.3 91.2V85.7L121.6 76.55V83.35ZM147.565 101H140.665V67H147.565V81.95L152.165 81.45L157.765 67H165.615L158.215 84.05L165.815 101H157.865L152.165 87.45L147.565 87.95V101ZM189.854 101V86.9H177.204V101H170.304V67H177.204V80.9H189.854V67H196.754V101H189.854ZM211.191 93C212.191 94.7333 214.041 95.6 216.741 95.6C219.441 95.6 221.275 94.7333 222.241 93C223.241 91.2333 223.741 88.3 223.741 84.2C223.741 80.0667 223.241 77.0667 222.241 75.2C221.241 73.3333 219.408 72.4 216.741 72.4C214.075 72.4 212.241 73.3333 211.241 75.2C210.241 77.0667 209.741 80.0667 209.741 84.2C209.741 88.3 210.225 91.2333 211.191 93ZM227.641 97.4C225.541 100.2 221.908 101.6 216.741 101.6C211.575 101.6 207.925 100.2 205.791 97.4C203.691 94.5667 202.641 90.15 202.641 84.15C202.641 78.15 203.691 73.7 205.791 70.8C207.925 67.8667 211.575 66.4 216.741 66.4C221.908 66.4 225.541 67.8667 227.641 70.8C229.775 73.7 230.841 78.15 230.841 84.15C230.841 90.15 229.775 94.5667 227.641 97.4ZM235.109 73V67H257.609V73L243.409 94.1V95H257.609V101H235.109V95.05L249.309 73.9V73H235.109ZM260.52 101L268.17 67H281.27L288.92 101H282.02L280.67 94.85H268.77L267.42 101H260.52ZM273.52 72.7L270.07 88.85H279.37L275.92 72.7H273.52ZM302.284 100.6L316.684 65.1L322.584 67.2L308.184 102.7L302.284 100.6ZM341.475 88.3L328.425 83.35V76.55L348.725 85.7V91.2L328.425 100.5V93.7L341.475 88.3Z"
            fill="url(#my-gradient)"
          />
        </motion.g>
        <defs>
          <clipPath id="clip0_723_42">
            <motion.rect
              variants={pathVariants}
              width={450}
              height={163}
              fill="white"
            />
          </clipPath>
        </defs>
      </motion.svg>
      {/* <motion.svg
        viewBox="0 0 296.5021735973278 36"
        variants={svgVariants}
        initial="hidden"
        animate="visible"
      >
        <defs id="SvgjsDefs6004"></defs>
        <motion.g
          variants={pathVariants}
          id="SvgjsG6005"
          featurekey="nameLeftFeature-0"
          transform="matrix(2.284263926216591,0,0,2.284263926216591,2.978341185211416e-7,-9.685278524331824)"
          fill="#ffffff"
        >
          <motion.path
            variants={pathVariants}
            d="M1.38 4.24 l-1.38 0 l0 0.64 l0.9 0 l0.44 0 c1.64 0 2.8734 0.47334 3.7 1.42 s1.24 2.18 1.24 3.7 l0 0.22 c0 1.4933 -0.41334 2.7134 -1.24 3.66 s-2.06 1.42 -3.7 1.42 l-0.64 0 l0 0 l-0.44 0 l-0.22 0 l-0.04 0 l0 4.7 l0.7 0 l0 -4.04 l0.68 0 c1.84 0 3.2366 -0.54334 4.19 -1.63 s1.43 -2.45 1.43 -4.09 l0 -0.26 c0 -1.64 -0.48334 -3.0066 -1.45 -4.1 s-2.3566 -1.64 -4.17 -1.64 z M14.94 6.140000000000001 c0 0.08 0.23666 0.84334 0.71 2.29 s0.99 3.03 1.55 4.75 s1.3133 3.9934 2.26 6.82 l0.86 0 l-5.3 -15.76 l-0.16 0 l-5.26 15.76 l0.82 0 z M14.58 15.52 l-0.72 0 l1.2 4.48 l0.72 0 z M31.340000000000003 4.26 l0 10.64 c0 1.4 -0.37 2.48 -1.11 3.24 s-1.6233 1.1733 -2.65 1.24 l0 0.25 l0 0.07 l0 0.3 c1.28 -0.08 2.3066 -0.55334 3.08 -1.42 s1.16 -2.0934 1.16 -3.68 l0 -10.64 l-0.48 0 z M26.840000000000003 19.39998 c-1.04 -0.08 -1.9067 -0.5 -2.6 -1.26 s-1.04 -1.84 -1.04 -3.24 l0 -10.64 l-0.6 0 l0 10.64 c0 1.6 0.38334 2.83 1.15 3.69 s1.7967 1.33 3.09 1.41 l0 -0.29 l0 -0.31 z M35.08 16.06 l0 -11.82 l-0.66 0 l0 11.82 l0.66 0 z M40.46 20 l0 -0.68 l-5.38 0 l0 -1.96 l-0.66 0 l0 2.64 l6.04 0 z"
          ></motion.path>
        </motion.g>
        <g
          id="SvgjsG6006"
          featurekey="inlineSymbolFeature-0"
          transform="matrix(0.34838708638130006,0,0,0.34838708638130006,112.03483817704162,0)"
          fill="#ffff00"
        >
          <motion.path
            variants={pathVariants}
            xmlns="http://www.w3.org/2000/svg"
            d="M35.8,62.5L35.8,62.5L35.8,62.5l-9.7-9.7V39.6c4.2-0.7,7.3-4.4,7.3-8.7c0-4.9-4-8.9-8.9-8.9c-4.9,0-8.9,4-8.9,8.9    c0,4.4,3.2,8,7.3,8.7v14.5h0l9.7,9.7v38.5h3.1V62.5L35.8,62.5L35.8,62.5z M18.7,30.9c0-3.2,2.6-5.8,5.8-5.8c3.2,0,5.8,2.6,5.8,5.8    c0,3.2-2.6,5.8-5.8,5.8C21.3,36.7,18.7,34.1,18.7,30.9z"
          ></motion.path>
          <motion.path
            variants={pathVariants}
            xmlns="http://www.w3.org/2000/svg"
            d="M20.1,85.5L20.1,85.5L20.1,85.5l-9.7-9.7V62.6c4.2-0.7,7.3-4.4,7.3-8.7c0-4.9-4-8.9-8.9-8.9c-4.9,0-8.9,4-8.9,8.9    c0,4.4,3.2,8,7.3,8.7v14.5h0l9.7,9.7v15.5h3.1V85.5L20.1,85.5L20.1,85.5z M3.1,53.8c0-3.2,2.6-5.8,5.8-5.8c3.2,0,5.8,2.6,5.8,5.8    c0,3.2-2.6,5.8-5.8,5.8C5.7,59.6,3.1,57,3.1,53.8z"
          ></motion.path>
          <motion.path
            variants={pathVariants}
            xmlns="http://www.w3.org/2000/svg"
            d="M69,79.7c0-4.9-4-8.9-8.9-8.9c-4.9,0-8.9,4-8.9,8.9c0,4.4,3.2,8,7.3,8.7v13.9h3.1V88.4C65.8,87.7,69,84.1,69,79.7z     M60.1,85.5c-3.2,0-5.8-2.6-5.8-5.8c0-3.2,2.6-5.8,5.8-5.8c3.2,0,5.8,2.6,5.8,5.8C65.9,82.9,63.3,85.5,60.1,85.5z"
          ></motion.path>
          <motion.path
            variants={pathVariants}
            xmlns="http://www.w3.org/2000/svg"
            d="M56,46.6c0-5-4.1-9-9.2-8.9c-4.7,0.1-8.6,4.1-8.6,8.9c0,4.4,3.2,8,7.3,8.7v47h3.1v-47C52.8,54.6,56,50.9,56,46.6z     M47.1,52.4c-3.2,0-5.8-2.6-5.8-5.8c0-3.2,2.6-5.8,5.8-5.8c3.2,0,5.8,2.6,5.8,5.8C52.9,49.8,50.3,52.4,47.1,52.4z"
          ></motion.path>
          <motion.path
            variants={pathVariants}
            xmlns="http://www.w3.org/2000/svg"
            d="M83.7,8.9c0-4.9-4-8.9-8.9-8.9C69.9,0,66,4,66,8.9c0,4.4,3.2,8,7.3,8.7v20.5l-49,49h0v15.2h3.1V88.5l49-49l0,0h0.1V17.6    C80.5,16.9,83.7,13.3,83.7,8.9z M74.8,14.7c-3.2,0-5.8-2.6-5.8-5.8c0-3.2,2.6-5.8,5.8-5.8c3.2,0,5.8,2.6,5.8,5.8    C80.6,12.1,78,14.7,74.8,14.7z"
          ></motion.path>
        </g>
        <g
          id="SvgjsG6007"
          featurekey="nameRightFeature-0"
          transform="matrix(2.2842581207338917,0,0,2.2842581207338917,149.57870939633054,-9.685167860773587)"
          fill="#ffffff"
        >
          <motion.path
            variants={pathVariants}
            d="M7.5600000000000005 13.36 l3.96 6.64 l0.78 0 l-4.34 -7.28 z M7.640000000000001 12.14 l4.48 -7.84 l-0.8 0 l-5.64 9.94 l0 -9.98 l-0.68 0 l0 11.24 l0.68 0 l0 -0.02 l1.54 -2.68 z M15.58 13.96 l0 -9.72 l-0.68 0 l0 15.76 l0.68 0 l0 -5.4 l0 -0.64 z M15.86 14.6 l5.84 0 l0 5.4 l0.68 0 l0 -11.62 l-0.68 0 l0 5.58 l-5.84 0 l0 0.64 z M31.98 20 c2.2134 0 4.1 -0.78 5.66 -2.34 c0.77334 -0.76 1.3567 -1.58 1.75 -2.46 s0.59 -1.88 0.59 -3 c0 -2.2266 -0.78 -4.1066 -2.34 -5.64 c-1.56 -1.52 -3.4866 -2.2866 -5.78 -2.3 c-1.4133 0.01334 -2.74 0.36668 -3.98 1.06 c-1.2133 0.70666 -2.18 1.6867 -2.9 2.94 l0.58 0.32 c0.65334 -1.16 1.54 -2.06 2.66 -2.7 c1.1067 -0.64 2.32 -0.96666 3.64 -0.98 c2.1334 0.01334 3.9066 0.72668 5.32 2.14 c1.4133 1.3867 2.1266 3.1066 2.14 5.16 c0 1.0267 -0.18 1.9433 -0.54 2.75 s-0.88666 1.5633 -1.58 2.27 c-1.4267 1.4267 -3.1666 2.14 -5.22 2.14 c-1.28 0 -2.44 -0.27334 -3.48 -0.82 l-0.3 0.58 c1.1333 0.58666 2.3934 0.88 3.78 0.88 z M44.42 19.26 l-0.84 -0.000039062 l7.52 -14.92 l0 -0.1 l-1.68 0 c0 0.13334 -0.0033398 0.27668 -0.01 0.43002 s-0.01 0.25668 -0.01 0.31002 l0.7 0 l-7.52 14.9 l0 0.12 l1.84 0 l0 -0.74 z M45.8 4.24 l-1.08 0 l0 0.74 l1.08 0 l0 -0.33 l0 -0.41 z M48.66 19.25996 l0 0.74 l1.02 0 l0 -0.74 l-1.02 0 z M58.94 6.140000000000001 c0 0.08 0.23666 0.84334 0.71 2.29 s0.99 3.03 1.55 4.75 s1.3133 3.9934 2.26 6.82 l0.86 0 l-5.3 -15.76 l-0.16 0 l-5.26 15.76 l0.82 0 z M58.58 15.52 l-0.72 0 l1.2 4.48 l0.72 0 z"
          ></motion.path>
        </g>
      </motion.svg> */}
    </div>
  )
}
