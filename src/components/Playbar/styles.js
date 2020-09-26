import styled from "vue-styled-components";

const Container = styled.footer`
    bottom: 0;
    width: 100%;
    height: 12vh;
    color: white;
    position: relative;
    align-items: center;
    background-color: var(--dark);

    button {
        border: 0;
        outline: 0;
        background-color: transparent;
    }

    i {
        color: var(--gray);
        cursor: pointer;
        margin: 0 0.5rem;
        transition: ease-in .1s;
    }

    i:hover {
        color: var(--white);
    }

    .playbar-content-style {
        margin:auto;
        margin: 0 40px;
        display: flex;
        padding-top: 2.8vh;
        align-items: center;
        justify-content: space-between;

        .song-name {
            display: flex;
            letter-spacing: .05rem;
                
            .songs-text {
                display: flex;
                padding-left: 1rem;
                flex-direction: column;
                
                h3 {
                    color: var(--white);
                    font-size: .875rem;
                    margin: .5rem 0;
                }

                h4 {
                    color: var(--gray);
                    font-size: .75rem;
                    margin: 0;
                }
            }
        }

       .icons-song {
            color: var(--gray);
            margin: auto;
            padding: 0 1rem;

            .favorite {
                color: var(--green);
            }

            i {
                font-size: 1rem;
            }
       }
    }

    .playbar-style {
        display: flex;
        align-items: center;
        flex-direction:column;
        justify-content: center;

        .k-progress-outer {
            padding-left: 0;
        }

        .suffle-repeat {
            font-size: 1.2rem;
        }

        .prev-next {
            font-size: 1.5rem;
        }

        .play-button {
            font-size: 3rem; 
            margin: 0 0.75rem;
        }

        .playbar {
            display: flex; 
            align-items: center; 
            justify-content: center;
        }

        .volum-bar {  
            display: flex;
            padding-right: 20px;
            align-items: center;
            justify-content: flex-end;
            
            i {
                cursor: pointer;
                padding-right: 10px;
            }   

            input {
                width: 1rem;
            }
        }

        .currentTime {
            font-size: .75rem;
            margin-right: .85rem; 
        }

        .duration {
            font-size: .75rem;
            margin-left: .85rem; 
        }       

        .slider {
            padding-left: 0 !important;
            margin: auto;
            display: flex;
            flex-direction: column;

            #progress{
                width: 30vw;
            }
        }
        
        #volum{
            width: 8vw;
        }
    }
`;

export default Container;