## Tailwind basics

- Flex in raw html | [Example](https://github.com/princebansal7/Web-Development-Concepts/blob/main/tailwind/01.flex-raw-html/01.flex.html)
- **flex**: deals with spaces between the elements | [Example](https://github.com/princebansal7/Web-Development-Concepts/blob/main/tailwind/02.tailwind-react/src/components/Flex.jsx)
- **grid**: deals with how many elements needs to be in single line based on the current width of the page | [Example](https://github.com/princebansal7/Web-Development-Concepts/blob/main/tailwind/02.tailwind-react/src/components/Grid.jsx)
- both helps in responsiveness
- Responsiveness | [Example](https://github.com/princebansal7/Web-Development-Concepts/blob/main/tailwind/02.tailwind-react/src/components/ResponsivenessWithBreakPoints.jsx)
  - Tailwind has breakpoints which basically defines the general sizes after which layout changes
    <img src="./02.tailwind-react/src/assets/tailwind-breakpoints.png" alt="breakpoints" width="1300" height="600" />

  - Tailwind: to target breakpoint this is important 
    <img src="./02.tailwind-react/src/assets/mobile-first.png" alt="mobile-first" width="800" height="1000" /> 

  - Tailwind is by-default mobile first => whatever you write without breakpoints is default true for mobile anything after that use breakpoints
  - this means class takes affect when layout reaches greater than or equal to break-point
- How to install tailwind in vite react [refer link](https://tailwindcss.com/docs/guides/vite)