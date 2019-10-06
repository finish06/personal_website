import { LitElement, html, css } from 'lit-element';
import '/bio.js'

export class SidebarElement extends LitElement {
    static get styles() {
        return css`
            @media only screen and (min-width: 1025px) {
                .sidebar {
                    height: 100%;
                    width: 300px;
                    position: fixed;
                    z-index: 1;
                    top: 136px;
                    left: 0;
                    background-color: #2d3c49;
                    overflow-x: hidden;
                }
            }
            .sidebar a {
                text-align: center;
                padding-top: 8px;
                padding-bottom: 8px;
                text-decoration: none;
                font-size: 1.5rem;
                color: #7d97ad;
                display: block;
              }
              #home {
                  padding-top: 16px;
              }`
    }

    render() {
        return html`
        <div class="sidebar">
            <bio-element></bio-element>
        </div>`;
    }
}

customElements.define('sidebar-element', SidebarElement)