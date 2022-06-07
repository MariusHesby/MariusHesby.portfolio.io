// import PropTypes from "prop-types";

export default function Heading({ size = "1" }) {
    const VariableHeading = `h${size}`;

    return <VariableHeading></VariableHeading>;
}

// Heading.propTypes = {
//     size: PropTypes.string,
//     content: PropTypes.string.isRequired,
// };