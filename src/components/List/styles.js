import styled from "vue-styled-components";

export const Container = styled.main`
    color: white;
    margin: auto;
    min-width: 800px;
    max-width: 1440px;
    position: relative;
    align-items: center;

    li {
        list-style: none;
    }

    button, span, i {
        cursor: pointer;
    }

    button {
        border: 0;
        outline: 0;
        margin: 0 auto;
        color: var(--white);

        i {
            margin: 0;
            color: var(--gray);
        }
    }

    .favorite {
        color: var(--green);
    }    
`;

export const Information = styled.div` 
    display: flex;
    margin-left: 30px;
        
    img {
        width: 230px;
        height: 230px;
        box-shadow: 0px 0px 29px 6px rgba(0,0,0,0.22);
    }

    .info {
        margin: auto;
        line-height: .4;
        margin-bottom: 0;
        margin-left: 35px;

        p {
            color: var(--gray);
            font-size: .9rem;
            margin: 20px auto;
            font-weight: 500;
            border-radius: 1.5rem;
        }

        h1 {
            color: var(--white);
            font-size: 3rem;
            margin-left: -5px;
            font-weight: 800;
        }

        h5 {
            color: var(--gray);
            text-transform: uppercase;
        }

        span {
            color: var(--gray);
            font-size: 1.5em;
            margin-right: 10px;
        }

        h6 {
            color: var(--gray);
            font-size: .75rem;
            font-weight: 500;
        }

        .play-button {
            height: 2.5rem;
            width: 7.25rem;
            font-size: 1rem;
            font-weight: bold;
            margin-right: 35px;
            border-radius: 1.5rem;
            justify-content: center;
            text-transform: uppercase;
            background-color: var(--green);
            transition: all .2s;

            &:hover {
                filter: opacity(90%);
            }
        }

        .more-infos {
            margin: 0;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            background-color: transparent;

            .material-icons {
                padding: 0;
                margin-right: 35px;
                text-align: center;
                align-items: center;
                justify-content: center;
            }
        }
    }
`;

export const Songs = styled.div` 
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