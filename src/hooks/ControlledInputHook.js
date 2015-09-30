function ControlledInputHook(value) {
  this.value = value;
}

ControlledInputHook.prototype.hook = function hook(element) {
  if (this.value !== void 0) {
    element.value = this.value;
  }
};

export default ControlledInputHook;
