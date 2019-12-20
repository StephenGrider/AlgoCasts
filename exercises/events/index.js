// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
  constructor () {
    this.eventsHandlers = {};
  }

  // Register an event handler
  on (eventName, callback) {
    if (this.eventsHandlers[eventName]) return this.eventsHandlers[eventName].push(callback);
    this.eventsHandlers[eventName] = [callback];
  }

  // Trigger all callbacks associated
  // with a given eventName
  trigger (eventName) {
    this.eventsHandlers[eventName] && this.eventsHandlers[eventName].forEach((callback) => callback());
  }

  // Remove all event handlers associated
  // with the given eventName
  off (eventName) {
    this.eventsHandlers[eventName] = [];
  }
}

module.exports = Events;