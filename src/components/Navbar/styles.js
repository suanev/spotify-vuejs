import styled from "vue-styled-components";

const Container = styled.header`
    top: 0;
    color: white;
    display: flex;
    position: relative;
    padding: 1rem 1.5rem;
    justify-content: space-between;
    background-color:rgba(18,18,18, .6);

    a {
        color: var(--white);
    }

    .buttons-style {
        display: flex;
        align-items: center;

        button {
            border: 0;
            outline: 0;
            margin: none;
            color: #FFFFFF;
            cursor: pointer;
            border-radius: 100%;
            background-color: var(--darkest);

            i {
                font-size: 2.5rem;
            }
        }  

        .left {
            margin-right: 0.75rem;
        }      
    }

    .user-infos {
        position: relative;

        button {
            border: 0;
            outline: 0;
            display: flex;
            padding: 0 .25rem;
            border-radius: 99px;
            align-items: center;
            background-color: var(--dark);
        }

        i {
            color: var(--gray);
            width: 1.5rem;
            height: 1.5rem;
            padding-left: .75rem;
            border-radius: 100%;
        }

        p {
            color: var(--white);
            font-weight: 600;
            font-size: .75rem;
            margin-left: 0.5rem;
        }

        .drop-down-menu {
            width: 100%;
            margin: 0 .25rem;
            position: absolute;
            margin-top: 0.25rem;
            border-radius: 0.50rem;
            background-color: var(--dark);

            button {
                border: 0;
                outline: 0;
                width: 100%;
                color: var(--gray);
                padding: .5rem 0;
                border-radius: 0;
                font-size: .875rem;
                justify-content: center;
                filter: opacity(75%);
                border-bottom: 1px solid var(--dark);

                &:hover {
                    color: var(--white);
                    filter: opacity(100%);
                }
            }
        }
    }
`;

export default Container;