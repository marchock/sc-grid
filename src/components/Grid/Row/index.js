import styled from 'styled-components';

const Row = styled.div`
    width: 100%;
    &:after {
      content: "";
      display: table;
      clear: both;
    }
`;

export default Row;