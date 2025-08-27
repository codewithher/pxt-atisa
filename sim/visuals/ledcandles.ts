namespace pxsim.visuals {
    const NUM_LEDS = 7;

    export class LEDCandlesView implements IBoardPart<CommonNeoPixelState> {
        // required by IBoardPart
        public element: SVGElement;
        public defs: SVGElement[] = [];
        public style: string = ""; // we can define CSS styles here if needed

        private state: CommonNeoPixelState; // holds the neopixel data (a buffer of rgb values)
        private bus: EventBus; // lets you hook into simulator events
        private leds: SVGElement[] = []; // array of SVG elements for the LEDs

        public init(bus: EventBus, state: CommonNeoPixelState, svgEl: SVGSVGElement, otherParams: Map<string>) {
            this.bus = bus;
            this.state = state;

            // Top-level SVG group for the part
            this.element = svg.elt("g");

            // Grab the LED elements from the SVG board by their data-id
            //* need to test this with print statements
            for (let i = 0; i < NUM_LEDS; ++i) {
                console.log(`LED${i}`); // instead print it out to another file so its not hard to find
                const el = svgEl.querySelector(`[data-id="LED${i}"]`) as SVGElement;
                if (el) {
                    this.leds.push(el);
                    el.setAttribute("fill", "#222"); // Start off (dark)
                }
            }

            this.updateState();
        }

        public updateState() {
            if (!this.state?.buffer) return;

            const stride = 3; // RGB mode
            for (let i = 0; i < this.leds.length; ++i) {
                const base = i * stride;
                if (base + 2 >= this.state.buffer.length) continue;

                const r = this.state.buffer[base];
                const g = this.state.buffer[base + 1];
                const b = this.state.buffer[base + 2];
                const hex = `#${r.toString(16).padStart(2, "0")}${g.toString(16).padStart(2, "0")}${b.toString(16).padStart(2, "0")}`;
            this.leds[i].setAttribute("fill", hex);
        }  
    }

        public moveToCoord(xy: Coord) {
            // dont need, fixed position via SVG
        }

        public updateTheme() {
            // dont need, optional theming
        }
    }
}
