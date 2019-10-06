import { LitElement, html, css } from 'lit-element';

export class SideNavElement extends LitElement {
    static get styles() {
        return css`
            .sidenav {
                height: 100%;
                width: 12%;
                position: fixed;
                z-index: 1;
                top: 0;
                left: 0;
                background-color: #2d3c49;
                overflow-x: hidden;
                padding-top: 80px;
            }
            .sidenav a {
                padding: 6px 6px 6px 32px;
                text-decoration: none;
                font-size: 1.5rem;
                color: #7d97ad;
                display: block;
              }
              img {
                display: block;
                margin: auto;
                border-radius: 35%;
                max-width: 85%;
              }`
    }

    render() {
        return html`
        <div class="sidenav">
            <img class="pictures face" id="face_large" src="images/professionalPhoto.jpg" alt="Image of Caleb">
            <a href="index.html">Home</a>
            <a href="resume/resume.pdf">Resume</a>
            <a href="certificates/certificates.html">Certificates</a>
        </div>`;
    }
}

customElements.define('sidenav-element', SideNavElement)