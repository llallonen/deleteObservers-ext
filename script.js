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

// const vacancy = document.querySelector('.vacancy-title').parentNode;

// const phraseItemChecker = vacancy.querySelector('.bloko-v-spacing_base-7');
// const phraseItem = phraseItemChecker.nextSibling;
// const counter = vacancy.querySelector('span[class*="count--"]');
// console.log(phraseItemChecker, phraseItem, counter)

const DEL_SELECTOR = '.bloko-v-spacing_base-7';

const mo = new MutationObserver(onMutation);

onMutation([{addedNodes: [document.documentElement]}]);
observe();

function onMutation(mutations) {
  let stopped;
  for (const {addedNodes} of mutations) {
    for (const n of addedNodes) {
      if (n.tagName) {
        if (n.matches(DEL_SELECTOR)) {
          stopped = true;
          

          const del = n.nextSibling;
          const del2 = del.nextSibling;
          const del3 = del2.nextSibling;
          const del4 = del3.nextSibling;
          const delArr = [del, del2, del3, del4];
          delArr.map(item =>  item.remove())
          mo.disconnect();
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

// const mo = new MutationObserver(onMutation);
// onMutation([{addedNodes: [document.documentElement]}]);
// observe();

// function onMutation(mutations) {
//   let stopped;
//   for (const {addedNodes} of mutations) {
//     for (const n of addedNodes) {
//       if (n.nodeName) {
//         if (n.matches(DEL_SELECTOR)) {
//           stopped = true;
//           mo.disconnect();

//           let phraseItem2 = phraseItem.nextSibling;
//           phraseItem.remove();
//           phraseItem2.remove();
//           counter.remove();

//         }
//         // } else if (n.firstElementChild && n.querySelector(DEL_SELECTOR)) {
//         //   stopped = true;
//         //   mo.disconnect();
//         //   for (const el of n.querySelectorAll(DEL_SELECTOR)) el.remove();
//         // }
//       }
//     }
//   }
//   if (stopped) observe();
// }

// function observe() {
//   mo.observe(document, {
//     subtree: true,
//     childList: true,
//   });
// }
