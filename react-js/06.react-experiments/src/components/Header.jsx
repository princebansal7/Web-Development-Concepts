// import React, { Fragment } from "react";

// function Header(props) {
//     return (
//         <Fragment>
//             <h1>{props.title}</h1>
//         </Fragment>
//     );
// }
//                          OR
// function Header(props) {
//     const { title } = props;
//     return (
//         <React.Fragment>
//           <h2>{title}</h2>
//       </React.Fragment>
//     );
// }
//                          OR
// So, instead of returning top-level div we return top-level empty tag
// so that we don't have unnecessary element

function Header({ title }) {
    return (
        <>
            <h2>{title}</h2>
        </>
    );
}

export default Header;
