class GooveeContent extends HTMLElement {
    constructor() {
      super();
      var shadow = this.attachShadow({ mode: "closed" });

      var wrapper = document.createElement("div");
      wrapper.innerHTML = `
      <!-- INTRODUCTION -->
      <section id="introduction" class="g-text-center g-mt-4">
      <h3 class="g-mb-1"><b>Goovee : le portail client Universel</b></h3>
      <h6 class="g-text-normal g-mb-3">
          Connectez-vous à vos clients comme jamais !
      </h6>
      <img
          src="https://goovee.com/wp-content/uploads/2020/11/GOOVEE_PA.png"
          alt="Goovee : le portail client Universel"
      />
      </section>
      <!-- ACTIVITY -->
      <section id="activity" class="g-container g-text-center">
      <p>
          Goovee est la nouvelle plateforme tout en un pour être connecté en
          continu<br />
          avec vos clients et leur offrir une expérience inédite
      </p>
      <h4 class="g-mt-8 g-mb-1">
          Nouveau : Maintenez votre activité et<br />
          restez en contact avec vos clients
      </h4>
      <p class="g-mb-3">
          Avec Goovee, vous créez un espace client en ligne pour la vente et le
          paiement<br />
          et vous gérez les stocks et les livraisons à domicile
      </p>
      <div
          class="pack g-bg-secondary g-p-2 g-mb-1 g-pt-6 g-pb-6 g-text-white g-round"
      >
          <h4 class="g-mb-4">
          Pack plus est gratuit pour 1 an pour les petites entreprises et les<br />
          commerces de proximité.
          </h4>
          <a
          href="https://goovee.com/goovee-gratuit-1-an/"
          class="g-button-primary"
          >En savoir plus</a
          >
      </div>
      </section>

      <!-- MODULES -->
      <section id="modules" class="g-container g-text-center">
      <h4 class="g-mt-2 g-mb-3 g-text-normal">
          De nombreux modules pour gérer vos clients
      </h4>
      <h5 class="g-text-normal">Deux applications pour deux usages:</h5>
      <!-- GOOVEE PRO -->
      <h3 class="g-mt-4 g-mb-1">Goovee Pro</h3>
      <p class="g-text-normal g-mb-3">
          Goovee pro est l’application qui permet de gérer le backoffice
      </p>
      <div class="g-row">
          <div class="module-card g-col-sm-12 g-col-4">
          <img
              src="https://goovee.com/wp-content/uploads/2019/10/CRM-1.svg-2@4x-150x150.png"
              alt="CRM"
          />
          <h6 class="g-text-bold">CRM</h6>
          </div>
          <div class="module-card g-col-sm-12 g-col-4">
          <img
              src="https://goovee.com/wp-content/uploads/2019/10/Facturation.svg-2@4x-150x150.png"
              alt="Facturation"
          />
          <h6 class="g-text-bold">Facturation</h6>
          </div>
          <div class="module-card g-col-sm-12 g-col-4">
          <img
              src="https://goovee.com/wp-content/uploads/2019/10/STOCK-1-150x150.png"
              alt="Stock"
          />
          <h6 class="g-text-bold">
              Gestion des devis<br />
              et commandes
          </h6>
          </div>
      </div>
      <!-- GOOVEE CLIENT -->
      <h3 class="g-mt-4 g-mb-1">Goovee</h3>
      <p class="g-text-normal g-mb-3">
          C’est l’App pour vos clients : achats et paiements en ligne, validation
          de devis et commandes, <br />support client, signature électronique,
          etc.
      </p>
      <div class="g-row">
          <div class="module-card g-col-sm-12 g-col-4">
          <img
              src="https://goovee.com/wp-content/uploads/2020/11/caddie.png"
              alt="CRM"
          />
          <h6 class="g-text-bold">E-commerce</h6>
          </div>
          <div class="module-card g-col-sm-12 g-col-4">
          <img
              src="https://goovee.com/wp-content/uploads/2020/11/ordi.png"
              alt="Facturation"
          />
          <h6 class="g-text-bold">Demande de devis</h6>
          </div>
          <div class="module-card g-col-sm-12 g-col-4">
          <img
              src="https://goovee.com/wp-content/uploads/2020/11/calcul.png"
              alt="Stock"
          />
          <h6 class="g-text-bold">
              Factures et paiement<br />
              en ligne
          </h6>
          </div>
      </div>
      </section>
      <!-- APPLICATION -->
      <section id="application" class="g-container g-text-center g-mt-8">
      <h4 class="g-mb-1">Gérer son business n’a jamais été aussi simple.</h4>
      <img src="https://goovee.com/wp-content/uploads/2020/04/SCREEN.png" />
      <a href="https://pro.goovee.com/inscription" class="g-button-secondary"
          >Créez votre compte</a
      >
      <div class="free g-row">
          <div class="g-col-sm-12 g-col-6">
          <img
              src="https://goovee.com/wp-content/uploads/2019/10/H-287x300.png"
          />
          </div>
          <div class="g-align-self-center g-text-left g-col-sm-12 g-col-6 g-p-2">
          <h5 class="g-text-normal g-mb-2">
              Application <b>gratuite</b> – pour toujours :
          </h5>
          <ul>
              <li><p class="g-mb-1 g-text-bold">Pas de période d’essai</p></li>
              <li><p class="g-mb-1 g-text-bold">Fonctionnalités complètes</p></li>
              <li>
              <p class="g-mb-1 g-text-bold">
                  Liberté : vous pouvez exporter l’ensemble des données à tout
                  moment.
              </p>
              </li>
          </ul>
          </div>
      </div>
      </section>
      <!-- STORE -->
      <section id="store" class="g-bg-secondary g-mt-4">
      <div class="g-container g-pt-3 g-pb-3">
          <h4 class="g-text-white g-text-center g-mb-2">
          Simple, nomade, puissant !
          </h4>
          <div class="g-row g-p-2">
          <div class="g-col-sm-12 g-col-6 g-align-self-center">
              <h6 class="g-text-white g-text-normal">
              Gérez votre business où que vous soyez, d’un clic depuis votre
              smartphone, votre tablette ou votre ordinateur. <br /><br />Offrez
              à vos clients un véritable portail : pour acheter vos services,
              voir leurs devis, factures, commandes, etc.. Avec Goovee, disposez
              d’un application multiplateforme. <br /><br />Gagnez du temps pour
              gérer votre trésorerie, le suivi des facturations et votre
              inventaire. <br /><br />Soyez payé plus rapidement !
              </h6>
          </div>
          <div class="g-col-sm-12 g-col-6 g-align-self-center">
              <img
              src="https://goovee.com/wp-content/uploads/2020/11/Image4-e1604398441489.png"
              />
          </div>
          </div>
          <div class="logo g-p-2">
          <a href="https://play.google.com/store/apps/developer?id=Goovee+App"
              ><img
              src="https://goovee.com/wp-content/uploads/2020/04/Bitmap-e1529942093846-300x89.png" /></a
          >&nbsp;&nbsp;
          <a href="https://play.google.com/store/apps/developer?id=Goovee+App">
              <img
              src="https://goovee.com/wp-content/uploads/2020/11/app-store.png"
          /></a>
          </div>
      </div>
      </section>
      <!-- ACTIVITY -->
      <section id="activity" class="g-container g-text-center g-mt-4">
      <h4 class="g-mb-1">Pourquoi une app client ?</h4>
      <div class="g-row">
          <div class="g-col-sm-12 g-col-6 g-p-2">
          <h5 class="g-text-left g-mb-1">Ecommerce</h5>
          <img
              src="https://goovee.com/wp-content/uploads/2019/10/STARTUP@4x-980x535.png"
          />
          <p class="g-mt-1 g-text-left">
              Sophie, travaille dans une société qui distribue des produits frais.
              Elle vend en ligne les produits de son exploitation. En quelques
              clics, elle paramètre Goovee. Ses clients, via l’application mobile
              ou sur le web, peuvent commander ses paniers. Sophie peut ainsi
              centraliser l’ensemble des demandes et préparer les livraisons. Ses
              clients n’ont plus qu’à valider ces commandes via la app, puis payer
              par CB, ou consulter sur leur app et par email les factures à payer
              (chèque, virement, etc.).
          </p>
          </div>
          <div class="g-col-sm-12 g-col-6 g-p-2">
          <h5 class="g-text-left g-mb-1">Société de service</h5>
          <img
              src="https://goovee.com/wp-content/uploads/2019/10/FREELANCE@4x-980x535.png"
          />
          <p class="g-mt-1 g-text-left">
              David Travaille dans une agence web, il reçoit directement depuis
              son application la confirmation des commandes de ses clients
              habituels. Il réalise ses prestations et les livre à ses clients.
              Une fois validées, ses clients peuvent directement recevoir et payer
              leurs factures depuis leur smartphone ou leur portail web.
          </p>
          </div>
          <div class="g-col-sm-12 g-col-6 g-p-2">
          <h5 class="g-text-left g-mb-1">Freelances</h5>
          <img
              src="https://goovee.com/wp-content/uploads/2019/10/TENNIS@4x-1024x559.png"
          />
          <p class="g-mt-1 g-text-left">
              Emma est professeur de tennis. Pour ses cours particuliers, elle
              donne à son élève son identifiant Goovee. Lea télécharge Goovee
              gratuitement, et avec le lien, elle sélectionne le pack de 10h. Elle
              paye par carte et elle reçoit immédiatement sa facture. Et voilà !
          </p>
          </div>
          <div class="g-col-sm-12 g-col-6 g-p-2">
          <h5 class="g-text-left g-mb-1">Commerce de proximité</h5>
          <img
              src="https://goovee.com/wp-content/uploads/2019/11/PATISSERIE@4x-980x535.png"
          />
          <p class="g-mt-1 g-text-left">
              Paul travaille dans un restaurant du quartier. Tous les jours, Paul
              prépare les plats qui seront ensuite livrés à leurs clients. Les
              clients peuvent directement payer leur commande sur Goovee. Certains
              clients viennent chercher leur commandes, d’autre sont livrés
              directement à leur domicile. C’est aussi simple que ça.
          </p>
          </div>
      </div>
      <a
          href="http://goovee.com/contact/"
          class="g-mt-2 g-inline-block g-button-secondary"
          >Contactez-nous</a
      >
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

      `;
      shadow.appendChild(style);
      shadow.appendChild(wrapper);
    }
  }

  customElements.define("goovee-content", GooveeContent);
