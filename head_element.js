import { LitElement, html, css } from 'lit-element';

export class HeadElement extends LitElement {
    static get styles() {
        return css`
            button { background-color: #7d97ad; border-width: 0px; }`;
    }
    
    render() {
        return html`
        <link rel="stylesheet" type="text/css" href="css/style.css">
        <link rel="stylesheet" type="text/css" href="css/small_style.css" media="screen and (max-width: 360px)">
        <link rel="stylesheet" type="text/css" href="css/med_style.css" media="screen and (min-width: 361px) and (max-width: 1024px)">
        <link rel="stylesheet" type="text/css" href="css/large_style.css" media="screen and (min-width: 1025px)">

        <header class="container">
        <button id="menuitem" @click="${this.handleClick}">
            <span id="menu">&#9776;</span>
        </button>
        <div id="name">
            <h1 class="introduction" id="calebdunn">CALEB DUNN</h1>
            <h2 class="introduction">Life Long Learner</h2>
        </div>
        <div id="face_group">
            <img class="pictures face" id="face_large" src="images/professionalPhoto.jpg" alt="Image of Caleb">
        </div>
    </header>`;
    }

    handleClick() {
        console.log('menu clicked!');
        sidebar.classList.toggle('open');
    }
}

customElements.define('head-element', HeadElement)