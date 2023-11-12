export const animateValue = (parentElem: HTMLDivElement, callback: () => void) => {
  let perfData: PerformanceNavigationTiming = window.performance.getEntriesByType("navigation")[0] as PerformanceNavigationTiming,
  end = 100, start = 0;
  var range = end - start,
  current = start,
  increment = end > start? 1 : -1,
  stepTime = Math.abs(Math.floor(perfData.domContentLoadedEventEnd / range));
  const timer = setInterval(() => {
    current += increment;
    const progressText = parentElem.querySelector('.progress-text') as HTMLDivElement;
    progressText.textContent = current + "%";
    const progressBar = parentElem.querySelector('.progress-bar') as HTMLDivElement;
    progressBar.style.width = current + "%";
    if (current == end) {
      clearInterval(timer);
    }
  }, stepTime > 0 ? stepTime: 10);
  setTimeout(() => {
    callback()
  }, perfData.domComplete + 100);
}