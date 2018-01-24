//terminal.js
console.log('terminal.js loaded');



// TERMINAL
// put location-info
var typed = new Typed("#terminal-short-info", {
  /**
   * @property {array} strings strings to be typed
   * @property {string} stringsElement ID of element containing string children
   */ // Moved from the East to the West. Raised by the noughties.
  strings: [ '<br>hi, i\'m cam. i\'m a creator.'],
  stringsElement: null,

  /**
   * @property {number} typeSpeed type speed in milliseconds
   */
  typeSpeed: 70,

  /**
   * @property {number} startDelay time before typing starts in milliseconds
   */
  startDelay: 0,

  /**
   * @property {number} backSpeed backspacing speed in milliseconds
   */
  backSpeed: 0,

  /**
   * @property {boolean} smartBackspace only backspace what doesn't match the previous string
   */
  smartBackspace: true,

  /**
   * @property {boolean} shuffle shuffle the strings
   */
  shuffle: false,

  /**
   * @property {number} backDelay time before backspacing in milliseconds
   */
  backDelay: 700,

  /**
   * @property {boolean} fadeOut Fade out instead of backspace
   * @property {string} fadeOutClass css class for fade animation
   * @property {boolean} fadeOutDelay Fade out delay in milliseconds
   */
  fadeOut: false,
  fadeOutClass: 'typed-fade-out',
  fadeOutDelay: 50,

  /**
   * @property {boolean} loop loop strings
   * @property {number} loopCount amount of loops
   */
  loop: false,
  loopCount: Infinity,

  /**
   * @property {boolean} showCursor show cursor
   * @property {string} cursorChar character for cursor
   * @property {boolean} autoInsertCss insert CSS for cursor and fadeOut into HTML <head>
   */
  showCursor: false,
  cursorChar: '_',
  autoInsertCss: false,

  /**
   * @property {string} attr attribute for typing
   * Ex: input placeholder, value, or just HTML text
   */
  attr: null,

  /**
   * @property {boolean} bindInputFocusEvents bind to focus and blur if el is text input
   */
  bindInputFocusEvents: false,

  /**
   * @property {string} contentType 'html' or 'null' for plaintext
   */
  contentType: 'html',

  /**
   * All typing is complete
   * @param {Typed} self
   */
  onComplete: (self) => {},

  /**
   * Before each string is typed
   * @param {number} arrayPos
   * @param {Typed} self
   */
  preStringTyped: (arrayPos, self) => {},

  /**
   * After each string is typed
   * @param {number} arrayPos
   * @param {Typed} self
   */
  onStringTyped: (arrayPos, self) => {},

  /**
   * During looping, after last string is typed
   * @param {Typed} self
   */
  onLastStringBackspaced: (self) => {},

  /**
   * Typing has been stopped
   * @param {number} arrayPos
   * @param {Typed} self
   */
  onTypingPaused: (arrayPos, self) => {},

  /**
   * Typing has been started after being stopped
   * @param {number} arrayPos
   * @param {Typed} self
   */
  onTypingResumed: (arrayPos, self) => {},

  /**
   * After reset
   * @param {Typed} self
   */
  onReset: (self) => {},

  /**
   * After stop
   * @param {number} arrayPos
   * @param {Typed} self
   */
  onStop: (arrayPos, self) => {},

  /**
   * After start
   * @param {number} arrayPos
   * @param {Typed} self
   */
  onStart: (arrayPos, self) => {},

  /**
   * After destroy
   * @param {Typed} self
   */
  onDestroy: (self) => {}
});

//
// TERMINAL
// put location-info
var typed = new Typed("#my-quote", {
  /**
   * @property {array} strings strings to be typed
   * @property {string} stringsElement ID of element containing string children
   */ // Moved from the East to the West. Raised by the noughties.
  strings: ['<br>Chapter 1: Commodities',
            '<br>Section 1: The Two Factors of a Commodity:',
            '<br>Use-Value and Value',
            '<br>The wealth of those societies in which the capitalist mode of production prevails, presents itself',
            '<br>as “an immense accumulation of commodities,”',
            '<br>1 its unit being a single commodity. Our investigation must therefore begin with the analysis of a commodity.',
            '<br>A commodity is, in the first place, an object outside us, a thing that by its properties satisfies',
            '<br>human wants of some sort or another. The nature of such wants, whether, for instance, they spring',
            '<br>from the stomach or from fancy, makes no difference.',
            '<br>2 Neither are we here concerned to know how the object satisfies these wants,',
            '<br>whether directly as means of subsistence, or indirectly as means of production.',
            '<br>Every useful thing, as iron, paper, &c., may be looked at from the two points of view of quality',
            '<br>and quantity. It is an assemblage of many properties, and may therefore be of use in various ways.',
            '<br>To discover the various uses of things is the work of history.3 So also is the establishment of',
            '<br>socially-recognized standards of measure for the quantities of these useful objects. The diversity',
            '<br>of these measures has its origin partly in the diverse nature of the objects to be measured, partly in convention.',
            '<br>The utility of a thing makes it a use value.4 But this utility is not a thing of air. Being limited by',
            '<br>the physical properties of the commodity, it has no existence apart from that commodity. A',
            '<br>commodity, such as iron, corn, or a diamond, is therefore, so far as it is a material thing, a use',
            '<br>value, something useful. This property of a commodity is independent of the amount of labour',
            '<br>required to appropriate its useful qualities. When treating of use value, we always assume to be',
            '<br>dealing with definite quantities, such as dozens of watches, yards of linen, or tons of iron. The use',
            '<br>values of commodities furnish the material for a special study, that of the commercial knowledge',
            '<br>of commodities.5 Use values become a reality only by use or consumption: they also constitute',
            '<br>the substance of all wealth, whatever may be the social form of that wealth. In the form of society',
            '<br>we are about to consider, they are, in addition, the material depositories of exchange value.',
            '<br>Exchange value, at first sight, presents itself as a quantitative relation, as the proportion in which',
            '<br>values in use of one sort are exchanged for those of another sort,6 a relation constantly changing',
            '<br>with time and place. Hence exchange value appears to be something accidental and purely',
            '<br>relative, and consequently an intrinsic value, i.e., an exchange value that is inseparably connected',
            '<br>with, inherent in commodities, seems a contradiction in terms.7 Let us consider the matter a little',
            '<br>more closely.', ],
  stringsElement: null,



  /**
   * @property {number} typeSpeed type speed in milliseconds
   */
  typeSpeed: 70,

  /**
   * @property {number} startDelay time before typing starts in milliseconds
   */
  startDelay: 7000,

  /**
   * @property {number} backSpeed backspacing speed in milliseconds
   */
  backSpeed: 30,

  /**
   * @property {boolean} smartBackspace only backspace what doesn't match the previous string
   */
  smartBackspace: true,

  /**
   * @property {boolean} shuffle shuffle the strings
   */
  shuffle: false,

  /**
   * @property {number} backDelay time before backspacing in milliseconds
   */
  backDelay: 700,

  /**
   * @property {boolean} fadeOut Fade out instead of backspace
   * @property {string} fadeOutClass css class for fade animation
   * @property {boolean} fadeOutDelay Fade out delay in milliseconds
   */
  fadeOut: false,
  fadeOutClass: 'typed-fade-out',
  fadeOutDelay: 50,

  /**
   * @property {boolean} loop loop strings
   * @property {number} loopCount amount of loops
   */
  loop: false,
  loopCount: Infinity,

  /**
   * @property {boolean} showCursor show cursor
   * @property {string} cursorChar character for cursor
   * @property {boolean} autoInsertCss insert CSS for cursor and fadeOut into HTML <head>
   */
  showCursor: false,
  cursorChar: '_',
  autoInsertCss: false,

  /**
   * @property {string} attr attribute for typing
   * Ex: input placeholder, value, or just HTML text
   */
  attr: null,

  /**
   * @property {boolean} bindInputFocusEvents bind to focus and blur if el is text input
   */
  bindInputFocusEvents: false,

  /**
   * @property {string} contentType 'html' or 'null' for plaintext
   */
  contentType: 'html',

  /**
   * All typing is complete
   * @param {Typed} self
   */
  onComplete: (self) => {},

  /**
   * Before each string is typed
   * @param {number} arrayPos
   * @param {Typed} self
   */
  preStringTyped: (arrayPos, self) => {},

  /**
   * After each string is typed
   * @param {number} arrayPos
   * @param {Typed} self
   */
  onStringTyped: (arrayPos, self) => {},

  /**
   * During looping, after last string is typed
   * @param {Typed} self
   */
  onLastStringBackspaced: (self) => {},

  /**
   * Typing has been stopped
   * @param {number} arrayPos
   * @param {Typed} self
   */
  onTypingPaused: (arrayPos, self) => {},

  /**
   * Typing has been started after being stopped
   * @param {number} arrayPos
   * @param {Typed} self
   */
  onTypingResumed: (arrayPos, self) => {},

  /**
   * After reset
   * @param {Typed} self
   */
  onReset: (self) => {},

  /**
   * After stop
   * @param {number} arrayPos
   * @param {Typed} self
   */
  onStop: (arrayPos, self) => {},

  /**
   * After start
   * @param {number} arrayPos
   * @param {Typed} self
   */
  onStart: (arrayPos, self) => {},

  /**
   * After destroy
   * @param {Typed} self
   */
  onDestroy: (self) => {}
});
