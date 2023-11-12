interface IPayload {
  textAnimHolder: HTMLDivElement;
  animIn: string;
  animOut: string;
  removeItemClass?: boolean;
  barDelay: number;
  barAnimationDelay: number;
  startCount?:number
}
export function initTextAnimSlider(payload: IPayload) {
  const { textAnimHolder, animIn, animOut, barDelay, barAnimationDelay, startCount } = payload
  let textAnimItems: any = textAnimHolder.querySelector('[anim-items]');
  let textAnimItem: HTMLDivElement[] = textAnimItems.querySelectorAll('[anim-item]');
  let setTimeAnim: any;
  let animCounter = startCount || 0;
  animFunc();
  getHolderWidth();

  function animFunc() {
    clearTimeout(setTimeAnim);
    let animNextItem = null;
    // let animPrevItem: HTMLDivElement | null = null;
    let animFirstLoad = false;
    let animDuration = parseInt(textAnimHolder.getAttribute('data-delay') || "2000")
    setTimeout(() => {
      textAnimItems.classList.add("is-loading");
    }, barDelay)
    setTimeAnim = setTimeout(function () {
      animFirstLoad = true;

      animNextItem = textAnimItems.children[animCounter];
      textAnimItem.forEach((item: HTMLDivElement) => {
        item.classList.add("is-hidden");
        item.classList.remove("is-visible");
      })
      animNextItem.classList.remove("is-hidden");
      animNextItem.classList.add(animIn);
      textAnimItems.classList.remove("is-loading");
      

      if (animCounter === textAnimItem.length - 1) {
        animCounter = 0;
      } else {
        animCounter++;
      }
      textAnimHolder.style.width = animNextItem.clientWidth + 'px';
      // textAnimHolder.style.height = animNextItem.clientHeight + 'px';
      animFunc();
    }, animFirstLoad ? animDuration : barAnimationDelay);
  }

  function getHolderWidth() {
    var itemsWidth = [];
    var maxWidth = 100;
    for (var i = 0; i < textAnimItem.length; i++) {
      maxWidth = textAnimItem[i].clientWidth > maxWidth ? textAnimItem[i].clientWidth : maxWidth;
      itemsWidth.push(textAnimItem[i].clientWidth);
    }
    textAnimHolder.style.maxWidth = maxWidth + 'px';
  }

  function resizeHandler() {
    let setTimeAnimResize;
    clearTimeout(setTimeAnim);
    clearTimeout(setTimeAnimResize);
    getHolderWidth();

    setTimeAnimResize = setTimeout(() => {
      animFunc();
    }, 50);
  }

  return { resizeHandler }
}