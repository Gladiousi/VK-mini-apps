export const getSubscribersDeclension = (number: number): string => {
    const cases = ['подписчик', 'подписчика', 'подписчиков'];
    const num = Math.abs(number) % 100;
    const n1 = num % 10;
    
    if (num > 10 && num < 20) return cases[2];
    if (n1 > 1 && n1 < 5) return cases[1];
    if (n1 === 1) return cases[0];
    
    return cases[2];
  };
  