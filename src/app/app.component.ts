import { Component } from '@angular/core';
import { AnimationItem } from 'lottie-web';
import { AnimationOptions } from 'ngx-lottie';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'cny2022';
  minNum4D: number = 0;
  maxNum4D: number = 9;
  huatNum4D: string = '';

  minNumToto: number = 1;
  maxNumToto: number = 49;
  tempTotoNum: number = 0;
  huatNumToto: number[] = [];

  num4DCount: number = 0;
  numTotoCount: number = 0;

  totoNum1Stop: number = 0;
  totoNum1Start: number = 0;

  totoNum2Stop: number = 0;
  totoNum2Start: number = 0;

  totoNum3Stop: number = 0;
  totoNum3Start: number = 0;

  totoNum4Stop: number = 0;
  totoNum4Start: number = 0;

  totoNum5Stop: number = 0;
  totoNum5Start: number = 0;

  totoNum6Stop: number = 0;
  totoNum6Start: number = 0;

  intervals: number[] = [];

  options: AnimationOptions = {
    path: '/assets/animation.json',
  };

  animationCreated(animationItem: AnimationItem): void {
    console.log(animationItem);
  }

  randomNum() {
    return Math.floor(
      Math.random() * (this.maxNum4D - this.minNum4D + 1) + this.minNum4D
    );
  }

  generate4DNum() {
    var temp = '';
    for (let i = 0; i < 4; i++) {
      temp += this.randomNum().toString();
    }
    this.huatNum4D = temp;
  }

  alertUserToto() {
    if (this.numTotoCount === 5) {
      alert(
        'Draws take place every Monday and Thursday at 6.30pm. If it is a cascade draw, the draw time will be at 9.30pm.'
      );
    } else if (this.numTotoCount === 10) {
      alert('It is time to stop clicking !!!');
    } else if (this.numTotoCount > 10) {
      alert(this.generateRandomQuote());
    }
  }

  alertUser4D() {
    if (this.num4DCount === 5) {
      alert('Draws take place every Wednesday, Saturday and Sunday at 6.30pm.');
    } else if (this.num4DCount === 10) {
      alert('It is time to stop clicking !!!');
    } else if (this.num4DCount > 10) {
      alert(this.generateRandomQuote());
    }
  }

  generateTotoNum() {
    this.huatNumToto = [];
    for (let i = 0; i < 6; i++) {
      this.tempTotoNum = Math.floor(
        Math.random() * (this.maxNumToto - this.minNumToto + 1) +
          this.minNumToto
      );
      while (this.huatNumToto.includes(this.tempTotoNum)) {
        this.tempTotoNum = Math.floor(
          Math.random() * (this.maxNumToto - this.minNumToto + 1) +
            this.minNumToto
        );
      }
      this.huatNumToto.push(this.tempTotoNum);
    }
    this.totoNum1Stop = this.huatNumToto[0];
    this.totoNum2Stop = this.huatNumToto[1];
    this.totoNum3Stop = this.huatNumToto[2];
    this.totoNum4Stop = this.huatNumToto[3];
    this.totoNum5Stop = this.huatNumToto[4];
    this.totoNum6Stop = this.huatNumToto[5];
  }

  totoCount() {
    this.numTotoCount++;
  }

  count4D() {
    this.num4DCount++;
  }

  animateNum1(stop: any) {
    this.totoNum1Start = 0;
    var toStop = setInterval(() => {
      this.totoNum1Start++;
      if (this.totoNum1Start == stop) {
        clearInterval(toStop);
      }
    }, 20);
    this.intervals.push(toStop as unknown as number);
  }

  animateNum2(stop: any) {
    this.totoNum2Start = 0;
    var toStop = setInterval(() => {
      this.totoNum2Start++;
      if (this.totoNum2Start == stop) {
        clearInterval(toStop);
      }
    }, 20);
    this.intervals.push(toStop as unknown as number);
  }

  animateNum3(stop: any) {
    this.totoNum3Start = 0;
    var toStop = setInterval(() => {
      this.totoNum3Start++;
      if (this.totoNum3Start == stop) {
        clearInterval(toStop);
      }
    }, 20);
    this.intervals.push(toStop as unknown as number);
  }

  animateNum4(stop: any) {
    this.totoNum4Start = 0;
    var toStop = setInterval(() => {
      this.totoNum4Start++;
      if (this.totoNum4Start == stop) {
        clearInterval(toStop);
      }
    }, 20);
    this.intervals.push(toStop as unknown as number);
  }

  animateNum5(stop: any) {
    this.totoNum5Start = 0;
    var toStop = setInterval(() => {
      this.totoNum5Start++;
      if (this.totoNum5Start == stop) {
        clearInterval(toStop);
      }
    }, 20);
    this.intervals.push(toStop as unknown as number);
  }

  animateNum6(stop: any) {
    this.totoNum6Start = 0;
    var toStop = setInterval(() => {
      this.totoNum6Start++;
      if (this.totoNum6Start == stop) {
        clearInterval(toStop);
      }
    }, 20);
    this.intervals.push(toStop as unknown as number);
  }

  clearIntervals() {
    while (this.intervals.length) {
      clearInterval(this.intervals.pop());
    }
  }

  generateRandomQuote() {
    return this.quotes[Math.floor(Math.random() * this.quotes.length)];
  }

  quotes: string[] = [
    'A Gambler is nothing but a man who makes his living out of false hope. - William Bolitho',
    'There is a very easy way to return from a casino with a small fortune: Go there with a large one.',
    'Gambling: The sure way of getting nothing from something.',
    'The best throw of dice is to throw them away.',
    "Show me a gambler and I'll show you a loser. - Mario Puzo",
    'The safe way to double your money is to fold it over once and put it in your pocket. - Kin Hubbard',
    "Change your life today, don't gamble on the future, act now, without delay. - Simone de Beauvoir",
    'Gambling is a disease of barbarians superficially civilized. - William Ralph Inge',
    'Gambling is a family disease. One person may be addicted but the whole family suffers.',
    "Addiction begins with the hope that something 'out there' can instantly fill up the emptiness inside.",
    "It's only a gambling problem when you lose. Stop before it is too late.",
    'Even the best gambler will tell you that luck only lasts so long.',
    "Gambling is predictable, that is you can't be the winner forever.",
    'In the end, the house always win.',
    'The only way to be a millionaire gambler is to start out as a billionaire.',
    'If you must play, decide upon three things at the start: the rules of the game, the stakes, and the quitting time.',
    'The only sure thing about luck is that it will change. - Bret Harte',
    'True luck consists not in holding the best of the cards at the table; luckiest is he who knows just when to rise and go home. - John Milton Hay',
    'Of all gambling strategies, knowing when to quit may be the best.',
    "Quit while you're ahead. All the best gambler do. - Baltasar Gracian",
    'There are many harsh lessons to be learned from the gambling experience, but the harshest one of all is the difference between having Fun and being Smart. – Hunter S. Thompson',
    'In gambling, the many must lose in order that the few may win. - George Bernard Shaw',
    '“You cannot beat a roulette table unless you steal money from it.” -  Albert Einstein',
    '“True luck consists not of holding the best of the cards at the table; luckiest is he who knows just when to rise and go home.” - John Milton Hay',
    '“Gambling is the child of avarice, the brother of iniquity, and the father of mischief.” - George Washington',
    "“Writing's like gambling. Unpredictable and sporadic successes make you more addicted not less.” - M. John Harrison",
    "“Gambling with cards or dice or stocks is all one thing. It's getting money without giving an equivalent for it.” - Henry Ward Beecher",
    '“By gaming, we lose both our time and treasure, two things most precious to the life of man.” - Owen Felltham',
    '“Life is like a poker game. You deal or are dealt to. Your success depends on skill, luck, and creativity. You bet, check, bluff, and raise. Your education comes from those you play with. Sometimes, you win with a pair or lose with a full house. But whatever happens, it pays to keep a sense of humor.” - Anon',
    "“Making money at gambling was like seeing ghosts: you never met someone who'd seen a ghost, only someone who knew someone who'd seen a ghost. You only met people who knew people who'd made a fortune at White's or on the racecourse.” - Winston Graham",
    "“Someone once asked me why women don't gamble as much as men do, and I gave the common reply that we don't have as much money. That was a true but incomplete answer. In fact, women's total instinct for gambling is satisfied by marriage.” - Gloria Steinem",
    '“The safest way to double your money is to fold it over once and put it in your pocket.” - Kin Hubbard',
    '“The only sure thing about luck is that it will change.” - Wilson Mizner',
    "“If you gamble long enough, you'll always lose; the gambler is always ruined.” - Michael Crichton",
    ' “Gambling is a way of buying hope on credit.” - Alan Wykes',
    '“Gambling operates under the premise that greed can be satisfied by luck.” - Rita Mae Brown',
  ];
}
