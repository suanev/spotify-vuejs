import styled from "vue-styled-components";

export const Container = styled.main`
    margin: 30px;  

    .song, .title {
      display: flex;
      color: var(--white);
      padding: 0 10px;
      font-weight: 500;
      font-size: .9rem;
      align-items: center;
      border-bottom: 1px solid var(--dark);

      &:hover {
        cursor: pointer;
        background: var(--dark);
      }

      span {
        margin-right: 20px;
      }

      p, h4, h5 {
        flex: 1;
      }

      h5 {
        text-align: right;
      }
    }

    .title {
        color: var(--gray);
        padding-left: 50px;
        p, h4, h5 {
            text-transform: uppercase;
        }
    }
`;