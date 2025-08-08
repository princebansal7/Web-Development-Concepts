## Tailwind basics

- Flex in raw html | [Example](https://github.com/princebansal7/Web-Development-Concepts/blob/main/tailwind/01.flex-raw-html/01.flex.html) ![raw-flex](./images/flex-html.png)
- **flex**: deals with spaces between the elements | [Example](https://github.com/princebansal7/Web-Development-Concepts/blob/main/tailwind/02.tailwind-react/src/components/Flex.jsx) ![tailwind-flex](./images/flex-tailwind.png)
- **grid**: deals with how many elements needs to be in single line based on the current width of the page | [Example](https://github.com/princebansal7/Web-Development-Concepts/blob/main/tailwind/02.tailwind-react/src/components/Grid.jsx) ![grid-flex-grid](./images/grid-flex-grid.png)
- both helps in responsiveness
- Responsiveness | [Example](https://github.com/princebansal7/Web-Development-Concepts/blob/main/tailwind/02.tailwind-react/src/components/ResponsivenessWithBreakPoints.jsx) ![responsive-eg](./images/responsiveness-example.png)
  - Tailwind has breakpoints which basically defines the general sizes after which layout changes | [Read](https://tailwindcss.com/docs/responsive-design#using-custom-breakpoints) ![breakpoints](/tailwind/02.tailwind-react/src/assets/tailwind-breakpoints.png)
  - Tailwind: to target breakpoint this is important | [Read](https://tailwindcss.com/docs/responsive-design#working-mobile-first) ![mobile-first](/tailwind/02.tailwind-react/src/assets/mobile-first.png) 
  - Tailwind is by-default mobile first => whatever you write without breakpoints is default true for mobile anything after that use breakpoints
  - this means class takes affect when layout reaches greater than or equal to break-point.
  - Project [Link](https://github.com/princebansal7/Web-Development-Concepts/tree/main/projects/04-react-tailwind-bgchange#readme)
- How to install tailwind in vite react [refer-link](https://tailwindcss.com/docs/guides/vite)