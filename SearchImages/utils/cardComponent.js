export class Cards extends HTMLElement {
    connectedCallback() {
      this.innerHTML = `        
        <div class="card bg-light">
          <div class="img">
            <img alt="picture of each post">
          </div>
        </div>
      `;
    }
  }
  
  customElements.define("my-card", Cards);
  