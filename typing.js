const typingDiv = document.getElementById('typing');

// console.log(typingDiv);

const fraseprimeira = `NOUVEAU TESTAMENT - MARC - Le commencement de l’évangile de Jésus Christ, le Fils de Dieu. Comme il est écrit dans les prophètes: Voici, j’envoie mon messager devant ta face, lequel préparera ton chemin devant toi. La voix de celui criant dans le désert: Préparez le chemin du SEIGNEUR; faites droits ses sentiers. Jean baptisait dans le désert, et prêchait le baptême de repentance, pour la rémission des péchés. Et tout le pays de Judée et les habitants de Jérusalem venaient à lui, et tous recevaient le baptême de lui dans le fleuve du Jourdain, confessant leurs péchés. Et Jean était vêtu de poils de chameau, et d’une ceinture de cuir autour de ses reins, et il mangeait des sauterelles et du miel sauvage. Et prêchait, disant: Il en vient un plus puissant que moi après moi, duquel je ne suis pas digne, en me baissant, de délier la courroie des souliers. En effet je vous ai baptisés d’eau, mais il vous baptisera de la Sainte Présence. Et il arriva, en ces jours-là, que Jésus vint de Nazareth de Galilée, et il reçut le baptême de Jean dans le Jourdain. Et aussitôt remontant de l’eau, il vit les cieux s’ouvrir et l’Esprit descendre sur lui comme une colombe. Et une voix vint du ciel, disant: Tu es mon Fils bien-aimé, en qui JE SUIS très satisfait. Et immédiatement l’Esprit le conduit dans le désert.
Et il fut là dans le désert quarante jours, tenté de Satan; et il était avec les bêtes sauvages; et les anges le servaient. Or après que Jean eut été mis en prison, Jésus vint en Galilée, prêchant l’évangile du royaume de Dieu, Et disant:Le temps est accompli, et le royaume de Dieu est proche: Repentez-vous et croyez à l’évangile. Et comme il marchait le long de la mer de Galilée, il vit Simon et André son frère jetant un filet dans la mer; car ils étaient pêcheurs.`

const frasedois = `Et prechait, disant: Il en vient un plus puissant que moi apres moi, duquel je ne suis pas digne, en me baissant, de delier la courroie des souliers. En effet je vous ai baptises deau, mais il vous baptisera de la Sainte Presence. Et il arriva, en ces jours-la, que Jesus vint de Nazareth de Galilee, et il reçut le bapteme de Jean dans le Jourdain. Et aussitot remontant de leau, il vit les cieux souvrir et lEsprit descendre sur lui comme une colombe. Et une voix vint du ciel, disant: Tu es mon Fils bien-aime, en qui JE SUIS tres satisfait. Et immediatement lEsprit le conduit dans le desert.`

var Sfraseprimeira = fraseprimeira.normalize('NFD').replace(/[\u0300-\u036f]/g, '').replace(/\u2019/g, "'")

var Sfrasedois = frasedois.normalize('NFD').replace(/[\u0300-\u036f]/g, '')

const pharagraphs = [Sfraseprimeira]

const text = pharagraphs[parseInt(Math.random() * pharagraphs.length)];

const characters = text.split('').map((char) => {
    const span = document.createElement('span');
    span.innerText = char;
    typingDiv.appendChild(span);
    span.setAttribute('id', 'charac')
    return span;
});

// let allcharac = window.document.querySelectorAll('#charac').forEach( item =>{
    // 
    // console.log(item)
// })


let cursorIndex = 0;
let cursorCharacter = characters[cursorIndex];
cursorCharacter.classList.add('cursor');

document.addEventListener('keydown', ({key}) => {

    if (key === cursorCharacter.innerText){
        cursorCharacter.classList.remove('cursor');
        cursorCharacter.classList.add('done');
        cursorCharacter = characters[++cursorIndex];
        cursorCharacter.classList.add('cursor');
    }
    // console.log(key)
});

// console.log(sxf)