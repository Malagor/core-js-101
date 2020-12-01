/* ************************************************************************************************
 *                                                                                                *
 * Plese read the following tutorial before implementing tasks:                                   *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Object_initializer *
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object        *
 *                                                                                                *
 ************************************************************************************************ */


/**
 * Returns the rectagle object with width and height parameters and getArea() method
 *
 * @param {number} width
 * @param {number} height
 * @return {Object}
 *
 * @example
 *    const r = new Rectangle(10,20);
 *    console.log(r.width);       // => 10
 *    console.log(r.height);      // => 20
 *    console.log(r.getArea());   // => 200
 */
function Rectangle(width, height) {
  this.width = width;
  this.height = height;
  this.getArea = function area() {
    return this.width * this.height;
  };

  return this;
}


/**
 * Returns the JSON representation of specified object
 *
 * @param {object} obj
 * @return {string}
 *
 * @example
 *    [1,2,3]   =>  '[1,2,3]'
 *    { width: 10, height : 20 } => '{"height":10,"width":20}'
 */
function getJSON(obj) {
  return JSON.stringify(obj);
}


/**
 * Returns the object of specified type from JSON representation
 *
 * @param {Object} proto
 * @param {string} json
 * @return {object}
 *
 * @example
 *    const r = fromJSON(Circle.prototype, '{"radius":10}');
 *
 */
function fromJSON(/* proto, json */) {
  throw new Error('Not implemented');
  // console.log(proto, json);
  // const localProto = proto;
  // const jsn = JSON.parse(json);
  // console.log('localProto =>', jsn);
  // const keys = Object.keys(jsn);
  // keys.forEach((key) => {
  //   localProto[key] = jsn[key];
  // });
  // return localProto;
}


/**
 * Css selectors builder
 *
 * Each complex selector can consists of type, id, class, attribute, pseudo-class
 * and pseudo-element selectors:
 *
 *    element#id.class[attr]:pseudoClass::pseudoElement
 *              \----/\----/\----------/
 *              Can be several occurences
 *
 * All types of selectors can be combined using the combinators ' ','+','~','>' .
 *
 * The task is to design a single class, independent classes or classes hierarchy
 * and implement the functionality to build the css selectors using the provided cssSelectorBuilder.
 * Each selector should have the stringify() method to output the string repsentation
 * according to css specification.
 *
 * Provided cssSelectorBuilder should be used as facade only to create your own classes,
 * for example the first method of cssSelectorBuilder can be like this:
 *   element: function(value) {
 *       return new MySuperBaseElementSelector(...)...
 *   },
 *
 * The design of class(es) is totally up to you, but try to make it as simple,
 * clear and readable as possible.
 *
 * @example
 *
 *  const builder = cssSelectorBuilder;
 *
 *  builder.id('main').class('container').class('editable').stringify()
 *    => '#main.container.editable'
 *
 *  builder.element('a').attr('href$=".png"').pseudoClass('focus').stringify()
 *    => 'a[href$=".png"]:focus'
 *
 *  builder.combine(
 *      builder.element('div').id('main').class('container').class('draggable'),
 *      '+',
 *      builder.combine(
 *          builder.element('table').id('data'),
 *          '~',
 *           builder.combine(
 *               builder.element('tr').pseudoClass('nth-of-type(even)'),
 *               ' ',
 *               builder.element('td').pseudoClass('nth-of-type(even)')
 *           )
 *      )
 *  ).stringify()
 *    => 'div#main.container.draggable + table#data ~ tr:nth-of-type(even)   td:nth-of-type(even)'
 *
 *  For more examples see unit tests.
 */

const cssSelectorBuilder = {
  // prop: {
  //   element: null,
  //   id: null,
  //   class: [],
  //   attr: null,
  //   pseudoClass: [],
  //   pseudoElement: null,
  // },

  // element(value) {
  //   this.prop.element = value;
  //   return this;
  // },

  // id(value) {
  //   this.prop.id = value;
  //   return this;
  // },

  // class(value) {
  //   if (!this.prop.class.includes(value)) {
  //     this.prop.class.push(value);
  //   }

  //   return this;
  // },

  // attr(value) {
  //   this.prop.attr = value;
  //   return this;
  // },

  // pseudoClass(value) {
  //   if (!this.prop.pseudoClass.includes(value)) {
  //     this.prop.pseudoClass.push(value);
  //   }

  //   return this;
  // },

  // pseudoElement(value) {
  //   this.prop.pseudoElement = value;
  //   return this;
  // },

  // combine(selector1, combinator, selector2) {
  //   return `${selector1} ${combinator} ${selector2}`;
  // },

  // stringify() {
  //   console.log(this.prop);
  //   let resultStr = '';
  //   if (this.prop.element) resultStr += this.prop.element;
  //   if (this.prop.id) resultStr += `#${this.prop.id}`;

  //   // Classes
  //   if (this.prop.class.length) {
  //     let classesResult = '';
  //     this.prop.class.forEach((cls) => {
  //       classesResult += `.${cls}`;
  //     });
  //     resultStr += classesResult;
  //   }

  //   if (this.prop.attr) resultStr += `[${this.prop.attr}]`;

  //   // Pseudo Classes
  //   if (this.pseudoClass.length) {
  //     let pseudoClassesResult = '';
  //     this.prop.pseudoClass.forEach((cls) => {
  //       pseudoClassesResult += `:${cls}`;
  //     });
  //     resultStr += pseudoClassesResult;
  //   }

  //   if (this.prop.pseudoElement) resultStr += `::${this.prop.pseudoElement}`;

  //   this.prop.element = null;
  //   this.prop.id = null;
  //   this.prop.class = [];
  //   this.prop.attr = null;
  //   this.prop.pseudoClass = [];
  //   this.prop.pseudoElement = null;

  //   console.log('resultStr', resultStr);

  //   return resultStr;
  // },
};


module.exports = {
  Rectangle,
  getJSON,
  fromJSON,
  cssSelectorBuilder,
};
