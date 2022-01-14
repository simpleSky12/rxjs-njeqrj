import './style.css';

import { of, Observable } from 'rxjs';

const source$ = of(1, 2, 3);
source$.subscribe(console.log);

const onSubscribe = (observe) => {
  let number = 1;
  const handle = setInterval(() => {
    observe.next(number++);
    if (number > 3) {
      clearInterval(handle);
    }
  }, 1000);
};

const source$2 = new Observable(onSubscribe);
const theObserve = {
  next: (item) => console.log(item),
};
source$2.subscribe(theObserve);
