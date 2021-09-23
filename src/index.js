import './style.css';
import img1 from './cheese_landing.jpg';
import img2 from './restaurant_landing.jpg';

const restaurantPage = (() => {
    // main container
    const content = document.createElement('div');
    content.classList.add('content');
    document.body.appendChild(content);
    
    // header
    const showHeader = () => {
        const header = document.createElement('header');
        header.classList.add('header');

        // title
        const restaurantTitle = document.createElement('h1');
        restaurantTitle.classList.add('title');
        restaurantTitle.textContent = 'Chez Christophe';
        header.appendChild(restaurantTitle);

        restaurantTitle.addEventListener('click', showLandingContent);

        // directory
        const directory = document.createElement('ul');
        directory.classList.add('directory');
        const about = document.createElement('a');
        const menu = document.createElement('a');
        const contact = document.createElement('a');
        about.textContent = 'About';
        menu.textContent = 'Menu';
        contact.textContent = 'Contact';
        directory.appendChild(about);
        directory.appendChild(menu);
        directory.appendChild(contact);
        header.appendChild(directory);

        about.addEventListener('click', showAboutContent);
        menu.addEventListener('click', showMenuContent);
        contact.addEventListener('click', showContactContent);

        document.body.append(header);
    }

    const showFooter = () => {
        // footer
        const footer = document.createElement('footer');
        footer.classList.add('footer');

        const link = document.createElement("a");
        link.textContent = "Copyright © 2021 Christopher J. Pohl";
        link.href = 'https://github.com/CJPohl';
        
        footer.appendChild(link);
        document.body.appendChild(footer);
    }

    // main landing page tab
    const showLandingContent = () => {
        content.textContent = '';
        const landingContainer = document.createElement('div');
        landingContainer.classList.add('landing-container');
        landingContainer.classList.add('fade-in');
        content.appendChild(landingContainer);

        const img1Container = document.createElement('div');
        img1Container.classList.add('landing-img-container1');
        const landingImg1 = new Image();
        landingImg1.src = img1;
        landingImg1.classList.add('landing-img');
        img1Container.appendChild(landingImg1);

        const img2Container = document.createElement('div');
        img2Container.classList.add('landing-img-container2');
        const landingImg2 = new Image();
        landingImg2.src = img2;
        landingImg2.classList.add('landing-img');
        img2Container.appendChild(landingImg2);
        
        landingContainer.appendChild(img1Container);
        landingContainer.appendChild(img2Container);

        const cheeseLabel = document.createElement('h1');
        const restaurantLabel = document.createElement('h1');
        cheeseLabel.classList.add('landing-label');
        restaurantLabel.classList.add('landing-label');
        cheeseLabel.textContent = 'Fromagerie';
        restaurantLabel.textContent = 'Restaurant';

        img1Container.appendChild(cheeseLabel);
        img2Container.appendChild(restaurantLabel);
    }

    const showAboutContent = () => {
        content.textContent = '';
        const aboutContainer = document.createElement('div');
        const aboutTitle = document.createElement('h3');
        const aboutContent1 = document.createElement('p');
        const aboutContent2 = document.createElement('p');
        const aboutContent3 = document.createElement('p');

        aboutContainer.classList.add('about-container');
        aboutContainer.classList.add('fade-in');
        aboutTitle.classList.add('about-title');
        aboutContent1.classList.add('about-content');
        aboutContent2.classList.add('about-content');
        aboutContent3.classList.add('about-content');

        aboutTitle.textContent = 'Ce Restaurant';
        aboutContent1.textContent = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Purus viverra accumsan in nisl nisi scelerisque eu. Cras adipiscing enim eu turpis egestas pretium. Malesuada fames ac turpis egestas sed tempus urna. Egestas diam in arcu cursus euismod quis. Fusce id velit ut tortor pretium. Et malesuada fames ac turpis egestas maecenas pharetra convallis posuere. Id faucibus nisl tincidunt eget nullam non nisi est sit. Nulla facilisi nullam vehicula ipsum. Nunc aliquet bibendum enim facilisis gravida neque convallis a. Erat nam at lectus urna duis convallis. Pellentesque dignissim enim sit amet venenatis urna cursus.';
        aboutContent2.textContent = 'Ultrices vitae auctor eu augue ut lectus arcu. Praesent tristique magna sit amet purus gravida. Bibendum neque egestas congue quisque egestas diam in arcu cursus. Sollicitudin nibh sit amet commodo nulla facilisi. In hac habitasse platea dictumst vestibulum. Suscipit tellus mauris a diam maecenas sed enim. Elit duis tristique sollicitudin nibh sit amet commodo. Pulvinar neque laoreet suspendisse interdum. Tortor condimentum lacinia quis vel eros. Diam quam nulla porttitor massa id neque aliquam vestibulum morbi. Id volutpat lacus laoreet non curabitur gravida. Tellus mauris a diam maecenas. Eget nulla facilisi etiam dignissim diam quis.';
        aboutContent3.textContent = 'Ultrices eros in cursus turpis massa. Duis ut diam quam nulla porttitor massa id neque. Enim sit amet venenatis urna cursus. Quis blandit turpis cursus in hac. Eget lorem dolor sed viverra ipsum nunc aliquet bibendum. Volutpat est velit egestas dui id ornare. Sed lectus vestibulum mattis ullamcorper. Et ligula ullamcorper malesuada proin. Lobortis feugiat vivamus at augue eget arcu dictum. Consequat mauris nunc congue nisi vitae suscipit tellus. Eu consequat ac felis donec et odio. Elementum integer enim neque volutpat ac. Amet dictum sit amet justo donec enim diam vulputate. Pretium aenean pharetra magna ac placerat vestibulum lectus. Tempus quam pellentesque nec nam. Gravida rutrum quisque non tellus orci ac auctor. Ut faucibus pulvinar elementum integer enim neque. Neque ornare aenean euismod elementum nisi quis. Ornare quam viverra orci sagittis.';

        aboutContainer.appendChild(aboutTitle);
        aboutContainer.appendChild(aboutContent1);
        aboutContainer.appendChild(aboutContent2);
        aboutContainer.appendChild(aboutContent3);
        content.appendChild(aboutContainer);
    }
    
    const showMenuContent = () => {
        content.textContent = '';
        const menuContainer = document.createElement('div');
        menuContainer.classList.add('menu-container');
        menuContainer.classList.add('fade-in');
        content.appendChild(menuContainer);

        const entree1 = document.createElement('div');
        const e1Title = document.createElement('h5');
        e1Title.classList.add('menu-item-titles');
        e1Title.textContent = 'Escargots de Bourgogne'
        const e1Item = document.createElement('p');
        e1Item.classList.add('menu-item-descriptions');
        e1Item.textContent = 'Snails, Garlic Butter, Herbs, White Wine';

        entree1.appendChild(e1Title);
        entree1.appendChild(e1Item);

        const entree2 = document.createElement('div');
        const e2Title = document.createElement('h5');
        e2Title.classList.add('menu-item-titles');
        e2Title.textContent = 'Baked Seafood Crepe'
        const e2Item = document.createElement('p');
        e2Item.classList.add('menu-item-descriptions');
        e2Item.textContent = 'Scallop, Shrimp, Mushroom Caramelized Onion & Bechamel';

        entree2.appendChild(e2Title);
        entree2.appendChild(e2Item);

        const entree3 = document.createElement('div');
        const e3Title = document.createElement('h5');
        e3Title.classList.add('menu-item-titles');
        e3Title.textContent = 'Pate de Campagne'
        const e3Item = document.createElement('p');
        e3Item.classList.add('menu-item-descriptions');
        e3Item.textContent = 'Rustic Pork & Duck Recipe, Cornichons Duo de Moutarde';

        entree3.appendChild(e3Title);
        entree3.appendChild(e3Item);

        const plat1 = document.createElement('div');
        const p1Title = document.createElement('h5');
        p1Title.classList.add('menu-item-titles');
        p1Title.textContent = 'Truite Amandine';
        const p1Item = document.createElement('p');
        p1Item.classList.add('menu-item-descriptions');
        p1Item.textContent = 'Pan Seared Rainbow Trout, Toasted Almonds Grilled Lemon, Brown Butter';

        plat1.appendChild(p1Title);
        plat1.appendChild(p1Item);

        const plat2 = document.createElement('div');
        const p2Title = document.createElement('h5');
        p2Title.classList.add('menu-item-titles');
        p2Title.textContent = 'Coq Au Vin';
        const p2Item = document.createElement('p');
        p2Item.classList.add('menu-item-descriptions');
        p2Item.textContent = 'Half Amish Chicken Braised in Wine, Mushroom';

        plat2.appendChild(p2Title);
        plat2.appendChild(p2Item);

        const plat3 = document.createElement('div');
        const p3Title = document.createElement('h5');
        p3Title.classList.add('menu-item-titles');
        p3Title.textContent = "Canard a l'Orange";
        const p3Item = document.createElement('p');
        p3Item.classList.add('menu-item-descriptions');
        p3Item.textContent = 'Roast Duck, Orange Supreme, Sauce Bigarade';

        plat3.appendChild(p3Title);
        plat3.appendChild(p3Item);

        const dessert1 = document.createElement('div');
        const d1Title = document.createElement('h5');
        d1Title.classList.add('menu-item-titles');
        d1Title.textContent = 'Tarte Maison'
        const d1Item = document.createElement('p');
        d1Item.classList.add('menu-item-descriptions');
        d1Item.textContent = 'Daily homeade tart';

        dessert1.appendChild(d1Title);
        dessert1.appendChild(d1Item);

        const dessert2 = document.createElement('div');
        const d2Title = document.createElement('h5');
        d2Title.classList.add('menu-item-titles');
        d2Title.textContent = 'Creme Brulee';
        const d2Item = document.createElement('p');
        d2Item.classList.add('menu-item-descriptions');
        d2Item.textContent = 'Custard with sugar and caramel glaze';

        dessert2.appendChild(d2Title);
        dessert2.appendChild(d2Item);

        const dessert3 = document.createElement('div');
        const d3Title = document.createElement('h5');
        d3Title.classList.add('menu-item-titles');
        d3Title.textContent = 'Chocolate Mousses'
        const d3Item = document.createElement('p');
        d3Item.classList.add('menu-item-descriptions');
        d3Item.textContent = 'Creme Chantilly';

        dessert3.appendChild(d3Title);
        dessert3.appendChild(d3Item);
       
        menuContainer.appendChild(entree1);
        menuContainer.appendChild(entree2);
        menuContainer.appendChild(entree3);
        menuContainer.appendChild(plat1);
        menuContainer.appendChild(plat2);
        menuContainer.appendChild(plat3);
        menuContainer.appendChild(dessert1);
        menuContainer.appendChild(dessert2);
        menuContainer.appendChild(dessert3);
    }

    const showContactContent = () => {
        content.textContent = '';
        const contactContainer = document.createElement('div');
        contactContainer.classList.add('contact-container');
        contactContainer.classList.add('fade-in');
        content.appendChild(contactContainer);

        const contactTitle = document.createElement('h1');
        contactTitle.classList.add('contact-title');
        contactTitle.textContent = 'FOR RESERVATIONS AND MORE INFOMATION:'
        const contactNumber = document.createElement('p');
        contactNumber.classList.add('contact-number-email');
        contactNumber.textContent = '(###)-###-####';

        contactContainer.appendChild(contactTitle);
        contactContainer.appendChild(contactNumber);

        const contactBuisiness = document.createElement('h1');
        contactBuisiness.classList.add('contact-title');
        contactBuisiness.textContent = 'FOR BUSINESS INQUIRIES AND ALL ELSE:';
        const contactEmail = document.createElement('p');
        contactEmail.classList.add('contact-number-email');
        contactEmail.textContent = 'LeSacreBleu@frenchworld@@$.com';

        contactContainer.appendChild(contactBuisiness);
        contactContainer.appendChild(contactEmail);
    }

    window.onload = () => {
        showHeader();
        showLandingContent();
        showFooter();
    };  
})();