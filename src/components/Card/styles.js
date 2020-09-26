import styled from "vue-styled-components";

export const Container = styled.main`
    color: white;
    margin: auto;
    height: auto;
    width: 100%; 
    max-width: 1440px;
    position: relative;
    align-items: center;
`;

export const Card = styled.div`
    padding: .75rem 1.5rem;

    .section-name{
        display: flex;
        justify-content: space-between;
    }

    h1 {
        color: var(--white);
        cursor: pointer;
        font-weight: 800;
        font-size: 1.5rem;
        padding-left: 0.5rem;
        letter-spacing: 0.05em;

        &:hover {
            text-decoration: underline;
        }
    }

    h2 {
        color: var(--gray);
        cursor: pointer;
        font-size: .75rem;
        padding-top: 1rem;
        padding-right: 2rem;
        margin-bottom: 0.75rem;
        letter-spacing: 0.05em;
        text-transform: uppercase;

        &:hover {
            text-decoration: underline;
        }
    }

    .cards-style {
        width: 100%;
        margin: auto;
        display: flex;
        flex-wrap: wrap;
        padding: .25rem;
        flex-direction: row;
        justify-content: space-between;

        .card  {
            margin: inherit;
            padding: 1.25rem;
            height: 16rem;
            position: relative;
            align-items: center;
            border-radius: .5rem;
            letter-spacing: 0.05em;
            justify-content: center;
            background-color: var(--dark);

            .play-button-container {
                width: 85%;
                height: 90%;
                display: flex;
                cursor: pointer;
                filter: opacity(0%);
                position: absolute;
                align-items: flex-end;
                transition: ease-in .1s;
                justify-content: flex-end;

                .play-button {
                    width: 2.5rem;
                    display: flex;
                    height: 2.5rem;
                    align-items: center;
                    border-radius: 100%;
                    justify-content: center;
                    background-color: var(--green);
                    margin-top: 230px;
                    margin-left: 120px;
                }

                &:hover {
                    filter: opacity(100%);
                }
            }

            img {
                width: auto;
                height: 150px;
                margin-bottom: 0.5rem;
            }

            h1 {
                color: var(--white);
                font-weight: 700;
                font-size: .75rem;
                letter-spacing: 0.05em;
            }

            h3 {
                margin: 0;
                color: var(--gray);
                font-weight: 500;
                font-size: .65rem;
                max-width: 9.375rem;
            }
        }
    }
`;