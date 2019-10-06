import { LitElement, html, css } from 'lit-element';

export class UnsplashImg extends LitElement {
    static get styles() {
        return css`
            img {
                width: 100%;
                border-radius: 10px;
            }`
    }

    render() {
        return html`
            <img src="https://source.unsplash.com/collection/8740186/1300x800" alt="Image related to coffee">`
    }
}

customElements.define('unsplash-img', UnsplashImg)