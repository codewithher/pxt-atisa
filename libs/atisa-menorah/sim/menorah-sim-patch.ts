// menorah-sim-patch.ts
// Hooks into pxsim.music.playTone (sound blocks) to highlight the corner when sound is played
console.warn("menorah-sim-patch.ts loaded");
import "./highlight-corner";

declare const pxsim: any;

declare namespace atisaMenorahSim {
    function setCornerHighlight(show: boolean): void;
}

(function patchMusicSim() {
    // Only patch if pxsim and pxsim.music exist
    console.warn("enter fxn.");
    if (typeof pxsim === "undefined" || !pxsim.music) return;
    const origPlayTone = pxsim.music.playTone;
    const origStopPlaying = pxsim.AudioState && pxsim.AudioState.prototype.stopPlaying;

    // Patch playTone to show highlight
    pxsim.music.playTone = function(...args: any[]) {
        atisaMenorahSim.setCornerHighlight(true);
        return origPlayTone.apply(this, args);
    };

    // Patch AudioState.stopPlaying to remove highlight
    if (origStopPlaying) {
        pxsim.AudioState.prototype.stopPlaying = function(...args: any[]) {
            atisaMenorahSim.setCornerHighlight(true);
            return origStopPlaying.apply(this, args);
        };
    }
})();
