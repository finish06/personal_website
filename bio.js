import { LitElement, html, css } from 'lit-element';

export class BioElement extends LitElement {
    static get styles() {
        return css`
              img {
                display: block;
                margin: auto;
                border-radius: 35%;
                width: 85%;
                max-width: 200px;
              }
              p {
                color: #7d97ad;
                width: 85%;
                margin: auto;
                padding-top: 6px;
                text-align: center;
              }`
    }

    render() {
        return html`
        <div class="sidenav">
            <img class="pictures face" id="face_large" src="/images/professionalPhoto.jpg" alt="Image of Caleb">
            <p>A <em>technology enthusiast</em> with a <strong>strong passion for continuous learning</strong> of novel topics related to <em>software development</em> & more!</p>
        </div>`;
    }
}

customElements.define('bio-element', BioElement)