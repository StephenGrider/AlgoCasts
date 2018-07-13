// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
  constructor(){
    //our property will be the name of the event.
    //the values for each property will a list of callback functions 
    //to be triggered
    this.events = {};
  }
  // Register an event handler
  on(eventName, callback) {
    if (!this.events[eventName]){
      this.events[eventName] = [callback];
    }
    else{
      this.events[eventName].push(callback);
    }
  }

  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName) {
    if (this.events[eventName]){
      this.events[eventName].forEach(cb => cb());
    }
  }

  // Remove all event handlers associated
  // with the given eventName
  off(eventName) {
    if (this.events[eventName]){
      delete this.events[eventName];
    }
  }
}

module.exports = Events;
