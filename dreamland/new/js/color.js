
const BASE = 128;
const PI = Math.acos(-1);
class Color {
    constructor(dTheta) {
        this.red = 0;
        this.blue = (PI / 3) * 2;
        this.green = (PI / 3) * 4;
        this.dTHETA=dTheta;
    }
    next_phase(phase) {
        var new_phase = phase + this.dTHETA;
        if (new_phase > PI) new_phase -= PI;
        return new_phase;
    }
    next_color() {
        this.red = this.next_phase(this.red);
        this.blue = this.next_phase(this.blue);
        this.green = this.next_phase(this.green);
    }
    phase_to_color(phase) {
        return Math.floor((1 + Math.sin(phase) * 0.95) * BASE).toString(16);
    }
    to_str() {
        var str = "#";
        str += this.phase_to_color(this.red);
        str += this.phase_to_color(this.green);
        str += this.phase_to_color(this.blue);
        return str;
    }
}