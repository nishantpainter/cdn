class GooveeContent extends HTMLElement {
  constructor() {
    super();
    var shadow = this.attachShadow({ mode: "closed" });

    var wrapper = document.createElement("div");
    wrapper.innerHTML = `
        <!-- CUSTOMERPORTAL -->
            <section id="customer-portal" class="g-text-left g-mt-4 g-container">
            <div class="g-row">
                <div class="g-col-sm-12 g-col-6 g-p-2 g-align-self-center">
                <h4 class="g-mb-3">Portail client pour tous</h4>
                <p>
                    Impressionnez vos clients avec une application professionnelle. La
                    app client permet d’acheter en ligne, de demander des devis, de
                    consulter ses commandes et factures, de payer en ligne, et de
                    communiquer avec vos clients.
                </p>
                <h4 class="g-mb-3 g-mt-3">Tableau de bord</h4>
                <p>
                    Suivez votre CA et vos paiements. Consultez en un clin d’oeil votre
                    top client, top produit, et le top des ventes.
                </p>
                </div>
                <div class="g-col-sm-12 g-col-6 g-p-2 g-align-self-center">
                <img
                    src="https://goovee.com/wp-content/uploads/2020/04/TICKINGBOX_PORTAILCLIENT.png"
                />
                </div>
            </div>
            </section>
            <!-- CRM -->
            <section id="crm" class="g-text-center g-mt-4">
            <div class="g-bg-secondary g-text-white g-text-left">
                <div class="g-row g-container g-mt-1 g-mb-1">
                <div class="g-col-sm-12 g-col-6 g-p-2 g-align-self-center">
                    <img
                    src="https://goovee.com/wp-content/uploads/2019/10/FREELANCE@4x.png"
                    />
                </div>
                <div class="g-col-sm-12 g-col-6 g-p-2 g-align-self-center">
                    <h4 class="g-mb-3">CRM</h4>
                    <p>
                    Soyez au plus proche de vos clients avec le CRM inclus. Gérez vos
                    fiches client avec factures et devis liés, programmez des
                    événements (appels), notez les opportunités commerciales et
                    distinguez vos prospects de vos clients.
                    </p>
                    <h4 class="g-mb-3 g-mt-3">Gestion commerciale</h4>
                    <p>
                    Gérez vos devis, transformez-les en commandes et suivez leur
                    facturation. Il devient très simple de suivre l’ensemble du cycle
                    de vente.
                    </p>
                </div>
                </div>
            </div>
            <a class="g-mt-3 g-inline-block g-button-secondary">Créez votre compte</a>
            </section>
            <!-- FACTURATION -->
            <section id="facturation" class="g-text-left g-mt-4 g-container">
            <div class="g-row">
                <div class="g-col-sm-12 g-col-6 g-p-2 g-align-self-center">
                <h4 class="g-mb-3">Gestion de la facturation</h4>
                <p>
                    Tout est inclus dans Goovee. En quelques clics, éditez les factures,
                    avoirs, acomptes et envoyez-les directement à vos clients. Vérifiez
                    les impayés, et relancez vos clients.
                </p>
                <h4 class="g-mb-3 g-mt-3">
                    Réception des paiements par carte de crédit
                </h4>
                <p>
                    Quelle que soit votre activité, Goovee vous permet de recevoir les
                    paiements par carte de crédit. Grâce à l’intégration de Paypal et de
                    Stripe, c’est totalement transparent et sécurisé pour vos clients et
                    pour vous.
                </p>
                </div>
                <div class="g-col-sm-12 g-col-6 g-p-2 g-align-self-center">
                <img
                    src="https://goovee.com/wp-content/uploads/2020/04/SCREEN_FONCTIONNALITE_GOOVEE.png"
                />
                </div>
            </div>
            </section>
            <!-- STOCK -->
            <section id="stock" class="g-text-center g-mt-4 g-container">
            <div class="g-row g-text-left">
                <div class="g-col-sm-12 g-col-6 g-p-2 g-align-self-center">
                <h4 class="g-mb-3">Inventaire et stock</h4>
                <p>
                    Fini les inventaires interminables et les ruptures de stock. Avec
                    Goovee, ayez toujours un oeil sur vos stocks et commandez
                    directement chez votre fournisseur.
                </p>
                </div>
                <div class="g-col-sm-12 g-col-6 g-p-2 g-align-self-center">
                <img src="https://goovee.com/wp-content/uploads/2020/04/SCREEN.png" />
                </div>
            </div>
            <a class="g-mt-3 g-inline-block g-button-secondary">Créez votre compte</a>
            </section>
        `;

    const style = document.createElement("style");

    style.textContent = `
        @import url("https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap");

        :root {
        --spacing: 8px;
        --primary: #32325d;
        --secondary: #815cd1;
        --tertiary: #30b6ab;
        --black: #222222;
        }

        :host {
        --spacing: 8px;
        --primary: #32325d;
        --secondary: #815cd1;
        --tertiary: #30b6ab;
        --black: #222222;
        font-family: "Nunito", sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        /* font-size: 18px; */
        color: var(--primary);
        }

        * {
        box-sizing: border-box;
        }

        body {
        margin: 0;
        }

        a,
        a:hover {
        text-decoration: none;
        color: inherit;
        }

        ul {
        margin: 0;
        padding: 0;
        list-style: none;
        }

        h1,
        h2,
        h3,
        h4,
        h5,
        h6 {
        margin: 0;
        }

        h3 {
        font-size: 2rem;
        }

        h4 {
        font-size: 1.75rem;
        }

        h5 {
        font-size: 1.5rem;
        }

        h6 {
        font-size: 1.25rem;
        }

        p {
        margin: 0;
        }

        .g-container {
        max-width: 1080px;
        margin-right: auto;
        margin-left: auto;
        }

        .g-inline-block {
        display: inline-block;
        }

        .g-flex {
        display: flex;
        }

        .g-bg-secondary {
        background-color: var(--secondary);
        }

        .g-bg-black {
        background-color: var(--black);
        }

        .g-text-center {
        text-align: center;
        }

        .g-text-left {
        text-align: left;
        }

        .g-text-white {
        color: white;
        }

        .g-text-primary {
        color: var(--primary);
        }

        .g-text-secondary {
        color: var(--secondary);
        }

        .g-text-normal {
        font-weight: normal;
        }

        .g-text-bold {
        font-weight: bold;
        }

        .g-p-1 {
        padding: var(--spacing);
        }

        .g-p-2 {
        padding: calc(var(--spacing) * 2);
        }

        .g-p-3 {
        padding: calc(var(--spacing) * 3);
        }

        .g-mb-1 {
        margin-bottom: var(--spacing);
        }

        .g-mb-2 {
        margin-bottom: calc(var(--spacing) * 2);
        }

        .g-mb-3 {
        margin-bottom: calc(var(--spacing) * 3);
        }

        .g-mb-4 {
        margin-bottom: calc(var(--spacing) * 4);
        }

        .g-mb-5 {
        margin-bottom: calc(var(--spacing) * 5);
        }

        .g-mb-6 {
        margin-bottom: calc(var(--spacing) * 6);
        }

        .g-mb-7 {
        margin-bottom: calc(var(--spacing) * 7);
        }

        .g-mb-8 {
        margin-bottom: calc(var(--spacing) * 8);
        }

        .g-mb-9 {
        margin-bottom: calc(var(--spacing) * 9);
        }

        .g-mb-10 {
        margin-bottom: calc(var(--spacing) * 10);
        }

        .g-mt-1 {
        margin-top: var(--spacing);
        }

        .g-mt-2 {
        margin-top: calc(var(--spacing) * 2);
        }

        .g-mt-3 {
        margin-top: calc(var(--spacing) * 3);
        }

        .g-mt-4 {
        margin-top: calc(var(--spacing) * 4);
        }

        .g-mt-5 {
        margin-top: calc(var(--spacing) * 5);
        }

        .g-mt-6 {
        margin-top: calc(var(--spacing) * 6);
        }

        .g-mt-7 {
        margin-top: calc(var(--spacing) * 7);
        }

        .g-mt-8 {
        margin-top: calc(var(--spacing) * 8);
        }

        .g-mt-9 {
        margin-top: calc(var(--spacing) * 9);
        }

        .g-mt-10 {
        margin-top: calc(var(--spacing) * 10);
        }

        .g-pb-1 {
        padding-bottom: var(--spacing);
        }

        .g-pb-2 {
        padding-bottom: calc(var(--spacing) * 2);
        }

        .g-pb-3 {
        padding-bottom: calc(var(--spacing) * 3);
        }

        .g-pb-4 {
        padding-bottom: calc(var(--spacing) * 4);
        }

        .g-pb-5 {
        padding-bottom: calc(var(--spacing) * 5);
        }

        .g-pb-6 {
        padding-bottom: calc(var(--spacing) * 6);
        }

        .g-pb-7 {
        padding-bottom: calc(var(--spacing) * 7);
        }

        .g-pb-8 {
        padding-bottom: calc(var(--spacing) * 8);
        }

        .g-pb-9 {
        padding-bottom: calc(var(--spacing) * 9);
        }

        .g-pb-10 {
        padding-bottom: calc(var(--spacing) * 10);
        }

        .g-pt-1 {
        padding-top: var(--spacing);
        }

        .g-pt-2 {
        padding-top: calc(var(--spacing) * 2);
        }

        .g-pt-3 {
        padding-top: calc(var(--spacing) * 3);
        }

        .g-pt-4 {
        padding-top: calc(var(--spacing) * 4);
        }

        .g-pt-5 {
        padding-top: calc(var(--spacing) * 5);
        }

        .g-pt-6 {
        padding-top: calc(var(--spacing) * 6);
        }

        .g-pt-7 {
        padding-top: calc(var(--spacing) * 7);
        }

        .g-pt-8 {
        padding-top: calc(var(--spacing) * 8);
        }

        .g-pt-9 {
        padding-top: calc(var(--spacing) * 9);
        }

        .g-pt-10 {
        padding-top: calc(var(--spacing) * 10);
        }

        .g-align-self-center {
        align-self: center;
        }

        .g-round {
        border-radius: 4px;
        }

        .g-button,
        .g-button-primary,
        .g-button-secondary {
        font-weight: bold;
        padding: 0.3em 1em;
        border: 1px solid;
        border-color: var(--secondary);
        border-radius: 4px;
        -webkit-transition: all 0.2s;
        transition: all 0.2s;
        }

        .g-button:hover,
        .g-button-primary:hover,
        .g-button-secondary:hover {
        border-radius: 20px;
        }

        .g-button-primary {
        color: black;
        background-color: white;
        }

        .g-button-primary:hover {
        color: black;
        }

        .g-button-secondary {
        color: white;
        background-color: var(--secondary);
        }

        .g-button-secondary:hover {
        color: var(--secondary);
        background-color: white;
        }

        .g-row {
        width: 100%;
        margin: 0 auto;
        display: flex;
        flex-wrap: wrap;
        }

        .g-col-1 {
        flex-basis: 8.33%;
        }

        .g-col-2 {
        flex-basis: 16.66%;
        }

        .g-col-3 {
        flex-basis: 25%;
        }

        .g-col-4 {
        flex-basis: 33.33%;
        }

        .g-col-5 {
        flex-basis: 41.66%;
        }

        .g-col-6 {
        flex-basis: 50%;
        }

        .g-col-7 {
        flex-basis: 58.33%;
        }

        .g-col-8 {
        flex-basis: 66.66%;
        }

        .g-col-9 {
        flex-basis: 75%;
        }

        .g-col-10 {
        flex-basis: 83.33%;
        }

        .g-col-11 {
        flex-basis: 91.66%;
        }

        .g-col-12 {
        flex-basis: 100%;
        }

        @media screen and (max-width: 600px) {
        .g-col-sm-12 {
            flex-basis: 100%;
        }
        }

        /* =========== NAVIGATION ============ */
        #navigation {
        top: 0;
        position: sticky;
        width: 100%;
        background-color: white;
        box-shadow: 0 0 7px rgba(0, 0, 0, 0.1);
        }

        #navigation .navigation-wrapper {
        display: flex;
        align-items: center;
        padding: var(--spacing);
        justify-content: space-between;
        height: 60px;
        }

        #navigation li,
        #navigation nav {
        display: inline-block;
        }

        #navigation li {
        color: var(--black);
        font-weight: normal;
        margin-right: calc(var(--spacing) * 1.5);
        }

        #navigation li:hover {
        border-bottom: 2px solid var(--tertiary);
        }

        #navigation li.active {
        font-weight: bold;
        border-bottom: 2px solid var(--tertiary);
        }

        @media screen and (max-width: 600px) {
        #navigation li,
        #navigation nav {
            display: none;
        }
        }

        /* =========== INTRODUCTION ============ */
        #introduction img {
        width: 100%;
        }

        /* =========== ACTIVITY ============ */

        /* =========== MODULES ============ */

        #modules .module-card {
        display: flex;
        flex-direction: column;
        align-items: center;
        }

        #modules .module-card img {
        height: 130px;
        }

        /* =========== APPLICATION ============ */
        #application img {
        width: 80%;
        display: block;
        margin-left: auto;
        margin-right: auto;
        }

        #application .free {
        margin-top: calc(var(--spacing) * 3);
        }

        #application .free img {
        height: 300px;
        width: auto;
        }

        /* =========== STORE ============ */
        #store img {
        width: 100%;
        }

        #store .logo img {
        height: 50px;
        width: auto;
        }

        /* =========== ACTIVITY ============ */
        #activity img {
        width: 100%;
        }

        /* =========== FOOTER ============ */

        footer li {
        color: white;
        cursor: pointer;
        margin-bottom: var(--spacing);
        }

        img {
            width: 100%;
        }

        `;
    shadow.appendChild(style);
    shadow.appendChild(wrapper);
  }
}

customElements.define("goovee-content", GooveeContent);
