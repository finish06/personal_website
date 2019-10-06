import { LitElement, html, css } from 'lit-element';

export class HeadElement extends LitElement {
    static get styles() {
        return css`
            button {
                background-color: #7d97ad;
                border-width: 0px; 
            }
            @media only screen and (min-width: 1025px) {
                #navi {
                    background-color: #2d3c49;
                    display: block-inline;
                    margin-left: 325px;
                    font-size: 2rem;
                }
            }
            #navi a {
                color: #7d97ad;
            }`;
    }
    
    render() {
        return html`
        <link rel="stylesheet" type="text/css" href="css/style.css">
        <link rel="stylesheet" type="text/css" href="css/small_style.css" media="screen and (max-width: 360px)">
        <link rel="stylesheet" type="text/css" href="css/med_style.css" media="screen and (min-width: 361px) and (max-width: 1024px)">
        <link rel="stylesheet" type="text/css" href="css/large_style.css" media="screen and (min-width: 1025px)">

        <header class="container">
            <div id='navi'>
                <a id="home" href="/index.html">Home</a>
                <a href="/resume/resume.pdf">Resume</a>
                <a href="/certificates/certificates.html">Certificates</a>
            </div>
            <button id="menuitem" @click="${this.handleClick}">
                <span id="menu">&#9776;</span>
            </button>
        </header>`;
    }

    handleClick() {
        console.log('menu clicked!');
        sidebar.classList.toggle('open');
    }
}

customElements.define('head-element', HeadElement)