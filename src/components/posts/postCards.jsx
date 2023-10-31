import styles from "@/styles/Posts.module.css"
import dayjs from "dayjs"
import Image from "next/image"
import Link from "next/link"

const placeholder = `data:image/svg+xml,%3Csvg width='800' viewBox='0 0 1147 141' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cg clip-path='url(%23clip0_254_20)'%3E%3Cpath d='M12.1944 0H0V5.72589H7.95288H11.841C26.3329 5.72589 37.2318 9.96072 44.5361 18.4302C51.8404 26.8997 55.4934 37.934 55.4934 51.533V53.5013C55.4934 66.8614 51.8409 77.7772 44.5361 86.2462C37.2313 94.7151 26.3329 98.9505 11.841 98.9505H6.18557H2.2975H0.353461H0V141H6.18557V104.855H12.1944C28.4536 104.855 40.7947 99.9942 49.2195 90.2722C57.6442 80.5502 61.8557 68.3528 61.8557 53.6802V51.3541C61.8557 36.6815 57.5847 24.4549 49.0428 14.6726C40.5008 4.89027 28.2186 0 12.1944 0ZM132.018 16.9987C132.018 17.7145 134.109 24.5438 138.292 37.4867C142.474 50.4295 147.04 64.5952 151.988 79.9835C156.937 95.3718 163.593 115.711 171.959 141H179.558L132.725 0H131.311L84.8307 141H92.0767L132.018 16.9987ZM128.837 100.919H122.474L133.078 141H139.44L128.837 100.919ZM276.937 0.178938V95.3718C276.937 107.897 273.667 117.56 267.128 124.359C260.589 131.159 252.784 134.856 243.712 135.453V137.69V138.316V141C255.022 140.284 264.094 136.049 270.928 128.296C277.762 120.542 281.178 109.567 281.178 95.3718V0.178938H276.937ZM237.173 135.632C227.983 134.916 220.324 131.158 214.198 124.359C208.071 117.559 205.008 107.897 205.008 95.3716V0.178759H199.706V95.3716C199.706 109.686 203.093 120.691 209.868 128.385C216.642 136.079 225.744 140.284 237.173 141V138.405V135.632ZM309.986 105.75V0H304.153V105.75H309.986ZM357.526 141V134.916H309.986V117.381H304.153V141H357.526Z' fill='white'/%3E%3Cpath d='M481.648 85.2823L468.575 72.0465V54.0349C474.235 53.0797 478.413 48.031 478.413 42.1636C478.413 35.4775 473.023 30.0194 466.419 30.0194C459.815 30.0194 454.424 35.4775 454.424 42.1636C454.424 48.1675 458.737 53.0797 464.262 54.0349V73.8204L477.335 87.0562V139.59H481.513V85.2823H481.648ZM458.602 42.1636C458.602 37.7972 462.106 34.2494 466.419 34.2494C470.731 34.2494 474.235 37.7972 474.235 42.1636C474.235 46.5301 470.731 50.0778 466.419 50.0778C462.106 50.0778 458.602 46.5301 458.602 42.1636Z' fill='%23FFFF00'/%3E%3Cpath d='M460.489 116.666L447.416 103.43V85.4187C453.076 84.4635 457.254 79.4148 457.254 73.5474C457.254 66.8613 451.863 61.4032 445.26 61.4032C438.656 61.4032 433.265 66.8613 433.265 73.5474C433.265 79.5513 437.578 84.4635 443.103 85.4187V105.204L456.176 118.44V139.59H460.354V116.666H460.489ZM437.578 73.4109C437.578 69.0445 441.082 65.4967 445.394 65.4967C449.707 65.4967 453.211 69.0445 453.211 73.4109C453.211 77.7774 449.707 81.3251 445.394 81.3251C441.082 81.3251 437.578 77.7774 437.578 73.4109Z' fill='%23FFFF00'/%3E%3Cpath d='M526.392 108.752C526.392 102.066 521.001 96.6078 514.397 96.6078C507.793 96.6078 502.403 102.066 502.403 108.752C502.403 114.756 506.715 119.668 512.241 120.623V139.59H516.419V120.623C522.079 119.668 526.392 114.756 526.392 108.752ZM514.397 116.666C510.085 116.666 506.58 113.118 506.58 108.752C506.58 104.386 510.085 100.838 514.397 100.838C518.71 100.838 522.214 104.386 522.214 108.752C522.214 113.118 518.71 116.666 514.397 116.666Z' fill='%23FFFF00'/%3E%3Cpath d='M508.872 63.5864C508.872 56.7638 503.346 51.3057 496.473 51.4422C490.138 51.5787 484.882 57.0367 484.882 63.5864C484.882 69.5903 489.195 74.5025 494.721 75.4577V139.59H498.899V75.4577C504.559 74.5025 508.872 69.4538 508.872 63.5864ZM496.877 71.5006C492.564 71.5006 489.06 67.9528 489.06 63.5864C489.06 59.2199 492.564 55.6722 496.877 55.6722C501.19 55.6722 504.694 59.2199 504.694 63.5864C504.694 67.9528 501.19 71.5006 496.877 71.5006Z' fill='%23FFFF00'/%3E%3Cpath d='M546.203 12.1442C546.203 5.45806 540.813 0 534.209 0C527.605 0 522.349 5.45806 522.349 12.1442C522.349 18.1481 526.662 23.0603 532.187 24.0155V51.9881L466.149 118.849V139.59H470.327V120.76L536.365 53.8984H536.5V24.0155C541.891 23.0603 546.203 18.1481 546.203 12.1442ZM534.209 20.0584C529.896 20.0584 526.392 16.5106 526.392 12.1442C526.392 7.77774 529.896 4.23 534.209 4.23C538.521 4.23 542.025 7.77774 542.025 12.1442C542.025 16.5106 538.521 20.0584 534.209 20.0584Z' fill='%23FFFF00'/%3E%3Cpath d='M645.44 81.5941L680.432 141H687.325L648.974 75.8682L645.44 81.5941ZM646.147 70.6791L685.734 0.53715H678.665L628.827 89.4671V0.179283H622.818V100.74H628.827V100.561L642.435 76.5839L646.147 70.6791ZM716.309 86.9621V0.000345555H710.3V141H716.309V92.6879V86.9621ZM718.783 92.6879H770.388V141H776.397V37.0396H770.388V86.9621H718.783V92.6879ZM861.227 141C880.786 141 897.457 134.022 911.242 120.065C918.076 113.265 923.23 105.929 926.706 98.0559C930.181 90.1829 931.919 81.2362 931.919 71.2159C931.919 51.2952 925.027 34.4755 911.242 20.7566C897.457 7.15769 880.433 0.299169 860.167 0.179283C847.678 0.298632 835.955 3.45985 824.998 9.66276C814.276 15.985 805.734 24.7531 799.372 35.966L804.497 38.8289C810.27 28.4508 818.105 20.3988 828.002 14.6729C837.781 8.94703 848.503 6.0245 860.167 5.90516C879.019 6.0245 894.688 12.4065 907.177 25.051C919.666 37.4574 925.969 52.8448 926.087 71.2159C926.087 80.4015 924.497 88.602 921.316 95.8193C918.134 103.037 913.481 109.806 907.354 116.128C894.747 128.892 879.372 135.274 861.227 135.274C849.917 135.274 839.666 132.829 830.476 127.938L827.825 133.127C837.84 138.376 848.975 141 861.227 141ZM971.154 134.379L963.731 134.379L1030.18 0.894667V0H1015.34C1015.34 1.19295 1015.31 2.47537 1015.25 3.84725C1015.19 5.21913 1015.16 6.14368 1015.16 6.6209H1021.34L954.894 139.926V141H971.154V134.379ZM983.348 0.000345555H973.805V6.62089H983.348V3.66849V0.000345555ZM1008.62 134.379V141H1017.63V134.379H1008.62ZM1099.46 16.999C1099.46 17.7148 1101.55 24.5441 1105.73 37.4869C1109.92 50.4297 1114.48 64.5954 1119.43 79.9837C1124.38 95.3719 1131.04 115.711 1139.4 141H1147L1100.17 0.000345555H1098.75L1052.27 141H1059.52L1099.46 16.999ZM1096.28 100.919H1089.92L1100.52 141H1106.88L1096.28 100.919Z' fill='white'/%3E%3C/g%3E%3Cdefs%3E%3CclipPath id='clip0_254_20'%3E%3Crect width='1147' height='141' fill='white'/%3E%3C/clipPath%3E%3C/defs%3E%3C/svg%3E`

export function ImageLeft({ post, i }) {
  const { publishedAt, readingTime, title, headLine, slug, coverImage } = post

  return (
    <Link className={styles.postCard} key={i} href={`/blog/${slug}`} passHref>
      <div className={styles.postCard}>
        <div className={styles.section}>
          <Image
            src={coverImage}
            alt={title}
            width={800}
            height={800}
            priority
            placeholder="blur"
            blurDataURL={placeholder}
          />
        </div>
        <div className={styles.section}>
          <div className={styles.postDetails}>
            <div>{dayjs(publishedAt).format("D MMMM YYYY")}</div>
            <div>
              <svg
                width={3}
                height={3}
                viewBox="0 0 2 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx={1} cy={1} r={1} fill="#eee" />
              </svg>
            </div>
            <div>{readingTime}</div>
          </div>
          <div className={styles.postTitle}>
            <Link href={`/blog/${slug}`} passHref className="colorText">
              {title}
            </Link>
          </div>
          <div className={styles.headLine}>{headLine}</div>
          <div className={styles.readMore}>
            <Link href={`/blog/${slug}`} passHref className="colorText">
              read more...
            </Link>
          </div>
        </div>
      </div>
    </Link>
  )
}

export function ImageRight({ post, i }) {
  const { publishedAt, readingTime, title, headLine, slug, coverImage } = post
  return (
    <Link className={styles.postCard} key={i} href={`/blog/${slug}`} passHref>
      <div className={styles.postCard}>
        <div className={styles.section}>
          <div className={styles.postDetails}>
            <div>{dayjs(publishedAt).format("D MMMM YYYY")}</div>
            <div>
              <svg
                width={3}
                height={3}
                viewBox="0 0 2 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <circle cx={1} cy={1} r={1} fill="#eee" />
              </svg>
            </div>
            <div>{readingTime}</div>
          </div>
          <div className={styles.postTitle}>
            <Link href={`/blog/${slug}`} passHref className="colorText">
              {title}
            </Link>
          </div>
          <div className={styles.headLine}>{headLine}</div>
          <div className={styles.readMore}>
            <Link href={`/blog/${slug}`} passHref className="colorText">
              read more...
            </Link>
          </div>
        </div>
        <div className={styles.section}>
          <Image
            src={coverImage}
            alt={title}
            width={800}
            height={800}
            priority
            placeholder="blur"
            blurDataURL={placeholder} //blur
          />
        </div>
      </div>
    </Link>
  )
}
