function Audio() {
    function b() {
        e = !1;
        0 < a && (a--, e = !0, d.play())
    }
    var d, e, a;
    this.zto1548 = function() {
        if (void 0 === d) {
            e = !1;
            a = 0;
            var f = document.createElement("audio");
            f.src = "data:audio/wav;base64,UklGRnwIAABXQVZFZm10IBAAAAABAAEAIlYAACJWAAABAAgAZGF0YVgIAAB/f39/f39/f39/f35+fn5+fn59fX19fHx8fHx8fHx8fHx8fH+AgH59fnt/iYaRko6JeXZtcnV4hoKEd2trbWp0c3N5c3t/hpCYnZ2enp+fn5+enZ2cmZOGgHZsZGJiYV9fXl5gXmRkZ2JlZWZmZmZnaG9ycHFwcW9wc3Z2dXt9f4WIhomKioSIhYSJjJOPkpCTjZGKiI6JjIyJhoeEg4OJjouWk4aHgX6BhnyDfXaFgX+AgXZ8eXR2gn6AiYiJhoaJjIaMioWFgoeJg4B+f3+Hh4mIgYOCgoGDg4J5cnFzcHJubXJ0Z25tbHBuc3NwbG51dnx+eXyDfIB9fXp8fICAgoCAgHx+eX19eXl3dnh8fn5+f318fHqAgYODgYCCgoCAgYCAgICAg4WGhoWEhomGg4OCgoGAgH18eXp8fHt8fX+AgHx+gICDg4OFiImJiIeHiIeHiIeGhoaFhoeGhYmJh4N+fH+Ag4OBgYCAgICBgYGCgoKBgH9+fn+Cg4OAgH+Afn18eXl5eHl6d3d2dnV2dnh4d3p7e3x8fHp8enl5eHh4d3d3d3p8ent7ent8fnx/f36AgICAfnx8fH19fX1+fX59fXx8fH57eXl5e35+foCAgICAgIKCgoCAgIB/gICAgICAg4KBg4KDhISEhISDg4CBgICAgYKDhYOAgICBg4OCgYCAgIGBgH9/fn5+f4CAgH+AgICAf39+fX1+fn9/fn9+fn59fn19fn+AgYGAgIGAgICAgICAgYCAgICAgICAf35+fn19fXx8fHx8fX19fX19fX19fHx8fHx7e3t8fHx8fHx8fH19fX1+fn5+fn59fX19fX19fX19fn5/f3+AgICAgICAgICAgICAgICAf39/f4B/foCAf39+fn5+fX19fXx8fX5/f39/gICAgICAgICAgICAgICBgYGAgICAgICAgICAf4CAgICAf39/gICAgICAgICAgICAgICAgICAgICAgICAgICAgH9/gH9/f39/gICAgICAgH9/f39/f35+f35+f39+f39/fn5/f39/fn5+fX19fXx8fX18fX18fHx8fH19fXx8fHx8fHx8fHx8fHx9fH19fH19fn5+fn9+fn5+fn5+f39/f35+fn5+f39+fn5+fX1+fX59fX59fX1+fn19fn5+fn9/gH9+fn5+fn5/f3+Af39/f39/gICAgICAgICAgICAgICAgICAgICAgICAgICAgIB/f39+fn5/f39/f4CAgH+AgH9/f39+f35/f39/f39+fn9+fn5/f35+f39+fn59fn9+fn5+f39/f39+f35/f39/f39/f39/f4CAf35+fn5+f39/gICAf39/fn+Af39/gH9/gICAgICAgICAgICAgICAgICAgICAgICAf39/f4B/f3+AgICAgICAgICAgICAgICAgICAgICAgICAgH9/f3+Af35+fn1+fn19fX18fX19fX18fXx8fHx8fHx8fHx8fHx9fX59fH99fXx8f3x8gH1/foB/f39/f3yAf4B8gICAgX99foF8fn18fH1+fX57fX5+eX19fXx/f32Afn59fHx+fn19fIB+gH+AgH5/gH1/gH1+foCAgICAgH5+gICAgYCAgYCAgIB8f4B/f4B/f4GAfoCAgICAfoCAgICAgICAgICAfn+Af35+f35+f31/fnx+fn1+fX5+fn1+fn59fn19fX1/gH5+fX1+fn9+fX59gH9/f35+fn6AfoB/f4B/f39/gH+AgICAgH+AgICAgH+AgICAgICAgICAgICAgICAgICAgICAf3+AgH9+f39+fX9+fn1/fX5+fn5/fX5/fn5+fn5+fn5+f35+fn59fX1+fn5+fn9+fn5+fn1+fn5+fn9/f39+fn5+fn9/f4CAf4CAf4CAf4B/f39/fn9/f35/f39+fn+AgH9/f39/f39/f39/f39/f39/gICAgH9/f39/f39/f4B/gICAgICAgICAgICAgICAgIB/f3+Af39/fn9/f39/f39/f39/f39/f39/f35/f4CAf39/f39/f39/f39/gICAgIB/f39/f4CAf4B/f39/f39/f39/f39/f39/f39/f39/f39/f39/fn5/f39/gH9/gICAgH9/f39/gH9/f39/f39/f39/f39+f39/f39/f39/f39/f3+AgH9/gIB/f39/f39/f39/f39/f39/gH9/gH9/f4B+foCAfn6AgH5+gICAfoCAgH6Af4B+f3+Af36Af39+f39/fn+Afn6AgH5/f4B/f4B/f36AgIB+gH+Af3+AgH9+gH9/foCAgH+AgH9/f4CAgH+AgICAgICAf4B/f39/f3+Af3+Af39/f39/f39/f3+Af4CAgH+Af39/f39/f39/gH+AgICAf39/f39/f39/f4B/gICAf39/f39/f39/f39/f39/f4CAf4B/f3+Af39/f39/f39/f39/f39/f39/f39/f4B/f4B/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/gH9/f39/f39/f39/f4B/f3+Af39/gH9/gH9/f3+Af3+AgH9/gH+AgICAgH+Af4CAgH9/f4B/f4CAgH+AgH+AgIB/f3+Af39/gH9/f39/f39/f39/f39/f39/gICAgH+AgH9/f39/f39/f39/f39/f39/f39/gIB/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/gICAgIB/gIB/gICAgICAf3+AgH9/f39/f39/f39/f39/f39/f39/f39/f39/f39/f39/gH9/f4B/f39/f4CAgICAgICAgICAgICAgICAgICAgICAgICAgIB/f39/f3+AgH9/gICAf39/f38=";
            f.setAttribute("preload", "auto");
            f.setAttribute("controls", "none");
            f.style.display = "none";
            document.body.appendChild(f);
            d = f;
            d.onpause = b
        }
    };
    this.zto1550 = function() {
        zto923(0) ? e ? a += 100 > a ? 1 : 0 : (e = !0, d.play()) : a = 0
    }
}

//SUQzBAAAAAAAI1RTU0UAAAAPAAADTGF2ZjU4Ljc2LjEwMAAAAAAAAAAAAAAA//tUwAAAAAAAAAAAAAAAAAAAAAAASW5mbwAAAA8AAAACAAACQACqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq//////////////////////////////////////////////////////////////////8AAAAATGF2YzU4LjEzAAAAAAAAAAAAAAAAJANrAAAAAAAAAkBOYyPRAAAAAAAAAAAAAAAAAAAA//tUxAAACSixLxQ2AAFeqa/3HqACAAwAAHDgYGBucQDdz7T7zSnXXvsE8/gWMksEwPqzszP1/sHBgeL3/pTb3odr/pTr/i9+83uvfxe/862vfYMz+yxY5IPgg7/wwr77//aWSIG2EgEttpyMmjFfBzN0SjE2Q3d3l9RrEYtzTUMQjabag/fCxIgWzRYPHhQDg9U2LX/T6fmGP4rC2n2N/57n9d1/lD/7X/uw6xn/Rv+o+Ijr/Dr8fj8ei0Ei0Ngg//tUxAUACrUzgbiVABkEFtmDhGABSBgUAOlwsX/kHyWH7iMmV/GAmIK2IsXhMJzhl5oN1PATFslEWK5h1hV+ikJckMbU078jJv//6qjIa4kc6hx3+Ouqdk///6kpFps1D9qGQxpQEsxpFHDiVGkXBSMEgEk5oMAiWkQCiUSyq2ZlqnP//+8z6rZlyJGCQUk5pIkS00iixLArEVkCu/3AvBuNTEFNRTMuMTAwVVVVVVVVVVVVVVVVVVVVVVVVVVVV

//SUQzBAAAAAAAM1REUkMAAAAGAAADMjAyMgBUU1NFAAAADwAAA0xhdmY1OC43Ni4xMDAAAAAAAAAAAAAAAP/7QMAAAAAAAAAAAAAAAAAAAAAAAEluZm8AAAAPAAAAAgAAAlcApqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampqampv//////////////////////////////////////////////////////////////////AAAAAExhdmM1OC4xMwAAAAAAAAAAAAAAACQDTAAAAAAAAAJXJsUq4AAAAAAA//tQxAAACfxLY7QTAAF9JvE/EtACjSRAAAAAEAAxjHGMYwAAQAAAC7u7uzyYACMPJkyZNNAEAQBAEAfB8HwfBwEAQBAMA+D4Pg+BAQBAEAQB8+IAQDP+UdoD//y4OAg7///8uD8PEREw7M5mau/+grbAEjABaFYKjpZEk4kCoJA5NNQ0YjFc1JIcxuChTLAcB83EnmlKShw6sZ1kiYHTFqR11vWktJfV/13SfGMaq8d571lFf////+lRNRkoo3+PhR/5k6p1CFCGd0BACGf4UP/7UsQFgAu5H2/4uQIQ4gvcK4IwABgUBkAApMmt8UiNF+eB0dIPkpBxZ0dGHMA+wO2kTR/gNwMyKRSHOIMam5nyyeOGqJ08ZMv6VVv/7qDAxPL9Fv/bWympf//9Ua47l/5DX//1P/BoA+AAcGW3P+YVEKYaq7MdWhRJMBNVOrxj6K+//h1Z0RFjwlGHiOW///KnREPOgqoOlf///eDSw0WqTEFNRTMuMTAwqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqqq

//geiger1.wav, select2.wav