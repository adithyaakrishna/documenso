import { SVGAttributes } from 'react';

export type LogoProps = SVGAttributes<SVGSVGElement>;

export const Logo = ({ ...props }: LogoProps) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 2248 320"
      {...props}
      aria-labelledby="logoTitle logoDesc"
      role="img"
    >
      <title id="logoTitle">Documenso</title>
      <desc id="logoDesc">The open source DocuSign alternative</desc>
      <path
        fill="currentColor"
        d="M529.4 276h-82.5V43.3H530c23.4 0 43.5 4.6 60.4 14a94.3 94.3 0 0 1 39 39.8 131.7 131.7 0 0 1 13.8 62.3c0 24.3-4.6 45-13.8 62.5a94.5 94.5 0 0 1-39.2 40.1c-17 9.3-37.3 14-61 14ZM496 233.8h31.2a79 79 0 0 0 36.8-7.7 49.7 49.7 0 0 0 22.5-24.2c5-11 7.6-25.1 7.6-42.5 0-17.2-2.6-31.2-7.6-42.2a49 49 0 0 0-22.4-24 79 79 0 0 0-36.7-7.8H496v148.4Zm255 45.6c-17.7 0-33-3.7-45.8-11.2a77 77 0 0 1-29.7-31.6c-7-13.6-10.4-29.3-10.4-47.2 0-18 3.5-33.8 10.4-47.3a76 76 0 0 1 29.7-31.6A88.7 88.7 0 0 1 751 99.2a89 89 0 0 1 45.7 11.3 75.9 75.9 0 0 1 29.7 31.6c7 13.5 10.5 29.3 10.5 47.3 0 17.9-3.5 33.6-10.5 47.2-7 13.5-16.8 24-29.7 31.6a88.8 88.8 0 0 1-45.7 11.2Zm.2-37.5a30 30 0 0 0 20.1-6.8c5.4-4.6 9.5-11 12.2-18.9 2.8-8 4.2-17 4.2-27.1 0-10.2-1.4-19.2-4.2-27.2-2.7-8-6.8-14.2-12.2-18.9-5.3-4.6-12-6.9-20-6.9-8.2 0-15 2.3-20.5 7a42.2 42.2 0 0 0-12.4 18.8c-2.7 8-4.1 17-4.1 27.2 0 10.1 1.4 19.2 4 27.1a43 43 0 0 0 12.5 18.9 31.2 31.2 0 0 0 20.4 6.8Zm189.4 37.5a89.4 89.4 0 0 1-46.2-11.4 76.8 76.8 0 0 1-29.5-31.8 102.9 102.9 0 0 1-10.2-46.8 102 102 0 0 1 10.3-47 76.8 76.8 0 0 1 29.7-31.7 87.4 87.4 0 0 1 45.6-11.5 91 91 0 0 1 40 8.3 66.9 66.9 0 0 1 27.2 23.3 68.5 68.5 0 0 1 11 35.2h-45.7a35.3 35.3 0 0 0-10.2-21 29 29 0 0 0-21.5-8c-7.5 0-14 2-19.6 6a39 39 0 0 0-13 17.7 77 77 0 0 0-4.6 28 79 79 0 0 0 4.5 28.4 39.4 39.4 0 0 0 13 17.9c5.7 4 12.2 6.1 19.7 6.1a32 32 0 0 0 15-3.4c4.4-2.3 8-5.6 11-9.9 3-4.4 4.8-9.6 5.7-15.8h45.7a71.3 71.3 0 0 1-10.9 35.3 66 66 0 0 1-26.7 23.6 89.2 89.2 0 0 1-40.3 8.5Zm214.2-77.7V101.5h48.4V276h-46.5v-31.7h-1.8a51.5 51.5 0 0 1-19.7 24.7c-9 6.2-20.1 9.3-33.3 9.3a54.7 54.7 0 0 1-51.6-30.6 78 78 0 0 1-7.4-35.1V101.5h48.4V204c0 10.3 2.8 18.4 8.3 24.4a28 28 0 0 0 21.9 9 32 32 0 0 0 28.6-16 36.9 36.9 0 0 0 4.7-19.7Zm80.5 74.3V101.5h46v30.8h2.1a48.4 48.4 0 0 1 18.2-24.3 52 52 0 0 1 30.5-8.8c12 0 22.1 3 30.5 9 8.5 5.9 14 13.9 16.9 24h1.8c3.5-10 10-18 19.3-24 9.4-6 20.5-9 33.3-9a53 53 0 0 1 39.6 15.5c10.3 10.4 15.4 25 15.4 44V276h-48.3V168.2c0-9.7-2.6-17-7.7-21.9a27 27 0 0 0-19.4-7.2 26 26 0 0 0-20.5 8.4c-5 5.5-7.4 12.8-7.4 22V276h-47V167.1c0-8.5-2.4-15.3-7.3-20.4-4.9-5-11.3-7.6-19.2-7.6a27 27 0 0 0-14.6 4 28 28 0 0 0-10 11.3 35.8 35.8 0 0 0-3.8 16.8V276h-48.5Zm364.7 3.4c-18 0-33.4-3.6-46.4-10.9a74.8 74.8 0 0 1-29.7-31.1 103 103 0 0 1-10.5-47.9c0-18 3.5-33.7 10.5-47.3a77.3 77.3 0 0 1 29.4-31.7 86 86 0 0 1 44.8-11.3 91 91 0 0 1 32.1 5.5A71.3 71.3 0 0 1 1674 149c4.1 11 6.2 24 6.2 38.8v13.3h-147.4v-30h101.8a37 37 0 0 0-4.5-18.5c-3-5.4-7.2-9.6-12.6-12.6a36 36 0 0 0-18.5-4.7 35.9 35.9 0 0 0-32.7 18.6 38.1 38.1 0 0 0-5 18.8v28.5a49 49 0 0 0 4.8 22.4 35 35 0 0 0 13.8 14.6c5.9 3.4 12.9 5 21 5 5.4 0 10.3-.7 14.8-2.2a29.6 29.6 0 0 0 18.8-18l44.7 3a61 61 0 0 1-14 28.2c-7 8-16 14.1-27 18.6a102 102 0 0 1-38 6.6Zm153.5-104.3V276H1705V101.5h46.2v30.8h2a48.7 48.7 0 0 1 19.5-24.1c9-6 20-9 33-9 12.1 0 22.7 2.6 31.7 8a54 54 0 0 1 21 22.7 76 76 0 0 1 7.5 35V276h-48.4V173.5a35 35 0 0 0-8.1-25c-5.6-6-13.2-9-22.9-9-6.5 0-12.3 1.3-17.3 4.1-4.9 2.8-8.7 7-11.5 12.3a42.5 42.5 0 0 0-4.3 19.2Zm289.2-23.9-44.4 2.8a23 23 0 0 0-4.8-10.3 26 26 0 0 0-10-7.4c-4-1.9-8.8-2.8-14.3-2.8-7.5 0-13.9 1.6-19 4.8-5.2 3-7.8 7.2-7.8 12.5 0 4.1 1.7 7.7 5 10.5 3.4 3 9 5.2 17.2 7l31.6 6.3c17 3.5 29.6 9.1 38 16.9a39.6 39.6 0 0 1 12.5 30.4c0 11.4-3.4 21.5-10.2 30.1a65.6 65.6 0 0 1-27.5 20.3c-11.6 4.7-25 7.1-40 7.1-23.2 0-41.6-4.8-55.3-14.4a56.3 56.3 0 0 1-24-39.6l47.6-2.5a25 25 0 0 0 10.5 16.2 38 38 0 0 0 21.2 5.4c8.5 0 15.3-1.6 20.5-4.9 5.2-3.3 7.9-7.6 8-12.8-.1-4.4-2-8-5.6-10.8a40 40 0 0 0-16.8-6.6l-30.3-6c-17-3.4-29.7-9.3-38-17.7a44 44 0 0 1-12.4-32.2 47 47 0 0 1 9-29 58.5 58.5 0 0 1 25.9-18.7c11.1-4.4 24.1-6.6 39-6.6 22.1 0 39.4 4.6 52.1 14a54 54 0 0 1 22.3 38Zm106.6 128.2a89.6 89.6 0 0 1-45.8-11.2 77 77 0 0 1-29.6-31.6c-7-13.6-10.5-29.3-10.5-47.2 0-18 3.5-33.8 10.5-47.3s16.8-24 29.6-31.6a88.7 88.7 0 0 1 45.8-11.3c17.7 0 32.9 3.8 45.7 11.3a75.8 75.8 0 0 1 29.8 31.6c7 13.5 10.4 29.3 10.4 47.3 0 17.9-3.4 33.6-10.4 47.2-7 13.5-17 24-29.8 31.6a88.8 88.8 0 0 1-45.7 11.2Zm.3-37.5a30 30 0 0 0 20-6.8c5.5-4.6 9.5-11 12.2-18.9 2.8-8 4.2-17 4.2-27.1 0-10.2-1.4-19.2-4.2-27.2a43 43 0 0 0-12.1-18.9 30 30 0 0 0-20.1-6.9c-8.2 0-15 2.3-20.5 7a42.2 42.2 0 0 0-12.4 18.8c-2.7 8-4 17-4 27.2a84 84 0 0 0 4 27.1c2.8 8 7 14.3 12.4 18.9a31.2 31.2 0 0 0 20.5 6.8ZM132.6 33.4c-4.1 3.8-8.7 8.1-13.9 13.3-3.2 2.5-7.3 4-11.5 4l-17.4.4 5-5C125.7 15.2 141 0 160 0s34.4 15.3 65.1 46l5 5.1-16.7-.3c-4.7-.1-9.3-2-12.7-5.1l-10.1-9.3-2.8-2.6-.5-.5c-3.5-3.2-6.6-5.8-9.6-8-8.5-6.6-13.5-8-17.7-8-4.2 0-9.2 1.4-17.7 8-3 2.2-6.2 5-9.7 8v.1Zm153.6 98.8-2.5-2.8-9.4-10c-3.2-3.5-5-8-5-12.8l-.4-16.8 5 5C304.8 125.7 320 141 320 160s-15.3 34.4-46 65.1l-5.1 5 .3-16.7c.1-4.7 2-9.3 5.1-12.7l9.4-10.1 2.5-2.8.5-.5c3.2-3.5 5.8-6.6 8-9.6 6.6-8.5 8-13.5 8-17.7 0-4.2-1.4-9.2-8-17.7-2.2-3-4.8-6.1-8-9.5l-.5-.6Zm-98.6 154.2 3.2-3 9.9-9c3.4-3.3 8-5 12.7-5.2l16.8-.3-5 5C194.3 304.8 179 320 160 320s-34.4-15.3-65.1-46l-5-5.1 16.8.3c4.7.1 9.2 2 12.6 5.1l6.8 6.2c6.2 6 11.4 10.6 16.2 14.3 8.5 6.5 13.5 8 17.7 8 4.2 0 9.2-1.5 17.7-8 3-2.3 6.2-5 9.7-8.2l.2-.2ZM33.5 187.5l3.2 3.5 9 9.7c3.2 3.4 5 8 5 12.7l.4 16.8-5-5C15.2 194.3 0 179 0 160s15.3-34.4 46-65.1l5.1-5-.3 16.7c-.1 4.7-2 9.3-5.1 12.7l-9.3 10c-1 1-1.8 2-2.6 3l-.5.4c-3.2 3.5-5.8 6.6-8 9.6-6.6 8.5-8 13.5-8 17.7 0 4.2 1.4 9.2 8 17.7 2.2 3 5 6.2 8 9.7h.2Z"
      />
      <path
        fill="currentColor"
        d="m33.4 132.6 12.3-13.3c2.8-3 4.6-7 5-11 0-7 .1-12.9.4-18.1v-.7l1-12.3c1.5-10.6 4-15.1 7-18.1 3-3 7.5-5.5 18.1-7 3.7-.4 7.8-.8 12.5-1h.3c5.4-.3 11.6-.4 18.7-.4 4.3-.4 8.4-2.3 11.5-5.3l12.4-12h-7.1c-43.4 0-65.1 0-78.6 13.5C33.4 60.3 33.4 82 33.4 125.5v7.1Zm0 54.8v7.1c0 43.4 0 65.2 13.5 78.6 13.5 13.5 35.2 13.5 78.6 13.5h69c43.4 0 65.2 0 78.6-13.5 13.5-13.4 13.5-35.2 13.5-78.6v-7.1l-12.3 13.3c-2.8 3-4.6 7-5 11 0 7-.1 13-.4 18.4v.2a148 148 0 0 1-1 12.5c-1.5 10.6-4 15.1-7 18.1-3 3-7.5 5.5-18.1 7l-12.2 1h-.7c-5.3.3-11.3.4-18.1.4-4.2.4-8 2.2-11.1 5l-13.3 12.3h-54.7l-13.4-12.3c-3-2.8-7-4.6-11-5-7 0-13-.2-18.4-.4h-.2c-4.7-.2-8.8-.6-12.5-1-10.6-1.5-15.1-4-18.1-7-3-3-5.5-7.5-7-18.1-.4-3.7-.8-7.8-1-12.5v-.3c-.2-5.3-.4-11.3-.4-18.2-.4-4.2-2.2-8-5-11.1l-12.3-13.3Zm235.9-79.2c.4 4.2 2.2 8 5 11.1l12.3 13.3v-7.1c0-43.4 0-65.2-13.5-78.6-13.4-13.5-35.2-13.5-78.6-13.5h-7.1l13.3 12.3c3 2.8 7 4.6 11 5 6.9 0 12.8.1 18 .4h1.1l12 1c10.6 1.5 15.1 4 18.1 7 3 3 5.5 7.5 7 18.1.4 3.7.8 7.8 1 12.5v.2c.3 5.3.4 11.4.4 18.3ZM146.9 83.5l-11.7 9.9c-2 1.7-4.6 2.8-7.4 2.9l-19.4 1L118.5 87c19.6-19.6 29.4-29.4 41.6-29.4 12.2 0 22 9.8 41.7 29.4l10 10.1-19.7-.8c-2.8-.1-5.4-1.2-7.5-3l-8.8-7.6c-3.1-2.9-5.7-5.2-8.1-7-5-3.7-6.8-3.8-7.6-3.8-.8 0-2.6 0-7.5 3.8l-.3.2a91.5 91.5 0 0 0-5.4 4.6Z"
      />
      <path
        fill="currentColor"
        d="M240.7 151.5a210 210 0 0 0-15-16.1 12.3 12.3 0 0 1-2-6l-.8-21.2 10 10c19.7 19.7 29.5 29.5 29.5 41.7 0 12.2-9.8 22-29.4 41.6l-10.1 10 1-20a12 12 0 0 1 3-7.7l7.4-8.3c2.3-2.5 4.3-4.7 5.9-6.7l.9-1v-.1l.2-.3c3.7-4.9 3.8-6.7 3.8-7.5 0-.8 0-2.7-3.8-7.6l-.2-.2v-.1l-.4-.5Zm-161.5.5 13.5-14.6c1.9-2 3-4.7 3.2-7.6l.7-11.4c.2-3.7.3-6.8.7-9.4v-.9l.1-.3c.8-6 2-7.5 2.6-8 .6-.6 2-1.8 8-2.7l6.7-.5 16.5-1.7c2.7-.2 5.2-1.4 7.1-3.2l14-12.8h-14.2c-27.8 0-41.7 0-50.3 8.7-7.3 7.3-8.4 18.5-8.6 38.8V152Z"
      />
      <path
        fill="currentColor"
        d="M79.2 167.7v25.7c.2 20.3 1.3 31.4 8.6 38.8 7.4 7.3 18.5 8.4 38.8 8.6h67c20.3-.2 31.5-1.3 38.8-8.6 8.7-8.6 8.7-22.5 8.7-50.3v-14.2l-14.4 15.5a12.3 12.3 0 0 0-3 5.5c0 10 0 17.1-.7 22.5v.3l-.1.4c-.8 6.1-2.1 7.5-2.7 8-.5.6-2 1.9-8 2.7h-.4v.1h-.5c-3.1.4-6.7.6-11 .7l-10 .6c-2.7.2-5.4 1.3-7.5 3.2l-15 13.6h-15.6l-15-14c-2-1.9-4.5-3-7.2-3.3h-3.3c-8.1 0-14-.3-18.6-.9-6.1-.8-7.5-2-8-2.6-.6-.6-1.9-2-2.7-8v-.3l-.1-.2v-.5a168 168 0 0 1-.8-18.1v-2a12.3 12.3 0 0 0-3.3-7.8l-14-15.4ZM223.6 119l.9 11c.2 2.8 1.3 5.4 3.2 7.5L241 152v-14.3c0-27.7 0-41.6-8.7-50.2-8.6-8.7-22.5-8.7-50.2-8.7h-14.4L182.2 92c2 1.9 4.6 3 7.3 3.2l16.7 1.4c1.6 0 3 .2 4.4.3l1.3.1v.1h.3c6 .9 7.5 2.1 8 2.7.6.5 1.9 2 2.7 8 .4 3.1.6 6.8.7 11.3Z"
      />
      <path
        fill="currentColor"
        d="M97.4 211.5h-.1v.1Zm11.1 11.2 18.2.8c-7.9 0-13.6-.3-18.2-.8Zm-11.9-31c0-.8-.2-1.6-.4-2.4l.2 1.6.1 2c0 7.8.2 13.5.8 18.1v.5l-.7-19.8Zm-38.7-31.8c0 10.4 7.1 19 21.3 33.5v-25.6l-.2-.4c-3.8-4.9-3.9-6.7-3.9-7.5 0-.8.1-2.7 3.9-7.6l.2-.3v-25.6C65 140.8 58 149.4 58 159.9Zm94.7 81.1-.2-.1-.2-.1h-25.6c14.5 14.2 23.1 21.3 33.5 21.3 10.4 0 19-7 33.5-21.3H168l-.3.2c-5 3.8-6.8 3.9-7.6 3.9-.8 0-2.6-.1-7.5-3.9Z"
      />
    </svg>
  );
};
