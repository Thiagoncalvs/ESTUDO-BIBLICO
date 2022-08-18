const typingDiv = document.getElementById('typing');

console.log(typingDiv);

const pharagraphs = [
    `NOUVEAU TESTAMENT - MARC - Le commencement de levangile de Jesus Christ, le Fils de Dieu. Comme il est ecrit dans les prophetes: Voici, jenvoie mon messager devant ta face, lequel preparera ton chemin devant toi. La voix de celui criant dans le desert: Preparez le chemin du SEIGNEUR; faites droits ses sentiers. Jean baptisait dans le desert, et prechait le bapteme de repentance, pour la remission des peches.Et tout le pays de Judee et les habitants de Jerusalem venaient a lui, et tous recevaient le apteme de lui dans le fleuve du Jourdain, confessant leurs peches. Et Jean etait vetu de poils de chameau, et dune ceinture de cuir autour de ses reins, et il mangeait des sauterelles et du miel sauvage.`,
    `Et prechait, disant: Il en vient un plus puissant que moi apres moi, duquel je ne suis pas digne, en me baissant, de delier la courroie des souliers. En effet je vous ai baptises deau, mais il vous baptisera de la Sainte Presence. Et il arriva, en ces jours-la, que Jesus vint de Nazareth de Galilee, et il reçut le bapteme de Jean dans le Jourdain. Et aussitot remontant de leau, il vit les cieux souvrir et lEsprit descendre sur lui comme une colombe. Et une voix vint du ciel, disant: Tu es mon Fils bien-aime, en qui JE SUIS tres satisfait. Et immediatement lEsprit le conduit dans le desert.`,
]

const text = pharagraphs[parseInt(Math.random() * pharagraphs.length)];

const characters = text.split('').map((char) => {
    const span = document.createElement('span');
    span.innerText = char;
    typingDiv.appendChild(span);
    return span;
});

let cursorIndex = 0;
let cursorCharacter = characters[cursorIndex];
cursorCharacter.classList.add('cursor');

document.addEventListener('keydown', ({key}) => {
    console.log(key);
    if (key === cursorCharacter.innerText){
        cursorCharacter.classList.remove('cursor');
        cursorCharacter.classList.add('done');
        cursorCharacter = characters[++cursorIndex];
        cursorCharacter.classList.add('cursor');
    }
});