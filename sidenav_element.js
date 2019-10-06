import { LitElement, html, css } from 'lit-element';
import '/bio.js'

export class SidebarElement extends LitElement {
    static get styles() {
        return css`
            @media only screen and (min-width: 1025px) {
                .sidebar {
                    height: 100%;
                    width: 325px;
                    position: fixed;
                    z-index: 1;
                    top: 0;
                    left: 0;
                    background-color: #2d3c49;
                    overflow-x: hidden;
                }
                h1 {
                    font-size: 2.9rem;
                    margin-bottom: 0;
                }
                h2 {
                    font-size: 1.5rem;
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
              }
              h1, h2 {
                color: #7d97ad;
                text-align: center;
              }`
    }

    render() {
        return html`
        <div class="sidebar">
            <div id="name">
                <h1 class="introduction" id="calebdunn">CALEB DUNN</h1>
                <h2 class="introduction">Life Long Learner</h2>
            </div>
            <bio-element></bio-element>
        </div>`;
    }
}

customElements.define('sidebar-element', SidebarElement)