// import PropTypes from "prop-types";
import NextHead from "next/head";

export default function Head({ title = "" }) {
    return (
        <NextHead>
            <title>
                {title}
                {title ? " | " : ""} mariushesby
            </title>
            <meta name="description" content="Marius Hesby prosjekter utviklet med HTML, CSS, Javascript, React, Next" />
            <link rel="icon" href="/favicon.ico" />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@500&display=swap" rel="stylesheet" />
        </NextHead>
    );
}

// Head.propTypes = {
//     title: PropTypes.string,
// };