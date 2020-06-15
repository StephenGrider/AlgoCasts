// --- Directions
// Create an 'eventing' library out of the
// Events class.  The Events class should
// have methods 'on', 'trigger', and 'off'.

class Events {
  // Register an event handler
  on(eventName, callback) {}

  // Trigger all callbacks associated
  // with a given eventName
  trigger(eventName) {}

  // Remove all event handlers associated
  // with the given eventName
  off(eventName) {}
}

module.exports = Events;
