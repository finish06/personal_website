import { LitElement, html, css } from 'lit-element';

export class BioElement extends LitElement {
    static get styles() {
        return css`
              div {
                padding-top: 30px;
              }
              img {
                display: block;
                margin: auto;
                border-radius: 35%;
                width: 85%;
                max-width: 200px;
              }
              ul {
                list-style: none;
                padding-left: 0px;
              }
              li {
                color: #2d3c49;;
                width: 85%;
                margin: auto;
                padding-top: 20px;
                text-align: center;
                font-size: 1.2rem;
              }`
    }

    render() {
        return html`
        <div>
            <img class="pictures face" id="face_large" src="/images/professionalPhoto.jpg" alt="Image of Caleb">
            <ul>
              <li>Pharmacist</li>
              <li>Informaticist</li>
              <li>Tech Enthusiast</li>
              <li>Product Manager</li>
            </ul>
        </div>`;
    }
}

customElements.define('bio-element', BioElement)