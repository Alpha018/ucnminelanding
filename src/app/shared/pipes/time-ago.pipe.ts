import {Pipe, PipeTransform, NgZone, ChangeDetectorRef, OnDestroy} from "@angular/core";

@Pipe({
  name: 'timeAgo',
  pure: false
})
export class TimeAgoPipe implements PipeTransform, OnDestroy {

  private timer: number;

  constructor(
    private changeDetectorRef: ChangeDetectorRef,
    private ngZone: NgZone,
  ) {
  }

  transform(value: string) {
    this.removeTimer();
    let d = new Date(value);
    let now = new Date();
    let seconds = Math.round(Math.abs((now.getTime() - d.getTime()) / 1000));
    let timeToUpdate = (Number.isNaN(seconds)) ? 1000 : TimeAgoPipe.getSecondsUntilUpdate(seconds) * 1000;
    this.timer = this.ngZone.runOutsideAngular(() => {
      if (typeof window !== 'undefined') {
        return window.setTimeout(() => {
          this.ngZone.run(() => this.changeDetectorRef.markForCheck());
        }, timeToUpdate);
      }
      return null;
    });
    let minutes = Math.round(Math.abs(seconds / 60));
    let hours = Math.round(Math.abs(minutes / 60));
    let days = Math.round(Math.abs(hours / 24));
    let months = Math.round(Math.abs(days / 30.416));
    let years = Math.round(Math.abs(days / 365));

    if (Number.isNaN(seconds)) {
      return '';
    } else if (seconds <= 45) {
      return 'hace unos segundos';
    } else if (seconds <= 90) {
      return 'hace un minuto';
    } else if (minutes <= 45) {
      return `hace ${minutes} minutos atrás`;
    } else if (minutes <= 90) {
      return 'hace una hora';
    } else if (hours <= 22) {
      return `hace ${hours} horas atrás`;
    } else if (hours <= 36) {
      return 'hace un día';
    } else if (days <= 25) {
      return `hace ${days} días atrás`;
    } else if (days <= 45) {
      return 'hace un mes';
    } else if (days <= 345) {
      return `hace ${months} meses atrás`;
    } else if (days <= 545) {
      return 'hace un año';
    } else { // (days > 545)
      return `hace ${years} años atrás`;
    }

  }

  ngOnDestroy(): void {
    this.removeTimer();
  }

  private removeTimer() {
    if (this.timer) {
      window.clearTimeout(this.timer);
      this.timer = null;
    }
  }

  private static getSecondsUntilUpdate(seconds: number) {
    let min = 60;
    let hr = min * 60;
    let day = hr * 24;
    if (seconds < min) { // less than 1 min, update every 2 secs
      return 2;
    } else if (seconds < hr) { // less than an hour, update every 30 secs
      return 30;
    } else if (seconds < day) { // less then a day, update every 5 mins
      return 300;
    } else { // update every hour
      return 3600;
    }
  }
}
