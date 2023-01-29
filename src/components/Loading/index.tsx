import { useEffect, useRef } from 'react';
import styles from './styles.module.css';
import cx from 'classnames';

const Loading = () => {

  const ref = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      ref.current.style.display = 'none';
    }, 1100);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div ref={ref} className={cx(styles.loading)}>
      <svg className={styles.tree} width="600" height="600" viewBox="0 0 600 600" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M446.95 517.303C445.434 518.549 444.275 519.254 443.432 520.232C429.164 536.782 410.886 538.405 391.457 533.341C383.445 531.252 375.64 527.492 368.49 523.229C363.483 520.244 361.621 521.563 359.345 525.818C354.271 535.306 349.282 544.863 343.665 554.022C340.514 559.163 336.522 563.911 332.305 568.243C323.044 577.761 317.309 577.873 305.841 569.559C311.211 564.054 316.586 558.551 321.959 553.046C331.905 542.859 338.171 530.844 340.174 516.638C341.335 508.399 340.666 500.664 334.601 494.349C331.734 491.362 331.959 488.945 334.65 485.931C338.36 481.774 341.673 477.262 345.023 473.069C355.052 482.445 364.423 491.94 374.574 500.506C387.299 511.243 401.934 518.389 419.026 515.214C425.762 513.962 432.687 510.223 438.036 505.806C446.093 499.153 446.028 488.858 439.556 480.086C439.199 480.275 438.578 480.408 438.524 480.661C436.538 489.979 432.837 493.478 425.39 493.003C417.782 492.52 412.188 486.576 411.844 478.611C411.465 469.771 416.475 463.223 424.591 461.944C441.897 459.221 460.616 470.925 467.244 489.42C475.319 511.958 468.473 531.799 454.702 549.875C441.334 567.424 423.672 575.054 401.462 573.854C396.247 573.572 390.08 577.533 385.52 581.06C370.31 592.812 352.956 598.205 334.252 599.793C320.059 601.001 306.93 596.835 294.721 589.844C278.633 580.64 265.629 568.197 255.476 552.043C260.135 548.605 264.225 545.583 268.011 542.789C275.563 550.559 282.31 559.163 290.654 565.741C308.22 579.591 328.209 584.041 350.036 577.216C352.027 576.598 353.945 575.659 355.783 574.654C367.3 568.367 367.714 562.189 357.21 554.445C355.532 553.206 353.909 551.89 352.03 550.431C354.225 545.668 356.346 541.072 358.703 535.965C365.227 539.522 371.643 543.102 378.13 546.544C391.108 553.432 405.012 554.551 419.057 551.668C434.018 548.596 442.595 538.191 447.183 524.106C447.534 523.022 447.53 521.791 447.526 520.63C447.522 519.78 447.245 518.928 446.95 517.303Z" fill="currentColor"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M295.337 518.833C278.44 530.565 262.301 541.765 246.173 552.981C244.258 554.313 242.249 555.572 240.571 557.172C235.042 562.446 234.717 568.024 241.258 571.657C248.418 575.631 256.556 578.53 264.611 579.998C271.139 581.183 277.115 581.84 282.121 586.877C285.183 589.957 289.353 591.936 293.065 594.432C285.64 599.844 266.981 601.091 253.187 598.188C237.659 594.915 223.557 588.666 211.195 578.292C207.798 575.442 202.327 573.477 197.92 573.676C153.306 575.707 127.878 536.88 129.964 503.575C131.129 484.966 147.897 459.754 171.886 461.914C182.092 462.836 189.092 469.318 188.513 478.126C187.989 486.139 182.377 492.527 175.321 493.147C167.505 493.833 163.77 490.336 161.305 479.596C156.513 485.051 155.664 490.944 157.628 497.317C161.544 510.021 174.195 517.501 189.366 516.145C206.284 514.634 219.775 506.221 231.716 494.782C248.291 478.902 264.84 462.996 281.417 447.115C282.744 445.843 284.177 444.682 286.242 442.87C290.419 449.138 294.367 455.064 299.311 462.488C289.659 471.649 279.705 480.224 270.859 489.829C265.753 495.375 259.68 502.283 258.947 509.106C257.809 519.698 250.429 522.552 243.782 528.233C240.355 519.573 235.521 521.905 229.857 525.126C218.539 531.562 206.32 535.004 193.182 535.734C179.932 536.472 168.789 532.521 159.548 523.124C157.768 521.312 156.434 519.057 154.891 517.007L152.157 518.394C153.121 522.332 153.485 526.546 155.153 530.159C162.464 546.008 177.847 554.57 195.776 553.059C211.757 551.714 226.123 546.267 239.063 536.567C253.071 526.067 267.496 516.131 281.805 505.9C286.479 510.365 290.666 514.369 295.337 518.833Z" fill="currentColor"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M563.662 313.127C564.144 313.618 564.385 313.757 564.456 313.956C571.156 332.829 571.241 332.834 552.307 337.06C539.072 340.015 526.74 335.886 517.015 327.366C505.126 316.951 494.653 304.902 483.74 293.395C481.21 290.727 479.374 287.397 476.967 284.018C471.57 287.853 466.504 291.457 461.077 295.314C463.783 299.205 467.443 302.768 469.009 307.089C471.905 315.075 474.954 323.43 475.434 331.776C476.198 345.058 464.872 355.904 450.675 357.647C438.464 359.144 426.653 350.932 423.124 338.496C420.854 330.493 423.922 322.545 430.434 320.201C435.828 318.257 441.255 318.093 445.171 323.092C449.036 328.021 448.997 333.443 445.617 338.757C445.008 339.713 444.271 340.585 443.606 341.478C448.145 345.443 453.356 344.457 456.715 339.01C460.319 333.161 459.156 327.125 456.223 321.595C449.657 309.224 438.713 302.417 425.534 298.995C399.057 292.12 375.112 300.17 352.792 313.278C339.681 320.978 328.048 331.215 315.456 340.531C312.092 336.556 307.9 331.596 303.301 326.159C336.265 290.095 376.207 272.529 425.26 279.405C449.653 282.824 465.3 275.848 477.162 254.358C477.955 252.924 478.529 251.308 479.571 250.097C480.521 248.992 482.145 247.469 483.156 247.676C484.328 247.917 485.549 249.703 486.043 251.073C486.826 253.246 486.903 255.666 487.493 257.923C493.905 282.441 508.056 301.281 529.471 314.577C541.496 322.047 550.938 321.49 563.662 313.127Z" fill="currentColor"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M139.477 296.258C134.021 292.31 129.16 288.79 123.805 284.914C115.667 294.948 107.546 304.959 98.5653 316.033C97.6338 307.74 96.768 301.332 96.2897 294.894C96.1682 293.261 96.8895 291.255 97.8768 289.897C105.874 278.93 110.98 266.795 113.476 253.449C113.848 251.453 115.721 249.737 116.899 247.892C118.451 249.414 120.443 250.684 121.479 252.502C128.626 265.04 139.342 273.792 152.328 278.931C158.094 281.213 165.505 280.529 171.952 279.635C188.804 277.299 205.423 277.635 222.166 280.599C229.39 281.878 232.809 285.426 232.992 292.475C233.098 296.581 233.011 300.691 233.011 303.736C220.484 301.525 208.553 298.604 196.454 297.479C178.774 295.835 162.792 300.509 149.888 313.641C143.492 320.15 139.558 330.88 142.794 337.037C144.346 339.993 147.746 342.13 150.666 344.112C151.501 344.679 153.853 343.745 154.974 342.837C155.548 342.371 155.427 340.088 154.796 339.235C150.365 333.232 151.321 327.681 156.407 322.941C160.364 319.25 164.998 317.428 170.357 320.939C175.934 324.597 178.641 331.178 176.985 338.003C174.509 348.217 165.025 356.632 154.754 357.731C143.852 358.898 132.189 352.73 127.7 342.605C120.808 327.06 125.918 313.444 135.431 300.801C136.546 299.321 137.897 298.02 139.477 296.258Z" fill="currentColor"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M259.932 373.868C255.907 380.418 252.253 386.362 248.253 392.872C235.549 384.171 223.444 375.558 214.427 363.321C213.185 361.636 212.109 359.791 211.214 357.898C206.775 348.526 207.839 343.775 216.733 338.662C232.888 329.371 240.499 315.954 237.871 297.261C236.959 290.786 235.769 284.319 234.213 277.971C229.415 258.39 219.072 243.042 200.669 233.581C192.832 229.55 185.543 224.453 176.803 219.105C188.355 214.137 197.518 211.032 208.989 217.182C247.656 237.923 263.559 280.85 260.406 318.278C259.762 325.905 254.881 333.609 250.581 340.403C241.606 354.58 241.479 356.553 253.886 368.189C255.747 369.936 257.606 371.682 259.932 373.868Z" fill="currentColor"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M262.7 222.107C267.026 230.427 270.786 238.069 274.917 245.507C281.47 257.307 288.14 269.046 295.028 280.651C298.145 285.903 302.314 286.486 305.851 281.045C310.789 273.447 316.183 265.969 319.838 257.751C327.979 239.449 336.671 221.678 351.666 207.849C369.066 191.797 394.797 187.69 418.467 198.516C410.788 202.326 404.567 207.76 397.966 208.274C371.936 210.305 355.5 224.329 344.699 246.884C337.556 261.802 331.09 277.153 322.58 291.255C317.923 298.973 309.831 304.706 302.837 310.815C301.606 311.89 297.331 311.302 295.842 309.954C282.738 298.103 271.274 284.937 264.951 268.023C263.475 264.08 262.781 259.502 260.299 256.343C251.116 244.651 256.576 234.157 262.7 222.107Z" fill="currentColor"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M313.917 164.031C335.323 190.059 327.179 241.562 299.863 263.514C291.364 256.008 285.643 246.479 281.059 236.231C264.081 198.252 277.26 159.892 313.317 142.042C315.198 141.111 317.093 140.119 319.093 139.544C335.161 134.9 335.758 133.36 337.862 153.064C313.321 156.235 297.603 170.45 290.786 193.889C286.566 208.392 290.182 221.998 299.737 234.749C306.242 229.763 308.028 222.9 309.281 216.245C311.402 204.986 310.835 193.655 305.095 183.441C302.657 179.105 303.072 176.365 306.36 173.099C309.005 170.468 311.181 167.359 313.917 164.031" fill="currentColor"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M520.086 120.551C514.848 118.723 509.416 117.361 504.56 114.872C502.543 113.837 501.467 110.509 500.457 108.026C488.527 78.6598 456.913 61.055 427.502 67.4971C410.05 71.3191 401.97 85.8304 407.734 103.031C411.247 113.52 418.24 121.127 427.541 126.762C430.082 128.302 432.74 129.65 435.376 131.105C427.163 143.864 422.835 144.865 410.848 137.242C392.488 125.567 382.568 95.9246 390.224 75.603C396.019 60.2144 413.322 48.5088 432.127 49.0788C476.463 50.4275 506.973 74.3779 520.586 118.741C520.695 119.098 520.366 119.589 520.086 120.551Z" fill="currentColor"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M505.852 324.757C511.726 328.382 517.532 331.75 523.047 335.545C524.247 336.372 524.511 338.7 525.009 340.395C527.695 349.573 530.285 358.777 532.977 367.951C534.061 371.643 536.087 372.244 539.89 370.913C569.559 360.516 580.065 334.867 564.412 307.689C558.183 296.877 549.615 287.275 541.225 277.919C537.597 273.875 537.231 271.168 540.133 267.251C542.472 264.094 544.786 260.919 547.612 257.074C562.925 274.229 577.786 290.738 585.428 312.143C594.478 337.491 584.46 363.54 559.25 378.895C550.774 384.056 541.146 387.478 531.727 390.804C529.359 391.639 524.5 389.969 522.966 387.859C512.717 373.759 504.728 343.28 505.852 324.757Z" fill="currentColor"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9464 320.484C19.8318 328.362 27.6419 334.835 31.1902 345.58C35.7008 359.245 47.8519 366.298 61.2159 370.875C66.8469 372.804 67.0532 368.253 68.0927 365.401C77.837 338.647 80.0277 311.586 69.8417 284.461C67.6877 278.722 67.5913 274.6 72.5377 270.458C75.7061 267.803 78.107 264.224 81.4162 260.408C88.8696 278.666 93.9278 296.912 94.5025 316.084C95.2122 339.847 90.5338 362.532 79.4781 383.823C76.0802 390.364 71.9495 392.513 64.824 390.256C38.7555 382.007 18.6805 367.78 12.7506 339.086C12.093 335.909 12.1084 332.58 11.9715 329.312C11.85 326.373 11.9464 323.427 11.9464 320.484Z" fill="currentColor"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M163.944 57.7996C161.612 61.7859 159.572 66.0001 156.799 69.6521C155.669 71.14 153.006 71.9225 150.938 72.1641C117.222 76.1059 92.3682 104.559 94.5917 136.839C96.0939 158.674 109.728 172.225 131.361 173.39C132.514 173.454 133.662 173.558 134.693 173.635C137.146 179.374 139.485 184.85 141.848 190.372C113.226 197.945 80.547 175.332 76.6188 145.635C71.2018 104.667 93.479 72.9003 136.39 61.0419C145.086 58.6382 154.167 57.6315 163.07 55.9814C163.363 56.5881 163.654 57.1929 163.944 57.7996Z" fill="currentColor"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M317.725 430.536C313.49 424.914 309.467 420.297 306.378 415.121C305.151 413.067 304.812 408.856 306.094 407.208C311.232 400.606 316.828 394.272 322.877 388.494C332.014 379.77 341.99 371.92 351.007 363.079C357.924 356.297 357.645 352.736 352.309 344.518C348.383 338.47 344.647 332.293 340.1 325.006C347.386 320.579 354.035 316.541 361.905 311.765C365.854 326.55 376.262 334.403 387.688 341.699C390.06 343.216 391.55 349.156 390.615 352.176C388.87 357.802 385.788 363.435 381.901 367.871C376.698 373.807 370.55 379.079 364.196 383.807C346.541 396.944 328.42 409.494 317.725 430.536Z" fill="currentColor"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M234.609 218.331C205.747 201.837 168.148 209.914 152.084 236.794C158.234 239.545 164.014 243.609 170.277 244.606C180.747 246.272 191.766 247.574 202.104 246.017C210.676 244.728 215.337 247.211 219.529 253.514C220.671 255.232 221.822 256.942 223.457 259.384C211.38 263.861 199.408 264.885 187.349 264.534C168.536 263.983 151.676 257.614 137.12 245.657C128.079 238.228 127.906 235.673 135.315 226.744C150.511 208.434 170.64 198.883 193.54 194.495C206.574 191.996 219.452 191.994 232.236 196.439C237.851 198.39 239.496 201.495 237.774 206.956C236.654 210.509 235.766 214.138 234.609 218.331Z" fill="currentColor"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M519.445 253.269C509.614 239.349 503.663 223.535 501.044 206.508C498.605 190.648 499.521 190.072 515.92 188.775C539.026 186.944 557.692 195.685 572.176 213.097C595.491 241.12 600.921 272.597 588.568 307.146C581.033 299.954 577.716 290.598 579.46 281.712C585.586 250.482 565.695 215.595 537.071 208.388C531.477 206.979 525.223 208.198 519.274 208.206C520.271 213.508 521.248 218.818 522.286 224.115C522.419 224.783 522.751 225.479 523.175 226.016C531.201 236.153 528.806 245.07 519.445 253.269Z" fill="currentColor"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M348.674 18.3752C344.661 20.2205 340.752 22.3808 336.585 23.7662C334.761 24.373 332.069 24.0213 330.349 23.0648C302.712 7.68013 273.958 11.6278 251.422 34.0865C237.83 47.6336 237.697 59.9866 251.179 73.6573C254.781 77.3113 258.775 80.5749 262.962 84.3563C260.547 88.4701 258.092 92.6477 255.651 96.804C220.833 82.5921 211.249 45.9119 238.525 21.2466C263.305 -1.16191 292.598 -4.72501 323.734 5.32857C332.506 8.1632 340.754 12.6229 349.241 16.3386C349.052 17.0188 348.863 17.697 348.674 18.3752Z" fill="currentColor"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M98.1755 132.288C96.7889 119.01 99.5369 113.942 111.52 111.853C126.656 109.217 141.989 107.704 157.255 105.87C169.768 104.365 181.296 100.267 191.775 93.276C193.445 92.163 194.859 90.6636 197.381 88.4898C192.117 83.9142 187.463 79.8699 182.625 75.6653C182.625 75.6499 182.502 75.1301 182.694 74.8016C191.793 59.4305 194.556 59.044 207.49 71.6849C210.319 74.45 212.899 77.5261 215.281 80.6931C221.996 89.624 221.959 91.5369 213.742 99.5017C198.097 114.666 178.309 120.855 157.511 123.9C142.757 126.063 127.765 126.567 112.938 128.289C107.935 128.866 103.101 130.911 98.1755 132.288Z" fill="currentColor"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M341.511 211.497C341.511 202.408 341.538 194.76 341.508 187.116C341.448 173.333 341.697 159.536 341.16 145.773C340.771 135.771 334.999 128.087 326.238 124.413C313.86 119.225 300.783 115.699 287.984 111.533C286.04 110.899 283.973 110.648 280.712 109.952C283.271 105.048 285.309 100.732 287.785 96.6853C288.397 95.6902 290.578 94.9057 291.798 95.1608C303.192 97.5606 314.745 99.518 325.843 102.932C347.69 109.651 359.691 125.036 360.431 147.898C360.906 162.556 359.693 177.29 358.696 191.954C358.507 194.756 356.206 197.774 354.141 200.004C350.685 203.733 346.631 206.908 341.511 211.497Z" fill="currentColor"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M35.0415 307.402C33.1748 304.017 30.3709 299.71 28.4482 295.04C27.7829 293.418 28.6797 290.385 29.9196 288.866C41.01 275.317 51.9673 261.621 63.7037 248.646C73.9148 237.361 80.0896 224.608 82.8029 208.777H62.4792C62.053 208.062 61.5034 207.525 61.3973 206.91C58.4468 189.485 58.7592 188.927 76.7418 188.737C82.5001 188.679 88.3162 189.7 94.0321 190.673C100.988 191.86 102.6 196.267 101.541 202.996C96.8032 233.18 82.0411 257.577 60.2673 278.501C51.2654 287.154 43.7349 297.341 35.0415 307.402Z" fill="currentColor"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M352.069 42.2453C357.722 40.3208 362.948 38.5412 368.617 36.6089C375.839 48.5039 377.12 61.1119 376.175 74.0638C376.07 75.4628 373.284 77.5825 371.541 77.8105C349.13 80.7321 327.175 79.3003 306.479 69.2815C299.34 65.8266 292.624 61.5061 285.643 57.7111C274.242 51.5163 262.783 45.4258 251.051 39.1324C253.866 36.5799 257.255 33.0265 261.165 30.2015C262.658 29.1233 265.734 28.8895 267.435 29.6818C280.731 35.8573 294.301 41.6328 306.931 49.0024C319.699 56.4513 332.704 61.9756 347.539 63.0403C356.242 63.6625 357.895 62.2249 355.924 53.8601C355.074 50.2449 353.599 46.7784 352.069 42.2453Z" fill="currentColor"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M493.176 159.421C496.84 152.565 499.771 147.082 503.277 140.523C507.992 142.319 513.276 144.332 518.83 146.446C516.57 160.003 509.957 170.499 500.44 179.13C499.065 180.376 494.831 179.909 492.777 178.73C474.222 168.097 461.567 152.105 453.26 132.684C448.396 121.319 444.684 109.462 440.069 97.9788C436.446 88.9571 432.236 80.1691 428.073 70.8015C432.327 70.4827 436.795 69.445 441.005 70.0943C443.654 70.5001 447.083 72.9115 448.159 75.3211C453.958 88.3136 459.622 101.412 464.396 114.813C470.317 131.426 479.174 145.856 493.176 159.421Z" fill="currentColor"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M296.204 147.794C291.076 153.21 286.45 158.099 281.779 163.03C256.897 147.371 232.168 152.988 207.805 164.224C197.648 168.908 188.113 174.947 178.271 180.32C176.242 181.429 174.096 182.322 171.085 183.746C167.957 178.807 164.909 174 160.977 167.801C182.689 157.396 202.812 145.676 224.368 137.986C247.534 129.722 271.375 131.132 292.981 145.36C293.94 145.991 294.819 146.743 296.204 147.794Z" fill="currentColor"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M432.13 220.209C436.171 216.602 440.31 212.903 444.975 208.737C456.287 213.949 464.251 223.27 470.929 233.72C471.774 235.04 470.052 239.041 468.42 240.748C456.158 253.582 440.875 260.638 423.415 262.83C396.76 266.178 372.954 260.25 352.783 240.029C356.468 235.115 360.01 230.396 363.651 225.544C385.392 248.511 410.471 251.149 438.063 241.035C440.46 240.158 442.691 238.815 444.975 237.646C448.843 235.664 448.658 232.997 445.696 230.545C441.394 226.984 436.819 223.753 432.13 220.209Z" fill="currentColor"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M72.5798 315.738C72.5798 318.942 72.5953 321.508 72.5779 324.07C72.5027 335.53 71.6407 336.493 60.126 338.023C38.7841 340.862 19.3591 328.789 10.8895 306.682C-1.09379 275.398 6.04525 246.957 24.7452 220.533C27.283 216.947 30.2779 213.679 33.2303 210.058C38.1863 222.324 37.9067 224.653 31.0839 234.946C17.7142 255.132 16.5648 276.65 25.4221 298.632C33.6661 319.085 47.4177 323.908 72.5798 315.738Z" fill="currentColor"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M283.4 348.145C288.732 354.59 293.157 359.94 297.431 365.105C291.221 374.347 285.016 382.862 279.574 391.84C269.12 409.076 264.713 427.649 269.162 447.719C269.96 451.325 269.49 453.736 266.24 455.997C262.829 458.374 259.985 461.571 256.299 464.957C246.241 450.02 242.698 433.666 246.233 416.805C248.578 405.609 253.592 394.628 259.204 384.551C266.107 372.152 274.876 360.792 283.4 348.145Z" fill="currentColor"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M71.8677 125.893C72.5446 133.323 73.2813 140.227 73.7113 147.15C73.8019 148.59 73.1328 150.443 72.1666 151.523C53.7733 172.123 53.1793 195.735 60.3203 220.695C61.0917 223.388 61.8958 226.074 62.7231 228.75C67.0775 242.811 66.7805 243.656 54.2785 252.378C31.2222 217.897 27.9304 157.171 71.8677 125.893Z" fill="currentColor"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M563.058 198.294C556.927 195.233 551.605 192.905 546.678 189.919C545.066 188.942 543.641 186.289 543.563 184.345C542.649 161.461 525.052 141.091 496.83 135.437C494.08 134.886 491.332 134.287 488.551 133.953C475.938 132.43 473.218 129.907 469.842 115.529C494.46 111.956 515.536 120.522 534.486 134.432C555.458 149.823 564.253 171.549 563.058 198.294Z" fill="currentColor"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M372.42 229.982C383.196 223.569 392.117 218.103 401.191 212.901C413.427 205.889 425.616 198.614 433.627 186.699C437.528 180.895 439.368 173.701 442.147 167.141C442.752 165.711 443.026 163.904 444.069 162.942C448.159 159.182 452.495 155.69 457.026 151.856C462.922 162.152 462.092 172.379 458.041 182.497C453.069 194.919 445.427 205.576 434.188 212.99C421.131 221.604 407.74 229.722 394.283 237.706C392.304 238.879 388.826 238.977 386.662 238.075C382.228 236.23 378.217 233.368 372.42 229.982Z" fill="currentColor"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M428.355 45.3154C422.373 46.9617 417.056 48.6621 411.618 49.7712C410.104 50.0804 407.738 49.1162 406.608 47.9298C393.41 34.0812 377.415 30.6495 359.818 36.4386C349.501 39.8317 339.383 44.4749 330.068 50.0553C323.992 53.6957 319.666 53.6377 314.554 49.5626C312.578 47.9858 310.339 46.7337 308.183 45.3096C328.853 22.1302 371.25 11.6225 399.54 22.4722C411.454 27.0401 422.006 35.3391 428.355 45.3154Z" fill="currentColor"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M304.121 488.492C311.547 478.473 318.807 469.861 324.712 460.397C331.448 449.597 333.822 437.258 332.03 424.613C331.292 419.408 332.825 416.189 336.495 413.13C340.776 409.555 344.881 405.764 349.128 402.006C364.188 425.887 350.628 467.968 317.454 500.35C312.93 496.327 308.346 492.248 304.121 488.492Z" fill="currentColor"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M145.024 102.929C151.043 90.5203 155.858 79.1509 161.9 68.481C170.614 53.0925 181.105 39.0083 196.642 29.6098C207.875 22.814 219.882 19.0481 233.836 19.9814C229.989 25.8767 226.5 31.2793 222.923 36.62C222.468 37.2944 221.571 38.0054 220.811 38.0885C207.771 39.5377 199.153 48.3179 191.844 57.5831C182.921 68.8906 174.855 81.1141 168.184 93.8728C164.673 100.595 161.128 103.546 154.018 102.958C151.764 102.769 149.477 102.929 145.024 102.929Z" fill="currentColor"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M266.957 301.521C295.148 320.013 314.404 345.84 334.235 372.171C328.39 377.011 323.037 381.446 317.396 386.118C309.257 374.969 301.674 363.812 293.284 353.304C284.835 342.723 275.585 332.784 266.687 322.566C265.892 323.416 265.1 324.268 264.307 325.12C265.156 317.55 266.008 309.975 266.957 301.521Z" fill="currentColor"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M445.567 126.69C447.085 129.688 448.321 132.197 449.615 134.674C455.531 146.005 455.599 146.061 446.68 155.117C433.528 168.473 417.935 171.656 400.351 165.851C389.519 162.274 378.703 158.632 367.967 154.766C366.648 154.29 365.238 152.371 364.984 150.924C364.134 146.107 363.79 141.197 363.158 135.46C372.908 134.747 381.497 138.057 390.065 141.487C395.679 143.736 401.19 146.296 406.921 148.2C417.339 151.658 426.265 148.843 433.522 140.729C437.543 136.231 441.388 131.574 445.567 126.69Z" fill="currentColor"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M524.323 305.971C523.411 305.73 523.139 305.737 522.983 305.606C505.392 290.741 507.181 295.68 513.902 274.58C515.726 268.854 518.437 263.243 521.665 258.169C530.573 244.158 539.871 230.416 541.354 212.612C543.412 213.464 544.693 213.85 545.83 214.49C559.443 222.122 560.746 226.068 553.667 239.959C551.025 245.145 548.187 250.351 544.66 254.95C533.111 270 527.393 287.278 524.323 305.971Z" fill="currentColor"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M265.154 159.135C262.618 188.877 265.177 218.315 246.273 244.013C241.959 239.242 238.461 235.536 235.192 231.636C234.459 230.765 233.877 228.898 234.309 228.035C244.952 206.754 243.671 183.563 245.224 160.828C245.268 160.152 245.453 159.483 245.768 157.705C251.831 158.152 257.934 158.604 265.154 159.135Z" fill="currentColor"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M283.901 393.282C292.575 405.217 300.21 415.491 307.579 425.952C312.423 432.831 316.714 440.098 321.579 446.962C324.265 450.751 324.389 454.012 321.801 457.817C318.683 462.402 315.894 467.212 312.795 472.193C300.227 453.97 288.134 436.537 276.238 418.973C275.26 417.529 274.895 414.907 275.489 413.29C277.73 407.186 280.484 401.272 283.901 393.282Z" fill="currentColor"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M248.405 129.056C252.784 101.871 268.64 81.6207 286.757 62.1647C292.055 65.0516 297.119 67.8128 302.7 70.8522C286.507 88.1865 275.27 108.033 269.162 130.723C262.052 130.151 255.386 129.618 248.405 129.056Z" fill="currentColor"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M158.289 127.834C152.095 153.86 154.644 176.831 176.349 194.979C173.057 196.372 170.583 197.41 168.116 198.463C157.498 202.998 157.529 202.975 150.203 193.385C136.328 175.229 134.687 154.782 139.063 133.27C139.356 131.836 141.045 129.848 142.353 129.612C147.326 128.713 152.411 128.433 158.289 127.834Z" fill="currentColor"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M330.439 534.088C307.68 524.742 290.224 510.043 274.09 491.563C278.692 487.18 283.065 483.014 286.486 479.759C302.469 492.214 317.906 504.154 333.175 516.304C334.411 517.289 335.326 519.925 334.955 521.444C333.976 525.472 332.213 529.308 330.439 534.088Z" fill="currentColor"/>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M371.507 258.496C370.99 278.189 357.412 284.162 341.594 288.916C343.779 274.769 348.488 261.846 355.675 249.358C361.346 252.631 366.717 255.732 371.507 258.496Z" fill="currentColor"/>
      </svg>
    </div>
  );
}

export default Loading;
