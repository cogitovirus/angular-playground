import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }
      
  particlesOptions = {
    fpsLimit: 60,
    backgroundMode: {
      enable: true,
      zIndex: -10
    },
    particles: {
      number: {
        value: 6,
        density: {
          enable: true,
          area: 600
        }
      },
      color: {
        value: [
          "#264653",
          "#2a9d8f",
          "#e9c46a",
          "#f4a261",
          "#e76f51"
        ]
      },
      shape: {
        type: "polygon",
        stroke: {
          width: 0,
          color: "#000000"
        },
        polygon: {
          sides: 5
        }
      },
      opacity: {
        value: 1,
        random: false,
        animation: {
          enable: false,
          speed: 1,
          minimumValue: 0.1,
          sync: false
        }
      },
      size: {
        value: 12,
        random: {
          enable: true,
          minimumValue: 5
        },
        animation: {
          enable: false,
          speed: 40,
          minimumValue: 0.1,
          sync: false
        }
      },
      lineLinked: {
        enable: true,
        distance: 150,
        color: "#000000",
        opacity: 0.2,
        width: 1
      },
      collisions: {
        bounce: {
          horizontal: {
            value: 2
          },
          vertical: {
            value: 2
          }
        },
        enable: true,
        mode: "bounce"
      },
      rotate: {
        random: {
          enable: true,
          minimumValue: 10
        },
        value: 90,
        direction: "counter-clockwise",
        animation: {
          enable: true,
          speed: 4,
        }
      },
      move: {
        enable: true,
        speed: 4,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        gravity: {
          enable: false,
          acceleration: 4,
          maxSpeed: 8
        },
        attract: {
          enable: true,
          rotateX: 1800,
          rotateY: 1200
        }
      }
    },
    interactivity: {
      detectsOn: "window",
      events: {
        onHover: {
          enable: true,
          mode: "bubble",
          parallax: {
            enable: false,
            force: 60,
            smooth: 10
          }
        },
        onClick: {
          enable: true,
          mode: "push"
        },
        onDiv: {
          enable: true,
          mode: "repulse",
          selectors: "#manifest",
          type: "rectangle"
        },
        resize: true
      },
      modes: {
        grab: {
          distance: 400,
          line_linked: {
            opacity: 1
          }
        },
        connect: {
          distance: 150,
          radius: 150,
          lineLinked: {
            opacity: 0.5
          }
        },
        bubble: {
          distance: 150,
          size: 25,
          duration: 20,
          opacity: 0.1
        },
        repulse: {
          distance: 10,
          duration: 10
        },
        push: {
          quantity: 1
        },
        remove: {
          quantity: 1
        }
      }
    },
    infection: {
      enable: true,
      delay: 1,
      cure: false,
      infections: 1,
      stages: [
        {
          color: "#e01e37",
          duration: 30,
          rate: 1,
          radius: 1
        },
        {
          color: "#da1e37",
          duration: 30,
          rate: 1,
          radius: 1
        },
        {
          color: "#c71f37",
          duration: 30,
          rate: 2,
          radius: 2
        },
        {
          color: "#bd1f36",
          duration: 30,
          rate: 2,
          radius: 2
        },
        {
          color: "#b21e35",
          duration: 30,
          rate: 3,
          radius: 3
        }
      ]

    },
    detectRetina: true
  }
}
