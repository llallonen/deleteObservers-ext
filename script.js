// const getSiblings = function (elem) {
//     let siblings = [];
//     let next = elem.nextSibling;

//     for (let i = 0; i < 4; i++) {
//         if ((next.nodeType === 1 || next.nodeType === 3) && next !== elem) {
//             siblings.push(next);

//             next = next.nextSibling
//         }
//     };
//     return siblings;
// }

// const bloko = document.querySelector('.bloko-v-spacing_base-7');


const DEL_SELECTORS = '.bloko-v-spacing_base-7';

const mo = new MutationObserver(onMutation);

onMutation([{ addedNodes: [document.documentElement] }]);
observe();

function onMutation(mutations) {
    let stopped;
    for (const { addedNodes } of mutations) {
        for (const n of addedNodes) {
            //без проверки на tagName почему-то не работает
            if (n.tagName) {
                if (n.matches(DEL_SELECTORS)) {
                    stopped = true;
                    mo.disconnect();
                    n.remove();
                } else if (n.firstElementChild && n.querySelector(DEL_SELECTORS)) {
                    stopped = true;
                    mo.disconnect();
                    for (const el of n.querySelectorAll(DEL_SELECTORS)) el.remove();
                }
            }
        }
    }
    if (stopped) observe();
}

function observe() {
    mo.observe(document, {
        subtree: true,
        childList: true,
    });
}

// try {
//     const bloko = document.querySelector(".bloko-v-spacing_base-7");

//     const embarassingPhrase = getSiblings(bloko);
//     embarassingPhrase.map(item => item.remove());
// } catch {
//     console.log('error!!!!')
// }
