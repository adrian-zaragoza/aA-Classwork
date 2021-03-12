class Clock {
  constructor() {
    let date = new Date()
    this.hour = date.getHours();
    this.minutes = date.getMinutes();
    this.seconds = date.getSeconds();

    // 3. Call printTime.
    // 4. Schedule the tick at 1 second intervals.
  }

  Clock.prototype.printTime() {
    let hourString = this.hour;
    let minuteString = this.minutes;
    let secondString = this.seconds;
    console.log(`${this.hour}:${this.minutes}:${this.seconds}`);
  }

  _tick() {
    // 1. Increment the time by one second.
    // 2. Call printTime.
  }
}

const clock = new Clock();