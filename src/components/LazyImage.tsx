import { useRef, useState, useEffect } from 'react';
function LazyImage() {
  // Create a reference to the element that we want to observe
  const targetElement = useRef(null);
  const [isInView, setIsInView] = useState(false);

  // Set up the intersection observer when the component mounts
  // this says that when the bottom of the veiwport and the element are triggerDistFromViewport away,
  //it will load

  let triggerDistFromViewport = '300px';
  let options = {
    root: document.querySelector('#scrollArea'),
    rootMargin: triggerDistFromViewport,
    threshold: 0,
  };
  useEffect(() => {
    const observer = new IntersectionObserver(onIntersection, options);
    observer.observe(targetElement.current);

    // Clean up the observer when the component unmounts
    return () => observer.unobserve(targetElement.current);
  }, []);

  // This is the callback function that is executed whenever the
  // target element intersects with the viewport
  function onIntersection(entries) {
    console.log(
      'onIntersection called, entries[0].isIntersecting: ',
      entries[0].isIntersecting
    );
    if (entries[0].isIntersecting) {
      console.log('setting to true ');
      setIsInView(true);
    }
    // Do something with the intersection data, such as triggering
    // an animation or lazy loading content
  }

  return (
    <div ref={targetElement} className="frame">
      {isInView ? (
        <div>
          <img src="https://fastly.picsum.photos/id/426/200/300.jpg?hmac=ATVZT7wbjRxxBKYqLXE043ImnR_uNOkz00T9dWGYuow" />
        </div>
      ) : null}
    </div>
  );
}
export default LazyImage;
