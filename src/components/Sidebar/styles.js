import styled from "vue-styled-components";

const Container = styled.div`
    width: 18rem;
    height: 100%;
    color: white;
    position: sticky;
    background-color: #000;

    .logo-style {
        padding: 1.5rem;

        img {
            height: 2.5rem;
        }
    }

    .menu-style {
        margin: 0 .5rem;
        padding: 1.5rem 0;
        padding-bottom: 1.1rem;
        padding-left: 0.25rem;

        button {
            outline: 0;
            border: none;
            display: flex;
            font-weight: 700;
            font-size: .875rem;
            padding: 0 1.75rem;
            margin-left: 1rem;
            padding-left: 1.8rem;
            align-items: center;
            border-radius: 0.25rem;
            padding-right: 5.75rem;
            justify-content: flex-start;
        }

        i {
            margin-left: -1rem;
            margin-right: 0.75rem;
        }

        .without-focus-menu-style {
            color: #B3B3B3;
            background-color: transparent;
        }

        .focus-menu-style {
            color: white;
            background-color: #282828;
        }

    }

    .playlists-style {
        margin: 0 1.75rem;
        margin-bottom: 1.25rem;

        h3 {
            color: #B3B3B3;
            font-size: .75rem;
            letter-spacing: 0.1em;
            text-transform: uppercase;
        }

        button {
            border: 0;
            outline: 0;
            padding: 0;
            display: flex;
            color: #B3B3B3;
            cursor: pointer;
            font-weight: 700;
            font-size: .875rem;
            align-items: center;
            justify-content: flex-start;
            background-color: transparent;

            img {
                width: 1.875rem;
                height: 1.875rem;
                filter: opacity(80%);
                transition: all .3s;
                margin-right: 0.75rem;

                &:hover {
                    filter: opacity(100%);
                }
            }
        }
    }

    .column-style {
        height: 0.0625rem;
        margin: 0.75rem 0;
        background-color: #282828;
    }

    .install-app-style {
        display: flex;
        color: #B3B3B3;
        cursor: pointer;
        font-weight: 700;
        font-size: .875rem;
        transition: all .3s;
        filter: opacity(80%);
        justify-content: flex-start;

        i {
            margin-right: 0.75rem;
        }

        p {
            margin-top: .25rem;
        }

        &:hover {
            color: white;
            filter: opacity(100%);
        }
    }

    .your-library-style {
        width: 100%;
        height: 6rem;
        font-weight: 700;
        overflow-y: scroll;
        font-size: .75rem;
        transition: all .3s;
        justify-content: flex-start;

        ::-webkit-scrollbar {
            width: 8px;
        }

        ::-webkit-scrollbar-thumb {
            background: #282828;
            border-radius: 5px;
        }

        p {
            color: #B3B3B3;
            cursor: pointer;
            padding: 0.25rem 0;

            &:hover {
                color: #FFF;
            }
        }
    }

    .album-style {
        bottom: 0;
        position: sticky;

        img {
            margin: auto;
            display: flex;
            max-width: 256px;
            max-height: 256px;
            position: relative;
            align-items: center;
            justify-content: center;
            background-color: #282828;
        }

        .infos-styles {
            width: 100%;
            height: 100%;
            display: flex;
            position: absolute;
            align-items: flex-start;
            justify-content: flex-end;

            .icon-style {
                opacity: 0%;
                width: 1.5rem;
                height: 1.5rem;
                margin: 0.5rem;
                cursor: pointer;
                border-radius: 100%;
                background-color: rgba(18,18,18, .6);

                &:hover {
                    opacity: 100%;
                } 
            }
        }
    }
`;

export default Container;