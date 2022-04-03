import { h } from 'preact';
import { useState, useEffect, useRef } from 'preact/hooks';
import Styles from './styles.module.css';
import ExternalLink from '../Svg/ExternalLink';
import cx from 'classnames';

type HeaderProps = {
  dir: string;
};

const Header = ({ dir }: HeaderProps) => {

  const useOnClickOutside = (ref, handler) => {
    useEffect(
      () => {
        const listener = (e) => {
          if (!ref.current || ref.current.contains(event.target)) return
          handler(e);
        };
        document.addEventListener("mousedown", listener);
        document.addEventListener("touchstart", listener);
        return () => {
          document.removeEventListener("mousedown", listener);
          document.removeEventListener("touchstart", listener);
        };
      },
      [ref, handler]
    );
  }

  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);
  const close = () => setOpen(false);

  const menu = useRef(null);  
  useOnClickOutside(menu, () => setOpen(false));

  return (
    <header className={Styles.header}>
      <div className={Styles.wrapper}>
        <a className={Styles.h1} href="/" aria-label="office takanorip">
          <h1 className={Styles.logo}>
            <svg className={Styles.treeLogo} width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd" d="M35.7559 41.3842C35.6347 41.4839 35.5419 41.5403 35.4745 41.6185C34.3331 42.9425 32.8708 43.0724 31.3165 42.6672C30.6755 42.5001 30.0512 42.1993 29.4791 41.8583C29.0786 41.6195 28.9296 41.7251 28.7476 42.0654C28.3417 42.8244 27.9426 43.589 27.4932 44.3217C27.2411 44.733 26.9217 45.1128 26.5843 45.4594C25.8435 46.2209 25.3847 46.2298 24.4672 45.5647C24.8969 45.1243 25.3268 44.684 25.7566 44.2436C26.5524 43.4287 27.0536 42.4675 27.2139 41.331C27.3068 40.6719 27.2533 40.0531 26.7681 39.5479C26.5387 39.309 26.5567 39.1156 26.7719 38.8744C27.0688 38.5419 27.3338 38.181 27.6018 37.8455C28.4041 38.5956 29.1538 39.3552 29.9659 40.0404C30.9839 40.8994 32.1547 41.4711 33.522 41.2171C34.0609 41.1169 34.6149 40.8178 35.0429 40.4644C35.6874 39.9322 35.6822 39.1086 35.1644 38.4068C35.1359 38.422 35.0862 38.4326 35.0819 38.4529C34.923 39.1983 34.6269 39.4782 34.0311 39.4402C33.4225 39.4015 32.975 38.9261 32.9475 38.2889C32.9171 37.5817 33.3179 37.0578 33.9673 36.9555C35.3517 36.7377 36.8493 37.674 37.3795 39.1536C38.0255 40.9566 37.4778 42.5439 36.3761 43.99C35.3067 45.3939 33.8937 46.0043 32.1169 45.9083C31.6998 45.8858 31.2064 46.2026 30.8415 46.4848C29.6248 47.4249 28.2365 47.8563 26.7401 47.9834C25.6047 48.08 24.5544 47.7468 23.5777 47.1875C22.2906 46.4512 21.2503 45.4557 20.438 44.1634C20.8108 43.8884 21.138 43.6466 21.4408 43.4231C22.045 44.0447 22.5848 44.733 23.2523 45.2592C24.6576 46.3673 26.2567 46.7233 28.0029 46.1773C28.1621 46.1278 28.3156 46.0527 28.4626 45.9723C29.3839 45.4693 29.4171 44.9751 28.5768 44.3556C28.4426 44.2565 28.3127 44.1512 28.1624 44.0345C28.338 43.6534 28.5077 43.2857 28.6962 42.8771C29.2181 43.1617 29.7314 43.4482 30.2503 43.7235C31.2886 44.2746 32.4009 44.3641 33.5245 44.1334C34.7214 43.8876 35.4076 43.0552 35.7746 41.9285C35.8027 41.8418 35.8024 41.7433 35.8021 41.6504C35.8017 41.5824 35.7795 41.5142 35.7559 41.3842Z" fill="#008D18"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M23.6269 41.5066C22.2751 42.4452 20.984 43.3411 19.6938 44.2385C19.5406 44.345 19.3799 44.4458 19.2457 44.5738C18.8033 44.9956 18.7773 45.4419 19.3006 45.7325C19.8734 46.0505 20.5244 46.2823 21.1688 46.3998C21.6911 46.4946 22.1691 46.5471 22.5696 46.9501C22.8146 47.1965 23.1482 47.3548 23.4452 47.5545C22.8512 47.9875 21.3584 48.0872 20.2549 47.855C19.0127 47.5932 17.8845 47.0933 16.8956 46.2633C16.6238 46.0353 16.1861 45.8781 15.8336 45.894C12.2644 46.0565 10.2302 42.9504 10.3971 40.286C10.4903 38.7972 11.8317 36.7803 13.7509 36.9531C14.5673 37.0268 15.1273 37.5454 15.081 38.25C15.0391 38.8911 14.5901 39.4021 14.0256 39.4517C13.4004 39.5066 13.1015 39.2268 12.9044 38.3677C12.521 38.804 12.4531 39.2755 12.6102 39.7853C12.9235 40.8017 13.9355 41.4001 15.1492 41.2916C16.5027 41.1707 17.582 40.4976 18.5372 39.5825C19.8632 38.3122 21.1872 37.0397 22.5133 35.7692C22.6195 35.6674 22.7341 35.5745 22.8993 35.4295C23.2335 35.931 23.5493 36.4051 23.9448 36.999C23.1727 37.7319 22.3763 38.4179 21.6687 39.1863C21.2602 39.63 20.7744 40.1826 20.7157 40.7284C20.6247 41.5758 20.0343 41.8041 19.5025 42.2586C19.2284 41.5658 18.8416 41.7524 18.3885 42.01C17.4831 42.525 16.5056 42.8003 15.4545 42.8587C14.3945 42.9177 13.5031 42.6016 12.7638 41.8499C12.6214 41.7049 12.5147 41.5245 12.3913 41.3605L12.1725 41.4715C12.2496 41.7865 12.2788 42.1237 12.4122 42.4127C12.9971 43.6806 14.2277 44.3655 15.662 44.2447C16.9405 44.1371 18.0898 43.7013 19.125 42.9253C20.2457 42.0853 21.3996 41.2905 22.5443 40.472C22.9183 40.8292 23.2532 41.1495 23.6269 41.5066Z" fill="#008D18"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M45.0929 25.0502C45.1315 25.0894 45.1508 25.1006 45.1565 25.1165C45.6924 26.6263 45.6992 26.6268 44.1846 26.9648C43.1258 27.2012 42.1392 26.8708 41.3612 26.1893C40.4101 25.3561 39.5722 24.3921 38.6992 23.4716C38.4968 23.2581 38.3499 22.9918 38.1574 22.7214C37.7256 23.0283 37.3203 23.3166 36.8861 23.6251C37.1026 23.9364 37.3954 24.2215 37.5207 24.5671C37.7524 25.206 37.9963 25.8744 38.0347 26.542C38.0958 27.6046 37.1898 28.4723 36.054 28.6117C35.0771 28.7315 34.1322 28.0746 33.8499 27.0797C33.6683 26.4394 33.9137 25.8036 34.4347 25.6161C34.8662 25.4606 35.3004 25.4475 35.6137 25.8474C35.9229 26.2417 35.9198 26.6754 35.6493 27.1005C35.6006 27.1771 35.5416 27.2468 35.4884 27.3182C35.8516 27.6354 36.2684 27.5566 36.5372 27.1208C36.8255 26.6529 36.7325 26.17 36.4978 25.7276C35.9725 24.7379 35.097 24.1933 34.0427 23.9196C31.9245 23.3696 30.0089 24.0136 28.2233 25.0622C27.1744 25.6782 26.2438 26.4972 25.2364 27.2424C24.9674 26.9245 24.632 26.5277 24.264 26.0927C26.9012 23.2076 30.0965 21.8023 34.0208 22.3524C35.9722 22.6259 37.224 22.0678 38.1729 20.3486C38.2364 20.2339 38.2823 20.1047 38.3656 20.0077C38.4417 19.9193 38.5716 19.7975 38.6524 19.8141C38.7462 19.8334 38.8439 19.9762 38.8834 20.0858C38.946 20.2597 38.9522 20.4532 38.9994 20.6338C39.5124 22.5953 40.6444 24.1024 42.3576 25.1661C43.3197 25.7637 44.075 25.7192 45.0929 25.0502Z" fill="#008D18"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M11.1581 23.7006C10.7217 23.3848 10.3328 23.1032 9.90434 22.7931C9.2533 23.5958 8.60365 24.3967 7.8852 25.2826C7.81069 24.6192 7.74142 24.1066 7.70316 23.5915C7.69344 23.4609 7.75114 23.3004 7.83012 23.1918C8.4699 22.3144 8.87842 21.3436 9.07805 20.2759C9.10782 20.1162 9.25762 19.9789 9.35188 19.8313C9.47608 19.9531 9.63544 20.0547 9.71829 20.2002C10.29 21.2032 11.1473 21.9033 12.1862 22.3145C12.6475 22.4971 13.2404 22.4424 13.7561 22.3708C15.1043 22.1839 16.4338 22.2108 17.7733 22.4479C18.3512 22.5502 18.6247 22.8341 18.6393 23.398C18.6478 23.7265 18.6409 24.0552 18.6409 24.2989C17.6387 24.122 16.6842 23.8883 15.7163 23.7983C14.3019 23.6668 13.0233 24.0407 11.9911 25.0913C11.4793 25.612 11.1646 26.4704 11.4235 26.9629C11.5477 27.1994 11.8197 27.3704 12.0532 27.529C12.12 27.5743 12.3082 27.4996 12.3979 27.427C12.4438 27.3897 12.4341 27.207 12.3837 27.1388C12.0292 26.6585 12.1057 26.2144 12.5125 25.8352C12.8291 25.54 13.1998 25.3942 13.6285 25.6751C14.0747 25.9677 14.2913 26.4942 14.1588 27.0402C13.9607 27.8573 13.202 28.5305 12.3803 28.6185C11.5082 28.7118 10.5751 28.2184 10.216 27.4084C9.6646 26.1648 10.0734 25.0755 10.8345 24.0641C10.9236 23.9457 11.0318 23.8416 11.1581 23.7006Z" fill="#008D18"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M20.7945 29.9094C20.4726 30.4334 20.1802 30.9089 19.8602 31.4297C18.8439 30.7336 17.8755 30.0446 17.1541 29.0657C17.0548 28.9309 16.9687 28.7833 16.8971 28.6318C16.542 27.882 16.6271 27.5019 17.3386 27.0929C18.631 26.3497 19.2399 25.2763 19.0296 23.7808C18.9567 23.2628 18.8615 22.7455 18.737 22.2377C18.3531 20.6711 17.5258 19.4433 16.0535 18.6865C15.4266 18.364 14.8434 17.9562 14.1442 17.5283C15.0683 17.1309 15.8014 16.8825 16.7191 17.3745C19.8124 19.0338 21.0847 22.468 20.8325 25.4622C20.781 26.0724 20.3905 26.6887 20.0465 27.2322C19.3285 28.3663 19.3183 28.5242 20.3109 29.4551C20.4598 29.5948 20.6085 29.7345 20.7945 29.9094Z" fill="#008D18"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M21.0159 17.7686C21.362 18.4342 21.6628 19.0456 21.9933 19.6405C22.5175 20.5846 23.0511 21.5236 23.6022 22.4521C23.8515 22.8722 24.1851 22.9189 24.468 22.4836C24.8631 21.8758 25.2946 21.2776 25.5869 20.6201C26.2383 19.1559 26.9336 17.7342 28.1332 16.6279C29.5253 15.3438 31.5837 15.0152 33.4773 15.8813C32.863 16.1861 32.3653 16.6208 31.8372 16.6619C29.7548 16.8244 28.4399 17.9463 27.5758 19.7508C27.0044 20.9441 26.4871 22.1723 25.8063 23.3004C25.4337 23.9178 24.7864 24.3764 24.2269 24.8652C24.1284 24.9512 23.7864 24.9042 23.6673 24.7963C22.619 23.8482 21.7019 22.7949 21.196 21.4419C21.078 21.1264 21.0224 20.7602 20.8239 20.5074C20.0892 19.5721 20.526 18.7325 21.0159 17.7686Z" fill="#008D18"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M25.1133 13.1225C26.8258 15.2047 26.1743 19.325 23.989 21.0812C23.3091 20.4806 22.8514 19.7184 22.4847 18.8985C21.1264 15.8602 22.1807 12.7914 25.0653 11.3634C25.2158 11.2889 25.3674 11.2096 25.5274 11.1635C26.8128 10.792 26.8606 10.6688 27.0289 12.2451C25.0657 12.4988 23.8082 13.636 23.2628 15.5111C22.9253 16.6714 23.2145 17.7598 23.979 18.7799C24.4993 18.3811 24.6422 17.832 24.7425 17.2996C24.9122 16.3989 24.8668 15.4924 24.4075 14.6753C24.2125 14.3284 24.2457 14.1092 24.5087 13.848C24.7204 13.6374 24.8944 13.3887 25.1133 13.1225Z" fill="#008D18"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M41.6068 9.6441C41.1878 9.49786 40.7532 9.38889 40.3647 9.18979C40.2034 9.10693 40.1173 8.84074 40.0365 8.64211C39.0821 6.29278 36.5529 4.8844 34.2001 5.39977C32.8039 5.70553 32.1575 6.86643 32.6186 8.24251C32.8997 9.08158 33.4591 9.69016 34.2032 10.1409C34.4065 10.2641 34.6191 10.372 34.83 10.4884C34.173 11.5091 33.8268 11.5892 32.8678 10.9794C31.3989 10.0454 30.6054 7.67396 31.2178 6.04824C31.6814 4.81716 33.0657 3.8807 34.5701 3.92631C38.117 4.0342 40.5577 5.95023 41.6468 9.49926C41.6556 9.52785 41.6292 9.56712 41.6068 9.6441Z" fill="#008D18"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M40.4681 25.9806C40.938 26.2706 41.4025 26.54 41.8438 26.8436C41.9397 26.9098 41.9609 27.096 42.0007 27.2316C42.2156 27.9659 42.4228 28.7021 42.6381 29.4361C42.7248 29.7315 42.887 29.7796 43.1912 29.6731C45.5647 28.8413 46.4052 26.7893 45.1529 24.6152C44.6546 23.7501 43.9692 22.982 43.2979 22.2335C43.0078 21.91 42.9784 21.6934 43.2106 21.3801C43.3978 21.1275 43.5829 20.8735 43.8089 20.5659C45.034 21.9383 46.2228 23.259 46.8342 24.9715C47.5582 26.9993 46.7567 29.0832 44.7399 30.3116C44.0619 30.7245 43.2916 30.9983 42.5381 31.2643C42.3487 31.3311 41.9599 31.1975 41.8373 31.0287C41.0173 29.9008 40.3782 27.4624 40.4681 25.9806Z" fill="#008D18"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M0.955662 25.6387C1.58649 26.2689 2.2113 26.7868 2.49517 27.6464C2.85601 28.7396 3.8281 29.3038 4.89722 29.67C5.3477 29.8243 5.36421 29.4603 5.44736 29.2321C6.22691 27.0918 6.40216 24.9269 5.58729 22.7569C5.41496 22.2977 5.40725 21.968 5.80296 21.6366C6.05643 21.4242 6.24851 21.1379 6.51324 20.8326C7.10951 22.2933 7.51417 23.753 7.56015 25.2867C7.61692 27.1878 7.24265 29.0025 6.3582 30.7059C6.08636 31.2291 5.75591 31.401 5.18586 31.2205C3.10038 30.5606 1.49439 29.4224 1.01999 27.1269C0.967387 26.8727 0.968621 26.6064 0.957668 26.345C0.947948 26.1099 0.955662 25.8741 0.955662 25.6387Z" fill="#008D18"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M13.1155 4.62397C12.929 4.94287 12.7657 5.28001 12.5439 5.57217C12.4535 5.6912 12.2404 5.75381 12.075 5.77313C9.37772 6.08847 7.38944 8.36469 7.56731 10.9471C7.68749 12.6939 8.77821 13.778 10.5089 13.8712C10.6011 13.8763 10.6929 13.8846 10.7754 13.8908C10.9717 14.3499 11.1588 14.788 11.3478 15.2298C9.05806 15.8356 6.44374 14.0265 6.12948 11.6508C5.69612 8.37334 7.4783 5.83202 10.9112 4.88336C11.6068 4.69106 12.3333 4.61052 13.0456 4.47851C13.069 4.52705 13.0923 4.57543 13.1155 4.62397Z" fill="#008D18"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M25.4179 34.4429C25.0791 33.9931 24.7573 33.6238 24.5102 33.2097C24.4121 33.0454 24.3849 32.7085 24.4875 32.5767C24.8985 32.0485 25.3462 31.5418 25.8301 31.0796C26.5611 30.3816 27.3592 29.7536 28.0805 29.0464C28.6339 28.5038 28.6116 28.2189 28.1847 27.5615C27.8706 27.0776 27.5717 26.5834 27.208 26.0005C27.7908 25.6464 28.3228 25.3233 28.9523 24.9412C29.2683 26.124 30.1009 26.7522 31.015 27.3359C31.2047 27.4573 31.324 27.9325 31.2492 28.1741C31.1096 28.6242 30.863 29.0748 30.552 29.4297C30.1358 29.9046 29.644 30.3263 29.1356 30.7046C27.7232 31.7556 26.2735 32.7596 25.4179 34.4429Z" fill="#008D18"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M18.7687 17.4665C16.4597 16.147 13.4518 16.7931 12.1667 18.9435C12.6587 19.1637 13.121 19.4887 13.6221 19.5685C14.4597 19.7017 15.3412 19.8059 16.1682 19.6813C16.854 19.5782 17.2269 19.7769 17.5623 20.2811C17.6536 20.4185 17.7457 20.5553 17.8765 20.7507C16.9103 21.1089 15.9526 21.1908 14.9879 21.1627C13.4828 21.1186 12.134 20.6091 10.9695 19.6526C10.2463 19.0582 10.2324 18.8539 10.8251 18.1395C12.0408 16.6747 13.6511 15.9106 15.4831 15.5596C16.5258 15.3597 17.5561 15.3596 18.5788 15.7151C19.028 15.8712 19.1596 16.1196 19.0218 16.5565C18.9322 16.8408 18.8612 17.1311 18.7687 17.4665Z" fill="#008D18"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M41.5556 20.2615C40.7691 19.1479 40.293 17.8828 40.0835 16.5206C39.8883 15.2518 39.9616 15.2057 41.2736 15.102C43.1221 14.9555 44.6153 15.6548 45.7741 17.0477C47.6392 19.2896 48.0737 21.8077 47.0854 24.5717C46.4826 23.9963 46.2173 23.2478 46.3567 22.5369C46.8469 20.0386 45.2555 17.2476 42.9656 16.671C42.5181 16.5583 42.0178 16.6559 41.5419 16.6565C41.6216 17.0806 41.6998 17.5054 41.7828 17.9291C41.7935 17.9826 41.82 18.0383 41.8539 18.0812C42.496 18.8922 42.3044 19.6056 41.5556 20.2615Z" fill="#008D18"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M27.8939 1.47003C27.5729 1.61765 27.2602 1.79047 26.9268 1.90131C26.7808 1.94985 26.5655 1.92171 26.4279 1.84519C24.217 0.614418 21.9166 0.930228 20.1137 2.72693C19.0264 3.81069 19.0158 4.79893 20.0943 5.89259C20.3825 6.18491 20.702 6.446 21.0369 6.74851C20.8438 7.07761 20.6474 7.41182 20.4521 7.74432C17.6666 6.60738 16.8999 3.67296 19.082 1.69973C21.0644 -0.0929456 23.4078 -0.377994 25.8987 0.426293C26.6005 0.653064 27.2603 1.00984 27.9393 1.3071C27.9242 1.36151 27.909 1.41577 27.8939 1.47003Z" fill="#008D18"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M7.85404 10.5831C7.74312 9.52079 7.96296 9.11532 8.92162 8.94822C10.1325 8.73737 11.3591 8.61634 12.5804 8.46964C13.5815 8.34922 14.5037 8.02135 15.342 7.46208C15.4756 7.37304 15.5887 7.25309 15.7905 7.07918C15.3693 6.71314 14.9971 6.3896 14.61 6.05323C14.61 6.05199 14.6001 6.01041 14.6156 5.98413C15.3434 4.75444 15.5645 4.72353 16.5992 5.73479C16.8255 5.956 17.032 6.20209 17.2225 6.45545C17.7597 7.16992 17.7567 7.32296 17.0994 7.96014C15.8478 9.17329 14.2647 9.66841 12.6009 9.91203C11.4205 10.085 10.2212 10.1254 9.03501 10.2631C8.63482 10.3093 8.24806 10.4729 7.85404 10.5831Z" fill="#008D18"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M27.3209 16.9197C27.3209 16.1926 27.323 15.5808 27.3206 14.9692C27.3158 13.8666 27.3357 12.7629 27.2928 11.6618C27.2616 10.8617 26.7999 10.2469 26.099 9.95305C25.1087 9.538 24.0626 9.25588 23.0387 8.92261C22.8832 8.8719 22.7178 8.85181 22.4569 8.79616C22.6616 8.40383 22.8247 8.05849 23.0228 7.7348C23.0717 7.65519 23.2462 7.59243 23.3438 7.61283C24.2553 7.80482 25.1795 7.96142 26.0674 8.23456C27.8152 8.77204 28.7752 10.0028 28.8345 11.8318C28.8724 13.0045 28.7754 14.1832 28.6956 15.3563C28.6805 15.5804 28.4964 15.8219 28.3312 16.0003C28.0548 16.2986 27.7305 16.5526 27.3209 16.9197Z" fill="#008D18"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M2.8033 24.5922C2.65396 24.3213 2.42965 23.9768 2.27584 23.6031C2.22261 23.4735 2.29435 23.2308 2.39355 23.1093C3.28078 22.0253 4.15736 20.9296 5.09628 19.8916C5.91316 18.9889 6.40714 17.9686 6.62421 16.7021H4.99831C4.96422 16.6449 4.92025 16.602 4.91176 16.5528C4.67572 15.1588 4.70072 15.1141 6.13932 15.099C6.59999 15.0943 7.06528 15.1759 7.52255 15.2539C8.07901 15.3488 8.20799 15.7014 8.12329 16.2396C7.74424 18.6544 6.56327 20.6061 4.82136 22.2801C4.10121 22.9723 3.49877 23.7873 2.8033 24.5922Z" fill="#008D18"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M28.1655 3.37965C28.6177 3.22568 29.0358 3.08332 29.4894 2.92873C30.0671 3.88033 30.1695 4.88897 30.094 5.92513C30.0856 6.03705 29.8627 6.20662 29.7232 6.22486C27.9304 6.45859 26.174 6.34404 24.5183 5.54254C23.9472 5.26615 23.4099 4.92051 22.8514 4.61691C21.9393 4.12133 21.0226 3.63409 20.084 3.13062C20.3093 2.92642 20.5803 2.64214 20.8932 2.41614C21.0126 2.32989 21.2587 2.31118 21.3948 2.37456C22.4585 2.8686 23.5441 3.33064 24.5544 3.92022C25.5759 4.51613 26.6163 4.95807 27.8031 5.04325C28.4994 5.09302 28.6316 4.97801 28.4739 4.30883C28.4059 4.01961 28.2879 3.74229 28.1655 3.37965Z" fill="#008D18"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M39.454 12.7537C39.7472 12.2053 39.9817 11.7666 40.2621 11.2419C40.6393 11.3855 41.062 11.5466 41.5063 11.7157C41.3255 12.8002 40.7965 13.6399 40.0352 14.3304C39.9252 14.4301 39.5864 14.3927 39.4221 14.2984C37.9377 13.4478 36.9254 12.1685 36.2607 10.6148C35.8717 9.70552 35.5747 8.75701 35.2055 7.83834C34.9156 7.1166 34.5789 6.41356 34.2458 5.66415C34.5861 5.63865 34.9436 5.55563 35.2803 5.60757C35.4923 5.64004 35.7666 5.83295 35.8527 6.02572C36.3166 7.06512 36.7697 8.11303 37.1517 9.18505C37.6253 10.5141 38.3339 11.6686 39.454 12.7537Z" fill="#008D18"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M23.6963 11.8236C23.2861 12.2568 22.916 12.6479 22.5423 13.0424C20.5517 11.7897 18.5735 12.2391 16.6244 13.138C15.8118 13.5127 15.0491 13.9957 14.2616 14.4256C14.0993 14.5144 13.9276 14.5858 13.6868 14.6997C13.4366 14.3046 13.1927 13.92 12.8781 13.4241C14.6151 12.5917 16.2249 11.6541 17.9494 11.0389C19.8027 10.3777 21.71 10.4906 23.4385 11.6288C23.5152 11.6793 23.5855 11.7395 23.6963 11.8236Z" fill="#008D18"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M34.5703 17.6167C34.8937 17.3281 35.2248 17.0323 35.598 16.699C36.5029 17.1159 37.1401 17.8616 37.6743 18.6976C37.7419 18.8031 37.6041 19.1233 37.4736 19.2598C36.4926 20.2865 35.27 20.8511 33.8732 21.0264C31.7408 21.2942 29.8363 20.82 28.2226 19.2023C28.5174 18.8092 28.8008 18.4317 29.0921 18.0435C30.8314 19.8809 32.8377 20.0919 35.045 19.2828C35.2368 19.2126 35.4153 19.1052 35.598 19.0117C35.9074 18.8531 35.8926 18.6398 35.6557 18.4436C35.3115 18.1587 34.9455 17.9002 34.5703 17.6167Z" fill="#008D18"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M5.80635 25.2591C5.80635 25.5154 5.80758 25.7207 5.8062 25.9256C5.80018 26.8425 5.73122 26.9195 4.81005 27.0419C3.1027 27.269 1.54869 26.3031 0.87112 24.5346C-0.0875396 22.0319 0.483583 19.7566 1.97958 17.6427C2.1826 17.3558 2.42219 17.0944 2.65839 16.8047C3.05487 17.786 3.0325 17.9723 2.48668 18.7957C1.4171 20.4106 1.32515 22.1321 2.03373 23.8906C2.69325 25.5268 3.79338 25.9127 5.80635 25.2591Z" fill="#008D18"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M22.672 27.8516C23.0985 28.3672 23.4526 28.7952 23.7945 29.2084C23.2977 29.9477 22.8012 30.629 22.3659 31.3472C21.5296 32.726 21.177 34.2119 21.5329 35.8175C21.5968 36.106 21.5592 36.2989 21.2992 36.4797C21.0263 36.6699 20.7988 36.9257 20.5039 37.1965C19.6992 36.0016 19.4158 34.6932 19.6986 33.3444C19.8862 32.4487 20.2873 31.5702 20.7363 30.7641C21.2886 29.7721 21.9901 28.8634 22.672 27.8516Z" fill="#008D18"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M5.74936 10.0714C5.80351 10.6658 5.86244 11.2181 5.89685 11.772C5.9041 11.8872 5.85057 12.0354 5.77327 12.1218C4.30181 13.7698 4.25429 15.6588 4.82557 17.6556C4.88728 17.871 4.95161 18.0859 5.01779 18.3C5.36614 19.4249 5.34239 19.4925 4.34223 20.1902C2.49772 17.4317 2.23438 12.5737 5.74936 10.0714Z" fill="#008D18"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M45.0446 15.8635C44.5541 15.6187 44.1283 15.4324 43.7342 15.1936C43.6052 15.1153 43.4912 14.9031 43.485 14.7476C43.4119 12.9169 42.0041 11.2873 39.7463 10.835C39.5263 10.7909 39.3065 10.743 39.084 10.7162C38.0749 10.5944 37.8574 10.3926 37.5873 9.24231C39.5567 8.95648 41.2428 9.64175 42.7588 10.7546C44.4366 11.9858 45.1402 13.724 45.0446 15.8635Z" fill="#008D18"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M29.7936 18.3986C30.6557 17.8856 31.3693 17.4482 32.0952 17.0321C33.0741 16.4711 34.0492 15.8891 34.6901 14.936C35.0022 14.4716 35.1494 13.8961 35.3717 13.3713C35.4201 13.2569 35.442 13.1124 35.5255 13.0354C35.8527 12.7346 36.1995 12.4552 36.5621 12.1485C37.0337 12.9722 36.9673 13.7904 36.6432 14.5998C36.2455 15.5936 35.6341 16.4461 34.735 17.0392C33.6904 17.7284 32.6191 18.3778 31.5426 19.0165C31.3843 19.1103 31.106 19.1182 30.9329 19.046C30.5782 18.8984 30.2573 18.6694 29.7936 18.3986Z" fill="#008D18"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M34.2683 3.62525C33.7897 3.75695 33.3644 3.89299 32.9294 3.98172C32.8083 4.00645 32.619 3.92931 32.5286 3.8344C31.4727 2.72652 30.1931 2.45198 28.7854 2.91511C27.96 3.18655 27.1505 3.55801 26.4054 4.00444C25.9193 4.29567 25.5732 4.29103 25.1643 3.96502C25.0061 3.83888 24.827 3.73871 24.6545 3.62479C26.3082 1.77043 29.6999 0.929817 31.9631 1.79779C32.9162 2.16322 33.7604 2.82715 34.2683 3.62525Z" fill="#008D18"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M24.3296 39.0794C24.9237 38.2778 25.5045 37.5889 25.9769 36.8317C26.5158 35.9678 26.7057 34.9806 26.5624 33.9691C26.5033 33.5526 26.6259 33.2951 26.9195 33.0504C27.262 32.7644 27.5904 32.4611 27.9302 32.1605C29.135 34.0709 28.0502 37.4374 25.3962 40.028C25.0343 39.7062 24.6676 39.3799 24.3296 39.0794Z" fill="#008D18"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M11.6019 8.23433C12.0834 7.24162 12.4686 6.33207 12.9519 5.47847C13.6491 4.24739 14.4883 3.12066 15.7313 2.36878C16.63 1.82512 17.5905 1.52384 18.7068 1.5985C18.399 2.07013 18.12 2.50233 17.8338 2.92959C17.7974 2.98354 17.7256 3.04043 17.6649 3.04708C16.6217 3.16301 15.9322 3.86542 15.3475 4.60664C14.6337 5.51124 13.9883 6.48912 13.4547 7.50981C13.1738 8.0476 12.8902 8.28364 12.3214 8.23665C12.1411 8.2215 11.9581 8.23433 11.6019 8.23433Z" fill="#008D18"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M21.3565 24.1217C23.6118 25.6011 25.1522 27.6672 26.7388 29.7737C26.2712 30.1609 25.8429 30.5157 25.3917 30.8895C24.7405 29.9975 24.1339 29.105 23.4626 28.2644C22.7868 27.4179 22.0467 26.6227 21.3349 25.8053C21.2713 25.8733 21.2079 25.9415 21.1445 26.0096C21.2124 25.404 21.2806 24.798 21.3565 24.1217Z" fill="#008D18"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M35.6454 10.1352C35.7668 10.3751 35.8657 10.5757 35.9692 10.7739C36.4425 11.6804 36.4479 11.6849 35.7344 12.4094C34.6822 13.4779 33.4348 13.7324 32.0281 13.2681C31.1615 12.982 30.2962 12.6906 29.4374 12.3812C29.3318 12.3432 29.2191 12.1897 29.1987 12.0739C29.1307 11.6886 29.1032 11.2958 29.0526 10.8368C29.8326 10.7798 30.5198 11.0446 31.2052 11.319C31.6543 11.4989 32.0952 11.7037 32.5537 11.856C33.3871 12.1327 34.1012 11.9075 34.6818 11.2584C35.0034 10.8985 35.311 10.526 35.6454 10.1352Z" fill="#008D18"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M41.9458 24.4777C41.8728 24.4584 41.8511 24.459 41.8386 24.4485C40.4313 23.2593 40.5745 23.6544 41.1121 21.9664C41.258 21.5084 41.4749 21.0595 41.7332 20.6535C42.4458 19.5327 43.1897 18.4333 43.3083 17.009C43.4729 17.0771 43.5754 17.1081 43.6664 17.1592C44.7554 17.7698 44.8597 18.0855 44.2933 19.1968C44.082 19.6117 43.8549 20.0281 43.5727 20.396C42.6488 21.6 42.1914 22.9823 41.9458 24.4777Z" fill="#008D18"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M21.2123 12.7308C21.0094 15.1101 21.2141 17.4652 19.7018 19.521C19.3567 19.1393 19.0768 18.8428 18.8153 18.5309C18.7567 18.4612 18.7101 18.3119 18.7447 18.2428C19.5961 16.5403 19.4937 14.685 19.6179 12.8662C19.6214 12.8121 19.6362 12.7586 19.6614 12.6164C20.1464 12.6521 20.6347 12.6883 21.2123 12.7308Z" fill="#008D18"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M22.712 31.4626C23.406 32.4174 24.0168 33.2393 24.6062 34.0762C24.9938 34.6265 25.337 35.2079 25.7263 35.7569C25.9412 36.0601 25.9511 36.321 25.744 36.6254C25.4946 36.9922 25.2715 37.3769 25.0236 37.7755C24.0181 36.3176 23.0507 34.923 22.099 33.5178C22.0207 33.4024 21.9916 33.1926 22.0391 33.0632C22.2184 32.5749 22.4387 32.1017 22.712 31.4626Z" fill="#008D18"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M19.8723 10.3245C20.2227 8.14968 21.4911 6.52967 22.9405 4.97319C23.3643 5.20414 23.7694 5.42503 24.2159 5.66819C22.9205 7.05494 22.0215 8.64264 21.5329 10.4579C20.9641 10.4121 20.4308 10.3695 19.8723 10.3245Z" fill="#008D18"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M12.6631 10.2268C12.1676 12.3088 12.3715 14.1465 14.1079 15.5984C13.8445 15.7098 13.6466 15.7928 13.4493 15.8771C12.5998 16.2399 12.6023 16.238 12.0162 15.4708C10.9062 14.0184 10.7749 12.3826 11.125 10.6616C11.1484 10.5469 11.2836 10.3878 11.3882 10.369C11.786 10.2971 12.1929 10.2747 12.6631 10.2268Z" fill="#008D18"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M26.4351 42.7271C24.6143 41.9793 23.2178 40.8034 21.9272 39.325C22.2953 38.9744 22.6452 38.6411 22.9189 38.3807C24.1975 39.3771 25.4324 40.3323 26.654 41.3043C26.7529 41.3831 26.826 41.594 26.7964 41.7155C26.718 42.0378 26.577 42.3446 26.4351 42.7271Z" fill="#008D18"/>
              <path fill-rule="evenodd" clip-rule="evenodd" d="M29.7205 20.6796C29.6792 22.2551 28.5929 22.7329 27.3275 23.1132C27.5022 21.9815 27.879 20.9477 28.4539 19.9486C28.9077 20.2105 29.3373 20.4586 29.7205 20.6796Z" fill="#008D18"/>
            </svg>
            <svg className={Styles.nameLogo} width="190" height="24" viewBox="0 0 190 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6.91728 6.91199C5.16528 6.91199 3.43728 7.48799 2.35728 8.42399C1.10928 9.50399 0.389282 11.064 0.389282 12.648C0.389282 16.152 3.05328 18.6 6.86928 18.6C10.7573 18.6 13.4693 16.2 13.4693 12.744C13.4693 9.33599 10.7573 6.91199 6.91728 6.91199ZM6.91728 10.224C8.30928 10.224 9.41328 11.328 9.41328 12.72C9.41328 14.088 8.30928 15.216 6.94128 15.216C5.54928 15.216 4.44528 14.088 4.44528 12.696C4.44528 11.352 5.57328 10.224 6.91728 10.224Z" fill="#001319"/>
              <path d="M20.7927 10.512H23.5047V7.31999H20.7927V5.95198C20.7927 5.06398 20.8167 4.70399 20.9367 4.43999C21.1047 4.03199 21.6567 3.71999 22.1607 3.71999C22.5687 3.71999 22.8807 3.81599 23.5047 4.10399V0.767986C22.8327 0.455986 22.4487 0.359985 21.8007 0.359985C20.4567 0.359985 19.1367 0.935985 18.1767 1.96798C17.2647 2.95198 16.9527 3.88799 16.9527 5.66399V7.31999H15.5847V10.512H16.9527V18.192H20.7927V10.512Z" fill="#001319"/>
              <path d="M31.0095 10.512H33.7215V7.31999H31.0095V5.95198C31.0095 5.06398 31.0335 4.70399 31.1535 4.43999C31.3215 4.03199 31.8735 3.71999 32.3775 3.71999C32.7855 3.71999 33.0975 3.81599 33.7215 4.10399V0.767986C33.0495 0.455986 32.6655 0.359985 32.0175 0.359985C30.6735 0.359985 29.3535 0.935985 28.3935 1.96798C27.4815 2.95198 27.1695 3.88799 27.1695 5.66399V7.31999H25.8015V10.512H27.1695V18.192H31.0095V10.512Z" fill="#001319"/>
              <path d="M40.1944 7.31999H36.3544V18.192H40.1944V7.31999ZM38.2744 0.983986C37.0984 0.983986 36.1144 1.94398 36.1144 3.11999C36.1144 4.34399 37.0744 5.30399 38.2744 5.30399C39.4744 5.30399 40.4344 4.34399 40.4344 3.14399C40.4344 1.94398 39.4744 0.983986 38.2744 0.983986Z" fill="#001319"/>
              <path d="M51.4877 7.58399C50.6237 7.15199 49.9037 6.98399 48.8957 6.98399C45.4397 6.98399 42.8477 9.47999 42.8477 12.84C42.8477 16.056 45.4637 18.552 48.7997 18.552C49.7597 18.552 50.5277 18.384 51.4877 17.952V14.688C50.8397 15.192 50.2397 15.408 49.4957 15.408C47.9837 15.408 46.8557 14.304 46.8557 12.792C46.8557 11.256 47.9597 10.152 49.4957 10.152C50.1917 10.152 50.7437 10.344 51.4877 10.848V7.58399Z" fill="#001319"/>
              <path d="M65.9265 13.464V13.08C65.9265 9.28799 63.6945 7.00799 59.9985 7.00799C56.2785 7.00799 53.9505 9.26399 53.9505 12.84C53.9505 16.344 56.3985 18.624 60.1665 18.624C62.1105 18.624 63.8145 17.952 64.7985 16.8C65.2545 16.272 65.4945 15.792 65.7585 14.88H62.0625C61.5825 15.648 61.0785 15.912 60.1665 15.912C58.6305 15.912 57.8625 15.12 57.8385 13.464H65.9265ZM57.9345 11.232C58.1265 10.128 58.9185 9.47999 60.0945 9.47999C61.2465 9.47999 62.0865 10.128 62.3505 11.232H57.9345Z" fill="#001319"/>
              <path d="M80.3329 10.512H82.5169V7.31999H80.3329V4.05598H76.4929V7.31999H75.2209V10.512H76.4929V18.192H80.3329V10.512Z" fill="#001319"/>
              <path d="M93.5828 7.31999V8.37599C92.6228 7.39199 91.5908 6.95999 90.1988 6.95999C87.1028 6.95999 84.7268 9.45599 84.7268 12.72C84.7268 16.008 87.1268 18.552 90.2228 18.552C91.6868 18.552 92.7428 18.072 93.5828 16.992V18.192H97.4228V7.31999H93.5828ZM91.2068 10.272C92.5988 10.272 93.7028 11.376 93.7028 12.744C93.7028 14.136 92.5988 15.24 91.2308 15.24C89.8388 15.24 88.7348 14.136 88.7348 12.72C88.7348 11.376 89.8628 10.272 91.2068 10.272Z" fill="#001319"/>
              <path d="M103.882 0.599985H100.042V18.192H103.882V13.776L108.106 18.192H113.506L107.722 12.336L113.17 7.31999H107.914L103.882 11.232V0.599985Z" fill="#001319"/>
              <path d="M122.798 7.31999V8.37599C121.838 7.39199 120.806 6.95999 119.414 6.95999C116.318 6.95999 113.942 9.45599 113.942 12.72C113.942 16.008 116.342 18.552 119.438 18.552C120.902 18.552 121.958 18.072 122.798 16.992V18.192H126.638V7.31999H122.798ZM120.422 10.272C121.814 10.272 122.918 11.376 122.918 12.744C122.918 14.136 121.814 15.24 120.446 15.24C119.054 15.24 117.95 14.136 117.95 12.72C117.95 11.376 119.078 10.272 120.422 10.272Z" fill="#001319"/>
              <path d="M129.737 7.31999V18.192H133.577V12.36C133.577 11.64 133.697 11.232 133.985 10.848C134.369 10.416 134.969 10.128 135.593 10.128C136.265 10.128 136.889 10.464 137.129 10.968C137.345 11.376 137.369 11.592 137.369 12.696V18.192H141.209V11.28C141.209 9.79199 140.969 9.04799 140.201 8.27999C139.433 7.46399 138.401 7.07999 137.057 7.07999C135.497 7.07999 134.609 7.48799 133.577 8.68799V7.31999H129.737Z" fill="#001319"/>
              <path d="M150.159 6.91199C148.407 6.91199 146.679 7.48799 145.599 8.42399C144.351 9.50399 143.631 11.064 143.631 12.648C143.631 16.152 146.295 18.6 150.111 18.6C153.999 18.6 156.711 16.2 156.711 12.744C156.711 9.33599 153.999 6.91199 150.159 6.91199ZM150.159 10.224C151.551 10.224 152.655 11.328 152.655 12.72C152.655 14.088 151.551 15.216 150.183 15.216C148.791 15.216 147.687 14.088 147.687 12.696C147.687 11.352 148.815 10.224 150.159 10.224Z" fill="#001319"/>
              <path d="M159.162 7.31999V18.192H163.002V13.536C163.002 11.52 163.89 10.488 165.69 10.488C166.338 10.488 166.698 10.56 167.322 10.872V7.19999C166.962 7.17599 166.818 7.17599 166.578 7.17599C164.922 7.17599 163.89 7.72799 163.002 9.09599V7.31999H159.162Z" fill="#001319"/>
              <path d="M173.829 7.31999H169.989V18.192H173.829V7.31999ZM171.909 0.983986C170.733 0.983986 169.749 1.94398 169.749 3.11999C169.749 4.34399 170.709 5.30399 171.909 5.30399C173.109 5.30399 174.069 4.34399 174.069 3.14399C174.069 1.94398 173.109 0.983986 171.909 0.983986Z" fill="#001319"/>
              <path d="M180.755 23.64V17.136C181.715 18.12 182.747 18.552 184.139 18.552C187.235 18.552 189.611 16.032 189.611 12.792C189.611 9.50399 187.211 6.95999 184.115 6.95999C182.651 6.95999 181.595 7.43999 180.755 8.51999V7.31999H176.915V23.64H180.755ZM183.107 10.272C184.499 10.272 185.603 11.376 185.603 12.792C185.603 14.112 184.475 15.24 183.131 15.24C181.763 15.24 180.635 14.136 180.635 12.744C180.635 11.376 181.739 10.272 183.107 10.272Z" fill="#001319"/>
            </svg>
          </h1>
        </a>
        <p className={cx(Styles.slash, Styles.spOnly)}>/</p>
        <div className={cx(Styles.menuWrapper, Styles.spOnly)}>
          <button className={Styles.button} role="button" onClick={() => toggle()}>
            {dir}
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 7.5L10 12.5L15 7.5" stroke="#525960" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
          </button>
          <nav ref={menu} className={cx(Styles.menu, { [Styles.open]: open })}>
            <a className={cx(Styles.menuItem, { [Styles.current]: dir === 'about' })} href="/">about</a>
            <a className={cx(Styles.menuItem, { [Styles.current]: dir === 'works' })} href="/works">works</a>
            <a className={cx(Styles.menuItem, Styles.navItemBlog)} href="https://blog.takanorip.com">
              blog
              <ExternalLink />
            </a>
          </nav>
        </div>
      </div>
      <nav className={cx(Styles.nav, { [Styles.open]: dir === 'about' })}>
        <a className={cx(Styles.navItem, { [Styles.active]: dir === 'about' })} href="/">about</a>
        <a className={cx(Styles.navItem, { [Styles.active]: dir === 'works' })} href="/works">works</a>
        <a className={cx(Styles.navItem, Styles.navItemBlog)} href="https://blog.takanorip.com">
          blog
          <ExternalLink />
        </a>
      </nav>
    </header>
  );
}
export default Header;
