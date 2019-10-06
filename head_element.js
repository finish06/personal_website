import { LitElement, html, css } from 'lit-element';

export class HeadElement extends LitElement {
    static get styles() {
        return css`
            @media only screen and (min-width: 1025px) {
                #name {
                    padding-left: 25px;
                }
                header {;
                    background-color: #2d3c49;
                    top: 0px;
                    position: fixed;
                    width: 100%;
                    height: 136px;
                }
                h1 {
                    font-size: 2.9rem;
                    margin-bottom: 0px;
                    margin-top: 32px;
                }
                h2 {
                    font-size: 1.5rem;
                    margin-top: 0px;
                    margin-bottom: 32px;
                }
                #menuitem {
                    visibility: hidden;
                }
            }
            #navi a {
                color: #7d97ad;
            }
            h1, h2 {
              color: #7d97ad;
            }
            div a {
                font-size: 1rem;
            }
            button {
                background-color: #7d97ad;
                border-width: 0px; 
            }`;
    }
    
    render() {
        return html`
        <header>
            <div id="name">
                <h1 class="introduction" id="calebdunn">CALEBDUNN.tech</h1>
                <h2 class="introduction">Life Long Learner</h2>
            </div>
        </header>`;
    }

    handleClick() {
        console.log('menu clicked!');
        sidebar.classList.toggle('open');
    }
}

customElements.define('head-element', HeadElement)