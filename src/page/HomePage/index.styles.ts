import styled from "styled-components";
import COLOURS from "../assets/color.styles";
import SPACING from "../assets/spacing.styles";

export const Container = styled.div`
width: 200px;
height:200px;
// padding: ${SPACING.little} 0 ${SPACING.large} 0;

// > span {
//   color: ${COLOURS["font-primary"]};
// }
    font-size: 14px;
    color: ${COLOURS["font-primary"]};
    font-weight: 400;
    background: ${COLOURS["background-primary"]};
`;