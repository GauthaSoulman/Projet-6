/* export function photographerFactory(data) {
    const { name, portrait } = data;

    const picture = `assets/photographers/${portrait}`;

    function getUserCardDOM() {
        const article = document.createElement( 'article' );
        const img = document.createElement( 'img' );
        img.setAttribute("src", picture)
        const h2 = document.createElement( 'h2' );
        h2.textContent = name;
        article.appendChild(img);
        article.appendChild(h2);
        return (article);
    }
    return { name, picture, getUserCardDOM }
} */

class PhotographesFactory {
    constructor(photographers) {
        return new Photographe(photographers)
    }
}

class ProfilPhotographeFactory {
    constructor(photographers, idURL) {
        return new Photographe(photographers, idURL)
    }
}

class PhotoFactory {
    constructor(photo, idURL) {
        let nomPhotographe = "";
        switch(idURL) {
            case "243":
                nomPhotographe = "Mimi";
                break;
            case "930":
                nomPhotographe = "Ellie_Rose";
                break;    
            case "82":
                nomPhotographe = "Tracy";
                break;
            case "527":
                nomPhotographe = "Nabeel";
                break;
            case "925":
                nomPhotographe = "Rhode";
                break;    
            case "195":
                nomPhotographe = "Marcel";
                break;
            default:
                break;
        }
        if("image" in photo) {
            return new Photo(photo, nomPhotographe)
        } else {
            return new Video(photo, nomPhotographe)
        }
    }
}
