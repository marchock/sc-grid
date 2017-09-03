import styled from 'styled-components';

const BREAKPOINTS = {
    mobile: 480,
    tablet: 768,
    desktop: 1024,
    lgDesktop: 1280,
};

const DEFAULT_WIDTH = 1280;
const DEFAULT_MARGIN = 0;
const MAX_NUMBER_COLUMNS = 12;

const mediaQueries = (props) => {
    const ary = [];
    const width = props.width || DEFAULT_WIDTH;
    const margin = props.margin || DEFAULT_MARGIN;
    const getMargin = () => {
        return margin / (width / 100);
    };
    const getWidth = (param) => {
        const MARGIN = getMargin();
        const ONE_COLUMN_WIDTH = ((width / MAX_NUMBER_COLUMNS) / (width / 100));
        return (ONE_COLUMN_WIDTH * Number(param[1])) - (MARGIN * 2);
    };

    Object.keys(props).forEach(key => {
        const param = key.split('-');

        if (param[0] === 'col') {
            const DEVICE = param[2];

            ary.push(`
                @media (min-width: ${BREAKPOINTS[DEVICE]}px) {
                    width: ${getWidth(param)}%;
                    margin: ${margin}px ${getMargin()}% 0;             
                }
            `);
        }
    });

    return ary;
};

const Col = styled.div`
    width: 100%;
    float: left;
    background-color: gray;
    margin: ${props => `${props.margin}px 0 0;` }
    ${mediaQueries};
`;

export default Col;

