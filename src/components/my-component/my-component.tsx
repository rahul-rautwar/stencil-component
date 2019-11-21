import { Component, Event, EventEmitter, Method, Prop, h } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.css',
  shadow: true
})
export class MyComponent {
  /**
   * The placeholder text
   */
  @Prop() placeholder: string;

  /**
   * The input name
   */
  @Prop() name: string;

  /**
   * The class name
   */
  @Prop() class: string;
  /**
   * The type
   */
  @Prop() type: string;
  /**
  * The default value
  */
  @Prop() value: string;
  /**
* The disabled
*/
  @Prop() disabled = false
  /**
* The autoFocus
*/
  @Prop() autoFocus = false
  /**
* The height
*/
  @Prop() height: any
  /**
* The height
*/
  @Prop() width: any

  /**
   * Event listener for any changes in input field
   *
   * @type {EventEmitter}
   * @memberof Input
   */
  @Event() textValue: EventEmitter;


  /**
 * this method called on any change in input field
 * it validates the field information
 * @param {*} event
 * @memberof Input
 */
  @Method()
  async handleChange(event) {
    if (event && event.target) {
      this.textValue.emit({ value: event.target.value });
    }

  }

  render() {
    return <div>
      <p>My Stencil Input Component</p>

      <input
        class={this.class}
        type={this.type}
        name={this.name}
        placeholder={this.placeholder}
        value={this.value}
        onInput={event => this.handleChange(event)}
        disabled={this.disabled}
        autofocus={this.autoFocus}
        height={this.height}
        width={this.width}
      />
    </div>;
  }
}
